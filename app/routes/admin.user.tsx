import { User } from "@prisma/client";
import {
  ActionFunction,
  LoaderFunction,
  V2_MetaFunction,
  defer,
  redirect,
} from "@remix-run/node";
import AboutUser from "~/components/admin/AboutUser";
import UserListCard from "~/components/admin/UserListCard";
import { useEffect, useState } from "react";
import { getUniqueTextsGroup } from "~/model/server.group";
import { getAprovedBatch } from "~/model/server.text";
import { getUser, getUsers, removeBatchFromUser } from "~/model/server.user";
import { getCategories } from "~/model/utils/server.category";
import { useRevalidator } from "@remix-run/react";
import { useSocket } from "~/components/contexts/SocketContext";
import { toolname } from "~/const";
import { ClientOnly } from "remix-utils";

export const loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  let session = url.searchParams.get("session");
  if (!session) return redirect("/error");
  let user = await getUser(session, true);
  let users: User[] = await getUsers();
  let groups = await getAprovedBatch();
  let reviewers = users.filter((user) => user.role === "REVIEWER");
  let categories = await getCategories();
  let texts = await getUniqueTextsGroup();
  return defer({
    user,
    texts,
    users: users.sort(
      (a, b) => b.assigned_batch.length - a.assigned_batch.length
    ),
    groups,
    reviewers,
    categories,
  });
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
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const socket = useSocket();
  const reval = useRevalidator();

  useEffect(() => {
    if (!socket) return;
    socket.on("text-status-changed", (data) => {
      if (data) reval.revalidate();
    });
  }, [socket]);
  return (
    <ClientOnly>
      {() => (
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5 ">
          <div className="col-span-12 xl:col-span-8 ">
            <AboutUser selectedUser={selectedUser} />
          </div>
          <UserListCard
            setSelectedUser={setSelectedUser}
            selectedUser={selectedUser}
          />
        </div>
      )}
    </ClientOnly>
  );
}

export default Index;
