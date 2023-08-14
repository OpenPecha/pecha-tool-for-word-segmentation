import { Link, useFetcher, useLoaderData } from "@remix-run/react";
import React, { useState } from "react";

interface HistoryItemProps {
  id: number;
  user: any;
  onClick: () => void;
  icon: JSX.Element;
  disabled?: boolean;
}

function HistoryItem({ id, user, onClick, icon, disabled }: HistoryItemProps) {
  if (disabled)
    return (
      <div className="history-item flex gap-3">
        {id} {icon}
      </div>
    );
  return (
    <Link
      to={`/?session=${user.username}&history=${id}`}
      className="history-item flex gap-3 items-center"
      onClick={onClick}
    >
      {id} {icon}
    </Link>
  );
}

function Sidebar({ user, online }) {
  let data = useLoaderData();
  let text = data.text;
  const fetcher = useFetcher();
  let [openMenu, setOpenMenu] = useState(false);
  function resetText(id: string) {
    fetcher.submit({ id }, { method: "DELETE", action: "api/text" });
  }

  return (
    <div className="header">
      <div className="sidebar_title" onClick={() => setOpenMenu(true)}>
        <Hamburger />
        Word Segmentation
      </div>
      <div className={`sidebar ${openMenu ? "open" : ""}`}>
        <div className={`sidebar_menu`}>
          <div className="sidebar-Header">
            <div className="title">Word Segmentation</div>
            <div className="close" onClick={() => setOpenMenu(false)}>
              x
            </div>
          </div>
          {user.role === "ADMIN" && (
            <Link
              to={`/admin?session=${user?.username}`}
              className="decoration-0 text-white bg-gray-500 h-fit px-2 py-1 rounded-sm"
            >
              ADMIN
            </Link>
          )}
          <div>
            <span className="info">User :</span> {user?.username}
          </div>
          <div>
            <span className="info">text id :</span> {text?.id}
          </div>
          <div>
            <span className="info">Batch :</span> {text?.batch}
          </div>
          <div></div>
          <div>
            <span className="info">Approved :</span> {user?.text?.length}
          </div>
          <div>
            <span className="info">Rejected :</span>{" "}
            {user?.rejected_list?.length}
          </div>
          <div>
            <span className="info">Ignored :</span> {user?.ignored_list?.length}
          </div>
          <div>
            <span className="info">online User :</span> {online?.length}
          </div>
        </div>
        <div className="sidebar_menu " style={{ flex: 1 }}>
          <div className="sidebar-section-title">History</div>
          <div className="history-container">
            {user &&
              (user.rejected_list || user.text) &&
              (user?.rejected_list || [])
                .sort(sortUpdate)
                .map((text: Text) => (
                  <HistoryItem
                    user={user}
                    id={text?.id}
                    key={text.id + "-accepted"}
                    onClick={() => setOpenMenu(false)}
                    icon={<Cross />}
                  />
                ))}
            {(user?.text || []).sort(sortUpdate).map((text: Text) => (
              <HistoryItem
                user={user}
                id={text?.id}
                key={text.id + "-rejected"}
                onClick={() => setOpenMenu(false)}
                disabled={text?.reviewed}
                icon={
                  <div className="flex items-center justify-between flex-1">
                    <Tick />
                    {text?.reviewed && <span>reviewed</span>}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

export function Hamburger() {
  return (
    <svg
      aria-hidden="true"
      fill="gray"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <path d="M3 5h18q0.414 0 0.707 0.293t0.293 0.707-0.293 0.707-0.707 0.293h-18q-0.414 0-0.707-0.293t-0.293-0.707 0.293-0.707 0.707-0.293zM3 17h18q0.414 0 0.707 0.293t0.293 0.707-0.293 0.707-0.707 0.293h-18q-0.414 0-0.707-0.293t-0.293-0.707 0.293-0.707 0.707-0.293zM3 11h18q0.414 0 0.707 0.293t0.293 0.707-0.293 0.707-0.707 0.293h-18q-0.414 0-0.707-0.293t-0.293-0.707 0.293-0.707 0.707-0.293z"></path>
    </svg>
  );
}

export function Tick() {
  return (
    <svg
      aria-hidden="true"
      className="tickSVG"
      width="18"
      height="18"
      viewBox="0 0 24 24"
    >
      <path d="M9 16.172l10.594-10.594 1.406 1.406-12 12-5.578-5.578 1.406-1.406z"></path>
    </svg>
  );
}
export function Cross() {
  return (
    <svg
      aria-hidden="true"
      className="crossSVG"
      width="18"
      height="18"
      viewBox="0 0 24 24"
    >
      <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
    </svg>
  );
}

function sortUpdate(a: Text, b: Text) {
  const parsedDate1 = new Date(a.updatedAt);
  const parsedDate2 = new Date(b.updatedAt);
  if (a.reviewed === b.reviewed) {
    return parsedDate2 - parsedDate1;
  }
  if (a.reviewed) {
    return 1;
  }
  if (b.reviewed) {
    return -1;
  }
  return 0;
}
