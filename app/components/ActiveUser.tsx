import { useIdle } from "@uidotdev/usehooks";
import { useEffect } from "react";
export default function ActiveUser({ active, setActive }) {
  const idle = useIdle(5000);
  let timer = null;
  useEffect(() => {
    if (!idle) {
      timer = setInterval(() => {
        setActive((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [idle]);
  return (
    <div>
      <span className={idle ? "idle" : ""} />
      <label>Status: {!idle ? active + " s" : "idle"}</label>
    </div>
  );
}
