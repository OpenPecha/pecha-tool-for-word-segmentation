import { useIdle } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
export default function ActiveUser() {
  const [active, setActive] = useState(0); // in sec

  const idle = useIdle(5000);
  let timer = null;
  useEffect(() => {
    if (timer) clearInterval(timer);
    if (!idle) {
      timer = setInterval(() => {
        setActive((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [idle]);
  return (
    <div>
      Status(s): {!idle ? <span id="activeTime">{active}</span> : "idle"}
    </div>
  );
}
