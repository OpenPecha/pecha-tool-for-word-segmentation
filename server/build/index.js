var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error2) {
          reject(error2);
        },
        onError(error2) {
          responseStatusCode = 500, shellRendered && console.error(error2);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error2) {
          reject(error2);
        },
        onError(error2) {
          responseStatusCode = 500, shellRendered && console.error(error2);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_react3 = require("@remix-run/react"), import_react4 = __toESM(require("react"));

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-HFLGYWZG.css";

// app/styles/global.css
var global_default = "/build/_assets/global-MFYCH2CU.css";

// node_modules/react-modern-drawer/dist/index.css
var dist_default = "/build/_assets/index-W34DRLYH.css";

// app/components/contexts/SocketContext.tsx
var import_react2 = require("react"), import_socket = require("socket.io-client"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), context = (0, import_react2.createContext)(void 0);
function useSocket() {
  return (0, import_react2.useContext)(context);
}
function connect() {
  return (0, import_socket.io)();
}
function SocketProvider({ socket, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(context.Provider, { value: socket, children }, void 0, !1, {
    fileName: "app/components/contexts/SocketContext.tsx",
    lineNumber: 20,
    columnNumber: 10
  }, this);
}

// app/root.tsx
var import_nprogress = __toESM(require("nprogress"));

// node_modules/nprogress/nprogress.css
var nprogress_default = "/build/_assets/nprogress-A223XL3B.css";

// app/root.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), loader = async ({ request }) => ({ session: new URL(request.url).searchParams.get("session") }), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: global_default },
  { rel: "stylesheet", href: dist_default },
  { rel: "stylesheet", href: nprogress_default }
];
function App() {
  let [socket, setSocket] = (0, import_react4.useState)(), { session } = (0, import_react3.useLoaderData)();
  (0, import_react4.useEffect)(() => {
    let socket2 = connect();
    return setSocket(socket2), socket2.emit("user_login", session), () => {
      socket2.close();
    };
  }, []);
  let transition = (0, import_react3.useNavigation)(), fetchers = (0, import_react3.useFetchers)(), state = (0, import_react4.useMemo)(
    function() {
      return [
        transition.state,
        ...fetchers.map((fetcher) => fetcher.state)
      ].every((state2) => state2 === "idle") ? "idle" : "loading";
    },
    [transition.state, fetchers]
  );
  return import_react4.default.useEffect(() => {
    state === "loading" && import_nprogress.default.start(), state === "idle" && import_nprogress.default.done();
  }, [transition.state]), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "m-0 overflow-hidden font-[20px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SocketProvider, { socket, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error: error2 }) {
  return console.error(error2), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "Oh no!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}

// app/routes/admin_.user.review.$slug.tsx
var admin_user_review_slug_exports = {};
__export(admin_user_review_slug_exports, {
  default: () => admin_user_review_slug_default,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node"), import_react12 = require("@remix-run/react"), import_react13 = require("react"), import_react_router = require("react-router");

// app/lib/checkUnknown.ts
function checkUnknown(text) {
  let replacementChar = "\uFFFD";
  if (text.includes(replacementChar)) {
    let regex = new RegExp(replacementChar, "g");
    return text.replace(regex, "");
  } else
    return text;
}
var checkUnknown_default = checkUnknown;

// app/lib/utils.ts
function replaceSpacesWithHTMLTag(text) {
  let tag = "<Space data-color='red'> </Space>";
  return text.replace(/\s/g, tag);
}
function removeSpace(text) {
  return text.replace(/\s/g, "");
}

// app/lib/insertHtmlOnText.ts
function insertHTMLonText(text) {
  let split = splitText(text), length = 0, textHTML = "";
  return split.forEach((word, index) => {
    word === " " ? textHTML += replaceSpacesWithHTMLTag(word) : textHTML += `<Character class='seg s-${length}'>${word}</Character>`, length += word.length;
  }), checkUnknown_default(textHTML);
}
function splitText(text) {
  let splitText2 = text.match(/[^་།\s]+|[་།\s]/g);
  var mergedArray = [];
  if (splitText2)
    for (var i = 0; i < splitText2.length; i++)
      /[་།]/.test(splitText2[i]) && mergedArray.length > 0 ? mergedArray[mergedArray.length - 1] += splitText2[i] : mergedArray.push(splitText2[i]);
  return mergedArray[mergedArray.length - 1] === "undefined\u0F0B" && mergedArray.pop(), mergedArray.map((word) => word.startsWith(" ") ? [" ", word.replace(" ", "")] : word).flat();
}
var insertHtmlOnText_default = insertHTMLonText;

// app/service/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), db = global.__db__, db.$connect();

// app/model/server.user.ts
var createUserIfNotExists = async (username) => {
  let user;
  if (user = await db.user.findUnique({
    where: {
      username
    },
    select: {
      rejected_list: { select: { id: !0, reviewed: !0, batch: !0 } },
      _count: {
        select: { text: { where: { reviewed: !0 } } }
        //only count reviewed text
      },
      text: { select: { id: !0 } },
      categories: !0,
      allow_assign: !0,
      role: !0,
      reviewer_id: !0,
      nickname: !0,
      picture: !0,
      id: !0,
      username: !0
    }
  }), user || (user = await db.user.create({
    data: {
      username,
      nickname: username.split("@")[0],
      role: "USER"
    },
    include: {
      text: !0
    }
  })), !user.picture) {
    let api = "https://pecha.tools/api/user/?email=" + username, data = await (await fetch(api)).json();
    await db.user.update({
      where: { username },
      data: {
        picture: data.picture
      }
    });
  }
  return user.text = user.text.length, user;
}, getUsers = async () => {
  try {
    return await db.user.findMany({
      include: {
        text: {
          select: { id: !0, status: !0, reviewed: !0, modified_on: !0 },
          orderBy: { id: "desc" },
          take: 50
        },
        rejected_list: !0,
        ignored_list: !0,
        reviewer: !0
      }
    });
  } catch (e) {
    throw new Error(e);
  }
}, getUser = async (username) => {
  try {
    return await db.user.findUnique({
      where: { username },
      include: {
        text: {
          where: { NOT: { reviewed: !0 } },
          select: {
            id: !0,
            modified_text: !0
          }
        },
        rejected_list: { select: { id: !0 } },
        // Select specific fields or all (undefined)
        _count: {
          select: { text: { where: { reviewed: !0 } }, rejected_list: !0 }
        },
        reviewer: !0
      }
    });
  } catch (e) {
    throw new Error(e);
  }
}, updateUserNickname = async (id, name) => {
  try {
    return await db.user.update({
      where: {
        id
      },
      data: {
        nickname: name
      }
    });
  } catch (e) {
    throw new Error(e);
  }
};
async function updateUserCategory(id, category) {
  return db.user.update({
    where: { id },
    data: {
      categories: { set: JSON.parse(category) }
    }
  });
}
var updateUserAssign = async (id, allow) => {
  try {
    return await db.user.update({
      where: {
        id
      },
      data: {
        allow_assign: allow
      }
    });
  } catch (e) {
    throw new Error(e);
  }
}, updateUserReviewer = async (id, reviewer_name) => {
  if (reviewer_name === null || reviewer_name === "")
    return await db.user.update({
      where: { id },
      data: { reviewer_id: null }
    });
  try {
    return await db.user.update({
      where: { id },
      data: {
        reviewer: {
          connect: { username: reviewer_name }
        }
      }
    });
  } catch (e) {
    throw new Error(e);
  }
}, removeBatchFromUser = async (batch, id) => {
  try {
    let user = await db.user.findUnique({
      where: { id },
      include: { ignored_list: !0 }
    }), isAllIgnored = await areAllTextsIgnoredOrReviewed(id, batch);
    if (!user)
      throw new Error("user not found");
    if (isAllIgnored) {
      let updatedAssignedBatchs = user.assigned_batch.filter(
        (number) => number !== batch
      );
      return await db.user.update({
        where: {
          id
        },
        data: {
          assigned_batch: updatedAssignedBatchs
        }
      });
    }
    return null;
  } catch (e) {
    throw new Error("cannot add group" + e);
  }
};
async function areAllTextsIgnoredOrReviewed(userId, batchId) {
  let user = await db.user.findUnique({
    where: { id: userId },
    include: {
      ignored_list: { where: { batch: batchId } },
      text: { where: { batch: batchId } }
    }
  });
  if (!user)
    throw new Error("User not found");
  let approved_count = user.text.length, reviewed_count = user.text.filter((l) => l.reviewed).length;
  if (approved_count === reviewed_count)
    return !0;
  let ignoredTextIds = (await db.text.findMany({
    where: {
      batch: batchId,
      ignored_by: { some: { username: { equals: user.username } } }
    },
    include: {
      ignored_by: !0
    }
  })).map((text) => text.id);
  return (await db.text.findMany({
    where: {
      batch: batchId,
      NOT: {
        id: { in: ignoredTextIds }
      }
    }
  })).every((text) => text.reviewed === !0);
}
async function remainingTextToApproved(userId) {
  let remains = await db.user.findUnique({
    where: { id: userId },
    select: { assigned_batch: !0 }
  }), lastbatch = remains == null ? void 0 : remains.assigned_batch.at(-1), text = await db.text.findMany({
    where: {
      batch: lastbatch
    },
    select: { id: !0, status: !0, reviewed: !0 }
  }), remaining_count = text.filter((t) => t.status !== "APPROVED").length, not_reviewed_count = text.filter((t) => t.reviewed === !1).length;
  return { remaining_count, not_reviewed_count };
}
async function getUserById(id) {
  return id === null ? null : await db.user.findUnique({
    where: { id }
  });
}
async function updateUserRole(id, role) {
  return await db.user.update({
    where: { id },
    data: { role }
  });
}
async function removeUser(username) {
  return await db.user.delete({
    where: { username }
  });
}

// app/components/AdminHistorySidebar.tsx
var import_react6 = require("@remix-run/react"), import_react7 = require("react");

// app/components/TextInfo.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function TextInfo({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "dark:text-white uppercase text-sm font-bold mb-2", children }, void 0, !1, {
    fileName: "app/components/TextInfo.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/History.tsx
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function HistoryItem({ id, user, onClick, icon, disabled }) {
  let { history } = (0, import_react5.useLoaderData)();
  return disabled ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "px-2 dark:text-white flex gap-3 cursor-pointer hover:border-2 border-purple-800", children: [
    id,
    " ",
    icon
  ] }, void 0, !0, {
    fileName: "app/components/History.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_react5.Link,
    {
      to: `/?session=${user.username}&history=${id}`,
      className: `px-2 flex gap-3 items-center ${history == id ? "bg-gray-400 dark:bg-gray-700" : ""}`,
      onClick,
      children: [
        id,
        " ",
        icon
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/History.tsx",
      lineNumber: 25,
      columnNumber: 5
    },
    this
  );
}
function AdminHistoryItem({
  id,
  onClick,
  icon,
  reviewed,
  selectedId
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "div",
    {
      className: "dark:text-white flex gap-3 cursor-pointer hover:border-2 border-purple-800",
      style: {
        background: selectedId == id ? "rgba(1,1,1,0.4)" : ""
      },
      onClick,
      children: [
        id,
        reviewed ? icon : null
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/History.tsx",
      lineNumber: 45,
      columnNumber: 5
    },
    this
  );
}
function DemoHistoryItem({
  id,
  user,
  onClick,
  icon,
  disabled
}) {
  return disabled ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "dark:text-white flex gap-3 cursor-pointer hover:border-2 border-purple-800", children: [
    id,
    " ",
    icon
  ] }, void 0, !0, {
    fileName: "app/components/History.tsx",
    lineNumber: 67,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "history-item flex gap-3 items-center", onClick, children: [
    id,
    " ",
    icon
  ] }, void 0, !0, {
    fileName: "app/components/History.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}

// app/lib/sortReviewedUpdate.ts
function sortUpdate_reviewed(a, b) {
  let parsedDate1 = new Date(a.updatedAt).valueOf(), parsedDate2 = new Date(b.updatedAt).valueOf();
  return a.reviewed === b.reviewed ? parsedDate2 - parsedDate1 : a.reviewed ? 1 : b.reviewed ? -1 : 0;
}

// app/assets/svgs.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Hamburger() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "svg",
    {
      className: "inline-block mr-2 cursor-pointer ",
      "aria-hidden": "true",
      fill: "gray",
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M3 5h18q0.414 0 0.707 0.293t0.293 0.707-0.293 0.707-0.707 0.293h-18q-0.414 0-0.707-0.293t-0.293-0.707 0.293-0.707 0.707-0.293zM3 17h18q0.414 0 0.707 0.293t0.293 0.707-0.293 0.707-0.707 0.293h-18q-0.414 0-0.707-0.293t-0.293-0.707 0.293-0.707 0.707-0.293zM3 11h18q0.414 0 0.707 0.293t0.293 0.707-0.293 0.707-0.707 0.293h-18q-0.414 0-0.707-0.293t-0.293-0.707 0.293-0.707 0.707-0.293z" }, void 0, !1, {
        fileName: "app/assets/svgs.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/assets/svgs.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}
function Crossburger() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "svg",
    {
      height: "20",
      width: "20",
      className: "inline-block mr-2 cursor-pointer md:hidden ",
      version: "1.1",
      id: "Layer_1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "-184.32 -184.32 880.64 880.64",
      fill: "#000000",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("g", { id: "SVGRepo_bgCarrier", "stroke-width": "0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "rect",
          {
            x: "-184.32",
            y: "-184.32",
            width: "880.64",
            height: "880.64",
            rx: "440.32",
            fill: "#000040",
            strokeWidth: "0"
          },
          void 0,
          !1,
          {
            fileName: "app/assets/svgs.tsx",
            lineNumber: 28,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/assets/svgs.tsx",
          lineNumber: 27,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "g",
          {
            id: "SVGRepo_tracerCarrier",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          },
          void 0,
          !1,
          {
            fileName: "app/assets/svgs.tsx",
            lineNumber: 39,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("g", { id: "SVGRepo_iconCarrier", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "path",
            {
              style: { fill: "#ffffff" },
              d: "M384.955,256l120.28-120.28c9.019-9.019,9.019-23.642,0-32.66L408.94,6.765 c-9.019-9.019-23.642-9.019-32.66,0l-120.28,120.28L135.718,6.765c-9.019-9.019-23.642-9.019-32.66,0L6.764,103.058 c-9.019,9.019-9.019,23.642,0,32.66l120.28,120.28L6.764,376.28c-9.019,9.019-9.019,23.642,0,32.66l96.295,96.294 c9.019,9.019,23.642,9.019,32.66,0l120.28-120.28l120.28,120.28c9.019,9.019,23.642,9.019,32.66,0l96.295-96.294 c9.019-9.019,9.019-23.642,0-32.66L384.955,256z"
            },
            void 0,
            !1,
            {
              fileName: "app/assets/svgs.tsx",
              lineNumber: 46,
              columnNumber: 9
            },
            this
          ),
          " "
        ] }, void 0, !0, {
          fileName: "app/assets/svgs.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/assets/svgs.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    this
  );
}
function Tick() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "svg",
    {
      "aria-hidden": "true",
      className: "fill-[#4fd364]",
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M9 16.172l10.594-10.594 1.406 1.406-12 12-5.578-5.578 1.406-1.406z" }, void 0, !1, {
        fileName: "app/assets/svgs.tsx",
        lineNumber: 63,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/assets/svgs.tsx",
      lineNumber: 56,
      columnNumber: 5
    },
    this
  );
}
function Cross() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "svg",
    {
      "aria-hidden": "true",
      className: "fill-[#f74c4a]",
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z" }, void 0, !1, {
        fileName: "app/assets/svgs.tsx",
        lineNumber: 76,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/assets/svgs.tsx",
      lineNumber: 69,
      columnNumber: 5
    },
    this
  );
}
function Right() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { "aria-hidden": "true", fill: "white", viewBox: "0 0 24 24", className: "c01125", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M9 16.172l10.594-10.594 1.406 1.406-12 12-5.578-5.578 1.406-1.406z" }, void 0, !1, {
    fileName: "app/assets/svgs.tsx",
    lineNumber: 83,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/assets/svgs.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
}
function Wrong() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { "aria-hidden": "true", fill: "white", viewBox: "0 0 24 24", className: "c01125", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z" }, void 0, !1, {
    fileName: "app/assets/svgs.tsx",
    lineNumber: 91,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/assets/svgs.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}
function Undo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { "aria-hidden": "true", fill: "white", viewBox: "0 0 24 24", className: "c01125", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M11.016 9l1.406 1.406-3.609 3.609h9.188v-10.031h2.016v12h-11.203l3.609 3.609-1.406 1.406-6-6z" }, void 0, !1, {
    fileName: "app/assets/svgs.tsx",
    lineNumber: 105,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/assets/svgs.tsx",
    lineNumber: 104,
    columnNumber: 5
  }, this);
}

// app/const.ts
var toolname = "word segmentation";

// app/components/AdminHistorySidebar.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function AdminHistorySidebar({
  user,
  setSelectedId,
  selectedId
}) {
  var _a, _b;
  let data = (0, import_react6.useLoaderData)(), socket = useSocket(), [openMenu, setOpenMenu] = (0, import_react7.useState)(!1), reval = (0, import_react6.useRevalidator)();
  (0, import_react7.useEffect)(() => {
    socket && socket.on("text-status-changed", (data2) => {
      reval.revalidate();
    });
  }, [socket]);
  let SidebarHeader = () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex bg-[#384451] px-2 py-3 items-center justify-between md:hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Link, { to: `/admin?session=${data.user.username}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "cursor-pointer", children: toolname }, void 0, !1, {
      fileName: "app/components/AdminHistorySidebar.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/AdminHistorySidebar.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "close", onClick: () => setOpenMenu(!1), children: "x" }, void 0, !1, {
      fileName: "app/components/AdminHistorySidebar.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AdminHistorySidebar.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "div",
      {
        className: "flex px-2 py-3 text-white bg-gray-600 text-lg font-semibold items-center  gap-2 ",
        onClick: () => setOpenMenu(!0),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Hamburger, {}, void 0, !1, {
            fileName: "app/components/AdminHistorySidebar.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_react6.Link,
            {
              to: `/admin/metabase?session=${data.user.username}`,
              style: { textDecoration: "none", color: "inherit" },
              children: toolname
            },
            void 0,
            !1,
            {
              fileName: "app/components/AdminHistorySidebar.tsx",
              lineNumber: 50,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/AdminHistorySidebar.tsx",
        lineNumber: 45,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "div",
      {
        className: `flex flex-col text-white bg-[#54606e] overflow-y-auto overflow-x-hidden max-h-[100vh] transition-all -translate-x-full z-30 ${openMenu ? "block translate-x-0" : ""} min-h-[100vh] w-[260px] md:translate-x-0`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "px-2 flex gap-2 flex-col border-b-2 border-b-[#384451] mb-3 pb-2 mt-2 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SidebarHeader, {}, void 0, !1, {
              fileName: "app/components/AdminHistorySidebar.tsx",
              lineNumber: 63,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_react6.Link,
              {
                to: `/admin/user?session=${data == null ? void 0 : data.user.username}`,
                className: "decoration-0 text-white bg-gray-500 h-fit px-2 py-1 ",
                children: "DASHBOARD"
              },
              void 0,
              !1,
              {
                fileName: "app/components/AdminHistorySidebar.tsx",
                lineNumber: 64,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TextInfo, { children: [
              "User : ",
              user == null ? void 0 : user.username
            ] }, void 0, !0, {
              fileName: "app/components/AdminHistorySidebar.tsx",
              lineNumber: 70,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TextInfo, { children: [
              "text id :",
              selectedId
            ] }, void 0, !0, {
              fileName: "app/components/AdminHistorySidebar.tsx",
              lineNumber: 71,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TextInfo, { children: [
              "Approved :",
              (_a = user == null ? void 0 : user.text) == null ? void 0 : _a.length
            ] }, void 0, !0, {
              fileName: "app/components/AdminHistorySidebar.tsx",
              lineNumber: 72,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TextInfo, { children: [
              "Rejected :",
              user == null ? void 0 : user._count.rejected_list
            ] }, void 0, !0, {
              fileName: "app/components/AdminHistorySidebar.tsx",
              lineNumber: 73,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TextInfo, { children: [
              "Reviewed :",
              user == null ? void 0 : user._count.text
            ] }, void 0, !0, {
              fileName: "app/components/AdminHistorySidebar.tsx",
              lineNumber: 74,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/AdminHistorySidebar.tsx",
            lineNumber: 62,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text-sm mb-2 font-bold", children: "History" }, void 0, !1, {
              fileName: "app/components/AdminHistorySidebar.tsx",
              lineNumber: 77,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col gap-2 max-h-fit overflow-y-auto", children: user && ((_b = user == null ? void 0 : user.text) == null ? void 0 : _b.sort(sortUpdate_reviewed).map((text) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              AdminHistoryItem,
              {
                id: text == null ? void 0 : text.id,
                onClick: () => {
                  setOpenMenu(!1), setSelectedId(text == null ? void 0 : text.id);
                },
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Tick, {}, void 0, !1, {
                  fileName: "app/components/AdminHistorySidebar.tsx",
                  lineNumber: 88,
                  columnNumber: 25
                }, this),
                reviewed: text == null ? void 0 : text.reviewed,
                selectedId
              },
              text.id + "-accepted",
              !1,
              {
                fileName: "app/components/AdminHistorySidebar.tsx",
                lineNumber: 81,
                columnNumber: 17
              },
              this
            ))) }, void 0, !1, {
              fileName: "app/components/AdminHistorySidebar.tsx",
              lineNumber: 78,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/AdminHistorySidebar.tsx",
            lineNumber: 76,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/AdminHistorySidebar.tsx",
        lineNumber: 57,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/AdminHistorySidebar.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
var AdminHistorySidebar_default = AdminHistorySidebar;

// app/components/Editor.tsx
var import_react8 = require("react"), import_react9 = require("@tiptap/react");

// app/lib/selectRange.ts
function selectText(element) {
  let range = document.createRange();
  range.selectNodeContents(element);
  let selection = window == null ? void 0 : window.getSelection();
  selection.removeAllRanges(), selection.addRange(range);
}
var selectRange_default = selectText;

// app/components/Editor.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), select = 0;
function EditorContainer({ editor }) {
  let content = editor == null ? void 0 : editor.getText();
  return (0, import_react8.useEffect)(() => {
    if (editor) {
      let handleKeyDown2 = function(e) {
        let key = e.key;
        if (key === "ArrowUp" || key === "ArrowDown" || key === "ArrowLeft" || key === "ArrowRight" || key === " ") {
          let elements = [];
          segments.forEach((segment, i) => {
            elements.push(segment);
          }), select >= 0 ? (key === "ArrowRight" && (select = select < segments.length - 1 ? select + 1 : select, selectRange_default(elements[select])), key === "ArrowLeft" && (select = select !== 0 ? select - 1 : select, selectRange_default(elements[select]))) : select = 0, key === " " && elements[select].click();
        }
      };
      var handleKeyDown = handleKeyDown2;
      let content2 = editor == null ? void 0 : editor.getText(), segments = document.querySelectorAll(".seg"), clickCount = 0, events = [], handleSegmentClick = (event) => {
        let modifiedContent = content2, selection = event.target.innerText, locationText = event.target.classList, spaceToAddLocation = parseInt(locationText[1].replace("s-", "")) + selection.length;
        clickCount++, setTimeout(() => {
          if (clickCount === 1) {
            content2[spaceToAddLocation] === " " ? modifiedContent = modifiedContent.slice(0, spaceToAddLocation) + modifiedContent.slice(spaceToAddLocation + 1) : modifiedContent = modifiedContent.slice(0, spaceToAddLocation) + " " + modifiedContent.slice(spaceToAddLocation);
            let newText = insertHtmlOnText_default(modifiedContent);
            editor == null || editor.commands.setContent(newText);
          } else if (clickCount === 2) {
            let condition = ["\u0F62\u0F0B", "\u0F66\u0F0B", "\u0F60\u0F72\u0F0B", "\u0F0D\u0F0D", "\u0F0D", "\u0F60\u0F44\u0F0B"], includedCondition = condition.find(
              (cond) => selection.includes(cond)
            ), exactCondition = condition.find((cond) => cond === selection);
            if (includedCondition && !exactCondition) {
              let s = selection.split(includedCondition);
              s[1] = " ", s[2] = includedCondition;
              let middle = s.join(""), start = spaceToAddLocation - selection.length, end = spaceToAddLocation - selection.length + selection.length;
              modifiedContent = modifiedContent.slice(0, start) + middle + modifiedContent.slice(end);
              let newText = insertHtmlOnText_default(modifiedContent);
              editor == null || editor.commands.setContent(newText);
            } else {
              let middle = selection.slice(0, -1) + " " + selection.slice(-1), start = spaceToAddLocation - selection.length, end = spaceToAddLocation - selection.length + selection.length;
              modifiedContent = modifiedContent.slice(0, start) + middle + modifiedContent.slice(end);
              let newText = insertHtmlOnText_default(modifiedContent);
              editor == null || editor.commands.setContent(newText);
            }
          }
          setTimeout(() => {
            clickCount = 0;
          }, 300);
        }, 200);
      };
      if (segments.forEach((segment, i) => {
        let event = {
          segment,
          listener: handleSegmentClick
        };
        segment.addEventListener("click", event.listener), events[i] = event;
      }), select > 1) {
        let elements = document.querySelectorAll(".seg");
        selectRange_default(elements[select]);
      }
      return document.addEventListener("keydown", handleKeyDown2), () => {
        segments.forEach((segment, i) => {
          segment.removeEventListener("click", events[i].listener);
        }), document.removeEventListener("keydown", handleKeyDown2);
      };
    }
  }, [editor, content]), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-slate-600 h-[90%] m-auto bg-white max-h-[60dvh] overflow-y-scroll p-2 text-3xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react9.EditorContent, { editor }, void 0, !1, {
      fileName: "app/components/Editor.tsx",
      lineNumber: 140,
      columnNumber: 7
    }, this),
    editor && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      import_react9.BubbleMenu,
      {
        editor,
        tippyOptions: { duration: 100 },
        shouldShow: (editor2) => {
          let { from } = editor2, textLength = editor2 == null ? void 0 : editor2.editor.getText().length, textContent = editor2.state.doc.textBetween(from - 1, from, "");
          return from === 1 || from - 1 === textLength || textContent === " " ? !1 : editor2.state.selection.from === editor2.state.selection.to;
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "button",
          {
            onClick: () => {
              let { from, to } = editor == null ? void 0 : editor.state.selection, content2 = editor == null ? void 0 : editor.getText();
              if (!content2)
                return;
              let modifiedContent = content2.substring(0, from - 1) + " " + content2.substring(to - 1), newText = insertHtmlOnText_default(modifiedContent);
              editor == null || editor.commands.setContent(newText);
            },
            id: "spaceButton",
            style: { display: "none" }
          },
          void 0,
          !1,
          {
            fileName: "app/components/Editor.tsx",
            lineNumber: 156,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/components/Editor.tsx",
        lineNumber: 142,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Editor.tsx",
    lineNumber: 139,
    columnNumber: 5
  }, this);
}
var Editor_default = EditorContainer;

// app/components/Button.tsx
var import_react10 = require("react");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Button({
  handleClick,
  value,
  disabled,
  title,
  shortCut,
  className
}) {
  let classbtn = "h-[100px] w-[100px]  cursor-pointer hover:opacity-80 disabled:opacity-50", innerValue = value, btnRef = (0, import_react10.useRef)(null);
  switch ((0, import_react10.useEffect)(() => {
    function handlekeyDown(e) {
      e.key === shortCut && btnRef.current.click();
    }
    return document.addEventListener("keydown", handlekeyDown), () => {
      document.removeEventListener("keydown", handlekeyDown);
    };
  }, []), value) {
    case "CONFIRM":
      innerValue = /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Right, {}, void 0, !1, {
        fileName: "app/components/Button.tsx",
        lineNumber: 37,
        columnNumber: 20
      }, this), classbtn += " bg-[--success-btn]";
      break;
    case "REJECT":
      innerValue = /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Wrong, {}, void 0, !1, {
        fileName: "app/components/Button.tsx",
        lineNumber: 41,
        columnNumber: 20
      }, this), classbtn += " bg-[--cancel-btn]";
      break;
    case "UNDO":
      innerValue = /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Undo, {}, void 0, !1, {
        fileName: "app/components/Button.tsx",
        lineNumber: 46,
        columnNumber: 20
      }, this), classbtn += " bg-[--normal-btn]";
      break;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "button",
    {
      disabled,
      title,
      className: className || classbtn,
      onClick: handleClick,
      ref: btnRef,
      children: innerValue
    },
    void 0,
    !1,
    {
      fileName: "app/components/Button.tsx",
      lineNumber: 51,
      columnNumber: 5
    },
    this
  );
}
var Button_default = Button;

// app/tiptapProps/useEditorTiptap.tsx
var import_react11 = require("@tiptap/react"), import_starter_kit = __toESM(require("@tiptap/starter-kit"));

// app/tiptapProps/events.ts
var handleDOMEvents = {
  keydown: (editor, event) => {
    let charCode = String.fromCharCode(event.which).toLowerCase(), copyPressed = (event.ctrlKey || event.metaKey) && charCode === "c";
    if ([32].includes(event.keyCode)) {
      let btn = document.getElementById("spaceButton");
      btn == null || btn.click();
    }
    ![37, 38, 39, 40].includes(event.keyCode) && !copyPressed && event.preventDefault();
  },
  textInput: (v, evt) => {
    evt.preventDefault();
  },
  drop: (v, e) => {
    e.preventDefault();
  },
  dragstart: (v, e) => {
    e.preventDefault();
  },
  paste: (v, event) => {
    event.preventDefault();
  }
}, editorProps = {
  handleDOMEvents,
  attributes: {
    inputmode: "none"
  }
};

// app/tiptapProps/extension/character.ts
var import_core = require("@tiptap/core"), Character = (charClick) => import_core.Mark.create({
  name: "Character",
  addOptions() {
    return {
      multicolor: !1,
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    return {
      class: {
        default: "segment"
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "Character"
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      (0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes),
      0
    ];
  }
  // addCommands() {
  //   return {
  //     setSpace:
  //       (attributes) =>
  //       ({ commands }) => {
  //         return commands.setMark(this.name, attributes);
  //       },
  //     toggleSpace:
  //       (attributes) =>
  //       ({ commands }) => {
  //         return commands.toggleMark(this.name, attributes);
  //       },
  //     unsetSpace:
  //       () =>
  //       ({ commands }) => {
  //         return commands.unsetMark(this.name);
  //       },
  //   };
  // },
  // addProseMirrorPlugins(this) {
  //   return [
  //     new Plugin({
  //       props: {
  //         handleClick: (view, pos, event) => {
  //           const { schema, doc, tr } = view.state;
  //           if (pos < 0 || pos > doc.content.size) {
  //             return false;
  //           }
  //           const range = getMarkRange(
  //             doc.resolve(pos),
  //             schema.marks.Character
  //           );
  //           if (!range) return false;
  //           const [$start, $end] = [
  //             doc.resolve(range.from),
  //             doc.resolve(range.to),
  //           ];
  //           view.dispatch(tr.setSelection(new TextSelection($start, $end)));
  //           charClick();
  //           return true;
  //         },
  //       },
  //     }),
  //   ];
  // },
});

// app/tiptapProps/extension/space.ts
var import_core2 = require("@tiptap/core"), import_prosemirror_state = require("prosemirror-state");
var Space = (setter) => import_core2.Mark.create({
  name: "Space",
  addOptions() {
    return {
      multicolor: !1,
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    return {
      class: {
        default: "space"
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "Space"
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      (0, import_core2.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes),
      0
    ];
  },
  addCommands() {
    return {
      setSpace: (attributes) => ({ commands }) => commands.setMark(this.name, attributes),
      toggleSpace: (attributes) => ({ commands }) => commands.toggleMark(this.name, attributes),
      unsetSpace: () => ({ commands }) => commands.unsetMark(this.name)
    };
  },
  addProseMirrorPlugins() {
    return [
      new import_prosemirror_state.Plugin({
        props: {
          handleClick: (view, pos, event) => {
            let { schema, doc, tr } = view.state;
            if (pos < 0 || pos > doc.content.size)
              return !1;
            let range = (0, import_core2.getMarkRange)(doc.resolve(pos), schema.marks.Space);
            if (!range)
              return !1;
            setter();
            let [$start, $end] = [
              doc.resolve(range.from),
              doc.resolve(range.to)
            ];
            view.dispatch(tr.setSelection(new import_prosemirror_state.TextSelection($start, $end)));
            let content = this.editor.getText(), modifiedContent = content.substring(0, $start.pos - 1) + content.substring($end.pos - 1), newText = insertHtmlOnText_default(modifiedContent);
            return removeSpace(modifiedContent) === removeSpace(content) && (this.editor.commands.setContent(newText), this.editor.commands.unsetSpace()), !0;
          }
        }
      })
    ];
  }
});

// app/tiptapProps/useEditorTiptap.tsx
var useEditorTiptap = (newText) => {
  let setter = () => {
  }, charClick = () => {
  };
  return (0, import_react11.useEditor)(
    {
      extensions: [import_starter_kit.default, Space(setter), Character(charClick)],
      content: newText,
      editorProps,
      editable: !1
    },
    [newText]
  );
};

// app/routes/admin_.user.review.$slug.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), loader2 = async ({ request, params }) => {
  let session = new URL(request.url).searchParams.get("session"), [user, annotator] = await Promise.all([
    getUser(session),
    getUser(params.slug)
  ]);
  if ((annotator == null ? void 0 : annotator.reviewer_id) !== (user == null ? void 0 : user.id))
    return (0, import_node2.redirect)("/?session=" + session);
  let currentText = await db.text.findFirst({
    where: {
      reviewed: !1,
      modified_by_id: annotator == null ? void 0 : annotator.id,
      status: "APPROVED"
    },
    orderBy: { id: "asc" }
  });
  return { user, annotator, currentText };
};
function UserDetail() {
  let fetcher = (0, import_react12.useFetcher)(), { annotator, user, currentText } = (0, import_react_router.useLoaderData)(), socket = useSocket(), [content, setContent] = (0, import_react13.useState)(""), [selectedId, setSelectedId] = (0, import_react13.useState)(
    currentText == null ? void 0 : currentText.id
  );
  (0, import_react13.useEffect)(() => {
    setSelectedId(currentText == null ? void 0 : currentText.id);
  }, [currentText == null ? void 0 : currentText.id]), (0, import_react13.useEffect)(() => {
    var _a;
    if (!annotator)
      return;
    let display = selectedId ? annotator.text.find((d) => d.id === selectedId) : annotator.text.sort(sortUpdate_reviewed).find((d) => d.id === (currentText == null ? void 0 : currentText.id));
    if (display) {
      let show = ((_a = JSON.parse(display == null ? void 0 : display.modified_text)) == null ? void 0 : _a.join(" ")) || (display == null ? void 0 : display.original_text);
      setContent(show);
    }
  }, [selectedId]);
  let newText = insertHtmlOnText_default(content), editor = useEditorTiptap(newText);
  if (!editor)
    return null;
  function text_reviewed() {
    setTimeout(() => {
      socket == null || socket.emit("reviewed", { annotator });
    }, 1e3);
  }
  let saveText2 = () => {
    fetcher.submit(
      {
        id: selectedId,
        modified_text: editor == null ? void 0 : editor.getText(),
        userId: annotator.id,
        adminId: user == null ? void 0 : user.id
      },
      { method: "POST", action: "/api/text" }
    ), text_reviewed();
  }, rejectTask = () => {
    fetcher.submit(
      { id: selectedId, userId: annotator.id, _action: "reject", admin: !0 },
      { method: "PATCH", action: "/api/text" }
    ), text_reviewed();
  }, isButtonDisabled = (editor == null ? void 0 : editor.getText().length) < 1 || fetcher.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-col md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      AdminHistorySidebar_default,
      {
        user: annotator,
        selectedId,
        setSelectedId
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin_.user.review.$slug.tsx",
        lineNumber: 101,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex-1 flex items-center flex-col md:mt-[10vh]", children: [
      !currentText || !selectedId || !editor ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "fixed top-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]", children: "Thank you . your work is complete ! \u{1F60A}\u{1F60A}\u{1F60A}" }, void 0, !1, {
        fileName: "app/routes/admin_.user.review.$slug.tsx",
        lineNumber: 109,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "fixed bottom-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center justify-between opacity-75 text-sm font-bold px-2 capitalize pt-1 ", children: "transcript" }, void 0, !1, {
          fileName: "app/routes/admin_.user.review.$slug.tsx",
          lineNumber: 114,
          columnNumber: 13
        }, this),
        !editor && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: "loading..." }, void 0, !1, {
          fileName: "app/routes/admin_.user.review.$slug.tsx",
          lineNumber: 117,
          columnNumber: 25
        }, this),
        fetcher.state !== "idle" && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "w-full flex justify-center items-center", children: "saving" }, void 0, !1, {
          fileName: "app/routes/admin_.user.review.$slug.tsx",
          lineNumber: 119,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Editor_default, { editor }, void 0, !1, {
          fileName: "app/routes/admin_.user.review.$slug.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin_.user.review.$slug.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex gap-2 fixed bottom-0 justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          Button_default,
          {
            disabled: isButtonDisabled,
            handleClick: saveText2,
            value: "CONFIRM",
            title: "CONFIRM (a)",
            shortCut: "a"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin_.user.review.$slug.tsx",
            lineNumber: 127,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          Button_default,
          {
            disabled: isButtonDisabled,
            handleClick: rejectTask,
            value: "REJECT",
            title: "REJECT (x)",
            shortCut: "x"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin_.user.review.$slug.tsx",
            lineNumber: 134,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/admin_.user.review.$slug.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin_.user.review.$slug.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin_.user.review.$slug.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}
var admin_user_review_slug_default = UserDetail;

// app/routes/admin.user.$username.tsx
var admin_user_username_exports = {};
__export(admin_user_username_exports, {
  action: () => action,
  default: () => admin_user_username_default,
  loader: () => loader3
});
var import_react24 = require("@remix-run/react");

// app/components/admin/AboutUser.tsx
var import_react23 = require("@remix-run/react");

// app/components/AllowAnnotation.tsx
var import_react14 = require("@remix-run/react");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function AllowAnnotation({ annotator }) {
  let fetcher = (0, import_react14.useFetcher)(), socket = useSocket();
  function handleChangeAllow() {
    fetcher.submit(
      {
        id: annotator.id,
        allow: !annotator.allow_assign,
        action: "change_allow_assign"
      },
      {
        action: "/api/user",
        method: "POST"
      }
    ), socket == null || socket.emit("change-allow", { annotator });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "input",
    {
      title: "active/inactive",
      type: "checkbox",
      className: `toggle toggle-success ${fetcher.state !== "idle" && "cursor-not-allowed opacity-50 pointer-events-non"}`,
      checked: annotator == null ? void 0 : annotator.allow_assign,
      onChange: handleChangeAllow,
      "aria-label": "Toggle_role"
    },
    void 0,
    !1,
    {
      fileName: "app/components/AllowAnnotation.tsx",
      lineNumber: 26,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/AllowAnnotation.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
var AllowAnnotation_default = AllowAnnotation;

// app/components/AssignCategory.tsx
var import_react15 = require("@remix-run/react"), import_react_tailwindcss_select = __toESM(require("react-tailwindcss-select")), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function AssignCategory({ user }) {
  var _a;
  let { categories } = (0, import_react15.useLoaderData)(), fetcher = (0, import_react15.useFetcher)(), id = user.id;
  function handleChange(data) {
    let categories2 = data == null ? void 0 : data.map((c) => c.value), category = (data == null ? void 0 : data.length) > 0 || data ? JSON.stringify(categories2) : "[]";
    fetcher.submit(
      {
        id,
        category,
        action: "change_categories"
      },
      {
        method: "POST",
        action: "/api/user"
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "w-[50%] flex gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    import_react_tailwindcss_select.default,
    {
      isSearchable: !0,
      primaryColor: "green",
      isMultiple: !0,
      onChange: handleChange,
      value: (_a = user == null ? void 0 : user.categories) == null ? void 0 : _a.map((c) => ({ value: c, label: c })),
      options: categories.map((c) => ({ value: c, label: c }))
    },
    void 0,
    !1,
    {
      fileName: "app/components/AssignCategory.tsx",
      lineNumber: 29,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/AssignCategory.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
var AssignCategory_default = AssignCategory;

// app/components/AssignNickName.tsx
var import_react16 = require("@remix-run/react"), import_react17 = __toESM(require("react")), import_fi = require("react-icons/fi"), import_ti = require("react-icons/ti"), import_im = require("react-icons/im"), import_react18 = require("react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function AssignNickName({ user }) {
  var _a;
  let fetcher = (0, import_react16.useFetcher)(), inputRef = import_react17.default.useRef(null), [openEdit, setOpenEdit] = import_react17.default.useState(!1);
  function handleSubmit() {
    var _a2;
    let value = (_a2 = inputRef.current) == null ? void 0 : _a2.value;
    value && (fetcher.submit(
      {
        id: user.id,
        nickname: value,
        action: "change_nickname"
      },
      {
        action: "/api/user",
        method: "POST"
      }
    ), setOpenEdit(!1));
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: openEdit ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "join ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "input",
      {
        type: "text",
        defaultValue: user.nickname,
        name: "nickname",
        ref: inputRef,
        className: "input input-bordered join-item"
      },
      void 0,
      !1,
      {
        fileName: "app/components/AssignNickName.tsx",
        lineNumber: 40,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "button",
      {
        type: "button",
        className: "btn join-item",
        onClick: handleSubmit,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_ti.TiTick, { color: "green" }, void 0, !1, {
          fileName: "app/components/AssignNickName.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/AssignNickName.tsx",
        lineNumber: 47,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "button",
      {
        type: "button",
        className: "btn join-item",
        onClick: () => setOpenEdit(!1),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_im.ImCross, { color: "red" }, void 0, !1, {
          fileName: "app/components/AssignNickName.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/AssignNickName.tsx",
        lineNumber: 54,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/AssignNickName.tsx",
    lineNumber: 39,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex gap-3", children: [
    ((_a = fetcher == null ? void 0 : fetcher.formData) == null ? void 0 : _a.get("nickname")) || user.nickname,
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { onClick: () => setOpenEdit(!0), children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_fi.FiEdit2, {}, void 0, !1, {
      fileName: "app/components/AssignNickName.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/AssignNickName.tsx",
      lineNumber: 34,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AssignNickName.tsx",
    lineNumber: 32,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/AssignNickName.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
var AssignNickName_default = (0, import_react18.memo)(AssignNickName);

// app/components/AssignReviewer.tsx
var import_react19 = require("@remix-run/react"), import_react_tailwindcss_select2 = __toESM(require("react-tailwindcss-select")), import_ai = require("react-icons/ai"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function AssignReviewer({ user }) {
  var _a, _b;
  let { reviewers } = (0, import_react19.useOutletContext)(), options = reviewers.map((c) => ({
    value: c.username,
    label: c.username
  })), fetcher = (0, import_react19.useFetcher)();
  function handleChange(data) {
    let reviewer = data.value;
    reviewer || (data = ""), confirm(
      "do you want " + reviewer + " to be the reviewer of " + user.nickname + "?"
    ) && fetcher.submit(
      {
        id: user.id,
        reviewer,
        action: "change_reviewer"
      },
      {
        method: "POST",
        action: "/api/user"
      }
    );
  }
  let value = {
    value: (_a = user.reviewer) == null ? void 0 : _a.username,
    label: (_b = user.reviewer) == null ? void 0 : _b.username
  };
  function handleDelete() {
    var _a2;
    confirm(
      "do you want to remove " + ((_a2 = user.reviewer) == null ? void 0 : _a2.username) + " as reviewer?"
    ) && fetcher.submit(
      {
        id: user.id,
        reviewer: "",
        action: "change_reviewer"
      },
      {
        method: "POST",
        action: "/api/user"
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex gap-2 w-[50%]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      import_react_tailwindcss_select2.default,
      {
        isMultiple: !1,
        value,
        primaryColor: "green",
        onChange: handleChange,
        options,
        isSearchable: !0,
        loading: fetcher.state !== "idle"
      },
      void 0,
      !1,
      {
        fileName: "app/components/AssignReviewer.tsx",
        lineNumber: 69,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex items-center cursor-pointer", onClick: handleDelete, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_ai.AiFillDelete, {}, void 0, !1, {
      fileName: "app/components/AssignReviewer.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/AssignReviewer.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AssignReviewer.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}
var AssignReviewer_default = AssignReviewer;

// app/components/AssignRole.tsx
var import_react20 = require("react"), import_react_tailwindcss_select3 = __toESM(require("react-tailwindcss-select")), import_react_router_dom = require("react-router-dom"), import_fi2 = require("react-icons/fi"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function AssignRole({
  annotator,
  isAdmin
}) {
  let [editRole, setEditRole] = (0, import_react20.useState)(!1), fetcher = (0, import_react_router_dom.useFetcher)();
  function openRoleEdit() {
    setEditRole(!0);
  }
  let options = [
    { value: "ADMIN", label: "ADMIN" },
    { value: "REVIEWER", label: "REVIEWER" },
    { value: "ANNOTATOR", label: "ANNOTATOR" },
    { value: "USER", label: "USER" }
  ], role = annotator == null ? void 0 : annotator.role, value = { value: role, label: role };
  function handleChange(data) {
    let role2 = data == null ? void 0 : data.value;
    role2 || (data = ""), confirm(
      "do you want " + annotator.nickname + " to be " + role2 + "?"
    ) && (fetcher.submit(
      {
        id: annotator.id,
        role: role2,
        action: "change_role"
      },
      {
        method: "POST",
        action: "/api/user"
      }
    ), setEditRole(!1));
  }
  return editRole ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    import_react_tailwindcss_select3.default,
    {
      isMultiple: !1,
      value,
      primaryColor: "green",
      onChange: handleChange,
      options,
      isSearchable: !0,
      loading: fetcher.state !== "idle"
    },
    void 0,
    !1,
    {
      fileName: "app/components/AssignRole.tsx",
      lineNumber: 53,
      columnNumber: 7
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex gap-2 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "font-light text-sm", children: annotator == null ? void 0 : annotator.role }, void 0, !1, {
      fileName: "app/components/AssignRole.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    isAdmin && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("button", { onClick: openRoleEdit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_fi2.FiEdit2, {}, void 0, !1, {
      fileName: "app/components/AssignRole.tsx",
      lineNumber: 68,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/AssignRole.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AssignRole.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}
var AssignRole_default = AssignRole;

// app/components/AssignedBatchList.tsx
var import_react22 = require("@remix-run/react");

// app/components/hooks/useModal.tsx
var import_react21 = require("react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function useModal() {
  let [isOpen, setIsOpen] = (0, import_react21.useState)(!1), openModal = () => {
    setIsOpen(!0);
  }, Toggle_Modal = ({ children, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("button", { onClick: openModal, ...props, children }, void 0, !1, {
    fileName: "app/components/hooks/useModal.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
  function changeOpen() {
    setIsOpen(!isOpen);
  }
  return { Toggle_Modal, Modal: ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
    "dialog",
    {
      open: isOpen,
      className: "modal z-20 absolute",
      onClose: () => setIsOpen(!1),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "modal-box w-11/12 max-w-5xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            "button",
            {
              type: "button",
              onClick: () => setIsOpen(!1),
              className: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2",
              children: "\u2715"
            },
            void 0,
            !1,
            {
              fileName: "app/components/hooks/useModal.tsx",
              lineNumber: 26,
              columnNumber: 13
            },
            this
          ),
          children
        ] }, void 0, !0, {
          fileName: "app/components/hooks/useModal.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "modal-backdrop backdrop-blur-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("button", { type: "button", onClick: () => setIsOpen(!1), children: "close" }, void 0, !1, {
          fileName: "app/components/hooks/useModal.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/hooks/useModal.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/hooks/useModal.tsx",
      lineNumber: 20,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/hooks/useModal.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this), changeOpen };
}
var useModal_default = useModal;

// app/components/AssignedBatchList.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function AssignedBatchList({ user }) {
  let { currentBatch } = (0, import_react22.useLoaderData)(), { Modal, Toggle_Modal } = useModal_default(), userfetcher = (0, import_react22.useFetcher)(), removeBatch = (e) => {
    confirm("Are you sure you want to remove this group from user?") && userfetcher.submit(
      { batch: e, id: user == null ? void 0 : user.id },
      {
        method: "DELETE"
      }
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mt-2 flex gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Toggle_Modal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "text-black underline dark:text-white", children: "Active Jobs" }, void 0, !1, {
      fileName: "app/components/AssignedBatchList.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/AssignedBatchList.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Modal, { children: currentBatch.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      "span",
      {
        className: " text-black  mr-1 cursor-pointer p-1 border-2 rounded border-gray-300",
        onClick: () => removeBatch(item),
        children: item
      },
      item,
      !1,
      {
        fileName: "app/components/AssignedBatchList.tsx",
        lineNumber: 29,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/AssignedBatchList.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AssignedBatchList.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
var AssignedBatchList_default = AssignedBatchList;

// app/components/admin/AboutUser.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function Info({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col items-start px-2 text-lg mt-2 dark:text-white text-black", children }, void 0, !1, {
    fileName: "app/components/admin/AboutUser.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
function Title({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "text-lg font-bold flex justify-between w-full", children }, void 0, !1, {
    fileName: "app/components/admin/AboutUser.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
var AboutUser = ({
  selectedUser,
  removeUser: removeUser2
}) => {
  let { user } = (0, import_react23.useLoaderData)(), { current_user } = (0, import_react23.useOutletContext)(), annotator = user, url = `/admin/user/review/${selectedUser == null ? void 0 : selectedUser.username}?session=` + (current_user == null ? void 0 : current_user.username), isAdmin = (current_user == null ? void 0 : current_user.role) === "ADMIN";
  return selectedUser === "" || !annotator ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "sticky top-[80px]  rounded-sm border border-stroke bg-white dark:bg-slate-600  px-5 pt-6 pb-10 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-10 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col md:flex-row justify-between px-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h4", { className: "mb-6 text-xl font-semibold text-black dark:text-white", children: annotator == null ? void 0 : annotator.username }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(AllowAnnotation_default, { annotator }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Info, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Title, { children: "Name:" }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(AssignNickName_default, { user: annotator }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Info, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Title, { children: "Role" }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(AssignRole_default, { annotator, isAdmin }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Info, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Title, { children: "Email:" }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: annotator == null ? void 0 : annotator.username }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Info, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Title, { children: "Reviewer:" }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(AssignReviewer_default, { user: annotator }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Info, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Title, { children: "Category:" }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(AssignCategory_default, { user: annotator }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Info, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(AssignedBatchList_default, { user: annotator }, void 0, !1, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    isAdmin && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Info, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      "div",
      {
        onClick: removeUser2,
        className: "underline text-red-500 cursor-pointer ",
        children: "remove user"
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 75,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      import_react23.Link,
      {
        title: "visit",
        className: "bg-green-500 text-white font-bold py-1 px-3 w-full  text-center hover:opacity-90 absolute bottom-0 left-0 right-0 ",
        to: url,
        children: "Visit"
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 83,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/admin/AboutUser.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}, AboutUser_default = AboutUser;

// app/model/server.group.ts
var getAllUniqueBatches = async (category) => {
  try {
    let batches = (await db.text.findMany({
      where: {
        category: { in: category }
      },
      select: {
        batch: !0
      },
      orderBy: {
        batch: "asc"
      }
    })).map((text) => text.batch);
    return [...new Set(batches)];
  } catch (error2) {
    throw console.error("An error occurred while fetching unique batches:", error2), error2;
  }
}, getAllAssignedBatches = async () => {
  try {
    let allBatches = (await db.user.findMany({
      select: {
        assigned_batch: !0
      }
    })).flatMap((user) => user.assigned_batch);
    return [...new Set(allBatches)];
  } catch (error2) {
    throw console.error("An error occurred while fetching assigned batches:", error2), error2;
  }
}, getUnassignedBatch = async (category) => {
  try {
    let allBatches = await getAllUniqueBatches(category), assignedBatches = await getAllAssignedBatches();
    return allBatches.filter((batch) => !assignedBatches.includes(batch)).sort((a, b) => parseInt(a) - parseInt(b))[0];
  } catch (error2) {
    throw console.error(
      "An error occurred while fetching unassigned batches:",
      error2
    ), error2;
  }
}, getUniqueTextsGroup = async () => {
  let textRecords = await db.text.findMany({
    select: {
      version: !0,
      category: !0,
      // Include category in the query
      reviewed: !0
    },
    orderBy: {
      updatedAt: "desc"
    }
  }), uniqueVersionCategories = /* @__PURE__ */ new Map(), versionCount = {}, reviewedCount = {};
  for (let record of textRecords) {
    uniqueVersionCategories.has(record.version) || uniqueVersionCategories.set(record.version, record.category);
    let version = record.version;
    versionCount[version] ? versionCount[version]++ : versionCount[version] = 1, record.reviewed && (reviewedCount[version] ? reviewedCount[version]++ : reviewedCount[version] = 1);
  }
  return Array.from(uniqueVersionCategories, ([version, category]) => ({
    version,
    category,
    count: versionCount[version] || 0,
    completed_count: reviewedCount[version] || 0
  }));
};

// app/model/server.text.ts
async function checkAndAssignBatch(userId) {
  var _a;
  try {
    let batchToAssign = null, user = await db.user.findUnique({
      where: { id: userId },
      select: {
        username: !0,
        assigned_batch: !0,
        ignored_list: !0,
        categories: !0
      }
    }), assigned_batch = user == null ? void 0 : user.assigned_batch;
    if (!user)
      return null;
    if ((assigned_batch == null ? void 0 : assigned_batch.length) === 0)
      batchToAssign = await getUnassignedBatch(user.categories);
    else {
      let textsInBatch = await db.text.findMany({
        where: {
          batch: { in: user.assigned_batch }
        },
        select: {
          status: !0,
          modified_text: !0,
          batch: !0,
          reviewed: !0
        }
      });
      for (let batch of user.assigned_batch) {
        let batchList = textsInBatch.filter((item) => item.batch === batch);
        if (batchList.some((text) => text.modified_text === null) || batchList.some(
          (text) => text.status === null || text.status === "PENDING"
        ))
          return batch;
      }
      batchToAssign || (batchToAssign = await getUnassignedBatch(user.categories));
    }
    if (!batchToAssign)
      return null;
    if (!((_a = user == null ? void 0 : user.assigned_batch) != null && _a.includes(batchToAssign))) {
      let updatedUser = await db.user.update({
        where: { id: userId },
        data: {
          assigned_batch: {
            set: [...(user == null ? void 0 : user.assigned_batch) || [], batchToAssign]
          }
        }
      });
    }
    return batchToAssign;
  } catch (error2) {
    throw console.error(
      "An error occurred while checking and assigning batch:",
      error2
    ), error2;
  }
}
async function getTextToDisplay(userId, history) {
  if (history) {
    let text2 = await db.text.findUnique({
      where: { id: parseInt(history) }
    }), show = text2 != null && text2.modified_text ? JSON.parse(text2 == null ? void 0 : text2.modified_text).join(" ") : text2 == null ? void 0 : text2.original_text;
    return {
      ...text2,
      id: text2 == null ? void 0 : text2.id,
      original_text: show,
      status: text2 == null ? void 0 : text2.status
    };
  }
  let batch = await checkAndAssignBatch(userId), text = await db.text.findFirst({
    where: {
      batch,
      OR: [{ status: null }, { status: "PENDING" }]
    },
    orderBy: {
      id: "asc"
    },
    select: {
      id: !0,
      original_text: !0,
      modified_text: !0,
      status: !0,
      batch: !0
    }
  });
  return text || null;
}
async function getProgress() {
  try {
    let total_count = await db.text.count(), reviewed_count = await db.text.count({
      where: { reviewed: !0 }
    });
    return { total: total_count, reviewed: reviewed_count };
  } catch (e) {
    throw new Error(e);
  }
}
async function rejectText(id, userId) {
  return await db.text.update({
    where: {
      id
    },
    data: {
      status: "REJECTED",
      modified_by: { disconnect: { id: userId } },
      rejected_by: { connect: { id: userId } },
      reviewed: !1
    }
  });
}
async function removeRejectText(id, userId, status) {
  let text = db.text.update({
    where: {
      id
    },
    data: {
      status,
      rejected_by: { disconnect: { id: userId } }
    }
  }), user = db.user.update({
    where: {
      id: userId
    },
    data: {
      text: {
        connect: { id }
      }
    }
  });
  return text;
}
function saveText(id, text, userId, adminId, time) {
  let isReviewer = !!adminId, duration = time ? parseFloat(time) : null;
  return isReviewer ? db.text.update({
    where: {
      id
    },
    data: {
      modified_text: JSON.stringify(text.split(" ")),
      status: "APPROVED",
      rejected_by: { disconnect: { id: userId } },
      reviewed: !0,
      reviewed_by_id: adminId
    }
  }) : db.text.update({
    where: {
      id
    },
    data: {
      modified_text: JSON.stringify(text.split(" ")),
      modified_by_id: userId,
      reviewed: !1,
      status: "APPROVED",
      rejected_by: { disconnect: { id: userId } },
      duration,
      modified_on: /* @__PURE__ */ new Date(),
      word_count: text.split(" ").length
    }
  });
}
async function getAprovedBatch() {
  let data = await db.text.findMany({
    select: {
      batch: !0
    }
  }), uniqueGroups = /* @__PURE__ */ new Set(), result = {};
  data.forEach((item) => {
    uniqueGroups.add(item.batch);
  });
  let text_group = await db.text.findMany({
    where: {
      batch: { in: Array.from(uniqueGroups) }
    },
    select: {
      id: !0,
      status: !0,
      batch: !0,
      ignored_by: !0,
      reviewed: !0
    }
  });
  for (let item of uniqueGroups) {
    let text = text_group.filter((t) => t.batch === item), approved = text.every((item2) => item2.status === "APPROVED"), reviewed = text.every((item2) => item2.reviewed === !0), rejected = text.some((item2) => item2.status === "REJECTED");
    result[item] = { approved, rejected, reviewed };
  }
  return result;
}
async function getNumberOfReject(id) {
  try {
    let text = await db.text.findUnique({
      where: { id },
      select: { reject_count: !0 }
    });
    return (text == null ? void 0 : text.reject_count) || 0;
  } catch (e) {
    throw new Error(e);
  }
}
async function updateTextRejectCount(id) {
  try {
    let text = await db.text.update({
      where: { id },
      data: {
        reject_count: { increment: 1 }
      }
    });
    return (text == null ? void 0 : text.reject_count) || 0;
  } catch (e) {
    throw new Error(e);
  }
}
async function changeCategory(version, category) {
  try {
    return (await db.text.updateMany({
      where: { version },
      data: {
        category
      }
    })).count;
  } catch (e) {
    throw new Error(e);
  }
}
async function deleteTextByVersion(version) {
  try {
    return (await db.text.deleteMany({
      where: { version }
    })).count;
  } catch (e) {
    throw new Error(e + "cannot delete");
  }
}
async function getLastBatch() {
  let batch = await db.text.findFirst({
    select: {
      batch: !0
    },
    orderBy: {
      batch: "desc"
    }
  });
  return (batch == null ? void 0 : batch.batch) || 0;
}

// app/model/utils/server.category.ts
async function getCategories() {
  let data = await db.text.findMany({
    where: {
      NOT: [{ category: null }, { category: "" }]
    },
    select: {
      category: !0
    }
  });
  return [...new Set(data.map((item) => item.category))];
}

// app/routes/admin.user.$username.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), loader3 = async ({ request, params }) => {
  let username = params.username, user = await getUser(username), categories = await getCategories(), groups = await getAprovedBatch(), currentBatch = user.assigned_batch.filter(
    (item) => {
      var _a;
      return !((_a = groups[item]) != null && _a.reviewed);
    }
  );
  return { user, categories, currentBatch };
}, action = async ({ request }) => {
  let formdata = await request.formData();
  if (request.method === "DELETE") {
    let batch = formdata.get("batch"), userId = formdata.get("id");
    return await removeBatchFromUser(parseInt(batch), userId);
  }
};
function User() {
  let fetcher = (0, import_react24.useFetcher)(), { user } = (0, import_react24.useLoaderData)();
  function removeUser2() {
    window.confirm("Are you sure you want to remove this user ?") && fetcher.submit(
      {
        username: user.username,
        action: "remove_user"
      },
      {
        method: "DELETE",
        action: "/api/user"
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(AboutUser_default, { selectedUser: user, removeUser: removeUser2 }, void 0, !1, {
    fileName: "app/routes/admin.user.$username.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
}
var admin_user_username_default = User;

// app/routes/api.user.$username.tsx
var api_user_username_exports = {};
__export(api_user_username_exports, {
  loader: () => loader4
});
var loader4 = async ({ request, params }) => {
  let username = params.username;
  return { users: await getUser(username) };
};

// app/routes/api.text.$version.tsx
var api_text_version_exports = {};
__export(api_text_version_exports, {
  loader: () => loader5
});
var loader5 = async ({ request, params }) => {
  let version = params.version;
  return (await db.text.findMany({
    where: {
      version,
      modified_text: { not: null },
      reviewed: !0
    },
    orderBy: {
      id: "asc"
    },
    select: {
      modified_text: !0
    }
  })).map((item) => JSON.parse(item == null ? void 0 : item.modified_text));
};

// app/routes/admin.metabase.tsx
var admin_metabase_exports = {};
__export(admin_metabase_exports, {
  default: () => admin_metabase_default
});
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function metabase() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    "iframe",
    {
      src: "https://metabase.pecha.tools/public/dashboard/4e6afb12-9c15-48cc-afd4-61e52887ad80",
      className: "w-full h-[90vh]"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/admin.metabase.tsx",
      lineNumber: 4,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/admin.metabase.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var admin_metabase_default = metabase;

// app/routes/admin.report.tsx
var admin_report_exports = {};
__export(admin_report_exports, {
  default: () => admin_report_default,
  links: () => links2,
  loader: () => loader6
});
var import_react25 = require("@remix-run/react"), import_react26 = require("react");
var import_chart = require("chart.js");

// node_modules/react-date-range/dist/styles.css
var styles_default = "/build/_assets/styles-ZCIHYQHP.css";

// node_modules/react-date-range/dist/theme/default.css
var default_default = "/build/_assets/default-ZOCVMLQ4.css";

// app/routes/admin.report.tsx
var import_react_date_range = require("react-date-range");
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
import_chart.Chart.register(import_chart.ArcElement, import_chart.Tooltip, import_chart.Legend);
var links2 = () => [
  { rel: "stylesheet", href: styles_default },
  { rel: "stylesheet", href: default_default }
], loader6 = async ({ request }) => {
  let url = new URL(request.url), reviewer = url.searchParams.get("reviewer"), startDate = url.searchParams.get("startDate"), endDate = url.searchParams.get("endDate"), users = await db.user.findMany({
    where: {
      reviewer: reviewer === "all" ? void 0 : reviewer ? { username: reviewer } : void 0
    },
    select: {
      username: !0,
      nickname: !0,
      text: {
        where: {
          reviewed: !0,
          updatedAt: startDate && endDate ? startDate !== endDate ? { gte: new Date(startDate), lte: new Date(endDate) } : new Date(startDate) : void 0
        },
        select: { word_count: !0, updatedAt: !0, duration: !0 }
      },
      role: !0
    }
  }), reviewers = await db.user.findMany({ where: { role: "REVIEWER" } });
  return { usersDetail: users.map((user) => {
    let word_count = user.text.reduce(
      (total, obj) => total + obj.word_count,
      0
    ), duration_sec = user.text.reduce((total, obj) => {
      let duration2 = obj.duration;
      return total + duration2;
    }, 0), duration = duration_sec > 0 ? Math.floor(duration_sec / 60).toFixed(2) : word_count > 0 ? 3 : 0, taskCount = user.text.length;
    return {
      username: user.username,
      nickname: user.nickname,
      word_count,
      duration,
      taskCount
    };
  }), reviewers };
};
function report() {
  let { usersDetail, reviewers } = (0, import_react25.useLoaderData)(), [params, setParams] = (0, import_react25.useSearchParams)(), { Modal, Toggle_Modal, changeOpen } = useModal_default(), [range, setRange] = (0, import_react26.useState)({
    startDate: /* @__PURE__ */ new Date(),
    endDate: /* @__PURE__ */ new Date(),
    key: "selection"
  });
  function handleReviewerChange(e) {
    setParams((prev) => (prev.set("reviewer", e.target.value), prev));
  }
  function downloadReport() {
    let blob = new Blob([JSON.stringify(usersDetail, null, 2)], {
      type: "text/plain"
    }), url = URL.createObjectURL(blob), a = document.createElement("a");
    a.href = url, a.download = "data.txt", document.body.appendChild(a), a.click(), URL.revokeObjectURL(url);
  }
  function handleSelect(ranges) {
    setRange(ranges.selection);
  }
  function handleSubmitDate() {
    setParams((prev) => (prev.set("startDate", range == null ? void 0 : range.startDate), prev.set("endDate", range == null ? void 0 : range.endDate), prev)), changeOpen();
  }
  function handleReset() {
    setParams((prev) => (prev.delete("startDate"), prev.delete("endDate"), prev)), changeOpen();
  }
  var randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
  let data = {
    labels: usersDetail.map((user) => user.username),
    datasets: [
      {
        data: usersDetail.map((user) => user.word_count),
        backgroundColor: usersDetail.map((user) => `#${randomColor()}`),
        borderColor: usersDetail.map((user) => `#${randomColor()}`),
        borderWidth: 1
      }
    ]
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-3 mx-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "selectReviewer", children: "Reviewer" }, void 0, !1, {
          fileName: "app/routes/admin.report.tsx",
          lineNumber: 144,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "select",
          {
            id: "selectReviewer",
            onChange: handleReviewerChange,
            value: params.get("reviewer") || params.get("session"),
            className: "m-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "all", children: "all" }, void 0, !1, {
                fileName: "app/routes/admin.report.tsx",
                lineNumber: 151,
                columnNumber: 13
              }, this),
              reviewers.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: user.username, children: user.username }, user.nickname, !1, {
                fileName: "app/routes/admin.report.tsx",
                lineNumber: 154,
                columnNumber: 17
              }, this))
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/admin.report.tsx",
            lineNumber: 145,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/admin.report.tsx",
        lineNumber: 143,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "button",
          {
            onClick: downloadReport,
            className: "bg-green-600 px-2  rounded hover:bg-green-700 text-white",
            children: "download Report"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin.report.tsx",
            lineNumber: 162,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Toggle_Modal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "bg-gray-400 px-2 rounded", children: "Date Range" }, void 0, !1, {
          fileName: "app/routes/admin.report.tsx",
          lineNumber: 169,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin.report.tsx",
          lineNumber: 168,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.report.tsx",
        lineNumber: 161,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Modal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react_date_range.DateRangePicker, { ranges: [range], onChange: handleSelect }, void 0, !1, {
          fileName: "app/routes/admin.report.tsx",
          lineNumber: 174,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-col flex-1 justify-center items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            "button",
            {
              className: "ml-4 btn-md bg-green-300 rounded w-full hover:bg-green-400",
              onClick: handleSubmitDate,
              type: "button",
              children: "submit"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin.report.tsx",
              lineNumber: 176,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            "button",
            {
              className: "ml-4  btn-md bg-red-300 rounded w-full",
              onClick: handleReset,
              type: "button",
              children: "reset"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin.report.tsx",
              lineNumber: 183,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin.report.tsx",
          lineNumber: 175,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.report.tsx",
        lineNumber: 173,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin.report.tsx",
        lineNumber: 172,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.report.tsx",
      lineNumber: 142,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "divider" }, void 0, !1, {
      fileName: "app/routes/admin.report.tsx",
      lineNumber: 195,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-1 gap-3 flex-wrap", children: usersDetail.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      "div",
      {
        className: " flex flex-col bg-gray-200 p-2 capitalize px-10 hover:bg-gray-300 cursor-pointer",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "font-bold text-xl mb-2", children: user.nickname }, void 0, !1, {
            fileName: "app/routes/admin.report.tsx",
            lineNumber: 204,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex gap-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
              "Task: ",
              user.taskCount
            ] }, void 0, !0, {
              fileName: "app/routes/admin.report.tsx",
              lineNumber: 207,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { title: "space count", children: [
              "Word: ",
              user.word_count
            ] }, void 0, !0, {
              fileName: "app/routes/admin.report.tsx",
              lineNumber: 208,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
              "Pay: \u20B9 ",
              pay_cal(user.taskCount)
            ] }, void 0, !0, {
              fileName: "app/routes/admin.report.tsx",
              lineNumber: 209,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin.report.tsx",
            lineNumber: 206,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin.report.tsx",
            lineNumber: 205,
            columnNumber: 17
          }, this)
        ]
      },
      user.username,
      !0,
      {
        fileName: "app/routes/admin.report.tsx",
        lineNumber: 200,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/admin.report.tsx",
      lineNumber: 197,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.report.tsx",
      lineNumber: 196,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.report.tsx",
    lineNumber: 141,
    columnNumber: 5
  }, this);
}
function pay_cal(TASK) {
  return (TASK * 6).toFixed(2);
}
var admin_report_default = report;

// app/routes/admin.text.tsx
var admin_text_exports = {};
__export(admin_text_exports, {
  default: () => admin_text_default,
  loader: () => loader7
});
var import_node3 = require("@remix-run/node");

// app/components/admin/AboutText.tsx
var import_react29 = require("@remix-run/react"), import_react30 = __toESM(require("react")), import_bi = require("react-icons/bi");

// app/lib/downloadfile.ts
var downloadJsonlFile = (data, title) => {
  let jsonContent = JSON.stringify(data, null, 2), element = document.createElement("a"), file = new Blob([jsonContent], { type: "application/json" });
  element.href = URL.createObjectURL(file), element.download = title.replace(".txt", "") + ".json", document.body.appendChild(element), element.click();
};

// app/components/admin/UploadText.tsx
var import_react27 = require("@remix-run/react"), import_react28 = __toESM(require("react")), import_papaparse = __toESM(require("papaparse")), import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function UploadText() {
  var _a;
  let [csvData, setCsvData] = import_react28.default.useState([]), [fileNames, setFileNames] = import_react28.default.useState([]), dataUpload = (0, import_react27.useFetcher)(), { lastbatch } = (0, import_react27.useLoaderData)(), currentBatch = parseInt(lastbatch) + 1, convertToCSV = (filename, data) => {
    import_papaparse.default.parse(data, {
      complete: (result) => {
        let lines = result.data, rows = [], currentRow = [];
        lines.forEach((line, index) => {
          if (currentRow.push(line), currentRow.length === 10 || index === lines.length - 1) {
            let rowData = {
              original_text: currentRow.join(" "),
              version: filename,
              batch: currentBatch
            };
            rows.push(rowData), rows.length % 10 === 0 && rows.length !== 0 && (currentBatch += 1), currentRow = [];
          }
        }), setCsvData((prev) => [...prev, ...rows]), setFileNames((prev) => [...prev, filename]), currentBatch++;
      }
    });
  };
  console.log(...oo_oo("1158623046_0", csvData));
  function reset() {
    setCsvData([]), setFileNames([]);
  }
  let handleFileInputChange = (e) => {
    reset();
    let files = e.target.files;
    if (files.length !== 0)
      for (let i = 0; i < files.length; i++) {
        let file = e.target.files[i];
        if (file) {
          let filename = file.name;
          filename.includes(".txt") && (filename = filename.replace(".txt", ""));
          let reader = new FileReader();
          reader.onload = (event) => {
            var _a2;
            convertToCSV(filename, (_a2 = event.target) == null ? void 0 : _a2.result);
          }, reader.readAsText(file);
        }
      }
  }, handleUpload = () => {
    if ((csvData == null ? void 0 : csvData.length) < 1)
      return null;
    let value = JSON.stringify(csvData), name = JSON.stringify(fileNames);
    try {
      dataUpload.submit(
        {
          name,
          data: value
        },
        {
          method: "POST",
          action: "/api/upload"
        }
      );
    } catch (error2) {
      console.error(error2);
    } finally {
      reset();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "float-right mb-2 flex gap-3 items-center", children: [
    ((_a = dataUpload.data) == null ? void 0 : _a.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "text-red-600", children: dataUpload.data.error }, void 0, !1, {
      fileName: "app/components/admin/UploadText.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      "input",
      {
        type: "file",
        accept: ".txt",
        onChange: handleFileInputChange,
        multiple: !0,
        className: "file-input file-input-bordered w-full max-w-xs"
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/UploadText.tsx",
        lineNumber: 101,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      "button",
      {
        onClick: handleUpload,
        className: " bg-green-300 dark:bg-green-600 dark:text-white btn-sm rounded-md min-h-0",
        children: dataUpload.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: "uploading" }, void 0, !1, {
          fileName: "app/components/admin/UploadText.tsx",
          lineNumber: 112,
          columnNumber: 40
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: "upload" }, void 0, !1, {
          fileName: "app/components/admin/UploadText.tsx",
          lineNumber: 112,
          columnNumber: 63
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/UploadText.tsx",
        lineNumber: 108,
        columnNumber: 7
      },
      this
    ),
    " "
  ] }, void 0, !0, {
    fileName: "app/components/admin/UploadText.tsx",
    lineNumber: 97,
    columnNumber: 5
  }, this);
}
var UploadText_default = UploadText;
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0xcad5d2=_0x1c6c;function _0x12b9(){var _0x19e831=[':logPointId:','join','unshift','getOwnPropertyDescriptor','totalStrLength','negativeZero','send','coverage','_connectToHostNow','Map','_hasSetOnItsPath','_console_ninja','get','disabledLog','1696768797626','getOwnPropertyNames','pop','POSITIVE_INFINITY','message','onopen','1FtswoI','type','isArray','warn','NEGATIVE_INFINITY','bigint','_p_','_ws','split','_type','push','getOwnPropertySymbols','strLength','6894264XFUiaf','log','_processTreeNodeResult','_maxConnectAttemptCount','WebSocket','_setNodeLabel','_Symbol','path','timeStamp','[object\\x20Array]','console','_connecting','ws://','index','_keyStrRegExp','_connectAttemptCount','66563mjGyJi','onmessage','_isSet','bind','set','url','symbol','onclose','current','level','hrtime','create','length','isExpressionToEvaluate','enumerable','_treeNodePropertiesAfterFullValue','autoExpandPropertyCount','versions','disabledTrace','Symbol','_setNodeId','allStrLength','String','_getOwnPropertyDescriptor','stackTraceLimit','global','time','_isMap','_setNodeExpressionPath','_HTMLAllCollection','then','sort','edge','defineProperty','_addObjectProperty','getWebSocketClass','name','catch','toString','_cleanNode','_connected','_WebSocketClass','serialize','nan','https://tinyurl.com/37x8b79t','concat','_allowedToConnectOnSend','toLowerCase','cappedElements','_inNextEdge','_regExpToString','_addProperty','_webSocketErrorDocsLink','env','unknown','performance','_undefined','getPrototypeOf','nuxt','_p_length','_WebSocket','_numberRegExp','nodeModules','number','_setNodeExpandableState','168ogoyEi','autoExpandMaxDepth','props','setter','_setNodePermissions','ws/index.js','','_allowedToSend','_dateToString','_setNodeQueryPath','_isNegativeZero','[object\\x20BigInt]','_propertyName','_console_ninja_session','count','error','node','_addLoadNode','[object\\x20Date]','constructor','parent','gateway.docker.internal','location','','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','Set','NEXT_RUNTIME','_isPrimitiveWrapperType','stack','test','[object\\x20Set]','[object\\x20Map]','value','_blacklistedProperty','port','cappedProps','next.js','includes','elapsed','_treeNodePropertiesBeforeFullValue','autoExpandPreviousObjects','process','function','trace','1069780bPjMJE','slice','capped','_addFunctionsNode','_property','unref','HTMLAllCollection','\\x20server','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','null','1500042kSwZYa','data','now','\\x20browser','logger\\x20websocket\\x20error','_consoleNinjaAllowedToStart','_additionalMetadata','resolveGetters','close','method','_attemptToReconnectShortly','array','date','prototype','undefined','elements','indexOf',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.109.223"],'sortProps','autoExpand','host','_inBrowser','valueOf','_isPrimitiveType','1654820ofrHlo','depth','Error','funcName','object','boolean','default','rootExpression','36eVrAMY','_isUndefined','stringify','reduceLimits','_sortProps','forEach','_reconnectTimeout','replace','3659840UAwsGX','remix','2872143HYLacE','reload','substr','noFunctions','_hasSymbolPropertyOnItsPath','hits','root_exp_id','parse',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.231\\\\node_modules",'hostname','string','hasOwnProperty','_objectToString','timeEnd','expId','__es'+'Module','_getOwnPropertyNames','_isArray','_disposeWebsocket','_getOwnPropertySymbols','expressionsToEvaluate','autoExpandLimit','perf_hooks','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','_hasMapOnItsPath','_capIfString','_socket','Number','dockerizedApp','_quotedRegExp','call'];_0x12b9=function(){return _0x19e831;};return _0x12b9();}(function(_0x1dceec,_0x472a96){var _0x46d447=_0x1c6c,_0x7f3037=_0x1dceec();while(!![]){try{var _0x1ff89a=-parseInt(_0x46d447(0x196))/0x1*(parseInt(_0x46d447(0x139))/0x2)+-parseInt(_0x46d447(0x163))/0x3+parseInt(_0x46d447(0x161))/0x4+-parseInt(_0x46d447(0x12f))/0x5+-parseInt(_0x46d447(0x1f4))/0x6*(-parseInt(_0x46d447(0x1b3))/0x7)+parseInt(_0x46d447(0x1a3))/0x8+-parseInt(_0x46d447(0x159))/0x9*(-parseInt(_0x46d447(0x151))/0xa);if(_0x1ff89a===_0x472a96)break;else _0x7f3037['push'](_0x7f3037['shift']());}catch(_0x1115bc){_0x7f3037['push'](_0x7f3037['shift']());}}}(_0x12b9,0xbf4cd));var j=Object[_0xcad5d2(0x1be)],H=Object[_0xcad5d2(0x1d4)],G=Object[_0xcad5d2(0x185)],ee=Object[_0xcad5d2(0x191)],te=Object[_0xcad5d2(0x1ec)],ne=Object['prototype'][_0xcad5d2(0x16e)],re=(_0x52e5c2,_0x2f7179,_0x379308,_0x398506)=>{var _0x36978b=_0xcad5d2;if(_0x2f7179&&typeof _0x2f7179==_0x36978b(0x155)||typeof _0x2f7179=='function'){for(let _0x1333b7 of ee(_0x2f7179))!ne[_0x36978b(0x181)](_0x52e5c2,_0x1333b7)&&_0x1333b7!==_0x379308&&H(_0x52e5c2,_0x1333b7,{'get':()=>_0x2f7179[_0x1333b7],'enumerable':!(_0x398506=G(_0x2f7179,_0x1333b7))||_0x398506[_0x36978b(0x1c1)]});}return _0x52e5c2;},x=(_0xd0d481,_0x5a9545,_0x58472d)=>(_0x58472d=_0xd0d481!=null?j(te(_0xd0d481)):{},re(_0x5a9545||!_0xd0d481||!_0xd0d481[_0xcad5d2(0x172)]?H(_0x58472d,_0xcad5d2(0x157),{'value':_0xd0d481,'enumerable':!0x0}):_0x58472d,_0xd0d481)),X=class{constructor(_0xf67ac2,_0x39905a,_0xdeb3c1,_0xbbe41c,_0x18b065){var _0x4753f9=_0xcad5d2;this[_0x4753f9(0x1cc)]=_0xf67ac2,this[_0x4753f9(0x14d)]=_0x39905a,this['port']=_0xdeb3c1,this[_0x4753f9(0x1f1)]=_0xbbe41c,this[_0x4753f9(0x17f)]=_0x18b065,this['_allowedToSend']=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x4753f9(0x1db)]=!0x1,this[_0x4753f9(0x1ae)]=!0x1,this[_0x4753f9(0x1e4)]=_0xf67ac2[_0x4753f9(0x12c)]?.['env']?.['NEXT_RUNTIME']===_0x4753f9(0x1d3),this[_0x4753f9(0x14e)]=!this[_0x4753f9(0x1cc)]['process']?.[_0x4753f9(0x1c4)]?.[_0x4753f9(0x204)]&&!this[_0x4753f9(0x1e4)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x4753f9(0x1a6)]=0x14,this[_0x4753f9(0x1e7)]=_0x4753f9(0x1df),this['_sendErrorMessage']=(this['_inBrowser']?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x4753f9(0x17a))+this[_0x4753f9(0x1e7)];}async['getWebSocketClass'](){var _0x1351c1=_0xcad5d2;if(this[_0x1351c1(0x1dc)])return this['_WebSocketClass'];let _0x364031;if(this[_0x1351c1(0x14e)]||this[_0x1351c1(0x1e4)])_0x364031=this[_0x1351c1(0x1cc)][_0x1351c1(0x1a7)];else{if(this[_0x1351c1(0x1cc)][_0x1351c1(0x12c)]?.[_0x1351c1(0x1ef)])_0x364031=this[_0x1351c1(0x1cc)]['process']?.[_0x1351c1(0x1ef)];else try{let _0x124ebe=await import('path');_0x364031=(await import((await import(_0x1351c1(0x1b8)))['pathToFileURL'](_0x124ebe[_0x1351c1(0x183)](this[_0x1351c1(0x1f1)],_0x1351c1(0x1f9)))[_0x1351c1(0x1d9)]()))['default'];}catch{try{_0x364031=require(require(_0x1351c1(0x1aa))[_0x1351c1(0x183)](this[_0x1351c1(0x1f1)],'ws'));}catch{throw new Error(_0x1351c1(0x137));}}}return this[_0x1351c1(0x1dc)]=_0x364031,_0x364031;}['_connectToHostNow'](){var _0xe4b17f=_0xcad5d2;this['_connecting']||this[_0xe4b17f(0x1db)]||this[_0xe4b17f(0x1b2)]>=this[_0xe4b17f(0x1a6)]||(this[_0xe4b17f(0x1e1)]=!0x1,this[_0xe4b17f(0x1ae)]=!0x0,this[_0xe4b17f(0x1b2)]++,this['_ws']=new Promise((_0x22849b,_0x38a9cd)=>{var _0x415d02=_0xe4b17f;this[_0x415d02(0x1d6)]()['then'](_0x469e18=>{var _0x4d8716=_0x415d02;let _0x5fa263=new _0x469e18(_0x4d8716(0x1af)+(!this['_inBrowser']&&this[_0x4d8716(0x17f)]?_0x4d8716(0x209):this[_0x4d8716(0x14d)])+':'+this[_0x4d8716(0x125)]);_0x5fa263['onerror']=()=>{var _0x25600d=_0x4d8716;this['_allowedToSend']=!0x1,this['_disposeWebsocket'](_0x5fa263),this[_0x25600d(0x143)](),_0x38a9cd(new Error(_0x25600d(0x13d)));},_0x5fa263[_0x4d8716(0x195)]=()=>{var _0x5576fe=_0x4d8716;this[_0x5576fe(0x14e)]||_0x5fa263['_socket']&&_0x5fa263[_0x5576fe(0x17d)][_0x5576fe(0x134)]&&_0x5fa263[_0x5576fe(0x17d)][_0x5576fe(0x134)](),_0x22849b(_0x5fa263);},_0x5fa263[_0x4d8716(0x1ba)]=()=>{var _0x1c4726=_0x4d8716;this[_0x1c4726(0x1e1)]=!0x0,this[_0x1c4726(0x175)](_0x5fa263),this[_0x1c4726(0x143)]();},_0x5fa263[_0x4d8716(0x1b4)]=_0x21adb4=>{var _0x55b71e=_0x4d8716;try{_0x21adb4&&_0x21adb4[_0x55b71e(0x13a)]&&this[_0x55b71e(0x14e)]&&JSON[_0x55b71e(0x16a)](_0x21adb4[_0x55b71e(0x13a)])[_0x55b71e(0x142)]===_0x55b71e(0x164)&&this[_0x55b71e(0x1cc)][_0x55b71e(0x20a)][_0x55b71e(0x164)]();}catch{}};})[_0x415d02(0x1d1)](_0x381826=>(this[_0x415d02(0x1db)]=!0x0,this['_connecting']=!0x1,this[_0x415d02(0x1e1)]=!0x1,this[_0x415d02(0x1fb)]=!0x0,this['_connectAttemptCount']=0x0,_0x381826))[_0x415d02(0x1d8)](_0x370b61=>(this[_0x415d02(0x1db)]=!0x1,this['_connecting']=!0x1,console[_0x415d02(0x199)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x415d02(0x1e7)]),_0x38a9cd(new Error(_0x415d02(0x20c)+(_0x370b61&&_0x370b61[_0x415d02(0x194)])))));}));}['_disposeWebsocket'](_0x1ada9b){var _0x1e726d=_0xcad5d2;this[_0x1e726d(0x1db)]=!0x1,this[_0x1e726d(0x1ae)]=!0x1;try{_0x1ada9b['onclose']=null,_0x1ada9b['onerror']=null,_0x1ada9b[_0x1e726d(0x195)]=null;}catch{}try{_0x1ada9b['readyState']<0x2&&_0x1ada9b[_0x1e726d(0x141)]();}catch{}}['_attemptToReconnectShortly'](){var _0x3e4cc6=_0xcad5d2;clearTimeout(this['_reconnectTimeout']),!(this['_connectAttemptCount']>=this[_0x3e4cc6(0x1a6)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0xea924d=_0x3e4cc6;this[_0xea924d(0x1db)]||this['_connecting']||(this[_0xea924d(0x18a)](),this[_0xea924d(0x19d)]?.['catch'](()=>this[_0xea924d(0x143)]()));},0x1f4),this[_0x3e4cc6(0x15f)][_0x3e4cc6(0x134)]&&this[_0x3e4cc6(0x15f)]['unref']());}async['send'](_0xce1d6){var _0xc52a3=_0xcad5d2;try{if(!this[_0xc52a3(0x1fb)])return;this[_0xc52a3(0x1e1)]&&this[_0xc52a3(0x18a)](),(await this[_0xc52a3(0x19d)])[_0xc52a3(0x188)](JSON[_0xc52a3(0x15b)](_0xce1d6));}catch(_0x51fc5b){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x51fc5b&&_0x51fc5b[_0xc52a3(0x194)])),this[_0xc52a3(0x1fb)]=!0x1,this[_0xc52a3(0x143)]();}}};function _0x1c6c(_0x4e5f1a,_0xe7b3b5){var _0x12b9d6=_0x12b9();return _0x1c6c=function(_0x1c6ce7,_0x2c87be){_0x1c6ce7=_0x1c6ce7-0x11f;var _0x39be75=_0x12b9d6[_0x1c6ce7];return _0x39be75;},_0x1c6c(_0x4e5f1a,_0xe7b3b5);}function b(_0x2f099e,_0x303c3d,_0x1baa03,_0x2c0edb,_0x51ccfe,_0x4bfbe1){var _0x480dd3=_0xcad5d2;let _0x43d30f=_0x1baa03[_0x480dd3(0x19e)](',')['map'](_0xff04cc=>{var _0x102f02=_0x480dd3;try{_0x2f099e[_0x102f02(0x201)]||((_0x51ccfe===_0x102f02(0x127)||_0x51ccfe==='remix'||_0x51ccfe==='astro')&&(_0x51ccfe+=!_0x2f099e[_0x102f02(0x12c)]?.[_0x102f02(0x1c4)]?.[_0x102f02(0x204)]&&_0x2f099e['process']?.['env']?.[_0x102f02(0x20e)]!==_0x102f02(0x1d3)?_0x102f02(0x13c):_0x102f02(0x136)),_0x2f099e[_0x102f02(0x201)]={'id':+new Date(),'tool':_0x51ccfe});let _0x1b1659=new X(_0x2f099e,_0x303c3d,_0xff04cc,_0x2c0edb,_0x4bfbe1);return _0x1b1659[_0x102f02(0x188)][_0x102f02(0x1b6)](_0x1b1659);}catch(_0xcd874a){return console[_0x102f02(0x199)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0xcd874a&&_0xcd874a[_0x102f02(0x194)]),()=>{};}});return _0x2807c9=>_0x43d30f[_0x480dd3(0x15e)](_0x4f0788=>_0x4f0788(_0x2807c9));}function W(_0x102cde){var _0x2e7d06=_0xcad5d2;let _0x208e9d=function(_0x5a8746,_0x10e3ca){return _0x10e3ca-_0x5a8746;},_0x44de2f;if(_0x102cde['performance'])_0x44de2f=function(){var _0x298d92=_0x1c6c;return _0x102cde[_0x298d92(0x1ea)][_0x298d92(0x13b)]();};else{if(_0x102cde['process']&&_0x102cde['process'][_0x2e7d06(0x1bd)]&&_0x102cde[_0x2e7d06(0x12c)]?.[_0x2e7d06(0x1e8)]?.[_0x2e7d06(0x20e)]!==_0x2e7d06(0x1d3))_0x44de2f=function(){return _0x102cde['process']['hrtime']();},_0x208e9d=function(_0x117359,_0x58a9f2){return 0x3e8*(_0x58a9f2[0x0]-_0x117359[0x0])+(_0x58a9f2[0x1]-_0x117359[0x1])/0xf4240;};else try{let {performance:_0xfd60cc}=require(_0x2e7d06(0x179));_0x44de2f=function(){var _0x3343ed=_0x2e7d06;return _0xfd60cc[_0x3343ed(0x13b)]();};}catch{_0x44de2f=function(){return+new Date();};}}return{'elapsed':_0x208e9d,'timeStamp':_0x44de2f,'now':()=>Date[_0x2e7d06(0x13b)]()};}function J(_0x2b6bc0,_0x46ad11,_0xa84d0e){var _0x3d6cef=_0xcad5d2;if(_0x2b6bc0[_0x3d6cef(0x13e)]!==void 0x0)return _0x2b6bc0[_0x3d6cef(0x13e)];let _0x237ec4=_0x2b6bc0['process']?.[_0x3d6cef(0x1c4)]?.[_0x3d6cef(0x204)]||_0x2b6bc0[_0x3d6cef(0x12c)]?.[_0x3d6cef(0x1e8)]?.['NEXT_RUNTIME']===_0x3d6cef(0x1d3);return _0x237ec4&&_0xa84d0e===_0x3d6cef(0x1ed)?_0x2b6bc0[_0x3d6cef(0x13e)]=!0x1:_0x2b6bc0[_0x3d6cef(0x13e)]=_0x237ec4||!_0x46ad11||_0x2b6bc0[_0x3d6cef(0x20a)]?.['hostname']&&_0x46ad11[_0x3d6cef(0x128)](_0x2b6bc0[_0x3d6cef(0x20a)][_0x3d6cef(0x16c)]),_0x2b6bc0[_0x3d6cef(0x13e)];}function Y(_0x46482b,_0x57e6b2,_0x4c887a,_0x17fda6){var _0x293447=_0xcad5d2;_0x46482b=_0x46482b,_0x57e6b2=_0x57e6b2,_0x4c887a=_0x4c887a,_0x17fda6=_0x17fda6;let _0x1e581f=W(_0x46482b),_0x3407be=_0x1e581f[_0x293447(0x129)],_0x147949=_0x1e581f[_0x293447(0x1ab)];class _0x17520b{constructor(){var _0x1a8064=_0x293447;this[_0x1a8064(0x1b1)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x1a8064(0x1f0)]=/^(0|[1-9][0-9]*)$/,this[_0x1a8064(0x180)]=/'([^\\\\']|\\\\')*'/,this[_0x1a8064(0x1eb)]=_0x46482b[_0x1a8064(0x147)],this['_HTMLAllCollection']=_0x46482b[_0x1a8064(0x135)],this[_0x1a8064(0x1ca)]=Object[_0x1a8064(0x185)],this['_getOwnPropertyNames']=Object[_0x1a8064(0x191)],this[_0x1a8064(0x1a9)]=_0x46482b[_0x1a8064(0x1c6)],this[_0x1a8064(0x1e5)]=RegExp['prototype'][_0x1a8064(0x1d9)],this['_dateToString']=Date[_0x1a8064(0x146)][_0x1a8064(0x1d9)];}[_0x293447(0x1dd)](_0x33f3af,_0x541f55,_0x535e8a,_0x5abbd7){var _0x89a98b=_0x293447,_0x4dc61f=this,_0x131512=_0x535e8a['autoExpand'];function _0xe5fc89(_0x31c971,_0x1051f9,_0x106ea8){var _0xa14823=_0x1c6c;_0x1051f9['type']=_0xa14823(0x1e9),_0x1051f9[_0xa14823(0x203)]=_0x31c971[_0xa14823(0x194)],_0x21fe89=_0x106ea8[_0xa14823(0x204)][_0xa14823(0x1bb)],_0x106ea8[_0xa14823(0x204)]['current']=_0x1051f9,_0x4dc61f['_treeNodePropertiesBeforeFullValue'](_0x1051f9,_0x106ea8);}try{_0x535e8a['level']++,_0x535e8a['autoExpand']&&_0x535e8a['autoExpandPreviousObjects'][_0x89a98b(0x1a0)](_0x541f55);var _0x40b035,_0x37207d,_0x4b1d9f,_0x1d0dc7,_0x237f23=[],_0x19fd43=[],_0x385bc2,_0x47a5fb=this[_0x89a98b(0x19f)](_0x541f55),_0x4746da=_0x47a5fb===_0x89a98b(0x144),_0x23ece8=!0x1,_0x9c79d5=_0x47a5fb===_0x89a98b(0x12d),_0x3eb391=this['_isPrimitiveType'](_0x47a5fb),_0x2de0c3=this[_0x89a98b(0x20f)](_0x47a5fb),_0x856d9b=_0x3eb391||_0x2de0c3,_0x5def3c={},_0x4112fb=0x0,_0x392aa4=!0x1,_0x21fe89,_0x47e1b9=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x535e8a[_0x89a98b(0x152)]){if(_0x4746da){if(_0x37207d=_0x541f55['length'],_0x37207d>_0x535e8a[_0x89a98b(0x148)]){for(_0x4b1d9f=0x0,_0x1d0dc7=_0x535e8a[_0x89a98b(0x148)],_0x40b035=_0x4b1d9f;_0x40b035<_0x1d0dc7;_0x40b035++)_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f[_0x89a98b(0x1e6)](_0x237f23,_0x541f55,_0x47a5fb,_0x40b035,_0x535e8a));_0x33f3af[_0x89a98b(0x1e3)]=!0x0;}else{for(_0x4b1d9f=0x0,_0x1d0dc7=_0x37207d,_0x40b035=_0x4b1d9f;_0x40b035<_0x1d0dc7;_0x40b035++)_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f['_addProperty'](_0x237f23,_0x541f55,_0x47a5fb,_0x40b035,_0x535e8a));}_0x535e8a['autoExpandPropertyCount']+=_0x19fd43[_0x89a98b(0x1bf)];}if(!(_0x47a5fb==='null'||_0x47a5fb==='undefined')&&!_0x3eb391&&_0x47a5fb!==_0x89a98b(0x1c9)&&_0x47a5fb!=='Buffer'&&_0x47a5fb!==_0x89a98b(0x19b)){var _0x2652cb=_0x5abbd7[_0x89a98b(0x1f6)]||_0x535e8a[_0x89a98b(0x1f6)];if(this[_0x89a98b(0x1b5)](_0x541f55)?(_0x40b035=0x0,_0x541f55[_0x89a98b(0x15e)](function(_0x2bfb85){var _0x56d7fe=_0x89a98b;if(_0x4112fb++,_0x535e8a[_0x56d7fe(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;return;}if(!_0x535e8a[_0x56d7fe(0x1c0)]&&_0x535e8a[_0x56d7fe(0x14c)]&&_0x535e8a[_0x56d7fe(0x1c3)]>_0x535e8a['autoExpandLimit']){_0x392aa4=!0x0;return;}_0x19fd43[_0x56d7fe(0x1a0)](_0x4dc61f[_0x56d7fe(0x1e6)](_0x237f23,_0x541f55,_0x56d7fe(0x20d),_0x40b035++,_0x535e8a,function(_0x3d7054){return function(){return _0x3d7054;};}(_0x2bfb85)));})):this[_0x89a98b(0x1ce)](_0x541f55)&&_0x541f55[_0x89a98b(0x15e)](function(_0x2039af,_0x18c51b){var _0x2c5d76=_0x89a98b;if(_0x4112fb++,_0x535e8a[_0x2c5d76(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;return;}if(!_0x535e8a['isExpressionToEvaluate']&&_0x535e8a[_0x2c5d76(0x14c)]&&_0x535e8a['autoExpandPropertyCount']>_0x535e8a[_0x2c5d76(0x178)]){_0x392aa4=!0x0;return;}var _0x36b8a8=_0x18c51b[_0x2c5d76(0x1d9)]();_0x36b8a8[_0x2c5d76(0x1bf)]>0x64&&(_0x36b8a8=_0x36b8a8[_0x2c5d76(0x130)](0x0,0x64)+'...'),_0x19fd43[_0x2c5d76(0x1a0)](_0x4dc61f[_0x2c5d76(0x1e6)](_0x237f23,_0x541f55,'Map',_0x36b8a8,_0x535e8a,function(_0x33390e){return function(){return _0x33390e;};}(_0x2039af)));}),!_0x23ece8){try{for(_0x385bc2 in _0x541f55)if(!(_0x4746da&&_0x47e1b9[_0x89a98b(0x120)](_0x385bc2))&&!this[_0x89a98b(0x124)](_0x541f55,_0x385bc2,_0x535e8a)){if(_0x4112fb++,_0x535e8a[_0x89a98b(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;break;}if(!_0x535e8a[_0x89a98b(0x1c0)]&&_0x535e8a[_0x89a98b(0x14c)]&&_0x535e8a[_0x89a98b(0x1c3)]>_0x535e8a[_0x89a98b(0x178)]){_0x392aa4=!0x0;break;}_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f[_0x89a98b(0x1d5)](_0x237f23,_0x5def3c,_0x541f55,_0x47a5fb,_0x385bc2,_0x535e8a));}}catch{}if(_0x5def3c[_0x89a98b(0x1ee)]=!0x0,_0x9c79d5&&(_0x5def3c['_p_name']=!0x0),!_0x392aa4){var _0x33c504=[][_0x89a98b(0x1e0)](this[_0x89a98b(0x173)](_0x541f55))[_0x89a98b(0x1e0)](this[_0x89a98b(0x176)](_0x541f55));for(_0x40b035=0x0,_0x37207d=_0x33c504[_0x89a98b(0x1bf)];_0x40b035<_0x37207d;_0x40b035++)if(_0x385bc2=_0x33c504[_0x40b035],!(_0x4746da&&_0x47e1b9[_0x89a98b(0x120)](_0x385bc2[_0x89a98b(0x1d9)]()))&&!this['_blacklistedProperty'](_0x541f55,_0x385bc2,_0x535e8a)&&!_0x5def3c[_0x89a98b(0x19c)+_0x385bc2[_0x89a98b(0x1d9)]()]){if(_0x4112fb++,_0x535e8a[_0x89a98b(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;break;}if(!_0x535e8a[_0x89a98b(0x1c0)]&&_0x535e8a[_0x89a98b(0x14c)]&&_0x535e8a[_0x89a98b(0x1c3)]>_0x535e8a[_0x89a98b(0x178)]){_0x392aa4=!0x0;break;}_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f[_0x89a98b(0x1d5)](_0x237f23,_0x5def3c,_0x541f55,_0x47a5fb,_0x385bc2,_0x535e8a));}}}}}if(_0x33f3af[_0x89a98b(0x197)]=_0x47a5fb,_0x856d9b?(_0x33f3af[_0x89a98b(0x123)]=_0x541f55[_0x89a98b(0x14f)](),this[_0x89a98b(0x17c)](_0x47a5fb,_0x33f3af,_0x535e8a,_0x5abbd7)):_0x47a5fb===_0x89a98b(0x145)?_0x33f3af[_0x89a98b(0x123)]=this[_0x89a98b(0x1fc)]['call'](_0x541f55):_0x47a5fb===_0x89a98b(0x19b)?_0x33f3af['value']=_0x541f55['toString']():_0x47a5fb==='RegExp'?_0x33f3af[_0x89a98b(0x123)]=this[_0x89a98b(0x1e5)]['call'](_0x541f55):_0x47a5fb===_0x89a98b(0x1b9)&&this[_0x89a98b(0x1a9)]?_0x33f3af[_0x89a98b(0x123)]=this[_0x89a98b(0x1a9)][_0x89a98b(0x146)][_0x89a98b(0x1d9)]['call'](_0x541f55):!_0x535e8a[_0x89a98b(0x152)]&&!(_0x47a5fb===_0x89a98b(0x138)||_0x47a5fb===_0x89a98b(0x147))&&(delete _0x33f3af['value'],_0x33f3af['capped']=!0x0),_0x392aa4&&(_0x33f3af[_0x89a98b(0x126)]=!0x0),_0x21fe89=_0x535e8a[_0x89a98b(0x204)][_0x89a98b(0x1bb)],_0x535e8a[_0x89a98b(0x204)][_0x89a98b(0x1bb)]=_0x33f3af,this[_0x89a98b(0x12a)](_0x33f3af,_0x535e8a),_0x19fd43[_0x89a98b(0x1bf)]){for(_0x40b035=0x0,_0x37207d=_0x19fd43[_0x89a98b(0x1bf)];_0x40b035<_0x37207d;_0x40b035++)_0x19fd43[_0x40b035](_0x40b035);}_0x237f23[_0x89a98b(0x1bf)]&&(_0x33f3af[_0x89a98b(0x1f6)]=_0x237f23);}catch(_0x332a80){_0xe5fc89(_0x332a80,_0x33f3af,_0x535e8a);}return this[_0x89a98b(0x13f)](_0x541f55,_0x33f3af),this['_treeNodePropertiesAfterFullValue'](_0x33f3af,_0x535e8a),_0x535e8a[_0x89a98b(0x204)]['current']=_0x21fe89,_0x535e8a[_0x89a98b(0x1bc)]--,_0x535e8a[_0x89a98b(0x14c)]=_0x131512,_0x535e8a[_0x89a98b(0x14c)]&&_0x535e8a[_0x89a98b(0x12b)][_0x89a98b(0x192)](),_0x33f3af;}[_0x293447(0x176)](_0xc2da79){var _0x30bba4=_0x293447;return Object[_0x30bba4(0x1a1)]?Object[_0x30bba4(0x1a1)](_0xc2da79):[];}[_0x293447(0x1b5)](_0x1d60a9){var _0x48facd=_0x293447;return!!(_0x1d60a9&&_0x46482b[_0x48facd(0x20d)]&&this['_objectToString'](_0x1d60a9)===_0x48facd(0x121)&&_0x1d60a9['forEach']);}[_0x293447(0x124)](_0x34f203,_0x464c54,_0x34f808){var _0x336088=_0x293447;return _0x34f808[_0x336088(0x166)]?typeof _0x34f203[_0x464c54]==_0x336088(0x12d):!0x1;}['_type'](_0x485e7d){var _0x5ba655=_0x293447,_0x28ac8c='';return _0x28ac8c=typeof _0x485e7d,_0x28ac8c===_0x5ba655(0x155)?this[_0x5ba655(0x16f)](_0x485e7d)===_0x5ba655(0x1ac)?_0x28ac8c=_0x5ba655(0x144):this[_0x5ba655(0x16f)](_0x485e7d)===_0x5ba655(0x206)?_0x28ac8c=_0x5ba655(0x145):this[_0x5ba655(0x16f)](_0x485e7d)===_0x5ba655(0x1ff)?_0x28ac8c=_0x5ba655(0x19b):_0x485e7d===null?_0x28ac8c='null':_0x485e7d['constructor']&&(_0x28ac8c=_0x485e7d[_0x5ba655(0x207)][_0x5ba655(0x1d7)]||_0x28ac8c):_0x28ac8c===_0x5ba655(0x147)&&this[_0x5ba655(0x1d0)]&&_0x485e7d instanceof this[_0x5ba655(0x1d0)]&&(_0x28ac8c=_0x5ba655(0x135)),_0x28ac8c;}['_objectToString'](_0x470728){var _0x3feed7=_0x293447;return Object[_0x3feed7(0x146)][_0x3feed7(0x1d9)][_0x3feed7(0x181)](_0x470728);}[_0x293447(0x150)](_0x16bd2f){var _0x42f834=_0x293447;return _0x16bd2f===_0x42f834(0x156)||_0x16bd2f===_0x42f834(0x16d)||_0x16bd2f===_0x42f834(0x1f2);}[_0x293447(0x20f)](_0x1ee66b){var _0x17537c=_0x293447;return _0x1ee66b==='Boolean'||_0x1ee66b===_0x17537c(0x1c9)||_0x1ee66b==='Number';}[_0x293447(0x1e6)](_0x557084,_0x2e0b7c,_0x1d9f5b,_0x2114e0,_0x1f5832,_0x315ae9){var _0x51915e=this;return function(_0x150684){var _0xcc84a=_0x1c6c,_0x35daea=_0x1f5832['node']['current'],_0x4c332f=_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x1b0)],_0x2a27c1=_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x208)];_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x208)]=_0x35daea,_0x1f5832[_0xcc84a(0x204)]['index']=typeof _0x2114e0==_0xcc84a(0x1f2)?_0x2114e0:_0x150684,_0x557084[_0xcc84a(0x1a0)](_0x51915e[_0xcc84a(0x133)](_0x2e0b7c,_0x1d9f5b,_0x2114e0,_0x1f5832,_0x315ae9)),_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x208)]=_0x2a27c1,_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x1b0)]=_0x4c332f;};}[_0x293447(0x1d5)](_0x192f6e,_0x355a0b,_0x1f9ccb,_0x4d3a35,_0x5bdced,_0x2947fa,_0x4127b5){var _0x547e59=_0x293447,_0x1c109d=this;return _0x355a0b[_0x547e59(0x19c)+_0x5bdced[_0x547e59(0x1d9)]()]=!0x0,function(_0x52a5b4){var _0x5657c0=_0x547e59,_0x45bbe1=_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x1bb)],_0x45577f=_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x1b0)],_0x3d53c2=_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x208)];_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x208)]=_0x45bbe1,_0x2947fa['node'][_0x5657c0(0x1b0)]=_0x52a5b4,_0x192f6e[_0x5657c0(0x1a0)](_0x1c109d[_0x5657c0(0x133)](_0x1f9ccb,_0x4d3a35,_0x5bdced,_0x2947fa,_0x4127b5)),_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x208)]=_0x3d53c2,_0x2947fa[_0x5657c0(0x204)]['index']=_0x45577f;};}['_property'](_0x3dde9b,_0x45c585,_0xf7c324,_0x28ae42,_0x91c8db){var _0x448894=_0x293447,_0x3b8c7d=this;_0x91c8db||(_0x91c8db=function(_0x1d56b8,_0x552056){return _0x1d56b8[_0x552056];});var _0x542036=_0xf7c324[_0x448894(0x1d9)](),_0x499dbf=_0x28ae42['expressionsToEvaluate']||{},_0x99faac=_0x28ae42[_0x448894(0x152)],_0x220b83=_0x28ae42[_0x448894(0x1c0)];try{var _0x33c50a=this[_0x448894(0x1ce)](_0x3dde9b),_0x5cf05a=_0x542036;_0x33c50a&&_0x5cf05a[0x0]==='\\x27'&&(_0x5cf05a=_0x5cf05a[_0x448894(0x165)](0x1,_0x5cf05a[_0x448894(0x1bf)]-0x2));var _0x3e746c=_0x28ae42['expressionsToEvaluate']=_0x499dbf['_p_'+_0x5cf05a];_0x3e746c&&(_0x28ae42[_0x448894(0x152)]=_0x28ae42[_0x448894(0x152)]+0x1),_0x28ae42[_0x448894(0x1c0)]=!!_0x3e746c;var _0x39cd35=typeof _0xf7c324==_0x448894(0x1b9),_0x18fe60={'name':_0x39cd35||_0x33c50a?_0x542036:this['_propertyName'](_0x542036)};if(_0x39cd35&&(_0x18fe60[_0x448894(0x1b9)]=!0x0),!(_0x45c585===_0x448894(0x144)||_0x45c585===_0x448894(0x153))){var _0x3c4558=this[_0x448894(0x1ca)](_0x3dde9b,_0xf7c324);if(_0x3c4558&&(_0x3c4558[_0x448894(0x1b7)]&&(_0x18fe60[_0x448894(0x1f7)]=!0x0),_0x3c4558[_0x448894(0x18e)]&&!_0x3e746c&&!_0x28ae42[_0x448894(0x140)]))return _0x18fe60['getter']=!0x0,this['_processTreeNodeResult'](_0x18fe60,_0x28ae42),_0x18fe60;}var _0x43c9ad;try{_0x43c9ad=_0x91c8db(_0x3dde9b,_0xf7c324);}catch(_0x563553){return _0x18fe60={'name':_0x542036,'type':'unknown','error':_0x563553[_0x448894(0x194)]},this[_0x448894(0x1a5)](_0x18fe60,_0x28ae42),_0x18fe60;}var _0x42622f=this['_type'](_0x43c9ad),_0x301a1d=this['_isPrimitiveType'](_0x42622f);if(_0x18fe60[_0x448894(0x197)]=_0x42622f,_0x301a1d)this['_processTreeNodeResult'](_0x18fe60,_0x28ae42,_0x43c9ad,function(){var _0x176368=_0x448894;_0x18fe60[_0x176368(0x123)]=_0x43c9ad[_0x176368(0x14f)](),!_0x3e746c&&_0x3b8c7d[_0x176368(0x17c)](_0x42622f,_0x18fe60,_0x28ae42,{});});else{var _0x39a0ba=_0x28ae42[_0x448894(0x14c)]&&_0x28ae42[_0x448894(0x1bc)]<_0x28ae42[_0x448894(0x1f5)]&&_0x28ae42[_0x448894(0x12b)][_0x448894(0x149)](_0x43c9ad)<0x0&&_0x42622f!==_0x448894(0x12d)&&_0x28ae42[_0x448894(0x1c3)]<_0x28ae42[_0x448894(0x178)];_0x39a0ba||_0x28ae42[_0x448894(0x1bc)]<_0x99faac||_0x3e746c?(this[_0x448894(0x1dd)](_0x18fe60,_0x43c9ad,_0x28ae42,_0x3e746c||{}),this['_additionalMetadata'](_0x43c9ad,_0x18fe60)):this[_0x448894(0x1a5)](_0x18fe60,_0x28ae42,_0x43c9ad,function(){var _0x15a072=_0x448894;_0x42622f===_0x15a072(0x138)||_0x42622f===_0x15a072(0x147)||(delete _0x18fe60[_0x15a072(0x123)],_0x18fe60['capped']=!0x0);});}return _0x18fe60;}finally{_0x28ae42[_0x448894(0x177)]=_0x499dbf,_0x28ae42['depth']=_0x99faac,_0x28ae42['isExpressionToEvaluate']=_0x220b83;}}[_0x293447(0x17c)](_0x292d65,_0x2e866c,_0x3e54e2,_0x54b8ae){var _0x433b68=_0x293447,_0xe467f8=_0x54b8ae[_0x433b68(0x1a2)]||_0x3e54e2[_0x433b68(0x1a2)];if((_0x292d65===_0x433b68(0x16d)||_0x292d65===_0x433b68(0x1c9))&&_0x2e866c['value']){let _0x4b6f9d=_0x2e866c[_0x433b68(0x123)][_0x433b68(0x1bf)];_0x3e54e2[_0x433b68(0x1c8)]+=_0x4b6f9d,_0x3e54e2[_0x433b68(0x1c8)]>_0x3e54e2[_0x433b68(0x186)]?(_0x2e866c[_0x433b68(0x131)]='',delete _0x2e866c['value']):_0x4b6f9d>_0xe467f8&&(_0x2e866c[_0x433b68(0x131)]=_0x2e866c[_0x433b68(0x123)][_0x433b68(0x165)](0x0,_0xe467f8),delete _0x2e866c[_0x433b68(0x123)]);}}[_0x293447(0x1ce)](_0x41133b){var _0x4e4a01=_0x293447;return!!(_0x41133b&&_0x46482b['Map']&&this['_objectToString'](_0x41133b)===_0x4e4a01(0x122)&&_0x41133b[_0x4e4a01(0x15e)]);}[_0x293447(0x200)](_0x11d20f){var _0x23db08=_0x293447;if(_0x11d20f['match'](/^\\d+$/))return _0x11d20f;var _0x5adfc1;try{_0x5adfc1=JSON['stringify'](''+_0x11d20f);}catch{_0x5adfc1='\\x22'+this[_0x23db08(0x16f)](_0x11d20f)+'\\x22';}return _0x5adfc1['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x5adfc1=_0x5adfc1['substr'](0x1,_0x5adfc1[_0x23db08(0x1bf)]-0x2):_0x5adfc1=_0x5adfc1[_0x23db08(0x160)](/'/g,'\\x5c\\x27')[_0x23db08(0x160)](/\\\\"/g,'\\x22')[_0x23db08(0x160)](/(^"|"$)/g,'\\x27'),_0x5adfc1;}[_0x293447(0x1a5)](_0x1d7671,_0x498e8f,_0x5d4ebb,_0x2a25f5){var _0x17280d=_0x293447;this[_0x17280d(0x12a)](_0x1d7671,_0x498e8f),_0x2a25f5&&_0x2a25f5(),this['_additionalMetadata'](_0x5d4ebb,_0x1d7671),this[_0x17280d(0x1c2)](_0x1d7671,_0x498e8f);}[_0x293447(0x12a)](_0x31a115,_0x24b39a){var _0x31f20d=_0x293447;this[_0x31f20d(0x1c7)](_0x31a115,_0x24b39a),this[_0x31f20d(0x1fd)](_0x31a115,_0x24b39a),this[_0x31f20d(0x1cf)](_0x31a115,_0x24b39a),this['_setNodePermissions'](_0x31a115,_0x24b39a);}[_0x293447(0x1c7)](_0x47f680,_0x21bac2){}['_setNodeQueryPath'](_0x987612,_0x3a623b){}[_0x293447(0x1a8)](_0x3b02a4,_0x17ac04){}[_0x293447(0x15a)](_0x1a1ba3){var _0x13d424=_0x293447;return _0x1a1ba3===this[_0x13d424(0x1eb)];}[_0x293447(0x1c2)](_0x4b2b5b,_0x210fca){var _0x2a5047=_0x293447;this[_0x2a5047(0x1a8)](_0x4b2b5b,_0x210fca),this[_0x2a5047(0x1f3)](_0x4b2b5b),_0x210fca['sortProps']&&this[_0x2a5047(0x15d)](_0x4b2b5b),this[_0x2a5047(0x132)](_0x4b2b5b,_0x210fca),this[_0x2a5047(0x205)](_0x4b2b5b,_0x210fca),this[_0x2a5047(0x1da)](_0x4b2b5b);}[_0x293447(0x13f)](_0x20792e,_0x1d1cce){var _0x581b38=_0x293447;let _0x4b47bf;try{_0x46482b[_0x581b38(0x1ad)]&&(_0x4b47bf=_0x46482b['console']['error'],_0x46482b[_0x581b38(0x1ad)][_0x581b38(0x203)]=function(){}),_0x20792e&&typeof _0x20792e[_0x581b38(0x1bf)]==_0x581b38(0x1f2)&&(_0x1d1cce[_0x581b38(0x1bf)]=_0x20792e[_0x581b38(0x1bf)]);}catch{}finally{_0x4b47bf&&(_0x46482b['console'][_0x581b38(0x203)]=_0x4b47bf);}if(_0x1d1cce[_0x581b38(0x197)]===_0x581b38(0x1f2)||_0x1d1cce['type']===_0x581b38(0x17e)){if(isNaN(_0x1d1cce['value']))_0x1d1cce[_0x581b38(0x1de)]=!0x0,delete _0x1d1cce[_0x581b38(0x123)];else switch(_0x1d1cce[_0x581b38(0x123)]){case Number[_0x581b38(0x193)]:_0x1d1cce['positiveInfinity']=!0x0,delete _0x1d1cce[_0x581b38(0x123)];break;case Number[_0x581b38(0x19a)]:_0x1d1cce['negativeInfinity']=!0x0,delete _0x1d1cce[_0x581b38(0x123)];break;case 0x0:this[_0x581b38(0x1fe)](_0x1d1cce[_0x581b38(0x123)])&&(_0x1d1cce[_0x581b38(0x187)]=!0x0);break;}}else _0x1d1cce[_0x581b38(0x197)]==='function'&&typeof _0x20792e[_0x581b38(0x1d7)]==_0x581b38(0x16d)&&_0x20792e[_0x581b38(0x1d7)]&&_0x1d1cce[_0x581b38(0x1d7)]&&_0x20792e['name']!==_0x1d1cce['name']&&(_0x1d1cce[_0x581b38(0x154)]=_0x20792e[_0x581b38(0x1d7)]);}['_isNegativeZero'](_0x138f02){var _0x295204=_0x293447;return 0x1/_0x138f02===Number[_0x295204(0x19a)];}[_0x293447(0x15d)](_0x3c496e){var _0x3d54d6=_0x293447;!_0x3c496e[_0x3d54d6(0x1f6)]||!_0x3c496e[_0x3d54d6(0x1f6)][_0x3d54d6(0x1bf)]||_0x3c496e[_0x3d54d6(0x197)]===_0x3d54d6(0x144)||_0x3c496e[_0x3d54d6(0x197)]===_0x3d54d6(0x18b)||_0x3c496e[_0x3d54d6(0x197)]===_0x3d54d6(0x20d)||_0x3c496e[_0x3d54d6(0x1f6)][_0x3d54d6(0x1d2)](function(_0xd835fa,_0x3acc3e){var _0x1cb500=_0x3d54d6,_0x5c1e0b=_0xd835fa['name'][_0x1cb500(0x1e2)](),_0x3a5c54=_0x3acc3e[_0x1cb500(0x1d7)][_0x1cb500(0x1e2)]();return _0x5c1e0b<_0x3a5c54?-0x1:_0x5c1e0b>_0x3a5c54?0x1:0x0;});}['_addFunctionsNode'](_0x446f2b,_0x1b11ba){var _0x366039=_0x293447;if(!(_0x1b11ba[_0x366039(0x166)]||!_0x446f2b[_0x366039(0x1f6)]||!_0x446f2b[_0x366039(0x1f6)]['length'])){for(var _0x10e1ba=[],_0x13339e=[],_0x124074=0x0,_0x2b5050=_0x446f2b[_0x366039(0x1f6)]['length'];_0x124074<_0x2b5050;_0x124074++){var _0x3cf9a2=_0x446f2b[_0x366039(0x1f6)][_0x124074];_0x3cf9a2['type']===_0x366039(0x12d)?_0x10e1ba[_0x366039(0x1a0)](_0x3cf9a2):_0x13339e[_0x366039(0x1a0)](_0x3cf9a2);}if(!(!_0x13339e[_0x366039(0x1bf)]||_0x10e1ba[_0x366039(0x1bf)]<=0x1)){_0x446f2b[_0x366039(0x1f6)]=_0x13339e;var _0x549186={'functionsNode':!0x0,'props':_0x10e1ba};this[_0x366039(0x1c7)](_0x549186,_0x1b11ba),this['_setNodeLabel'](_0x549186,_0x1b11ba),this[_0x366039(0x1f3)](_0x549186),this[_0x366039(0x1f8)](_0x549186,_0x1b11ba),_0x549186['id']+='\\x20f',_0x446f2b[_0x366039(0x1f6)][_0x366039(0x184)](_0x549186);}}}[_0x293447(0x205)](_0x4c40b3,_0x1ff381){}[_0x293447(0x1f3)](_0x117591){}[_0x293447(0x174)](_0x51f5ce){var _0x2c42f0=_0x293447;return Array[_0x2c42f0(0x198)](_0x51f5ce)||typeof _0x51f5ce==_0x2c42f0(0x155)&&this[_0x2c42f0(0x16f)](_0x51f5ce)==='[object\\x20Array]';}[_0x293447(0x1f8)](_0x392cbb,_0x281927){}[_0x293447(0x1da)](_0x4c8651){var _0x165202=_0x293447;delete _0x4c8651[_0x165202(0x167)],delete _0x4c8651[_0x165202(0x18c)],delete _0x4c8651[_0x165202(0x17b)];}[_0x293447(0x1cf)](_0x513945,_0x3b49c2){}}let _0x5b4cef=new _0x17520b(),_0x54ed19={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x4cc6fd={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x51276c(_0x56a223,_0x4d7393,_0x37d4ff,_0x448b33,_0x3bb7c4,_0x4d919b){var _0x371f52=_0x293447;let _0x26f3f4,_0x16ae89;try{_0x16ae89=_0x147949(),_0x26f3f4=_0x4c887a[_0x4d7393],!_0x26f3f4||_0x16ae89-_0x26f3f4['ts']>0x1f4&&_0x26f3f4['count']&&_0x26f3f4['time']/_0x26f3f4['count']<0x64?(_0x4c887a[_0x4d7393]=_0x26f3f4={'count':0x0,'time':0x0,'ts':_0x16ae89},_0x4c887a[_0x371f52(0x168)]={}):_0x16ae89-_0x4c887a[_0x371f52(0x168)]['ts']>0x32&&_0x4c887a[_0x371f52(0x168)][_0x371f52(0x202)]&&_0x4c887a[_0x371f52(0x168)]['time']/_0x4c887a[_0x371f52(0x168)][_0x371f52(0x202)]<0x64&&(_0x4c887a[_0x371f52(0x168)]={});let _0x1ec019=[],_0x2bed04=_0x26f3f4[_0x371f52(0x15c)]||_0x4c887a[_0x371f52(0x168)][_0x371f52(0x15c)]?_0x4cc6fd:_0x54ed19,_0x2002fe=_0x24b007=>{var _0xf5206a=_0x371f52;let _0x18426c={};return _0x18426c[_0xf5206a(0x1f6)]=_0x24b007[_0xf5206a(0x1f6)],_0x18426c['elements']=_0x24b007[_0xf5206a(0x148)],_0x18426c[_0xf5206a(0x1a2)]=_0x24b007[_0xf5206a(0x1a2)],_0x18426c[_0xf5206a(0x186)]=_0x24b007[_0xf5206a(0x186)],_0x18426c[_0xf5206a(0x178)]=_0x24b007[_0xf5206a(0x178)],_0x18426c[_0xf5206a(0x1f5)]=_0x24b007[_0xf5206a(0x1f5)],_0x18426c[_0xf5206a(0x14b)]=!0x1,_0x18426c[_0xf5206a(0x166)]=!_0x57e6b2,_0x18426c[_0xf5206a(0x152)]=0x1,_0x18426c[_0xf5206a(0x1bc)]=0x0,_0x18426c[_0xf5206a(0x171)]=_0xf5206a(0x169),_0x18426c[_0xf5206a(0x158)]='root_exp',_0x18426c['autoExpand']=!0x0,_0x18426c[_0xf5206a(0x12b)]=[],_0x18426c[_0xf5206a(0x1c3)]=0x0,_0x18426c[_0xf5206a(0x140)]=!0x0,_0x18426c[_0xf5206a(0x1c8)]=0x0,_0x18426c[_0xf5206a(0x204)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x18426c;};for(var _0x131ddb=0x0;_0x131ddb<_0x3bb7c4[_0x371f52(0x1bf)];_0x131ddb++)_0x1ec019[_0x371f52(0x1a0)](_0x5b4cef[_0x371f52(0x1dd)]({'timeNode':_0x56a223===_0x371f52(0x1cd)||void 0x0},_0x3bb7c4[_0x131ddb],_0x2002fe(_0x2bed04),{}));if(_0x56a223===_0x371f52(0x12e)){let _0x3a6f25=Error['stackTraceLimit'];try{Error[_0x371f52(0x1cb)]=0x1/0x0,_0x1ec019[_0x371f52(0x1a0)](_0x5b4cef[_0x371f52(0x1dd)]({'stackNode':!0x0},new Error()[_0x371f52(0x11f)],_0x2002fe(_0x2bed04),{'strLength':0x1/0x0}));}finally{Error[_0x371f52(0x1cb)]=_0x3a6f25;}}return{'method':_0x371f52(0x1a4),'version':_0x17fda6,'args':[{'ts':_0x37d4ff,'session':_0x448b33,'args':_0x1ec019,'id':_0x4d7393,'context':_0x4d919b}]};}catch(_0x6fdb2){return{'method':_0x371f52(0x1a4),'version':_0x17fda6,'args':[{'ts':_0x37d4ff,'session':_0x448b33,'args':[{'type':_0x371f52(0x1e9),'error':_0x6fdb2&&_0x6fdb2[_0x371f52(0x194)]}],'id':_0x4d7393,'context':_0x4d919b}]};}finally{try{if(_0x26f3f4&&_0x16ae89){let _0x46ed87=_0x147949();_0x26f3f4['count']++,_0x26f3f4['time']+=_0x3407be(_0x16ae89,_0x46ed87),_0x26f3f4['ts']=_0x46ed87,_0x4c887a[_0x371f52(0x168)]['count']++,_0x4c887a['hits'][_0x371f52(0x1cd)]+=_0x3407be(_0x16ae89,_0x46ed87),_0x4c887a['hits']['ts']=_0x46ed87,(_0x26f3f4[_0x371f52(0x202)]>0x32||_0x26f3f4[_0x371f52(0x1cd)]>0x64)&&(_0x26f3f4[_0x371f52(0x15c)]=!0x0),(_0x4c887a[_0x371f52(0x168)][_0x371f52(0x202)]>0x3e8||_0x4c887a[_0x371f52(0x168)][_0x371f52(0x1cd)]>0x12c)&&(_0x4c887a[_0x371f52(0x168)][_0x371f52(0x15c)]=!0x0);}}catch{}}}return _0x51276c;}((_0x286e60,_0x143385,_0x33d862,_0x140af9,_0x3f48b2,_0x5ca465,_0x5c8d8e,_0x3928e8,_0x5a585c,_0x3f3d25)=>{var _0x4934aa=_0xcad5d2;if(_0x286e60[_0x4934aa(0x18d)])return _0x286e60[_0x4934aa(0x18d)];if(!J(_0x286e60,_0x3928e8,_0x3f48b2))return _0x286e60[_0x4934aa(0x18d)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x286e60[_0x4934aa(0x18d)];let _0x425c22=W(_0x286e60),_0x408ec9=_0x425c22[_0x4934aa(0x129)],_0x4f57cc=_0x425c22[_0x4934aa(0x1ab)],_0x587aeb=_0x425c22[_0x4934aa(0x13b)],_0x4823a2={'hits':{},'ts':{}},_0x1b72ac=Y(_0x286e60,_0x5a585c,_0x4823a2,_0x5ca465),_0x1b1e6b=_0x253605=>{_0x4823a2['ts'][_0x253605]=_0x4f57cc();},_0x57c59a=(_0x599542,_0x1e2fab)=>{let _0x12e671=_0x4823a2['ts'][_0x1e2fab];if(delete _0x4823a2['ts'][_0x1e2fab],_0x12e671){let _0x40c3fd=_0x408ec9(_0x12e671,_0x4f57cc());_0x44510b(_0x1b72ac('time',_0x599542,_0x587aeb(),_0x5731f6,[_0x40c3fd],_0x1e2fab));}},_0x35091e=_0x31d627=>_0x39550d=>{var _0xc1d5f6=_0x4934aa;try{_0x1b1e6b(_0x39550d),_0x31d627(_0x39550d);}finally{_0x286e60[_0xc1d5f6(0x1ad)][_0xc1d5f6(0x1cd)]=_0x31d627;}},_0x6a42e3=_0x30aeda=>_0x4e197f=>{var _0x1c5b5e=_0x4934aa;try{let [_0x1025c3,_0x2db8a6]=_0x4e197f[_0x1c5b5e(0x19e)](_0x1c5b5e(0x182));_0x57c59a(_0x2db8a6,_0x1025c3),_0x30aeda(_0x1025c3);}finally{_0x286e60[_0x1c5b5e(0x1ad)][_0x1c5b5e(0x170)]=_0x30aeda;}};_0x286e60[_0x4934aa(0x18d)]={'consoleLog':(_0x59d10c,_0xdbe705)=>{var _0x42f196=_0x4934aa;_0x286e60['console'][_0x42f196(0x1a4)][_0x42f196(0x1d7)]!==_0x42f196(0x18f)&&_0x44510b(_0x1b72ac('log',_0x59d10c,_0x587aeb(),_0x5731f6,_0xdbe705));},'consoleTrace':(_0x5ae885,_0x2c92c5)=>{var _0x3706a6=_0x4934aa;_0x286e60[_0x3706a6(0x1ad)][_0x3706a6(0x1a4)][_0x3706a6(0x1d7)]!==_0x3706a6(0x1c5)&&_0x44510b(_0x1b72ac('trace',_0x5ae885,_0x587aeb(),_0x5731f6,_0x2c92c5));},'consoleTime':()=>{var _0x169253=_0x4934aa;_0x286e60[_0x169253(0x1ad)]['time']=_0x35091e(_0x286e60[_0x169253(0x1ad)][_0x169253(0x1cd)]);},'consoleTimeEnd':()=>{var _0x218684=_0x4934aa;_0x286e60[_0x218684(0x1ad)][_0x218684(0x170)]=_0x6a42e3(_0x286e60['console']['timeEnd']);},'autoLog':(_0x2d8fba,_0x2f3a42)=>{var _0x5b8014=_0x4934aa;_0x44510b(_0x1b72ac(_0x5b8014(0x1a4),_0x2f3a42,_0x587aeb(),_0x5731f6,[_0x2d8fba]));},'autoLogMany':(_0x15bced,_0xb0778)=>{var _0x54901e=_0x4934aa;_0x44510b(_0x1b72ac(_0x54901e(0x1a4),_0x15bced,_0x587aeb(),_0x5731f6,_0xb0778));},'autoTrace':(_0x31f390,_0x13ce3a)=>{var _0x49313e=_0x4934aa;_0x44510b(_0x1b72ac(_0x49313e(0x12e),_0x13ce3a,_0x587aeb(),_0x5731f6,[_0x31f390]));},'autoTraceMany':(_0x172d93,_0x4bc431)=>{var _0x3375f5=_0x4934aa;_0x44510b(_0x1b72ac(_0x3375f5(0x12e),_0x172d93,_0x587aeb(),_0x5731f6,_0x4bc431));},'autoTime':(_0x4eb614,_0xcaed47,_0x545aa6)=>{_0x1b1e6b(_0x545aa6);},'autoTimeEnd':(_0x4ff496,_0x55180c,_0x50a20f)=>{_0x57c59a(_0x55180c,_0x50a20f);},'coverage':_0x5d797e=>{var _0x2ead12=_0x4934aa;_0x44510b({'method':_0x2ead12(0x189),'version':_0x5ca465,'args':[{'id':_0x5d797e}]});}};let _0x44510b=b(_0x286e60,_0x143385,_0x33d862,_0x140af9,_0x3f48b2,_0x3f3d25),_0x5731f6=_0x286e60[_0x4934aa(0x201)];return _0x286e60[_0x4934aa(0x18d)];})(globalThis,'127.0.0.1','51528',_0xcad5d2(0x16b),_0xcad5d2(0x162),'1.0.0',_0xcad5d2(0x190),_0xcad5d2(0x14a),_0xcad5d2(0x20b),_0xcad5d2(0x1fa));`);
  } catch {
  }
}
function oo_oo(i, ...v) {
  try {
    oo_cm().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/components/admin/AboutText.tsx
var import_md = require("react-icons/md"), import_sl = require("react-icons/sl"), import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function AboutText() {
  let { texts, user } = (0, import_react29.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
    user.role === "ADMIN" && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(UploadText_default, {}, void 0, !1, {
      fileName: "app/components/admin/AboutText.tsx",
      lineNumber: 19,
      columnNumber: 33
    }, this),
    texts.map((text) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Text_Category, { text }, text.version, !1, {
      fileName: "app/components/admin/AboutText.tsx",
      lineNumber: 21,
      columnNumber: 16
    }, this))
  ] }, void 0, !0, {
    fileName: "app/components/admin/AboutText.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
function Text_Category({ text }) {
  let [hasChanges, setHasChanges] = import_react30.default.useState(!1), [value, setValue] = import_react30.default.useState(null), inputRef = import_react30.default.useRef(null), { user } = (0, import_react29.useLoaderData)(), isAdmin = (user == null ? void 0 : user.role) === "ADMIN", fetcher = (0, import_react29.useFetcher)();
  function handleSubmit(e) {
    var _a;
    if (e.preventDefault(), !isAdmin)
      return null;
    let category = (_a = inputRef.current) == null ? void 0 : _a.value;
    fetcher.submit(
      {
        _action: "change_category",
        version: text.version,
        category
      },
      {
        method: "PATCH",
        action: "/api/text"
      }
    ), setHasChanges(!1);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
    "form",
    {
      onSubmit: handleSubmit,
      className: " flex w-full px-2 justify-between mt-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h4", { className: " font-bold text-sm", children: [
          text.version,
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "text-gray-600 text-xs float-center", children: [
            "count:",
            text == null ? void 0 : text.count,
            " completed:",
            text == null ? void 0 : text.completed_count
          ] }, void 0, !0, {
            fileName: "app/components/admin/AboutText.tsx",
            lineNumber: 60,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/AboutText.tsx",
          lineNumber: 58,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/AboutText.tsx",
          lineNumber: 57,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("input", { hidden: !0, name: "_action", readOnly: !0, value: "change_category" }, void 0, !1, {
          fileName: "app/components/admin/AboutText.tsx",
          lineNumber: 65,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex gap-2 items-center", children: [
          "category:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
            "input",
            {
              ref: inputRef,
              type: "text",
              name: "category",
              placeholder: "Type here",
              className: "input input-bordered input-primary w-full max-w-xs max-h-8",
              value: value ?? text.category,
              onChange: (e) => {
                setHasChanges(e.target.value !== text.category), setValue(e.target.value);
              }
            },
            void 0,
            !1,
            {
              fileName: "app/components/admin/AboutText.tsx",
              lineNumber: 68,
              columnNumber: 9
            },
            this
          ),
          hasChanges && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
            "button",
            {
              onClick: handleSubmit,
              className: "cursor-pointer bg-green-300 py-1 px-2 rounded",
              disabled: !isAdmin,
              children: "Save"
            },
            void 0,
            !1,
            {
              fileName: "app/components/admin/AboutText.tsx",
              lineNumber: 81,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/admin/AboutText.tsx",
          lineNumber: 66,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "dropdown dropdown-hover dropdown-left", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { tabIndex: 0, className: " m-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_sl.SlOptionsVertical, {}, void 0, !1, {
            fileName: "app/components/admin/AboutText.tsx",
            lineNumber: 92,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/admin/AboutText.tsx",
            lineNumber: 91,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(TextSettings, { text }, void 0, !1, {
            fileName: "app/components/admin/AboutText.tsx",
            lineNumber: 94,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/AboutText.tsx",
          lineNumber: 90,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/admin/AboutText.tsx",
      lineNumber: 53,
      columnNumber: 5
    },
    this
  );
}
function TextSettings({ text }) {
  let download_fetcher = (0, import_react29.useFetcher)(), fetcher = (0, import_react29.useFetcher)(), { user } = (0, import_react29.useLoaderData)();
  function handleDownload() {
    download_fetcher.load(`/api/text/${text.version}`);
  }
  function handleDelete() {
    fetcher.submit(
      {
        version: text.version
      },
      {
        method: "DELETE",
        action: "/api/text"
      }
    );
  }
  return (0, import_react30.useEffect)(() => {
    download_fetcher.data && downloadJsonlFile(fetcher.data, text.version);
  }, [download_fetcher.data]), /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
    "ul",
    {
      tabIndex: 0,
      className: "dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "button",
          {
            onClick: handleDownload,
            className: "flex gap-2 items-center cursor-pointer hover:bg-green-300 px-2 rounded",
            type: "button",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_bi.BiSolidCloudDownload, {}, void 0, !1, {
                fileName: "app/components/admin/AboutText.tsx",
                lineNumber: 136,
                columnNumber: 11
              }, this),
              "Download"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/admin/AboutText.tsx",
            lineNumber: 131,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/admin/AboutText.tsx",
          lineNumber: 130,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("li", { children: user.role === "ADMIN" && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "button",
          {
            onClick: handleDelete,
            type: "button",
            className: "flex gap-2 items-center cursor-pointer hover:bg-red-300 px-2 rounded",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_md.MdDelete, {}, void 0, !1, {
                fileName: "app/components/admin/AboutText.tsx",
                lineNumber: 147,
                columnNumber: 13
              }, this),
              "Delete"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/admin/AboutText.tsx",
            lineNumber: 142,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/admin/AboutText.tsx",
          lineNumber: 140,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/admin/AboutText.tsx",
      lineNumber: 126,
      columnNumber: 5
    },
    this
  );
}
var AboutText_default = AboutText;

// app/routes/admin.text.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), loader7 = async ({ request }) => {
  let session = new URL(request.url).searchParams.get("session");
  if (!session)
    return (0, import_node3.redirect)("/error");
  let texts = await getUniqueTextsGroup(), user = await getUser(session), lastbatch = await getLastBatch();
  return (0, import_node3.defer)({
    user,
    texts,
    lastbatch
  });
};
function Admin_Text() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(AboutText_default, {}, void 0, !1, {
    fileName: "app/routes/admin.text.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
var admin_text_default = Admin_Text;

// app/routes/admin.user.tsx
var admin_user_exports = {};
__export(admin_user_exports, {
  default: () => admin_user_default,
  loader: () => loader8,
  meta: () => meta
});
var import_node4 = require("@remix-run/node");

// app/components/admin/UserListCard.tsx
var import_react32 = require("@remix-run/react"), import_react33 = require("react");

// app/components/hooks/useOnlineList.tsx
var import_react31 = require("react");
function useOnlineList() {
  let [online, setOnline] = (0, import_react31.useState)([]), socket = useSocket();
  return (0, import_react31.useEffect)(() => {
    if (socket)
      return socket.on("user_online", (users) => {
        setOnline(users);
      }), socket.on("user_offline", (users) => {
        setOnline(users);
      }), () => {
        socket.off("user_online"), socket.off("user_offline");
      };
  }, [socket]), online;
}

// app/lib/getFormattedDate.ts
var MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
function getFormattedDate(date, prefomattedDate = !1, hideYear = !1) {
  let day = date.getDate(), month = MONTH_NAMES[date.getMonth()], year = date.getFullYear(), hours = date.getHours(), minutes = date.getMinutes();
  return minutes < 10 && (minutes = `0${minutes}`), prefomattedDate ? `${prefomattedDate}` : hideYear ? `${day} ${month}` : `${day} ${month} ${year}`;
}
function timeAgo(dateParam) {
  if (!dateParam)
    return null;
  let date = typeof dateParam == "object" ? dateParam : new Date(dateParam), DAY_IN_MS = 864e5, today = /* @__PURE__ */ new Date(), yesterday = new Date(today - DAY_IN_MS), seconds = Math.round((today - date) / 1e3), minutes = Math.round(seconds / 60), isToday = today.toDateString() === date.toDateString(), isYesterday = yesterday.toDateString() === date.toDateString(), isThisYear = today.getFullYear() === date.getFullYear();
  switch (!0) {
    case seconds < 5:
      return "now";
    case seconds < 60:
      return `${seconds} seconds ago`;
    case seconds < 90:
      return "about a minute ago";
    case minutes < 60:
      return `${minutes} minutes ago`;
    case isToday:
      return getFormattedDate(date, "Today");
    case isYesterday:
      return getFormattedDate(date, "Yesterday");
    case isThisYear:
      return getFormattedDate(date, !1, !0);
    default:
      return getFormattedDate(date);
  }
}

// app/components/admin/UserListCard.tsx
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), UserListCard = () => {
  let { users } = (0, import_react32.useLoaderData)(), onlineUsers = useOnlineList(), current_user = (0, import_react32.useOutletContext)(), reviewers = users.filter((user) => user.role === "REVIEWER"), isAdmin = (current_user == null ? void 0 : current_user.role) === "ADMIN", [selectedReviewer, setSelectedReviewer] = (0, import_react33.useState)("All"), [search, setSearch] = (0, import_react33.useState)("");
  function handleReviewerChange(e) {
    let selectedReviewer2 = e.target.value;
    setSelectedReviewer(selectedReviewer2);
  }
  let list = users.filter(
    (annotator) => annotator.username.includes(search)
  );
  return selectedReviewer !== "All" && (list = list.filter(
    (user) => {
      var _a;
      return ((_a = user == null ? void 0 : user.reviewer) == null ? void 0 : _a.username) === selectedReviewer || (user == null ? void 0 : user.username) === selectedReviewer;
    }
  )), /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "col-span-12 rounded-sm border border-stroke bg-white dark:bg-slate-600 py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex justify-between px-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h4", { className: "mb-6 text-xl font-semibold text-black dark:text-white", children: "Annotators" }, void 0, !1, {
        fileName: "app/components/admin/UserListCard.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "text-gray-400", children: [
        "online :",
        onlineUsers.length
      ] }, void 0, !0, {
        fileName: "app/components/admin/UserListCard.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/UserListCard.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex gap-2  items-center flex-1 mb-2 mx-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      "input",
      {
        type: "text",
        onChange: (e) => setSearch(e.target.value),
        placeholder: "user search",
        className: "input input-sm input-bordered w-full max-w-xs"
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/UserListCard.tsx",
        lineNumber: 39,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/admin/UserListCard.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    isAdmin && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex gap-2  items-center mb-2 mx-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      "select",
      {
        id: "reviewer-select",
        className: "select select-sm select-bordered w-full max-w-xs",
        onChange: handleReviewerChange,
        value: selectedReviewer,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("option", { value: "All", children: "All" }, void 0, !1, {
            fileName: "app/components/admin/UserListCard.tsx",
            lineNumber: 54,
            columnNumber: 13
          }, this),
          reviewers.map((reviewer) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            "option",
            {
              value: reviewer.username,
              children: reviewer.username
            },
            reviewer.id + "-key-selection",
            !1,
            {
              fileName: "app/components/admin/UserListCard.tsx",
              lineNumber: 56,
              columnNumber: 15
            },
            this
          ))
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/admin/UserListCard.tsx",
        lineNumber: 48,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/admin/UserListCard.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: list.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(EachUser, { user }, user.id + "unique_key", !1, {
      fileName: "app/components/admin/UserListCard.tsx",
      lineNumber: 68,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/components/admin/UserListCard.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/UserListCard.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
};
function EachUser({ user }) {
  let { groups } = (0, import_react32.useLoaderData)(), onlineUsers = useOnlineList(), current_user = (0, import_react32.useOutletContext)(), currentBatch = user.assigned_batch.filter(
    (item) => {
      var _a, _b;
      return !((_a = groups[item]) != null && _a.reviewed) && ((_b = groups[item]) == null ? void 0 : _b.approved);
    }
  ), Time = user == null ? void 0 : user.text.find((item) => item.modified_on !== null), time_ago = timeAgo(Time == null ? void 0 : Time.modified_on);
  return user ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    import_react32.Link,
    {
      to: `/admin/user/${user.username}?session=` + (current_user == null ? void 0 : current_user.username),
      className: " cursor-pointer flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4 hover:rounded-sm transition duration-300 ease-in-out hover:bg-green-300",
      children: [
        user.picture ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "avatar ml-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "w-[40px] rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("img", { src: user.picture, alt: "" }, void 0, !1, {
          fileName: "app/components/admin/UserListCard.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/UserListCard.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/UserListCard.tsx",
          lineNumber: 91,
          columnNumber: 9
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "avatar placeholder ml-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "bg-neutral-focus text-neutral-content rounded-full w-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { children: user.username.charAt(0) }, void 0, !1, {
          fileName: "app/components/admin/UserListCard.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/UserListCard.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/UserListCard.tsx",
          lineNumber: 97,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex flex-1 items-center justify-between px-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "font-medium text-black dark:text-white flex justify-between items-center w-full", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: [
                (onlineUsers == null ? void 0 : onlineUsers.includes(user == null ? void 0 : user.username)) && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "text-xs mr-2", title: "online", children: "\u{1F7E2}" }, void 0, !1, {
                  fileName: "app/components/admin/UserListCard.tsx",
                  lineNumber: 108,
                  columnNumber: 17
                }, this),
                user.nickname
              ] }, void 0, !0, {
                fileName: "app/components/admin/UserListCard.tsx",
                lineNumber: 106,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "text-xs ", children: time_ago }, void 0, !1, {
                fileName: "app/components/admin/UserListCard.tsx",
                lineNumber: 114,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/admin/UserListCard.tsx",
              lineNumber: 105,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "flex justify-between items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "text-sm text-black dark:text-white", children: user.username }, void 0, !1, {
              fileName: "app/components/admin/UserListCard.tsx",
              lineNumber: 117,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/components/admin/UserListCard.tsx",
              lineNumber: 116,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/UserListCard.tsx",
            lineNumber: 104,
            columnNumber: 9
          }, this),
          currentBatch.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex h-6 w-6 items-center justify-center rounded-full bg-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "text-xs text-white", children: currentBatch.length }, void 0, !1, {
            fileName: "app/components/admin/UserListCard.tsx",
            lineNumber: 125,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/admin/UserListCard.tsx",
            lineNumber: 124,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/UserListCard.tsx",
          lineNumber: 103,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/admin/UserListCard.tsx",
      lineNumber: 86,
      columnNumber: 5
    },
    this
  ) : null;
}
var UserListCard_default = UserListCard;

// app/routes/admin.user.tsx
var import_react34 = require("react");
var import_react35 = require("@remix-run/react");
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), loader8 = async ({ request }) => {
  let session = new URL(request.url).searchParams.get("session");
  if (!session)
    return (0, import_node4.redirect)("/error");
  let admin = await getUser(session), users = await getUsers(), groups = await getAprovedBatch();
  return users = users.sort(
    (a, b) => b.assigned_batch.length - a.assigned_batch.length
  ), (admin == null ? void 0 : admin.role) !== "ADMIN" && (users = users.filter(
    (user) => user.reviewer_id === null || user.reviewer_id === (admin == null ? void 0 : admin.id)
  ).sort((a, b) => a.reviewer_id === null && b.reviewer_id !== null ? 1 : a.reviewer_id !== null && b.reviewer_id === null ? -1 : 0)), (0, import_node4.json)({
    users,
    groups
  });
}, meta = () => [
  { title: `Admin page | ${toolname}` },
  {
    name: "description",
    content: `admin page for ${toolname}`
  }
];
function Index() {
  let socket = useSocket(), reval = (0, import_react35.useRevalidator)(), current_user = (0, import_react35.useOutletContext)(), { users } = (0, import_react35.useLoaderData)(), reviewers = users.filter((user) => user.role === "REVIEWER");
  return (0, import_react34.useEffect)(() => {
    socket && socket.on("text-status-changed", (data) => {
      data && reval.revalidate();
    });
  }, [socket]), /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "col-span-12 xl:col-span-8 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react35.Outlet, { context: { current_user, reviewers } }, void 0, !1, {
      fileName: "app/routes/admin.user.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.user.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(UserListCard_default, {}, void 0, !1, {
      fileName: "app/routes/admin.user.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.user.tsx",
    lineNumber: 76,
    columnNumber: 5
  }, this);
}
var admin_user_default = Index;

// app/routes/api.upload.tsx
var api_upload_exports = {};
__export(api_upload_exports, {
  action: () => action2
});

// app/model/utils/server.dataUpload.ts
async function uploadData({
  name,
  data
}) {
  try {
    if (await db.text.findFirst({
      where: {
        version: { in: name }
      }
    }))
      return console.log(...oo_oo2("940852978_0", "Record already exists")), { error: "Record already exists" };
    let UploadData = data == null ? void 0 : data.map((item) => ({
      version: item.version,
      original_text: item.original_text,
      batch: item.batch
    })), uploaded = await db.text.createMany({
      data: UploadData
    });
    return console.log(...oo_oo2("940852978_1", "uploaded data: ")), uploaded;
  } catch (e) {
    throw new Error("upload failed" + e);
  }
}
function oo_cm2() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0xcad5d2=_0x1c6c;function _0x12b9(){var _0x19e831=[':logPointId:','join','unshift','getOwnPropertyDescriptor','totalStrLength','negativeZero','send','coverage','_connectToHostNow','Map','_hasSetOnItsPath','_console_ninja','get','disabledLog','1696768797626','getOwnPropertyNames','pop','POSITIVE_INFINITY','message','onopen','1FtswoI','type','isArray','warn','NEGATIVE_INFINITY','bigint','_p_','_ws','split','_type','push','getOwnPropertySymbols','strLength','6894264XFUiaf','log','_processTreeNodeResult','_maxConnectAttemptCount','WebSocket','_setNodeLabel','_Symbol','path','timeStamp','[object\\x20Array]','console','_connecting','ws://','index','_keyStrRegExp','_connectAttemptCount','66563mjGyJi','onmessage','_isSet','bind','set','url','symbol','onclose','current','level','hrtime','create','length','isExpressionToEvaluate','enumerable','_treeNodePropertiesAfterFullValue','autoExpandPropertyCount','versions','disabledTrace','Symbol','_setNodeId','allStrLength','String','_getOwnPropertyDescriptor','stackTraceLimit','global','time','_isMap','_setNodeExpressionPath','_HTMLAllCollection','then','sort','edge','defineProperty','_addObjectProperty','getWebSocketClass','name','catch','toString','_cleanNode','_connected','_WebSocketClass','serialize','nan','https://tinyurl.com/37x8b79t','concat','_allowedToConnectOnSend','toLowerCase','cappedElements','_inNextEdge','_regExpToString','_addProperty','_webSocketErrorDocsLink','env','unknown','performance','_undefined','getPrototypeOf','nuxt','_p_length','_WebSocket','_numberRegExp','nodeModules','number','_setNodeExpandableState','168ogoyEi','autoExpandMaxDepth','props','setter','_setNodePermissions','ws/index.js','','_allowedToSend','_dateToString','_setNodeQueryPath','_isNegativeZero','[object\\x20BigInt]','_propertyName','_console_ninja_session','count','error','node','_addLoadNode','[object\\x20Date]','constructor','parent','gateway.docker.internal','location','','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','Set','NEXT_RUNTIME','_isPrimitiveWrapperType','stack','test','[object\\x20Set]','[object\\x20Map]','value','_blacklistedProperty','port','cappedProps','next.js','includes','elapsed','_treeNodePropertiesBeforeFullValue','autoExpandPreviousObjects','process','function','trace','1069780bPjMJE','slice','capped','_addFunctionsNode','_property','unref','HTMLAllCollection','\\x20server','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','null','1500042kSwZYa','data','now','\\x20browser','logger\\x20websocket\\x20error','_consoleNinjaAllowedToStart','_additionalMetadata','resolveGetters','close','method','_attemptToReconnectShortly','array','date','prototype','undefined','elements','indexOf',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.109.223"],'sortProps','autoExpand','host','_inBrowser','valueOf','_isPrimitiveType','1654820ofrHlo','depth','Error','funcName','object','boolean','default','rootExpression','36eVrAMY','_isUndefined','stringify','reduceLimits','_sortProps','forEach','_reconnectTimeout','replace','3659840UAwsGX','remix','2872143HYLacE','reload','substr','noFunctions','_hasSymbolPropertyOnItsPath','hits','root_exp_id','parse',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.231\\\\node_modules",'hostname','string','hasOwnProperty','_objectToString','timeEnd','expId','__es'+'Module','_getOwnPropertyNames','_isArray','_disposeWebsocket','_getOwnPropertySymbols','expressionsToEvaluate','autoExpandLimit','perf_hooks','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','_hasMapOnItsPath','_capIfString','_socket','Number','dockerizedApp','_quotedRegExp','call'];_0x12b9=function(){return _0x19e831;};return _0x12b9();}(function(_0x1dceec,_0x472a96){var _0x46d447=_0x1c6c,_0x7f3037=_0x1dceec();while(!![]){try{var _0x1ff89a=-parseInt(_0x46d447(0x196))/0x1*(parseInt(_0x46d447(0x139))/0x2)+-parseInt(_0x46d447(0x163))/0x3+parseInt(_0x46d447(0x161))/0x4+-parseInt(_0x46d447(0x12f))/0x5+-parseInt(_0x46d447(0x1f4))/0x6*(-parseInt(_0x46d447(0x1b3))/0x7)+parseInt(_0x46d447(0x1a3))/0x8+-parseInt(_0x46d447(0x159))/0x9*(-parseInt(_0x46d447(0x151))/0xa);if(_0x1ff89a===_0x472a96)break;else _0x7f3037['push'](_0x7f3037['shift']());}catch(_0x1115bc){_0x7f3037['push'](_0x7f3037['shift']());}}}(_0x12b9,0xbf4cd));var j=Object[_0xcad5d2(0x1be)],H=Object[_0xcad5d2(0x1d4)],G=Object[_0xcad5d2(0x185)],ee=Object[_0xcad5d2(0x191)],te=Object[_0xcad5d2(0x1ec)],ne=Object['prototype'][_0xcad5d2(0x16e)],re=(_0x52e5c2,_0x2f7179,_0x379308,_0x398506)=>{var _0x36978b=_0xcad5d2;if(_0x2f7179&&typeof _0x2f7179==_0x36978b(0x155)||typeof _0x2f7179=='function'){for(let _0x1333b7 of ee(_0x2f7179))!ne[_0x36978b(0x181)](_0x52e5c2,_0x1333b7)&&_0x1333b7!==_0x379308&&H(_0x52e5c2,_0x1333b7,{'get':()=>_0x2f7179[_0x1333b7],'enumerable':!(_0x398506=G(_0x2f7179,_0x1333b7))||_0x398506[_0x36978b(0x1c1)]});}return _0x52e5c2;},x=(_0xd0d481,_0x5a9545,_0x58472d)=>(_0x58472d=_0xd0d481!=null?j(te(_0xd0d481)):{},re(_0x5a9545||!_0xd0d481||!_0xd0d481[_0xcad5d2(0x172)]?H(_0x58472d,_0xcad5d2(0x157),{'value':_0xd0d481,'enumerable':!0x0}):_0x58472d,_0xd0d481)),X=class{constructor(_0xf67ac2,_0x39905a,_0xdeb3c1,_0xbbe41c,_0x18b065){var _0x4753f9=_0xcad5d2;this[_0x4753f9(0x1cc)]=_0xf67ac2,this[_0x4753f9(0x14d)]=_0x39905a,this['port']=_0xdeb3c1,this[_0x4753f9(0x1f1)]=_0xbbe41c,this[_0x4753f9(0x17f)]=_0x18b065,this['_allowedToSend']=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x4753f9(0x1db)]=!0x1,this[_0x4753f9(0x1ae)]=!0x1,this[_0x4753f9(0x1e4)]=_0xf67ac2[_0x4753f9(0x12c)]?.['env']?.['NEXT_RUNTIME']===_0x4753f9(0x1d3),this[_0x4753f9(0x14e)]=!this[_0x4753f9(0x1cc)]['process']?.[_0x4753f9(0x1c4)]?.[_0x4753f9(0x204)]&&!this[_0x4753f9(0x1e4)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x4753f9(0x1a6)]=0x14,this[_0x4753f9(0x1e7)]=_0x4753f9(0x1df),this['_sendErrorMessage']=(this['_inBrowser']?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x4753f9(0x17a))+this[_0x4753f9(0x1e7)];}async['getWebSocketClass'](){var _0x1351c1=_0xcad5d2;if(this[_0x1351c1(0x1dc)])return this['_WebSocketClass'];let _0x364031;if(this[_0x1351c1(0x14e)]||this[_0x1351c1(0x1e4)])_0x364031=this[_0x1351c1(0x1cc)][_0x1351c1(0x1a7)];else{if(this[_0x1351c1(0x1cc)][_0x1351c1(0x12c)]?.[_0x1351c1(0x1ef)])_0x364031=this[_0x1351c1(0x1cc)]['process']?.[_0x1351c1(0x1ef)];else try{let _0x124ebe=await import('path');_0x364031=(await import((await import(_0x1351c1(0x1b8)))['pathToFileURL'](_0x124ebe[_0x1351c1(0x183)](this[_0x1351c1(0x1f1)],_0x1351c1(0x1f9)))[_0x1351c1(0x1d9)]()))['default'];}catch{try{_0x364031=require(require(_0x1351c1(0x1aa))[_0x1351c1(0x183)](this[_0x1351c1(0x1f1)],'ws'));}catch{throw new Error(_0x1351c1(0x137));}}}return this[_0x1351c1(0x1dc)]=_0x364031,_0x364031;}['_connectToHostNow'](){var _0xe4b17f=_0xcad5d2;this['_connecting']||this[_0xe4b17f(0x1db)]||this[_0xe4b17f(0x1b2)]>=this[_0xe4b17f(0x1a6)]||(this[_0xe4b17f(0x1e1)]=!0x1,this[_0xe4b17f(0x1ae)]=!0x0,this[_0xe4b17f(0x1b2)]++,this['_ws']=new Promise((_0x22849b,_0x38a9cd)=>{var _0x415d02=_0xe4b17f;this[_0x415d02(0x1d6)]()['then'](_0x469e18=>{var _0x4d8716=_0x415d02;let _0x5fa263=new _0x469e18(_0x4d8716(0x1af)+(!this['_inBrowser']&&this[_0x4d8716(0x17f)]?_0x4d8716(0x209):this[_0x4d8716(0x14d)])+':'+this[_0x4d8716(0x125)]);_0x5fa263['onerror']=()=>{var _0x25600d=_0x4d8716;this['_allowedToSend']=!0x1,this['_disposeWebsocket'](_0x5fa263),this[_0x25600d(0x143)](),_0x38a9cd(new Error(_0x25600d(0x13d)));},_0x5fa263[_0x4d8716(0x195)]=()=>{var _0x5576fe=_0x4d8716;this[_0x5576fe(0x14e)]||_0x5fa263['_socket']&&_0x5fa263[_0x5576fe(0x17d)][_0x5576fe(0x134)]&&_0x5fa263[_0x5576fe(0x17d)][_0x5576fe(0x134)](),_0x22849b(_0x5fa263);},_0x5fa263[_0x4d8716(0x1ba)]=()=>{var _0x1c4726=_0x4d8716;this[_0x1c4726(0x1e1)]=!0x0,this[_0x1c4726(0x175)](_0x5fa263),this[_0x1c4726(0x143)]();},_0x5fa263[_0x4d8716(0x1b4)]=_0x21adb4=>{var _0x55b71e=_0x4d8716;try{_0x21adb4&&_0x21adb4[_0x55b71e(0x13a)]&&this[_0x55b71e(0x14e)]&&JSON[_0x55b71e(0x16a)](_0x21adb4[_0x55b71e(0x13a)])[_0x55b71e(0x142)]===_0x55b71e(0x164)&&this[_0x55b71e(0x1cc)][_0x55b71e(0x20a)][_0x55b71e(0x164)]();}catch{}};})[_0x415d02(0x1d1)](_0x381826=>(this[_0x415d02(0x1db)]=!0x0,this['_connecting']=!0x1,this[_0x415d02(0x1e1)]=!0x1,this[_0x415d02(0x1fb)]=!0x0,this['_connectAttemptCount']=0x0,_0x381826))[_0x415d02(0x1d8)](_0x370b61=>(this[_0x415d02(0x1db)]=!0x1,this['_connecting']=!0x1,console[_0x415d02(0x199)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x415d02(0x1e7)]),_0x38a9cd(new Error(_0x415d02(0x20c)+(_0x370b61&&_0x370b61[_0x415d02(0x194)])))));}));}['_disposeWebsocket'](_0x1ada9b){var _0x1e726d=_0xcad5d2;this[_0x1e726d(0x1db)]=!0x1,this[_0x1e726d(0x1ae)]=!0x1;try{_0x1ada9b['onclose']=null,_0x1ada9b['onerror']=null,_0x1ada9b[_0x1e726d(0x195)]=null;}catch{}try{_0x1ada9b['readyState']<0x2&&_0x1ada9b[_0x1e726d(0x141)]();}catch{}}['_attemptToReconnectShortly'](){var _0x3e4cc6=_0xcad5d2;clearTimeout(this['_reconnectTimeout']),!(this['_connectAttemptCount']>=this[_0x3e4cc6(0x1a6)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0xea924d=_0x3e4cc6;this[_0xea924d(0x1db)]||this['_connecting']||(this[_0xea924d(0x18a)](),this[_0xea924d(0x19d)]?.['catch'](()=>this[_0xea924d(0x143)]()));},0x1f4),this[_0x3e4cc6(0x15f)][_0x3e4cc6(0x134)]&&this[_0x3e4cc6(0x15f)]['unref']());}async['send'](_0xce1d6){var _0xc52a3=_0xcad5d2;try{if(!this[_0xc52a3(0x1fb)])return;this[_0xc52a3(0x1e1)]&&this[_0xc52a3(0x18a)](),(await this[_0xc52a3(0x19d)])[_0xc52a3(0x188)](JSON[_0xc52a3(0x15b)](_0xce1d6));}catch(_0x51fc5b){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x51fc5b&&_0x51fc5b[_0xc52a3(0x194)])),this[_0xc52a3(0x1fb)]=!0x1,this[_0xc52a3(0x143)]();}}};function _0x1c6c(_0x4e5f1a,_0xe7b3b5){var _0x12b9d6=_0x12b9();return _0x1c6c=function(_0x1c6ce7,_0x2c87be){_0x1c6ce7=_0x1c6ce7-0x11f;var _0x39be75=_0x12b9d6[_0x1c6ce7];return _0x39be75;},_0x1c6c(_0x4e5f1a,_0xe7b3b5);}function b(_0x2f099e,_0x303c3d,_0x1baa03,_0x2c0edb,_0x51ccfe,_0x4bfbe1){var _0x480dd3=_0xcad5d2;let _0x43d30f=_0x1baa03[_0x480dd3(0x19e)](',')['map'](_0xff04cc=>{var _0x102f02=_0x480dd3;try{_0x2f099e[_0x102f02(0x201)]||((_0x51ccfe===_0x102f02(0x127)||_0x51ccfe==='remix'||_0x51ccfe==='astro')&&(_0x51ccfe+=!_0x2f099e[_0x102f02(0x12c)]?.[_0x102f02(0x1c4)]?.[_0x102f02(0x204)]&&_0x2f099e['process']?.['env']?.[_0x102f02(0x20e)]!==_0x102f02(0x1d3)?_0x102f02(0x13c):_0x102f02(0x136)),_0x2f099e[_0x102f02(0x201)]={'id':+new Date(),'tool':_0x51ccfe});let _0x1b1659=new X(_0x2f099e,_0x303c3d,_0xff04cc,_0x2c0edb,_0x4bfbe1);return _0x1b1659[_0x102f02(0x188)][_0x102f02(0x1b6)](_0x1b1659);}catch(_0xcd874a){return console[_0x102f02(0x199)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0xcd874a&&_0xcd874a[_0x102f02(0x194)]),()=>{};}});return _0x2807c9=>_0x43d30f[_0x480dd3(0x15e)](_0x4f0788=>_0x4f0788(_0x2807c9));}function W(_0x102cde){var _0x2e7d06=_0xcad5d2;let _0x208e9d=function(_0x5a8746,_0x10e3ca){return _0x10e3ca-_0x5a8746;},_0x44de2f;if(_0x102cde['performance'])_0x44de2f=function(){var _0x298d92=_0x1c6c;return _0x102cde[_0x298d92(0x1ea)][_0x298d92(0x13b)]();};else{if(_0x102cde['process']&&_0x102cde['process'][_0x2e7d06(0x1bd)]&&_0x102cde[_0x2e7d06(0x12c)]?.[_0x2e7d06(0x1e8)]?.[_0x2e7d06(0x20e)]!==_0x2e7d06(0x1d3))_0x44de2f=function(){return _0x102cde['process']['hrtime']();},_0x208e9d=function(_0x117359,_0x58a9f2){return 0x3e8*(_0x58a9f2[0x0]-_0x117359[0x0])+(_0x58a9f2[0x1]-_0x117359[0x1])/0xf4240;};else try{let {performance:_0xfd60cc}=require(_0x2e7d06(0x179));_0x44de2f=function(){var _0x3343ed=_0x2e7d06;return _0xfd60cc[_0x3343ed(0x13b)]();};}catch{_0x44de2f=function(){return+new Date();};}}return{'elapsed':_0x208e9d,'timeStamp':_0x44de2f,'now':()=>Date[_0x2e7d06(0x13b)]()};}function J(_0x2b6bc0,_0x46ad11,_0xa84d0e){var _0x3d6cef=_0xcad5d2;if(_0x2b6bc0[_0x3d6cef(0x13e)]!==void 0x0)return _0x2b6bc0[_0x3d6cef(0x13e)];let _0x237ec4=_0x2b6bc0['process']?.[_0x3d6cef(0x1c4)]?.[_0x3d6cef(0x204)]||_0x2b6bc0[_0x3d6cef(0x12c)]?.[_0x3d6cef(0x1e8)]?.['NEXT_RUNTIME']===_0x3d6cef(0x1d3);return _0x237ec4&&_0xa84d0e===_0x3d6cef(0x1ed)?_0x2b6bc0[_0x3d6cef(0x13e)]=!0x1:_0x2b6bc0[_0x3d6cef(0x13e)]=_0x237ec4||!_0x46ad11||_0x2b6bc0[_0x3d6cef(0x20a)]?.['hostname']&&_0x46ad11[_0x3d6cef(0x128)](_0x2b6bc0[_0x3d6cef(0x20a)][_0x3d6cef(0x16c)]),_0x2b6bc0[_0x3d6cef(0x13e)];}function Y(_0x46482b,_0x57e6b2,_0x4c887a,_0x17fda6){var _0x293447=_0xcad5d2;_0x46482b=_0x46482b,_0x57e6b2=_0x57e6b2,_0x4c887a=_0x4c887a,_0x17fda6=_0x17fda6;let _0x1e581f=W(_0x46482b),_0x3407be=_0x1e581f[_0x293447(0x129)],_0x147949=_0x1e581f[_0x293447(0x1ab)];class _0x17520b{constructor(){var _0x1a8064=_0x293447;this[_0x1a8064(0x1b1)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x1a8064(0x1f0)]=/^(0|[1-9][0-9]*)$/,this[_0x1a8064(0x180)]=/'([^\\\\']|\\\\')*'/,this[_0x1a8064(0x1eb)]=_0x46482b[_0x1a8064(0x147)],this['_HTMLAllCollection']=_0x46482b[_0x1a8064(0x135)],this[_0x1a8064(0x1ca)]=Object[_0x1a8064(0x185)],this['_getOwnPropertyNames']=Object[_0x1a8064(0x191)],this[_0x1a8064(0x1a9)]=_0x46482b[_0x1a8064(0x1c6)],this[_0x1a8064(0x1e5)]=RegExp['prototype'][_0x1a8064(0x1d9)],this['_dateToString']=Date[_0x1a8064(0x146)][_0x1a8064(0x1d9)];}[_0x293447(0x1dd)](_0x33f3af,_0x541f55,_0x535e8a,_0x5abbd7){var _0x89a98b=_0x293447,_0x4dc61f=this,_0x131512=_0x535e8a['autoExpand'];function _0xe5fc89(_0x31c971,_0x1051f9,_0x106ea8){var _0xa14823=_0x1c6c;_0x1051f9['type']=_0xa14823(0x1e9),_0x1051f9[_0xa14823(0x203)]=_0x31c971[_0xa14823(0x194)],_0x21fe89=_0x106ea8[_0xa14823(0x204)][_0xa14823(0x1bb)],_0x106ea8[_0xa14823(0x204)]['current']=_0x1051f9,_0x4dc61f['_treeNodePropertiesBeforeFullValue'](_0x1051f9,_0x106ea8);}try{_0x535e8a['level']++,_0x535e8a['autoExpand']&&_0x535e8a['autoExpandPreviousObjects'][_0x89a98b(0x1a0)](_0x541f55);var _0x40b035,_0x37207d,_0x4b1d9f,_0x1d0dc7,_0x237f23=[],_0x19fd43=[],_0x385bc2,_0x47a5fb=this[_0x89a98b(0x19f)](_0x541f55),_0x4746da=_0x47a5fb===_0x89a98b(0x144),_0x23ece8=!0x1,_0x9c79d5=_0x47a5fb===_0x89a98b(0x12d),_0x3eb391=this['_isPrimitiveType'](_0x47a5fb),_0x2de0c3=this[_0x89a98b(0x20f)](_0x47a5fb),_0x856d9b=_0x3eb391||_0x2de0c3,_0x5def3c={},_0x4112fb=0x0,_0x392aa4=!0x1,_0x21fe89,_0x47e1b9=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x535e8a[_0x89a98b(0x152)]){if(_0x4746da){if(_0x37207d=_0x541f55['length'],_0x37207d>_0x535e8a[_0x89a98b(0x148)]){for(_0x4b1d9f=0x0,_0x1d0dc7=_0x535e8a[_0x89a98b(0x148)],_0x40b035=_0x4b1d9f;_0x40b035<_0x1d0dc7;_0x40b035++)_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f[_0x89a98b(0x1e6)](_0x237f23,_0x541f55,_0x47a5fb,_0x40b035,_0x535e8a));_0x33f3af[_0x89a98b(0x1e3)]=!0x0;}else{for(_0x4b1d9f=0x0,_0x1d0dc7=_0x37207d,_0x40b035=_0x4b1d9f;_0x40b035<_0x1d0dc7;_0x40b035++)_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f['_addProperty'](_0x237f23,_0x541f55,_0x47a5fb,_0x40b035,_0x535e8a));}_0x535e8a['autoExpandPropertyCount']+=_0x19fd43[_0x89a98b(0x1bf)];}if(!(_0x47a5fb==='null'||_0x47a5fb==='undefined')&&!_0x3eb391&&_0x47a5fb!==_0x89a98b(0x1c9)&&_0x47a5fb!=='Buffer'&&_0x47a5fb!==_0x89a98b(0x19b)){var _0x2652cb=_0x5abbd7[_0x89a98b(0x1f6)]||_0x535e8a[_0x89a98b(0x1f6)];if(this[_0x89a98b(0x1b5)](_0x541f55)?(_0x40b035=0x0,_0x541f55[_0x89a98b(0x15e)](function(_0x2bfb85){var _0x56d7fe=_0x89a98b;if(_0x4112fb++,_0x535e8a[_0x56d7fe(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;return;}if(!_0x535e8a[_0x56d7fe(0x1c0)]&&_0x535e8a[_0x56d7fe(0x14c)]&&_0x535e8a[_0x56d7fe(0x1c3)]>_0x535e8a['autoExpandLimit']){_0x392aa4=!0x0;return;}_0x19fd43[_0x56d7fe(0x1a0)](_0x4dc61f[_0x56d7fe(0x1e6)](_0x237f23,_0x541f55,_0x56d7fe(0x20d),_0x40b035++,_0x535e8a,function(_0x3d7054){return function(){return _0x3d7054;};}(_0x2bfb85)));})):this[_0x89a98b(0x1ce)](_0x541f55)&&_0x541f55[_0x89a98b(0x15e)](function(_0x2039af,_0x18c51b){var _0x2c5d76=_0x89a98b;if(_0x4112fb++,_0x535e8a[_0x2c5d76(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;return;}if(!_0x535e8a['isExpressionToEvaluate']&&_0x535e8a[_0x2c5d76(0x14c)]&&_0x535e8a['autoExpandPropertyCount']>_0x535e8a[_0x2c5d76(0x178)]){_0x392aa4=!0x0;return;}var _0x36b8a8=_0x18c51b[_0x2c5d76(0x1d9)]();_0x36b8a8[_0x2c5d76(0x1bf)]>0x64&&(_0x36b8a8=_0x36b8a8[_0x2c5d76(0x130)](0x0,0x64)+'...'),_0x19fd43[_0x2c5d76(0x1a0)](_0x4dc61f[_0x2c5d76(0x1e6)](_0x237f23,_0x541f55,'Map',_0x36b8a8,_0x535e8a,function(_0x33390e){return function(){return _0x33390e;};}(_0x2039af)));}),!_0x23ece8){try{for(_0x385bc2 in _0x541f55)if(!(_0x4746da&&_0x47e1b9[_0x89a98b(0x120)](_0x385bc2))&&!this[_0x89a98b(0x124)](_0x541f55,_0x385bc2,_0x535e8a)){if(_0x4112fb++,_0x535e8a[_0x89a98b(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;break;}if(!_0x535e8a[_0x89a98b(0x1c0)]&&_0x535e8a[_0x89a98b(0x14c)]&&_0x535e8a[_0x89a98b(0x1c3)]>_0x535e8a[_0x89a98b(0x178)]){_0x392aa4=!0x0;break;}_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f[_0x89a98b(0x1d5)](_0x237f23,_0x5def3c,_0x541f55,_0x47a5fb,_0x385bc2,_0x535e8a));}}catch{}if(_0x5def3c[_0x89a98b(0x1ee)]=!0x0,_0x9c79d5&&(_0x5def3c['_p_name']=!0x0),!_0x392aa4){var _0x33c504=[][_0x89a98b(0x1e0)](this[_0x89a98b(0x173)](_0x541f55))[_0x89a98b(0x1e0)](this[_0x89a98b(0x176)](_0x541f55));for(_0x40b035=0x0,_0x37207d=_0x33c504[_0x89a98b(0x1bf)];_0x40b035<_0x37207d;_0x40b035++)if(_0x385bc2=_0x33c504[_0x40b035],!(_0x4746da&&_0x47e1b9[_0x89a98b(0x120)](_0x385bc2[_0x89a98b(0x1d9)]()))&&!this['_blacklistedProperty'](_0x541f55,_0x385bc2,_0x535e8a)&&!_0x5def3c[_0x89a98b(0x19c)+_0x385bc2[_0x89a98b(0x1d9)]()]){if(_0x4112fb++,_0x535e8a[_0x89a98b(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;break;}if(!_0x535e8a[_0x89a98b(0x1c0)]&&_0x535e8a[_0x89a98b(0x14c)]&&_0x535e8a[_0x89a98b(0x1c3)]>_0x535e8a[_0x89a98b(0x178)]){_0x392aa4=!0x0;break;}_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f[_0x89a98b(0x1d5)](_0x237f23,_0x5def3c,_0x541f55,_0x47a5fb,_0x385bc2,_0x535e8a));}}}}}if(_0x33f3af[_0x89a98b(0x197)]=_0x47a5fb,_0x856d9b?(_0x33f3af[_0x89a98b(0x123)]=_0x541f55[_0x89a98b(0x14f)](),this[_0x89a98b(0x17c)](_0x47a5fb,_0x33f3af,_0x535e8a,_0x5abbd7)):_0x47a5fb===_0x89a98b(0x145)?_0x33f3af[_0x89a98b(0x123)]=this[_0x89a98b(0x1fc)]['call'](_0x541f55):_0x47a5fb===_0x89a98b(0x19b)?_0x33f3af['value']=_0x541f55['toString']():_0x47a5fb==='RegExp'?_0x33f3af[_0x89a98b(0x123)]=this[_0x89a98b(0x1e5)]['call'](_0x541f55):_0x47a5fb===_0x89a98b(0x1b9)&&this[_0x89a98b(0x1a9)]?_0x33f3af[_0x89a98b(0x123)]=this[_0x89a98b(0x1a9)][_0x89a98b(0x146)][_0x89a98b(0x1d9)]['call'](_0x541f55):!_0x535e8a[_0x89a98b(0x152)]&&!(_0x47a5fb===_0x89a98b(0x138)||_0x47a5fb===_0x89a98b(0x147))&&(delete _0x33f3af['value'],_0x33f3af['capped']=!0x0),_0x392aa4&&(_0x33f3af[_0x89a98b(0x126)]=!0x0),_0x21fe89=_0x535e8a[_0x89a98b(0x204)][_0x89a98b(0x1bb)],_0x535e8a[_0x89a98b(0x204)][_0x89a98b(0x1bb)]=_0x33f3af,this[_0x89a98b(0x12a)](_0x33f3af,_0x535e8a),_0x19fd43[_0x89a98b(0x1bf)]){for(_0x40b035=0x0,_0x37207d=_0x19fd43[_0x89a98b(0x1bf)];_0x40b035<_0x37207d;_0x40b035++)_0x19fd43[_0x40b035](_0x40b035);}_0x237f23[_0x89a98b(0x1bf)]&&(_0x33f3af[_0x89a98b(0x1f6)]=_0x237f23);}catch(_0x332a80){_0xe5fc89(_0x332a80,_0x33f3af,_0x535e8a);}return this[_0x89a98b(0x13f)](_0x541f55,_0x33f3af),this['_treeNodePropertiesAfterFullValue'](_0x33f3af,_0x535e8a),_0x535e8a[_0x89a98b(0x204)]['current']=_0x21fe89,_0x535e8a[_0x89a98b(0x1bc)]--,_0x535e8a[_0x89a98b(0x14c)]=_0x131512,_0x535e8a[_0x89a98b(0x14c)]&&_0x535e8a[_0x89a98b(0x12b)][_0x89a98b(0x192)](),_0x33f3af;}[_0x293447(0x176)](_0xc2da79){var _0x30bba4=_0x293447;return Object[_0x30bba4(0x1a1)]?Object[_0x30bba4(0x1a1)](_0xc2da79):[];}[_0x293447(0x1b5)](_0x1d60a9){var _0x48facd=_0x293447;return!!(_0x1d60a9&&_0x46482b[_0x48facd(0x20d)]&&this['_objectToString'](_0x1d60a9)===_0x48facd(0x121)&&_0x1d60a9['forEach']);}[_0x293447(0x124)](_0x34f203,_0x464c54,_0x34f808){var _0x336088=_0x293447;return _0x34f808[_0x336088(0x166)]?typeof _0x34f203[_0x464c54]==_0x336088(0x12d):!0x1;}['_type'](_0x485e7d){var _0x5ba655=_0x293447,_0x28ac8c='';return _0x28ac8c=typeof _0x485e7d,_0x28ac8c===_0x5ba655(0x155)?this[_0x5ba655(0x16f)](_0x485e7d)===_0x5ba655(0x1ac)?_0x28ac8c=_0x5ba655(0x144):this[_0x5ba655(0x16f)](_0x485e7d)===_0x5ba655(0x206)?_0x28ac8c=_0x5ba655(0x145):this[_0x5ba655(0x16f)](_0x485e7d)===_0x5ba655(0x1ff)?_0x28ac8c=_0x5ba655(0x19b):_0x485e7d===null?_0x28ac8c='null':_0x485e7d['constructor']&&(_0x28ac8c=_0x485e7d[_0x5ba655(0x207)][_0x5ba655(0x1d7)]||_0x28ac8c):_0x28ac8c===_0x5ba655(0x147)&&this[_0x5ba655(0x1d0)]&&_0x485e7d instanceof this[_0x5ba655(0x1d0)]&&(_0x28ac8c=_0x5ba655(0x135)),_0x28ac8c;}['_objectToString'](_0x470728){var _0x3feed7=_0x293447;return Object[_0x3feed7(0x146)][_0x3feed7(0x1d9)][_0x3feed7(0x181)](_0x470728);}[_0x293447(0x150)](_0x16bd2f){var _0x42f834=_0x293447;return _0x16bd2f===_0x42f834(0x156)||_0x16bd2f===_0x42f834(0x16d)||_0x16bd2f===_0x42f834(0x1f2);}[_0x293447(0x20f)](_0x1ee66b){var _0x17537c=_0x293447;return _0x1ee66b==='Boolean'||_0x1ee66b===_0x17537c(0x1c9)||_0x1ee66b==='Number';}[_0x293447(0x1e6)](_0x557084,_0x2e0b7c,_0x1d9f5b,_0x2114e0,_0x1f5832,_0x315ae9){var _0x51915e=this;return function(_0x150684){var _0xcc84a=_0x1c6c,_0x35daea=_0x1f5832['node']['current'],_0x4c332f=_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x1b0)],_0x2a27c1=_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x208)];_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x208)]=_0x35daea,_0x1f5832[_0xcc84a(0x204)]['index']=typeof _0x2114e0==_0xcc84a(0x1f2)?_0x2114e0:_0x150684,_0x557084[_0xcc84a(0x1a0)](_0x51915e[_0xcc84a(0x133)](_0x2e0b7c,_0x1d9f5b,_0x2114e0,_0x1f5832,_0x315ae9)),_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x208)]=_0x2a27c1,_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x1b0)]=_0x4c332f;};}[_0x293447(0x1d5)](_0x192f6e,_0x355a0b,_0x1f9ccb,_0x4d3a35,_0x5bdced,_0x2947fa,_0x4127b5){var _0x547e59=_0x293447,_0x1c109d=this;return _0x355a0b[_0x547e59(0x19c)+_0x5bdced[_0x547e59(0x1d9)]()]=!0x0,function(_0x52a5b4){var _0x5657c0=_0x547e59,_0x45bbe1=_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x1bb)],_0x45577f=_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x1b0)],_0x3d53c2=_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x208)];_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x208)]=_0x45bbe1,_0x2947fa['node'][_0x5657c0(0x1b0)]=_0x52a5b4,_0x192f6e[_0x5657c0(0x1a0)](_0x1c109d[_0x5657c0(0x133)](_0x1f9ccb,_0x4d3a35,_0x5bdced,_0x2947fa,_0x4127b5)),_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x208)]=_0x3d53c2,_0x2947fa[_0x5657c0(0x204)]['index']=_0x45577f;};}['_property'](_0x3dde9b,_0x45c585,_0xf7c324,_0x28ae42,_0x91c8db){var _0x448894=_0x293447,_0x3b8c7d=this;_0x91c8db||(_0x91c8db=function(_0x1d56b8,_0x552056){return _0x1d56b8[_0x552056];});var _0x542036=_0xf7c324[_0x448894(0x1d9)](),_0x499dbf=_0x28ae42['expressionsToEvaluate']||{},_0x99faac=_0x28ae42[_0x448894(0x152)],_0x220b83=_0x28ae42[_0x448894(0x1c0)];try{var _0x33c50a=this[_0x448894(0x1ce)](_0x3dde9b),_0x5cf05a=_0x542036;_0x33c50a&&_0x5cf05a[0x0]==='\\x27'&&(_0x5cf05a=_0x5cf05a[_0x448894(0x165)](0x1,_0x5cf05a[_0x448894(0x1bf)]-0x2));var _0x3e746c=_0x28ae42['expressionsToEvaluate']=_0x499dbf['_p_'+_0x5cf05a];_0x3e746c&&(_0x28ae42[_0x448894(0x152)]=_0x28ae42[_0x448894(0x152)]+0x1),_0x28ae42[_0x448894(0x1c0)]=!!_0x3e746c;var _0x39cd35=typeof _0xf7c324==_0x448894(0x1b9),_0x18fe60={'name':_0x39cd35||_0x33c50a?_0x542036:this['_propertyName'](_0x542036)};if(_0x39cd35&&(_0x18fe60[_0x448894(0x1b9)]=!0x0),!(_0x45c585===_0x448894(0x144)||_0x45c585===_0x448894(0x153))){var _0x3c4558=this[_0x448894(0x1ca)](_0x3dde9b,_0xf7c324);if(_0x3c4558&&(_0x3c4558[_0x448894(0x1b7)]&&(_0x18fe60[_0x448894(0x1f7)]=!0x0),_0x3c4558[_0x448894(0x18e)]&&!_0x3e746c&&!_0x28ae42[_0x448894(0x140)]))return _0x18fe60['getter']=!0x0,this['_processTreeNodeResult'](_0x18fe60,_0x28ae42),_0x18fe60;}var _0x43c9ad;try{_0x43c9ad=_0x91c8db(_0x3dde9b,_0xf7c324);}catch(_0x563553){return _0x18fe60={'name':_0x542036,'type':'unknown','error':_0x563553[_0x448894(0x194)]},this[_0x448894(0x1a5)](_0x18fe60,_0x28ae42),_0x18fe60;}var _0x42622f=this['_type'](_0x43c9ad),_0x301a1d=this['_isPrimitiveType'](_0x42622f);if(_0x18fe60[_0x448894(0x197)]=_0x42622f,_0x301a1d)this['_processTreeNodeResult'](_0x18fe60,_0x28ae42,_0x43c9ad,function(){var _0x176368=_0x448894;_0x18fe60[_0x176368(0x123)]=_0x43c9ad[_0x176368(0x14f)](),!_0x3e746c&&_0x3b8c7d[_0x176368(0x17c)](_0x42622f,_0x18fe60,_0x28ae42,{});});else{var _0x39a0ba=_0x28ae42[_0x448894(0x14c)]&&_0x28ae42[_0x448894(0x1bc)]<_0x28ae42[_0x448894(0x1f5)]&&_0x28ae42[_0x448894(0x12b)][_0x448894(0x149)](_0x43c9ad)<0x0&&_0x42622f!==_0x448894(0x12d)&&_0x28ae42[_0x448894(0x1c3)]<_0x28ae42[_0x448894(0x178)];_0x39a0ba||_0x28ae42[_0x448894(0x1bc)]<_0x99faac||_0x3e746c?(this[_0x448894(0x1dd)](_0x18fe60,_0x43c9ad,_0x28ae42,_0x3e746c||{}),this['_additionalMetadata'](_0x43c9ad,_0x18fe60)):this[_0x448894(0x1a5)](_0x18fe60,_0x28ae42,_0x43c9ad,function(){var _0x15a072=_0x448894;_0x42622f===_0x15a072(0x138)||_0x42622f===_0x15a072(0x147)||(delete _0x18fe60[_0x15a072(0x123)],_0x18fe60['capped']=!0x0);});}return _0x18fe60;}finally{_0x28ae42[_0x448894(0x177)]=_0x499dbf,_0x28ae42['depth']=_0x99faac,_0x28ae42['isExpressionToEvaluate']=_0x220b83;}}[_0x293447(0x17c)](_0x292d65,_0x2e866c,_0x3e54e2,_0x54b8ae){var _0x433b68=_0x293447,_0xe467f8=_0x54b8ae[_0x433b68(0x1a2)]||_0x3e54e2[_0x433b68(0x1a2)];if((_0x292d65===_0x433b68(0x16d)||_0x292d65===_0x433b68(0x1c9))&&_0x2e866c['value']){let _0x4b6f9d=_0x2e866c[_0x433b68(0x123)][_0x433b68(0x1bf)];_0x3e54e2[_0x433b68(0x1c8)]+=_0x4b6f9d,_0x3e54e2[_0x433b68(0x1c8)]>_0x3e54e2[_0x433b68(0x186)]?(_0x2e866c[_0x433b68(0x131)]='',delete _0x2e866c['value']):_0x4b6f9d>_0xe467f8&&(_0x2e866c[_0x433b68(0x131)]=_0x2e866c[_0x433b68(0x123)][_0x433b68(0x165)](0x0,_0xe467f8),delete _0x2e866c[_0x433b68(0x123)]);}}[_0x293447(0x1ce)](_0x41133b){var _0x4e4a01=_0x293447;return!!(_0x41133b&&_0x46482b['Map']&&this['_objectToString'](_0x41133b)===_0x4e4a01(0x122)&&_0x41133b[_0x4e4a01(0x15e)]);}[_0x293447(0x200)](_0x11d20f){var _0x23db08=_0x293447;if(_0x11d20f['match'](/^\\d+$/))return _0x11d20f;var _0x5adfc1;try{_0x5adfc1=JSON['stringify'](''+_0x11d20f);}catch{_0x5adfc1='\\x22'+this[_0x23db08(0x16f)](_0x11d20f)+'\\x22';}return _0x5adfc1['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x5adfc1=_0x5adfc1['substr'](0x1,_0x5adfc1[_0x23db08(0x1bf)]-0x2):_0x5adfc1=_0x5adfc1[_0x23db08(0x160)](/'/g,'\\x5c\\x27')[_0x23db08(0x160)](/\\\\"/g,'\\x22')[_0x23db08(0x160)](/(^"|"$)/g,'\\x27'),_0x5adfc1;}[_0x293447(0x1a5)](_0x1d7671,_0x498e8f,_0x5d4ebb,_0x2a25f5){var _0x17280d=_0x293447;this[_0x17280d(0x12a)](_0x1d7671,_0x498e8f),_0x2a25f5&&_0x2a25f5(),this['_additionalMetadata'](_0x5d4ebb,_0x1d7671),this[_0x17280d(0x1c2)](_0x1d7671,_0x498e8f);}[_0x293447(0x12a)](_0x31a115,_0x24b39a){var _0x31f20d=_0x293447;this[_0x31f20d(0x1c7)](_0x31a115,_0x24b39a),this[_0x31f20d(0x1fd)](_0x31a115,_0x24b39a),this[_0x31f20d(0x1cf)](_0x31a115,_0x24b39a),this['_setNodePermissions'](_0x31a115,_0x24b39a);}[_0x293447(0x1c7)](_0x47f680,_0x21bac2){}['_setNodeQueryPath'](_0x987612,_0x3a623b){}[_0x293447(0x1a8)](_0x3b02a4,_0x17ac04){}[_0x293447(0x15a)](_0x1a1ba3){var _0x13d424=_0x293447;return _0x1a1ba3===this[_0x13d424(0x1eb)];}[_0x293447(0x1c2)](_0x4b2b5b,_0x210fca){var _0x2a5047=_0x293447;this[_0x2a5047(0x1a8)](_0x4b2b5b,_0x210fca),this[_0x2a5047(0x1f3)](_0x4b2b5b),_0x210fca['sortProps']&&this[_0x2a5047(0x15d)](_0x4b2b5b),this[_0x2a5047(0x132)](_0x4b2b5b,_0x210fca),this[_0x2a5047(0x205)](_0x4b2b5b,_0x210fca),this[_0x2a5047(0x1da)](_0x4b2b5b);}[_0x293447(0x13f)](_0x20792e,_0x1d1cce){var _0x581b38=_0x293447;let _0x4b47bf;try{_0x46482b[_0x581b38(0x1ad)]&&(_0x4b47bf=_0x46482b['console']['error'],_0x46482b[_0x581b38(0x1ad)][_0x581b38(0x203)]=function(){}),_0x20792e&&typeof _0x20792e[_0x581b38(0x1bf)]==_0x581b38(0x1f2)&&(_0x1d1cce[_0x581b38(0x1bf)]=_0x20792e[_0x581b38(0x1bf)]);}catch{}finally{_0x4b47bf&&(_0x46482b['console'][_0x581b38(0x203)]=_0x4b47bf);}if(_0x1d1cce[_0x581b38(0x197)]===_0x581b38(0x1f2)||_0x1d1cce['type']===_0x581b38(0x17e)){if(isNaN(_0x1d1cce['value']))_0x1d1cce[_0x581b38(0x1de)]=!0x0,delete _0x1d1cce[_0x581b38(0x123)];else switch(_0x1d1cce[_0x581b38(0x123)]){case Number[_0x581b38(0x193)]:_0x1d1cce['positiveInfinity']=!0x0,delete _0x1d1cce[_0x581b38(0x123)];break;case Number[_0x581b38(0x19a)]:_0x1d1cce['negativeInfinity']=!0x0,delete _0x1d1cce[_0x581b38(0x123)];break;case 0x0:this[_0x581b38(0x1fe)](_0x1d1cce[_0x581b38(0x123)])&&(_0x1d1cce[_0x581b38(0x187)]=!0x0);break;}}else _0x1d1cce[_0x581b38(0x197)]==='function'&&typeof _0x20792e[_0x581b38(0x1d7)]==_0x581b38(0x16d)&&_0x20792e[_0x581b38(0x1d7)]&&_0x1d1cce[_0x581b38(0x1d7)]&&_0x20792e['name']!==_0x1d1cce['name']&&(_0x1d1cce[_0x581b38(0x154)]=_0x20792e[_0x581b38(0x1d7)]);}['_isNegativeZero'](_0x138f02){var _0x295204=_0x293447;return 0x1/_0x138f02===Number[_0x295204(0x19a)];}[_0x293447(0x15d)](_0x3c496e){var _0x3d54d6=_0x293447;!_0x3c496e[_0x3d54d6(0x1f6)]||!_0x3c496e[_0x3d54d6(0x1f6)][_0x3d54d6(0x1bf)]||_0x3c496e[_0x3d54d6(0x197)]===_0x3d54d6(0x144)||_0x3c496e[_0x3d54d6(0x197)]===_0x3d54d6(0x18b)||_0x3c496e[_0x3d54d6(0x197)]===_0x3d54d6(0x20d)||_0x3c496e[_0x3d54d6(0x1f6)][_0x3d54d6(0x1d2)](function(_0xd835fa,_0x3acc3e){var _0x1cb500=_0x3d54d6,_0x5c1e0b=_0xd835fa['name'][_0x1cb500(0x1e2)](),_0x3a5c54=_0x3acc3e[_0x1cb500(0x1d7)][_0x1cb500(0x1e2)]();return _0x5c1e0b<_0x3a5c54?-0x1:_0x5c1e0b>_0x3a5c54?0x1:0x0;});}['_addFunctionsNode'](_0x446f2b,_0x1b11ba){var _0x366039=_0x293447;if(!(_0x1b11ba[_0x366039(0x166)]||!_0x446f2b[_0x366039(0x1f6)]||!_0x446f2b[_0x366039(0x1f6)]['length'])){for(var _0x10e1ba=[],_0x13339e=[],_0x124074=0x0,_0x2b5050=_0x446f2b[_0x366039(0x1f6)]['length'];_0x124074<_0x2b5050;_0x124074++){var _0x3cf9a2=_0x446f2b[_0x366039(0x1f6)][_0x124074];_0x3cf9a2['type']===_0x366039(0x12d)?_0x10e1ba[_0x366039(0x1a0)](_0x3cf9a2):_0x13339e[_0x366039(0x1a0)](_0x3cf9a2);}if(!(!_0x13339e[_0x366039(0x1bf)]||_0x10e1ba[_0x366039(0x1bf)]<=0x1)){_0x446f2b[_0x366039(0x1f6)]=_0x13339e;var _0x549186={'functionsNode':!0x0,'props':_0x10e1ba};this[_0x366039(0x1c7)](_0x549186,_0x1b11ba),this['_setNodeLabel'](_0x549186,_0x1b11ba),this[_0x366039(0x1f3)](_0x549186),this[_0x366039(0x1f8)](_0x549186,_0x1b11ba),_0x549186['id']+='\\x20f',_0x446f2b[_0x366039(0x1f6)][_0x366039(0x184)](_0x549186);}}}[_0x293447(0x205)](_0x4c40b3,_0x1ff381){}[_0x293447(0x1f3)](_0x117591){}[_0x293447(0x174)](_0x51f5ce){var _0x2c42f0=_0x293447;return Array[_0x2c42f0(0x198)](_0x51f5ce)||typeof _0x51f5ce==_0x2c42f0(0x155)&&this[_0x2c42f0(0x16f)](_0x51f5ce)==='[object\\x20Array]';}[_0x293447(0x1f8)](_0x392cbb,_0x281927){}[_0x293447(0x1da)](_0x4c8651){var _0x165202=_0x293447;delete _0x4c8651[_0x165202(0x167)],delete _0x4c8651[_0x165202(0x18c)],delete _0x4c8651[_0x165202(0x17b)];}[_0x293447(0x1cf)](_0x513945,_0x3b49c2){}}let _0x5b4cef=new _0x17520b(),_0x54ed19={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x4cc6fd={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x51276c(_0x56a223,_0x4d7393,_0x37d4ff,_0x448b33,_0x3bb7c4,_0x4d919b){var _0x371f52=_0x293447;let _0x26f3f4,_0x16ae89;try{_0x16ae89=_0x147949(),_0x26f3f4=_0x4c887a[_0x4d7393],!_0x26f3f4||_0x16ae89-_0x26f3f4['ts']>0x1f4&&_0x26f3f4['count']&&_0x26f3f4['time']/_0x26f3f4['count']<0x64?(_0x4c887a[_0x4d7393]=_0x26f3f4={'count':0x0,'time':0x0,'ts':_0x16ae89},_0x4c887a[_0x371f52(0x168)]={}):_0x16ae89-_0x4c887a[_0x371f52(0x168)]['ts']>0x32&&_0x4c887a[_0x371f52(0x168)][_0x371f52(0x202)]&&_0x4c887a[_0x371f52(0x168)]['time']/_0x4c887a[_0x371f52(0x168)][_0x371f52(0x202)]<0x64&&(_0x4c887a[_0x371f52(0x168)]={});let _0x1ec019=[],_0x2bed04=_0x26f3f4[_0x371f52(0x15c)]||_0x4c887a[_0x371f52(0x168)][_0x371f52(0x15c)]?_0x4cc6fd:_0x54ed19,_0x2002fe=_0x24b007=>{var _0xf5206a=_0x371f52;let _0x18426c={};return _0x18426c[_0xf5206a(0x1f6)]=_0x24b007[_0xf5206a(0x1f6)],_0x18426c['elements']=_0x24b007[_0xf5206a(0x148)],_0x18426c[_0xf5206a(0x1a2)]=_0x24b007[_0xf5206a(0x1a2)],_0x18426c[_0xf5206a(0x186)]=_0x24b007[_0xf5206a(0x186)],_0x18426c[_0xf5206a(0x178)]=_0x24b007[_0xf5206a(0x178)],_0x18426c[_0xf5206a(0x1f5)]=_0x24b007[_0xf5206a(0x1f5)],_0x18426c[_0xf5206a(0x14b)]=!0x1,_0x18426c[_0xf5206a(0x166)]=!_0x57e6b2,_0x18426c[_0xf5206a(0x152)]=0x1,_0x18426c[_0xf5206a(0x1bc)]=0x0,_0x18426c[_0xf5206a(0x171)]=_0xf5206a(0x169),_0x18426c[_0xf5206a(0x158)]='root_exp',_0x18426c['autoExpand']=!0x0,_0x18426c[_0xf5206a(0x12b)]=[],_0x18426c[_0xf5206a(0x1c3)]=0x0,_0x18426c[_0xf5206a(0x140)]=!0x0,_0x18426c[_0xf5206a(0x1c8)]=0x0,_0x18426c[_0xf5206a(0x204)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x18426c;};for(var _0x131ddb=0x0;_0x131ddb<_0x3bb7c4[_0x371f52(0x1bf)];_0x131ddb++)_0x1ec019[_0x371f52(0x1a0)](_0x5b4cef[_0x371f52(0x1dd)]({'timeNode':_0x56a223===_0x371f52(0x1cd)||void 0x0},_0x3bb7c4[_0x131ddb],_0x2002fe(_0x2bed04),{}));if(_0x56a223===_0x371f52(0x12e)){let _0x3a6f25=Error['stackTraceLimit'];try{Error[_0x371f52(0x1cb)]=0x1/0x0,_0x1ec019[_0x371f52(0x1a0)](_0x5b4cef[_0x371f52(0x1dd)]({'stackNode':!0x0},new Error()[_0x371f52(0x11f)],_0x2002fe(_0x2bed04),{'strLength':0x1/0x0}));}finally{Error[_0x371f52(0x1cb)]=_0x3a6f25;}}return{'method':_0x371f52(0x1a4),'version':_0x17fda6,'args':[{'ts':_0x37d4ff,'session':_0x448b33,'args':_0x1ec019,'id':_0x4d7393,'context':_0x4d919b}]};}catch(_0x6fdb2){return{'method':_0x371f52(0x1a4),'version':_0x17fda6,'args':[{'ts':_0x37d4ff,'session':_0x448b33,'args':[{'type':_0x371f52(0x1e9),'error':_0x6fdb2&&_0x6fdb2[_0x371f52(0x194)]}],'id':_0x4d7393,'context':_0x4d919b}]};}finally{try{if(_0x26f3f4&&_0x16ae89){let _0x46ed87=_0x147949();_0x26f3f4['count']++,_0x26f3f4['time']+=_0x3407be(_0x16ae89,_0x46ed87),_0x26f3f4['ts']=_0x46ed87,_0x4c887a[_0x371f52(0x168)]['count']++,_0x4c887a['hits'][_0x371f52(0x1cd)]+=_0x3407be(_0x16ae89,_0x46ed87),_0x4c887a['hits']['ts']=_0x46ed87,(_0x26f3f4[_0x371f52(0x202)]>0x32||_0x26f3f4[_0x371f52(0x1cd)]>0x64)&&(_0x26f3f4[_0x371f52(0x15c)]=!0x0),(_0x4c887a[_0x371f52(0x168)][_0x371f52(0x202)]>0x3e8||_0x4c887a[_0x371f52(0x168)][_0x371f52(0x1cd)]>0x12c)&&(_0x4c887a[_0x371f52(0x168)][_0x371f52(0x15c)]=!0x0);}}catch{}}}return _0x51276c;}((_0x286e60,_0x143385,_0x33d862,_0x140af9,_0x3f48b2,_0x5ca465,_0x5c8d8e,_0x3928e8,_0x5a585c,_0x3f3d25)=>{var _0x4934aa=_0xcad5d2;if(_0x286e60[_0x4934aa(0x18d)])return _0x286e60[_0x4934aa(0x18d)];if(!J(_0x286e60,_0x3928e8,_0x3f48b2))return _0x286e60[_0x4934aa(0x18d)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x286e60[_0x4934aa(0x18d)];let _0x425c22=W(_0x286e60),_0x408ec9=_0x425c22[_0x4934aa(0x129)],_0x4f57cc=_0x425c22[_0x4934aa(0x1ab)],_0x587aeb=_0x425c22[_0x4934aa(0x13b)],_0x4823a2={'hits':{},'ts':{}},_0x1b72ac=Y(_0x286e60,_0x5a585c,_0x4823a2,_0x5ca465),_0x1b1e6b=_0x253605=>{_0x4823a2['ts'][_0x253605]=_0x4f57cc();},_0x57c59a=(_0x599542,_0x1e2fab)=>{let _0x12e671=_0x4823a2['ts'][_0x1e2fab];if(delete _0x4823a2['ts'][_0x1e2fab],_0x12e671){let _0x40c3fd=_0x408ec9(_0x12e671,_0x4f57cc());_0x44510b(_0x1b72ac('time',_0x599542,_0x587aeb(),_0x5731f6,[_0x40c3fd],_0x1e2fab));}},_0x35091e=_0x31d627=>_0x39550d=>{var _0xc1d5f6=_0x4934aa;try{_0x1b1e6b(_0x39550d),_0x31d627(_0x39550d);}finally{_0x286e60[_0xc1d5f6(0x1ad)][_0xc1d5f6(0x1cd)]=_0x31d627;}},_0x6a42e3=_0x30aeda=>_0x4e197f=>{var _0x1c5b5e=_0x4934aa;try{let [_0x1025c3,_0x2db8a6]=_0x4e197f[_0x1c5b5e(0x19e)](_0x1c5b5e(0x182));_0x57c59a(_0x2db8a6,_0x1025c3),_0x30aeda(_0x1025c3);}finally{_0x286e60[_0x1c5b5e(0x1ad)][_0x1c5b5e(0x170)]=_0x30aeda;}};_0x286e60[_0x4934aa(0x18d)]={'consoleLog':(_0x59d10c,_0xdbe705)=>{var _0x42f196=_0x4934aa;_0x286e60['console'][_0x42f196(0x1a4)][_0x42f196(0x1d7)]!==_0x42f196(0x18f)&&_0x44510b(_0x1b72ac('log',_0x59d10c,_0x587aeb(),_0x5731f6,_0xdbe705));},'consoleTrace':(_0x5ae885,_0x2c92c5)=>{var _0x3706a6=_0x4934aa;_0x286e60[_0x3706a6(0x1ad)][_0x3706a6(0x1a4)][_0x3706a6(0x1d7)]!==_0x3706a6(0x1c5)&&_0x44510b(_0x1b72ac('trace',_0x5ae885,_0x587aeb(),_0x5731f6,_0x2c92c5));},'consoleTime':()=>{var _0x169253=_0x4934aa;_0x286e60[_0x169253(0x1ad)]['time']=_0x35091e(_0x286e60[_0x169253(0x1ad)][_0x169253(0x1cd)]);},'consoleTimeEnd':()=>{var _0x218684=_0x4934aa;_0x286e60[_0x218684(0x1ad)][_0x218684(0x170)]=_0x6a42e3(_0x286e60['console']['timeEnd']);},'autoLog':(_0x2d8fba,_0x2f3a42)=>{var _0x5b8014=_0x4934aa;_0x44510b(_0x1b72ac(_0x5b8014(0x1a4),_0x2f3a42,_0x587aeb(),_0x5731f6,[_0x2d8fba]));},'autoLogMany':(_0x15bced,_0xb0778)=>{var _0x54901e=_0x4934aa;_0x44510b(_0x1b72ac(_0x54901e(0x1a4),_0x15bced,_0x587aeb(),_0x5731f6,_0xb0778));},'autoTrace':(_0x31f390,_0x13ce3a)=>{var _0x49313e=_0x4934aa;_0x44510b(_0x1b72ac(_0x49313e(0x12e),_0x13ce3a,_0x587aeb(),_0x5731f6,[_0x31f390]));},'autoTraceMany':(_0x172d93,_0x4bc431)=>{var _0x3375f5=_0x4934aa;_0x44510b(_0x1b72ac(_0x3375f5(0x12e),_0x172d93,_0x587aeb(),_0x5731f6,_0x4bc431));},'autoTime':(_0x4eb614,_0xcaed47,_0x545aa6)=>{_0x1b1e6b(_0x545aa6);},'autoTimeEnd':(_0x4ff496,_0x55180c,_0x50a20f)=>{_0x57c59a(_0x55180c,_0x50a20f);},'coverage':_0x5d797e=>{var _0x2ead12=_0x4934aa;_0x44510b({'method':_0x2ead12(0x189),'version':_0x5ca465,'args':[{'id':_0x5d797e}]});}};let _0x44510b=b(_0x286e60,_0x143385,_0x33d862,_0x140af9,_0x3f48b2,_0x3f3d25),_0x5731f6=_0x286e60[_0x4934aa(0x201)];return _0x286e60[_0x4934aa(0x18d)];})(globalThis,'127.0.0.1','51528',_0xcad5d2(0x16b),_0xcad5d2(0x162),'1.0.0',_0xcad5d2(0x190),_0xcad5d2(0x14a),_0xcad5d2(0x20b),_0xcad5d2(0x1fa));`);
  } catch {
  }
}
function oo_oo2(i, ...v) {
  try {
    oo_cm2().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/routes/api.upload.tsx
var action2 = async ({ request }) => {
  let formdata = await request.formData(), data = formdata.get("data"), name = formdata.get("name"), parsed_Data = JSON.parse(data), parsed_Name = JSON.parse(name);
  return request.method === "POST" ? await uploadData({ name: parsed_Name, data: parsed_Data }) : null;
};

// app/routes/api.text.tsx
var api_text_exports = {};
__export(api_text_exports, {
  action: () => action3
});
var import_node5 = require("@remix-run/node");

// app/lib/server.sendDiscordNotification.ts
var import_webhook_discord = __toESM(require("webhook-discord")), userLastCallTimestamps = /* @__PURE__ */ new Map();
async function sendNotification(username, message, type) {
  let reviewerHook = process.env.DISCORD_WEBHOOK_URL_REVIEWER, annotatorHook = process.env.DISCORD_WEBHOOK_URL_ANNOTATOR, hook = {
    success: annotatorHook,
    rejected: annotatorHook,
    info: reviewerHook
  }, Hook = new import_webhook_discord.default.Webhook(hook[type]);
  if (!username)
    return null;
  if (type === "success" && Hook.success(username, message), type === "rejected" && Hook.warn(username, message), userLastCallTimestamps.has(username)) {
    let lastCallTimestamp = userLastCallTimestamps.get(username);
    if (Date.now() - lastCallTimestamp < 1e3 && userLastCallTimestamps.get(username) >= 3)
      return "Rate limit exceeded. Please try again later.";
  }
  return userLastCallTimestamps.set(username, Date.now()), type === "info" && Hook.info(username, message), "Notification sent successfully.";
}

// app/routes/api.text.tsx
var action3 = async ({ request }) => {
  let formData = await request.formData(), headerUrl = request.headers.get("referer"), url = new URL(headerUrl), session = url.searchParams.get("session"), history = url.searchParams.get("history"), text = null, admin_id = formData.get("adminId"), action5 = formData.get("_action");
  if (request.method === "POST") {
    let modified_text = formData.get("modified_text"), userId = formData.get("userId"), id = formData.get("id"), time = formData.get("duration");
    await removeRejectText(parseInt(id), userId, "APPROVED"), text = await saveText(parseInt(id), modified_text, userId, admin_id, time);
    let user = await getUserById(userId), admin = await getUserById(admin_id), { remaining_count, not_reviewed_count } = await remainingTextToApproved(
      userId
    );
    remaining_count === 0 && !admin_id && sendNotification(
      user == null ? void 0 : user.username,
      `A batch is ready to review by ${user == null ? void 0 : user.nickname}`,
      "info"
    ), not_reviewed_count === 0 && admin_id && sendNotification(
      admin == null ? void 0 : admin.username,
      `batch reviewed, ${user == null ? void 0 : user.nickname} will get new batch now`,
      "success"
    );
  }
  if (request.method === "PATCH") {
    let id = formData.get("id"), userId = formData.get("userId");
    if (action5 === "reject") {
      await updateTextRejectCount(parseInt(id));
      let numberOfReject = await getNumberOfReject(parseInt(id));
      numberOfReject !== 0 && numberOfReject % 3 === 0 && await updateUserAssign(userId, !1), text = await rejectText(parseInt(id), userId);
      let user = await getUserById(userId);
      sendNotification(
        user == null ? void 0 : user.username,
        `rejected, ${user == null ? void 0 : user.nickname} please check for correction`,
        "rejected"
      );
    }
    if (action5 === "change_category") {
      let category = formData.get("category"), version = formData.get("version");
      return console.log(...oo_oo3("836230453_0", category, version)), text = await changeCategory(version, category), text;
    }
  }
  if (request.method === "DELETE") {
    let version = formData.get("version");
    return await deleteTextByVersion(version);
  }
  return history ? (0, import_node5.redirect)(`/?session=${session}`) : text;
};
function oo_cm3() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0xcad5d2=_0x1c6c;function _0x12b9(){var _0x19e831=[':logPointId:','join','unshift','getOwnPropertyDescriptor','totalStrLength','negativeZero','send','coverage','_connectToHostNow','Map','_hasSetOnItsPath','_console_ninja','get','disabledLog','1696768797626','getOwnPropertyNames','pop','POSITIVE_INFINITY','message','onopen','1FtswoI','type','isArray','warn','NEGATIVE_INFINITY','bigint','_p_','_ws','split','_type','push','getOwnPropertySymbols','strLength','6894264XFUiaf','log','_processTreeNodeResult','_maxConnectAttemptCount','WebSocket','_setNodeLabel','_Symbol','path','timeStamp','[object\\x20Array]','console','_connecting','ws://','index','_keyStrRegExp','_connectAttemptCount','66563mjGyJi','onmessage','_isSet','bind','set','url','symbol','onclose','current','level','hrtime','create','length','isExpressionToEvaluate','enumerable','_treeNodePropertiesAfterFullValue','autoExpandPropertyCount','versions','disabledTrace','Symbol','_setNodeId','allStrLength','String','_getOwnPropertyDescriptor','stackTraceLimit','global','time','_isMap','_setNodeExpressionPath','_HTMLAllCollection','then','sort','edge','defineProperty','_addObjectProperty','getWebSocketClass','name','catch','toString','_cleanNode','_connected','_WebSocketClass','serialize','nan','https://tinyurl.com/37x8b79t','concat','_allowedToConnectOnSend','toLowerCase','cappedElements','_inNextEdge','_regExpToString','_addProperty','_webSocketErrorDocsLink','env','unknown','performance','_undefined','getPrototypeOf','nuxt','_p_length','_WebSocket','_numberRegExp','nodeModules','number','_setNodeExpandableState','168ogoyEi','autoExpandMaxDepth','props','setter','_setNodePermissions','ws/index.js','','_allowedToSend','_dateToString','_setNodeQueryPath','_isNegativeZero','[object\\x20BigInt]','_propertyName','_console_ninja_session','count','error','node','_addLoadNode','[object\\x20Date]','constructor','parent','gateway.docker.internal','location','','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','Set','NEXT_RUNTIME','_isPrimitiveWrapperType','stack','test','[object\\x20Set]','[object\\x20Map]','value','_blacklistedProperty','port','cappedProps','next.js','includes','elapsed','_treeNodePropertiesBeforeFullValue','autoExpandPreviousObjects','process','function','trace','1069780bPjMJE','slice','capped','_addFunctionsNode','_property','unref','HTMLAllCollection','\\x20server','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','null','1500042kSwZYa','data','now','\\x20browser','logger\\x20websocket\\x20error','_consoleNinjaAllowedToStart','_additionalMetadata','resolveGetters','close','method','_attemptToReconnectShortly','array','date','prototype','undefined','elements','indexOf',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.109.223"],'sortProps','autoExpand','host','_inBrowser','valueOf','_isPrimitiveType','1654820ofrHlo','depth','Error','funcName','object','boolean','default','rootExpression','36eVrAMY','_isUndefined','stringify','reduceLimits','_sortProps','forEach','_reconnectTimeout','replace','3659840UAwsGX','remix','2872143HYLacE','reload','substr','noFunctions','_hasSymbolPropertyOnItsPath','hits','root_exp_id','parse',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.231\\\\node_modules",'hostname','string','hasOwnProperty','_objectToString','timeEnd','expId','__es'+'Module','_getOwnPropertyNames','_isArray','_disposeWebsocket','_getOwnPropertySymbols','expressionsToEvaluate','autoExpandLimit','perf_hooks','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','_hasMapOnItsPath','_capIfString','_socket','Number','dockerizedApp','_quotedRegExp','call'];_0x12b9=function(){return _0x19e831;};return _0x12b9();}(function(_0x1dceec,_0x472a96){var _0x46d447=_0x1c6c,_0x7f3037=_0x1dceec();while(!![]){try{var _0x1ff89a=-parseInt(_0x46d447(0x196))/0x1*(parseInt(_0x46d447(0x139))/0x2)+-parseInt(_0x46d447(0x163))/0x3+parseInt(_0x46d447(0x161))/0x4+-parseInt(_0x46d447(0x12f))/0x5+-parseInt(_0x46d447(0x1f4))/0x6*(-parseInt(_0x46d447(0x1b3))/0x7)+parseInt(_0x46d447(0x1a3))/0x8+-parseInt(_0x46d447(0x159))/0x9*(-parseInt(_0x46d447(0x151))/0xa);if(_0x1ff89a===_0x472a96)break;else _0x7f3037['push'](_0x7f3037['shift']());}catch(_0x1115bc){_0x7f3037['push'](_0x7f3037['shift']());}}}(_0x12b9,0xbf4cd));var j=Object[_0xcad5d2(0x1be)],H=Object[_0xcad5d2(0x1d4)],G=Object[_0xcad5d2(0x185)],ee=Object[_0xcad5d2(0x191)],te=Object[_0xcad5d2(0x1ec)],ne=Object['prototype'][_0xcad5d2(0x16e)],re=(_0x52e5c2,_0x2f7179,_0x379308,_0x398506)=>{var _0x36978b=_0xcad5d2;if(_0x2f7179&&typeof _0x2f7179==_0x36978b(0x155)||typeof _0x2f7179=='function'){for(let _0x1333b7 of ee(_0x2f7179))!ne[_0x36978b(0x181)](_0x52e5c2,_0x1333b7)&&_0x1333b7!==_0x379308&&H(_0x52e5c2,_0x1333b7,{'get':()=>_0x2f7179[_0x1333b7],'enumerable':!(_0x398506=G(_0x2f7179,_0x1333b7))||_0x398506[_0x36978b(0x1c1)]});}return _0x52e5c2;},x=(_0xd0d481,_0x5a9545,_0x58472d)=>(_0x58472d=_0xd0d481!=null?j(te(_0xd0d481)):{},re(_0x5a9545||!_0xd0d481||!_0xd0d481[_0xcad5d2(0x172)]?H(_0x58472d,_0xcad5d2(0x157),{'value':_0xd0d481,'enumerable':!0x0}):_0x58472d,_0xd0d481)),X=class{constructor(_0xf67ac2,_0x39905a,_0xdeb3c1,_0xbbe41c,_0x18b065){var _0x4753f9=_0xcad5d2;this[_0x4753f9(0x1cc)]=_0xf67ac2,this[_0x4753f9(0x14d)]=_0x39905a,this['port']=_0xdeb3c1,this[_0x4753f9(0x1f1)]=_0xbbe41c,this[_0x4753f9(0x17f)]=_0x18b065,this['_allowedToSend']=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x4753f9(0x1db)]=!0x1,this[_0x4753f9(0x1ae)]=!0x1,this[_0x4753f9(0x1e4)]=_0xf67ac2[_0x4753f9(0x12c)]?.['env']?.['NEXT_RUNTIME']===_0x4753f9(0x1d3),this[_0x4753f9(0x14e)]=!this[_0x4753f9(0x1cc)]['process']?.[_0x4753f9(0x1c4)]?.[_0x4753f9(0x204)]&&!this[_0x4753f9(0x1e4)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x4753f9(0x1a6)]=0x14,this[_0x4753f9(0x1e7)]=_0x4753f9(0x1df),this['_sendErrorMessage']=(this['_inBrowser']?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x4753f9(0x17a))+this[_0x4753f9(0x1e7)];}async['getWebSocketClass'](){var _0x1351c1=_0xcad5d2;if(this[_0x1351c1(0x1dc)])return this['_WebSocketClass'];let _0x364031;if(this[_0x1351c1(0x14e)]||this[_0x1351c1(0x1e4)])_0x364031=this[_0x1351c1(0x1cc)][_0x1351c1(0x1a7)];else{if(this[_0x1351c1(0x1cc)][_0x1351c1(0x12c)]?.[_0x1351c1(0x1ef)])_0x364031=this[_0x1351c1(0x1cc)]['process']?.[_0x1351c1(0x1ef)];else try{let _0x124ebe=await import('path');_0x364031=(await import((await import(_0x1351c1(0x1b8)))['pathToFileURL'](_0x124ebe[_0x1351c1(0x183)](this[_0x1351c1(0x1f1)],_0x1351c1(0x1f9)))[_0x1351c1(0x1d9)]()))['default'];}catch{try{_0x364031=require(require(_0x1351c1(0x1aa))[_0x1351c1(0x183)](this[_0x1351c1(0x1f1)],'ws'));}catch{throw new Error(_0x1351c1(0x137));}}}return this[_0x1351c1(0x1dc)]=_0x364031,_0x364031;}['_connectToHostNow'](){var _0xe4b17f=_0xcad5d2;this['_connecting']||this[_0xe4b17f(0x1db)]||this[_0xe4b17f(0x1b2)]>=this[_0xe4b17f(0x1a6)]||(this[_0xe4b17f(0x1e1)]=!0x1,this[_0xe4b17f(0x1ae)]=!0x0,this[_0xe4b17f(0x1b2)]++,this['_ws']=new Promise((_0x22849b,_0x38a9cd)=>{var _0x415d02=_0xe4b17f;this[_0x415d02(0x1d6)]()['then'](_0x469e18=>{var _0x4d8716=_0x415d02;let _0x5fa263=new _0x469e18(_0x4d8716(0x1af)+(!this['_inBrowser']&&this[_0x4d8716(0x17f)]?_0x4d8716(0x209):this[_0x4d8716(0x14d)])+':'+this[_0x4d8716(0x125)]);_0x5fa263['onerror']=()=>{var _0x25600d=_0x4d8716;this['_allowedToSend']=!0x1,this['_disposeWebsocket'](_0x5fa263),this[_0x25600d(0x143)](),_0x38a9cd(new Error(_0x25600d(0x13d)));},_0x5fa263[_0x4d8716(0x195)]=()=>{var _0x5576fe=_0x4d8716;this[_0x5576fe(0x14e)]||_0x5fa263['_socket']&&_0x5fa263[_0x5576fe(0x17d)][_0x5576fe(0x134)]&&_0x5fa263[_0x5576fe(0x17d)][_0x5576fe(0x134)](),_0x22849b(_0x5fa263);},_0x5fa263[_0x4d8716(0x1ba)]=()=>{var _0x1c4726=_0x4d8716;this[_0x1c4726(0x1e1)]=!0x0,this[_0x1c4726(0x175)](_0x5fa263),this[_0x1c4726(0x143)]();},_0x5fa263[_0x4d8716(0x1b4)]=_0x21adb4=>{var _0x55b71e=_0x4d8716;try{_0x21adb4&&_0x21adb4[_0x55b71e(0x13a)]&&this[_0x55b71e(0x14e)]&&JSON[_0x55b71e(0x16a)](_0x21adb4[_0x55b71e(0x13a)])[_0x55b71e(0x142)]===_0x55b71e(0x164)&&this[_0x55b71e(0x1cc)][_0x55b71e(0x20a)][_0x55b71e(0x164)]();}catch{}};})[_0x415d02(0x1d1)](_0x381826=>(this[_0x415d02(0x1db)]=!0x0,this['_connecting']=!0x1,this[_0x415d02(0x1e1)]=!0x1,this[_0x415d02(0x1fb)]=!0x0,this['_connectAttemptCount']=0x0,_0x381826))[_0x415d02(0x1d8)](_0x370b61=>(this[_0x415d02(0x1db)]=!0x1,this['_connecting']=!0x1,console[_0x415d02(0x199)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x415d02(0x1e7)]),_0x38a9cd(new Error(_0x415d02(0x20c)+(_0x370b61&&_0x370b61[_0x415d02(0x194)])))));}));}['_disposeWebsocket'](_0x1ada9b){var _0x1e726d=_0xcad5d2;this[_0x1e726d(0x1db)]=!0x1,this[_0x1e726d(0x1ae)]=!0x1;try{_0x1ada9b['onclose']=null,_0x1ada9b['onerror']=null,_0x1ada9b[_0x1e726d(0x195)]=null;}catch{}try{_0x1ada9b['readyState']<0x2&&_0x1ada9b[_0x1e726d(0x141)]();}catch{}}['_attemptToReconnectShortly'](){var _0x3e4cc6=_0xcad5d2;clearTimeout(this['_reconnectTimeout']),!(this['_connectAttemptCount']>=this[_0x3e4cc6(0x1a6)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0xea924d=_0x3e4cc6;this[_0xea924d(0x1db)]||this['_connecting']||(this[_0xea924d(0x18a)](),this[_0xea924d(0x19d)]?.['catch'](()=>this[_0xea924d(0x143)]()));},0x1f4),this[_0x3e4cc6(0x15f)][_0x3e4cc6(0x134)]&&this[_0x3e4cc6(0x15f)]['unref']());}async['send'](_0xce1d6){var _0xc52a3=_0xcad5d2;try{if(!this[_0xc52a3(0x1fb)])return;this[_0xc52a3(0x1e1)]&&this[_0xc52a3(0x18a)](),(await this[_0xc52a3(0x19d)])[_0xc52a3(0x188)](JSON[_0xc52a3(0x15b)](_0xce1d6));}catch(_0x51fc5b){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x51fc5b&&_0x51fc5b[_0xc52a3(0x194)])),this[_0xc52a3(0x1fb)]=!0x1,this[_0xc52a3(0x143)]();}}};function _0x1c6c(_0x4e5f1a,_0xe7b3b5){var _0x12b9d6=_0x12b9();return _0x1c6c=function(_0x1c6ce7,_0x2c87be){_0x1c6ce7=_0x1c6ce7-0x11f;var _0x39be75=_0x12b9d6[_0x1c6ce7];return _0x39be75;},_0x1c6c(_0x4e5f1a,_0xe7b3b5);}function b(_0x2f099e,_0x303c3d,_0x1baa03,_0x2c0edb,_0x51ccfe,_0x4bfbe1){var _0x480dd3=_0xcad5d2;let _0x43d30f=_0x1baa03[_0x480dd3(0x19e)](',')['map'](_0xff04cc=>{var _0x102f02=_0x480dd3;try{_0x2f099e[_0x102f02(0x201)]||((_0x51ccfe===_0x102f02(0x127)||_0x51ccfe==='remix'||_0x51ccfe==='astro')&&(_0x51ccfe+=!_0x2f099e[_0x102f02(0x12c)]?.[_0x102f02(0x1c4)]?.[_0x102f02(0x204)]&&_0x2f099e['process']?.['env']?.[_0x102f02(0x20e)]!==_0x102f02(0x1d3)?_0x102f02(0x13c):_0x102f02(0x136)),_0x2f099e[_0x102f02(0x201)]={'id':+new Date(),'tool':_0x51ccfe});let _0x1b1659=new X(_0x2f099e,_0x303c3d,_0xff04cc,_0x2c0edb,_0x4bfbe1);return _0x1b1659[_0x102f02(0x188)][_0x102f02(0x1b6)](_0x1b1659);}catch(_0xcd874a){return console[_0x102f02(0x199)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0xcd874a&&_0xcd874a[_0x102f02(0x194)]),()=>{};}});return _0x2807c9=>_0x43d30f[_0x480dd3(0x15e)](_0x4f0788=>_0x4f0788(_0x2807c9));}function W(_0x102cde){var _0x2e7d06=_0xcad5d2;let _0x208e9d=function(_0x5a8746,_0x10e3ca){return _0x10e3ca-_0x5a8746;},_0x44de2f;if(_0x102cde['performance'])_0x44de2f=function(){var _0x298d92=_0x1c6c;return _0x102cde[_0x298d92(0x1ea)][_0x298d92(0x13b)]();};else{if(_0x102cde['process']&&_0x102cde['process'][_0x2e7d06(0x1bd)]&&_0x102cde[_0x2e7d06(0x12c)]?.[_0x2e7d06(0x1e8)]?.[_0x2e7d06(0x20e)]!==_0x2e7d06(0x1d3))_0x44de2f=function(){return _0x102cde['process']['hrtime']();},_0x208e9d=function(_0x117359,_0x58a9f2){return 0x3e8*(_0x58a9f2[0x0]-_0x117359[0x0])+(_0x58a9f2[0x1]-_0x117359[0x1])/0xf4240;};else try{let {performance:_0xfd60cc}=require(_0x2e7d06(0x179));_0x44de2f=function(){var _0x3343ed=_0x2e7d06;return _0xfd60cc[_0x3343ed(0x13b)]();};}catch{_0x44de2f=function(){return+new Date();};}}return{'elapsed':_0x208e9d,'timeStamp':_0x44de2f,'now':()=>Date[_0x2e7d06(0x13b)]()};}function J(_0x2b6bc0,_0x46ad11,_0xa84d0e){var _0x3d6cef=_0xcad5d2;if(_0x2b6bc0[_0x3d6cef(0x13e)]!==void 0x0)return _0x2b6bc0[_0x3d6cef(0x13e)];let _0x237ec4=_0x2b6bc0['process']?.[_0x3d6cef(0x1c4)]?.[_0x3d6cef(0x204)]||_0x2b6bc0[_0x3d6cef(0x12c)]?.[_0x3d6cef(0x1e8)]?.['NEXT_RUNTIME']===_0x3d6cef(0x1d3);return _0x237ec4&&_0xa84d0e===_0x3d6cef(0x1ed)?_0x2b6bc0[_0x3d6cef(0x13e)]=!0x1:_0x2b6bc0[_0x3d6cef(0x13e)]=_0x237ec4||!_0x46ad11||_0x2b6bc0[_0x3d6cef(0x20a)]?.['hostname']&&_0x46ad11[_0x3d6cef(0x128)](_0x2b6bc0[_0x3d6cef(0x20a)][_0x3d6cef(0x16c)]),_0x2b6bc0[_0x3d6cef(0x13e)];}function Y(_0x46482b,_0x57e6b2,_0x4c887a,_0x17fda6){var _0x293447=_0xcad5d2;_0x46482b=_0x46482b,_0x57e6b2=_0x57e6b2,_0x4c887a=_0x4c887a,_0x17fda6=_0x17fda6;let _0x1e581f=W(_0x46482b),_0x3407be=_0x1e581f[_0x293447(0x129)],_0x147949=_0x1e581f[_0x293447(0x1ab)];class _0x17520b{constructor(){var _0x1a8064=_0x293447;this[_0x1a8064(0x1b1)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x1a8064(0x1f0)]=/^(0|[1-9][0-9]*)$/,this[_0x1a8064(0x180)]=/'([^\\\\']|\\\\')*'/,this[_0x1a8064(0x1eb)]=_0x46482b[_0x1a8064(0x147)],this['_HTMLAllCollection']=_0x46482b[_0x1a8064(0x135)],this[_0x1a8064(0x1ca)]=Object[_0x1a8064(0x185)],this['_getOwnPropertyNames']=Object[_0x1a8064(0x191)],this[_0x1a8064(0x1a9)]=_0x46482b[_0x1a8064(0x1c6)],this[_0x1a8064(0x1e5)]=RegExp['prototype'][_0x1a8064(0x1d9)],this['_dateToString']=Date[_0x1a8064(0x146)][_0x1a8064(0x1d9)];}[_0x293447(0x1dd)](_0x33f3af,_0x541f55,_0x535e8a,_0x5abbd7){var _0x89a98b=_0x293447,_0x4dc61f=this,_0x131512=_0x535e8a['autoExpand'];function _0xe5fc89(_0x31c971,_0x1051f9,_0x106ea8){var _0xa14823=_0x1c6c;_0x1051f9['type']=_0xa14823(0x1e9),_0x1051f9[_0xa14823(0x203)]=_0x31c971[_0xa14823(0x194)],_0x21fe89=_0x106ea8[_0xa14823(0x204)][_0xa14823(0x1bb)],_0x106ea8[_0xa14823(0x204)]['current']=_0x1051f9,_0x4dc61f['_treeNodePropertiesBeforeFullValue'](_0x1051f9,_0x106ea8);}try{_0x535e8a['level']++,_0x535e8a['autoExpand']&&_0x535e8a['autoExpandPreviousObjects'][_0x89a98b(0x1a0)](_0x541f55);var _0x40b035,_0x37207d,_0x4b1d9f,_0x1d0dc7,_0x237f23=[],_0x19fd43=[],_0x385bc2,_0x47a5fb=this[_0x89a98b(0x19f)](_0x541f55),_0x4746da=_0x47a5fb===_0x89a98b(0x144),_0x23ece8=!0x1,_0x9c79d5=_0x47a5fb===_0x89a98b(0x12d),_0x3eb391=this['_isPrimitiveType'](_0x47a5fb),_0x2de0c3=this[_0x89a98b(0x20f)](_0x47a5fb),_0x856d9b=_0x3eb391||_0x2de0c3,_0x5def3c={},_0x4112fb=0x0,_0x392aa4=!0x1,_0x21fe89,_0x47e1b9=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x535e8a[_0x89a98b(0x152)]){if(_0x4746da){if(_0x37207d=_0x541f55['length'],_0x37207d>_0x535e8a[_0x89a98b(0x148)]){for(_0x4b1d9f=0x0,_0x1d0dc7=_0x535e8a[_0x89a98b(0x148)],_0x40b035=_0x4b1d9f;_0x40b035<_0x1d0dc7;_0x40b035++)_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f[_0x89a98b(0x1e6)](_0x237f23,_0x541f55,_0x47a5fb,_0x40b035,_0x535e8a));_0x33f3af[_0x89a98b(0x1e3)]=!0x0;}else{for(_0x4b1d9f=0x0,_0x1d0dc7=_0x37207d,_0x40b035=_0x4b1d9f;_0x40b035<_0x1d0dc7;_0x40b035++)_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f['_addProperty'](_0x237f23,_0x541f55,_0x47a5fb,_0x40b035,_0x535e8a));}_0x535e8a['autoExpandPropertyCount']+=_0x19fd43[_0x89a98b(0x1bf)];}if(!(_0x47a5fb==='null'||_0x47a5fb==='undefined')&&!_0x3eb391&&_0x47a5fb!==_0x89a98b(0x1c9)&&_0x47a5fb!=='Buffer'&&_0x47a5fb!==_0x89a98b(0x19b)){var _0x2652cb=_0x5abbd7[_0x89a98b(0x1f6)]||_0x535e8a[_0x89a98b(0x1f6)];if(this[_0x89a98b(0x1b5)](_0x541f55)?(_0x40b035=0x0,_0x541f55[_0x89a98b(0x15e)](function(_0x2bfb85){var _0x56d7fe=_0x89a98b;if(_0x4112fb++,_0x535e8a[_0x56d7fe(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;return;}if(!_0x535e8a[_0x56d7fe(0x1c0)]&&_0x535e8a[_0x56d7fe(0x14c)]&&_0x535e8a[_0x56d7fe(0x1c3)]>_0x535e8a['autoExpandLimit']){_0x392aa4=!0x0;return;}_0x19fd43[_0x56d7fe(0x1a0)](_0x4dc61f[_0x56d7fe(0x1e6)](_0x237f23,_0x541f55,_0x56d7fe(0x20d),_0x40b035++,_0x535e8a,function(_0x3d7054){return function(){return _0x3d7054;};}(_0x2bfb85)));})):this[_0x89a98b(0x1ce)](_0x541f55)&&_0x541f55[_0x89a98b(0x15e)](function(_0x2039af,_0x18c51b){var _0x2c5d76=_0x89a98b;if(_0x4112fb++,_0x535e8a[_0x2c5d76(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;return;}if(!_0x535e8a['isExpressionToEvaluate']&&_0x535e8a[_0x2c5d76(0x14c)]&&_0x535e8a['autoExpandPropertyCount']>_0x535e8a[_0x2c5d76(0x178)]){_0x392aa4=!0x0;return;}var _0x36b8a8=_0x18c51b[_0x2c5d76(0x1d9)]();_0x36b8a8[_0x2c5d76(0x1bf)]>0x64&&(_0x36b8a8=_0x36b8a8[_0x2c5d76(0x130)](0x0,0x64)+'...'),_0x19fd43[_0x2c5d76(0x1a0)](_0x4dc61f[_0x2c5d76(0x1e6)](_0x237f23,_0x541f55,'Map',_0x36b8a8,_0x535e8a,function(_0x33390e){return function(){return _0x33390e;};}(_0x2039af)));}),!_0x23ece8){try{for(_0x385bc2 in _0x541f55)if(!(_0x4746da&&_0x47e1b9[_0x89a98b(0x120)](_0x385bc2))&&!this[_0x89a98b(0x124)](_0x541f55,_0x385bc2,_0x535e8a)){if(_0x4112fb++,_0x535e8a[_0x89a98b(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;break;}if(!_0x535e8a[_0x89a98b(0x1c0)]&&_0x535e8a[_0x89a98b(0x14c)]&&_0x535e8a[_0x89a98b(0x1c3)]>_0x535e8a[_0x89a98b(0x178)]){_0x392aa4=!0x0;break;}_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f[_0x89a98b(0x1d5)](_0x237f23,_0x5def3c,_0x541f55,_0x47a5fb,_0x385bc2,_0x535e8a));}}catch{}if(_0x5def3c[_0x89a98b(0x1ee)]=!0x0,_0x9c79d5&&(_0x5def3c['_p_name']=!0x0),!_0x392aa4){var _0x33c504=[][_0x89a98b(0x1e0)](this[_0x89a98b(0x173)](_0x541f55))[_0x89a98b(0x1e0)](this[_0x89a98b(0x176)](_0x541f55));for(_0x40b035=0x0,_0x37207d=_0x33c504[_0x89a98b(0x1bf)];_0x40b035<_0x37207d;_0x40b035++)if(_0x385bc2=_0x33c504[_0x40b035],!(_0x4746da&&_0x47e1b9[_0x89a98b(0x120)](_0x385bc2[_0x89a98b(0x1d9)]()))&&!this['_blacklistedProperty'](_0x541f55,_0x385bc2,_0x535e8a)&&!_0x5def3c[_0x89a98b(0x19c)+_0x385bc2[_0x89a98b(0x1d9)]()]){if(_0x4112fb++,_0x535e8a[_0x89a98b(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;break;}if(!_0x535e8a[_0x89a98b(0x1c0)]&&_0x535e8a[_0x89a98b(0x14c)]&&_0x535e8a[_0x89a98b(0x1c3)]>_0x535e8a[_0x89a98b(0x178)]){_0x392aa4=!0x0;break;}_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f[_0x89a98b(0x1d5)](_0x237f23,_0x5def3c,_0x541f55,_0x47a5fb,_0x385bc2,_0x535e8a));}}}}}if(_0x33f3af[_0x89a98b(0x197)]=_0x47a5fb,_0x856d9b?(_0x33f3af[_0x89a98b(0x123)]=_0x541f55[_0x89a98b(0x14f)](),this[_0x89a98b(0x17c)](_0x47a5fb,_0x33f3af,_0x535e8a,_0x5abbd7)):_0x47a5fb===_0x89a98b(0x145)?_0x33f3af[_0x89a98b(0x123)]=this[_0x89a98b(0x1fc)]['call'](_0x541f55):_0x47a5fb===_0x89a98b(0x19b)?_0x33f3af['value']=_0x541f55['toString']():_0x47a5fb==='RegExp'?_0x33f3af[_0x89a98b(0x123)]=this[_0x89a98b(0x1e5)]['call'](_0x541f55):_0x47a5fb===_0x89a98b(0x1b9)&&this[_0x89a98b(0x1a9)]?_0x33f3af[_0x89a98b(0x123)]=this[_0x89a98b(0x1a9)][_0x89a98b(0x146)][_0x89a98b(0x1d9)]['call'](_0x541f55):!_0x535e8a[_0x89a98b(0x152)]&&!(_0x47a5fb===_0x89a98b(0x138)||_0x47a5fb===_0x89a98b(0x147))&&(delete _0x33f3af['value'],_0x33f3af['capped']=!0x0),_0x392aa4&&(_0x33f3af[_0x89a98b(0x126)]=!0x0),_0x21fe89=_0x535e8a[_0x89a98b(0x204)][_0x89a98b(0x1bb)],_0x535e8a[_0x89a98b(0x204)][_0x89a98b(0x1bb)]=_0x33f3af,this[_0x89a98b(0x12a)](_0x33f3af,_0x535e8a),_0x19fd43[_0x89a98b(0x1bf)]){for(_0x40b035=0x0,_0x37207d=_0x19fd43[_0x89a98b(0x1bf)];_0x40b035<_0x37207d;_0x40b035++)_0x19fd43[_0x40b035](_0x40b035);}_0x237f23[_0x89a98b(0x1bf)]&&(_0x33f3af[_0x89a98b(0x1f6)]=_0x237f23);}catch(_0x332a80){_0xe5fc89(_0x332a80,_0x33f3af,_0x535e8a);}return this[_0x89a98b(0x13f)](_0x541f55,_0x33f3af),this['_treeNodePropertiesAfterFullValue'](_0x33f3af,_0x535e8a),_0x535e8a[_0x89a98b(0x204)]['current']=_0x21fe89,_0x535e8a[_0x89a98b(0x1bc)]--,_0x535e8a[_0x89a98b(0x14c)]=_0x131512,_0x535e8a[_0x89a98b(0x14c)]&&_0x535e8a[_0x89a98b(0x12b)][_0x89a98b(0x192)](),_0x33f3af;}[_0x293447(0x176)](_0xc2da79){var _0x30bba4=_0x293447;return Object[_0x30bba4(0x1a1)]?Object[_0x30bba4(0x1a1)](_0xc2da79):[];}[_0x293447(0x1b5)](_0x1d60a9){var _0x48facd=_0x293447;return!!(_0x1d60a9&&_0x46482b[_0x48facd(0x20d)]&&this['_objectToString'](_0x1d60a9)===_0x48facd(0x121)&&_0x1d60a9['forEach']);}[_0x293447(0x124)](_0x34f203,_0x464c54,_0x34f808){var _0x336088=_0x293447;return _0x34f808[_0x336088(0x166)]?typeof _0x34f203[_0x464c54]==_0x336088(0x12d):!0x1;}['_type'](_0x485e7d){var _0x5ba655=_0x293447,_0x28ac8c='';return _0x28ac8c=typeof _0x485e7d,_0x28ac8c===_0x5ba655(0x155)?this[_0x5ba655(0x16f)](_0x485e7d)===_0x5ba655(0x1ac)?_0x28ac8c=_0x5ba655(0x144):this[_0x5ba655(0x16f)](_0x485e7d)===_0x5ba655(0x206)?_0x28ac8c=_0x5ba655(0x145):this[_0x5ba655(0x16f)](_0x485e7d)===_0x5ba655(0x1ff)?_0x28ac8c=_0x5ba655(0x19b):_0x485e7d===null?_0x28ac8c='null':_0x485e7d['constructor']&&(_0x28ac8c=_0x485e7d[_0x5ba655(0x207)][_0x5ba655(0x1d7)]||_0x28ac8c):_0x28ac8c===_0x5ba655(0x147)&&this[_0x5ba655(0x1d0)]&&_0x485e7d instanceof this[_0x5ba655(0x1d0)]&&(_0x28ac8c=_0x5ba655(0x135)),_0x28ac8c;}['_objectToString'](_0x470728){var _0x3feed7=_0x293447;return Object[_0x3feed7(0x146)][_0x3feed7(0x1d9)][_0x3feed7(0x181)](_0x470728);}[_0x293447(0x150)](_0x16bd2f){var _0x42f834=_0x293447;return _0x16bd2f===_0x42f834(0x156)||_0x16bd2f===_0x42f834(0x16d)||_0x16bd2f===_0x42f834(0x1f2);}[_0x293447(0x20f)](_0x1ee66b){var _0x17537c=_0x293447;return _0x1ee66b==='Boolean'||_0x1ee66b===_0x17537c(0x1c9)||_0x1ee66b==='Number';}[_0x293447(0x1e6)](_0x557084,_0x2e0b7c,_0x1d9f5b,_0x2114e0,_0x1f5832,_0x315ae9){var _0x51915e=this;return function(_0x150684){var _0xcc84a=_0x1c6c,_0x35daea=_0x1f5832['node']['current'],_0x4c332f=_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x1b0)],_0x2a27c1=_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x208)];_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x208)]=_0x35daea,_0x1f5832[_0xcc84a(0x204)]['index']=typeof _0x2114e0==_0xcc84a(0x1f2)?_0x2114e0:_0x150684,_0x557084[_0xcc84a(0x1a0)](_0x51915e[_0xcc84a(0x133)](_0x2e0b7c,_0x1d9f5b,_0x2114e0,_0x1f5832,_0x315ae9)),_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x208)]=_0x2a27c1,_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x1b0)]=_0x4c332f;};}[_0x293447(0x1d5)](_0x192f6e,_0x355a0b,_0x1f9ccb,_0x4d3a35,_0x5bdced,_0x2947fa,_0x4127b5){var _0x547e59=_0x293447,_0x1c109d=this;return _0x355a0b[_0x547e59(0x19c)+_0x5bdced[_0x547e59(0x1d9)]()]=!0x0,function(_0x52a5b4){var _0x5657c0=_0x547e59,_0x45bbe1=_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x1bb)],_0x45577f=_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x1b0)],_0x3d53c2=_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x208)];_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x208)]=_0x45bbe1,_0x2947fa['node'][_0x5657c0(0x1b0)]=_0x52a5b4,_0x192f6e[_0x5657c0(0x1a0)](_0x1c109d[_0x5657c0(0x133)](_0x1f9ccb,_0x4d3a35,_0x5bdced,_0x2947fa,_0x4127b5)),_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x208)]=_0x3d53c2,_0x2947fa[_0x5657c0(0x204)]['index']=_0x45577f;};}['_property'](_0x3dde9b,_0x45c585,_0xf7c324,_0x28ae42,_0x91c8db){var _0x448894=_0x293447,_0x3b8c7d=this;_0x91c8db||(_0x91c8db=function(_0x1d56b8,_0x552056){return _0x1d56b8[_0x552056];});var _0x542036=_0xf7c324[_0x448894(0x1d9)](),_0x499dbf=_0x28ae42['expressionsToEvaluate']||{},_0x99faac=_0x28ae42[_0x448894(0x152)],_0x220b83=_0x28ae42[_0x448894(0x1c0)];try{var _0x33c50a=this[_0x448894(0x1ce)](_0x3dde9b),_0x5cf05a=_0x542036;_0x33c50a&&_0x5cf05a[0x0]==='\\x27'&&(_0x5cf05a=_0x5cf05a[_0x448894(0x165)](0x1,_0x5cf05a[_0x448894(0x1bf)]-0x2));var _0x3e746c=_0x28ae42['expressionsToEvaluate']=_0x499dbf['_p_'+_0x5cf05a];_0x3e746c&&(_0x28ae42[_0x448894(0x152)]=_0x28ae42[_0x448894(0x152)]+0x1),_0x28ae42[_0x448894(0x1c0)]=!!_0x3e746c;var _0x39cd35=typeof _0xf7c324==_0x448894(0x1b9),_0x18fe60={'name':_0x39cd35||_0x33c50a?_0x542036:this['_propertyName'](_0x542036)};if(_0x39cd35&&(_0x18fe60[_0x448894(0x1b9)]=!0x0),!(_0x45c585===_0x448894(0x144)||_0x45c585===_0x448894(0x153))){var _0x3c4558=this[_0x448894(0x1ca)](_0x3dde9b,_0xf7c324);if(_0x3c4558&&(_0x3c4558[_0x448894(0x1b7)]&&(_0x18fe60[_0x448894(0x1f7)]=!0x0),_0x3c4558[_0x448894(0x18e)]&&!_0x3e746c&&!_0x28ae42[_0x448894(0x140)]))return _0x18fe60['getter']=!0x0,this['_processTreeNodeResult'](_0x18fe60,_0x28ae42),_0x18fe60;}var _0x43c9ad;try{_0x43c9ad=_0x91c8db(_0x3dde9b,_0xf7c324);}catch(_0x563553){return _0x18fe60={'name':_0x542036,'type':'unknown','error':_0x563553[_0x448894(0x194)]},this[_0x448894(0x1a5)](_0x18fe60,_0x28ae42),_0x18fe60;}var _0x42622f=this['_type'](_0x43c9ad),_0x301a1d=this['_isPrimitiveType'](_0x42622f);if(_0x18fe60[_0x448894(0x197)]=_0x42622f,_0x301a1d)this['_processTreeNodeResult'](_0x18fe60,_0x28ae42,_0x43c9ad,function(){var _0x176368=_0x448894;_0x18fe60[_0x176368(0x123)]=_0x43c9ad[_0x176368(0x14f)](),!_0x3e746c&&_0x3b8c7d[_0x176368(0x17c)](_0x42622f,_0x18fe60,_0x28ae42,{});});else{var _0x39a0ba=_0x28ae42[_0x448894(0x14c)]&&_0x28ae42[_0x448894(0x1bc)]<_0x28ae42[_0x448894(0x1f5)]&&_0x28ae42[_0x448894(0x12b)][_0x448894(0x149)](_0x43c9ad)<0x0&&_0x42622f!==_0x448894(0x12d)&&_0x28ae42[_0x448894(0x1c3)]<_0x28ae42[_0x448894(0x178)];_0x39a0ba||_0x28ae42[_0x448894(0x1bc)]<_0x99faac||_0x3e746c?(this[_0x448894(0x1dd)](_0x18fe60,_0x43c9ad,_0x28ae42,_0x3e746c||{}),this['_additionalMetadata'](_0x43c9ad,_0x18fe60)):this[_0x448894(0x1a5)](_0x18fe60,_0x28ae42,_0x43c9ad,function(){var _0x15a072=_0x448894;_0x42622f===_0x15a072(0x138)||_0x42622f===_0x15a072(0x147)||(delete _0x18fe60[_0x15a072(0x123)],_0x18fe60['capped']=!0x0);});}return _0x18fe60;}finally{_0x28ae42[_0x448894(0x177)]=_0x499dbf,_0x28ae42['depth']=_0x99faac,_0x28ae42['isExpressionToEvaluate']=_0x220b83;}}[_0x293447(0x17c)](_0x292d65,_0x2e866c,_0x3e54e2,_0x54b8ae){var _0x433b68=_0x293447,_0xe467f8=_0x54b8ae[_0x433b68(0x1a2)]||_0x3e54e2[_0x433b68(0x1a2)];if((_0x292d65===_0x433b68(0x16d)||_0x292d65===_0x433b68(0x1c9))&&_0x2e866c['value']){let _0x4b6f9d=_0x2e866c[_0x433b68(0x123)][_0x433b68(0x1bf)];_0x3e54e2[_0x433b68(0x1c8)]+=_0x4b6f9d,_0x3e54e2[_0x433b68(0x1c8)]>_0x3e54e2[_0x433b68(0x186)]?(_0x2e866c[_0x433b68(0x131)]='',delete _0x2e866c['value']):_0x4b6f9d>_0xe467f8&&(_0x2e866c[_0x433b68(0x131)]=_0x2e866c[_0x433b68(0x123)][_0x433b68(0x165)](0x0,_0xe467f8),delete _0x2e866c[_0x433b68(0x123)]);}}[_0x293447(0x1ce)](_0x41133b){var _0x4e4a01=_0x293447;return!!(_0x41133b&&_0x46482b['Map']&&this['_objectToString'](_0x41133b)===_0x4e4a01(0x122)&&_0x41133b[_0x4e4a01(0x15e)]);}[_0x293447(0x200)](_0x11d20f){var _0x23db08=_0x293447;if(_0x11d20f['match'](/^\\d+$/))return _0x11d20f;var _0x5adfc1;try{_0x5adfc1=JSON['stringify'](''+_0x11d20f);}catch{_0x5adfc1='\\x22'+this[_0x23db08(0x16f)](_0x11d20f)+'\\x22';}return _0x5adfc1['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x5adfc1=_0x5adfc1['substr'](0x1,_0x5adfc1[_0x23db08(0x1bf)]-0x2):_0x5adfc1=_0x5adfc1[_0x23db08(0x160)](/'/g,'\\x5c\\x27')[_0x23db08(0x160)](/\\\\"/g,'\\x22')[_0x23db08(0x160)](/(^"|"$)/g,'\\x27'),_0x5adfc1;}[_0x293447(0x1a5)](_0x1d7671,_0x498e8f,_0x5d4ebb,_0x2a25f5){var _0x17280d=_0x293447;this[_0x17280d(0x12a)](_0x1d7671,_0x498e8f),_0x2a25f5&&_0x2a25f5(),this['_additionalMetadata'](_0x5d4ebb,_0x1d7671),this[_0x17280d(0x1c2)](_0x1d7671,_0x498e8f);}[_0x293447(0x12a)](_0x31a115,_0x24b39a){var _0x31f20d=_0x293447;this[_0x31f20d(0x1c7)](_0x31a115,_0x24b39a),this[_0x31f20d(0x1fd)](_0x31a115,_0x24b39a),this[_0x31f20d(0x1cf)](_0x31a115,_0x24b39a),this['_setNodePermissions'](_0x31a115,_0x24b39a);}[_0x293447(0x1c7)](_0x47f680,_0x21bac2){}['_setNodeQueryPath'](_0x987612,_0x3a623b){}[_0x293447(0x1a8)](_0x3b02a4,_0x17ac04){}[_0x293447(0x15a)](_0x1a1ba3){var _0x13d424=_0x293447;return _0x1a1ba3===this[_0x13d424(0x1eb)];}[_0x293447(0x1c2)](_0x4b2b5b,_0x210fca){var _0x2a5047=_0x293447;this[_0x2a5047(0x1a8)](_0x4b2b5b,_0x210fca),this[_0x2a5047(0x1f3)](_0x4b2b5b),_0x210fca['sortProps']&&this[_0x2a5047(0x15d)](_0x4b2b5b),this[_0x2a5047(0x132)](_0x4b2b5b,_0x210fca),this[_0x2a5047(0x205)](_0x4b2b5b,_0x210fca),this[_0x2a5047(0x1da)](_0x4b2b5b);}[_0x293447(0x13f)](_0x20792e,_0x1d1cce){var _0x581b38=_0x293447;let _0x4b47bf;try{_0x46482b[_0x581b38(0x1ad)]&&(_0x4b47bf=_0x46482b['console']['error'],_0x46482b[_0x581b38(0x1ad)][_0x581b38(0x203)]=function(){}),_0x20792e&&typeof _0x20792e[_0x581b38(0x1bf)]==_0x581b38(0x1f2)&&(_0x1d1cce[_0x581b38(0x1bf)]=_0x20792e[_0x581b38(0x1bf)]);}catch{}finally{_0x4b47bf&&(_0x46482b['console'][_0x581b38(0x203)]=_0x4b47bf);}if(_0x1d1cce[_0x581b38(0x197)]===_0x581b38(0x1f2)||_0x1d1cce['type']===_0x581b38(0x17e)){if(isNaN(_0x1d1cce['value']))_0x1d1cce[_0x581b38(0x1de)]=!0x0,delete _0x1d1cce[_0x581b38(0x123)];else switch(_0x1d1cce[_0x581b38(0x123)]){case Number[_0x581b38(0x193)]:_0x1d1cce['positiveInfinity']=!0x0,delete _0x1d1cce[_0x581b38(0x123)];break;case Number[_0x581b38(0x19a)]:_0x1d1cce['negativeInfinity']=!0x0,delete _0x1d1cce[_0x581b38(0x123)];break;case 0x0:this[_0x581b38(0x1fe)](_0x1d1cce[_0x581b38(0x123)])&&(_0x1d1cce[_0x581b38(0x187)]=!0x0);break;}}else _0x1d1cce[_0x581b38(0x197)]==='function'&&typeof _0x20792e[_0x581b38(0x1d7)]==_0x581b38(0x16d)&&_0x20792e[_0x581b38(0x1d7)]&&_0x1d1cce[_0x581b38(0x1d7)]&&_0x20792e['name']!==_0x1d1cce['name']&&(_0x1d1cce[_0x581b38(0x154)]=_0x20792e[_0x581b38(0x1d7)]);}['_isNegativeZero'](_0x138f02){var _0x295204=_0x293447;return 0x1/_0x138f02===Number[_0x295204(0x19a)];}[_0x293447(0x15d)](_0x3c496e){var _0x3d54d6=_0x293447;!_0x3c496e[_0x3d54d6(0x1f6)]||!_0x3c496e[_0x3d54d6(0x1f6)][_0x3d54d6(0x1bf)]||_0x3c496e[_0x3d54d6(0x197)]===_0x3d54d6(0x144)||_0x3c496e[_0x3d54d6(0x197)]===_0x3d54d6(0x18b)||_0x3c496e[_0x3d54d6(0x197)]===_0x3d54d6(0x20d)||_0x3c496e[_0x3d54d6(0x1f6)][_0x3d54d6(0x1d2)](function(_0xd835fa,_0x3acc3e){var _0x1cb500=_0x3d54d6,_0x5c1e0b=_0xd835fa['name'][_0x1cb500(0x1e2)](),_0x3a5c54=_0x3acc3e[_0x1cb500(0x1d7)][_0x1cb500(0x1e2)]();return _0x5c1e0b<_0x3a5c54?-0x1:_0x5c1e0b>_0x3a5c54?0x1:0x0;});}['_addFunctionsNode'](_0x446f2b,_0x1b11ba){var _0x366039=_0x293447;if(!(_0x1b11ba[_0x366039(0x166)]||!_0x446f2b[_0x366039(0x1f6)]||!_0x446f2b[_0x366039(0x1f6)]['length'])){for(var _0x10e1ba=[],_0x13339e=[],_0x124074=0x0,_0x2b5050=_0x446f2b[_0x366039(0x1f6)]['length'];_0x124074<_0x2b5050;_0x124074++){var _0x3cf9a2=_0x446f2b[_0x366039(0x1f6)][_0x124074];_0x3cf9a2['type']===_0x366039(0x12d)?_0x10e1ba[_0x366039(0x1a0)](_0x3cf9a2):_0x13339e[_0x366039(0x1a0)](_0x3cf9a2);}if(!(!_0x13339e[_0x366039(0x1bf)]||_0x10e1ba[_0x366039(0x1bf)]<=0x1)){_0x446f2b[_0x366039(0x1f6)]=_0x13339e;var _0x549186={'functionsNode':!0x0,'props':_0x10e1ba};this[_0x366039(0x1c7)](_0x549186,_0x1b11ba),this['_setNodeLabel'](_0x549186,_0x1b11ba),this[_0x366039(0x1f3)](_0x549186),this[_0x366039(0x1f8)](_0x549186,_0x1b11ba),_0x549186['id']+='\\x20f',_0x446f2b[_0x366039(0x1f6)][_0x366039(0x184)](_0x549186);}}}[_0x293447(0x205)](_0x4c40b3,_0x1ff381){}[_0x293447(0x1f3)](_0x117591){}[_0x293447(0x174)](_0x51f5ce){var _0x2c42f0=_0x293447;return Array[_0x2c42f0(0x198)](_0x51f5ce)||typeof _0x51f5ce==_0x2c42f0(0x155)&&this[_0x2c42f0(0x16f)](_0x51f5ce)==='[object\\x20Array]';}[_0x293447(0x1f8)](_0x392cbb,_0x281927){}[_0x293447(0x1da)](_0x4c8651){var _0x165202=_0x293447;delete _0x4c8651[_0x165202(0x167)],delete _0x4c8651[_0x165202(0x18c)],delete _0x4c8651[_0x165202(0x17b)];}[_0x293447(0x1cf)](_0x513945,_0x3b49c2){}}let _0x5b4cef=new _0x17520b(),_0x54ed19={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x4cc6fd={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x51276c(_0x56a223,_0x4d7393,_0x37d4ff,_0x448b33,_0x3bb7c4,_0x4d919b){var _0x371f52=_0x293447;let _0x26f3f4,_0x16ae89;try{_0x16ae89=_0x147949(),_0x26f3f4=_0x4c887a[_0x4d7393],!_0x26f3f4||_0x16ae89-_0x26f3f4['ts']>0x1f4&&_0x26f3f4['count']&&_0x26f3f4['time']/_0x26f3f4['count']<0x64?(_0x4c887a[_0x4d7393]=_0x26f3f4={'count':0x0,'time':0x0,'ts':_0x16ae89},_0x4c887a[_0x371f52(0x168)]={}):_0x16ae89-_0x4c887a[_0x371f52(0x168)]['ts']>0x32&&_0x4c887a[_0x371f52(0x168)][_0x371f52(0x202)]&&_0x4c887a[_0x371f52(0x168)]['time']/_0x4c887a[_0x371f52(0x168)][_0x371f52(0x202)]<0x64&&(_0x4c887a[_0x371f52(0x168)]={});let _0x1ec019=[],_0x2bed04=_0x26f3f4[_0x371f52(0x15c)]||_0x4c887a[_0x371f52(0x168)][_0x371f52(0x15c)]?_0x4cc6fd:_0x54ed19,_0x2002fe=_0x24b007=>{var _0xf5206a=_0x371f52;let _0x18426c={};return _0x18426c[_0xf5206a(0x1f6)]=_0x24b007[_0xf5206a(0x1f6)],_0x18426c['elements']=_0x24b007[_0xf5206a(0x148)],_0x18426c[_0xf5206a(0x1a2)]=_0x24b007[_0xf5206a(0x1a2)],_0x18426c[_0xf5206a(0x186)]=_0x24b007[_0xf5206a(0x186)],_0x18426c[_0xf5206a(0x178)]=_0x24b007[_0xf5206a(0x178)],_0x18426c[_0xf5206a(0x1f5)]=_0x24b007[_0xf5206a(0x1f5)],_0x18426c[_0xf5206a(0x14b)]=!0x1,_0x18426c[_0xf5206a(0x166)]=!_0x57e6b2,_0x18426c[_0xf5206a(0x152)]=0x1,_0x18426c[_0xf5206a(0x1bc)]=0x0,_0x18426c[_0xf5206a(0x171)]=_0xf5206a(0x169),_0x18426c[_0xf5206a(0x158)]='root_exp',_0x18426c['autoExpand']=!0x0,_0x18426c[_0xf5206a(0x12b)]=[],_0x18426c[_0xf5206a(0x1c3)]=0x0,_0x18426c[_0xf5206a(0x140)]=!0x0,_0x18426c[_0xf5206a(0x1c8)]=0x0,_0x18426c[_0xf5206a(0x204)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x18426c;};for(var _0x131ddb=0x0;_0x131ddb<_0x3bb7c4[_0x371f52(0x1bf)];_0x131ddb++)_0x1ec019[_0x371f52(0x1a0)](_0x5b4cef[_0x371f52(0x1dd)]({'timeNode':_0x56a223===_0x371f52(0x1cd)||void 0x0},_0x3bb7c4[_0x131ddb],_0x2002fe(_0x2bed04),{}));if(_0x56a223===_0x371f52(0x12e)){let _0x3a6f25=Error['stackTraceLimit'];try{Error[_0x371f52(0x1cb)]=0x1/0x0,_0x1ec019[_0x371f52(0x1a0)](_0x5b4cef[_0x371f52(0x1dd)]({'stackNode':!0x0},new Error()[_0x371f52(0x11f)],_0x2002fe(_0x2bed04),{'strLength':0x1/0x0}));}finally{Error[_0x371f52(0x1cb)]=_0x3a6f25;}}return{'method':_0x371f52(0x1a4),'version':_0x17fda6,'args':[{'ts':_0x37d4ff,'session':_0x448b33,'args':_0x1ec019,'id':_0x4d7393,'context':_0x4d919b}]};}catch(_0x6fdb2){return{'method':_0x371f52(0x1a4),'version':_0x17fda6,'args':[{'ts':_0x37d4ff,'session':_0x448b33,'args':[{'type':_0x371f52(0x1e9),'error':_0x6fdb2&&_0x6fdb2[_0x371f52(0x194)]}],'id':_0x4d7393,'context':_0x4d919b}]};}finally{try{if(_0x26f3f4&&_0x16ae89){let _0x46ed87=_0x147949();_0x26f3f4['count']++,_0x26f3f4['time']+=_0x3407be(_0x16ae89,_0x46ed87),_0x26f3f4['ts']=_0x46ed87,_0x4c887a[_0x371f52(0x168)]['count']++,_0x4c887a['hits'][_0x371f52(0x1cd)]+=_0x3407be(_0x16ae89,_0x46ed87),_0x4c887a['hits']['ts']=_0x46ed87,(_0x26f3f4[_0x371f52(0x202)]>0x32||_0x26f3f4[_0x371f52(0x1cd)]>0x64)&&(_0x26f3f4[_0x371f52(0x15c)]=!0x0),(_0x4c887a[_0x371f52(0x168)][_0x371f52(0x202)]>0x3e8||_0x4c887a[_0x371f52(0x168)][_0x371f52(0x1cd)]>0x12c)&&(_0x4c887a[_0x371f52(0x168)][_0x371f52(0x15c)]=!0x0);}}catch{}}}return _0x51276c;}((_0x286e60,_0x143385,_0x33d862,_0x140af9,_0x3f48b2,_0x5ca465,_0x5c8d8e,_0x3928e8,_0x5a585c,_0x3f3d25)=>{var _0x4934aa=_0xcad5d2;if(_0x286e60[_0x4934aa(0x18d)])return _0x286e60[_0x4934aa(0x18d)];if(!J(_0x286e60,_0x3928e8,_0x3f48b2))return _0x286e60[_0x4934aa(0x18d)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x286e60[_0x4934aa(0x18d)];let _0x425c22=W(_0x286e60),_0x408ec9=_0x425c22[_0x4934aa(0x129)],_0x4f57cc=_0x425c22[_0x4934aa(0x1ab)],_0x587aeb=_0x425c22[_0x4934aa(0x13b)],_0x4823a2={'hits':{},'ts':{}},_0x1b72ac=Y(_0x286e60,_0x5a585c,_0x4823a2,_0x5ca465),_0x1b1e6b=_0x253605=>{_0x4823a2['ts'][_0x253605]=_0x4f57cc();},_0x57c59a=(_0x599542,_0x1e2fab)=>{let _0x12e671=_0x4823a2['ts'][_0x1e2fab];if(delete _0x4823a2['ts'][_0x1e2fab],_0x12e671){let _0x40c3fd=_0x408ec9(_0x12e671,_0x4f57cc());_0x44510b(_0x1b72ac('time',_0x599542,_0x587aeb(),_0x5731f6,[_0x40c3fd],_0x1e2fab));}},_0x35091e=_0x31d627=>_0x39550d=>{var _0xc1d5f6=_0x4934aa;try{_0x1b1e6b(_0x39550d),_0x31d627(_0x39550d);}finally{_0x286e60[_0xc1d5f6(0x1ad)][_0xc1d5f6(0x1cd)]=_0x31d627;}},_0x6a42e3=_0x30aeda=>_0x4e197f=>{var _0x1c5b5e=_0x4934aa;try{let [_0x1025c3,_0x2db8a6]=_0x4e197f[_0x1c5b5e(0x19e)](_0x1c5b5e(0x182));_0x57c59a(_0x2db8a6,_0x1025c3),_0x30aeda(_0x1025c3);}finally{_0x286e60[_0x1c5b5e(0x1ad)][_0x1c5b5e(0x170)]=_0x30aeda;}};_0x286e60[_0x4934aa(0x18d)]={'consoleLog':(_0x59d10c,_0xdbe705)=>{var _0x42f196=_0x4934aa;_0x286e60['console'][_0x42f196(0x1a4)][_0x42f196(0x1d7)]!==_0x42f196(0x18f)&&_0x44510b(_0x1b72ac('log',_0x59d10c,_0x587aeb(),_0x5731f6,_0xdbe705));},'consoleTrace':(_0x5ae885,_0x2c92c5)=>{var _0x3706a6=_0x4934aa;_0x286e60[_0x3706a6(0x1ad)][_0x3706a6(0x1a4)][_0x3706a6(0x1d7)]!==_0x3706a6(0x1c5)&&_0x44510b(_0x1b72ac('trace',_0x5ae885,_0x587aeb(),_0x5731f6,_0x2c92c5));},'consoleTime':()=>{var _0x169253=_0x4934aa;_0x286e60[_0x169253(0x1ad)]['time']=_0x35091e(_0x286e60[_0x169253(0x1ad)][_0x169253(0x1cd)]);},'consoleTimeEnd':()=>{var _0x218684=_0x4934aa;_0x286e60[_0x218684(0x1ad)][_0x218684(0x170)]=_0x6a42e3(_0x286e60['console']['timeEnd']);},'autoLog':(_0x2d8fba,_0x2f3a42)=>{var _0x5b8014=_0x4934aa;_0x44510b(_0x1b72ac(_0x5b8014(0x1a4),_0x2f3a42,_0x587aeb(),_0x5731f6,[_0x2d8fba]));},'autoLogMany':(_0x15bced,_0xb0778)=>{var _0x54901e=_0x4934aa;_0x44510b(_0x1b72ac(_0x54901e(0x1a4),_0x15bced,_0x587aeb(),_0x5731f6,_0xb0778));},'autoTrace':(_0x31f390,_0x13ce3a)=>{var _0x49313e=_0x4934aa;_0x44510b(_0x1b72ac(_0x49313e(0x12e),_0x13ce3a,_0x587aeb(),_0x5731f6,[_0x31f390]));},'autoTraceMany':(_0x172d93,_0x4bc431)=>{var _0x3375f5=_0x4934aa;_0x44510b(_0x1b72ac(_0x3375f5(0x12e),_0x172d93,_0x587aeb(),_0x5731f6,_0x4bc431));},'autoTime':(_0x4eb614,_0xcaed47,_0x545aa6)=>{_0x1b1e6b(_0x545aa6);},'autoTimeEnd':(_0x4ff496,_0x55180c,_0x50a20f)=>{_0x57c59a(_0x55180c,_0x50a20f);},'coverage':_0x5d797e=>{var _0x2ead12=_0x4934aa;_0x44510b({'method':_0x2ead12(0x189),'version':_0x5ca465,'args':[{'id':_0x5d797e}]});}};let _0x44510b=b(_0x286e60,_0x143385,_0x33d862,_0x140af9,_0x3f48b2,_0x3f3d25),_0x5731f6=_0x286e60[_0x4934aa(0x201)];return _0x286e60[_0x4934aa(0x18d)];})(globalThis,'127.0.0.1','51528',_0xcad5d2(0x16b),_0xcad5d2(0x162),'1.0.0',_0xcad5d2(0x190),_0xcad5d2(0x14a),_0xcad5d2(0x20b),_0xcad5d2(0x1fa));`);
  } catch {
  }
}
function oo_oo3(i, ...v) {
  try {
    oo_cm3().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/routes/api.user.tsx
var api_user_exports = {};
__export(api_user_exports, {
  action: () => action4,
  loader: () => loader9
});
var loader9 = async ({ request }) => ({ users: await getUsers() }), action4 = async ({ request }) => {
  let formdata = await request.formData(), nickname = formdata.get("nickname"), id = formdata.get("id"), allow = formdata.get("allow");
  switch (formdata.get("action")) {
    case "change_nickname":
      return await updateUserNickname(id, nickname);
    case "change_categories":
      let category = formdata.get("category");
      return await updateUserCategory(id, category);
    case "change_allow_assign":
      return await updateUserAssign(id, allow === "true");
    case "change_reviewer":
      let reviewer_name = formdata.get("reviewer");
      return await updateUserReviewer(id, reviewer_name);
    case "change_role":
      let role = formdata.get("role");
      return await updateUserRole(id, role);
    case "remove_user":
      let username = formdata.get("username");
      return await removeUser(username);
  }
  return null;
};

// app/routes/api.word.tsx
var api_word_exports = {};
__export(api_word_exports, {
  loader: () => loader10
});
var loader10 = async ({ request }) => {
  let sentence = new URL(request.url).searchParams.get("sentence"), dakjeurl = "https://dakje.io/api/tokenize", body = JSON.stringify({
    content: sentence
  });
  return (await (await fetch(dakjeurl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
      // Set the content type based on your API requirements
    },
    body
  })).json()).words.map((item) => item.form).join(" ");
};

// app/routes/health.tsx
var health_exports = {};
__export(health_exports, {
  loader: () => loader11
});
var import_node6 = require("@remix-run/node"), loader11 = async () => (0, import_node6.json)(
  { status: "ok" },
  {
    status: 200
  }
);

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index2,
  loader: () => loader12,
  meta: () => meta2
});
var import_node7 = require("@remix-run/node"), import_react39 = require("react"), import_react40 = require("@remix-run/react");

