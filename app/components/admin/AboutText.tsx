import { useFetcher, useLoaderData } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import { BiSolidCloudDownload } from "react-icons/bi";
import { downloadJsonlFile } from "~/lib/downloadfile";
import UploadText from "./UploadText";
import { TiDelete } from "react-icons/ti";
type Text_Props = {
  version: string;
  category: string;
  count: number;
};

function AboutText() {
  const { texts, user } = useLoaderData();
  return (
    <>
      {user.role === "ADMIN" && <UploadText />}
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium bg-gray-300 dark:bg-slate-600 ">
          <h2>Category</h2>
        </div>
        <div className="collapse-content">
          {texts.map((text: Text_Props) => {
            return <Text_Category text={text} key={text.version} />;
          })}
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mt-3">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium bg-gray-300 dark:bg-slate-600 ">
          <h2>Downloads</h2>
        </div>
        <div className="collapse-content">
          {texts.map((text: Text_Props) => {
            return <DownloadText text={text} key={text.version} />;
          })}
        </div>
      </div>
    </>
  );
}

function Text_Category({ text }: { text: Text_Props }) {
  const [hasChanges, setHasChanges] = React.useState(false);
  const [value, setValue] = React.useState<null | string>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { user } = useLoaderData();
  const isAdmin = user?.role === "ADMIN";
  const fetcher = useFetcher();
  function handleSubmit(e) {
    e.preventDefault();
    if (!isAdmin) return null;
    let category = inputRef.current?.value;
    fetcher.submit(
      {
        _action: "change_category",
        version: text.version,
        category: category!,
      },
      {
        method: "PATCH",
        action: "/api/text",
      }
    );
    setHasChanges(false);
  }
  function handleDelete() {
    fetcher.submit(
      {
        version: text.version,
      },
      {
        method: "DELETE",
        action: "/api/text",
      }
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="text-center flex w-full px-2 justify-between mt-2"
    >
      <div className="flex items-center gap-2">
        <h4 className=" font-bold text-sm">
          {text.version}{" "}
          <div className="text-gray-600 text-xs float-center">
            count:{text?.count}
          </div>
        </h4>
        {user.role === "ADMIN" && (
          <button onClick={handleDelete} type="button">
            <TiDelete />
          </button>
        )}
      </div>
      <input hidden name="_action" readOnly value="change_category"></input>
      <div className="flex gap-2 items-center">
        <input
          ref={inputRef}
          type="text"
          name="category"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs max-h-8"
          value={value ?? text.category}
          onChange={(e) => {
            setHasChanges(e.target.value !== text.category);
            setValue(e.target.value);
          }}
        />
        {hasChanges && (
          <button
            onClick={handleSubmit}
            className="cursor-pointer bg-green-300 py-1 px-2 rounded"
            disabled={!isAdmin}
          >
            Save
          </button>
        )}
      </div>
    </form>
  );
}

function DownloadText({ text }: { text: Text_Props }) {
  let fetcher = useFetcher();
  function handleDownload() {
    fetcher.load(`/api/text/${text.version}`);
  }
  useEffect(() => {
    if (fetcher.data) {
      downloadJsonlFile(fetcher.data, text.version);
    }
  }, [fetcher.data]);
  return (
    <div className="text-center flex w-full px-2 justify-between mt-2">
      <h4 className="text-lg font-bold">{text.version}</h4>
      <div className="flex gap-2">
        <button
          onClick={handleDownload}
          className="flex gap-2 items-center cursor-pointer hover:bg-green-300 px-2 rounded"
        >
          <BiSolidCloudDownload />
          Download
        </button>
      </div>
    </div>
  );
}

export default AboutText;
