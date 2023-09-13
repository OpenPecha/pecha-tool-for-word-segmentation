import { useFetcher, useLoaderData } from "@remix-run/react";
import React from "react";
import Papa from "papaparse";
import useParseData from "../hooks/useParseData";

function UploadText() {
  const [data, setData] = React.useState("");
  const [fileName, setFileName] = React.useState("");
  const dataUpload = useFetcher();
  const { lastbatch } = useLoaderData();
  const startBatch = lastbatch ? lastbatch.batch + 1 : null;
  const csvData = useParseData(data, fileName, startBatch);
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      let filename = file.name;
      if (filename.includes(".txt")) {
        filename = filename.replace(".txt", "");
      }
      setFileName(filename);
      const reader = new FileReader();
      reader.onload = (event) => {
        setData(event.target.result);
      };
      reader.readAsText(file);
    }
  };

  const handleUpload = () => {
    if (csvData?.length < 1) return null;
    const value = JSON.stringify(csvData);
    try {
      dataUpload.submit(
        {
          name: fileName,
          data: value,
        },
        {
          method: "POST",
          action: "/api/upload",
        }
      );
    } catch (error) {
      console.error(error);
    } finally {
      setData("");
      setFileName("");
    }
  };
  return (
    <div className="float-right mb-2 flex gap-3 items-center">
      {dataUpload.data?.error && (
        <div className="text-red-600">{dataUpload.data.error}</div>
      )}
      <input
        type="file"
        accept=".txt"
        onChange={handleFileInputChange}
        className="file-input file-input-bordered w-full max-w-xs"
      />
      <button
        onClick={handleUpload}
        className=" bg-green-300 btn-sm rounded-md min-h-0"
      >
        {dataUpload.state !== "idle" ? <div>uploading</div> : <>upload</>}
      </button>{" "}
    </div>
  );
}

export default UploadText;
