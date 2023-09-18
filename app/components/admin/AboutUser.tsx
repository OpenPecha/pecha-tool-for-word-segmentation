import { Link, useLoaderData } from "@remix-run/react";
import AllowAnnotation from "../AllowAnnotation";
import AssignCategory from "../AssignCategory";
import AssignNickName from "../AssignNickName";
import AssignReviewer from "../AssignReviewer";
import AssignRole from "../AssignRole";
import AssignedBatchList from "../AssignedBatchList";
import { User } from "@prisma/client";

function Info({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start px-2 text-lg mt-2 dark:text-white text-black">
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

const AboutUser = ({
  selectedUser,
  user,
}: {
  selectedUser: string;
  user: any;
}) => {
  const { users } = useLoaderData();
  const annotator = users.find((user: User) => user?.username === selectedUser);

  let url = `/admin/user/review/${selectedUser}?session=` + user.username;
  let isAdmin = user.role === "ADMIN";
  if (selectedUser === "") return null;
  return (
    <div className="sticky top-[80px]  rounded-sm border border-stroke bg-white dark:bg-slate-600  px-5 pt-6 pb-10 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-10 ">
      <div className="flex flex-col md:flex-row justify-between px-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          {annotator?.username}
        </h4>
        <AllowAnnotation annotator={annotator} />
      </div>
      <Info>
        <Title>Name:</Title>
        <AssignNickName user={annotator} />
      </Info>
      <Info>
        <Title>Role</Title>
        <AssignRole annotator={annotator} isAdmin={isAdmin} />
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
        <AssignedBatchList user={annotator} />
      </Info>

      <Link
        title="visit"
        className="bg-green-500 text-white font-bold py-1 px-3 w-full  text-center hover:opacity-90 absolute bottom-0 left-0 right-0 "
        to={url}
      >
        Visit
      </Link>
    </div>
  );
};

export default AboutUser;
