/** @type {import('@remix-run/dev').AppConfig} */
// const { createRoutesFromFolders } = require("@remix-run/v1-route-convention");
module.exports = {
  // appDirectory: "app",
  serverModuleFormat: "cjs",
  serverDependenciesToBundle: [
    "@uidotdev/usehooks",
    /^remix-utils.*/,
    // If you installed is-ip optional dependency you will need these too
    "is-ip",
    "ip-regex",
    "super-regex",
    "clone-regexp",
    "function-timeout",
    "time-span",
    "convert-hrtime",
    "is-regexp",
    "react-date-range",
  ],
  ignoredRouteFiles: ["**/.*"],
  tailwind: true,
  browserNodeBuiltinsPolyfill: {
    modules: {
      path: true,
      util: true,
    },
  },
};
