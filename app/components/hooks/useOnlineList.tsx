import { useEffect, useState } from "react";
import { useSocket } from "../contexts/SocketContext";

export function useOnlineList() {
  const [online, setOnline] = useState([]);
  const socket = useSocket();
  useEffect(() => {
    if (!socket) return;
    socket.on("user_online", (users) => {
      setOnline(users);
    });
    socket.on("user_offline", (users) => {
      setOnline(users);
    });

    return () => {
      socket.off("user_online");
      socket.off("user_offline");
    };
  }, [socket]);

  return online;
}
