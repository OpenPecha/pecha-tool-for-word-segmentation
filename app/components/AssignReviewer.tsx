import React, { useId } from "react";
import { FiEdit2 } from "react-icons/fi";
import { useFetcher, useLoaderData } from "@remix-run/react";
import Select from "react-tailwindcss-select";
import { User } from "@prisma/client";

interface Option {
  value: string;
  label: string;
}

function AssignReviewer({ user }: { user: any }) {
  const { reviewers } = useLoaderData();
  const modalref = React.useRef<HTMLDialogElement>(null);
  let options: Option[] = reviewers.map((c: User) => ({
    value: c.username,
    label: c.username,
  }));

  let fetcher = useFetcher();
  function handleChange(data: any) {
    let reviewer = data.value;
    if (!reviewer) {
      data = "";
    }
    let i = confirm(
      "do you want " +
        reviewer +
        " to be the reviewer of " +
        user.nickname +
        "?"
    );
    if (i) {
      fetcher.submit(
        {
          id: user.id,
          reviewer,
          action: "change_reviewer",
        },
        {
          method: "POST",
          action: "/api/user",
        }
      );
    }
  }
  let value = {
    value: user.reviewer?.username,
    label: user.reviewer?.username,
  };
  let input_id = useId();
  return (
    <div className="flex gap-2">
      {user?.reviewer?.username}
      {true && (
        <label htmlFor={input_id} className="cursor-pointer">
          <FiEdit2 />
        </label>
      )}
      <input type="checkbox" id={input_id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl h-[200px]">
          <h3 className="font-bold text-lg">Select Categories</h3>
          <Select
            isMultiple={false}
            value={value}
            primaryColor="green"
            onChange={handleChange}
            options={options}
            isSearchable
            loading={fetcher.state !== "idle"}
          />
          <div className="modal-action">
            <label htmlFor={input_id} className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignReviewer;
