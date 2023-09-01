import { User } from "@prisma/client";
import {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
  defer,
  redirect,
} from "@remix-run/node";
import {
  Link,
  useFetcher,
  useLoaderData,
  useRevalidator,
} from "@remix-run/react";
import { useRef, useState, useEffect } from "react";
import { getAprovedBatch, getProgress } from "~/model/server.text";
import { getUser, getUsers, removeBatchFromUser } from "~/model/server.user";
import { FiEdit2 } from "react-icons/fi";
import { useSocket } from "~/components/contexts/SocketContext";
import AssignCategory from "~/components/AssignCategory";
import { getCategories } from "~/model/utils/server.category";
import AssignNickName from "~/components/AssignNickName";
import AssignReviewer from "~/components/AssignReviewer";
import Drawer from "react-modern-drawer";

export const loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  let session = url.searchParams.get("session");
  if (!session) return redirect("/error");
  let admin = await getUser(session);
  let users = await getUsers();
  let groups = await getAprovedBatch();
  let progress = await getProgress();
  let reviewers = users.filter((user) => user.role === "REVIEWER");
  let categories = await getCategories();
  return defer({ admin, users, groups, progress, reviewers, categories });
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

export function meta() {
  return [
    { title: "Admin Dashboard" },
    {
      name: "description",
      content: "admin dashboard for word segmentation , pecha tools",
    },
  ];
}

type UserType = User & { reviewer: User[]; nickname: string };

