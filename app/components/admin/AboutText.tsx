import { useFetcher, useLoaderData } from "@remix-run/react";
import React from "react";

type Text_Props = {
  version: string;
  category: string;
};

function AboutText() {
  const { texts } = useLoaderData();
  const categoryFetcher = useFetcher();

  return (
    <>
      <h2>Category</h2>
      {texts.map((text: Text_Props) => {
        return (
          <Text text={text} key={text.version} fetcher={categoryFetcher} />
        );
      })}
    </>
  );
}

function Text({ text }: { text: Text_Props }) {
  const [hasChanges, setHasChanges] = React.useState(false);
  const [value, setValue] = React.useState<null | string>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const fetcher = useFetcher();
  function handleSubmit(e) {
    e.preventDefault();
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
      className="text-center flex w-full px-2 justify-between mt-2"
    >
      <h4 className="text-lg font-bold">{text.version}</h4>
      <input hidden name="_action" readOnly value="change_category"></input>
      <div className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          name="category"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
          value={value ?? text.category}
          onChange={(e) => {
            setHasChanges(true);
            setValue(e.target.value);
          }}
        />
        {hasChanges && (
          <button onClick={handleSubmit} className="cursor-pointer">
            Save
          </button>
        )}
      </div>
    </form>
  );
}

export default AboutText;
