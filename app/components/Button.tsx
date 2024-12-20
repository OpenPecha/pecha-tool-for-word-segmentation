import { useRef, useEffect } from "react";
import { Ignore, Right, Undo, Wrong } from "../assets/svgs";
import { BiTrashAlt } from "react-icons/bi/index.js";
interface ButtonProps {
  handleClick: () => void;
  value: string;
  disabled: boolean;
  title: string;
  shortCut?: string;
  className?: string;
}

function Button({
  handleClick,
  value,
  disabled,
  title,
  shortCut,
  className,
}: ButtonProps) {
  let classbtn =
    "h-[100px] w-[100px]  cursor-pointer hover:opacity-80 disabled:opacity-50 rounded-md";
  let innerValue: any = value;
  let btnRef = useRef(null);
  useEffect(() => {
    function handlekeyDown(e) {
      if (e.key === shortCut) {
        btnRef.current.click();
      }
    }
    document.addEventListener("keydown", handlekeyDown);
    return () => {
      document.removeEventListener("keydown", handlekeyDown);
    };
  }, []);
  switch (value) {
    case "CONFIRM":
      innerValue = <Right />;
      classbtn += " bg-[--success-btn]";
      break;
    case "REJECT":
      innerValue = <Wrong />;
      classbtn += " bg-[--cancel-btn]";
      break;

    case "UNDO":
      innerValue = <Undo />;
      classbtn += " bg-[--normal-btn]";
      break;
    case "TRASH":
      innerValue = (
        <BiTrashAlt className={"h-[70px] w-auto mx-auto fill-white"} />
      );
      classbtn += " bg-[--trash-btn] ";
      break;
  }
  return (
    <button
      disabled={disabled}
      title={title}
      className={className ? className : classbtn}
      onClick={handleClick}
      ref={btnRef}
    >
      {innerValue}
    </button>
  );
}
export default Button;
