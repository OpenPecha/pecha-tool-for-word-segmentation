export let toolname = "word segmentation";
export let replaceList = ["ໆ"];

export let cleanText = (text: string) => {
  if (typeof text !== "string") return text;
  let result = text;
  for (let i = 0; i < replaceList.length; i++) {
    result = result.replaceAll(new RegExp(replaceList[i], "g"), "");
  }
  return result;
};