// app/components/Sidebar.tsx
var import_react36 = require("@remix-run/react"), import_react37 = require("react");
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function Sidebar({ user, text, history }) {
  var _a, _b, _c;
  let [openMenu, setOpenMenu] = (0, import_react37.useState)(!1), navigate = (0, import_react36.useNavigate)(), handleDashboradLink = () => {
    navigate(`/admin/user?session=${user == null ? void 0 : user.username}`);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex flex-col border-r", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: " flex px-2 py-3 capitalize bg-white dark:text-white dark:bg-gray-600 text-lg font-semibold items-center  gap-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { onClick: () => setOpenMenu((p) => !p), className: "block md:hidden", children: openMenu ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Crossburger, {}, void 0, !1, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 29,
        columnNumber: 40
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Hamburger, {}, void 0, !1, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 29,
        columnNumber: 24
      }, this) }, void 0, !1, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      toolname
    ] }, void 0, !0, {
      fileName: "app/components/Sidebar.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
      "div",
      {
        className: `flex flex-col bg-white dark:text-white  dark:bg-[#54606e] overflow-y-auto overflow-x-hidden max-h-[100vh] transition-all -translate-x-full z-30 ${openMenu ? "block translate-x-0" : ""} min-h-[100vh] w-[260px] md:translate-x-0`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "px-2 flex gap-2 flex-col  mb-3 pb-2 mt-2 ", children: [
            ((user == null ? void 0 : user.role) === "ADMIN" || (user == null ? void 0 : user.role) === "REVIEWER") && /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
              import_react36.NavLink,
              {
                to: `/admin/user?session=${user == null ? void 0 : user.username}`,
                type: "button",
                onClick: handleDashboradLink,
                className: "decoration-0 bg-gray-200 hover:bg-gray-100 dark:text-white dark:bg-gray-500 h-fit px-2 py-1 rounded-sm border-b",
                children: [
                  user == null ? void 0 : user.role,
                  " DASHBOARD"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/Sidebar.tsx",
                lineNumber: 40,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(TextInfo, { children: [
              "User : ",
              user == null ? void 0 : user.username.split("@")[0]
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 49,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(TextInfo, { children: [
              "text id :",
              text == null ? void 0 : text.id
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 50,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(TextInfo, { children: [
              "Batch : ",
              text == null ? void 0 : text.batch
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 51,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(TextInfo, { children: [
              "Approved : ",
              user == null ? void 0 : user.text
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 52,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(TextInfo, { children: [
              "Rejected :",
              (_a = user == null ? void 0 : user.rejected_list) == null ? void 0 : _a.length
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 53,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(TextInfo, { children: [
              "Reviewed : ",
              (_b = user == null ? void 0 : user._count) == null ? void 0 : _b.text
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 54,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex-1 border-t", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "text-sm mb-2 font-bold pl-2", children: "History" }, void 0, !1, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 57,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex flex-col gap-2 max-h-fit overflow-y-auto", children: [
              (_c = user == null ? void 0 : user.rejected_list) == null ? void 0 : _c.map((text2) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
                HistoryItem,
                {
                  user,
                  id: text2 == null ? void 0 : text2.id,
                  onClick: () => setOpenMenu(!1),
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Cross, {}, void 0, !1, {
                    fileName: "app/components/Sidebar.tsx",
                    lineNumber: 65,
                    columnNumber: 23
                  }, this)
                },
                text2.id + "-rejected",
                !1,
                {
                  fileName: "app/components/Sidebar.tsx",
                  lineNumber: 60,
                  columnNumber: 15
                },
                this
              )),
              history == null ? void 0 : history.map((text2) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
                HistoryItem,
                {
                  user,
                  id: parseInt(text2),
                  onClick: () => setOpenMenu(!1),
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex items-center justify-between flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Tick, {}, void 0, !1, {
                    fileName: "app/components/Sidebar.tsx",
                    lineNumber: 77,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "app/components/Sidebar.tsx",
                    lineNumber: 76,
                    columnNumber: 19
                  }, this)
                },
                text2 + "-accepted",
                !1,
                {
                  fileName: "app/components/Sidebar.tsx",
                  lineNumber: 70,
                  columnNumber: 15
                },
                this
              ))
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 58,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 33,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Sidebar.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
var Sidebar_default = Sidebar;

// node_modules/@uidotdev/usehooks/index.js
var React6 = __toESM(require("react"), 1);
function throttle(cb, ms) {
  let lastTime = 0;
  return () => {
    let now = Date.now();
    now - lastTime >= ms && (cb(), lastTime = now);
  };
}
function useIdle(ms = 1e3 * 60) {
  let [idle, setIdle] = React6.useState(!1);
  return React6.useEffect(() => {
    let timeoutId, handleTimeout = () => {
      setIdle(!0);
    }, handleEvent = throttle((e) => {
      setIdle(!1), window.clearTimeout(timeoutId), timeoutId = window.setTimeout(handleTimeout, ms);
    }, 500), handleVisibilityChange = () => {
      document.hidden || handleEvent();
    };
    return timeoutId = window.setTimeout(handleTimeout, ms), window.addEventListener("mousemove", handleEvent), window.addEventListener("mousedown", handleEvent), window.addEventListener("resize", handleEvent), window.addEventListener("keydown", handleEvent), window.addEventListener("touchstart", handleEvent), window.addEventListener("wheel", handleEvent), document.addEventListener("visibilitychange", handleVisibilityChange), () => {
      window.removeEventListener("mousemove", handleEvent), window.removeEventListener("mousedown", handleEvent), window.removeEventListener("resize", handleEvent), window.removeEventListener("keydown", handleEvent), window.removeEventListener("touchstart", handleEvent), window.removeEventListener("wheel", handleEvent), document.removeEventListener("visibilitychange", handleVisibilityChange), window.clearTimeout(timeoutId);
    };
  }, [ms]), idle;
}

// app/components/ActiveUser.tsx
var import_react38 = require("react"), import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function ActiveUser({ active, setActive }) {
  let idle = useIdle(5e3), timer = null;
  return (0, import_react38.useEffect)(() => (idle || (timer = setInterval(() => {
    setActive((prev) => prev + 1);
  }, 1e3)), () => clearInterval(timer)), [idle]), /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { className: idle ? "idle" : "" }, void 0, !1, {
      fileName: "app/components/ActiveUser.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("label", { children: [
      "Status: ",
      idle ? "idle" : active + " s"
    ] }, void 0, !0, {
      fileName: "app/components/ActiveUser.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ActiveUser.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime"), loader12 = async ({ request }) => {
  let url = new URL(request.url), session = url.searchParams.get("session"), history = url.searchParams.get("history") || null;
  if (session) {
    let user = await createUserIfNotExists(session), text = null;
    return user.allow_assign && (text = await getTextToDisplay(user == null ? void 0 : user.id, history)), { text, user, history };
  } else
    return (0, import_node7.redirect)("https://pecha.tools");
}, meta2 = () => [
  { title: "Pecha Tools" },
  { name: "description", content: "Word segmentation" },
  {
    keywords: "pecha,tools,word,segmentation,pecha tools,pecha tools word segmentation"
  }
];
function Index2() {
  var _a;
  let fetcher = (0, import_react40.useFetcher)(), { user, text, error: error2 } = (0, import_react40.useLoaderData)(), socket = useSocket(), revalidate = (0, import_react40.useRevalidator)(), [history, setHistory] = (0, import_react39.useState)([]), [searchParams] = (0, import_react40.useSearchParams)(), id = text == null ? void 0 : text.id, textContent = (text == null ? void 0 : text.original_text.trim()) || "", html = insertHtmlOnText_default(textContent), editor = useEditorTiptap(html), [activeTime, setActiveTime] = (0, import_react39.useState)(0);
  (0, import_react39.useEffect)(() => {
    socket && (socket.on("change-allow", (data) => {
      data.user.id === user.id && revalidate.revalidate();
    }), socket.on("reviewed", (data) => {
      data.user.id === user.id && revalidate.revalidate();
    }));
  }, [socket]);
  let saveText2 = async () => {
    let duration = activeTime, modified_text = editor.getText();
    fetcher.submit(
      { id, modified_text, userId: user.id, duration },
      { method: "POST", action: "/api/text" }
    ), socket == null || socket.emit("text-status-changed", { user }), setActiveTime(0), !searchParams.get("history") && setHistory([...history, id]);
  }, undoTask = async () => {
    let temptext = checkUnknown_default(insertHtmlOnText_default(text == null ? void 0 : text.original_text));
    editor == null || editor.commands.setContent(temptext);
  }, rejectTask = async () => {
    fetcher.submit(
      { id, userId: user.id, _action: "reject" },
      { method: "PATCH", action: "/api/text" }
    ), socket == null || socket.emit("text-status-changed", { user }), setActiveTime(0);
  }, isButtonDisabled = !text || text.reviewed || fetcher.state !== "idle";
  return error2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: error2 }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 103,
    columnNumber: 21
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex flex-col md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Sidebar_default, { user, text, history }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex-1 flex items-center flex-col md:mt-[3vh] ", children: [
      ((_a = user == null ? void 0 : user.rejected_list) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "text-red-500 flex items-center gap-2 font-bold", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
          "img",
          {
            src: "/assets/notification.gif",
            alt: "notification ",
            className: "w-8 h-8"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 112,
            columnNumber: 13
          },
          this
        ),
        "SOME OF YOUR WORK IS REJECTED"
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 111,
        columnNumber: 11
      }, this),
      text ? /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "fixed top-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex items-center justify-between opacity-75 text-sm font-bold px-2 capitalize pt-1 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(ActiveUser, { active: activeTime, setActive: setActiveTime }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 134,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: "transcript" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 135,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this),
        !editor && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: "loading..." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 137,
          columnNumber: 25
        }, this),
        fetcher.state !== "idle" && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "w-full flex justify-center items-center", children: "saving..." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 139,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Editor_default, { editor }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 143,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "fixed top-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm text-center py-4", children: [
        !user.allow_assign && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "font-bold first-letter:uppercase first-letter:text-red-400", children: "A single work must have been rejected 3 times or more . please contact admin ." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 123,
          columnNumber: 15
        }, this),
        "Thank you . your work is complete ! \u{1F60A}\u{1F60A}\u{1F60A}",
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this),
      text && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex gap-2 fixed bottom-0 justify-center ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
          Button_default,
          {
            disabled: isButtonDisabled,
            handleClick: saveText2,
            value: "CONFIRM",
            title: "CONFIRM (a)",
            shortCut: "a"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 148,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
          Button_default,
          {
            disabled: isButtonDisabled,
            handleClick: rejectTask,
            value: "REJECT",
            title: "REJECT (x)",
            shortCut: "x"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 155,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
          Button_default,
          {
            disabled: isButtonDisabled,
            handleClick: undoTask,
            value: "UNDO",
            title: "UNDO (backspace)",
            shortCut: "Backspace"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 163,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}

// app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => admin_default,
  loader: () => loader13
});
var import_react45 = require("react");

// app/components/admin/Header.tsx
var import_react_router_dom2 = require("react-router-dom");

// app/components/Dropdowns/DropdownUser.tsx
var import_react41 = require("react"), import_jsx_dev_runtime30 = require("react/jsx-dev-runtime"), DropdownUser = ({ user }) => {
  let [dropdownOpen, setDropdownOpen] = (0, import_react41.useState)(!1), trigger = (0, import_react41.useRef)(null), dropdown = (0, import_react41.useRef)(null);
  return (0, import_react41.useEffect)(() => {
    let clickHandler = ({ target }) => {
      dropdown.current && (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target) || setDropdownOpen(!1));
    };
    return document.addEventListener("click", clickHandler), () => document.removeEventListener("click", clickHandler);
  }), (0, import_react41.useEffect)(() => {
    let keyHandler = ({ keyCode }) => {
      !dropdownOpen || keyCode !== 27 || setDropdownOpen(!1);
    };
    return document.addEventListener("keydown", keyHandler), () => document.removeEventListener("keydown", keyHandler);
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
    "div",
    {
      ref: trigger,
      onClick: () => setDropdownOpen(!dropdownOpen),
      className: "flex items-center gap-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { className: "hidden text-right lg:block", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { className: "block text-sm font-medium text-black dark:text-white", children: user.username }, void 0, !1, {
            fileName: "app/components/Dropdowns/DropdownUser.tsx",
            lineNumber: 45,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { className: "block text-xs", children: user.role }, void 0, !1, {
            fileName: "app/components/Dropdowns/DropdownUser.tsx",
            lineNumber: 48,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Dropdowns/DropdownUser.tsx",
          lineNumber: 44,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
          "img",
          {
            className: "w-10 h-10 rounded-full",
            src: user == null ? void 0 : user.picture,
            alt: "avatar"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Dropdowns/DropdownUser.tsx",
            lineNumber: 51,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Dropdowns/DropdownUser.tsx",
          lineNumber: 50,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Dropdowns/DropdownUser.tsx",
      lineNumber: 39,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Dropdowns/DropdownUser.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}, DropdownUser_default = DropdownUser;

// app/components/Progress.tsx
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function Progress({ current, max }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
    "div",
    {
      className: "tooltip tooltip-bottom flex flex-col",
      "data-tip": `${current} / ${max}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "self-start", children: "Progress" }, void 0, !1, {
          fileName: "app/components/Progress.tsx",
          lineNumber: 12,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
          "progress",
          {
            className: "progress progress-success w-56",
            max,
            value: current
          },
          void 0,
          !1,
          {
            fileName: "app/components/Progress.tsx",
            lineNumber: 13,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Progress.tsx",
      lineNumber: 8,
      columnNumber: 5
    },
    this
  );
}
var Progress_default = Progress;

// app/components/admin/Header.tsx
var import_react42 = require("@remix-run/react");
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), Header = (props) => {
  let { progress, user } = (0, import_react42.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("header", { className: "sticky top-0 z-10 flex w-full bg-white dark:bg-slate-600  drop-shadow-1 shadow-lg dark:bg-boxdark dark:drop-shadow-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex items-center gap-2 sm:gap-4 lg:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
        "button",
        {
          "aria-controls": "sidebar",
          onClick: (e) => {
            e.stopPropagation(), props.setSidebarOpen(!props.sidebarOpen);
          },
          className: "z-10 block rounded-sm   bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Hamburger, {}, void 0, !1, {
            fileName: "app/components/admin/Header.tsx",
            lineNumber: 25,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/admin/Header.tsx",
          lineNumber: 17,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react_router_dom2.Link, { className: "block flex-shrink-0 lg:hidden", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
        "img",
        {
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAMAAAA3HE0QAAAAbFBMVEVHcEz39/Ty9PT09fT09vTz9fT19vT19vT19vT09fT29vTz9PT09PQB4OwS4Oz5+PXx9PSOV/GPT/GISPGtjvJJ4+7V8vO7ofM2yO7Y0POX6fDk4fRyf/Bnk+945++97vKw7PHNxfOZa/FWre6PD8yrAAAADXRSTlMAkxaK61FwvtQspaytT92LgAAAAX9JREFUKJFlU9mCgjAMLIdcbklooYAocvz/P26SlhXZeRGTyT1V6g9lFlVVlJX8G2WxuiABcO9lWRxM47qOCOnt7M4AH7X2GJ6W0E6Qf/wFPLSuD+ihMY2xPaSHP8Xu42aGfpqmsS0UIR5rLWY9DLXP5Bk9ZL49idez660xzS4U3RDshOSPqT6HOwDLVpR6eqAUpgUa5Y4S4QBXItgRUDLqFxeBSimf4E32nkwbIAJyG5zCToW6MV93bG9puJ4+EBaOYcKYqgRDghMB4UTIHf8RaxtKoHThS+SqeDMBDgJNxp+zDk0mVwKNCUIIY5bXEoQRADqOlyFUJE0u8CFYs21G/D0luIx5Bh1LTuEXRSmEYGxw87kTuWV+rNrvYd3oYoTnCkFSpaTgXflFwbTv+0BFy0Mu93DuTghu9sLDk+DSIBgSiXkFwTg8KTYOEvCE2ovjS/ZxyqI9CFrPiNdnUbHsWe5UYnbwc301NEsOgPxiaNy8/O9n3KK8KPLo9m39BSxbLfLikfdbAAAAAElFTkSuQmCC",
          alt: "Logo"
        },
        void 0,
        !1,
        {
          fileName: "app/components/admin/Header.tsx",
          lineNumber: 30,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/admin/Header.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/Header.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Progress_default, { max: progress.total, current: progress.reviewed }, void 0, !1, {
      fileName: "app/components/admin/Header.tsx",
      lineNumber: 40,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/Header.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex items-center gap-3 2xsm:gap-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(DropdownUser_default, { user }, void 0, !1, {
      fileName: "app/components/admin/Header.tsx",
      lineNumber: 44,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/Header.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/Header.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/admin/Header.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}, Header_default = Header;

// app/routes/admin.tsx
var import_react46 = require("@remix-run/react");

// app/components/admin/Sidebar.tsx
var import_react43 = require("react"), import_react44 = require("@remix-run/react");
var import_bi2 = require("react-icons/bi");
var import_fi3 = require("react-icons/fi"), import_ai2 = require("react-icons/ai"), import_hi = require("react-icons/hi"), import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
function Sidebar2({ sidebarOpen, setSidebarOpen }) {
  let sidebar = (0, import_react43.useRef)(null), trigger = (0, import_react43.useRef)(null), { pathname } = (0, import_react44.useLocation)(), { user } = (0, import_react44.useLoaderData)(), url = "/?session=" + (user == null ? void 0 : user.username);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
    "aside",
    {
      ref: sidebar,
      className: ` absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden text-white bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react44.NavLink, { to: url, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("h3", { className: "mb-2 text-2xl pt-4 font-semibold text-bodydark2 capitalize", children: toolname }, void 0, !1, {
            fileName: "app/components/admin/Sidebar.tsx",
            lineNumber: 29,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/admin/Sidebar.tsx",
            lineNumber: 28,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
            "button",
            {
              ref: trigger,
              onClick: () => setSidebarOpen(!sidebarOpen),
              "aria-controls": "sidebar",
              "aria-expanded": sidebarOpen,
              className: "block lg:hidden",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Hamburger, {}, void 0, !1, {
                fileName: "app/components/admin/Sidebar.tsx",
                lineNumber: 41,
                columnNumber: 11
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/admin/Sidebar.tsx",
              lineNumber: 34,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/admin/Sidebar.tsx",
          lineNumber: 27,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("nav", { className: "mt-5 py-4 px-2 lg:mt-9 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "text-xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
            import_react44.NavLink,
            {
              to: `/admin/metabase?session=${user.username}`,
              className: `group relative flex mb-3 items-center gap-2.5 rounded-sm py-2  font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("metabase") && "bg-slate-600 dark:bg-meta-4 "}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_bi2.BiSolidDashboard, {}, void 0, !1, {
                  fileName: "app/components/admin/Sidebar.tsx",
                  lineNumber: 53,
                  columnNumber: 15
                }, this),
                "Dashboard"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/admin/Sidebar.tsx",
              lineNumber: 47,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("h3", { className: "mb-4 text-sm font-semibold text-gray-400", children: "MENU" }, void 0, !1, {
            fileName: "app/components/admin/Sidebar.tsx",
            lineNumber: 56,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("ul", { className: "mt-4 mb-5.5 flex flex-col gap-2.5 pl-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
              import_react44.NavLink,
              {
                to: "/admin/user?session=" + user.username,
                className: ({ isActive }) => "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " + (isActive && "!text-white bg-slate-600 dark:bg-meta-4"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_fi3.FiUsers, {}, void 0, !1, {
                    fileName: "app/components/admin/Sidebar.tsx",
                    lineNumber: 67,
                    columnNumber: 19
                  }, this),
                  " User"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/admin/Sidebar.tsx",
                lineNumber: 60,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/admin/Sidebar.tsx",
              lineNumber: 59,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
              import_react44.NavLink,
              {
                to: "/admin/text?session=" + user.username,
                className: ({ isActive }) => "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " + (isActive && "!text-white  bg-slate-600 dark:bg-meta-4"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_ai2.AiOutlineFileText, {}, void 0, !1, {
                    fileName: "app/components/admin/Sidebar.tsx",
                    lineNumber: 78,
                    columnNumber: 19
                  }, this),
                  " Text"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/admin/Sidebar.tsx",
                lineNumber: 71,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/admin/Sidebar.tsx",
              lineNumber: 70,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
              import_react44.NavLink,
              {
                to: "/admin/report?session=" + user.username,
                className: ({ isActive }) => "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " + (isActive && "!text-white  bg-slate-600 dark:bg-meta-4"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_hi.HiDocumentReport, {}, void 0, !1, {
                    fileName: "app/components/admin/Sidebar.tsx",
                    lineNumber: 89,
                    columnNumber: 19
                  }, this),
                  " Report"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/admin/Sidebar.tsx",
                lineNumber: 82,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/admin/Sidebar.tsx",
              lineNumber: 81,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/Sidebar.tsx",
            lineNumber: 58,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/Sidebar.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/Sidebar.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/Sidebar.tsx",
          lineNumber: 44,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/admin/Sidebar.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  );
}
var Sidebar_default2 = Sidebar2;

// app/routes/admin.tsx
var import_node8 = require("@remix-run/node");
var import_react47 = require("@remix-run/react"), import_jsx_dev_runtime34 = require("react/jsx-dev-runtime"), loader13 = async ({ request }) => {
  let session = new URL(request.url).searchParams.get("session");
  if (!session)
    return (0, import_node8.redirect)("/error");
  let user = await getUser(session), progress = await getProgress();
  return (0, import_node8.json)({
    user,
    progress
  });
}, DefaultLayout = () => {
  let [sidebarOpen, setSidebarOpen] = (0, import_react45.useState)(!1), { pathname } = (0, import_react46.useLocation)(), { user } = (0, import_react46.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "dark:bg-boxdark-2 dark:text-bodydark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex h-screen overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Sidebar_default2, { sidebarOpen, setSidebarOpen }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Header_default, { sidebarOpen, setSidebarOpen }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
        "div",
        {
          className: `mx-auto max-w-screen-2xl  ${pathname.includes("metabase") ? "p-0" : " p-4 md:p-6 2xl:p-10"}`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react46.Outlet, { context: user }, void 0, !1, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 37,
            columnNumber: 15
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin.tsx",
          lineNumber: 32,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};
function ErrorBoundary2() {
  let error2 = (0, import_react47.useRouteError)();
  return (0, import_react47.isRouteErrorResponse)(error2) ? /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("h1", { children: "Oops" }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("p", { children: [
      "Status: ",
      error2.status
    ] }, void 0, !0, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("p", { children: error2.data.message }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 52,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("h1", { children: "Uh oh ..." }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("p", { children: "Something went wrong." }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("pre", { children: "Unknown error" }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
}
var admin_default = DefaultLayout;

// app/routes/error.tsx
var error_exports = {};
__export(error_exports, {
  default: () => error_default,
  loader: () => loader14
});
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), loader14 = () => null;
function error() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { children: "error no session ,require session to continue" }, void 0, !1, {
    fileName: "app/routes/error.tsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
var error_default = error;

// app/routes/demo.tsx
var demo_exports = {};
__export(demo_exports, {
  default: () => demo_default,
  loader: () => loader15
});
var import_react49 = require("@tiptap/react"), import_starter_kit2 = __toESM(require("@tiptap/starter-kit")), import_react50 = require("react");

// app/components/demo/Sidebar.tsx
var import_react48 = require("react");
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime");
function Sidebar3({ user, text, setHistory }) {
  var _a, _b, _c, _d;
  let [openMenu, setOpenMenu] = (0, import_react48.useState)(!1);
  function SidebarHeader() {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex bg-[#384451] px-2 py-3 items-center justify-between md:hidden ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { children: "About" }, void 0, !1, {
        fileName: "app/components/demo/Sidebar.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "cursor-pointer p-2", onClick: () => setOpenMenu(!1), children: "x" }, void 0, !1, {
        fileName: "app/components/demo/Sidebar.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/demo/Sidebar.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
      "div",
      {
        className: " flex px-2 py-3 text-white bg-gray-600 text-lg font-semibold items-center  gap-2 ",
        onClick: () => setOpenMenu(!0),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Hamburger, {}, void 0, !1, {
            fileName: "app/components/demo/Sidebar.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          toolname
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/demo/Sidebar.tsx",
        lineNumber: 29,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
      "div",
      {
        className: `flex flex-col text-white bg-[#54606e] overflow-y-auto overflow-x-hidden max-h-[100vh] transition-all -translate-x-full z-30 ${openMenu ? "block translate-x-0" : ""} min-h-[100vh] w-[260px] md:translate-x-0`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "px-2 flex gap-2 flex-col border-b-2 border-b-[#384451] mb-3 pb-2 mt-2 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(SidebarHeader, {}, void 0, !1, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(TextInfo, { children: [
              "User : ",
              user == null ? void 0 : user.username
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 43,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(TextInfo, { children: [
              "text id :",
              text == null ? void 0 : text.id
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 44,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(TextInfo, { children: [
              "Batch : ",
              text == null ? void 0 : text.batch
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 45,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(TextInfo, { children: [
              "Approved : ",
              (_a = user == null ? void 0 : user.text) == null ? void 0 : _a.length
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(TextInfo, { children: [
              "Rejected :",
              (_b = user == null ? void 0 : user.rejected_list) == null ? void 0 : _b.length
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(TextInfo, { children: [
              "Ignored : ",
              (_c = user == null ? void 0 : user.ignored_list) == null ? void 0 : _c.length
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 48,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(TextInfo, { children: [
              "Reviewed : ",
              (_d = user == null ? void 0 : user.text.filter((r) => r.reviewed)) == null ? void 0 : _d.length
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 49,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/demo/Sidebar.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "text-sm mb-2 font-bold", children: "History" }, void 0, !1, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 54,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex flex-col gap-2 max-h-[30vh] overflow-y-auto", children: [
              user && (user.rejected_list || user.text) && ((user == null ? void 0 : user.rejected_list) || []).sort(sortUpdate_reviewed).map((text2) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
                DemoHistoryItem,
                {
                  user,
                  id: text2 == null ? void 0 : text2.id,
                  onClick: () => {
                    setOpenMenu(!1), setHistory(text2.id);
                  },
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Cross, {}, void 0, !1, {
                    fileName: "app/components/demo/Sidebar.tsx",
                    lineNumber: 69,
                    columnNumber: 27
                  }, this)
                },
                text2.id + "-accepted",
                !1,
                {
                  fileName: "app/components/demo/Sidebar.tsx",
                  lineNumber: 61,
                  columnNumber: 19
                },
                this
              )),
              ((user == null ? void 0 : user.text) || []).sort(sortUpdate_reviewed).map((text2) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
                DemoHistoryItem,
                {
                  user,
                  id: text2 == null ? void 0 : text2.id,
                  onClick: () => {
                    setOpenMenu(!1), setHistory(text2.id);
                  },
                  disabled: text2 == null ? void 0 : text2.reviewed,
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex items-center justify-between flex-1", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Tick, {}, void 0, !1, {
                      fileName: "app/components/demo/Sidebar.tsx",
                      lineNumber: 86,
                      columnNumber: 23
                    }, this),
                    (text2 == null ? void 0 : text2.reviewed) && /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("span", { children: "reviewed" }, void 0, !1, {
                      fileName: "app/components/demo/Sidebar.tsx",
                      lineNumber: 87,
                      columnNumber: 42
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/demo/Sidebar.tsx",
                    lineNumber: 85,
                    columnNumber: 21
                  }, this)
                },
                text2.id + "-rejected",
                !1,
                {
                  fileName: "app/components/demo/Sidebar.tsx",
                  lineNumber: 75,
                  columnNumber: 17
                },
                this
              ))
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 55,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/demo/Sidebar.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/demo/Sidebar.tsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/demo/Sidebar.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
var Sidebar_default3 = Sidebar3;

// app/routes/demo.tsx
var import_react51 = require("@remix-run/react");
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime"), loader15 = async ({ request }) => {
  let url = new URL(request.url);
  return { text: await db.text.findMany({
    take: 10,
    select: { original_text: !0, id: !0 }
  }) };
};
function DemoPage() {
  let { text } = (0, import_react51.useLoaderData)(), [text_Array, setTextArray] = (0, import_react50.useState)(text), [user, setUser] = (0, import_react50.useState)({
    username: "demo",
    role: "USER",
    text: [],
    rejected_list: [],
    ignored_list: []
  }), [history, setHistory] = (0, import_react50.useState)(null), dialogref = (0, import_react50.useRef)(null), content = text_Array.find(
    (i) => ![...user.text, ...user.rejected_list].find((j) => j.id == i.id)
  ) || null;
  history && (content = user.text.find((i) => i.id === history) || text_Array.find((i) => i.id == history));
  let original_text = content.content || (content == null ? void 0 : content.original_text.trim()), insertHTML = insertHtmlOnText_default(original_text), setter = () => {
  }, charClick = () => {
  }, editor = (0, import_react49.useEditor)(
    {
      extensions: [import_starter_kit2.default, Space(setter), Character(charClick)],
      content: insertHTML,
      editorProps,
      editable: !1
    },
    [insertHTML]
  ), saveText2 = () => {
    let content_text = editor == null ? void 0 : editor.getText();
    history ? (user.rejected_list.some((item) => item.id === history) && setUser((prev) => ({
      ...prev,
      rejected_list: prev.rejected_list.filter(
        (item) => item.id != history
      ),
      text: [...prev.text, { id: history, content: content_text }]
    })), setHistory(null)) : (setUser({
      ...user,
      text: [...user.text, { id: content.id, content: content_text }]
    }), setHistory(null));
  }, rejectTask = () => {
    history ? (user.text.some((item) => item.id === history) && setUser((prev) => ({
      ...prev,
      text: prev.text.filter((item) => item.id != history),
      rejected_list: [...prev.rejected_list, { id: history }]
    })), setHistory(null)) : (setUser({
      ...user,
      rejected_list: [...user.rejected_list, { id: content.id }]
    }), setHistory(null));
  }, undoTask = () => {
    let text2 = insertHtmlOnText_default(content.original_text);
    editor == null || editor.commands.setContent(text2);
  }, { Modal, Toggle_Modal } = useModal_default();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex flex-col md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Sidebar_default3, { user, text, setHistory }, void 0, !1, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex-1 flex items-center flex-col md:mt-[10vh] ", children: [
      content ? /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "fixed bottom-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex items-center justify-between opacity-75 text-sm font-bold px-2 capitalize pt-1 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: "transcript" }, void 0, !1, {
            fileName: "app/routes/demo.tsx",
            lineNumber: 124,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Toggle_Modal, { className: "cursor-pointer", children: "reference" }, void 0, !1, {
            fileName: "app/routes/demo.tsx",
            lineNumber: 126,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Modal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
            "iframe",
            {
              className: "w-full h-[80vh]",
              src: "https://docs.google.com/spreadsheets/d/1ZdkguvvvWiqZoEh4LLbceYsnHubBDpAAdi4DToFN9I0/edit?usp=sharing"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/demo.tsx",
              lineNumber: 128,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/demo.tsx",
            lineNumber: 127,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/demo.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this),
        editor ? /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Editor_default, { editor }, void 0, !1, {
          fileName: "app/routes/demo.tsx",
          lineNumber: 137,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: "loading..." }, void 0, !1, {
          fileName: "app/routes/demo.tsx",
          lineNumber: 135,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: "Thank you . your work is complete ! \u{1F60A}\u{1F60A}\u{1F60A}" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 120,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex gap-2 fixed bottom-0 justify-center ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
          Button_default,
          {
            disabled: !1,
            handleClick: saveText2,
            value: "CONFIRM",
            title: "CONFIRM (a)",
            shortCut: "a"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/demo.tsx",
            lineNumber: 142,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
          Button_default,
          {
            disabled: !1,
            handleClick: rejectTask,
            value: "REJECT",
            title: "REJECT (x)",
            shortCut: "x"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/demo.tsx",
            lineNumber: 149,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
          Button_default,
          {
            disabled: !1,
            handleClick: undoTask,
            value: "UNDO",
            title: "UNDO (backspace)",
            shortCut: "Backspace"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/demo.tsx",
            lineNumber: 156,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/demo.tsx",
    lineNumber: 115,
    columnNumber: 5
  }, this);
}
var demo_default = DemoPage;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-GKNIRVG4.js", imports: ["/build/_shared/chunk-JXHNNPNR.js", "/build/_shared/chunk-H36SQQE5.js", "/build/_shared/chunk-2BJBEIYL.js", "/build/_shared/chunk-WQFJ2CRD.js", "/build/_shared/chunk-TVZC3ZTX.js", "/build/_shared/chunk-FQLEIDJG.js", "/build/_shared/chunk-N4FG5RPV.js", "/build/_shared/chunk-RODUX5XG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-J3AEEHAH.js", imports: ["/build/_shared/chunk-NI7JAU6A.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-7URXGXLU.js", imports: ["/build/_shared/chunk-743PHSZZ.js", "/build/_shared/chunk-DODFZYYL.js", "/build/_shared/chunk-6T752PYK.js", "/build/_shared/chunk-GWY423AB.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-F3LZS3ZG.js", imports: ["/build/_shared/chunk-ISL7VQVN.js", "/build/_shared/chunk-6T752PYK.js", "/build/_shared/chunk-GWY423AB.js", "/build/_shared/chunk-TMJLOEVS.js", "/build/_shared/chunk-P6XXN3LH.js", "/build/_shared/chunk-CUO3Z73U.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/admin.metabase": { id: "routes/admin.metabase", parentId: "routes/admin", path: "metabase", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.metabase-4CSAPWUI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.report": { id: "routes/admin.report", parentId: "routes/admin", path: "report", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.report-EAWOSJQL.js", imports: ["/build/_shared/chunk-22IYJMTB.js", "/build/_shared/chunk-TIECZ337.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.text": { id: "routes/admin.text", parentId: "routes/admin", path: "text", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.text-AFFC3JOX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.user": { id: "routes/admin.user", parentId: "routes/admin", path: "user", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.user-YMNBIFRH.js", imports: ["/build/_shared/chunk-NI7JAU6A.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.user.$username": { id: "routes/admin.user.$username", parentId: "routes/admin.user", path: ":username", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.user.$username-ZAKPWIRJ.js", imports: ["/build/_shared/chunk-P6XXN3LH.js", "/build/_shared/chunk-CUO3Z73U.js", "/build/_shared/chunk-TIECZ337.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin_.user.review.$slug": { id: "routes/admin_.user.review.$slug", parentId: "root", path: "admin/user/review/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/admin_.user.review.$slug-MWJTSC46.js", imports: ["/build/_shared/chunk-F56ZNTZ2.js", "/build/_shared/chunk-743PHSZZ.js", "/build/_shared/chunk-DODFZYYL.js", "/build/_shared/chunk-6T752PYK.js", "/build/_shared/chunk-GWY423AB.js", "/build/_shared/chunk-TMJLOEVS.js", "/build/_shared/chunk-22IYJMTB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.text": { id: "routes/api.text", parentId: "root", path: "api/text", index: void 0, caseSensitive: void 0, module: "/build/routes/api.text-OYX5TFJP.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.text.$version": { id: "routes/api.text.$version", parentId: "routes/api.text", path: ":version", index: void 0, caseSensitive: void 0, module: "/build/routes/api.text.$version-ZB5WXGQ4.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.upload": { id: "routes/api.upload", parentId: "root", path: "api/upload", index: void 0, caseSensitive: void 0, module: "/build/routes/api.upload-GZ6WQ6KT.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.user": { id: "routes/api.user", parentId: "root", path: "api/user", index: void 0, caseSensitive: void 0, module: "/build/routes/api.user-OIUCC7WD.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.user.$username": { id: "routes/api.user.$username", parentId: "routes/api.user", path: ":username", index: void 0, caseSensitive: void 0, module: "/build/routes/api.user.$username-7X3ZS5IA.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.word": { id: "routes/api.word", parentId: "root", path: "api/word", index: void 0, caseSensitive: void 0, module: "/build/routes/api.word-CEAV37AZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demo": { id: "routes/demo", parentId: "root", path: "demo", index: void 0, caseSensitive: void 0, module: "/build/routes/demo-BNMDFO3W.js", imports: ["/build/_shared/chunk-F56ZNTZ2.js", "/build/_shared/chunk-DODFZYYL.js", "/build/_shared/chunk-6T752PYK.js", "/build/_shared/chunk-GWY423AB.js", "/build/_shared/chunk-22IYJMTB.js", "/build/_shared/chunk-TIECZ337.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/error": { id: "routes/error", parentId: "root", path: "error", index: void 0, caseSensitive: void 0, module: "/build/routes/error-PKRHG3KN.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/health": { id: "routes/health", parentId: "root", path: "health", index: void 0, caseSensitive: void 0, module: "/build/routes/health-FRTIOQQI.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "f4f13989", hmr: { runtime: "/build/_shared\\chunk-FQLEIDJG.js", timestamp: 1696772958909 }, url: "/build/manifest-F4F13989.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/admin_.user.review.$slug": {
    id: "routes/admin_.user.review.$slug",
    parentId: "root",
    path: "admin/user/review/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: admin_user_review_slug_exports
  },
  "routes/admin.user.$username": {
    id: "routes/admin.user.$username",
    parentId: "routes/admin.user",
    path: ":username",
    index: void 0,
    caseSensitive: void 0,
    module: admin_user_username_exports
  },
  "routes/api.user.$username": {
    id: "routes/api.user.$username",
    parentId: "routes/api.user",
    path: ":username",
    index: void 0,
    caseSensitive: void 0,
    module: api_user_username_exports
  },
  "routes/api.text.$version": {
    id: "routes/api.text.$version",
    parentId: "routes/api.text",
    path: ":version",
    index: void 0,
    caseSensitive: void 0,
    module: api_text_version_exports
  },
  "routes/admin.metabase": {
    id: "routes/admin.metabase",
    parentId: "routes/admin",
    path: "metabase",
    index: void 0,
    caseSensitive: void 0,
    module: admin_metabase_exports
  },
  "routes/admin.report": {
    id: "routes/admin.report",
    parentId: "routes/admin",
    path: "report",
    index: void 0,
    caseSensitive: void 0,
    module: admin_report_exports
  },
  "routes/admin.text": {
    id: "routes/admin.text",
    parentId: "routes/admin",
    path: "text",
    index: void 0,
    caseSensitive: void 0,
    module: admin_text_exports
  },
  "routes/admin.user": {
    id: "routes/admin.user",
    parentId: "routes/admin",
    path: "user",
    index: void 0,
    caseSensitive: void 0,
    module: admin_user_exports
  },
  "routes/api.upload": {
    id: "routes/api.upload",
    parentId: "root",
    path: "api/upload",
    index: void 0,
    caseSensitive: void 0,
    module: api_upload_exports
  },
  "routes/api.text": {
    id: "routes/api.text",
    parentId: "root",
    path: "api/text",
    index: void 0,
    caseSensitive: void 0,
    module: api_text_exports
  },
  "routes/api.user": {
    id: "routes/api.user",
    parentId: "root",
    path: "api/user",
    index: void 0,
    caseSensitive: void 0,
    module: api_user_exports
  },
  "routes/api.word": {
    id: "routes/api.word",
    parentId: "root",
    path: "api/word",
    index: void 0,
    caseSensitive: void 0,
    module: api_word_exports
  },
  "routes/health": {
    id: "routes/health",
    parentId: "root",
    path: "health",
    index: void 0,
    caseSensitive: void 0,
    module: health_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/error": {
    id: "routes/error",
    parentId: "root",
    path: "error",
    index: void 0,
    caseSensitive: void 0,
    module: error_exports
  },
  "routes/demo": {
    id: "routes/demo",
    parentId: "root",
    path: "demo",
    index: void 0,
    caseSensitive: void 0,
    module: demo_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
