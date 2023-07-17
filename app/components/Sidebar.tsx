import { useFetcher, useLoaderData } from "@remix-run/react";
import React from "react";

function Sidebar({ user, online }) {
  let data = useLoaderData();
  let text = data.text;
  const fetcher = useFetcher();

  function resetText(id: string) {
    fetcher.submit({ id }, { method: "DELETE", action: "api/text" });
  }

  return (
    <div className="sidebar">
      <div className="sidebar_title">Pecha Tools</div>
      <div className="sidebar_menu">
        <div className="sidebar-section-title">Project Info</div>
        <div>
          <span className="info">User :</span> {user?.username}
        </div>
        <div>
          <span className="info">text id :</span> {text?.id}
        </div>
        <div>
          <span className="info">Approved :</span> {user.text.length}
        </div>
        <div>
          <span className="info">Rejected :</span> {user.rejected_list.length}
        </div>
        <div>
          <span className="info">Ignored :</span> {user.ignored_list.length}
        </div>
        <div>
          <span className="info">online Text :</span> {online?.length}
        </div>
      </div>
      <div className="sidebar_menu " style={{ flex: 1 }}>
        <div className="sidebar-section-title">History</div>
        <div className="history-container">
          {user?.text.map((text) => {
            return (
              <div
                key={text.id}
                className="history-item"
                onClick={() => resetText(text.id)}
              >
                {text.modified_text}
              </div>
            );
          })}
        </div>
      </div>
      <div className="sidebar_footer">© 2017-2023 Explosion(Prodigy)</div>
    </div>
  );
}

export default Sidebar;
