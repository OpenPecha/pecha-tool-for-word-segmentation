import { useFetcher, useLoaderData, Await } from "@remix-run/react";
import React, { useEffect, useState, Suspense } from "react";
import { BiSolidCloudDownload } from "react-icons/bi/index.js";
import { downloadJsonlFile } from "~/lib/downloadfile";
import UploadText from "./UploadText";
import { MdDelete } from "react-icons/md/index.js";
import { SlOptionsVertical } from "react-icons/sl/index.js";
type Text_Props = {
  version: string;
  category: string;
  count: number;
  completed_count: number;
};

function AboutText() {
  const { texts, user } = useLoaderData();
  return (
    <>
      {user.role === "ADMIN" && <UploadText />}
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={texts}>
          {(data) => (
            <div>
              {data.map((text: Text_Props) => {
                return <Text_Category text={text} key={text.version} />;
              })}
            </div>
          )}
        </Await>
      </Suspense>
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

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex w-full px-2 justify-between mt-2"
    >
      <div className="flex items-center gap-2">
        <h4 className=" font-bold text-sm">
          {text.version}{" "}
          <div className="text-gray-600 text-xs float-center">
            count:{text?.count} completed:{text?.completed_count}
          </div>
        </h4>
      </div>
      <input hidden name="_action" readOnly value="change_category"></input>
      <div className="flex gap-2 items-center">
        category:
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
      <div className="dropdown dropdown-hover dropdown-left">
        <label tabIndex={0} className=" m-1">
          <SlOptionsVertical />
        </label>
        <TextSettings text={text} />
      </div>
    </form>
  );
}

function TextSettings({ text }: { text: Text_Props }) {
  let download_fetcher = useFetcher();

  let fetcher = useFetcher();
  const { user } = useLoaderData();

  function handleDownload() {
    download_fetcher.load(`/api/text/${text.version}`);
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
  useEffect(() => {
    if (download_fetcher.data) {
      downloadJsonlFile(fetcher.data, text.version);
    }
  }, [download_fetcher.data]);
  return (
    <ul
      tabIndex={0}
      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li>
        <button
          onClick={handleDownload}
          className="flex gap-2 items-center cursor-pointer hover:bg-green-300 px-2 rounded"
          type="button"
        >
          <BiSolidCloudDownload />
          Download
        </button>
      </li>
      <li>
        {user.role === "ADMIN" && (
          <button
            onClick={handleDelete}
            type="button"
            className="flex gap-2 items-center cursor-pointer hover:bg-red-300 px-2 rounded"
          >
            <MdDelete />
            Delete
          </button>
        )}
      </li>
    </ul>
  );
}

export default AboutText;
