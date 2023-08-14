import { User } from "@prisma/client";
import { LoaderFunction, redirect } from "@remix-run/node";
import { Form, Link, useFetcher, useLoaderData } from "@remix-run/react";
import React, { useRef, useState } from "react";
import { getAprovedGroup } from "~/model/text";
import { getUser, getUsers } from "~/model/user";
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

function admin() {
  let { user, users } = useLoaderData();
  let [search, setSearch] = useState("");

  users = users
    ?.filter((user) => {
      return user.role !== "ADMIN";
    })
    .sort((a, b) => b.assigned_batch.length - a.assigned_batch.length);
  let colorScheme = [
    { color: "lightblue", text: "all accepted" },
    { color: "pink", text: "some rejected" },
    { color: "yellow", text: "some Ignored" },
    { color: "lightgreen", text: "all reviewed" },
  ];
  let list = users.filter((data) => data.username.includes(search));
  return (
    <div className="p-3">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link
          to={`/?session=${user.username}`}
          style={{
            textDecoration: "none",
            color: "white",
            background: "gray",
            padding: 10,
          }}
        >
          Home
        </Link>
        <div style={{ display: "flex", alignItems: "center", marginRight: 10 }}>
          {colorScheme?.map((data) => {
            return (
              <div style={{ display: "flex", alignItems: "center" }}>
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
  const reviewed_count = user.text.filter((item) => item.reviewed).length;
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
        role: user.role === "ANNOTATOR" ? "USER" : "ANNOTATOR",
        action: "change_role",
      },
      {
        action: "/api/user",
        method: "POST",
      }
    );
  }
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
          checked={user.role === "ANNOTATOR"}
          onChange={handleChangeRole}
          aria-label="Toggle_role"
        />
      </td>
      <td>{reviewed_count}</td>
      <td className="flex gap-2 ">
        {user.assigned_batch.map((item) => {
          return (
            <span
              className="bg-green-300 p-1"
              key={item}
              style={{
                marginRight: 5,
                border: "1px solid gray",
                padding: 3,
                cursor: "pointer",
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
