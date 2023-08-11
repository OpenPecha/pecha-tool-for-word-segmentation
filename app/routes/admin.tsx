import { User } from "@prisma/client";
import { LoaderFunction, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import React, { useState } from "react";
import { getAprovedGroup } from "~/model/text";
import { getUser, getUsers } from "~/model/user";

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
                <th>User</th>
                <th>Role</th>
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
  let url = `/admin/${user.username}?session=${Admin.username}`;
  return (
    <tr>
      <td>
        <Link to={url} style={{ textDecoration: "none", color: "inherit" }}>
          {user.username}
        </Link>
      </td>
      <td>{user.role}</td>
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
