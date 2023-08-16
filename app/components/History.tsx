import { Link } from "@remix-run/react";
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
      <div className="text-white flex gap-3 cursor-pointer hover:border-2 border-purple-800">
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

interface AdminHistoryItemProps {
  id: number;
  onClick: () => void;
  icon: JSX.Element;
  reviewed: boolean;
  selectedId: number;
}

function AdminHistoryItem({
  id,
  onClick,
  icon,
  reviewed,
  selectedId,
}: AdminHistoryItemProps) {
  return (
    <div
      className="text-white flex gap-3 cursor-pointer hover:border-2 border-purple-800"
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

export { HistoryItem, AdminHistoryItem };
