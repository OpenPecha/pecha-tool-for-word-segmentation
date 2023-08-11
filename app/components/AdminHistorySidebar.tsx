import { Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { Text } from "@prisma/client";
import { Hamburger, Tick } from "./Sidebar";

interface HistoryItemProps {
  id: number;
  onClick: () => void;
  icon: JSX.Element;
  reviewed: boolean;
  selectedId: number;
}

function HistoryItem({
  id,
  onClick,
  icon,
  reviewed,
  selectedId,
}: HistoryItemProps) {
  let { admin, text } = useLoaderData();
  return (
    <div
      className="history-item flex gap-3"
      style={{
        background: selectedId == id ? "rgba(1,1,1,0.4)" : "",
      }}
      onClick={onClick}
    >
      {id}
      {reviewed ? icon : null}
    </div>
  );
}

interface SidebarProps {
  user: any;
  online: any[];
  setSelectedId: (data: number | null) => void;
  selectedId: number | null;
}

function AdminHistorySidebar({
  user,
  online,
  setSelectedId,
  selectedId,
}: SidebarProps) {
  const data = useLoaderData();

  const [openMenu, setOpenMenu] = useState(false);

  const SidebarHeader = () => (
    <div className="sidebar-Header">
      <Link to={`/admin?session=${data.admin}`}>
        <div className="title" style={{ cursor: "pointer" }}>
          Sentence segmentation
        </div>
      </Link>
      <div className="close" onClick={() => setOpenMenu(false)}>
        x
      </div>
    </div>
  );

  return (
    <div className="header">
      <div className="sidebar_title" onClick={() => setOpenMenu(true)}>
        <Hamburger />
        <Link
          to={`/admin?session=${data.admin}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Sentence segmentation
        </Link>
      </div>
      <div className={`sidebar ${openMenu ? "open" : ""}`}>
        <div className="sidebar_menu">
          <SidebarHeader />
          {user.role === "ADMIN" && (
            <Link
              to={`/admin?session=${user?.username}`}
              style={{
                textDecoration: "none",
                color: "white",
                background: "gray",
                padding: 10,
              }}
            >
              Admin
            </Link>
          )}
          <div>
            <span className="info">User :</span> {user?.username}
          </div>
          <div>
            <span className="info">text id :</span> {selectedId}
          </div>
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
        <div className="sidebar_menu" style={{ flex: 1 }}>
          <div className="sidebar-section-title">History</div>
          <div className="history-container">
            {user &&
              user.text &&
              [...(user?.text || [])].sort(sortUpdate).map((text: Text) => (
                <HistoryItem
                  id={text?.id}
                  key={text.id + "-accepted"}
                  onClick={() => {
                    setOpenMenu(false);
                    setSelectedId(text?.id);
                  }}
                  icon={<Tick />}
                  reviewed={text?.reviewed!}
                  selectedId={selectedId!}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHistorySidebar;
export function sortUpdate(a: Text, b: Text) {
  return a.reviewed === b.reviewed ? 0 : a.reviewed ? 1 : -1;
}
