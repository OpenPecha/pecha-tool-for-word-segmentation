import { useFetcher, useLoaderData } from "@remix-run/react";
import useModal from "./hooks/useModal";
function AssignedBatchList({ user }: any) {
  const { groups } = useLoaderData();
  const { Modal, Toggle_Modal } = useModal();
  const userfetcher = useFetcher();
  let removeBatch = (e) => {
    if (groups[e].rejected) {
      alert(
        "group contain rejected data, contact the annotator to either ignore or accept!"
      );
      return null;
    }
    let c = confirm("Are you sure you want to remove this group from user?");

    if (c)
      userfetcher.submit(
        { batch: e, id: user.id },
        {
          method: "DELETE",
        }
      );
  };

  let removing =
    userfetcher.formData?.get("id") === user.id &&
    userfetcher.formMethod === "DELETE";

  let currentBatch = user.assigned_batch.filter(
    (item) => !groups[item]?.reviewed
  );

  return (
    <div className="mt-2 flex gap-2">
      <Toggle_Modal>
        <span className="text-black underline dark:text-white">
          Active Jobs
        </span>
      </Toggle_Modal>
      <Modal>
        {currentBatch.map((item) => {
          return (
            <span
              className=" text-black  mr-1 cursor-pointer p-1 border-2 rounded border-gray-300"
              onClick={() => removeBatch(item)}
              key={item}
              style={{
                background: groups[item]?.reviewed
                  ? "lightgreen"
                  : groups[item]?.approved
                  ? "lightblue"
                  : groups[item]?.rejected
                  ? "pink"
                  : "white",
              }}
            >
              {item}
            </span>
          );
        })}
      </Modal>
    </div>
  );
}

export default AssignedBatchList;
