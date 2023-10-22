/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  serverModuleFormat: "esm",
  serverDependenciesToBundle: ["@uidotdev/usehooks"],
  tailwind: true,
};
