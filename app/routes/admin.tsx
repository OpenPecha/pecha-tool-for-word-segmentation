import { User } from "@prisma/client";
import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { Form, Link, useFetcher, useLoaderData } from "@remix-run/react";
import React, { useMemo, useRef, useState } from "react";
import { getAprovedGroup } from "~/model/text";
import { getUser, getUsers, removeBatchFromUser } from "~/model/user";
import { FiEdit2 } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
export const loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  let session = url.searchParams.get("session");
  if (!session) return redirect("/error");
  let user: User | null = await getUser(session);
  let users: User[] = await getUsers();
  let groups = await getAprovedGroup();
  return { user, users, groups };
};

export const action: ActionFunction = async ({ request }) => {
  let formdata = await request.formData();
  if (request.method === "DELETE") {
    let batch = formdata.get("batch") as string;
    let userId = formdata.get("id") as string;
    let removed = await removeBatchFromUser(parseInt(batch), userId);
    return removed;
  }
};
function admin() {
  let { user, users } = useLoaderData();
  let [search, setSearch] = useState("");

  users = users.sort(
    (a, b) => b.assigned_batch.length - a.assigned_batch.length
  );
  let colorScheme = [
    { color: "lightblue", text: "all accepted" },
    { color: "pink", text: "some rejected" },
    { color: "yellow", text: "some Ignored" },
    { color: "lightgreen", text: "all reviewed" },
  ];
  let list = useMemo(
    () => users.filter((data) => data.username.includes(search)),
    [users]
  );
  return (
    <div className="p-3">
      <div className="flex justify-between">
        <Link
          to={`/?session=${user.username}`}
          className="text-white bg-gray-500 p-2"
        >
          Home
        </Link>
        <div className="flex items-center mr-3">
          {colorScheme?.map((data) => {
            return (
              <div className="flex gap-2 items-center" key={data.color}>
                <span
                  style={{
                    display: "inline-block",
                    width: 20,
                    height: 20,
                    marginInline: 10,
                    backgroundColor: data.color,
                    border: "1px solid black",
                  }}
                ></span>
                {data.text}
              </div>
            );
          })}
        </div>
      </div>
      <h2>Users:</h2>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search"
        className="input input-bordered w-full max-w-xs"
      />
      {users.length > 0 && (
        <div className="overflow-x-auto max-h-[80dvh] overflow-y-scroll">
          <table className="table">
            <thead>
              <tr>
                <th>user</th>
                <th>Role</th>
                <th>Active</th>
                <th>total reviewed</th>
                <th>Assigned Jobs</th>
              </tr>
            </thead>
            <tbody>
              {list.map((user: User) => (
                <Users user={user} key={user.id} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default admin;

function Users({ user }: { user: User }) {
  let { groups, user: Admin } = useLoaderData();
  const [openEdit, setOpenEdit] = useState(false);
  const inputRef = useRef();
  let url = `/admin/${user.username}?session=${Admin.username}`;
  const fetcher = useFetcher();
  const userfetcher = useFetcher();
  const reviewed_count = user?.text.filter((item) => item.reviewed).length;
  function handleSubmit() {
    let value = inputRef.current.value;
    if (!value) return;
    fetcher.submit(
      {
        id: user.id,
        nickname: value,
        action: "change_nickname",
      },
      {
        action: "/api/user",
        method: "POST",
      }
    );
    setOpenEdit(false);
  }
  function handleChangeRole() {
    fetcher.submit(
      {
        id: user.id,
        allow: !user.allow_assign,
        action: "change_allow_assign",
      },
      {
        action: "/api/user",
        method: "POST",
      }
    );
  }
  let addGroup = (e) => {
    let nextGroup = select[0];
    if (typeof nextGroup === "undefined") alert("no more group to assign");
    if (nextGroup > -1)
      userfetcher.submit(
        { group: nextGroup, id: user.id },
        {
          method: "POST",
        }
      );
  };
  let removeBatch = (e) => {
    if (groups[e].rejected) {
      alert(
        "group contain rejected data, contact the annotator to either ignore or accept!"
      );
      return null;
    }
    let c = confirm("Are you sure you want to remove this group from user?");
    if (c)
      userfetcher.submit(
        { batch: e, id: user.id },
        {
          method: "DELETE",
        }
      );
  };
  let adding =
    userfetcher.formData?.get("id") === user.id &&
    fetcher.formMethod === "POST";
  let removing =
    userfetcher.formData?.get("id") === user.id &&
    fetcher.formMethod === "DELETE";
  return (
    <tr>
      <td className="flex gap-2">
        <div className="flex gap-2">
          {!openEdit ? (
            <>
              {user.nickname}
              <button onClick={() => setOpenEdit(true)}>
                <FiEdit2 />
              </button>
            </>
          ) : (
            <>
              {" "}
              <input
                type="text"
                defaultValue={
                  user.nickname === user.username ? "" : user.nickname
                }
                name="nickname"
                ref={inputRef}
                className="input input-xs input-bordered w-full max-w-xs"
              />
              <button type="button" onClick={handleSubmit}>
                <TiTick color="green" size={24} />
              </button>
              <button type="button" onClick={() => setOpenEdit(false)}>
                <ImCross color="red" size={20} />
              </button>
            </>
          )}
        </div>
        (
        <Link to={url} style={{ textDecoration: "none", color: "inherit" }}>
          {user.username}
        </Link>
        )
      </td>
      <td>{user.role}</td>
      <td>
        <input
          type="checkbox"
          className={`toggle toggle-success ${
            fetcher.state !== "idle" &&
            "cursor-not-allowed opacity-50 pointer-events-non"
          }`}
          checked={user?.allow_assign!}
          onChange={handleChangeRole}
          aria-label="Toggle_role"
        />
      </td>
      <td>{reviewed_count}</td>
      <td className="flex gap-2 ">
        {user.assigned_batch.map((item) => {
          return (
            <span
              className="bg-green-300  mr-1 cursor-pointer p-2 border-2 border-gray-500"
              onClick={() => removeBatch(item)}
              key={item}
              style={{
                background: groups[item].reviewed
                  ? "lightgreen"
                  : groups[item].approved
                  ? "lightblue"
                  : groups[item].ignored.includes(user.username)
                  ? "yellow"
                  : groups[item].rejected
                  ? "pink"
                  : "white",
              }}
            >
              {item}{" "}
            </span>
          );
        })}
      </td>
    </tr>
  );
}
