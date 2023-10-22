/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*", "**/*.test.{js,jsx,ts,tsx}"],
  // appDirectory: "app",
  serverModuleFormat: "esm",
  serverDependenciesToBundle: ["@uidotdev/usehooks"],
  server: "server.js",
  tailwind: true,
};
