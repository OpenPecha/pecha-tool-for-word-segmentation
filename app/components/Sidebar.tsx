import {
  Link,
  NavLink,
  useFetcher,
  useNavigate,
  Await,
} from "@remix-run/react";
import { useState, useEffect, Suspense } from "react";
import TextInfo from "./TextInfo";
import { HistoryItem } from "./History";
import { Cross, Crossburger, Hamburger, Tick } from "../assets/svgs";
import type { User, Text } from "@prisma/client";
import { toolname } from "~/const";

export type historyText = {
  id: number;
  reviewed: boolean;
};
type userType = {
  user: User & { text: any[]; rejected_list: any[] };
  text: Text;
};

function Sidebar({ user, text }: userType) {
  let fetcher = useFetcher();
  useEffect(() => {
    fetcher.load("/api/text?session=" + user?.username);
  }, [text?.id, user]);
  let [openMenu, setOpenMenu] = useState(false);
  let navigate = useNavigate();
  const handleDashboradLink = () => {
    navigate(`/admin/user?session=${user?.username}`);
  };
  return (
    <div className="flex flex-col border-r">
      <div className=" flex px-2 py-3 capitalize bg-white dark:text-white dark:bg-gray-600 text-lg font-semibold items-center  gap-2 ">
        <div onClick={() => setOpenMenu((p) => !p)} className="block md:hidden">
          {!openMenu ? <Hamburger /> : <Crossburger />}
        </div>
        {toolname}
      </div>
      <div
        className={`flex flex-col bg-white dark:text-white  dark:bg-[#54606e] overflow-y-auto overflow-x-hidden max-h-[100vh] transition-all -translate-x-full z-30 ${
          openMenu ? "block translate-x-0" : ""
        } min-h-[100vh] w-[260px] md:translate-x-0`}
      >
        <div className="px-2 flex gap-2 flex-col  mb-3 pb-2 mt-2 ">
          {(user?.role === "ADMIN" || user?.role === "REVIEWER") && (
            <NavLink
              to={`/admin/user?session=${user?.username}`}
              type="button"
              onClick={handleDashboradLink}
              className="decoration-0 bg-gray-200 hover:bg-gray-100 dark:text-white dark:bg-gray-500 h-fit px-2 py-1 rounded-sm border-b"
            >
              {user?.role} DASHBOARD
            </NavLink>
          )}
          <TextInfo>User : {user?.username.split("@")[0]}</TextInfo>
          <TextInfo>text id :{text?.id}</TextInfo>
          <TextInfo>Batch : {text?.batch}</TextInfo>
          <TextInfo>Approved : {user?.approved_count}</TextInfo>
          <TextInfo>Rejected :{user?.rejected_list?.length}</TextInfo>
          <TextInfo>Reviewed : {user?._count?.text}</TextInfo>
        </div>

        <div className="flex-1 border-t">
          <div className="text-sm mb-2 font-bold pl-2">History</div>
          <div className="flex flex-col gap-2 max-h-fit overflow-y-auto">
            {text?.id && !fetcher.data && <div>Loading...</div>}
            <Suspense fallback={<div>Loading...</div>}>
              <Await
                resolve={fetcher.data?.text}
                errorElement={<div>error loading</div>}
              >
                {(resolvedValue) => {
                  return (
                    <>
                      {resolvedValue?.rejected_list?.map(
                        (text: historyText) => (
                          <HistoryItem
                            user={user}
                            id={text?.id}
                            key={text?.id + "-rejected"}
                            onClick={() => setOpenMenu(false)}
                            icon={<Cross />}
                          />
                        )
                      )}
                      {resolvedValue?.text?.map((text: string) => (
                        <HistoryItem
                          user={user}
                          id={parseInt(text?.id)}
                          key={text?.id + "-accepted"}
                          onClick={() => setOpenMenu(false)}
                          icon={
                            <div className="flex items-center justify-between flex-1">
                              <Tick />
                            </div>
                          }
                        />
                      ))}
                    </>
                  );
                }}
              </Await>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
