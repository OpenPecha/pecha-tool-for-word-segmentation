import { User } from "@prisma/client";
import {
  LoaderFunction,
  V2_MetaFunction,
  json,
  redirect,
} from "@remix-run/node";
import UserListCard from "~/components/admin/UserListCard";
import { useEffect } from "react";
import { getAprovedBatch } from "~/model/server.text";
import { getUser, getUsers } from "~/model/server.user";
import {
  Outlet,
  useLoaderData,
  useOutletContext,
  useRevalidator,
} from "@remix-run/react";
import { useSocket } from "~/components/contexts/SocketContext";
import { toolname } from "~/const";

export const loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  let session = url.searchParams.get("session");
  if (!session) return redirect("/error");
  let admin = await getUser(session);
  let users: User[] = await getUsers();
  let groups = await getAprovedBatch();
  users = users.sort(
    (a, b) => b.assigned_batch.length - a.assigned_batch.length
  );
  if (admin?.role !== "ADMIN") {
    users = users
      .filter(
        (user) => user.reviewer_id === null || user.reviewer_id === admin?.id
      )
      .sort((a, b) => {
        if (a.reviewer_id === null && b.reviewer_id !== null) {
          return 1; // a should come after b
        } else if (a.reviewer_id !== null && b.reviewer_id === null) {
          return -1; // a should come before b
        } else {
          return 0; // no change in order
        }
      });
  }
  return json({
    users,
    groups,
  });
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: `Admin page | ${toolname}` },
    {
      name: "description",
      content: `admin page for ${toolname}`,
    },
  ];
};

function Index() {
  const socket = useSocket();
  const reval = useRevalidator();
  const current_user = useOutletContext();
  const { users } = useLoaderData();
  const reviewers = users.filter((user) => user.role === "REVIEWER");
  useEffect(() => {
    if (!socket) return;
    socket.on("text-status-changed", (data) => {
      if (data) reval.revalidate();
    });
  }, [socket]);

  return (
    <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5 ">
      <div className="col-span-12 xl:col-span-8 ">
        <Outlet context={{ current_user, reviewers }} />
      </div>
      <UserListCard />
    </div>
  );
}

export default Index;