function admin() {
  let { admin, users, progress, reviewers } = useLoaderData();
  let [search, setSearch] = useState("");
  let [selectedReviewer, setSelectedReviewer] = useState("All");
  let dashboardRef = useRef<HTMLDialogElement>(null);
  users = users.sort(
    (a, b) => b.assigned_batch.length - a.assigned_batch.length
  );
  let colorScheme = [
    { color: "bg-blue-300", text: "Ready" },
    { color: "bg-red-300", text: "Some Rejected" },
    { color: "bg-green-300", text: "All Accepted" },
  ];
  let isReviewer = admin.role === "REVIEWER";
  let list = users.filter((user: User) => user.username.includes(search));

  if (selectedReviewer !== "All") {
    list = list.filter(
      (user: User & { reviewer: User }) =>
        user?.reviewer?.username === selectedReviewer ||
        user?.username === selectedReviewer
    );
  }
  let isAdmin = admin.role === "ADMIN";
  if (isReviewer) {
    list = list.filter((user: User) => user.reviewer_id === admin.id);
  }
  function handleReviewerChange(e) {
    let selectedReviewer = e.target.value;
    setSelectedReviewer(selectedReviewer);
  }
  return (
    <div className="p-3">
      <div className="flex flex-col justify-between md:flex-row gap-4">
        <div className="flex gap-2">
          <Link to={`/?session=${admin.username}`} className="btn">
            Home
          </Link>
          <button
            className="btn p-2"
            onClick={() => dashboardRef?.current?.showModal()}
          >
            Dashboard
          </button>
        </div>
        <div
          className="tooltip tooltip-bottom"
          data-tip={`${progress.reviewed} / ${progress.total}`}
        >
          <div className="md:text-center">Progress</div>

          <progress
            className="progress progress-success w-56"
            max={progress.total}
            value={progress.reviewed}
          ></progress>
        </div>
        <dialog id="my_modal_3" ref={dashboardRef} className="modal">
          <form method="dialog" className="modal-box w-11/12 max-w-5xl">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <iframe
              src="https://metabase.pecha.tools/public/dashboard/4e6afb12-9c15-48cc-afd4-61e52887ad80"
              style={{ border: 0, width: "100%", height: "80vh" }}
              allowtransparency="true"
            ></iframe>
          </form>
        </dialog>

        <div className="flex items-center gap-2">
          {colorScheme?.map((data) => {
            return (
              <div className="flex gap-2 items-center" key={data.color}>
                <span
                  className={`inline-block w-4 h-4 rounded-full ${data.color} border-2 border-gray-300]`}
                ></span>
                {data.text}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 mt-2 justify-between">
        <div className="flex gap-2  items-center flex-1">
          <h2>Users:</h2>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {isAdmin && (
          <div className="flex gap-2  items-center flex-1">
            <label htmlFor="reviewer-select">Select Reviewer: </label>
            <select
              id="reviewer-select"
              className="select select-bordered w-full max-w-xs"
              onChange={handleReviewerChange}
              value={selectedReviewer}
            >
              <option value={"All"}>All</option>
              {reviewers.map((reviewer: User) => (
                <option
                  value={reviewer.username}
                  key={reviewer.id + "-key-selection"}
                >
                  {reviewer.username}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      {users.length > 0 && (
        <div className="overflow-x-auto max-h-[80dvh] overflow-y-scroll">
          <table className="table">
            <thead className="sticky top-0 bg-white shadow-md">
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Active</th>
                <th>Approved/Reviewed</th>
                <th>Assigned Jobs</th>
              </tr>
            </thead>
            <tbody>
              {list.map((user: UserType) => (
                <Users user={user} key={user.id} admin={admin} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default admin;

function Users({ user, admin }: { user: UserType; admin: User }) {
  let { groups } = useLoaderData();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const dialogRef = useRef<HTMLDialogElement>(null);
  const socket = useSocket();
  let url = `/admin/${user.username}?session=${admin.username}`;
  const fetcher = useFetcher();
  const userfetcher = useFetcher();
  const reviewed_count = user?.text.filter((item) => item.reviewed).length;
  const approved_count = user.text.length;
  const reval = useRevalidator();
  const className = "";
  useEffect(() => {
    if (!socket) return;
    socket.on("text-status-changed", (data) => {
      reval.revalidate();
    });
  }, [socket]);

  function handleChangeAllow() {
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
    socket?.emit("change-allow", { user });
  }

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

  let removing =
    userfetcher.formData?.get("id") === user.id &&
    fetcher.formMethod === "DELETE";

  function Info({ children }) {
    return (
      <div className="flex justify-between items-center px-2 text-lg">
        {children}
      </div>
    );
  }

  return (
    <tr>
      <td className="flex gap-2">
        <div className="flex gap-2">
          <Link to={url} className="text-inherit">
            {fetcher?.formData?.get("nickname") || user.nickname}
          </Link>

          <button onClick={toggleDrawer}>
            <FiEdit2 />
          </button>

          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            style={{ width: "40vw" }}
            className="min-w-fit p-3"
          >
            <div className="text-xl ">User Information</div>
            <br />
            <Info>
              Name:
              <AssignNickName user={user} />
            </Info>
            <Info>
              Email: <div>{user.username}</div>
            </Info>
            <Info>
              Reviewer:
              <AssignReviewer user={user} />
            </Info>
            <Info>
              Category:
              <AssignCategory
                user={user}
                editable={user.role === "REVIEWER" || user.role === "ADMIN"}
              />
            </Info>
          </Drawer>
        </div>
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
          onChange={handleChangeAllow}
          aria-label="Toggle_role"
        />
      </td>
      <td>
        {approved_count}/{reviewed_count}
      </td>
      <td className="flex gap-2 ">
        {user.assigned_batch.map((item) => {
          return (
            <span
              className=" text-black  mr-1 cursor-pointer p-1 border-2 rounded border-gray-300"
              onClick={() => removeBatch(item)}
              key={item}
              style={{
                background: groups[item].rejected
                  ? "pink"
                  : groups[item].reviewed
                  ? "lightgreen"
                  : groups[item].approved
                  ? "lightblue"
                  : "white",
              }}
            >
              {item}
            </span>
          );
        })}
        {removing && <div>wait</div>}
      </td>
    </tr>
  );
}
