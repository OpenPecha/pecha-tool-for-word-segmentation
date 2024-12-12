import { redirect, type LoaderFunction } from "@remix-run/node";
import { useEffect, useRef, useState } from "react";
import {
  useFetcher,
  useLoaderData,
  useSearchParams,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

import Button from "~/components/Button";
import Editor from "~/components/Editor";
import Sidebar from "~/components/Sidebar";
import { getMonthlyWordCount, getTextToDisplay } from "~/model/text.server";
import checkUnknown from "~/lib/checkUnknown";
import { createUserIfNotExists } from "~/model/user.server";
import insertHTMLonText from "~/lib/insertHtmlOnText";
import { useEditorTiptap } from "~/tiptapProps/useEditorTiptap";
import ActiveUser from "~/components/ActiveUser";
import { db } from "~/service/db.server";
import { BiPencil, BiSave, BiUndo } from "react-icons/bi";

export const loader: LoaderFunction = async ({ request }) => {
  let { NODE_ENV } = process.env;
  let url = new URL(request.url);
  let session = url.searchParams.get("session");
  let detail = url.searchParams.get("detail");
  let history = url.searchParams.get("history") || null;

  if (!session) return redirect("https://pecha.tools");

  let user = await createUserIfNotExists(session);
  if (user?.role === "ADMIN" || user?.role === "REVIEWER") {
    return redirect(`/admin/user/?session=${user.username}`);
  }
  if (user?.role === "OWNER") {
    return redirect(`/owner?session=${user.username}`);
  }

  let activeWork = await db.system.findFirst();
  if (activeWork?.status === "Activated") {
    return { activeWork };
  }

  let text = null;
  if (user?.allow_assign) {
    text = await getTextToDisplay(user, history);
    if (text?.error) {
      return { error: text.error.message };
    }
  }

  let monthlyData = await getMonthlyWordCount(user?.id);
  let current_time = Date.now();
  return {
    text,
    user,
    NODE_ENV,
    history,
    current_time,
    monthlyData,
  };
};

export const meta = () => {
  return [
    { title: "Pecha Tools" },
    { name: "description", content: "Word segmentation" },
    {
      keywords:
        "pecha,tools,word,segmentation,pecha tools,pecha tools word segmentation",
    },
  ];
};

export default function Index() {
  let fetcher = useFetcher();
  const { user, text, error } = useLoaderData();
  let id = text?.id;
  let editor = useEditorTiptap();
  let edittextRef=useRef(null);
  let [editTextValue,setEditTextValue]=useState(text?.original_text||'');
  let [activeTab, setActiveTab] = useState<'segmentor'|'edit'>("segmentor");
  let original_text = text?.original_text?.replaceAll("?", "");
  original_text = original_text?.replaceAll("\u0F37", "");
 
  let saveText = async () => {
    let duration = document?.querySelector("#activeTime")?.innerHTML ?? 0;

    let text = editor!.getText();
    let modified_text = JSON.stringify(text.split(" "));

    fetcher.submit(
      { id, modified_text, userId: user.id, duration: duration },
      { method: "POST", action: "/api/text" }
    );
  };
  let trashTask = async () => {
    let id = text.id;
    fetcher.submit(
      { id, _action: "trash", userId: user.id },
      { method: "PATCH", action: "/api/text" }
    );
  };
  let undoTask = async () => {
    let temptext = checkUnknown(insertHTMLonText(original_text));
    editor?.commands.setContent(temptext);
  };
  let rejectTask = async () => {
    fetcher.submit(
      { id, userId: user.id, _action: "reject" },
      { method: "PATCH", action: "/api/text" }
    );
  };
  let isButtonDisabled = !text || text.reviewed || fetcher.state !== "idle";
  let isSaving = fetcher.state !== "idle";
  const editText=()=>{
    const text_value=edittextRef.current?.value;

    fetcher.submit(
        { new_text:text_value ,id,_action:"edit" },
        { method: "POST", action: "/api/text" });

    setActiveTab('segmentor')
  }
  const undoEdit=()=>{
    setEditTextValue(original_text);
  }
  const updateEditText =(value)=>{
    setEditTextValue(value)
  }
 

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar user={user} text={text} />

      <div className="flex-1 flex items-center flex-col md:mt-[3vh] ">
        {user?.rejected_list?.length > 0 && (
          <div className="text-red-500 flex items-center gap-2 font-bold">
            <img
              src="/assets/notification.gif"
              alt="notification "
              className="w-8 h-8"
            />
            SOME OF YOUR WORK IS REJECTED
          </div>
        )}
        {error && (
          <div className="fixed top-16 font-bold first-letter:uppercase first-letter:text-red-400">
            {error} . please contact admin .
          </div>
        )}

        {!text ? (
          <div className="fixed top-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm text-center py-4">
            {!user?.allow_assign && (
              <div className="font-bold first-letter:uppercase first-letter:text-red-400">
                A single work must have been rejected 3 times or more. maybe
                system blocked your work. please contact admin .
              </div>
            )}
            Thank you . your work is complete ! 😊😊😊
            <br />
          </div>
        ) : (
          <div className="fixed top-[120px] md:relative md:top-0 md:mt-20 shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]">
            <div className="flex items-center justify-between opacity-75 text-sm font-bold px-2  pt-1 ">
              <div className="flex gap-2 w-full justify-between">
              {activeTab!=='segmentor'?
              <div onClick={()=>setActiveTab('segmentor')} className={`p-2 bg-white text-black rounded mb-2 cursor-pointer font-monlam`}>ལས་ཀའི་ཁོར་ཡུག</div>
              :<div/>}
              <button onClick={()=>{
                setActiveTab('edit')
                }} className={`flex border-2 bg-green-300 border-gray-400 gap-2 leading-tight font-monlam items-center p-2 ${activeTab==='edit'||isSaving ? "hidden":" text-black"}  rounded mb-2 cursor-pointer`}>
                  <BiPencil/>ཞུ་དག</button>
            {activeTab==='edit' && text && 
          <div className="flex gap-2 text-white  md:relative mb-2 justify-center ">
           <button
              disabled={isButtonDisabled}
              onClick={editText}
              className="flex font-monlam gap-2 items-center px-2 py-1 text-black bg-gray-100 border-black border-2  rounded"
              title="SAVE"
            >
              <BiSave className="text-green-700"/>
              ཉར།
              </button>
             <button
             className=" flex font-monlam gap-2 items-center px-2 py-1 text-red-400 rounded"
              disabled={isButtonDisabled}
              onClick={undoEdit}
              title="UNDO "
            >
              <BiUndo/>
              ཕྱིར་ལྡོག
            </button>
        </div>
        }
              </div>
                            {isSaving && (
                <div className=" flex justify-center items-center">
                  saving...
                </div>
              )}
            </div>
            <span className={`${activeTab === 'segmentor'?'':'hidden'}`}>
            {!editor || isSaving ? <Loading /> : <Editor editor={editor} updateEditText={updateEditText} />}
            </span>
            {activeTab === 'edit' && <div className="p-2 bg-gray-200 text-black rounded mb-2">
              <textarea ref={edittextRef} value={editTextValue} onChange={(e)=>setEditTextValue(e.target.value)}  className="w-full font-monlam leading-[normal]" rows={10}>
              </textarea>
              </div>}
          </div>
        )}
        
        {activeTab==='segmentor' && text && (
          <div className="flex gap-2 fixed bottom-0 md:relative md:mt-10 justify-center ">
            <Button
              disabled={isButtonDisabled}
              handleClick={saveText}
              value="CONFIRM"
              title="CONFIRM"
            />
            <Button
              disabled={isButtonDisabled}
              handleClick={rejectTask}
              value="REJECT"
              title="REJECT "
            />
            <Button
              disabled={isButtonDisabled}
              handleClick={trashTask}
              value="TRASH"
              title="TRASH "
            />
            <Button
              disabled={isButtonDisabled}
              handleClick={undoTask}
              value="UNDO"
              title="UNDO "
            />
          </div>
        )}
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}

function Loading() {
  return (
    <div className="flex justify-center items-center h-full p-10">
      <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900 p-3"></div>
    </div>
  );
}
