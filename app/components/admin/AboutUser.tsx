import { User } from "@prisma/client";
import { Link, useFetcher, useLoaderData } from "@remix-run/react";
import AssignNickName from "../AssignNickName";
import AssignReviewer from "../AssignReviewer";
import AssignCategory from "../AssignCategory";
import { useSocket } from "../contexts/SocketContext";
import AssignedBatchList from "../AssignedBatchList";

function Info({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start px-2 text-lg mt-2">
      {children}
    </div>
  );
}
function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-lg font-bold flex justify-between w-full">
      {children}
    </div>
  );
}

const AboutUser = ({ selectedUser }: { selectedUser: string | null }) => {
  const { users, user } = useLoaderData();
  const annotator = users.find((user: User) => user?.username === selectedUser);
  const socket = useSocket();

  const fetcher = useFetcher();
  function handleChangeAllow() {
    fetcher.submit(
      {
        id: annotator.id,
        allow: !annotator.allow_assign,
        action: "change_allow_assign",
      },
      {
        action: "/api/user",
        method: "POST",
      }
    );
    socket?.emit("change-allow", { annotator });
  }
  if (!annotator) return null;
  const reviewed_count = annotator?.text.filter((item) => item.reviewed).length;
  const approved_count = annotator?.text.length;
  let url = `/admin/user/review/${selectedUser}?session=` + user.username;

  return (
    <div className="sticky top-[80px]  rounded-sm border border-stroke bg-white px-5 pt-6 pb-10 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-10 ">
      <div className="flex flex-col md:flex-row justify-between px-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          {annotator?.username}
          <span className="font-light text-sm ml-2">{annotator.role}</span>
        </h4>
        <div>
          <input
            title="active/inactive"
            type="checkbox"
            className={`toggle toggle-success ${
              fetcher.state !== "idle" &&
              "cursor-not-allowed opacity-50 pointer-events-non"
            }`}
            checked={annotator?.allow_assign!}
            onChange={handleChangeAllow}
            aria-label="Toggle_role"
          />
        </div>
      </div>
      <Info>
        <Title>Name:</Title>
        <AssignNickName user={annotator} />
      </Info>
      <Info>
        <Title>Email:</Title>
        <div>{annotator?.username}</div>
      </Info>
      <Info>
        <Title>Reviewer:</Title>
        <AssignReviewer user={annotator} />
      </Info>
      <Info>
        <Title>Category:</Title>
        <AssignCategory user={annotator} />
      </Info>
      <Info>
        <Title>
          Assigned Batch:
          <div title={"reviewed/total"}>
            {reviewed_count}/{approved_count}
          </div>
        </Title>
        <AssignedBatchList user={annotator} />
      </Info>

      <Link
        title="visit"
        className="bg-purple-300 py-1 px-3 w-full  text-center hover:opacity-90 absolute bottom-0 left-0 right-0 "
        to={url}
      >
        Visit
      </Link>
    </div>
  );
};

export default AboutUser;
