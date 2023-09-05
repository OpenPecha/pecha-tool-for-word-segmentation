var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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

// empty-module:~/components/Editor.client
var require_Editor = __commonJS({
  "empty-module:~/components/Editor.client"(exports, module2) {
    module2.exports = {};
  }
});

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
  links: () => links
});
var import_react3 = require("@remix-run/react"), import_react4 = require("react");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-YQQSGNUM.css";

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
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: global_default },
  { rel: "stylesheet", href: dist_default }
];
function App() {
  let [socket, setSocket] = (0, import_react4.useState)();
  return (0, import_react4.useEffect)(() => {
    let socket2 = connect();
    return setSocket(socket2), () => {
      socket2.close();
    };
  }, []), (0, import_react4.useEffect)(() => {
    socket && socket.on("confirmation", (data) => {
    });
  }, [socket]), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "m-0 overflow-hidden font-[20px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SocketProvider, { socket, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error: error2 }) {
  return console.error(error2), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "Oh no!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

// app/routes/admin_.user.review.$slug.tsx
var admin_user_review_slug_exports = {};
__export(admin_user_review_slug_exports, {
  default: () => admin_user_review_slug_default,
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), import_react10 = require("@remix-run/react"), import_react11 = require("react"), import_react_router = require("react-router");

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
  }), textHTML;
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
  let existingUser = await db.user.findUnique({
    where: {
      username
    },
    include: {
      text: !0,
      ignored_list: !0,
      rejected_list: !0
    }
  });
  return existingUser || await db.user.create({
    data: {
      username,
      nickname: username.split("@")[0],
      role: "USER"
    },
    include: {
      text: !0
    }
  });
}, getUsers = async () => {
  try {
    return await db.user.findMany({
      include: {
        text: { select: { id: !0, status: !0, reviewed: !0 } },
        rejected_list: !0,
        ignored_list: !0,
        reviewer: !0
      }
    });
  } catch (e) {
    throw new Error(e);
  }
}, getUser = async (username, min) => {
  let include = min ? {
    text: { select: { id: !0, reviewed: !0 } },
    rejected_list: { select: { id: !0 } }
  } : { text: !0, rejected_list: !0 };
  try {
    return db.user.findUnique({
      where: {
        username
      },
      include
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
  let user = await db.user.findUnique({
    where: { id },
    select: {
      categories: !0
    }
  });
  if (!user)
    throw new Error("User not found");
  let currentCategories = user.categories || [], updatedCategories = currentCategories.includes(category) ? currentCategories.filter((c) => c !== category) : [...currentCategories, category];
  return db.user.update({
    where: { id },
    data: {
      categories: updatedCategories
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

// app/components/AdminHistorySidebar.tsx
var import_react6 = require("@remix-run/react"), import_react7 = require("react");

// app/components/TextInfo.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function TextInfo({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-white uppercase text-sm font-bold mb-2", children }, void 0, !1, {
    fileName: "app/components/TextInfo.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/History.tsx
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function HistoryItem({ id, user, onClick, icon, disabled }) {
  let { history } = (0, import_react5.useLoaderData)();
  return disabled ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "px-2 text-white flex gap-3 cursor-pointer hover:border-2 border-purple-800", children: [
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
      className: `px-2 flex gap-3 items-center ${history == id ? "bg-gray-700" : ""}`,
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
      className: "text-white flex gap-3 cursor-pointer hover:border-2 border-purple-800",
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
  return disabled ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-white flex gap-3 cursor-pointer hover:border-2 border-purple-800", children: [
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

// app/components/svgs/index.tsx
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
        fileName: "app/components/svgs/index.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/svgs/index.tsx",
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
            fileName: "app/components/svgs/index.tsx",
            lineNumber: 28,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/svgs/index.tsx",
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
            fileName: "app/components/svgs/index.tsx",
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
              fileName: "app/components/svgs/index.tsx",
              lineNumber: 46,
              columnNumber: 9
            },
            this
          ),
          " "
        ] }, void 0, !0, {
          fileName: "app/components/svgs/index.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/svgs/index.tsx",
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
        fileName: "app/components/svgs/index.tsx",
        lineNumber: 63,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/svgs/index.tsx",
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
        fileName: "app/components/svgs/index.tsx",
        lineNumber: 76,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/svgs/index.tsx",
      lineNumber: 69,
      columnNumber: 5
    },
    this
  );
}
function Right() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { "aria-hidden": "true", fill: "white", viewBox: "0 0 24 24", className: "c01125", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M9 16.172l10.594-10.594 1.406 1.406-12 12-5.578-5.578 1.406-1.406z" }, void 0, !1, {
    fileName: "app/components/svgs/index.tsx",
    lineNumber: 83,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/svgs/index.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
}
function Wrong() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { "aria-hidden": "true", fill: "white", viewBox: "0 0 24 24", className: "c01125", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z" }, void 0, !1, {
    fileName: "app/components/svgs/index.tsx",
    lineNumber: 91,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/svgs/index.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}
function Ignore() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { "aria-hidden": "true", fill: "white", viewBox: "0 0 24 24", className: "c01125", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M12 20.016c4.406 0 8.016-3.609 8.016-8.016 0-1.828-0.609-3.563-1.688-4.922l-11.25 11.25c1.359 1.078 3.094 1.688 4.922 1.688zM3.984 12c0 1.828 0.609 3.563 1.688 4.922l11.25-11.25c-1.359-1.078-3.094-1.688-4.922-1.688-4.406 0-8.016 3.609-8.016 8.016zM12 2.016c5.531 0 9.984 4.453 9.984 9.984s-4.453 9.984-9.984 9.984-9.984-4.453-9.984-9.984 4.453-9.984 9.984-9.984z" }, void 0, !1, {
    fileName: "app/components/svgs/index.tsx",
    lineNumber: 98,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/svgs/index.tsx",
    lineNumber: 97,
    columnNumber: 5
  }, this);
}
function Undo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { "aria-hidden": "true", fill: "white", viewBox: "0 0 24 24", className: "c01125", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M11.016 9l1.406 1.406-3.609 3.609h9.188v-10.031h2.016v12h-11.203l3.609 3.609-1.406 1.406-6-6z" }, void 0, !1, {
    fileName: "app/components/svgs/index.tsx",
    lineNumber: 105,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/svgs/index.tsx",
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
  var _a, _b, _c;
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
                to: `/admin?session=${data == null ? void 0 : data.user.username}`,
                className: "decoration-0 text-white bg-gray-500 h-fit px-2 py-1 ",
                children: "ADMIN"
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
              (_b = user == null ? void 0 : user.rejected_list) == null ? void 0 : _b.length
            ] }, void 0, !0, {
              fileName: "app/components/AdminHistorySidebar.tsx",
              lineNumber: 73,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TextInfo, { children: [
              "Reviewed : ",
              (_c = user == null ? void 0 : user.text.filter((r) => r.reviewed)) == null ? void 0 : _c.length
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
              lineNumber: 79,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col gap-2 max-h-fit overflow-y-auto", children: user && user.text && [...(user == null ? void 0 : user.text) || []].sort(sortUpdate_reviewed).map((text) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              AdminHistoryItem,
              {
                id: text == null ? void 0 : text.id,
                onClick: () => {
                  setOpenMenu(!1), setSelectedId(text == null ? void 0 : text.id);
                },
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Tick, {}, void 0, !1, {
                  fileName: "app/components/AdminHistorySidebar.tsx",
                  lineNumber: 93,
                  columnNumber: 27
                }, this),
                reviewed: text == null ? void 0 : text.reviewed,
                selectedId
              },
              text.id + "-accepted",
              !1,
              {
                fileName: "app/components/AdminHistorySidebar.tsx",
                lineNumber: 86,
                columnNumber: 19
              },
              this
            )) }, void 0, !1, {
              fileName: "app/components/AdminHistorySidebar.tsx",
              lineNumber: 80,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/AdminHistorySidebar.tsx",
            lineNumber: 78,
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

// app/routes/admin_.user.review.$slug.tsx
var import_remix_utils = require("remix-utils"), import_Editor = __toESM(require_Editor());

// app/components/Button.tsx
var import_react8 = require("react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Button({
  handleClick,
  value,
  disabled,
  title,
  shortCut,
  className
}) {
  let classbtn = "h-[100px] w-[100px]  cursor-pointer hover:opacity-80", innerValue = value, btnRef = (0, import_react8.useRef)(null);
  switch ((0, import_react8.useEffect)(() => {
    function handlekeyDown(e) {
      e.key === shortCut && btnRef.current.click();
    }
    return document.addEventListener("keydown", handlekeyDown), () => {
      document.removeEventListener("keydown", handlekeyDown);
    };
  }, []), value) {
    case "CONFIRM":
      innerValue = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Right, {}, void 0, !1, {
        fileName: "app/components/Button.tsx",
        lineNumber: 36,
        columnNumber: 20
      }, this), classbtn += " bg-[--success-btn]";
      break;
    case "REJECT":
      innerValue = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Wrong, {}, void 0, !1, {
        fileName: "app/components/Button.tsx",
        lineNumber: 40,
        columnNumber: 20
      }, this), classbtn += " bg-[--cancel-btn]";
      break;
    case "IGNORE":
      innerValue = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Ignore, {}, void 0, !1, {
        fileName: "app/components/Button.tsx",
        lineNumber: 44,
        columnNumber: 20
      }, this), classbtn += " bg-[--normal-btn]";
      break;
    case "UNDO":
      innerValue = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Undo, {}, void 0, !1, {
        fileName: "app/components/Button.tsx",
        lineNumber: 48,
        columnNumber: 20
      }, this), classbtn += " bg-[--normal-btn]";
      break;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
      lineNumber: 53,
      columnNumber: 5
    },
    this
  );
}
var Button_default = Button;

// app/tiptapProps/useEditorTiptap.tsx
var import_react9 = require("@tiptap/react"), import_starter_kit = __toESM(require("@tiptap/starter-kit"));

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
  return (0, import_react9.useEditor)(
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
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), loader = async ({ request, params }) => {
  let session = new URL(request.url).searchParams.get("session"), user = await getUser(session, !0), annotator = await getUser(params.slug, !1);
  if ((annotator == null ? void 0 : annotator.reviewer_id) !== (user == null ? void 0 : user.id))
    return (0, import_node2.redirect)("/?session=" + session);
  let text_data = await db.text.findMany({
    where: { modified_by_id: user == null ? void 0 : user.id, status: "APPROVED", reviewed: !1 },
    orderBy: { updatedAt: "desc" }
  }), currentText = await db.text.findFirst({
    where: { reviewed: !1, modified_by_id: user == null ? void 0 : user.id, status: "APPROVED" },
    orderBy: { id: "asc" }
  });
  return { user, annotator, text_data, id_now: currentText == null ? void 0 : currentText.id };
};
function UserDetail() {
  let fetcher = (0, import_react10.useFetcher)(), { annotator, text_data, user, id_now } = (0, import_react_router.useLoaderData)(), text = text_data == null ? void 0 : text_data.sort(
    (a, b) => a.reviewed === b.reviewed ? 0 : a.reviewed ? -1 : 1
  ), socket = useSocket(), [content, setContent] = (0, import_react11.useState)(""), [selectedId, setSelectedId] = (0, import_react11.useState)(id_now);
  (0, import_react11.useEffect)(() => {
    setSelectedId(id_now);
  }, [id_now]), (0, import_react11.useEffect)(() => {
    var _a;
    if (!annotator)
      return;
    let display = selectedId ? annotator.text.find((d) => d.id === selectedId) : annotator.text.sort(sortUpdate_reviewed).find((d) => d.id === (text == null ? void 0 : text.id));
    if (display) {
      let show = ((_a = JSON.parse(display == null ? void 0 : display.modified_text)) == null ? void 0 : _a.join(" ")) || (display == null ? void 0 : display.original_text);
      setContent(show);
    }
  }, [selectedId]);
  let insertHTML = insertHtmlOnText_default(content), newText = checkUnknown_default(insertHTML), textMemo = (0, import_react11.useMemo)(() => {
    if (newText)
      return newText;
  }, [newText]), editor = useEditorTiptap(textMemo);
  if (!editor)
    return null;
  function text_reviewed() {
    setTimeout(() => {
      socket == null || socket.emit("reviewed", { annotator });
    }, 1e3);
  }
  let saveText2 = async () => {
    fetcher.submit(
      {
        id: selectedId,
        modified_text: editor == null ? void 0 : editor.getText(),
        userId: annotator.id,
        adminId: user == null ? void 0 : user.id
      },
      { method: "POST", action: "/api/text" }
    ), text_reviewed();
  }, rejectTask = async () => {
    fetcher.submit(
      { id: selectedId, userId: annotator.id, _action: "reject", admin: !0 },
      { method: "PATCH", action: "/api/text" }
    ), text_reviewed();
  }, isButtonDisabled = text.length < 1;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
        lineNumber: 100,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex-1 flex items-center flex-col md:mt-[10vh]", children: [
      !text || !selectedId || !editor ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "fixed top-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]", children: "Thank you . your work is complete ! \u{1F60A}\u{1F60A}\u{1F60A}" }, void 0, !1, {
        fileName: "app/routes/admin_.user.review.$slug.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "fixed bottom-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center justify-between opacity-75 text-sm font-bold px-2 capitalize pt-1 ", children: "transcript" }, void 0, !1, {
          fileName: "app/routes/admin_.user.review.$slug.tsx",
          lineNumber: 113,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_remix_utils.ClientOnly, { fallback: null, children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_Editor.default, { editor }, void 0, !1, {
          fileName: "app/routes/admin_.user.review.$slug.tsx",
          lineNumber: 117,
          columnNumber: 22
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin_.user.review.$slug.tsx",
          lineNumber: 116,
          columnNumber: 13
        }, this),
        !editor && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: "loading..." }, void 0, !1, {
          fileName: "app/routes/admin_.user.review.$slug.tsx",
          lineNumber: 119,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin_.user.review.$slug.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_remix_utils.ClientOnly, { fallback: null, children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex gap-2 fixed bottom-0 justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
            lineNumber: 125,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
            lineNumber: 132,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/admin_.user.review.$slug.tsx",
        lineNumber: 124,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin_.user.review.$slug.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin_.user.review.$slug.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin_.user.review.$slug.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}
var admin_user_review_slug_default = UserDetail;

// app/routes/api.user.$username.tsx
var api_user_username_exports = {};
__export(api_user_username_exports, {
  loader: () => loader2
});
var loader2 = async ({ request, params }) => {
  let username = params.username;
  return { users: await getUser(username, !1) };
};

// app/routes/api.text.$version.tsx
var api_text_version_exports = {};
__export(api_text_version_exports, {
  loader: () => loader3
});
var loader3 = async ({ request, params }) => {
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
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function metabase() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    "iframe",
    {
      src: "https://metabase.pecha.tools/public/dashboard/4e6afb12-9c15-48cc-afd4-61e52887ad80",
      style: { border: 0, width: "100%", height: "90vh" }
    },
    void 0,
    !1,
    {
      fileName: "app/routes/admin.metabase.tsx",
      lineNumber: 5,
      columnNumber: 5
    },
    this
  );
}
var admin_metabase_default = metabase;

// app/routes/admin.text.tsx
var admin_text_exports = {};
__export(admin_text_exports, {
  default: () => admin_text_default,
  loader: () => loader4
});
var import_node3 = require("@remix-run/node");

// app/components/admin/AboutText.tsx
var import_react12 = require("@remix-run/react"), import_react13 = __toESM(require("react")), import_bi = require("react-icons/bi");

// app/lib/downloadfile.ts
var downloadJsonlFile = (data, title) => {
  let jsonContent = JSON.stringify(data, null, 2), element = document.createElement("a"), file = new Blob([jsonContent], { type: "application/json" });
  element.href = URL.createObjectURL(file), element.download = title.replace(".txt", "") + ".json", document.body.appendChild(element), element.click();
};

// app/components/admin/AboutText.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function AboutText() {
  let { texts } = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "collapse collapse-plus bg-base-200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "radio", name: "my-accordion-3" }, void 0, !1, {
        fileName: "app/components/admin/AboutText.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "collapse-title text-xl font-medium bg-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { children: "Category" }, void 0, !1, {
        fileName: "app/components/admin/AboutText.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/admin/AboutText.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "collapse-content", children: texts.map((text) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text_Category, { text }, text.version, !1, {
        fileName: "app/components/admin/AboutText.tsx",
        lineNumber: 21,
        columnNumber: 20
      }, this)) }, void 0, !1, {
        fileName: "app/components/admin/AboutText.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutText.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "collapse collapse-plus bg-base-200 mt-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "radio", name: "my-accordion-3" }, void 0, !1, {
        fileName: "app/components/admin/AboutText.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "collapse-title text-xl font-medium bg-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { children: "Downloads" }, void 0, !1, {
        fileName: "app/components/admin/AboutText.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/admin/AboutText.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "collapse-content", children: texts.map((text) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(DownloadText, { text }, text.version, !1, {
        fileName: "app/components/admin/AboutText.tsx",
        lineNumber: 32,
        columnNumber: 20
      }, this)) }, void 0, !1, {
        fileName: "app/components/admin/AboutText.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutText.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/AboutText.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
function Text_Category({ text }) {
  let [hasChanges, setHasChanges] = import_react13.default.useState(!1), [value, setValue] = import_react13.default.useState(null), inputRef = import_react13.default.useRef(null), { user } = (0, import_react12.useLoaderData)(), isAdmin = (user == null ? void 0 : user.role) === "ADMIN", fetcher = (0, import_react12.useFetcher)();
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "form",
    {
      onSubmit: handleSubmit,
      className: "text-center flex w-full px-2 justify-between mt-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h4", { className: "text-lg font-bold", children: text.version }, void 0, !1, {
          fileName: "app/components/admin/AboutText.tsx",
          lineNumber: 69,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { hidden: !0, name: "_action", readOnly: !0, value: "change_category" }, void 0, !1, {
          fileName: "app/components/admin/AboutText.tsx",
          lineNumber: 70,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "input",
            {
              ref: inputRef,
              type: "text",
              name: "category",
              placeholder: "Type here",
              className: "input input-bordered input-primary w-full max-w-xs",
              value: value ?? text.category,
              onChange: (e) => {
                setHasChanges(e.target.value !== text.category), setValue(e.target.value);
              }
            },
            void 0,
            !1,
            {
              fileName: "app/components/admin/AboutText.tsx",
              lineNumber: 72,
              columnNumber: 9
            },
            this
          ),
          hasChanges && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "button",
            {
              onClick: handleSubmit,
              className: "cursor-pointer",
              disabled: !isAdmin,
              children: "Save"
            },
            void 0,
            !1,
            {
              fileName: "app/components/admin/AboutText.tsx",
              lineNumber: 85,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/admin/AboutText.tsx",
          lineNumber: 71,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/admin/AboutText.tsx",
      lineNumber: 65,
      columnNumber: 5
    },
    this
  );
}
function DownloadText({ text }) {
  let fetcher = (0, import_react12.useFetcher)();
  function handleDownload() {
    fetcher.load(`/api/text/${text.version}`);
  }
  return (0, import_react13.useEffect)(() => {
    fetcher.data && downloadJsonlFile(fetcher.data, text.version);
  }, [fetcher.data]), /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "text-center flex w-full px-2 justify-between mt-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h4", { className: "text-lg font-bold", children: text.version }, void 0, !1, {
      fileName: "app/components/admin/AboutText.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "button",
      {
        onClick: handleDownload,
        className: "flex gap-2 items-center cursor-pointer hover:bg-green-300 px-2 rounded",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_bi.BiSolidCloudDownload, {}, void 0, !1, {
            fileName: "app/components/admin/AboutText.tsx",
            lineNumber: 116,
            columnNumber: 11
          }, this),
          "Download"
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/admin/AboutText.tsx",
        lineNumber: 112,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/admin/AboutText.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/AboutText.tsx",
    lineNumber: 109,
    columnNumber: 5
  }, this);
}
var AboutText_default = AboutText;

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
      version: !0
    }
  }), uniqueVersions = Array.from(
    new Set(textRecords.map((record) => record.version))
  ), uniqueVersionCategories = [];
  for (let version of uniqueVersions) {
    let recordsWithVersion = await db.text.findMany({
      where: {
        version
      },
      select: {
        category: !0
      }
    });
    if (recordsWithVersion.length > 0) {
      let category = recordsWithVersion[0].category;
      uniqueVersionCategories.push({ version, category });
    }
  }
  return uniqueVersionCategories;
};

// app/routes/admin.text.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), loader4 = async ({ request }) => {
  let session = new URL(request.url).searchParams.get("session");
  if (!session)
    return (0, import_node3.redirect)("/error");
  let texts = await getUniqueTextsGroup(), user = await getUser(session, !0);
  return (0, import_node3.defer)({
    user,
    texts
  });
};
function Admin_Text() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(AboutText_default, {}, void 0, !1, {
    fileName: "app/routes/admin.text.tsx",
    lineNumber: 20,
    columnNumber: 10
  }, this);
}
var admin_text_default = Admin_Text;

// app/routes/admin.user.tsx
var admin_user_exports = {};
__export(admin_user_exports, {
  action: () => action,
  default: () => admin_user_default,
  loader: () => loader5,
  meta: () => meta
});
var import_node4 = require("@remix-run/node");

// app/components/admin/AboutUser.tsx
var import_react20 = require("@remix-run/react");

// app/components/AssignNickName.tsx
var import_react14 = require("@remix-run/react"), import_react15 = __toESM(require("react")), import_fi = require("react-icons/fi"), import_ti = require("react-icons/ti"), import_im = require("react-icons/im"), import_react16 = require("react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function AssignNickName({ user }) {
  var _a;
  let fetcher = (0, import_react14.useFetcher)(), inputRef = import_react15.default.useRef(null), [openEdit, setOpenEdit] = import_react15.default.useState(!1);
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
var AssignNickName_default = (0, import_react16.memo)(AssignNickName);

// app/components/AssignReviewer.tsx
var import_react17 = require("@remix-run/react"), import_react_tailwindcss_select = __toESM(require("react-tailwindcss-select")), import_ai = require("react-icons/ai"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function AssignReviewer({ user }) {
  var _a, _b;
  let { reviewers } = (0, import_react17.useLoaderData)(), options = reviewers.map((c) => ({
    value: c.username,
    label: c.username
  })), fetcher = (0, import_react17.useFetcher)();
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex gap-2 w-[200px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      import_react_tailwindcss_select.default,
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

// app/components/AssignCategory.tsx
var import_react18 = require("@remix-run/react"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function AssignCategory({ user }) {
  let { categories } = (0, import_react18.useLoaderData)(), fetcher = (0, import_react18.useFetcher)(), id = user.id;
  function handleClick(category) {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "w-40 flex gap-2", children: categories.map((c) => {
    var _a;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      "span",
      {
        onClick: () => handleClick(c),
        className: `bg-gray-200 shadow-sm px-2 rounded  cursor-pointer ${((_a = user == null ? void 0 : user.categories) == null ? void 0 : _a.includes(c)) && "bg-green-200"}`,
        children: c
      },
      c + "-options",
      !1,
      {
        fileName: "app/components/AssignCategory.tsx",
        lineNumber: 27,
        columnNumber: 9
      },
      this
    );
  }) }, void 0, !1, {
    fileName: "app/components/AssignCategory.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
var AssignCategory_default = AssignCategory;

// app/components/AssignedBatchList.tsx
var import_react19 = require("@remix-run/react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function AssignedBatchList({ user }) {
  var _a;
  let { groups } = (0, import_react19.useLoaderData)(), userfetcher = (0, import_react19.useFetcher)(), removeBatch = (e) => {
    if (groups[e].rejected)
      return alert(
        "group contain rejected data, contact the annotator to either ignore or accept!"
      ), null;
    confirm("Are you sure you want to remove this group from user?") && userfetcher.submit(
      { batch: e, id: user.id },
      {
        method: "DELETE"
      }
    );
  }, removing = ((_a = userfetcher.formData) == null ? void 0 : _a.get("id")) === user.id && userfetcher.formMethod === "DELETE", reviewedBatch = user.assigned_batch.filter(
    (item) => {
      var _a2;
      return (_a2 = groups[item]) == null ? void 0 : _a2.reviewed;
    }
  ), currentBatch = user.assigned_batch.filter(
    (item) => {
      var _a2;
      return !((_a2 = groups[item]) != null && _a2.reviewed);
    }
  ), title = `${reviewedBatch.length ?? 0} completed out of ${user.assigned_batch.length} batches:{ ${reviewedBatch.join(" , ")} }`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mt-2 flex gap-2", children: [
    reviewedBatch.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      "div",
      {
        title,
        className: "cursor-pointer bg-green-300 rounded  px-2 py-1",
        children: [
          reviewedBatch.length,
          " Completed"
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/AssignedBatchList.tsx",
        lineNumber: 39,
        columnNumber: 9
      },
      this
    ),
    currentBatch.map((item) => {
      var _a2, _b, _c;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "span",
        {
          className: " text-black  mr-1 cursor-pointer p-1 border-2 rounded border-gray-300",
          onClick: () => removeBatch(item),
          style: {
            background: (_a2 = groups[item]) != null && _a2.reviewed ? "lightgreen" : (_b = groups[item]) != null && _b.approved ? "lightblue" : (_c = groups[item]) != null && _c.rejected ? "pink" : "white"
          },
          children: item
        },
        item,
        !1,
        {
          fileName: "app/components/AssignedBatchList.tsx",
          lineNumber: 48,
          columnNumber: 11
        },
        this
      );
    })
  ] }, void 0, !0, {
    fileName: "app/components/AssignedBatchList.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
var AssignedBatchList_default = AssignedBatchList;

// app/components/admin/AboutUser.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function Info({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-col items-start px-2 text-lg mt-2", children }, void 0, !1, {
    fileName: "app/components/admin/AboutUser.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
function Title({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "text-lg font-bold flex justify-between w-full", children }, void 0, !1, {
    fileName: "app/components/admin/AboutUser.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
var AboutUser = ({ selectedUser }) => {
  let { users, user } = (0, import_react20.useLoaderData)(), annotator = users.find((user2) => (user2 == null ? void 0 : user2.username) === selectedUser), socket = useSocket(), fetcher = (0, import_react20.useFetcher)();
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
  if (!annotator)
    return null;
  let reviewed_count = annotator == null ? void 0 : annotator.text.filter((item) => item.reviewed).length, approved_count = annotator == null ? void 0 : annotator.text.length, url = `/admin/user/review/${selectedUser}?session=` + user.username;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "sticky top-[80px]  rounded-sm border border-stroke bg-white px-5 pt-6 pb-10 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-10 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-col md:flex-row justify-between px-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h4", { className: "mb-6 text-xl font-semibold text-black dark:text-white", children: [
        annotator == null ? void 0 : annotator.username,
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "font-light text-sm ml-2", children: annotator.role }, void 0, !1, {
          fileName: "app/components/admin/AboutUser.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
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
          fileName: "app/components/admin/AboutUser.tsx",
          lineNumber: 57,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Info, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Title, { children: "Name:" }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(AssignNickName_default, { user: annotator }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Info, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Title, { children: "Email:" }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: annotator == null ? void 0 : annotator.username }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Info, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Title, { children: "Reviewer:" }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(AssignReviewer_default, { user: annotator }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Info, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Title, { children: "Category:" }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(AssignCategory_default, { user: annotator }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Info, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Title, { children: [
        "Assigned Batch:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { title: "reviewed/total", children: [
          reviewed_count,
          "/",
          approved_count
        ] }, void 0, !0, {
          fileName: "app/components/admin/AboutUser.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(AssignedBatchList_default, { user: annotator }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      import_react20.Link,
      {
        title: "visit",
        className: "bg-purple-300 py-1 px-3 w-full  text-center hover:opacity-90 absolute bottom-0 left-0 right-0 ",
        to: url,
        children: "Visit"
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 96,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/admin/AboutUser.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}, AboutUser_default = AboutUser;

// app/components/admin/UserListCard.tsx
var import_react21 = require("@remix-run/react"), import_react22 = require("react"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), UserListCard = ({
  setSelectedUser,
  selectedUser
}) => {
  let { users, groups, user, reviewers } = (0, import_react21.useLoaderData)(), handleSelection = (value) => {
    setSelectedUser(value);
  }, isAdmin = user.role === "ADMIN", isReviewer = user.role === "REVIEWER", [selectedReviewer, setSelectedReviewer] = (0, import_react22.useState)("All"), [search, setSearch] = (0, import_react22.useState)("");
  function handleReviewerChange(e) {
    let selectedReviewer2 = e.target.value;
    setSelectedReviewer(selectedReviewer2);
  }
  let list = users.filter(
    (annotator) => annotator.username.includes(search)
  );
  return selectedReviewer !== "All" && (list = list.filter(
    (user2) => {
      var _a;
      return ((_a = user2 == null ? void 0 : user2.reviewer) == null ? void 0 : _a.username) === selectedReviewer || (user2 == null ? void 0 : user2.username) === selectedReviewer;
    }
  )), isReviewer && (list = list.filter(
    (annotator) => annotator.reviewer_id === user.id || annotator.reviewer_id === null
  ).sort((a, b) => a.reviewer_id === null && b.reviewer_id !== null ? 1 : a.reviewer_id !== null && b.reviewer_id === null ? -1 : 0)), (0, import_react22.useEffect)(() => {
    var _a;
    setSelectedUser((_a = list[0]) == null ? void 0 : _a.username);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h4", { className: "mb-6 pl-2 px-7.5 text-xl font-semibold text-black dark:text-white", children: "Annotators" }, void 0, !1, {
      fileName: "app/components/admin/UserListCard.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex gap-2  items-center flex-1 mb-2 mx-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
        lineNumber: 62,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/admin/UserListCard.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    isAdmin && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex gap-2  items-center mb-2 mx-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      "select",
      {
        id: "reviewer-select",
        className: "select select-sm select-bordered w-full max-w-xs",
        onChange: handleReviewerChange,
        value: selectedReviewer,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("option", { value: "All", children: "All" }, void 0, !1, {
            fileName: "app/components/admin/UserListCard.tsx",
            lineNumber: 77,
            columnNumber: 13
          }, this),
          reviewers.map((reviewer) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            "option",
            {
              value: reviewer.username,
              children: reviewer.username
            },
            reviewer.id + "-key-selection",
            !1,
            {
              fileName: "app/components/admin/UserListCard.tsx",
              lineNumber: 79,
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
        lineNumber: 71,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/admin/UserListCard.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: list.map((user2) => {
      let currentBatch = user2.assigned_batch.filter(
        (item) => {
          var _a, _b;
          return !((_a = groups[item]) != null && _a.reviewed) && ((_b = groups[item]) == null ? void 0 : _b.approved);
        }
      );
      return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        "div",
        {
          onClick: () => handleSelection(user2.username),
          className: ` cursor-pointer flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4 hover:rounded-sm transition duration-300 ease-in-out hover:bg-green-300 ${selectedUser === user2.username && "bg-green-300"}`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-1 items-center justify-between px-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h5", { className: "font-medium text-black dark:text-white", children: user2.nickname }, void 0, !1, {
                fileName: "app/components/admin/UserListCard.tsx",
                lineNumber: 105,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "text-sm text-black dark:text-white", children: user2.username }, void 0, !1, {
                  fileName: "app/components/admin/UserListCard.tsx",
                  lineNumber: 109,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "text-xs", children: " . 12 min" }, void 0, !1, {
                  fileName: "app/components/admin/UserListCard.tsx",
                  lineNumber: 112,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/admin/UserListCard.tsx",
                lineNumber: 108,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/admin/UserListCard.tsx",
              lineNumber: 104,
              columnNumber: 17
            }, this),
            currentBatch.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex h-6 w-6 items-center justify-center rounded-full bg-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "text-xs text-white", children: currentBatch.length }, void 0, !1, {
              fileName: "app/components/admin/UserListCard.tsx",
              lineNumber: 117,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/components/admin/UserListCard.tsx",
              lineNumber: 116,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/UserListCard.tsx",
            lineNumber: 103,
            columnNumber: 15
          }, this)
        },
        user2.id + "-userList",
        !1,
        {
          fileName: "app/components/admin/UserListCard.tsx",
          lineNumber: 96,
          columnNumber: 13
        },
        this
      );
    }) }, void 0, !1, {
      fileName: "app/components/admin/UserListCard.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/UserListCard.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}, UserListCard_default = UserListCard;

// app/routes/admin.user.tsx
var import_react23 = require("react");

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
      let allReviewed = textsInBatch.every((item) => item.reviewed);
      !batchToAssign && allReviewed && (batchToAssign = await getUnassignedBatch(user.categories));
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
  let batch = await checkAndAssignBatch(userId), user = await db.user.findUnique({
    where: { id: userId },
    include: {
      ignored_list: !0,
      rejected_list: !0
    }
  }), rejectedIds = user == null ? void 0 : user.rejected_list.map((item) => item.id), text = await db.text.findFirst({
    where: {
      batch,
      OR: [{ status: null }, { status: "PENDING" }],
      id: {
        notIn: [...rejectedIds || []]
      }
    },
    orderBy: {
      id: "asc"
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
async function ignoreText(id, userId) {
  return db.text.update({
    where: {
      id
    },
    data: {
      modified_by: { disconnect: { id: userId } },
      ignored_by: { connect: { id: userId } },
      status: "PENDING",
      modified_text: null
    }
  });
}
function saveText(id, text, userId, adminId) {
  return db.text.update({
    where: {
      id
    },
    data: {
      modified_text: JSON.stringify(text.split(" ")),
      modified_by_id: userId,
      status: "APPROVED",
      rejected_by: { disconnect: { id: userId } },
      reviewed: !!adminId,
      reviewed_by_id: adminId || null
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

// app/routes/admin.user.tsx
var import_react24 = require("@remix-run/react");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), loader5 = async ({ request }) => {
  let session = new URL(request.url).searchParams.get("session");
  if (!session)
    return (0, import_node4.redirect)("/error");
  let user = await getUser(session, !0), users = await getUsers(), groups = await getAprovedBatch(), reviewers = users.filter((user2) => user2.role === "REVIEWER"), categories = await getCategories(), texts = await getUniqueTextsGroup();
  return (0, import_node4.defer)({
    user,
    texts,
    users: users.sort(
      (a, b) => b.assigned_batch.length - a.assigned_batch.length
    ),
    groups,
    reviewers,
    categories
  });
}, action = async ({ request }) => {
  let formdata = await request.formData();
  if (request.method === "DELETE") {
    let batch = formdata.get("batch"), userId = formdata.get("id");
    return await removeBatchFromUser(parseInt(batch), userId);
  }
}, meta = () => [
  { title: `Admin page | ${toolname}` },
  {
    name: "description",
    content: `admin page for ${toolname}`
  }
];
function Index() {
  let [selectedUser, setSelectedUser] = (0, import_react23.useState)(null), socket = useSocket(), reval = (0, import_react24.useRevalidator)();
  return (0, import_react23.useEffect)(() => {
    socket && socket.on("text-status-changed", (data) => {
      data && reval.revalidate();
    });
  }, [socket]), /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "col-span-12 xl:col-span-8 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(AboutUser_default, { selectedUser }, void 0, !1, {
      fileName: "app/routes/admin.user.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.user.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      UserListCard_default,
      {
        setSelectedUser,
        selectedUser
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin.user.tsx",
        lineNumber: 78,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/admin.user.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}
var admin_user_default = Index;

// app/routes/api.text.tsx
var api_text_exports = {};
__export(api_text_exports, {
  action: () => action2
});
var import_node5 = require("@remix-run/node");

// app/lib/server.sendDiscordNotification.ts
var import_webhook_discord = __toESM(require("webhook-discord")), userLastCallTimestamps = /* @__PURE__ */ new Map();
async function sendNotification(username, message, type) {
  let webhookUrl = process.env.DISCORD_WEBHOOK_URL, Hook = new import_webhook_discord.default.Webhook(webhookUrl);
  if (!username)
    return null;
  if (type === "success" && Hook.success(username, message), userLastCallTimestamps.has(username)) {
    let lastCallTimestamp = userLastCallTimestamps.get(username);
    if (Date.now() - lastCallTimestamp < 1e3 && userLastCallTimestamps.get(username) >= 3)
      return "Rate limit exceeded. Please try again later.";
  }
  return userLastCallTimestamps.set(username, Date.now()), type === "info" && Hook.info(username, message), "Notification sent successfully.";
}

// app/routes/api.text.tsx
var action2 = async ({ request }) => {
  let formData = await request.formData(), headerUrl = request.headers.get("referer"), url = new URL(headerUrl), session = url.searchParams.get("session"), history = url.searchParams.get("history"), text = null, admin_id = formData.get("adminId"), action4 = formData.get("_action");
  if (request.method === "POST") {
    let modified_text = formData.get("modified_text"), userId = formData.get("userId"), id = formData.get("id");
    await removeRejectText(parseInt(id), userId, "APPROVED"), text = await saveText(parseInt(id), modified_text, userId, admin_id);
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
    if (action4 === "reject") {
      await updateTextRejectCount(parseInt(id));
      let numberOfReject = await getNumberOfReject(parseInt(id));
      numberOfReject !== 0 && numberOfReject % 3 === 0 && await updateUserAssign(userId, !1), text = await rejectText(parseInt(id), userId);
    }
    if (action4 === "ignore" && (await removeRejectText(parseInt(id), userId, "PENDING"), text = await ignoreText(parseInt(id), userId)), action4 === "change_category") {
      let category = formData.get("category"), version = formData.get("version");
      return console.log(...oo_oo("f5ac78df_0", category, version)), text = await changeCategory(version, category), text;
    }
  }
  return history ? (0, import_node5.redirect)(`/?session=${session}`) : text;
};
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x5a94(_0x1f863a,_0x87b64f){var _0x596df8=_0x596d();return _0x5a94=function(_0x5a944d,_0x134ce9){_0x5a944d=_0x5a944d-0x118;var _0x448733=_0x596df8[_0x5a944d];return _0x448733;},_0x5a94(_0x1f863a,_0x87b64f);}var _0x29ec16=_0x5a94;(function(_0x378825,_0x3b432b){var _0x433c19=_0x5a94,_0x7cdf7d=_0x378825();while(!![]){try{var _0x1251ec=-parseInt(_0x433c19(0x1d1))/0x1+parseInt(_0x433c19(0x1fd))/0x2*(-parseInt(_0x433c19(0x15a))/0x3)+-parseInt(_0x433c19(0x178))/0x4+-parseInt(_0x433c19(0x1f3))/0x5*(-parseInt(_0x433c19(0x197))/0x6)+parseInt(_0x433c19(0x1d9))/0x7+parseInt(_0x433c19(0x1da))/0x8*(parseInt(_0x433c19(0x1cf))/0x9)+parseInt(_0x433c19(0x11e))/0xa*(parseInt(_0x433c19(0x123))/0xb);if(_0x1251ec===_0x3b432b)break;else _0x7cdf7d['push'](_0x7cdf7d['shift']());}catch(_0x4aecb1){_0x7cdf7d['push'](_0x7cdf7d['shift']());}}}(_0x596d,0xea2e0));var j=Object[_0x29ec16(0x1ed)],X=Object[_0x29ec16(0x17b)],G=Object[_0x29ec16(0x1d5)],ee=Object[_0x29ec16(0x1bd)],te=Object[_0x29ec16(0x125)],ne=Object['prototype'][_0x29ec16(0x1b5)],re=(_0x2e0320,_0x53f850,_0x525f29,_0x86fdb9)=>{var _0x58053e=_0x29ec16;if(_0x53f850&&typeof _0x53f850==_0x58053e(0x18a)||typeof _0x53f850=='function'){for(let _0x20edc7 of ee(_0x53f850))!ne[_0x58053e(0x1bc)](_0x2e0320,_0x20edc7)&&_0x20edc7!==_0x525f29&&X(_0x2e0320,_0x20edc7,{'get':()=>_0x53f850[_0x20edc7],'enumerable':!(_0x86fdb9=G(_0x53f850,_0x20edc7))||_0x86fdb9[_0x58053e(0x198)]});}return _0x2e0320;},x=(_0x4f5bfb,_0x15b032,_0x32bbfb)=>(_0x32bbfb=_0x4f5bfb!=null?j(te(_0x4f5bfb)):{},re(_0x15b032||!_0x4f5bfb||!_0x4f5bfb['__es'+'Module']?X(_0x32bbfb,'default',{'value':_0x4f5bfb,'enumerable':!0x0}):_0x32bbfb,_0x4f5bfb)),q=class{constructor(_0x2f16f2,_0x2a8fac,_0x334b71,_0x87f763){var _0x2ab6b8=_0x29ec16;this[_0x2ab6b8(0x12e)]=_0x2f16f2,this[_0x2ab6b8(0x1e1)]=_0x2a8fac,this[_0x2ab6b8(0x1af)]=_0x334b71,this[_0x2ab6b8(0x162)]=_0x87f763,this['_allowedToSend']=!0x0,this[_0x2ab6b8(0x17a)]=!0x0,this['_connected']=!0x1,this[_0x2ab6b8(0x13f)]=!0x1,this[_0x2ab6b8(0x1b4)]=!!this[_0x2ab6b8(0x12e)][_0x2ab6b8(0x167)],this[_0x2ab6b8(0x184)]=null,this[_0x2ab6b8(0x165)]=0x0,this[_0x2ab6b8(0x15c)]=0x14,this[_0x2ab6b8(0x1d3)]=_0x2ab6b8(0x119),this[_0x2ab6b8(0x1c3)]=(this['_inBrowser']?_0x2ab6b8(0x1c5):_0x2ab6b8(0x1e9))+this[_0x2ab6b8(0x1d3)];}async[_0x29ec16(0x1e3)](){var _0x3e453a=_0x29ec16;if(this[_0x3e453a(0x184)])return this[_0x3e453a(0x184)];let _0x1ff4f0;if(this[_0x3e453a(0x1b4)])_0x1ff4f0=this[_0x3e453a(0x12e)][_0x3e453a(0x167)];else{if(this['global'][_0x3e453a(0x1b8)]?.[_0x3e453a(0x1c1)])_0x1ff4f0=this['global']['process']?.[_0x3e453a(0x1c1)];else try{let _0x1a1af9=await import(_0x3e453a(0x15b));_0x1ff4f0=(await import((await import(_0x3e453a(0x1f6)))['pathToFileURL'](_0x1a1af9[_0x3e453a(0x1ac)](this[_0x3e453a(0x162)],'ws/index.js'))[_0x3e453a(0x18c)]()))[_0x3e453a(0x1de)];}catch{try{_0x1ff4f0=require(require(_0x3e453a(0x15b))[_0x3e453a(0x1ac)](this[_0x3e453a(0x162)],'ws'));}catch{throw new Error(_0x3e453a(0x132));}}}return this[_0x3e453a(0x184)]=_0x1ff4f0,_0x1ff4f0;}[_0x29ec16(0x152)](){var _0x3671c4=_0x29ec16;this['_connecting']||this[_0x3671c4(0x1ab)]||this[_0x3671c4(0x165)]>=this[_0x3671c4(0x15c)]||(this[_0x3671c4(0x17a)]=!0x1,this['_connecting']=!0x0,this[_0x3671c4(0x165)]++,this[_0x3671c4(0x1d0)]=new Promise((_0x41351b,_0x5297aa)=>{var _0xf6ddde=_0x3671c4;this[_0xf6ddde(0x1e3)]()[_0xf6ddde(0x156)](_0x31d597=>{var _0x337e8d=_0xf6ddde;let _0x2c9ae6=new _0x31d597('ws://'+this[_0x337e8d(0x1e1)]+':'+this[_0x337e8d(0x1af)]);_0x2c9ae6['onerror']=()=>{var _0x3fbb26=_0x337e8d;this[_0x3fbb26(0x14a)]=!0x1,this['_disposeWebsocket'](_0x2c9ae6),this['_attemptToReconnectShortly'](),_0x5297aa(new Error('logger\\x20websocket\\x20error'));},_0x2c9ae6[_0x337e8d(0x1be)]=()=>{var _0xb85a6d=_0x337e8d;this[_0xb85a6d(0x1b4)]||_0x2c9ae6['_socket']&&_0x2c9ae6[_0xb85a6d(0x193)][_0xb85a6d(0x1df)]&&_0x2c9ae6['_socket'][_0xb85a6d(0x1df)](),_0x41351b(_0x2c9ae6);},_0x2c9ae6[_0x337e8d(0x11a)]=()=>{var _0x22c12f=_0x337e8d;this[_0x22c12f(0x17a)]=!0x0,this[_0x22c12f(0x16f)](_0x2c9ae6),this[_0x22c12f(0x142)]();},_0x2c9ae6[_0x337e8d(0x1e8)]=_0x2989ca=>{var _0x597085=_0x337e8d;try{_0x2989ca&&_0x2989ca[_0x597085(0x19a)]&&this[_0x597085(0x1b4)]&&JSON[_0x597085(0x1a9)](_0x2989ca[_0x597085(0x19a)])[_0x597085(0x137)]===_0x597085(0x138)&&this[_0x597085(0x12e)]['location'][_0x597085(0x138)]();}catch{}};})[_0xf6ddde(0x156)](_0xb45d22=>(this['_connected']=!0x0,this[_0xf6ddde(0x13f)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0xf6ddde(0x14a)]=!0x0,this['_connectAttemptCount']=0x0,_0xb45d22))[_0xf6ddde(0x15d)](_0x49c288=>(this[_0xf6ddde(0x1ab)]=!0x1,this[_0xf6ddde(0x13f)]=!0x1,console[_0xf6ddde(0x1e4)](_0xf6ddde(0x1d4)+this[_0xf6ddde(0x1d3)]),_0x5297aa(new Error(_0xf6ddde(0x16a)+(_0x49c288&&_0x49c288[_0xf6ddde(0x176)])))));}));}[_0x29ec16(0x16f)](_0x384b2e){var _0x268a60=_0x29ec16;this[_0x268a60(0x1ab)]=!0x1,this[_0x268a60(0x13f)]=!0x1;try{_0x384b2e[_0x268a60(0x11a)]=null,_0x384b2e[_0x268a60(0x131)]=null,_0x384b2e[_0x268a60(0x1be)]=null;}catch{}try{_0x384b2e[_0x268a60(0x141)]<0x2&&_0x384b2e[_0x268a60(0x14d)]();}catch{}}[_0x29ec16(0x142)](){var _0x8fe5e3=_0x29ec16;clearTimeout(this['_reconnectTimeout']),!(this[_0x8fe5e3(0x165)]>=this['_maxConnectAttemptCount'])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x4e9eca=_0x8fe5e3;this[_0x4e9eca(0x1ab)]||this['_connecting']||(this[_0x4e9eca(0x152)](),this[_0x4e9eca(0x1d0)]?.[_0x4e9eca(0x15d)](()=>this[_0x4e9eca(0x142)]()));},0x1f4),this[_0x8fe5e3(0x168)][_0x8fe5e3(0x1df)]&&this[_0x8fe5e3(0x168)][_0x8fe5e3(0x1df)]());}async['send'](_0x1323cf){var _0x590dec=_0x29ec16;try{if(!this[_0x590dec(0x14a)])return;this['_allowedToConnectOnSend']&&this['_connectToHostNow'](),(await this[_0x590dec(0x1d0)])[_0x590dec(0x1c9)](JSON[_0x590dec(0x118)](_0x1323cf));}catch(_0x5cec51){console[_0x590dec(0x1e4)](this['_sendErrorMessage']+':\\x20'+(_0x5cec51&&_0x5cec51['message'])),this[_0x590dec(0x14a)]=!0x1,this['_attemptToReconnectShortly']();}}};function J(_0x9c005f,_0x118da5,_0x272c53,_0x4e0018,_0x263482){var _0x4696a0=_0x29ec16;let _0x31d919=_0x272c53['split'](',')[_0x4696a0(0x191)](_0x52aa3b=>{var _0x4d38c3=_0x4696a0;try{_0x9c005f[_0x4d38c3(0x12b)]||((_0x263482===_0x4d38c3(0x16b)||_0x263482===_0x4d38c3(0x154)||_0x263482===_0x4d38c3(0x1a5))&&(_0x263482+=_0x9c005f[_0x4d38c3(0x1b8)]?.[_0x4d38c3(0x146)]?.[_0x4d38c3(0x1d8)]?_0x4d38c3(0x135):_0x4d38c3(0x12d)),_0x9c005f['_console_ninja_session']={'id':+new Date(),'tool':_0x263482});let _0x3ec116=new q(_0x9c005f,_0x118da5,_0x52aa3b,_0x4e0018);return _0x3ec116[_0x4d38c3(0x1c9)][_0x4d38c3(0x158)](_0x3ec116);}catch(_0x228885){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x228885&&_0x228885[_0x4d38c3(0x176)]),()=>{};}});return _0x5af9bc=>_0x31d919[_0x4696a0(0x11d)](_0x30cf42=>_0x30cf42(_0x5af9bc));}function R(_0x2b0724){var _0x13cdc5=_0x29ec16;let _0x4e1d39=function(_0x29dbff,_0x351635){return _0x351635-_0x29dbff;},_0x47ea32;if(_0x2b0724[_0x13cdc5(0x1c0)])_0x47ea32=function(){var _0x41a38f=_0x13cdc5;return _0x2b0724[_0x41a38f(0x1c0)]['now']();};else{if(_0x2b0724[_0x13cdc5(0x1b8)]&&_0x2b0724[_0x13cdc5(0x1b8)][_0x13cdc5(0x149)])_0x47ea32=function(){return _0x2b0724['process']['hrtime']();},_0x4e1d39=function(_0x555844,_0xf983dd){return 0x3e8*(_0xf983dd[0x0]-_0x555844[0x0])+(_0xf983dd[0x1]-_0x555844[0x1])/0xf4240;};else try{let {performance:_0x27cbe4}=require(_0x13cdc5(0x1d6));_0x47ea32=function(){var _0x328ff6=_0x13cdc5;return _0x27cbe4[_0x328ff6(0x1bb)]();};}catch{_0x47ea32=function(){return+new Date();};}}return{'elapsed':_0x4e1d39,'timeStamp':_0x47ea32,'now':()=>Date['now']()};}function Y(_0x497fa6,_0x1de612,_0x52b12a){var _0x4197a6=_0x29ec16;if(_0x497fa6['_consoleNinjaAllowedToStart']!==void 0x0)return _0x497fa6[_0x4197a6(0x18b)];let _0x55886f=_0x497fa6[_0x4197a6(0x1b8)]?.[_0x4197a6(0x146)]?.['node'];return _0x55886f&&_0x52b12a===_0x4197a6(0x187)?_0x497fa6[_0x4197a6(0x18b)]=!0x1:_0x497fa6[_0x4197a6(0x18b)]=_0x55886f||!_0x1de612||_0x497fa6['location']?.[_0x4197a6(0x186)]&&_0x1de612[_0x4197a6(0x1f5)](_0x497fa6[_0x4197a6(0x134)]['hostname']),_0x497fa6[_0x4197a6(0x18b)];}function _0x596d(){var _0x39d0fc=['_isArray','parent','boolean','push','String','_isMap','_processTreeNodeResult','[object\\x20Array]','depth','1693892758570','astro','index','root_exp_id','set','parse','get','_connected','join','length','cappedElements','port','positiveInfinity','NEGATIVE_INFINITY','negativeInfinity','prototype','_inBrowser','hasOwnProperty','date','sort','process','_keyStrRegExp','number','now','call','getOwnPropertyNames','onopen','[object\\x20Set]','performance','_WebSocket','unknown','_sendErrorMessage','_isNegativeZero','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','autoExpandPropertyCount','negativeZero','toLowerCase','send','_objectToString',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.215\\\\node_modules",'constructor','function','array','197649oanYyr','_ws','1148752rVCfrp','strLength','_webSocketErrorDocsLink','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','getOwnPropertyDescriptor','perf_hooks','props','node','4534642xtZfPH','496pYYPXv','disabledTrace','_setNodeLabel','Boolean','default','unref','expressionsToEvaluate','host','_addObjectProperty','getWebSocketClass','warn','_console_ninja','bigint','level','onmessage','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','concat','allStrLength','timeEnd','create','_hasSetOnItsPath','nan','current','_addProperty','elapsed','399015tYiXHS','_getOwnPropertyDescriptor','includes','url',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.5"],'_setNodeId','_cleanNode','_numberRegExp','Error','error','37420XgtHnT','string','stringify','https://tinyurl.com/37x8b79t','onclose','isArray','trace','forEach','10Wuloxx','hits','_p_','reduceLimits','_HTMLAllCollection','9543050sITGEg','time','getPrototypeOf','_Symbol','autoExpandMaxDepth','console','timeStamp','Buffer','_console_ninja_session','_p_length','\\x20browser','global','valueOf','pop','onerror','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','count','location','\\x20server','_type','method','reload','_addLoadNode','replace','type','_setNodeQueryPath','[object\\x20BigInt]','_sortProps','_connecting','Map','readyState','_attemptToReconnectShortly','127.0.0.1','_isPrimitiveType','test','versions','funcName','Set','hrtime','_allowedToSend','getOwnPropertySymbols','elements','close','sortProps','_propertyName','remix','Symbol','_connectToHostNow','_treeNodePropertiesAfterFullValue','remix','_undefined','then','51528','bind','_setNodePermissions','84JTjgCo','path','_maxConnectAttemptCount','catch','_blacklistedProperty','_hasMapOnItsPath','_property','_additionalMetadata','nodeModules','autoExpandPreviousObjects','_isSet','_connectAttemptCount','_setNodeExpandableState','WebSocket','_reconnectTimeout','autoExpandLimit','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','next.js','_regExpToString','[object\\x20Map]','value','_disposeWebsocket','_isPrimitiveWrapperType','serialize','match','_capIfString','log','noFunctions','message','null','1618848HBykyM','isExpressionToEvaluate','_allowedToConnectOnSend','defineProperty','_p_name','_treeNodePropertiesBeforeFullValue','disabledLog','_addFunctionsNode','_setNodeExpressionPath','HTMLAllCollection','_getOwnPropertySymbols','capped','_WebSocketClass','name','hostname','nuxt','stackTraceLimit','Number','object','_consoleNinjaAllowedToStart','toString','totalStrLength','expId','undefined','coverage','map','_dateToString','_socket','substr','resolveGetters','autoExpand','12LJFPff','enumerable','rootExpression','data'];_0x596d=function(){return _0x39d0fc;};return _0x596d();}function Q(_0x1a54d6,_0x4cce87,_0x42f83d,_0x2914bb){var _0x358108=_0x29ec16;_0x1a54d6=_0x1a54d6,_0x4cce87=_0x4cce87,_0x42f83d=_0x42f83d,_0x2914bb=_0x2914bb;let _0x27b04b=R(_0x1a54d6),_0x495e57=_0x27b04b[_0x358108(0x1f2)],_0x3c7de6=_0x27b04b['timeStamp'];class _0x41aa7a{constructor(){var _0x289855=_0x358108;this[_0x289855(0x1b9)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x289855(0x1fa)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x289855(0x155)]=_0x1a54d6[_0x289855(0x18f)],this[_0x289855(0x122)]=_0x1a54d6[_0x289855(0x181)],this[_0x289855(0x1f4)]=Object[_0x289855(0x1d5)],this['_getOwnPropertyNames']=Object[_0x289855(0x1bd)],this['_Symbol']=_0x1a54d6[_0x289855(0x151)],this[_0x289855(0x16c)]=RegExp['prototype'][_0x289855(0x18c)],this[_0x289855(0x192)]=Date[_0x289855(0x1b3)]['toString'];}[_0x358108(0x171)](_0x5b0512,_0xda648c,_0x28fed6,_0x473671){var _0x4f9300=_0x358108,_0x156e1d=this,_0x52112f=_0x28fed6[_0x4f9300(0x196)];function _0x2517d0(_0xe3afa4,_0x41580a,_0x326cc3){var _0x372978=_0x4f9300;_0x41580a['type']=_0x372978(0x1c2),_0x41580a[_0x372978(0x1fc)]=_0xe3afa4[_0x372978(0x176)],_0x55ec42=_0x326cc3[_0x372978(0x1d8)][_0x372978(0x1f0)],_0x326cc3['node'][_0x372978(0x1f0)]=_0x41580a,_0x156e1d[_0x372978(0x17d)](_0x41580a,_0x326cc3);}try{_0x28fed6['level']++,_0x28fed6[_0x4f9300(0x196)]&&_0x28fed6['autoExpandPreviousObjects'][_0x4f9300(0x19e)](_0xda648c);var _0x5702d9,_0x35ef51,_0x33bf1b,_0x2f1dbd,_0x2d1c40=[],_0xb815b7=[],_0x207fd2,_0x3f75c6=this[_0x4f9300(0x136)](_0xda648c),_0x431e9f=_0x3f75c6==='array',_0x251710=!0x1,_0x2685da=_0x3f75c6===_0x4f9300(0x1cd),_0x253dae=this[_0x4f9300(0x144)](_0x3f75c6),_0x3b360d=this[_0x4f9300(0x170)](_0x3f75c6),_0x4b3bf1=_0x253dae||_0x3b360d,_0x400a27={},_0x3dacb8=0x0,_0x2cfdb0=!0x1,_0x55ec42,_0x2daec5=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x28fed6[_0x4f9300(0x1a3)]){if(_0x431e9f){if(_0x35ef51=_0xda648c[_0x4f9300(0x1ad)],_0x35ef51>_0x28fed6['elements']){for(_0x33bf1b=0x0,_0x2f1dbd=_0x28fed6[_0x4f9300(0x14c)],_0x5702d9=_0x33bf1b;_0x5702d9<_0x2f1dbd;_0x5702d9++)_0xb815b7['push'](_0x156e1d[_0x4f9300(0x1f1)](_0x2d1c40,_0xda648c,_0x3f75c6,_0x5702d9,_0x28fed6));_0x5b0512[_0x4f9300(0x1ae)]=!0x0;}else{for(_0x33bf1b=0x0,_0x2f1dbd=_0x35ef51,_0x5702d9=_0x33bf1b;_0x5702d9<_0x2f1dbd;_0x5702d9++)_0xb815b7['push'](_0x156e1d[_0x4f9300(0x1f1)](_0x2d1c40,_0xda648c,_0x3f75c6,_0x5702d9,_0x28fed6));}_0x28fed6[_0x4f9300(0x1c6)]+=_0xb815b7[_0x4f9300(0x1ad)];}if(!(_0x3f75c6==='null'||_0x3f75c6===_0x4f9300(0x18f))&&!_0x253dae&&_0x3f75c6!==_0x4f9300(0x19f)&&_0x3f75c6!==_0x4f9300(0x12a)&&_0x3f75c6!=='bigint'){var _0x1657c9=_0x473671['props']||_0x28fed6[_0x4f9300(0x1d7)];if(this[_0x4f9300(0x164)](_0xda648c)?(_0x5702d9=0x0,_0xda648c['forEach'](function(_0x3bf33e){var _0x2a272d=_0x4f9300;if(_0x3dacb8++,_0x28fed6[_0x2a272d(0x1c6)]++,_0x3dacb8>_0x1657c9){_0x2cfdb0=!0x0;return;}if(!_0x28fed6['isExpressionToEvaluate']&&_0x28fed6['autoExpand']&&_0x28fed6[_0x2a272d(0x1c6)]>_0x28fed6[_0x2a272d(0x169)]){_0x2cfdb0=!0x0;return;}_0xb815b7[_0x2a272d(0x19e)](_0x156e1d[_0x2a272d(0x1f1)](_0x2d1c40,_0xda648c,_0x2a272d(0x148),_0x5702d9++,_0x28fed6,function(_0x5290d9){return function(){return _0x5290d9;};}(_0x3bf33e)));})):this[_0x4f9300(0x1a0)](_0xda648c)&&_0xda648c[_0x4f9300(0x11d)](function(_0x344254,_0x162c1c){var _0x1d46d7=_0x4f9300;if(_0x3dacb8++,_0x28fed6[_0x1d46d7(0x1c6)]++,_0x3dacb8>_0x1657c9){_0x2cfdb0=!0x0;return;}if(!_0x28fed6[_0x1d46d7(0x179)]&&_0x28fed6[_0x1d46d7(0x196)]&&_0x28fed6[_0x1d46d7(0x1c6)]>_0x28fed6['autoExpandLimit']){_0x2cfdb0=!0x0;return;}var _0x2afa0b=_0x162c1c['toString']();_0x2afa0b['length']>0x64&&(_0x2afa0b=_0x2afa0b['slice'](0x0,0x64)+'...'),_0xb815b7[_0x1d46d7(0x19e)](_0x156e1d[_0x1d46d7(0x1f1)](_0x2d1c40,_0xda648c,'Map',_0x2afa0b,_0x28fed6,function(_0x1a1e28){return function(){return _0x1a1e28;};}(_0x344254)));}),!_0x251710){try{for(_0x207fd2 in _0xda648c)if(!(_0x431e9f&&_0x2daec5[_0x4f9300(0x145)](_0x207fd2))&&!this[_0x4f9300(0x15e)](_0xda648c,_0x207fd2,_0x28fed6)){if(_0x3dacb8++,_0x28fed6['autoExpandPropertyCount']++,_0x3dacb8>_0x1657c9){_0x2cfdb0=!0x0;break;}if(!_0x28fed6['isExpressionToEvaluate']&&_0x28fed6[_0x4f9300(0x196)]&&_0x28fed6[_0x4f9300(0x1c6)]>_0x28fed6['autoExpandLimit']){_0x2cfdb0=!0x0;break;}_0xb815b7[_0x4f9300(0x19e)](_0x156e1d[_0x4f9300(0x1e2)](_0x2d1c40,_0x400a27,_0xda648c,_0x3f75c6,_0x207fd2,_0x28fed6));}}catch{}if(_0x400a27[_0x4f9300(0x12c)]=!0x0,_0x2685da&&(_0x400a27[_0x4f9300(0x17c)]=!0x0),!_0x2cfdb0){var _0x4afca9=[][_0x4f9300(0x1ea)](this['_getOwnPropertyNames'](_0xda648c))[_0x4f9300(0x1ea)](this[_0x4f9300(0x182)](_0xda648c));for(_0x5702d9=0x0,_0x35ef51=_0x4afca9[_0x4f9300(0x1ad)];_0x5702d9<_0x35ef51;_0x5702d9++)if(_0x207fd2=_0x4afca9[_0x5702d9],!(_0x431e9f&&_0x2daec5[_0x4f9300(0x145)](_0x207fd2['toString']()))&&!this[_0x4f9300(0x15e)](_0xda648c,_0x207fd2,_0x28fed6)&&!_0x400a27[_0x4f9300(0x120)+_0x207fd2[_0x4f9300(0x18c)]()]){if(_0x3dacb8++,_0x28fed6[_0x4f9300(0x1c6)]++,_0x3dacb8>_0x1657c9){_0x2cfdb0=!0x0;break;}if(!_0x28fed6[_0x4f9300(0x179)]&&_0x28fed6[_0x4f9300(0x196)]&&_0x28fed6[_0x4f9300(0x1c6)]>_0x28fed6[_0x4f9300(0x169)]){_0x2cfdb0=!0x0;break;}_0xb815b7[_0x4f9300(0x19e)](_0x156e1d[_0x4f9300(0x1e2)](_0x2d1c40,_0x400a27,_0xda648c,_0x3f75c6,_0x207fd2,_0x28fed6));}}}}}if(_0x5b0512[_0x4f9300(0x13b)]=_0x3f75c6,_0x4b3bf1?(_0x5b0512[_0x4f9300(0x16e)]=_0xda648c[_0x4f9300(0x12f)](),this[_0x4f9300(0x173)](_0x3f75c6,_0x5b0512,_0x28fed6,_0x473671)):_0x3f75c6===_0x4f9300(0x1b6)?_0x5b0512[_0x4f9300(0x16e)]=this[_0x4f9300(0x192)][_0x4f9300(0x1bc)](_0xda648c):_0x3f75c6===_0x4f9300(0x1e6)?_0x5b0512[_0x4f9300(0x16e)]=_0xda648c['toString']():_0x3f75c6==='RegExp'?_0x5b0512['value']=this[_0x4f9300(0x16c)][_0x4f9300(0x1bc)](_0xda648c):_0x3f75c6==='symbol'&&this[_0x4f9300(0x126)]?_0x5b0512[_0x4f9300(0x16e)]=this[_0x4f9300(0x126)]['prototype'][_0x4f9300(0x18c)][_0x4f9300(0x1bc)](_0xda648c):!_0x28fed6[_0x4f9300(0x1a3)]&&!(_0x3f75c6===_0x4f9300(0x177)||_0x3f75c6===_0x4f9300(0x18f))&&(delete _0x5b0512[_0x4f9300(0x16e)],_0x5b0512[_0x4f9300(0x183)]=!0x0),_0x2cfdb0&&(_0x5b0512['cappedProps']=!0x0),_0x55ec42=_0x28fed6[_0x4f9300(0x1d8)][_0x4f9300(0x1f0)],_0x28fed6[_0x4f9300(0x1d8)][_0x4f9300(0x1f0)]=_0x5b0512,this[_0x4f9300(0x17d)](_0x5b0512,_0x28fed6),_0xb815b7[_0x4f9300(0x1ad)]){for(_0x5702d9=0x0,_0x35ef51=_0xb815b7[_0x4f9300(0x1ad)];_0x5702d9<_0x35ef51;_0x5702d9++)_0xb815b7[_0x5702d9](_0x5702d9);}_0x2d1c40[_0x4f9300(0x1ad)]&&(_0x5b0512['props']=_0x2d1c40);}catch(_0xc900f){_0x2517d0(_0xc900f,_0x5b0512,_0x28fed6);}return this['_additionalMetadata'](_0xda648c,_0x5b0512),this[_0x4f9300(0x153)](_0x5b0512,_0x28fed6),_0x28fed6[_0x4f9300(0x1d8)][_0x4f9300(0x1f0)]=_0x55ec42,_0x28fed6[_0x4f9300(0x1e7)]--,_0x28fed6[_0x4f9300(0x196)]=_0x52112f,_0x28fed6[_0x4f9300(0x196)]&&_0x28fed6[_0x4f9300(0x163)][_0x4f9300(0x130)](),_0x5b0512;}[_0x358108(0x182)](_0x55e14c){var _0x2003a1=_0x358108;return Object[_0x2003a1(0x14b)]?Object['getOwnPropertySymbols'](_0x55e14c):[];}[_0x358108(0x164)](_0x3a52f0){var _0x5aec6e=_0x358108;return!!(_0x3a52f0&&_0x1a54d6[_0x5aec6e(0x148)]&&this[_0x5aec6e(0x1ca)](_0x3a52f0)===_0x5aec6e(0x1bf)&&_0x3a52f0[_0x5aec6e(0x11d)]);}[_0x358108(0x15e)](_0x30cc20,_0xcd0501,_0x57bf9e){var _0x373ba1=_0x358108;return _0x57bf9e[_0x373ba1(0x175)]?typeof _0x30cc20[_0xcd0501]==_0x373ba1(0x1cd):!0x1;}[_0x358108(0x136)](_0x478374){var _0x2b0765=_0x358108,_0x4a437c='';return _0x4a437c=typeof _0x478374,_0x4a437c===_0x2b0765(0x18a)?this[_0x2b0765(0x1ca)](_0x478374)===_0x2b0765(0x1a2)?_0x4a437c=_0x2b0765(0x1ce):this[_0x2b0765(0x1ca)](_0x478374)==='[object\\x20Date]'?_0x4a437c=_0x2b0765(0x1b6):this[_0x2b0765(0x1ca)](_0x478374)===_0x2b0765(0x13d)?_0x4a437c=_0x2b0765(0x1e6):_0x478374===null?_0x4a437c=_0x2b0765(0x177):_0x478374[_0x2b0765(0x1cc)]&&(_0x4a437c=_0x478374[_0x2b0765(0x1cc)][_0x2b0765(0x185)]||_0x4a437c):_0x4a437c===_0x2b0765(0x18f)&&this[_0x2b0765(0x122)]&&_0x478374 instanceof this[_0x2b0765(0x122)]&&(_0x4a437c='HTMLAllCollection'),_0x4a437c;}[_0x358108(0x1ca)](_0x1303db){var _0x22dc3a=_0x358108;return Object[_0x22dc3a(0x1b3)][_0x22dc3a(0x18c)][_0x22dc3a(0x1bc)](_0x1303db);}[_0x358108(0x144)](_0x195b4d){var _0x3c5437=_0x358108;return _0x195b4d===_0x3c5437(0x19d)||_0x195b4d==='string'||_0x195b4d==='number';}[_0x358108(0x170)](_0xda5716){var _0x354faf=_0x358108;return _0xda5716===_0x354faf(0x1dd)||_0xda5716===_0x354faf(0x19f)||_0xda5716===_0x354faf(0x189);}[_0x358108(0x1f1)](_0x16de80,_0xd05385,_0x1ff61d,_0x57cf61,_0x1e5dac,_0x195b5c){var _0xde7cf8=this;return function(_0x3b3bbb){var _0x398309=_0x5a94,_0x290cf4=_0x1e5dac[_0x398309(0x1d8)][_0x398309(0x1f0)],_0x4251dd=_0x1e5dac[_0x398309(0x1d8)][_0x398309(0x1a6)],_0x1eeeec=_0x1e5dac[_0x398309(0x1d8)][_0x398309(0x19c)];_0x1e5dac['node'][_0x398309(0x19c)]=_0x290cf4,_0x1e5dac['node'][_0x398309(0x1a6)]=typeof _0x57cf61==_0x398309(0x1ba)?_0x57cf61:_0x3b3bbb,_0x16de80[_0x398309(0x19e)](_0xde7cf8[_0x398309(0x160)](_0xd05385,_0x1ff61d,_0x57cf61,_0x1e5dac,_0x195b5c)),_0x1e5dac['node']['parent']=_0x1eeeec,_0x1e5dac[_0x398309(0x1d8)][_0x398309(0x1a6)]=_0x4251dd;};}['_addObjectProperty'](_0x4e0828,_0x3842cb,_0x3c9236,_0x1775e0,_0x989363,_0x3d590c,_0x4209ed){var _0x287957=_0x358108,_0x5d9c0d=this;return _0x3842cb[_0x287957(0x120)+_0x989363[_0x287957(0x18c)]()]=!0x0,function(_0x2e888e){var _0x1fa1ff=_0x287957,_0x5d29f4=_0x3d590c['node'][_0x1fa1ff(0x1f0)],_0x3b3483=_0x3d590c['node'][_0x1fa1ff(0x1a6)],_0x2483aa=_0x3d590c['node']['parent'];_0x3d590c[_0x1fa1ff(0x1d8)][_0x1fa1ff(0x19c)]=_0x5d29f4,_0x3d590c[_0x1fa1ff(0x1d8)][_0x1fa1ff(0x1a6)]=_0x2e888e,_0x4e0828[_0x1fa1ff(0x19e)](_0x5d9c0d[_0x1fa1ff(0x160)](_0x3c9236,_0x1775e0,_0x989363,_0x3d590c,_0x4209ed)),_0x3d590c['node'][_0x1fa1ff(0x19c)]=_0x2483aa,_0x3d590c[_0x1fa1ff(0x1d8)][_0x1fa1ff(0x1a6)]=_0x3b3483;};}[_0x358108(0x160)](_0x35e90c,_0x59ef1c,_0x38254b,_0x1d16c7,_0x3a340e){var _0x39443c=_0x358108,_0x3319d8=this;_0x3a340e||(_0x3a340e=function(_0x118e91,_0x39f1ee){return _0x118e91[_0x39f1ee];});var _0x4607ea=_0x38254b[_0x39443c(0x18c)](),_0x10d34e=_0x1d16c7[_0x39443c(0x1e0)]||{},_0x2b6e5c=_0x1d16c7[_0x39443c(0x1a3)],_0x11f6e8=_0x1d16c7['isExpressionToEvaluate'];try{var _0x5720db=this[_0x39443c(0x1a0)](_0x35e90c),_0x56b592=_0x4607ea;_0x5720db&&_0x56b592[0x0]==='\\x27'&&(_0x56b592=_0x56b592[_0x39443c(0x194)](0x1,_0x56b592[_0x39443c(0x1ad)]-0x2));var _0x4315a7=_0x1d16c7[_0x39443c(0x1e0)]=_0x10d34e[_0x39443c(0x120)+_0x56b592];_0x4315a7&&(_0x1d16c7['depth']=_0x1d16c7[_0x39443c(0x1a3)]+0x1),_0x1d16c7[_0x39443c(0x179)]=!!_0x4315a7;var _0x40c9df=typeof _0x38254b=='symbol',_0x183870={'name':_0x40c9df||_0x5720db?_0x4607ea:this[_0x39443c(0x14f)](_0x4607ea)};if(_0x40c9df&&(_0x183870['symbol']=!0x0),!(_0x59ef1c===_0x39443c(0x1ce)||_0x59ef1c===_0x39443c(0x1fb))){var _0x30ac75=this['_getOwnPropertyDescriptor'](_0x35e90c,_0x38254b);if(_0x30ac75&&(_0x30ac75[_0x39443c(0x1a8)]&&(_0x183870['setter']=!0x0),_0x30ac75[_0x39443c(0x1aa)]&&!_0x4315a7&&!_0x1d16c7[_0x39443c(0x195)]))return _0x183870['getter']=!0x0,this['_processTreeNodeResult'](_0x183870,_0x1d16c7),_0x183870;}var _0x38346c;try{_0x38346c=_0x3a340e(_0x35e90c,_0x38254b);}catch(_0x355517){return _0x183870={'name':_0x4607ea,'type':_0x39443c(0x1c2),'error':_0x355517[_0x39443c(0x176)]},this[_0x39443c(0x1a1)](_0x183870,_0x1d16c7),_0x183870;}var _0x3a0bbf=this[_0x39443c(0x136)](_0x38346c),_0x41329c=this[_0x39443c(0x144)](_0x3a0bbf);if(_0x183870[_0x39443c(0x13b)]=_0x3a0bbf,_0x41329c)this[_0x39443c(0x1a1)](_0x183870,_0x1d16c7,_0x38346c,function(){var _0x964a2e=_0x39443c;_0x183870[_0x964a2e(0x16e)]=_0x38346c[_0x964a2e(0x12f)](),!_0x4315a7&&_0x3319d8[_0x964a2e(0x173)](_0x3a0bbf,_0x183870,_0x1d16c7,{});});else{var _0x5aaf8d=_0x1d16c7['autoExpand']&&_0x1d16c7[_0x39443c(0x1e7)]<_0x1d16c7[_0x39443c(0x127)]&&_0x1d16c7['autoExpandPreviousObjects']['indexOf'](_0x38346c)<0x0&&_0x3a0bbf!==_0x39443c(0x1cd)&&_0x1d16c7['autoExpandPropertyCount']<_0x1d16c7[_0x39443c(0x169)];_0x5aaf8d||_0x1d16c7[_0x39443c(0x1e7)]<_0x2b6e5c||_0x4315a7?(this['serialize'](_0x183870,_0x38346c,_0x1d16c7,_0x4315a7||{}),this['_additionalMetadata'](_0x38346c,_0x183870)):this[_0x39443c(0x1a1)](_0x183870,_0x1d16c7,_0x38346c,function(){var _0x1255c2=_0x39443c;_0x3a0bbf===_0x1255c2(0x177)||_0x3a0bbf===_0x1255c2(0x18f)||(delete _0x183870[_0x1255c2(0x16e)],_0x183870[_0x1255c2(0x183)]=!0x0);});}return _0x183870;}finally{_0x1d16c7['expressionsToEvaluate']=_0x10d34e,_0x1d16c7[_0x39443c(0x1a3)]=_0x2b6e5c,_0x1d16c7[_0x39443c(0x179)]=_0x11f6e8;}}['_capIfString'](_0x41011e,_0x599d8d,_0xb1012b,_0x4d8810){var _0x308104=_0x358108,_0x52a174=_0x4d8810['strLength']||_0xb1012b[_0x308104(0x1d2)];if((_0x41011e===_0x308104(0x1fe)||_0x41011e==='String')&&_0x599d8d[_0x308104(0x16e)]){let _0xac95c4=_0x599d8d[_0x308104(0x16e)][_0x308104(0x1ad)];_0xb1012b[_0x308104(0x1eb)]+=_0xac95c4,_0xb1012b[_0x308104(0x1eb)]>_0xb1012b[_0x308104(0x18d)]?(_0x599d8d['capped']='',delete _0x599d8d[_0x308104(0x16e)]):_0xac95c4>_0x52a174&&(_0x599d8d['capped']=_0x599d8d['value'][_0x308104(0x194)](0x0,_0x52a174),delete _0x599d8d[_0x308104(0x16e)]);}}['_isMap'](_0x288757){var _0x290905=_0x358108;return!!(_0x288757&&_0x1a54d6[_0x290905(0x140)]&&this[_0x290905(0x1ca)](_0x288757)===_0x290905(0x16d)&&_0x288757[_0x290905(0x11d)]);}[_0x358108(0x14f)](_0x202bb5){var _0x4952af=_0x358108;if(_0x202bb5[_0x4952af(0x172)](/^\\d+$/))return _0x202bb5;var _0x26a033;try{_0x26a033=JSON['stringify'](''+_0x202bb5);}catch{_0x26a033='\\x22'+this['_objectToString'](_0x202bb5)+'\\x22';}return _0x26a033[_0x4952af(0x172)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x26a033=_0x26a033[_0x4952af(0x194)](0x1,_0x26a033[_0x4952af(0x1ad)]-0x2):_0x26a033=_0x26a033['replace'](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')[_0x4952af(0x13a)](/(^"|"$)/g,'\\x27'),_0x26a033;}['_processTreeNodeResult'](_0x3e9e4e,_0x2e5f13,_0xa52125,_0xe9e7e3){var _0x550921=_0x358108;this[_0x550921(0x17d)](_0x3e9e4e,_0x2e5f13),_0xe9e7e3&&_0xe9e7e3(),this[_0x550921(0x161)](_0xa52125,_0x3e9e4e),this[_0x550921(0x153)](_0x3e9e4e,_0x2e5f13);}[_0x358108(0x17d)](_0xc5bdb4,_0x32fdfb){var _0x250ada=_0x358108;this[_0x250ada(0x1f8)](_0xc5bdb4,_0x32fdfb),this[_0x250ada(0x13c)](_0xc5bdb4,_0x32fdfb),this[_0x250ada(0x180)](_0xc5bdb4,_0x32fdfb),this[_0x250ada(0x159)](_0xc5bdb4,_0x32fdfb);}[_0x358108(0x1f8)](_0x1f998d,_0xdceddd){}['_setNodeQueryPath'](_0x48b8f1,_0x492e42){}['_setNodeLabel'](_0x58c626,_0x5cb283){}['_isUndefined'](_0x4e175d){var _0x2a9117=_0x358108;return _0x4e175d===this[_0x2a9117(0x155)];}[_0x358108(0x153)](_0x590864,_0x2af63a){var _0x429ebf=_0x358108;this['_setNodeLabel'](_0x590864,_0x2af63a),this['_setNodeExpandableState'](_0x590864),_0x2af63a[_0x429ebf(0x14e)]&&this[_0x429ebf(0x13e)](_0x590864),this[_0x429ebf(0x17f)](_0x590864,_0x2af63a),this[_0x429ebf(0x139)](_0x590864,_0x2af63a),this['_cleanNode'](_0x590864);}[_0x358108(0x161)](_0x3cea88,_0x246149){var _0x37ebcf=_0x358108;let _0x4a4561;try{_0x1a54d6[_0x37ebcf(0x128)]&&(_0x4a4561=_0x1a54d6[_0x37ebcf(0x128)][_0x37ebcf(0x1fc)],_0x1a54d6[_0x37ebcf(0x128)][_0x37ebcf(0x1fc)]=function(){}),_0x3cea88&&typeof _0x3cea88[_0x37ebcf(0x1ad)]==_0x37ebcf(0x1ba)&&(_0x246149[_0x37ebcf(0x1ad)]=_0x3cea88['length']);}catch{}finally{_0x4a4561&&(_0x1a54d6[_0x37ebcf(0x128)]['error']=_0x4a4561);}if(_0x246149[_0x37ebcf(0x13b)]===_0x37ebcf(0x1ba)||_0x246149[_0x37ebcf(0x13b)]===_0x37ebcf(0x189)){if(isNaN(_0x246149[_0x37ebcf(0x16e)]))_0x246149[_0x37ebcf(0x1ef)]=!0x0,delete _0x246149['value'];else switch(_0x246149[_0x37ebcf(0x16e)]){case Number['POSITIVE_INFINITY']:_0x246149[_0x37ebcf(0x1b0)]=!0x0,delete _0x246149['value'];break;case Number[_0x37ebcf(0x1b1)]:_0x246149[_0x37ebcf(0x1b2)]=!0x0,delete _0x246149[_0x37ebcf(0x16e)];break;case 0x0:this[_0x37ebcf(0x1c4)](_0x246149[_0x37ebcf(0x16e)])&&(_0x246149[_0x37ebcf(0x1c7)]=!0x0);break;}}else _0x246149[_0x37ebcf(0x13b)]===_0x37ebcf(0x1cd)&&typeof _0x3cea88['name']==_0x37ebcf(0x1fe)&&_0x3cea88[_0x37ebcf(0x185)]&&_0x246149[_0x37ebcf(0x185)]&&_0x3cea88['name']!==_0x246149[_0x37ebcf(0x185)]&&(_0x246149[_0x37ebcf(0x147)]=_0x3cea88['name']);}[_0x358108(0x1c4)](_0x24fdb0){var _0x12a577=_0x358108;return 0x1/_0x24fdb0===Number[_0x12a577(0x1b1)];}[_0x358108(0x13e)](_0x29430c){var _0x5baaff=_0x358108;!_0x29430c[_0x5baaff(0x1d7)]||!_0x29430c[_0x5baaff(0x1d7)][_0x5baaff(0x1ad)]||_0x29430c[_0x5baaff(0x13b)]===_0x5baaff(0x1ce)||_0x29430c[_0x5baaff(0x13b)]===_0x5baaff(0x140)||_0x29430c[_0x5baaff(0x13b)]==='Set'||_0x29430c[_0x5baaff(0x1d7)][_0x5baaff(0x1b7)](function(_0x26c491,_0x2bff98){var _0xe1ab55=_0x5baaff,_0x17dc38=_0x26c491[_0xe1ab55(0x185)][_0xe1ab55(0x1c8)](),_0x51a12b=_0x2bff98[_0xe1ab55(0x185)]['toLowerCase']();return _0x17dc38<_0x51a12b?-0x1:_0x17dc38>_0x51a12b?0x1:0x0;});}[_0x358108(0x17f)](_0x3c20cb,_0x424155){var _0x170d43=_0x358108;if(!(_0x424155[_0x170d43(0x175)]||!_0x3c20cb[_0x170d43(0x1d7)]||!_0x3c20cb[_0x170d43(0x1d7)]['length'])){for(var _0x33f456=[],_0x4d4488=[],_0x4a22d2=0x0,_0x48a776=_0x3c20cb[_0x170d43(0x1d7)]['length'];_0x4a22d2<_0x48a776;_0x4a22d2++){var _0x3c8f54=_0x3c20cb[_0x170d43(0x1d7)][_0x4a22d2];_0x3c8f54[_0x170d43(0x13b)]===_0x170d43(0x1cd)?_0x33f456[_0x170d43(0x19e)](_0x3c8f54):_0x4d4488['push'](_0x3c8f54);}if(!(!_0x4d4488[_0x170d43(0x1ad)]||_0x33f456[_0x170d43(0x1ad)]<=0x1)){_0x3c20cb[_0x170d43(0x1d7)]=_0x4d4488;var _0x58ed04={'functionsNode':!0x0,'props':_0x33f456};this['_setNodeId'](_0x58ed04,_0x424155),this[_0x170d43(0x1dc)](_0x58ed04,_0x424155),this[_0x170d43(0x166)](_0x58ed04),this['_setNodePermissions'](_0x58ed04,_0x424155),_0x58ed04['id']+='\\x20f',_0x3c20cb['props']['unshift'](_0x58ed04);}}}[_0x358108(0x139)](_0xda0e9,_0xc770ea){}[_0x358108(0x166)](_0x2fca2c){}[_0x358108(0x19b)](_0x53fc55){var _0x15871c=_0x358108;return Array[_0x15871c(0x11b)](_0x53fc55)||typeof _0x53fc55==_0x15871c(0x18a)&&this[_0x15871c(0x1ca)](_0x53fc55)===_0x15871c(0x1a2);}[_0x358108(0x159)](_0x3394b4,_0xba32d3){}[_0x358108(0x1f9)](_0x810f29){var _0x473230=_0x358108;delete _0x810f29['_hasSymbolPropertyOnItsPath'],delete _0x810f29[_0x473230(0x1ee)],delete _0x810f29[_0x473230(0x15f)];}[_0x358108(0x180)](_0xf3c8f6,_0x5f5013){}}let _0x3aa5ef=new _0x41aa7a(),_0x4079fd={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x1cbbc0={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0xb2ca1b(_0x463057,_0x160b6e,_0x540616,_0x38be4b,_0x164493,_0x29a3be){var _0x298c19=_0x358108;let _0x7277de,_0x51532;try{_0x51532=_0x3c7de6(),_0x7277de=_0x42f83d[_0x160b6e],!_0x7277de||_0x51532-_0x7277de['ts']>0x1f4&&_0x7277de[_0x298c19(0x133)]&&_0x7277de[_0x298c19(0x124)]/_0x7277de['count']<0x64?(_0x42f83d[_0x160b6e]=_0x7277de={'count':0x0,'time':0x0,'ts':_0x51532},_0x42f83d[_0x298c19(0x11f)]={}):_0x51532-_0x42f83d['hits']['ts']>0x32&&_0x42f83d['hits'][_0x298c19(0x133)]&&_0x42f83d[_0x298c19(0x11f)][_0x298c19(0x124)]/_0x42f83d[_0x298c19(0x11f)][_0x298c19(0x133)]<0x64&&(_0x42f83d[_0x298c19(0x11f)]={});let _0x545fc7=[],_0x28dcbd=_0x7277de[_0x298c19(0x121)]||_0x42f83d[_0x298c19(0x11f)][_0x298c19(0x121)]?_0x1cbbc0:_0x4079fd,_0x3392da=_0x213257=>{var _0x434e2d=_0x298c19;let _0x43dd53={};return _0x43dd53[_0x434e2d(0x1d7)]=_0x213257['props'],_0x43dd53[_0x434e2d(0x14c)]=_0x213257[_0x434e2d(0x14c)],_0x43dd53[_0x434e2d(0x1d2)]=_0x213257['strLength'],_0x43dd53[_0x434e2d(0x18d)]=_0x213257['totalStrLength'],_0x43dd53[_0x434e2d(0x169)]=_0x213257[_0x434e2d(0x169)],_0x43dd53[_0x434e2d(0x127)]=_0x213257[_0x434e2d(0x127)],_0x43dd53[_0x434e2d(0x14e)]=!0x1,_0x43dd53[_0x434e2d(0x175)]=!_0x4cce87,_0x43dd53[_0x434e2d(0x1a3)]=0x1,_0x43dd53[_0x434e2d(0x1e7)]=0x0,_0x43dd53[_0x434e2d(0x18e)]=_0x434e2d(0x1a7),_0x43dd53[_0x434e2d(0x199)]='root_exp',_0x43dd53[_0x434e2d(0x196)]=!0x0,_0x43dd53[_0x434e2d(0x163)]=[],_0x43dd53[_0x434e2d(0x1c6)]=0x0,_0x43dd53[_0x434e2d(0x195)]=!0x0,_0x43dd53['allStrLength']=0x0,_0x43dd53[_0x434e2d(0x1d8)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x43dd53;};for(var _0x107c0b=0x0;_0x107c0b<_0x164493[_0x298c19(0x1ad)];_0x107c0b++)_0x545fc7[_0x298c19(0x19e)](_0x3aa5ef[_0x298c19(0x171)]({'timeNode':_0x463057==='time'||void 0x0},_0x164493[_0x107c0b],_0x3392da(_0x28dcbd),{}));if(_0x463057===_0x298c19(0x11c)){let _0x1a1a99=Error[_0x298c19(0x188)];try{Error[_0x298c19(0x188)]=0x1/0x0,_0x545fc7[_0x298c19(0x19e)](_0x3aa5ef[_0x298c19(0x171)]({'stackNode':!0x0},new Error()['stack'],_0x3392da(_0x28dcbd),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x1a1a99;}}return{'method':_0x298c19(0x174),'version':_0x2914bb,'args':[{'ts':_0x540616,'session':_0x38be4b,'args':_0x545fc7,'id':_0x160b6e,'context':_0x29a3be}]};}catch(_0x5f28ee){return{'method':_0x298c19(0x174),'version':_0x2914bb,'args':[{'ts':_0x540616,'session':_0x38be4b,'args':[{'type':_0x298c19(0x1c2),'error':_0x5f28ee&&_0x5f28ee[_0x298c19(0x176)]}],'id':_0x160b6e,'context':_0x29a3be}]};}finally{try{if(_0x7277de&&_0x51532){let _0x44b4b6=_0x3c7de6();_0x7277de[_0x298c19(0x133)]++,_0x7277de[_0x298c19(0x124)]+=_0x495e57(_0x51532,_0x44b4b6),_0x7277de['ts']=_0x44b4b6,_0x42f83d[_0x298c19(0x11f)][_0x298c19(0x133)]++,_0x42f83d[_0x298c19(0x11f)][_0x298c19(0x124)]+=_0x495e57(_0x51532,_0x44b4b6),_0x42f83d[_0x298c19(0x11f)]['ts']=_0x44b4b6,(_0x7277de[_0x298c19(0x133)]>0x32||_0x7277de['time']>0x64)&&(_0x7277de[_0x298c19(0x121)]=!0x0),(_0x42f83d[_0x298c19(0x11f)][_0x298c19(0x133)]>0x3e8||_0x42f83d[_0x298c19(0x11f)][_0x298c19(0x124)]>0x12c)&&(_0x42f83d[_0x298c19(0x11f)][_0x298c19(0x121)]=!0x0);}}catch{}}}return _0xb2ca1b;}((_0x2c83a6,_0x5628a2,_0x2805be,_0x5f3406,_0x10ac5d,_0x2873d8,_0x1918e5,_0x5a518f,_0x300c8a)=>{var _0x5a41d4=_0x29ec16;if(_0x2c83a6[_0x5a41d4(0x1e5)])return _0x2c83a6[_0x5a41d4(0x1e5)];if(!Y(_0x2c83a6,_0x5a518f,_0x10ac5d))return _0x2c83a6['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x2c83a6[_0x5a41d4(0x1e5)];let _0x401ac9=R(_0x2c83a6),_0x5d5d28=_0x401ac9[_0x5a41d4(0x1f2)],_0x2235a4=_0x401ac9[_0x5a41d4(0x129)],_0x3e5d39=_0x401ac9[_0x5a41d4(0x1bb)],_0x3bf821={'hits':{},'ts':{}},_0x377a42=Q(_0x2c83a6,_0x300c8a,_0x3bf821,_0x2873d8),_0x378968=_0x133fa6=>{_0x3bf821['ts'][_0x133fa6]=_0x2235a4();},_0x11e10d=(_0x5c9297,_0x235dab)=>{let _0x403bcb=_0x3bf821['ts'][_0x235dab];if(delete _0x3bf821['ts'][_0x235dab],_0x403bcb){let _0x3679de=_0x5d5d28(_0x403bcb,_0x2235a4());_0x2e2251(_0x377a42('time',_0x5c9297,_0x3e5d39(),_0x57aee3,[_0x3679de],_0x235dab));}},_0x1ca1df=_0x4b13fa=>_0x43a29b=>{var _0x4e6654=_0x5a41d4;try{_0x378968(_0x43a29b),_0x4b13fa(_0x43a29b);}finally{_0x2c83a6['console'][_0x4e6654(0x124)]=_0x4b13fa;}},_0x1235f8=_0x3da03d=>_0x351357=>{try{let [_0x1947b9,_0x27cb50]=_0x351357['split'](':logPointId:');_0x11e10d(_0x27cb50,_0x1947b9),_0x3da03d(_0x1947b9);}finally{_0x2c83a6['console']['timeEnd']=_0x3da03d;}};_0x2c83a6['_console_ninja']={'consoleLog':(_0x2bb6a8,_0x52669f)=>{var _0x597be9=_0x5a41d4;_0x2c83a6[_0x597be9(0x128)][_0x597be9(0x174)][_0x597be9(0x185)]!==_0x597be9(0x17e)&&_0x2e2251(_0x377a42(_0x597be9(0x174),_0x2bb6a8,_0x3e5d39(),_0x57aee3,_0x52669f));},'consoleTrace':(_0x596fe8,_0x4b1434)=>{var _0x1f2612=_0x5a41d4;_0x2c83a6[_0x1f2612(0x128)]['log'][_0x1f2612(0x185)]!==_0x1f2612(0x1db)&&_0x2e2251(_0x377a42(_0x1f2612(0x11c),_0x596fe8,_0x3e5d39(),_0x57aee3,_0x4b1434));},'consoleTime':()=>{var _0x35f094=_0x5a41d4;_0x2c83a6[_0x35f094(0x128)][_0x35f094(0x124)]=_0x1ca1df(_0x2c83a6[_0x35f094(0x128)][_0x35f094(0x124)]);},'consoleTimeEnd':()=>{var _0x3c31e4=_0x5a41d4;_0x2c83a6[_0x3c31e4(0x128)][_0x3c31e4(0x1ec)]=_0x1235f8(_0x2c83a6['console'][_0x3c31e4(0x1ec)]);},'autoLog':(_0x2d2f37,_0x2158bd)=>{var _0x112de9=_0x5a41d4;_0x2e2251(_0x377a42(_0x112de9(0x174),_0x2158bd,_0x3e5d39(),_0x57aee3,[_0x2d2f37]));},'autoLogMany':(_0x10767c,_0x109e67)=>{var _0xa853ce=_0x5a41d4;_0x2e2251(_0x377a42(_0xa853ce(0x174),_0x10767c,_0x3e5d39(),_0x57aee3,_0x109e67));},'autoTrace':(_0x5811ac,_0x2a75ee)=>{_0x2e2251(_0x377a42('trace',_0x2a75ee,_0x3e5d39(),_0x57aee3,[_0x5811ac]));},'autoTraceMany':(_0x121def,_0x29cb17)=>{var _0xcd7c87=_0x5a41d4;_0x2e2251(_0x377a42(_0xcd7c87(0x11c),_0x121def,_0x3e5d39(),_0x57aee3,_0x29cb17));},'autoTime':(_0x4738a1,_0x561fbe,_0x38c08e)=>{_0x378968(_0x38c08e);},'autoTimeEnd':(_0x1a0359,_0x212642,_0x1c3590)=>{_0x11e10d(_0x212642,_0x1c3590);},'coverage':_0x2218c5=>{var _0x32e4ff=_0x5a41d4;_0x2e2251({'method':_0x32e4ff(0x190),'version':_0x2873d8,'args':[{'id':_0x2218c5}]});}};let _0x2e2251=J(_0x2c83a6,_0x5628a2,_0x2805be,_0x5f3406,_0x10ac5d),_0x57aee3=_0x2c83a6[_0x5a41d4(0x12b)];return _0x2c83a6[_0x5a41d4(0x1e5)];})(globalThis,_0x29ec16(0x143),_0x29ec16(0x157),_0x29ec16(0x1cb),_0x29ec16(0x150),'1.0.0',_0x29ec16(0x1a4),_0x29ec16(0x1f7),'');`);
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

// app/routes/api.user.tsx
var api_user_exports = {};
__export(api_user_exports, {
  action: () => action3,
  loader: () => loader6
});
var loader6 = async ({ request }) => ({ users: await getUsers() }), action3 = async ({ request }) => {
  let formdata = await request.formData(), nickname = formdata.get("nickname"), id = formdata.get("id"), allow = formdata.get("allow"), action4 = formdata.get("action");
  if (action4 === "change_nickname")
    return await updateUserNickname(id, nickname);
  if (action4 === "change_categories") {
    let category = formdata.get("category");
    return await updateUserCategory(id, category);
  }
  if (action4 === "change_allow_assign")
    return await updateUserAssign(id, allow === "true");
  if (action4 === "change_reviewer") {
    let reviewer_name = formdata.get("reviewer");
    return await updateUserReviewer(id, reviewer_name);
  }
  return null;
};

// app/routes/api.word.tsx
var api_word_exports = {};
__export(api_word_exports, {
  loader: () => loader7
});
var loader7 = async ({ request }) => {
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

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index2,
  loader: () => loader8,
  meta: () => meta2
});
var import_node6 = require("@remix-run/node"), import_react29 = require("react"), import_react30 = require("@remix-run/react");
var import_Editor2 = __toESM(require_Editor());

// app/components/Sidebar.tsx
var import_react26 = require("@remix-run/react"), import_react27 = require("react");

// app/components/hooks/useOnlineCount.tsx
var import_react25 = require("react");
function useOnlineCount() {
  let [onlineCount, setOnlineCount] = (0, import_react25.useState)(0), socket = useSocket();
  return (0, import_react25.useEffect)(() => {
    socket && socket.on("count", (data) => {
      setOnlineCount(data);
    });
  }, [socket]), onlineCount;
}

// app/components/Sidebar.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function Sidebar({ user, text }) {
  var _a, _b, _c, _d;
  let onlineCount = useOnlineCount(), [openMenu, setOpenMenu] = (0, import_react27.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: " flex px-2 py-3 text-white bg-gray-600 text-lg font-semibold items-center  gap-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { onClick: () => setOpenMenu((p) => !p), children: openMenu ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Crossburger, {}, void 0, !1, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 28,
        columnNumber: 40
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Hamburger, {}, void 0, !1, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 28,
        columnNumber: 24
      }, this) }, void 0, !1, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      toolname
    ] }, void 0, !0, {
      fileName: "app/components/Sidebar.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      "div",
      {
        className: `flex flex-col text-white bg-[#54606e] overflow-y-auto overflow-x-hidden max-h-[100vh] transition-all -translate-x-full z-30 ${openMenu ? "block translate-x-0" : ""} min-h-[100vh] w-[260px] md:translate-x-0`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "px-2 flex gap-2 flex-col border-b-2 border-b-[#384451] mb-3 pb-2 mt-2 ", children: [
            ((user == null ? void 0 : user.role) === "ADMIN" || (user == null ? void 0 : user.role) === "REVIEWER") && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              import_react26.Link,
              {
                to: `/admin/metabase?session=${user == null ? void 0 : user.username}`,
                className: "decoration-0 text-white bg-gray-500 h-fit px-2 py-1 rounded-sm",
                children: [
                  user == null ? void 0 : user.role,
                  " DASHBOARD"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/Sidebar.tsx",
                lineNumber: 39,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TextInfo, { children: [
              "User : ",
              user == null ? void 0 : user.username.split("@")[0]
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TextInfo, { children: [
              "text id :",
              text == null ? void 0 : text.id
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TextInfo, { children: [
              "Batch : ",
              text == null ? void 0 : text.batch
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 48,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TextInfo, { children: [
              "Approved : ",
              (_a = user == null ? void 0 : user.text) == null ? void 0 : _a.length
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 49,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TextInfo, { children: [
              "Rejected :",
              (_b = user == null ? void 0 : user.rejected_list) == null ? void 0 : _b.length
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 50,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TextInfo, { children: [
              "Online:",
              onlineCount
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 51,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TextInfo, { children: [
              "Reviewed : ",
              (_c = user == null ? void 0 : user.text.filter((r) => r.reviewed)) == null ? void 0 : _c.length
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 52,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "text-sm mb-2 font-bold", children: "History" }, void 0, !1, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 57,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex flex-col gap-2 max-h-fit overflow-y-auto", children: [
              user && ((_d = user == null ? void 0 : user.rejected_list) == null ? void 0 : _d.length) > 0 && ((user == null ? void 0 : user.rejected_list) || []).sort(sortUpdate_reviewed).map((text2) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                HistoryItem,
                {
                  user,
                  id: text2 == null ? void 0 : text2.id,
                  onClick: () => setOpenMenu(!1),
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Cross, {}, void 0, !1, {
                    fileName: "app/components/Sidebar.tsx",
                    lineNumber: 69,
                    columnNumber: 27
                  }, this)
                },
                text2.id + "-rejected",
                !1,
                {
                  fileName: "app/components/Sidebar.tsx",
                  lineNumber: 64,
                  columnNumber: 19
                },
                this
              )),
              ((user == null ? void 0 : user.text) || []).sort(sortUpdate_reviewed).map((text2) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                HistoryItem,
                {
                  user,
                  id: text2 == null ? void 0 : text2.id,
                  onClick: () => setOpenMenu(!1),
                  disabled: text2 == null ? void 0 : text2.reviewed,
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex items-center justify-between flex-1", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Tick, {}, void 0, !1, {
                      fileName: "app/components/Sidebar.tsx",
                      lineNumber: 83,
                      columnNumber: 23
                    }, this),
                    (text2 == null ? void 0 : text2.reviewed) && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: "reviewed" }, void 0, !1, {
                      fileName: "app/components/Sidebar.tsx",
                      lineNumber: 84,
                      columnNumber: 42
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/Sidebar.tsx",
                    lineNumber: 82,
                    columnNumber: 21
                  }, this)
                },
                text2.id + "-accepted",
                !1,
                {
                  fileName: "app/components/Sidebar.tsx",
                  lineNumber: 75,
                  columnNumber: 17
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
        lineNumber: 32,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Sidebar.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
var Sidebar_default = Sidebar;

// app/routes/_index.tsx
var import_remix_utils2 = require("remix-utils");

// app/components/hooks/useModal.tsx
var import_react28 = require("react"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function useModal() {
  let [isOpen, setIsOpen] = (0, import_react28.useState)(!1), openModal = () => {
    setIsOpen(!0);
  };
  return { Toggle_Modal: ({ children, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("button", { onClick: openModal, ...props, children }, void 0, !1, {
    fileName: "app/components/hooks/useModal.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this), Modal: ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    "dialog",
    {
      open: isOpen,
      className: "modal z-20 absolute",
      onClose: () => setIsOpen(!1),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "modal-box w-11/12 max-w-5xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
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
              lineNumber: 24,
              columnNumber: 13
            },
            this
          ),
          children
        ] }, void 0, !0, {
          fileName: "app/components/hooks/useModal.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "modal-backdrop backdrop-blur-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("button", { type: "button", onClick: () => setIsOpen(!1), children: "close" }, void 0, !1, {
          fileName: "app/components/hooks/useModal.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/hooks/useModal.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/hooks/useModal.tsx",
      lineNumber: 18,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/hooks/useModal.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this) };
}
var useModal_default = useModal;

// app/routes/_index.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), loader8 = async ({ request }) => {
  let { NODE_ENV } = process.env, url = new URL(request.url), session = url.searchParams.get("session"), history = url.searchParams.get("history") || null;
  if (session) {
    let user = await createUserIfNotExists(session), text = null;
    return user.allow_assign && (text = await getTextToDisplay(user == null ? void 0 : user.id, history)), { text, user, NODE_ENV, history };
  } else
    return (0, import_node6.redirect)("https://pecha.tools");
}, meta2 = () => [
  { title: "Pecha Tools" },
  { name: "description", content: "Word segmentation" },
  {
    keywords: "pecha,tools,word,segmentation,pecha tools,pecha tools word segmentation"
  }
];
function Index2() {
  var _a, _b;
  let fetcher = (0, import_react30.useFetcher)(), data = (0, import_react30.useLoaderData)(), text = ((_a = data == null ? void 0 : data.text) == null ? void 0 : _a.original_text.trim()) || "", { Modal, Toggle_Modal } = useModal_default(), dialogref = (0, import_react29.useRef)(null), user = data.user, insertHTML = insertHtmlOnText_default(text), newText = checkUnknown_default(insertHTML), editor = useEditorTiptap(newText), socket = useSocket(), revalidate = (0, import_react30.useRevalidator)();
  (0, import_react29.useEffect)(() => {
    socket && (socket.on("change-allow", (data2) => {
      data2.user.id === user.id && revalidate.revalidate();
    }), socket.on("reviewed", (data2) => {
      data2.user.id === user.id && revalidate.revalidate();
    }));
  }, [socket]);
  let saveText2 = async () => {
    let modified_text = editor.getText(), id = data.text.id;
    fetcher.submit(
      { id, modified_text, userId: user.id },
      { method: "POST", action: "/api/text" }
    ), socket == null || socket.emit("text-status-changed", { user });
  }, undoTask = async () => {
    var _a2;
    let text2 = checkUnknown_default(insertHtmlOnText_default((_a2 = data == null ? void 0 : data.text) == null ? void 0 : _a2.original_text));
    editor == null || editor.commands.setContent(text2);
  }, rejectTask = async () => {
    let id = data.text.id;
    fetcher.submit(
      { id, userId: user.id, _action: "reject" },
      { method: "PATCH", action: "/api/text" }
    ), socket == null || socket.emit("text-status-changed", { user });
  }, isButtonDisabled = !data.text || data.text.reviewed;
  return data.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: data.error }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 94,
    columnNumber: 26
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex flex-col md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Sidebar_default, { user: data.user, text: data.text }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex-1 flex items-center flex-col md:mt-[10vh] ", children: [
      data.text ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "fixed bottom-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex items-center justify-between opacity-75 text-sm font-bold px-2 capitalize pt-1 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: "transcript" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 119,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Toggle_Modal, { className: "cursor-pointer", children: "reference" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 121,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Modal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            "iframe",
            {
              className: "w-full h-[80vh]",
              src: "https://docs.google.com/spreadsheets/d/1ZdkguvvvWiqZoEh4LLbceYsnHubBDpAAdi4DToFN9I0/edit?usp=sharing"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 123,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 122,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 118,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_remix_utils2.ClientOnly, { fallback: null, children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_Editor2.default, { editor }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 130,
          columnNumber: 22
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this),
        !editor && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: "loading..." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 132,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 117,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "fixed top-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm text-center py-4", children: [
        !user.allow_assign && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "font-bold first-letter:uppercase first-letter:text-red-400", children: "A single work must have been rejected 3 times or more . please contact admin ." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 103,
          columnNumber: 15
        }, this),
        "Thank you . your work is complete ! \u{1F60A}\u{1F60A}\u{1F60A}",
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this),
        ((_b = user == null ? void 0 : user.rejected_list) == null ? void 0 : _b.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: "you have some rejected work,please visit them" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 111,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: "once work are reviewed , you will be assigned new work" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 113,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, this),
      data.text && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex gap-2 fixed bottom-0 justify-center ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
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
            lineNumber: 137,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
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
            lineNumber: 144,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
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
            lineNumber: 158,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 136,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
}

// app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => admin_default,
  loader: () => loader9
});
var import_react40 = require("react");

// app/components/admin/Header.tsx
var import_react_router_dom = require("react-router-dom");

// app/components/hooks/useColorMode.tsx
var import_react32 = require("react");

// app/components/hooks/useLocalStorage.tsx
var import_react31 = require("react");
function useLocalStorage(key, initialValue) {
  let [storedValue, setStoredValue] = (0, import_react31.useState)(() => {
    try {
      let item = window == null ? void 0 : window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error2) {
      return console.log(...oo_oo2("3ae88faf_0", error2)), initialValue;
    }
  });
  return (0, import_react31.useEffect)(() => {
    try {
      let valueToStore = typeof storedValue == "function" ? storedValue(storedValue) : storedValue;
      window == null || window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error2) {
      console.log(...oo_oo2("3ae88faf_1", error2));
    }
  }, [key, storedValue]), [storedValue, setStoredValue];
}
var useLocalStorage_default = useLocalStorage;
function oo_cm2() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x5a94(_0x1f863a,_0x87b64f){var _0x596df8=_0x596d();return _0x5a94=function(_0x5a944d,_0x134ce9){_0x5a944d=_0x5a944d-0x118;var _0x448733=_0x596df8[_0x5a944d];return _0x448733;},_0x5a94(_0x1f863a,_0x87b64f);}var _0x29ec16=_0x5a94;(function(_0x378825,_0x3b432b){var _0x433c19=_0x5a94,_0x7cdf7d=_0x378825();while(!![]){try{var _0x1251ec=-parseInt(_0x433c19(0x1d1))/0x1+parseInt(_0x433c19(0x1fd))/0x2*(-parseInt(_0x433c19(0x15a))/0x3)+-parseInt(_0x433c19(0x178))/0x4+-parseInt(_0x433c19(0x1f3))/0x5*(-parseInt(_0x433c19(0x197))/0x6)+parseInt(_0x433c19(0x1d9))/0x7+parseInt(_0x433c19(0x1da))/0x8*(parseInt(_0x433c19(0x1cf))/0x9)+parseInt(_0x433c19(0x11e))/0xa*(parseInt(_0x433c19(0x123))/0xb);if(_0x1251ec===_0x3b432b)break;else _0x7cdf7d['push'](_0x7cdf7d['shift']());}catch(_0x4aecb1){_0x7cdf7d['push'](_0x7cdf7d['shift']());}}}(_0x596d,0xea2e0));var j=Object[_0x29ec16(0x1ed)],X=Object[_0x29ec16(0x17b)],G=Object[_0x29ec16(0x1d5)],ee=Object[_0x29ec16(0x1bd)],te=Object[_0x29ec16(0x125)],ne=Object['prototype'][_0x29ec16(0x1b5)],re=(_0x2e0320,_0x53f850,_0x525f29,_0x86fdb9)=>{var _0x58053e=_0x29ec16;if(_0x53f850&&typeof _0x53f850==_0x58053e(0x18a)||typeof _0x53f850=='function'){for(let _0x20edc7 of ee(_0x53f850))!ne[_0x58053e(0x1bc)](_0x2e0320,_0x20edc7)&&_0x20edc7!==_0x525f29&&X(_0x2e0320,_0x20edc7,{'get':()=>_0x53f850[_0x20edc7],'enumerable':!(_0x86fdb9=G(_0x53f850,_0x20edc7))||_0x86fdb9[_0x58053e(0x198)]});}return _0x2e0320;},x=(_0x4f5bfb,_0x15b032,_0x32bbfb)=>(_0x32bbfb=_0x4f5bfb!=null?j(te(_0x4f5bfb)):{},re(_0x15b032||!_0x4f5bfb||!_0x4f5bfb['__es'+'Module']?X(_0x32bbfb,'default',{'value':_0x4f5bfb,'enumerable':!0x0}):_0x32bbfb,_0x4f5bfb)),q=class{constructor(_0x2f16f2,_0x2a8fac,_0x334b71,_0x87f763){var _0x2ab6b8=_0x29ec16;this[_0x2ab6b8(0x12e)]=_0x2f16f2,this[_0x2ab6b8(0x1e1)]=_0x2a8fac,this[_0x2ab6b8(0x1af)]=_0x334b71,this[_0x2ab6b8(0x162)]=_0x87f763,this['_allowedToSend']=!0x0,this[_0x2ab6b8(0x17a)]=!0x0,this['_connected']=!0x1,this[_0x2ab6b8(0x13f)]=!0x1,this[_0x2ab6b8(0x1b4)]=!!this[_0x2ab6b8(0x12e)][_0x2ab6b8(0x167)],this[_0x2ab6b8(0x184)]=null,this[_0x2ab6b8(0x165)]=0x0,this[_0x2ab6b8(0x15c)]=0x14,this[_0x2ab6b8(0x1d3)]=_0x2ab6b8(0x119),this[_0x2ab6b8(0x1c3)]=(this['_inBrowser']?_0x2ab6b8(0x1c5):_0x2ab6b8(0x1e9))+this[_0x2ab6b8(0x1d3)];}async[_0x29ec16(0x1e3)](){var _0x3e453a=_0x29ec16;if(this[_0x3e453a(0x184)])return this[_0x3e453a(0x184)];let _0x1ff4f0;if(this[_0x3e453a(0x1b4)])_0x1ff4f0=this[_0x3e453a(0x12e)][_0x3e453a(0x167)];else{if(this['global'][_0x3e453a(0x1b8)]?.[_0x3e453a(0x1c1)])_0x1ff4f0=this['global']['process']?.[_0x3e453a(0x1c1)];else try{let _0x1a1af9=await import(_0x3e453a(0x15b));_0x1ff4f0=(await import((await import(_0x3e453a(0x1f6)))['pathToFileURL'](_0x1a1af9[_0x3e453a(0x1ac)](this[_0x3e453a(0x162)],'ws/index.js'))[_0x3e453a(0x18c)]()))[_0x3e453a(0x1de)];}catch{try{_0x1ff4f0=require(require(_0x3e453a(0x15b))[_0x3e453a(0x1ac)](this[_0x3e453a(0x162)],'ws'));}catch{throw new Error(_0x3e453a(0x132));}}}return this[_0x3e453a(0x184)]=_0x1ff4f0,_0x1ff4f0;}[_0x29ec16(0x152)](){var _0x3671c4=_0x29ec16;this['_connecting']||this[_0x3671c4(0x1ab)]||this[_0x3671c4(0x165)]>=this[_0x3671c4(0x15c)]||(this[_0x3671c4(0x17a)]=!0x1,this['_connecting']=!0x0,this[_0x3671c4(0x165)]++,this[_0x3671c4(0x1d0)]=new Promise((_0x41351b,_0x5297aa)=>{var _0xf6ddde=_0x3671c4;this[_0xf6ddde(0x1e3)]()[_0xf6ddde(0x156)](_0x31d597=>{var _0x337e8d=_0xf6ddde;let _0x2c9ae6=new _0x31d597('ws://'+this[_0x337e8d(0x1e1)]+':'+this[_0x337e8d(0x1af)]);_0x2c9ae6['onerror']=()=>{var _0x3fbb26=_0x337e8d;this[_0x3fbb26(0x14a)]=!0x1,this['_disposeWebsocket'](_0x2c9ae6),this['_attemptToReconnectShortly'](),_0x5297aa(new Error('logger\\x20websocket\\x20error'));},_0x2c9ae6[_0x337e8d(0x1be)]=()=>{var _0xb85a6d=_0x337e8d;this[_0xb85a6d(0x1b4)]||_0x2c9ae6['_socket']&&_0x2c9ae6[_0xb85a6d(0x193)][_0xb85a6d(0x1df)]&&_0x2c9ae6['_socket'][_0xb85a6d(0x1df)](),_0x41351b(_0x2c9ae6);},_0x2c9ae6[_0x337e8d(0x11a)]=()=>{var _0x22c12f=_0x337e8d;this[_0x22c12f(0x17a)]=!0x0,this[_0x22c12f(0x16f)](_0x2c9ae6),this[_0x22c12f(0x142)]();},_0x2c9ae6[_0x337e8d(0x1e8)]=_0x2989ca=>{var _0x597085=_0x337e8d;try{_0x2989ca&&_0x2989ca[_0x597085(0x19a)]&&this[_0x597085(0x1b4)]&&JSON[_0x597085(0x1a9)](_0x2989ca[_0x597085(0x19a)])[_0x597085(0x137)]===_0x597085(0x138)&&this[_0x597085(0x12e)]['location'][_0x597085(0x138)]();}catch{}};})[_0xf6ddde(0x156)](_0xb45d22=>(this['_connected']=!0x0,this[_0xf6ddde(0x13f)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0xf6ddde(0x14a)]=!0x0,this['_connectAttemptCount']=0x0,_0xb45d22))[_0xf6ddde(0x15d)](_0x49c288=>(this[_0xf6ddde(0x1ab)]=!0x1,this[_0xf6ddde(0x13f)]=!0x1,console[_0xf6ddde(0x1e4)](_0xf6ddde(0x1d4)+this[_0xf6ddde(0x1d3)]),_0x5297aa(new Error(_0xf6ddde(0x16a)+(_0x49c288&&_0x49c288[_0xf6ddde(0x176)])))));}));}[_0x29ec16(0x16f)](_0x384b2e){var _0x268a60=_0x29ec16;this[_0x268a60(0x1ab)]=!0x1,this[_0x268a60(0x13f)]=!0x1;try{_0x384b2e[_0x268a60(0x11a)]=null,_0x384b2e[_0x268a60(0x131)]=null,_0x384b2e[_0x268a60(0x1be)]=null;}catch{}try{_0x384b2e[_0x268a60(0x141)]<0x2&&_0x384b2e[_0x268a60(0x14d)]();}catch{}}[_0x29ec16(0x142)](){var _0x8fe5e3=_0x29ec16;clearTimeout(this['_reconnectTimeout']),!(this[_0x8fe5e3(0x165)]>=this['_maxConnectAttemptCount'])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x4e9eca=_0x8fe5e3;this[_0x4e9eca(0x1ab)]||this['_connecting']||(this[_0x4e9eca(0x152)](),this[_0x4e9eca(0x1d0)]?.[_0x4e9eca(0x15d)](()=>this[_0x4e9eca(0x142)]()));},0x1f4),this[_0x8fe5e3(0x168)][_0x8fe5e3(0x1df)]&&this[_0x8fe5e3(0x168)][_0x8fe5e3(0x1df)]());}async['send'](_0x1323cf){var _0x590dec=_0x29ec16;try{if(!this[_0x590dec(0x14a)])return;this['_allowedToConnectOnSend']&&this['_connectToHostNow'](),(await this[_0x590dec(0x1d0)])[_0x590dec(0x1c9)](JSON[_0x590dec(0x118)](_0x1323cf));}catch(_0x5cec51){console[_0x590dec(0x1e4)](this['_sendErrorMessage']+':\\x20'+(_0x5cec51&&_0x5cec51['message'])),this[_0x590dec(0x14a)]=!0x1,this['_attemptToReconnectShortly']();}}};function J(_0x9c005f,_0x118da5,_0x272c53,_0x4e0018,_0x263482){var _0x4696a0=_0x29ec16;let _0x31d919=_0x272c53['split'](',')[_0x4696a0(0x191)](_0x52aa3b=>{var _0x4d38c3=_0x4696a0;try{_0x9c005f[_0x4d38c3(0x12b)]||((_0x263482===_0x4d38c3(0x16b)||_0x263482===_0x4d38c3(0x154)||_0x263482===_0x4d38c3(0x1a5))&&(_0x263482+=_0x9c005f[_0x4d38c3(0x1b8)]?.[_0x4d38c3(0x146)]?.[_0x4d38c3(0x1d8)]?_0x4d38c3(0x135):_0x4d38c3(0x12d)),_0x9c005f['_console_ninja_session']={'id':+new Date(),'tool':_0x263482});let _0x3ec116=new q(_0x9c005f,_0x118da5,_0x52aa3b,_0x4e0018);return _0x3ec116[_0x4d38c3(0x1c9)][_0x4d38c3(0x158)](_0x3ec116);}catch(_0x228885){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x228885&&_0x228885[_0x4d38c3(0x176)]),()=>{};}});return _0x5af9bc=>_0x31d919[_0x4696a0(0x11d)](_0x30cf42=>_0x30cf42(_0x5af9bc));}function R(_0x2b0724){var _0x13cdc5=_0x29ec16;let _0x4e1d39=function(_0x29dbff,_0x351635){return _0x351635-_0x29dbff;},_0x47ea32;if(_0x2b0724[_0x13cdc5(0x1c0)])_0x47ea32=function(){var _0x41a38f=_0x13cdc5;return _0x2b0724[_0x41a38f(0x1c0)]['now']();};else{if(_0x2b0724[_0x13cdc5(0x1b8)]&&_0x2b0724[_0x13cdc5(0x1b8)][_0x13cdc5(0x149)])_0x47ea32=function(){return _0x2b0724['process']['hrtime']();},_0x4e1d39=function(_0x555844,_0xf983dd){return 0x3e8*(_0xf983dd[0x0]-_0x555844[0x0])+(_0xf983dd[0x1]-_0x555844[0x1])/0xf4240;};else try{let {performance:_0x27cbe4}=require(_0x13cdc5(0x1d6));_0x47ea32=function(){var _0x328ff6=_0x13cdc5;return _0x27cbe4[_0x328ff6(0x1bb)]();};}catch{_0x47ea32=function(){return+new Date();};}}return{'elapsed':_0x4e1d39,'timeStamp':_0x47ea32,'now':()=>Date['now']()};}function Y(_0x497fa6,_0x1de612,_0x52b12a){var _0x4197a6=_0x29ec16;if(_0x497fa6['_consoleNinjaAllowedToStart']!==void 0x0)return _0x497fa6[_0x4197a6(0x18b)];let _0x55886f=_0x497fa6[_0x4197a6(0x1b8)]?.[_0x4197a6(0x146)]?.['node'];return _0x55886f&&_0x52b12a===_0x4197a6(0x187)?_0x497fa6[_0x4197a6(0x18b)]=!0x1:_0x497fa6[_0x4197a6(0x18b)]=_0x55886f||!_0x1de612||_0x497fa6['location']?.[_0x4197a6(0x186)]&&_0x1de612[_0x4197a6(0x1f5)](_0x497fa6[_0x4197a6(0x134)]['hostname']),_0x497fa6[_0x4197a6(0x18b)];}function _0x596d(){var _0x39d0fc=['_isArray','parent','boolean','push','String','_isMap','_processTreeNodeResult','[object\\x20Array]','depth','1693892758570','astro','index','root_exp_id','set','parse','get','_connected','join','length','cappedElements','port','positiveInfinity','NEGATIVE_INFINITY','negativeInfinity','prototype','_inBrowser','hasOwnProperty','date','sort','process','_keyStrRegExp','number','now','call','getOwnPropertyNames','onopen','[object\\x20Set]','performance','_WebSocket','unknown','_sendErrorMessage','_isNegativeZero','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','autoExpandPropertyCount','negativeZero','toLowerCase','send','_objectToString',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.215\\\\node_modules",'constructor','function','array','197649oanYyr','_ws','1148752rVCfrp','strLength','_webSocketErrorDocsLink','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','getOwnPropertyDescriptor','perf_hooks','props','node','4534642xtZfPH','496pYYPXv','disabledTrace','_setNodeLabel','Boolean','default','unref','expressionsToEvaluate','host','_addObjectProperty','getWebSocketClass','warn','_console_ninja','bigint','level','onmessage','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','concat','allStrLength','timeEnd','create','_hasSetOnItsPath','nan','current','_addProperty','elapsed','399015tYiXHS','_getOwnPropertyDescriptor','includes','url',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.5"],'_setNodeId','_cleanNode','_numberRegExp','Error','error','37420XgtHnT','string','stringify','https://tinyurl.com/37x8b79t','onclose','isArray','trace','forEach','10Wuloxx','hits','_p_','reduceLimits','_HTMLAllCollection','9543050sITGEg','time','getPrototypeOf','_Symbol','autoExpandMaxDepth','console','timeStamp','Buffer','_console_ninja_session','_p_length','\\x20browser','global','valueOf','pop','onerror','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','count','location','\\x20server','_type','method','reload','_addLoadNode','replace','type','_setNodeQueryPath','[object\\x20BigInt]','_sortProps','_connecting','Map','readyState','_attemptToReconnectShortly','127.0.0.1','_isPrimitiveType','test','versions','funcName','Set','hrtime','_allowedToSend','getOwnPropertySymbols','elements','close','sortProps','_propertyName','remix','Symbol','_connectToHostNow','_treeNodePropertiesAfterFullValue','remix','_undefined','then','51528','bind','_setNodePermissions','84JTjgCo','path','_maxConnectAttemptCount','catch','_blacklistedProperty','_hasMapOnItsPath','_property','_additionalMetadata','nodeModules','autoExpandPreviousObjects','_isSet','_connectAttemptCount','_setNodeExpandableState','WebSocket','_reconnectTimeout','autoExpandLimit','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','next.js','_regExpToString','[object\\x20Map]','value','_disposeWebsocket','_isPrimitiveWrapperType','serialize','match','_capIfString','log','noFunctions','message','null','1618848HBykyM','isExpressionToEvaluate','_allowedToConnectOnSend','defineProperty','_p_name','_treeNodePropertiesBeforeFullValue','disabledLog','_addFunctionsNode','_setNodeExpressionPath','HTMLAllCollection','_getOwnPropertySymbols','capped','_WebSocketClass','name','hostname','nuxt','stackTraceLimit','Number','object','_consoleNinjaAllowedToStart','toString','totalStrLength','expId','undefined','coverage','map','_dateToString','_socket','substr','resolveGetters','autoExpand','12LJFPff','enumerable','rootExpression','data'];_0x596d=function(){return _0x39d0fc;};return _0x596d();}function Q(_0x1a54d6,_0x4cce87,_0x42f83d,_0x2914bb){var _0x358108=_0x29ec16;_0x1a54d6=_0x1a54d6,_0x4cce87=_0x4cce87,_0x42f83d=_0x42f83d,_0x2914bb=_0x2914bb;let _0x27b04b=R(_0x1a54d6),_0x495e57=_0x27b04b[_0x358108(0x1f2)],_0x3c7de6=_0x27b04b['timeStamp'];class _0x41aa7a{constructor(){var _0x289855=_0x358108;this[_0x289855(0x1b9)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x289855(0x1fa)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x289855(0x155)]=_0x1a54d6[_0x289855(0x18f)],this[_0x289855(0x122)]=_0x1a54d6[_0x289855(0x181)],this[_0x289855(0x1f4)]=Object[_0x289855(0x1d5)],this['_getOwnPropertyNames']=Object[_0x289855(0x1bd)],this['_Symbol']=_0x1a54d6[_0x289855(0x151)],this[_0x289855(0x16c)]=RegExp['prototype'][_0x289855(0x18c)],this[_0x289855(0x192)]=Date[_0x289855(0x1b3)]['toString'];}[_0x358108(0x171)](_0x5b0512,_0xda648c,_0x28fed6,_0x473671){var _0x4f9300=_0x358108,_0x156e1d=this,_0x52112f=_0x28fed6[_0x4f9300(0x196)];function _0x2517d0(_0xe3afa4,_0x41580a,_0x326cc3){var _0x372978=_0x4f9300;_0x41580a['type']=_0x372978(0x1c2),_0x41580a[_0x372978(0x1fc)]=_0xe3afa4[_0x372978(0x176)],_0x55ec42=_0x326cc3[_0x372978(0x1d8)][_0x372978(0x1f0)],_0x326cc3['node'][_0x372978(0x1f0)]=_0x41580a,_0x156e1d[_0x372978(0x17d)](_0x41580a,_0x326cc3);}try{_0x28fed6['level']++,_0x28fed6[_0x4f9300(0x196)]&&_0x28fed6['autoExpandPreviousObjects'][_0x4f9300(0x19e)](_0xda648c);var _0x5702d9,_0x35ef51,_0x33bf1b,_0x2f1dbd,_0x2d1c40=[],_0xb815b7=[],_0x207fd2,_0x3f75c6=this[_0x4f9300(0x136)](_0xda648c),_0x431e9f=_0x3f75c6==='array',_0x251710=!0x1,_0x2685da=_0x3f75c6===_0x4f9300(0x1cd),_0x253dae=this[_0x4f9300(0x144)](_0x3f75c6),_0x3b360d=this[_0x4f9300(0x170)](_0x3f75c6),_0x4b3bf1=_0x253dae||_0x3b360d,_0x400a27={},_0x3dacb8=0x0,_0x2cfdb0=!0x1,_0x55ec42,_0x2daec5=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x28fed6[_0x4f9300(0x1a3)]){if(_0x431e9f){if(_0x35ef51=_0xda648c[_0x4f9300(0x1ad)],_0x35ef51>_0x28fed6['elements']){for(_0x33bf1b=0x0,_0x2f1dbd=_0x28fed6[_0x4f9300(0x14c)],_0x5702d9=_0x33bf1b;_0x5702d9<_0x2f1dbd;_0x5702d9++)_0xb815b7['push'](_0x156e1d[_0x4f9300(0x1f1)](_0x2d1c40,_0xda648c,_0x3f75c6,_0x5702d9,_0x28fed6));_0x5b0512[_0x4f9300(0x1ae)]=!0x0;}else{for(_0x33bf1b=0x0,_0x2f1dbd=_0x35ef51,_0x5702d9=_0x33bf1b;_0x5702d9<_0x2f1dbd;_0x5702d9++)_0xb815b7['push'](_0x156e1d[_0x4f9300(0x1f1)](_0x2d1c40,_0xda648c,_0x3f75c6,_0x5702d9,_0x28fed6));}_0x28fed6[_0x4f9300(0x1c6)]+=_0xb815b7[_0x4f9300(0x1ad)];}if(!(_0x3f75c6==='null'||_0x3f75c6===_0x4f9300(0x18f))&&!_0x253dae&&_0x3f75c6!==_0x4f9300(0x19f)&&_0x3f75c6!==_0x4f9300(0x12a)&&_0x3f75c6!=='bigint'){var _0x1657c9=_0x473671['props']||_0x28fed6[_0x4f9300(0x1d7)];if(this[_0x4f9300(0x164)](_0xda648c)?(_0x5702d9=0x0,_0xda648c['forEach'](function(_0x3bf33e){var _0x2a272d=_0x4f9300;if(_0x3dacb8++,_0x28fed6[_0x2a272d(0x1c6)]++,_0x3dacb8>_0x1657c9){_0x2cfdb0=!0x0;return;}if(!_0x28fed6['isExpressionToEvaluate']&&_0x28fed6['autoExpand']&&_0x28fed6[_0x2a272d(0x1c6)]>_0x28fed6[_0x2a272d(0x169)]){_0x2cfdb0=!0x0;return;}_0xb815b7[_0x2a272d(0x19e)](_0x156e1d[_0x2a272d(0x1f1)](_0x2d1c40,_0xda648c,_0x2a272d(0x148),_0x5702d9++,_0x28fed6,function(_0x5290d9){return function(){return _0x5290d9;};}(_0x3bf33e)));})):this[_0x4f9300(0x1a0)](_0xda648c)&&_0xda648c[_0x4f9300(0x11d)](function(_0x344254,_0x162c1c){var _0x1d46d7=_0x4f9300;if(_0x3dacb8++,_0x28fed6[_0x1d46d7(0x1c6)]++,_0x3dacb8>_0x1657c9){_0x2cfdb0=!0x0;return;}if(!_0x28fed6[_0x1d46d7(0x179)]&&_0x28fed6[_0x1d46d7(0x196)]&&_0x28fed6[_0x1d46d7(0x1c6)]>_0x28fed6['autoExpandLimit']){_0x2cfdb0=!0x0;return;}var _0x2afa0b=_0x162c1c['toString']();_0x2afa0b['length']>0x64&&(_0x2afa0b=_0x2afa0b['slice'](0x0,0x64)+'...'),_0xb815b7[_0x1d46d7(0x19e)](_0x156e1d[_0x1d46d7(0x1f1)](_0x2d1c40,_0xda648c,'Map',_0x2afa0b,_0x28fed6,function(_0x1a1e28){return function(){return _0x1a1e28;};}(_0x344254)));}),!_0x251710){try{for(_0x207fd2 in _0xda648c)if(!(_0x431e9f&&_0x2daec5[_0x4f9300(0x145)](_0x207fd2))&&!this[_0x4f9300(0x15e)](_0xda648c,_0x207fd2,_0x28fed6)){if(_0x3dacb8++,_0x28fed6['autoExpandPropertyCount']++,_0x3dacb8>_0x1657c9){_0x2cfdb0=!0x0;break;}if(!_0x28fed6['isExpressionToEvaluate']&&_0x28fed6[_0x4f9300(0x196)]&&_0x28fed6[_0x4f9300(0x1c6)]>_0x28fed6['autoExpandLimit']){_0x2cfdb0=!0x0;break;}_0xb815b7[_0x4f9300(0x19e)](_0x156e1d[_0x4f9300(0x1e2)](_0x2d1c40,_0x400a27,_0xda648c,_0x3f75c6,_0x207fd2,_0x28fed6));}}catch{}if(_0x400a27[_0x4f9300(0x12c)]=!0x0,_0x2685da&&(_0x400a27[_0x4f9300(0x17c)]=!0x0),!_0x2cfdb0){var _0x4afca9=[][_0x4f9300(0x1ea)](this['_getOwnPropertyNames'](_0xda648c))[_0x4f9300(0x1ea)](this[_0x4f9300(0x182)](_0xda648c));for(_0x5702d9=0x0,_0x35ef51=_0x4afca9[_0x4f9300(0x1ad)];_0x5702d9<_0x35ef51;_0x5702d9++)if(_0x207fd2=_0x4afca9[_0x5702d9],!(_0x431e9f&&_0x2daec5[_0x4f9300(0x145)](_0x207fd2['toString']()))&&!this[_0x4f9300(0x15e)](_0xda648c,_0x207fd2,_0x28fed6)&&!_0x400a27[_0x4f9300(0x120)+_0x207fd2[_0x4f9300(0x18c)]()]){if(_0x3dacb8++,_0x28fed6[_0x4f9300(0x1c6)]++,_0x3dacb8>_0x1657c9){_0x2cfdb0=!0x0;break;}if(!_0x28fed6[_0x4f9300(0x179)]&&_0x28fed6[_0x4f9300(0x196)]&&_0x28fed6[_0x4f9300(0x1c6)]>_0x28fed6[_0x4f9300(0x169)]){_0x2cfdb0=!0x0;break;}_0xb815b7[_0x4f9300(0x19e)](_0x156e1d[_0x4f9300(0x1e2)](_0x2d1c40,_0x400a27,_0xda648c,_0x3f75c6,_0x207fd2,_0x28fed6));}}}}}if(_0x5b0512[_0x4f9300(0x13b)]=_0x3f75c6,_0x4b3bf1?(_0x5b0512[_0x4f9300(0x16e)]=_0xda648c[_0x4f9300(0x12f)](),this[_0x4f9300(0x173)](_0x3f75c6,_0x5b0512,_0x28fed6,_0x473671)):_0x3f75c6===_0x4f9300(0x1b6)?_0x5b0512[_0x4f9300(0x16e)]=this[_0x4f9300(0x192)][_0x4f9300(0x1bc)](_0xda648c):_0x3f75c6===_0x4f9300(0x1e6)?_0x5b0512[_0x4f9300(0x16e)]=_0xda648c['toString']():_0x3f75c6==='RegExp'?_0x5b0512['value']=this[_0x4f9300(0x16c)][_0x4f9300(0x1bc)](_0xda648c):_0x3f75c6==='symbol'&&this[_0x4f9300(0x126)]?_0x5b0512[_0x4f9300(0x16e)]=this[_0x4f9300(0x126)]['prototype'][_0x4f9300(0x18c)][_0x4f9300(0x1bc)](_0xda648c):!_0x28fed6[_0x4f9300(0x1a3)]&&!(_0x3f75c6===_0x4f9300(0x177)||_0x3f75c6===_0x4f9300(0x18f))&&(delete _0x5b0512[_0x4f9300(0x16e)],_0x5b0512[_0x4f9300(0x183)]=!0x0),_0x2cfdb0&&(_0x5b0512['cappedProps']=!0x0),_0x55ec42=_0x28fed6[_0x4f9300(0x1d8)][_0x4f9300(0x1f0)],_0x28fed6[_0x4f9300(0x1d8)][_0x4f9300(0x1f0)]=_0x5b0512,this[_0x4f9300(0x17d)](_0x5b0512,_0x28fed6),_0xb815b7[_0x4f9300(0x1ad)]){for(_0x5702d9=0x0,_0x35ef51=_0xb815b7[_0x4f9300(0x1ad)];_0x5702d9<_0x35ef51;_0x5702d9++)_0xb815b7[_0x5702d9](_0x5702d9);}_0x2d1c40[_0x4f9300(0x1ad)]&&(_0x5b0512['props']=_0x2d1c40);}catch(_0xc900f){_0x2517d0(_0xc900f,_0x5b0512,_0x28fed6);}return this['_additionalMetadata'](_0xda648c,_0x5b0512),this[_0x4f9300(0x153)](_0x5b0512,_0x28fed6),_0x28fed6[_0x4f9300(0x1d8)][_0x4f9300(0x1f0)]=_0x55ec42,_0x28fed6[_0x4f9300(0x1e7)]--,_0x28fed6[_0x4f9300(0x196)]=_0x52112f,_0x28fed6[_0x4f9300(0x196)]&&_0x28fed6[_0x4f9300(0x163)][_0x4f9300(0x130)](),_0x5b0512;}[_0x358108(0x182)](_0x55e14c){var _0x2003a1=_0x358108;return Object[_0x2003a1(0x14b)]?Object['getOwnPropertySymbols'](_0x55e14c):[];}[_0x358108(0x164)](_0x3a52f0){var _0x5aec6e=_0x358108;return!!(_0x3a52f0&&_0x1a54d6[_0x5aec6e(0x148)]&&this[_0x5aec6e(0x1ca)](_0x3a52f0)===_0x5aec6e(0x1bf)&&_0x3a52f0[_0x5aec6e(0x11d)]);}[_0x358108(0x15e)](_0x30cc20,_0xcd0501,_0x57bf9e){var _0x373ba1=_0x358108;return _0x57bf9e[_0x373ba1(0x175)]?typeof _0x30cc20[_0xcd0501]==_0x373ba1(0x1cd):!0x1;}[_0x358108(0x136)](_0x478374){var _0x2b0765=_0x358108,_0x4a437c='';return _0x4a437c=typeof _0x478374,_0x4a437c===_0x2b0765(0x18a)?this[_0x2b0765(0x1ca)](_0x478374)===_0x2b0765(0x1a2)?_0x4a437c=_0x2b0765(0x1ce):this[_0x2b0765(0x1ca)](_0x478374)==='[object\\x20Date]'?_0x4a437c=_0x2b0765(0x1b6):this[_0x2b0765(0x1ca)](_0x478374)===_0x2b0765(0x13d)?_0x4a437c=_0x2b0765(0x1e6):_0x478374===null?_0x4a437c=_0x2b0765(0x177):_0x478374[_0x2b0765(0x1cc)]&&(_0x4a437c=_0x478374[_0x2b0765(0x1cc)][_0x2b0765(0x185)]||_0x4a437c):_0x4a437c===_0x2b0765(0x18f)&&this[_0x2b0765(0x122)]&&_0x478374 instanceof this[_0x2b0765(0x122)]&&(_0x4a437c='HTMLAllCollection'),_0x4a437c;}[_0x358108(0x1ca)](_0x1303db){var _0x22dc3a=_0x358108;return Object[_0x22dc3a(0x1b3)][_0x22dc3a(0x18c)][_0x22dc3a(0x1bc)](_0x1303db);}[_0x358108(0x144)](_0x195b4d){var _0x3c5437=_0x358108;return _0x195b4d===_0x3c5437(0x19d)||_0x195b4d==='string'||_0x195b4d==='number';}[_0x358108(0x170)](_0xda5716){var _0x354faf=_0x358108;return _0xda5716===_0x354faf(0x1dd)||_0xda5716===_0x354faf(0x19f)||_0xda5716===_0x354faf(0x189);}[_0x358108(0x1f1)](_0x16de80,_0xd05385,_0x1ff61d,_0x57cf61,_0x1e5dac,_0x195b5c){var _0xde7cf8=this;return function(_0x3b3bbb){var _0x398309=_0x5a94,_0x290cf4=_0x1e5dac[_0x398309(0x1d8)][_0x398309(0x1f0)],_0x4251dd=_0x1e5dac[_0x398309(0x1d8)][_0x398309(0x1a6)],_0x1eeeec=_0x1e5dac[_0x398309(0x1d8)][_0x398309(0x19c)];_0x1e5dac['node'][_0x398309(0x19c)]=_0x290cf4,_0x1e5dac['node'][_0x398309(0x1a6)]=typeof _0x57cf61==_0x398309(0x1ba)?_0x57cf61:_0x3b3bbb,_0x16de80[_0x398309(0x19e)](_0xde7cf8[_0x398309(0x160)](_0xd05385,_0x1ff61d,_0x57cf61,_0x1e5dac,_0x195b5c)),_0x1e5dac['node']['parent']=_0x1eeeec,_0x1e5dac[_0x398309(0x1d8)][_0x398309(0x1a6)]=_0x4251dd;};}['_addObjectProperty'](_0x4e0828,_0x3842cb,_0x3c9236,_0x1775e0,_0x989363,_0x3d590c,_0x4209ed){var _0x287957=_0x358108,_0x5d9c0d=this;return _0x3842cb[_0x287957(0x120)+_0x989363[_0x287957(0x18c)]()]=!0x0,function(_0x2e888e){var _0x1fa1ff=_0x287957,_0x5d29f4=_0x3d590c['node'][_0x1fa1ff(0x1f0)],_0x3b3483=_0x3d590c['node'][_0x1fa1ff(0x1a6)],_0x2483aa=_0x3d590c['node']['parent'];_0x3d590c[_0x1fa1ff(0x1d8)][_0x1fa1ff(0x19c)]=_0x5d29f4,_0x3d590c[_0x1fa1ff(0x1d8)][_0x1fa1ff(0x1a6)]=_0x2e888e,_0x4e0828[_0x1fa1ff(0x19e)](_0x5d9c0d[_0x1fa1ff(0x160)](_0x3c9236,_0x1775e0,_0x989363,_0x3d590c,_0x4209ed)),_0x3d590c['node'][_0x1fa1ff(0x19c)]=_0x2483aa,_0x3d590c[_0x1fa1ff(0x1d8)][_0x1fa1ff(0x1a6)]=_0x3b3483;};}[_0x358108(0x160)](_0x35e90c,_0x59ef1c,_0x38254b,_0x1d16c7,_0x3a340e){var _0x39443c=_0x358108,_0x3319d8=this;_0x3a340e||(_0x3a340e=function(_0x118e91,_0x39f1ee){return _0x118e91[_0x39f1ee];});var _0x4607ea=_0x38254b[_0x39443c(0x18c)](),_0x10d34e=_0x1d16c7[_0x39443c(0x1e0)]||{},_0x2b6e5c=_0x1d16c7[_0x39443c(0x1a3)],_0x11f6e8=_0x1d16c7['isExpressionToEvaluate'];try{var _0x5720db=this[_0x39443c(0x1a0)](_0x35e90c),_0x56b592=_0x4607ea;_0x5720db&&_0x56b592[0x0]==='\\x27'&&(_0x56b592=_0x56b592[_0x39443c(0x194)](0x1,_0x56b592[_0x39443c(0x1ad)]-0x2));var _0x4315a7=_0x1d16c7[_0x39443c(0x1e0)]=_0x10d34e[_0x39443c(0x120)+_0x56b592];_0x4315a7&&(_0x1d16c7['depth']=_0x1d16c7[_0x39443c(0x1a3)]+0x1),_0x1d16c7[_0x39443c(0x179)]=!!_0x4315a7;var _0x40c9df=typeof _0x38254b=='symbol',_0x183870={'name':_0x40c9df||_0x5720db?_0x4607ea:this[_0x39443c(0x14f)](_0x4607ea)};if(_0x40c9df&&(_0x183870['symbol']=!0x0),!(_0x59ef1c===_0x39443c(0x1ce)||_0x59ef1c===_0x39443c(0x1fb))){var _0x30ac75=this['_getOwnPropertyDescriptor'](_0x35e90c,_0x38254b);if(_0x30ac75&&(_0x30ac75[_0x39443c(0x1a8)]&&(_0x183870['setter']=!0x0),_0x30ac75[_0x39443c(0x1aa)]&&!_0x4315a7&&!_0x1d16c7[_0x39443c(0x195)]))return _0x183870['getter']=!0x0,this['_processTreeNodeResult'](_0x183870,_0x1d16c7),_0x183870;}var _0x38346c;try{_0x38346c=_0x3a340e(_0x35e90c,_0x38254b);}catch(_0x355517){return _0x183870={'name':_0x4607ea,'type':_0x39443c(0x1c2),'error':_0x355517[_0x39443c(0x176)]},this[_0x39443c(0x1a1)](_0x183870,_0x1d16c7),_0x183870;}var _0x3a0bbf=this[_0x39443c(0x136)](_0x38346c),_0x41329c=this[_0x39443c(0x144)](_0x3a0bbf);if(_0x183870[_0x39443c(0x13b)]=_0x3a0bbf,_0x41329c)this[_0x39443c(0x1a1)](_0x183870,_0x1d16c7,_0x38346c,function(){var _0x964a2e=_0x39443c;_0x183870[_0x964a2e(0x16e)]=_0x38346c[_0x964a2e(0x12f)](),!_0x4315a7&&_0x3319d8[_0x964a2e(0x173)](_0x3a0bbf,_0x183870,_0x1d16c7,{});});else{var _0x5aaf8d=_0x1d16c7['autoExpand']&&_0x1d16c7[_0x39443c(0x1e7)]<_0x1d16c7[_0x39443c(0x127)]&&_0x1d16c7['autoExpandPreviousObjects']['indexOf'](_0x38346c)<0x0&&_0x3a0bbf!==_0x39443c(0x1cd)&&_0x1d16c7['autoExpandPropertyCount']<_0x1d16c7[_0x39443c(0x169)];_0x5aaf8d||_0x1d16c7[_0x39443c(0x1e7)]<_0x2b6e5c||_0x4315a7?(this['serialize'](_0x183870,_0x38346c,_0x1d16c7,_0x4315a7||{}),this['_additionalMetadata'](_0x38346c,_0x183870)):this[_0x39443c(0x1a1)](_0x183870,_0x1d16c7,_0x38346c,function(){var _0x1255c2=_0x39443c;_0x3a0bbf===_0x1255c2(0x177)||_0x3a0bbf===_0x1255c2(0x18f)||(delete _0x183870[_0x1255c2(0x16e)],_0x183870[_0x1255c2(0x183)]=!0x0);});}return _0x183870;}finally{_0x1d16c7['expressionsToEvaluate']=_0x10d34e,_0x1d16c7[_0x39443c(0x1a3)]=_0x2b6e5c,_0x1d16c7[_0x39443c(0x179)]=_0x11f6e8;}}['_capIfString'](_0x41011e,_0x599d8d,_0xb1012b,_0x4d8810){var _0x308104=_0x358108,_0x52a174=_0x4d8810['strLength']||_0xb1012b[_0x308104(0x1d2)];if((_0x41011e===_0x308104(0x1fe)||_0x41011e==='String')&&_0x599d8d[_0x308104(0x16e)]){let _0xac95c4=_0x599d8d[_0x308104(0x16e)][_0x308104(0x1ad)];_0xb1012b[_0x308104(0x1eb)]+=_0xac95c4,_0xb1012b[_0x308104(0x1eb)]>_0xb1012b[_0x308104(0x18d)]?(_0x599d8d['capped']='',delete _0x599d8d[_0x308104(0x16e)]):_0xac95c4>_0x52a174&&(_0x599d8d['capped']=_0x599d8d['value'][_0x308104(0x194)](0x0,_0x52a174),delete _0x599d8d[_0x308104(0x16e)]);}}['_isMap'](_0x288757){var _0x290905=_0x358108;return!!(_0x288757&&_0x1a54d6[_0x290905(0x140)]&&this[_0x290905(0x1ca)](_0x288757)===_0x290905(0x16d)&&_0x288757[_0x290905(0x11d)]);}[_0x358108(0x14f)](_0x202bb5){var _0x4952af=_0x358108;if(_0x202bb5[_0x4952af(0x172)](/^\\d+$/))return _0x202bb5;var _0x26a033;try{_0x26a033=JSON['stringify'](''+_0x202bb5);}catch{_0x26a033='\\x22'+this['_objectToString'](_0x202bb5)+'\\x22';}return _0x26a033[_0x4952af(0x172)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x26a033=_0x26a033[_0x4952af(0x194)](0x1,_0x26a033[_0x4952af(0x1ad)]-0x2):_0x26a033=_0x26a033['replace'](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')[_0x4952af(0x13a)](/(^"|"$)/g,'\\x27'),_0x26a033;}['_processTreeNodeResult'](_0x3e9e4e,_0x2e5f13,_0xa52125,_0xe9e7e3){var _0x550921=_0x358108;this[_0x550921(0x17d)](_0x3e9e4e,_0x2e5f13),_0xe9e7e3&&_0xe9e7e3(),this[_0x550921(0x161)](_0xa52125,_0x3e9e4e),this[_0x550921(0x153)](_0x3e9e4e,_0x2e5f13);}[_0x358108(0x17d)](_0xc5bdb4,_0x32fdfb){var _0x250ada=_0x358108;this[_0x250ada(0x1f8)](_0xc5bdb4,_0x32fdfb),this[_0x250ada(0x13c)](_0xc5bdb4,_0x32fdfb),this[_0x250ada(0x180)](_0xc5bdb4,_0x32fdfb),this[_0x250ada(0x159)](_0xc5bdb4,_0x32fdfb);}[_0x358108(0x1f8)](_0x1f998d,_0xdceddd){}['_setNodeQueryPath'](_0x48b8f1,_0x492e42){}['_setNodeLabel'](_0x58c626,_0x5cb283){}['_isUndefined'](_0x4e175d){var _0x2a9117=_0x358108;return _0x4e175d===this[_0x2a9117(0x155)];}[_0x358108(0x153)](_0x590864,_0x2af63a){var _0x429ebf=_0x358108;this['_setNodeLabel'](_0x590864,_0x2af63a),this['_setNodeExpandableState'](_0x590864),_0x2af63a[_0x429ebf(0x14e)]&&this[_0x429ebf(0x13e)](_0x590864),this[_0x429ebf(0x17f)](_0x590864,_0x2af63a),this[_0x429ebf(0x139)](_0x590864,_0x2af63a),this['_cleanNode'](_0x590864);}[_0x358108(0x161)](_0x3cea88,_0x246149){var _0x37ebcf=_0x358108;let _0x4a4561;try{_0x1a54d6[_0x37ebcf(0x128)]&&(_0x4a4561=_0x1a54d6[_0x37ebcf(0x128)][_0x37ebcf(0x1fc)],_0x1a54d6[_0x37ebcf(0x128)][_0x37ebcf(0x1fc)]=function(){}),_0x3cea88&&typeof _0x3cea88[_0x37ebcf(0x1ad)]==_0x37ebcf(0x1ba)&&(_0x246149[_0x37ebcf(0x1ad)]=_0x3cea88['length']);}catch{}finally{_0x4a4561&&(_0x1a54d6[_0x37ebcf(0x128)]['error']=_0x4a4561);}if(_0x246149[_0x37ebcf(0x13b)]===_0x37ebcf(0x1ba)||_0x246149[_0x37ebcf(0x13b)]===_0x37ebcf(0x189)){if(isNaN(_0x246149[_0x37ebcf(0x16e)]))_0x246149[_0x37ebcf(0x1ef)]=!0x0,delete _0x246149['value'];else switch(_0x246149[_0x37ebcf(0x16e)]){case Number['POSITIVE_INFINITY']:_0x246149[_0x37ebcf(0x1b0)]=!0x0,delete _0x246149['value'];break;case Number[_0x37ebcf(0x1b1)]:_0x246149[_0x37ebcf(0x1b2)]=!0x0,delete _0x246149[_0x37ebcf(0x16e)];break;case 0x0:this[_0x37ebcf(0x1c4)](_0x246149[_0x37ebcf(0x16e)])&&(_0x246149[_0x37ebcf(0x1c7)]=!0x0);break;}}else _0x246149[_0x37ebcf(0x13b)]===_0x37ebcf(0x1cd)&&typeof _0x3cea88['name']==_0x37ebcf(0x1fe)&&_0x3cea88[_0x37ebcf(0x185)]&&_0x246149[_0x37ebcf(0x185)]&&_0x3cea88['name']!==_0x246149[_0x37ebcf(0x185)]&&(_0x246149[_0x37ebcf(0x147)]=_0x3cea88['name']);}[_0x358108(0x1c4)](_0x24fdb0){var _0x12a577=_0x358108;return 0x1/_0x24fdb0===Number[_0x12a577(0x1b1)];}[_0x358108(0x13e)](_0x29430c){var _0x5baaff=_0x358108;!_0x29430c[_0x5baaff(0x1d7)]||!_0x29430c[_0x5baaff(0x1d7)][_0x5baaff(0x1ad)]||_0x29430c[_0x5baaff(0x13b)]===_0x5baaff(0x1ce)||_0x29430c[_0x5baaff(0x13b)]===_0x5baaff(0x140)||_0x29430c[_0x5baaff(0x13b)]==='Set'||_0x29430c[_0x5baaff(0x1d7)][_0x5baaff(0x1b7)](function(_0x26c491,_0x2bff98){var _0xe1ab55=_0x5baaff,_0x17dc38=_0x26c491[_0xe1ab55(0x185)][_0xe1ab55(0x1c8)](),_0x51a12b=_0x2bff98[_0xe1ab55(0x185)]['toLowerCase']();return _0x17dc38<_0x51a12b?-0x1:_0x17dc38>_0x51a12b?0x1:0x0;});}[_0x358108(0x17f)](_0x3c20cb,_0x424155){var _0x170d43=_0x358108;if(!(_0x424155[_0x170d43(0x175)]||!_0x3c20cb[_0x170d43(0x1d7)]||!_0x3c20cb[_0x170d43(0x1d7)]['length'])){for(var _0x33f456=[],_0x4d4488=[],_0x4a22d2=0x0,_0x48a776=_0x3c20cb[_0x170d43(0x1d7)]['length'];_0x4a22d2<_0x48a776;_0x4a22d2++){var _0x3c8f54=_0x3c20cb[_0x170d43(0x1d7)][_0x4a22d2];_0x3c8f54[_0x170d43(0x13b)]===_0x170d43(0x1cd)?_0x33f456[_0x170d43(0x19e)](_0x3c8f54):_0x4d4488['push'](_0x3c8f54);}if(!(!_0x4d4488[_0x170d43(0x1ad)]||_0x33f456[_0x170d43(0x1ad)]<=0x1)){_0x3c20cb[_0x170d43(0x1d7)]=_0x4d4488;var _0x58ed04={'functionsNode':!0x0,'props':_0x33f456};this['_setNodeId'](_0x58ed04,_0x424155),this[_0x170d43(0x1dc)](_0x58ed04,_0x424155),this[_0x170d43(0x166)](_0x58ed04),this['_setNodePermissions'](_0x58ed04,_0x424155),_0x58ed04['id']+='\\x20f',_0x3c20cb['props']['unshift'](_0x58ed04);}}}[_0x358108(0x139)](_0xda0e9,_0xc770ea){}[_0x358108(0x166)](_0x2fca2c){}[_0x358108(0x19b)](_0x53fc55){var _0x15871c=_0x358108;return Array[_0x15871c(0x11b)](_0x53fc55)||typeof _0x53fc55==_0x15871c(0x18a)&&this[_0x15871c(0x1ca)](_0x53fc55)===_0x15871c(0x1a2);}[_0x358108(0x159)](_0x3394b4,_0xba32d3){}[_0x358108(0x1f9)](_0x810f29){var _0x473230=_0x358108;delete _0x810f29['_hasSymbolPropertyOnItsPath'],delete _0x810f29[_0x473230(0x1ee)],delete _0x810f29[_0x473230(0x15f)];}[_0x358108(0x180)](_0xf3c8f6,_0x5f5013){}}let _0x3aa5ef=new _0x41aa7a(),_0x4079fd={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x1cbbc0={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0xb2ca1b(_0x463057,_0x160b6e,_0x540616,_0x38be4b,_0x164493,_0x29a3be){var _0x298c19=_0x358108;let _0x7277de,_0x51532;try{_0x51532=_0x3c7de6(),_0x7277de=_0x42f83d[_0x160b6e],!_0x7277de||_0x51532-_0x7277de['ts']>0x1f4&&_0x7277de[_0x298c19(0x133)]&&_0x7277de[_0x298c19(0x124)]/_0x7277de['count']<0x64?(_0x42f83d[_0x160b6e]=_0x7277de={'count':0x0,'time':0x0,'ts':_0x51532},_0x42f83d[_0x298c19(0x11f)]={}):_0x51532-_0x42f83d['hits']['ts']>0x32&&_0x42f83d['hits'][_0x298c19(0x133)]&&_0x42f83d[_0x298c19(0x11f)][_0x298c19(0x124)]/_0x42f83d[_0x298c19(0x11f)][_0x298c19(0x133)]<0x64&&(_0x42f83d[_0x298c19(0x11f)]={});let _0x545fc7=[],_0x28dcbd=_0x7277de[_0x298c19(0x121)]||_0x42f83d[_0x298c19(0x11f)][_0x298c19(0x121)]?_0x1cbbc0:_0x4079fd,_0x3392da=_0x213257=>{var _0x434e2d=_0x298c19;let _0x43dd53={};return _0x43dd53[_0x434e2d(0x1d7)]=_0x213257['props'],_0x43dd53[_0x434e2d(0x14c)]=_0x213257[_0x434e2d(0x14c)],_0x43dd53[_0x434e2d(0x1d2)]=_0x213257['strLength'],_0x43dd53[_0x434e2d(0x18d)]=_0x213257['totalStrLength'],_0x43dd53[_0x434e2d(0x169)]=_0x213257[_0x434e2d(0x169)],_0x43dd53[_0x434e2d(0x127)]=_0x213257[_0x434e2d(0x127)],_0x43dd53[_0x434e2d(0x14e)]=!0x1,_0x43dd53[_0x434e2d(0x175)]=!_0x4cce87,_0x43dd53[_0x434e2d(0x1a3)]=0x1,_0x43dd53[_0x434e2d(0x1e7)]=0x0,_0x43dd53[_0x434e2d(0x18e)]=_0x434e2d(0x1a7),_0x43dd53[_0x434e2d(0x199)]='root_exp',_0x43dd53[_0x434e2d(0x196)]=!0x0,_0x43dd53[_0x434e2d(0x163)]=[],_0x43dd53[_0x434e2d(0x1c6)]=0x0,_0x43dd53[_0x434e2d(0x195)]=!0x0,_0x43dd53['allStrLength']=0x0,_0x43dd53[_0x434e2d(0x1d8)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x43dd53;};for(var _0x107c0b=0x0;_0x107c0b<_0x164493[_0x298c19(0x1ad)];_0x107c0b++)_0x545fc7[_0x298c19(0x19e)](_0x3aa5ef[_0x298c19(0x171)]({'timeNode':_0x463057==='time'||void 0x0},_0x164493[_0x107c0b],_0x3392da(_0x28dcbd),{}));if(_0x463057===_0x298c19(0x11c)){let _0x1a1a99=Error[_0x298c19(0x188)];try{Error[_0x298c19(0x188)]=0x1/0x0,_0x545fc7[_0x298c19(0x19e)](_0x3aa5ef[_0x298c19(0x171)]({'stackNode':!0x0},new Error()['stack'],_0x3392da(_0x28dcbd),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x1a1a99;}}return{'method':_0x298c19(0x174),'version':_0x2914bb,'args':[{'ts':_0x540616,'session':_0x38be4b,'args':_0x545fc7,'id':_0x160b6e,'context':_0x29a3be}]};}catch(_0x5f28ee){return{'method':_0x298c19(0x174),'version':_0x2914bb,'args':[{'ts':_0x540616,'session':_0x38be4b,'args':[{'type':_0x298c19(0x1c2),'error':_0x5f28ee&&_0x5f28ee[_0x298c19(0x176)]}],'id':_0x160b6e,'context':_0x29a3be}]};}finally{try{if(_0x7277de&&_0x51532){let _0x44b4b6=_0x3c7de6();_0x7277de[_0x298c19(0x133)]++,_0x7277de[_0x298c19(0x124)]+=_0x495e57(_0x51532,_0x44b4b6),_0x7277de['ts']=_0x44b4b6,_0x42f83d[_0x298c19(0x11f)][_0x298c19(0x133)]++,_0x42f83d[_0x298c19(0x11f)][_0x298c19(0x124)]+=_0x495e57(_0x51532,_0x44b4b6),_0x42f83d[_0x298c19(0x11f)]['ts']=_0x44b4b6,(_0x7277de[_0x298c19(0x133)]>0x32||_0x7277de['time']>0x64)&&(_0x7277de[_0x298c19(0x121)]=!0x0),(_0x42f83d[_0x298c19(0x11f)][_0x298c19(0x133)]>0x3e8||_0x42f83d[_0x298c19(0x11f)][_0x298c19(0x124)]>0x12c)&&(_0x42f83d[_0x298c19(0x11f)][_0x298c19(0x121)]=!0x0);}}catch{}}}return _0xb2ca1b;}((_0x2c83a6,_0x5628a2,_0x2805be,_0x5f3406,_0x10ac5d,_0x2873d8,_0x1918e5,_0x5a518f,_0x300c8a)=>{var _0x5a41d4=_0x29ec16;if(_0x2c83a6[_0x5a41d4(0x1e5)])return _0x2c83a6[_0x5a41d4(0x1e5)];if(!Y(_0x2c83a6,_0x5a518f,_0x10ac5d))return _0x2c83a6['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x2c83a6[_0x5a41d4(0x1e5)];let _0x401ac9=R(_0x2c83a6),_0x5d5d28=_0x401ac9[_0x5a41d4(0x1f2)],_0x2235a4=_0x401ac9[_0x5a41d4(0x129)],_0x3e5d39=_0x401ac9[_0x5a41d4(0x1bb)],_0x3bf821={'hits':{},'ts':{}},_0x377a42=Q(_0x2c83a6,_0x300c8a,_0x3bf821,_0x2873d8),_0x378968=_0x133fa6=>{_0x3bf821['ts'][_0x133fa6]=_0x2235a4();},_0x11e10d=(_0x5c9297,_0x235dab)=>{let _0x403bcb=_0x3bf821['ts'][_0x235dab];if(delete _0x3bf821['ts'][_0x235dab],_0x403bcb){let _0x3679de=_0x5d5d28(_0x403bcb,_0x2235a4());_0x2e2251(_0x377a42('time',_0x5c9297,_0x3e5d39(),_0x57aee3,[_0x3679de],_0x235dab));}},_0x1ca1df=_0x4b13fa=>_0x43a29b=>{var _0x4e6654=_0x5a41d4;try{_0x378968(_0x43a29b),_0x4b13fa(_0x43a29b);}finally{_0x2c83a6['console'][_0x4e6654(0x124)]=_0x4b13fa;}},_0x1235f8=_0x3da03d=>_0x351357=>{try{let [_0x1947b9,_0x27cb50]=_0x351357['split'](':logPointId:');_0x11e10d(_0x27cb50,_0x1947b9),_0x3da03d(_0x1947b9);}finally{_0x2c83a6['console']['timeEnd']=_0x3da03d;}};_0x2c83a6['_console_ninja']={'consoleLog':(_0x2bb6a8,_0x52669f)=>{var _0x597be9=_0x5a41d4;_0x2c83a6[_0x597be9(0x128)][_0x597be9(0x174)][_0x597be9(0x185)]!==_0x597be9(0x17e)&&_0x2e2251(_0x377a42(_0x597be9(0x174),_0x2bb6a8,_0x3e5d39(),_0x57aee3,_0x52669f));},'consoleTrace':(_0x596fe8,_0x4b1434)=>{var _0x1f2612=_0x5a41d4;_0x2c83a6[_0x1f2612(0x128)]['log'][_0x1f2612(0x185)]!==_0x1f2612(0x1db)&&_0x2e2251(_0x377a42(_0x1f2612(0x11c),_0x596fe8,_0x3e5d39(),_0x57aee3,_0x4b1434));},'consoleTime':()=>{var _0x35f094=_0x5a41d4;_0x2c83a6[_0x35f094(0x128)][_0x35f094(0x124)]=_0x1ca1df(_0x2c83a6[_0x35f094(0x128)][_0x35f094(0x124)]);},'consoleTimeEnd':()=>{var _0x3c31e4=_0x5a41d4;_0x2c83a6[_0x3c31e4(0x128)][_0x3c31e4(0x1ec)]=_0x1235f8(_0x2c83a6['console'][_0x3c31e4(0x1ec)]);},'autoLog':(_0x2d2f37,_0x2158bd)=>{var _0x112de9=_0x5a41d4;_0x2e2251(_0x377a42(_0x112de9(0x174),_0x2158bd,_0x3e5d39(),_0x57aee3,[_0x2d2f37]));},'autoLogMany':(_0x10767c,_0x109e67)=>{var _0xa853ce=_0x5a41d4;_0x2e2251(_0x377a42(_0xa853ce(0x174),_0x10767c,_0x3e5d39(),_0x57aee3,_0x109e67));},'autoTrace':(_0x5811ac,_0x2a75ee)=>{_0x2e2251(_0x377a42('trace',_0x2a75ee,_0x3e5d39(),_0x57aee3,[_0x5811ac]));},'autoTraceMany':(_0x121def,_0x29cb17)=>{var _0xcd7c87=_0x5a41d4;_0x2e2251(_0x377a42(_0xcd7c87(0x11c),_0x121def,_0x3e5d39(),_0x57aee3,_0x29cb17));},'autoTime':(_0x4738a1,_0x561fbe,_0x38c08e)=>{_0x378968(_0x38c08e);},'autoTimeEnd':(_0x1a0359,_0x212642,_0x1c3590)=>{_0x11e10d(_0x212642,_0x1c3590);},'coverage':_0x2218c5=>{var _0x32e4ff=_0x5a41d4;_0x2e2251({'method':_0x32e4ff(0x190),'version':_0x2873d8,'args':[{'id':_0x2218c5}]});}};let _0x2e2251=J(_0x2c83a6,_0x5628a2,_0x2805be,_0x5f3406,_0x10ac5d),_0x57aee3=_0x2c83a6[_0x5a41d4(0x12b)];return _0x2c83a6[_0x5a41d4(0x1e5)];})(globalThis,_0x29ec16(0x143),_0x29ec16(0x157),_0x29ec16(0x1cb),_0x29ec16(0x150),'1.0.0',_0x29ec16(0x1a4),_0x29ec16(0x1f7),'');`);
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

// app/components/hooks/useColorMode.tsx
var useColorMode = () => {
  let [colorMode, setColorMode] = useLocalStorage_default("color-theme", "light");
  return (0, import_react32.useEffect)(() => {
    let className = "dark", bodyClass = window == null ? void 0 : window.document.body.classList;
    colorMode === "dark" ? bodyClass.add(className) : bodyClass.remove(className);
  }, [colorMode]), [colorMode, setColorMode];
}, useColorMode_default = useColorMode;

// app/components/DarkModeSwitcher.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), DarkModeSwitcher = () => {
  let [colorMode, setColorMode] = useColorMode_default();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
    "label",
    {
      className: `relative m-0 block h-7.5 w-14 rounded-full ${colorMode === "dark" ? "bg-primary" : "bg-stroke"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "input",
          {
            type: "checkbox",
            onChange: () => {
              typeof setColorMode == "function" && setColorMode(colorMode === "light" ? "dark" : "light");
            },
            className: "dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
          },
          void 0,
          !1,
          {
            fileName: "app/components/DarkModeSwitcher.tsx",
            lineNumber: 13,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "span",
          {
            className: `absolute top-1/2 left-[3px] flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear ${colorMode === "dark" && "!right-[3px] !translate-x-full"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "dark:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                "svg",
                {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                      "path",
                      {
                        d: "M7.99992 12.6666C10.5772 12.6666 12.6666 10.5772 12.6666 7.99992C12.6666 5.42259 10.5772 3.33325 7.99992 3.33325C5.42259 3.33325 3.33325 5.42259 3.33325 7.99992C3.33325 10.5772 5.42259 12.6666 7.99992 12.6666Z",
                        fill: "#969AA1"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/DarkModeSwitcher.tsx",
                        lineNumber: 35,
                        columnNumber: 15
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                      "path",
                      {
                        d: "M8.00008 15.3067C7.63341 15.3067 7.33342 15.0334 7.33342 14.6667V14.6134C7.33342 14.2467 7.63341 13.9467 8.00008 13.9467C8.36675 13.9467 8.66675 14.2467 8.66675 14.6134C8.66675 14.9801 8.36675 15.3067 8.00008 15.3067ZM12.7601 13.4267C12.5867 13.4267 12.4201 13.3601 12.2867 13.2334L12.2001 13.1467C11.9401 12.8867 11.9401 12.4667 12.2001 12.2067C12.4601 11.9467 12.8801 11.9467 13.1401 12.2067L13.2267 12.2934C13.4867 12.5534 13.4867 12.9734 13.2267 13.2334C13.1001 13.3601 12.9334 13.4267 12.7601 13.4267ZM3.24008 13.4267C3.06675 13.4267 2.90008 13.3601 2.76675 13.2334C2.50675 12.9734 2.50675 12.5534 2.76675 12.2934L2.85342 12.2067C3.11342 11.9467 3.53341 11.9467 3.79341 12.2067C4.05341 12.4667 4.05341 12.8867 3.79341 13.1467L3.70675 13.2334C3.58008 13.3601 3.40675 13.4267 3.24008 13.4267ZM14.6667 8.66675H14.6134C14.2467 8.66675 13.9467 8.36675 13.9467 8.00008C13.9467 7.63341 14.2467 7.33342 14.6134 7.33342C14.9801 7.33342 15.3067 7.63341 15.3067 8.00008C15.3067 8.36675 15.0334 8.66675 14.6667 8.66675ZM1.38675 8.66675H1.33341C0.966748 8.66675 0.666748 8.36675 0.666748 8.00008C0.666748 7.63341 0.966748 7.33342 1.33341 7.33342C1.70008 7.33342 2.02675 7.63341 2.02675 8.00008C2.02675 8.36675 1.75341 8.66675 1.38675 8.66675ZM12.6734 3.99341C12.5001 3.99341 12.3334 3.92675 12.2001 3.80008C11.9401 3.54008 11.9401 3.12008 12.2001 2.86008L12.2867 2.77341C12.5467 2.51341 12.9667 2.51341 13.2267 2.77341C13.4867 3.03341 13.4867 3.45341 13.2267 3.71341L13.1401 3.80008C13.0134 3.92675 12.8467 3.99341 12.6734 3.99341ZM3.32675 3.99341C3.15341 3.99341 2.98675 3.92675 2.85342 3.80008L2.76675 3.70675C2.50675 3.44675 2.50675 3.02675 2.76675 2.76675C3.02675 2.50675 3.44675 2.50675 3.70675 2.76675L3.79341 2.85342C4.05341 3.11342 4.05341 3.53341 3.79341 3.79341C3.66675 3.92675 3.49341 3.99341 3.32675 3.99341ZM8.00008 2.02675C7.63341 2.02675 7.33342 1.75341 7.33342 1.38675V1.33341C7.33342 0.966748 7.63341 0.666748 8.00008 0.666748C8.36675 0.666748 8.66675 0.966748 8.66675 1.33341C8.66675 1.70008 8.36675 2.02675 8.00008 2.02675Z",
                        fill: "#969AA1"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/DarkModeSwitcher.tsx",
                        lineNumber: 39,
                        columnNumber: 15
                      },
                      this
                    )
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/DarkModeSwitcher.tsx",
                  lineNumber: 28,
                  columnNumber: 13
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/DarkModeSwitcher.tsx",
                lineNumber: 27,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "hidden dark:inline-block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                "svg",
                {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                    "path",
                    {
                      d: "M14.3533 10.62C14.2466 10.44 13.9466 10.16 13.1999 10.2933C12.7866 10.3667 12.3666 10.4 11.9466 10.38C10.3933 10.3133 8.98659 9.6 8.00659 8.5C7.13993 7.53333 6.60659 6.27333 6.59993 4.91333C6.59993 4.15333 6.74659 3.42 7.04659 2.72666C7.33993 2.05333 7.13326 1.7 6.98659 1.55333C6.83326 1.4 6.47326 1.18666 5.76659 1.48C3.03993 2.62666 1.35326 5.36 1.55326 8.28666C1.75326 11.04 3.68659 13.3933 6.24659 14.28C6.85993 14.4933 7.50659 14.62 8.17326 14.6467C8.27993 14.6533 8.38659 14.66 8.49326 14.66C10.7266 14.66 12.8199 13.6067 14.1399 11.8133C14.5866 11.1933 14.4666 10.8 14.3533 10.62Z",
                      fill: "#969AA1"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/DarkModeSwitcher.tsx",
                      lineNumber: 53,
                      columnNumber: 15
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/components/DarkModeSwitcher.tsx",
                  lineNumber: 46,
                  columnNumber: 13
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/DarkModeSwitcher.tsx",
                lineNumber: 45,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/DarkModeSwitcher.tsx",
            lineNumber: 22,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/DarkModeSwitcher.tsx",
      lineNumber: 8,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/DarkModeSwitcher.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}, DarkModeSwitcher_default = DarkModeSwitcher;

// app/components/Dropdowns/DropdownMessage.tsx
var import_react33 = require("react"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), DropdownMessage = () => {
  let [dropdownOpen, setDropdownOpen] = (0, import_react33.useState)(!1), trigger = (0, import_react33.useRef)(null), dropdown = (0, import_react33.useRef)(null);
  return (0, import_react33.useEffect)(() => {
    let clickHandler = ({ target }) => {
      dropdown.current && (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target) || setDropdownOpen(!1));
    };
    return document.addEventListener("click", clickHandler), () => document.removeEventListener("click", clickHandler);
  }), (0, import_react33.useEffect)(() => {
    let keyHandler = ({ keyCode }) => {
      !dropdownOpen || keyCode !== 27 || setDropdownOpen(!1);
    };
    return document.addEventListener("keydown", keyHandler), () => document.removeEventListener("keydown", keyHandler);
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { className: "relative", "x-data": "{ dropdownOpen: false, notifying: true }", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "div",
      {
        ref: trigger,
        onClick: () => setDropdownOpen(!dropdownOpen),
        className: "relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { className: "absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-meta-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { className: "absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75" }, void 0, !1, {
            fileName: "app/components/Dropdowns/DropdownMessage.tsx",
            lineNumber: 49,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Dropdowns/DropdownMessage.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
            "svg",
            {
              className: "fill-current duration-300 ease-in-out",
              width: "18",
              height: "18",
              viewBox: "0 0 18 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                  "path",
                  {
                    d: "M10.9688 1.57495H7.03135C3.43135 1.57495 0.506348 4.41558 0.506348 7.90308C0.506348 11.3906 2.75635 13.8375 8.26885 16.3125C8.40947 16.3687 8.52197 16.3968 8.6626 16.3968C8.85947 16.3968 9.02822 16.3406 9.19697 16.2281C9.47822 16.0593 9.64697 15.75 9.64697 15.4125V14.2031H10.9688C14.5688 14.2031 17.522 11.3625 17.522 7.87495C17.522 4.38745 14.5688 1.57495 10.9688 1.57495ZM10.9688 12.9937H9.3376C8.80322 12.9937 8.35322 13.4437 8.35322 13.9781V15.0187C3.6001 12.825 1.74385 10.8 1.74385 7.9312C1.74385 5.14683 4.10635 2.8687 7.03135 2.8687H10.9688C13.8657 2.8687 16.2563 5.14683 16.2563 7.9312C16.2563 10.7156 13.8657 12.9937 10.9688 12.9937Z",
                    fill: ""
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Dropdowns/DropdownMessage.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                  "path",
                  {
                    d: "M5.42812 7.28442C5.0625 7.28442 4.78125 7.56567 4.78125 7.9313C4.78125 8.29692 5.0625 8.57817 5.42812 8.57817C5.79375 8.57817 6.075 8.29692 6.075 7.9313C6.075 7.56567 5.79375 7.28442 5.42812 7.28442Z",
                    fill: ""
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Dropdowns/DropdownMessage.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                  "path",
                  {
                    d: "M9.00015 7.28442C8.63452 7.28442 8.35327 7.56567 8.35327 7.9313C8.35327 8.29692 8.63452 8.57817 9.00015 8.57817C9.33765 8.57817 9.64702 8.29692 9.64702 7.9313C9.64702 7.56567 9.33765 7.28442 9.00015 7.28442Z",
                    fill: ""
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Dropdowns/DropdownMessage.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                  "path",
                  {
                    d: "M12.5719 7.28442C12.2063 7.28442 11.925 7.56567 11.925 7.9313C11.925 8.29692 12.2063 8.57817 12.5719 8.57817C12.9375 8.57817 13.2188 8.29692 13.2188 7.9313C13.2188 7.56567 12.9094 7.28442 12.5719 7.28442Z",
                    fill: ""
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Dropdowns/DropdownMessage.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/Dropdowns/DropdownMessage.tsx",
              lineNumber: 52,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Dropdowns/DropdownMessage.tsx",
        lineNumber: 43,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "div",
      {
        ref: dropdown,
        onFocus: () => setDropdownOpen(!0),
        onBlur: () => setDropdownOpen(!1),
        className: `absolute -right-16 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 ${dropdownOpen === !0 ? "block" : "hidden"}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "px-4.5 py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h5", { className: "text-sm font-medium text-bodydark2", children: "Messages" }, void 0, !1, {
            fileName: "app/components/Dropdowns/DropdownMessage.tsx",
            lineNumber: 89,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Dropdowns/DropdownMessage.tsx",
            lineNumber: 88,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("ul", { className: "flex h-auto flex-col overflow-y-auto" }, void 0, !1, {
            fileName: "app/components/Dropdowns/DropdownMessage.tsx",
            lineNumber: 92,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Dropdowns/DropdownMessage.tsx",
        lineNumber: 80,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Dropdowns/DropdownMessage.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}, DropdownMessage_default = DropdownMessage;

// app/components/Dropdowns/DropdownNotification.tsx
var import_react34 = require("react"), import_react35 = require("@remix-run/react"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), DropdownNotification = () => {
  let [dropdownOpen, setDropdownOpen] = (0, import_react34.useState)(!1), trigger = (0, import_react34.useRef)(null), dropdown = (0, import_react34.useRef)(null);
  return (0, import_react34.useEffect)(() => {
    let clickHandler = ({ target }) => {
      dropdown.current && (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target) || setDropdownOpen(!1));
    };
    return document.addEventListener("click", clickHandler), () => document.removeEventListener("click", clickHandler);
  }), (0, import_react34.useEffect)(() => {
    let keyHandler = ({ keyCode }) => {
      !dropdownOpen || keyCode !== 27 || setDropdownOpen(!1);
    };
    return document.addEventListener("keydown", keyHandler), () => document.removeEventListener("keydown", keyHandler);
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      "div",
      {
        ref: trigger,
        onClick: () => setDropdownOpen(!dropdownOpen),
        className: "relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75" }, void 0, !1, {
            fileName: "app/components/Dropdowns/DropdownNotification.tsx",
            lineNumber: 43,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Dropdowns/DropdownNotification.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            "svg",
            {
              className: "fill-current duration-300 ease-in-out",
              width: "18",
              height: "18",
              viewBox: "0 0 18 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                "path",
                {
                  d: "M16.1999 14.9343L15.6374 14.0624C15.5249 13.8937 15.4687 13.7249 15.4687 13.528V7.67803C15.4687 6.01865 14.7655 4.47178 13.4718 3.31865C12.4312 2.39053 11.0812 1.7999 9.64678 1.6874V1.1249C9.64678 0.787402 9.36553 0.478027 8.9999 0.478027C8.6624 0.478027 8.35303 0.759277 8.35303 1.1249V1.65928C8.29678 1.65928 8.24053 1.65928 8.18428 1.6874C4.92178 2.05303 2.4749 4.66865 2.4749 7.79053V13.528C2.44678 13.8093 2.39053 13.9499 2.33428 14.0343L1.7999 14.9343C1.63115 15.2155 1.63115 15.553 1.7999 15.8343C1.96865 16.0874 2.2499 16.2562 2.55928 16.2562H8.38115V16.8749C8.38115 17.2124 8.6624 17.5218 9.02803 17.5218C9.36553 17.5218 9.6749 17.2405 9.6749 16.8749V16.2562H15.4687C15.778 16.2562 16.0593 16.0874 16.228 15.8343C16.3968 15.553 16.3968 15.2155 16.1999 14.9343ZM3.23428 14.9905L3.43115 14.653C3.5999 14.3718 3.68428 14.0343 3.74053 13.6405V7.79053C3.74053 5.31553 5.70928 3.23428 8.3249 2.95303C9.92803 2.78428 11.503 3.2624 12.6562 4.2749C13.6687 5.1749 14.2312 6.38428 14.2312 7.67803V13.528C14.2312 13.9499 14.3437 14.3437 14.5968 14.7374L14.7655 14.9905H3.23428Z",
                  fill: ""
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Dropdowns/DropdownNotification.tsx",
                  lineNumber: 54,
                  columnNumber: 11
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/Dropdowns/DropdownNotification.tsx",
              lineNumber: 46,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Dropdowns/DropdownNotification.tsx",
        lineNumber: 37,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      "div",
      {
        ref: dropdown,
        onFocus: () => setDropdownOpen(!0),
        onBlur: () => setDropdownOpen(!1),
        className: `absolute p-2 -right-27 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 ${dropdownOpen === !0 ? "block" : "hidden"}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "px-4.5 py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h5", { className: "text-sm font-medium text-bodydark2", children: "Notification" }, void 0, !1, {
            fileName: "app/components/Dropdowns/DropdownNotification.tsx",
            lineNumber: 70,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Dropdowns/DropdownNotification.tsx",
            lineNumber: 69,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("ul", { className: "flex h-auto flex-col overflow-y-auto", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              import_react35.Link,
              {
                className: "flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4",
                to: "#",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-sm", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "text-black dark:text-white", children: "Edit your information in a swipe" }, void 0, !1, {
                      fileName: "app/components/Dropdowns/DropdownNotification.tsx",
                      lineNumber: 80,
                      columnNumber: 17
                    }, this),
                    " ",
                    "Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
                  ] }, void 0, !0, {
                    fileName: "app/components/Dropdowns/DropdownNotification.tsx",
                    lineNumber: 79,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-xs", children: "12 May, 2025" }, void 0, !1, {
                    fileName: "app/components/Dropdowns/DropdownNotification.tsx",
                    lineNumber: 87,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/Dropdowns/DropdownNotification.tsx",
                lineNumber: 75,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Dropdowns/DropdownNotification.tsx",
              lineNumber: 74,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              import_react35.Link,
              {
                className: "flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4",
                to: "#",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-sm", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "text-black dark:text-white", children: "It is a long established fact" }, void 0, !1, {
                      fileName: "app/components/Dropdowns/DropdownNotification.tsx",
                      lineNumber: 96,
                      columnNumber: 17
                    }, this),
                    " ",
                    "that a reader will be distracted by the readable."
                  ] }, void 0, !0, {
                    fileName: "app/components/Dropdowns/DropdownNotification.tsx",
                    lineNumber: 95,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-xs", children: "24 Feb, 2025" }, void 0, !1, {
                    fileName: "app/components/Dropdowns/DropdownNotification.tsx",
                    lineNumber: 102,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/Dropdowns/DropdownNotification.tsx",
                lineNumber: 91,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Dropdowns/DropdownNotification.tsx",
              lineNumber: 90,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              import_react35.Link,
              {
                className: "flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4",
                to: "#",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-sm", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "text-black dark:text-white", children: "There are many variations" }, void 0, !1, {
                      fileName: "app/components/Dropdowns/DropdownNotification.tsx",
                      lineNumber: 111,
                      columnNumber: 17
                    }, this),
                    " ",
                    "of passages of Lorem Ipsum available, but the majority have suffered"
                  ] }, void 0, !0, {
                    fileName: "app/components/Dropdowns/DropdownNotification.tsx",
                    lineNumber: 110,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-xs", children: "04 Jan, 2025" }, void 0, !1, {
                    fileName: "app/components/Dropdowns/DropdownNotification.tsx",
                    lineNumber: 118,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/Dropdowns/DropdownNotification.tsx",
                lineNumber: 106,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Dropdowns/DropdownNotification.tsx",
              lineNumber: 105,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              import_react35.Link,
              {
                className: "flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4",
                to: "#",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-sm", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "text-black dark:text-white", children: "There are many variations" }, void 0, !1, {
                      fileName: "app/components/Dropdowns/DropdownNotification.tsx",
                      lineNumber: 127,
                      columnNumber: 17
                    }, this),
                    " ",
                    "of passages of Lorem Ipsum available, but the majority have suffered"
                  ] }, void 0, !0, {
                    fileName: "app/components/Dropdowns/DropdownNotification.tsx",
                    lineNumber: 126,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-xs", children: "01 Dec, 2024" }, void 0, !1, {
                    fileName: "app/components/Dropdowns/DropdownNotification.tsx",
                    lineNumber: 134,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/Dropdowns/DropdownNotification.tsx",
                lineNumber: 122,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Dropdowns/DropdownNotification.tsx",
              lineNumber: 121,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Dropdowns/DropdownNotification.tsx",
            lineNumber: 73,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Dropdowns/DropdownNotification.tsx",
        lineNumber: 61,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Dropdowns/DropdownNotification.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}, DropdownNotification_default = DropdownNotification;

// app/components/Dropdowns/DropdownUser.tsx
var import_react36 = require("react"), import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), DropdownUser = ({ user }) => {
  let [dropdownOpen, setDropdownOpen] = (0, import_react36.useState)(!1), trigger = (0, import_react36.useRef)(null), dropdown = (0, import_react36.useRef)(null);
  return (0, import_react36.useEffect)(() => {
    let clickHandler = ({ target }) => {
      dropdown.current && (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target) || setDropdownOpen(!1));
    };
    return document.addEventListener("click", clickHandler), () => document.removeEventListener("click", clickHandler);
  }), (0, import_react36.useEffect)(() => {
    let keyHandler = ({ keyCode }) => {
      !dropdownOpen || keyCode !== 27 || setDropdownOpen(!1);
    };
    return document.addEventListener("keydown", keyHandler), () => document.removeEventListener("keydown", keyHandler);
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
    "div",
    {
      ref: trigger,
      onClick: () => setDropdownOpen(!dropdownOpen),
      className: "flex items-center gap-4",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { className: "hidden text-right lg:block", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { className: "block text-sm font-medium text-black dark:text-white", children: user.username }, void 0, !1, {
          fileName: "app/components/Dropdowns/DropdownUser.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { className: "block text-xs", children: user.role }, void 0, !1, {
          fileName: "app/components/Dropdowns/DropdownUser.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Dropdowns/DropdownUser.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
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
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function Progress({ current, max }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
    "div",
    {
      className: "tooltip tooltip-bottom flex flex-col",
      "data-tip": `${current} / ${max}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "self-start", children: "Progress" }, void 0, !1, {
          fileName: "app/components/Progress.tsx",
          lineNumber: 12,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
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
var import_react37 = require("@remix-run/react");
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime"), Header = (props) => {
  let { progress, user } = (0, import_react37.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("header", { className: "sticky top-0 z-10 flex w-full bg-white drop-shadow-1 shadow-lg dark:bg-boxdark dark:drop-shadow-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex items-center gap-2 sm:gap-4 lg:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
        "button",
        {
          "aria-controls": "sidebar",
          onClick: (e) => {
            e.stopPropagation(), props.setSidebarOpen(!props.sidebarOpen);
          },
          className: "z-10 block rounded-sm   bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Hamburger, {}, void 0, !1, {
            fileName: "app/components/admin/Header.tsx",
            lineNumber: 28,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/admin/Header.tsx",
          lineNumber: 20,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react_router_dom.Link, { className: "block flex-shrink-0 lg:hidden", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
        "img",
        {
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAMAAAA3HE0QAAAAbFBMVEVHcEz39/Ty9PT09fT09vTz9fT19vT19vT19vT09fT29vTz9PT09PQB4OwS4Oz5+PXx9PSOV/GPT/GISPGtjvJJ4+7V8vO7ofM2yO7Y0POX6fDk4fRyf/Bnk+945++97vKw7PHNxfOZa/FWre6PD8yrAAAADXRSTlMAkxaK61FwvtQspaytT92LgAAAAX9JREFUKJFlU9mCgjAMLIdcbklooYAocvz/P26SlhXZeRGTyT1V6g9lFlVVlJX8G2WxuiABcO9lWRxM47qOCOnt7M4AH7X2GJ6W0E6Qf/wFPLSuD+ihMY2xPaSHP8Xu42aGfpqmsS0UIR5rLWY9DLXP5Bk9ZL49idez660xzS4U3RDshOSPqT6HOwDLVpR6eqAUpgUa5Y4S4QBXItgRUDLqFxeBSimf4E32nkwbIAJyG5zCToW6MV93bG9puJ4+EBaOYcKYqgRDghMB4UTIHf8RaxtKoHThS+SqeDMBDgJNxp+zDk0mVwKNCUIIY5bXEoQRADqOlyFUJE0u8CFYs21G/D0luIx5Bh1LTuEXRSmEYGxw87kTuWV+rNrvYd3oYoTnCkFSpaTgXflFwbTv+0BFy0Mu93DuTghu9sLDk+DSIBgSiXkFwTg8KTYOEvCE2ovjS/ZxyqI9CFrPiNdnUbHsWe5UYnbwc301NEsOgPxiaNy8/O9n3KK8KPLo9m39BSxbLfLikfdbAAAAAElFTkSuQmCC",
          alt: "Logo"
        },
        void 0,
        !1,
        {
          fileName: "app/components/admin/Header.tsx",
          lineNumber: 33,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/admin/Header.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/Header.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Progress_default, { max: progress.total, current: progress.reviewed }, void 0, !1, {
      fileName: "app/components/admin/Header.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/Header.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex items-center gap-3 2xsm:gap-7", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("ul", { className: "flex items-center gap-2 2xsm:gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(DarkModeSwitcher_default, {}, void 0, !1, {
          fileName: "app/components/admin/Header.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(DropdownNotification_default, {}, void 0, !1, {
          fileName: "app/components/admin/Header.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(DropdownMessage_default, {}, void 0, !1, {
          fileName: "app/components/admin/Header.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/Header.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(DropdownUser_default, { user }, void 0, !1, {
        fileName: "app/components/admin/Header.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/Header.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/Header.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/admin/Header.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}, Header_default = Header;

// app/routes/admin.tsx
var import_react41 = require("@remix-run/react");

// app/components/admin/Sidebar.tsx
var import_react38 = require("react"), import_react39 = require("@remix-run/react");
var import_bi2 = require("react-icons/bi");
var import_fi2 = require("react-icons/fi"), import_ai2 = require("react-icons/ai"), import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function Sidebar2({ sidebarOpen, setSidebarOpen }) {
  let sidebar = (0, import_react38.useRef)(null), trigger = (0, import_react38.useRef)(null), { pathname } = (0, import_react39.useLocation)(), { user } = (0, import_react39.useLoaderData)(), url = "/?session=" + (user == null ? void 0 : user.username);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
    "aside",
    {
      ref: sidebar,
      className: `z-50 absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden text-white bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react39.NavLink, { to: url, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h3", { className: "mb-2 text-2xl pt-4 font-semibold text-bodydark2 capitalize", children: toolname }, void 0, !1, {
            fileName: "app/components/admin/Sidebar.tsx",
            lineNumber: 28,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/admin/Sidebar.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            "button",
            {
              ref: trigger,
              onClick: () => setSidebarOpen(!sidebarOpen),
              "aria-controls": "sidebar",
              "aria-expanded": sidebarOpen,
              className: "block lg:hidden",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Hamburger, {}, void 0, !1, {
                fileName: "app/components/admin/Sidebar.tsx",
                lineNumber: 40,
                columnNumber: 11
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/admin/Sidebar.tsx",
              lineNumber: 33,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/admin/Sidebar.tsx",
          lineNumber: 26,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("nav", { className: "mt-5 py-4 px-2 lg:mt-9 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "text-xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            import_react39.NavLink,
            {
              to: `/admin/metabase?session=${user.username}`,
              className: `group relative flex mb-3 items-center gap-2.5 rounded-sm py-2  font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === "admin" || pathname.includes("admin")) && "bg-graydark dark:bg-meta-4"}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_bi2.BiSolidDashboard, {}, void 0, !1, {
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
              lineNumber: 46,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h3", { className: "mb-4 text-sm font-semibold text-gray-400", children: "MENU" }, void 0, !1, {
            fileName: "app/components/admin/Sidebar.tsx",
            lineNumber: 56,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("ul", { className: "mt-4 mb-5.5 flex flex-col gap-2.5 pl-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              import_react39.NavLink,
              {
                to: "/admin/user?session=" + user.username,
                className: ({ isActive }) => "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " + (isActive && "!text-white"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_fi2.FiUsers, {}, void 0, !1, {
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              import_react39.NavLink,
              {
                to: "/admin/text?session=" + user.username,
                className: ({ isActive }) => "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " + (isActive && "!text-white"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_ai2.AiOutlineFileText, {}, void 0, !1, {
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
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/Sidebar.tsx",
            lineNumber: 58,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/Sidebar.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/Sidebar.tsx",
          lineNumber: 44,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/Sidebar.tsx",
          lineNumber: 43,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/admin/Sidebar.tsx",
      lineNumber: 20,
      columnNumber: 5
    },
    this
  );
}
var Sidebar_default2 = Sidebar2;

// app/routes/admin.tsx
var import_node7 = require("@remix-run/node");
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime"), loader9 = async ({ request }) => {
  let session = new URL(request.url).searchParams.get("session");
  if (!session)
    return (0, import_node7.redirect)("/error");
  let user = await getUser(session, !0), progress = await getProgress();
  return (0, import_node7.defer)({
    user,
    progress
  });
}, DefaultLayout = () => {
  let [sidebarOpen, setSidebarOpen] = (0, import_react40.useState)(!1), { pathname } = (0, import_react41.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "dark:bg-boxdark-2 dark:text-bodydark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex h-screen overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Sidebar_default2, { sidebarOpen, setSidebarOpen }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Header_default, { sidebarOpen, setSidebarOpen }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
        "div",
        {
          className: `mx-auto max-w-screen-2xl  ${pathname.includes("metabase") ? "p-0" : " p-4 md:p-6 2xl:p-10"}`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react41.Outlet, {}, void 0, !1, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 38,
            columnNumber: 15
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin.tsx",
          lineNumber: 33,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 32,
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
}, admin_default = DefaultLayout;

// app/routes/error.tsx
var error_exports = {};
__export(error_exports, {
  default: () => error_default,
  loader: () => loader10
});
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime"), loader10 = () => null;
function error() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: "error no session ,require session to continue" }, void 0, !1, {
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
  loader: () => loader11
});
var import_react43 = require("@tiptap/react"), import_starter_kit2 = __toESM(require("@tiptap/starter-kit")), import_react44 = require("react");

// app/components/demo/Sidebar.tsx
var import_react42 = require("react");
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
function Sidebar3({ user, text, setHistory }) {
  var _a, _b, _c, _d;
  let [openMenu, setOpenMenu] = (0, import_react42.useState)(!1);
  function SidebarHeader() {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex bg-[#384451] px-2 py-3 items-center justify-between md:hidden ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: "About" }, void 0, !1, {
        fileName: "app/components/demo/Sidebar.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "cursor-pointer p-2", onClick: () => setOpenMenu(!1), children: "x" }, void 0, !1, {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
      "div",
      {
        className: " flex px-2 py-3 text-white bg-gray-600 text-lg font-semibold items-center  gap-2 ",
        onClick: () => setOpenMenu(!0),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Hamburger, {}, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
      "div",
      {
        className: `flex flex-col text-white bg-[#54606e] overflow-y-auto overflow-x-hidden max-h-[100vh] transition-all -translate-x-full z-30 ${openMenu ? "block translate-x-0" : ""} min-h-[100vh] w-[260px] md:translate-x-0`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "px-2 flex gap-2 flex-col border-b-2 border-b-[#384451] mb-3 pb-2 mt-2 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(SidebarHeader, {}, void 0, !1, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(TextInfo, { children: [
              "User : ",
              user == null ? void 0 : user.username
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 43,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(TextInfo, { children: [
              "text id :",
              text == null ? void 0 : text.id
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 44,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(TextInfo, { children: [
              "Batch : ",
              text == null ? void 0 : text.batch
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 45,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(TextInfo, { children: [
              "Approved : ",
              (_a = user == null ? void 0 : user.text) == null ? void 0 : _a.length
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(TextInfo, { children: [
              "Rejected :",
              (_b = user == null ? void 0 : user.rejected_list) == null ? void 0 : _b.length
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(TextInfo, { children: [
              "Ignored : ",
              (_c = user == null ? void 0 : user.ignored_list) == null ? void 0 : _c.length
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 48,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(TextInfo, { children: [
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-sm mb-2 font-bold", children: "History" }, void 0, !1, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 54,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex flex-col gap-2 max-h-[30vh] overflow-y-auto", children: [
              user && (user.rejected_list || user.text) && ((user == null ? void 0 : user.rejected_list) || []).sort(sortUpdate_reviewed).map((text2) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                DemoHistoryItem,
                {
                  user,
                  id: text2 == null ? void 0 : text2.id,
                  onClick: () => {
                    setOpenMenu(!1), setHistory(text2.id);
                  },
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Cross, {}, void 0, !1, {
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
              ((user == null ? void 0 : user.text) || []).sort(sortUpdate_reviewed).map((text2) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                DemoHistoryItem,
                {
                  user,
                  id: text2 == null ? void 0 : text2.id,
                  onClick: () => {
                    setOpenMenu(!1), setHistory(text2.id);
                  },
                  disabled: text2 == null ? void 0 : text2.reviewed,
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex items-center justify-between flex-1", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Tick, {}, void 0, !1, {
                      fileName: "app/components/demo/Sidebar.tsx",
                      lineNumber: 86,
                      columnNumber: 23
                    }, this),
                    (text2 == null ? void 0 : text2.reviewed) && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { children: "reviewed" }, void 0, !1, {
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
var import_Editor3 = __toESM(require_Editor()), import_react45 = require("@remix-run/react");
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime"), loader11 = async ({ request }) => {
  let url = new URL(request.url);
  return { text: await db.text.findMany({
    take: 10,
    select: { original_text: !0, id: !0 }
  }) };
};
function DemoPage() {
  let { text } = (0, import_react45.useLoaderData)(), [text_Array, setTextArray] = (0, import_react44.useState)(text), [user, setUser] = (0, import_react44.useState)({
    username: "demo",
    role: "USER",
    text: [],
    rejected_list: [],
    ignored_list: []
  }), [history, setHistory] = (0, import_react44.useState)(null), dialogref = (0, import_react44.useRef)(null), content = text_Array.find(
    (i) => ![...user.text, ...user.rejected_list].find((j) => j.id == i.id)
  ) || null;
  history && (content = user.text.find((i) => i.id === history) || text_Array.find((i) => i.id == history));
  let original_text = content.content || (content == null ? void 0 : content.original_text.trim()), insertHTML = insertHtmlOnText_default(original_text), setter = () => {
  }, charClick = () => {
  }, editor = (0, import_react43.useEditor)(
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex flex-col md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Sidebar_default3, { user, text, setHistory }, void 0, !1, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex-1 flex items-center flex-col md:mt-[10vh] ", children: [
      content ? /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "fixed bottom-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex items-center justify-between opacity-75 text-sm font-bold px-2 capitalize pt-1 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: "transcript" }, void 0, !1, {
            fileName: "app/routes/demo.tsx",
            lineNumber: 124,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Toggle_Modal, { className: "cursor-pointer", children: "reference" }, void 0, !1, {
            fileName: "app/routes/demo.tsx",
            lineNumber: 126,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Modal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
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
        editor ? /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_Editor3.default, { editor }, void 0, !1, {
          fileName: "app/routes/demo.tsx",
          lineNumber: 137,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: "loading..." }, void 0, !1, {
          fileName: "app/routes/demo.tsx",
          lineNumber: 135,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: "Thank you . your work is complete ! \u{1F60A}\u{1F60A}\u{1F60A}" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 120,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex gap-2 fixed bottom-0 justify-center ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
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
var assets_manifest_default = { entry: { module: "/build/entry.client-V6DHWZFJ.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-SQSAVPEH.js", "/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-UENAGXQR.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-GIUU4FW4.js", imports: ["/build/_shared/chunk-YOH2CPLV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-FBXLIQLP.js", imports: ["/build/_shared/chunk-2GTJYX55.js", "/build/_shared/chunk-ZEZB7FIK.js", "/build/_shared/chunk-S7P53F5Y.js", "/build/_shared/chunk-IULPZLDX.js", "/build/_shared/chunk-RUKEUQLF.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-Y66MVZAW.js", imports: ["/build/_shared/chunk-IULPZLDX.js", "/build/_shared/chunk-F2P733AV.js", "/build/_shared/chunk-FXCVAPJI.js", "/build/_shared/chunk-RUKEUQLF.js", "/build/_shared/chunk-QX4QACTM.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.metabase": { id: "routes/admin.metabase", parentId: "routes/admin", path: "metabase", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.metabase-24NX7HQH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.text": { id: "routes/admin.text", parentId: "routes/admin", path: "text", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.text-HXGAEOZQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.user": { id: "routes/admin.user", parentId: "routes/admin", path: "user", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.user-KQ2XHSG2.js", imports: ["/build/_shared/chunk-YOH2CPLV.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin_.user.review.$slug": { id: "routes/admin_.user.review.$slug", parentId: "root", path: "admin/user/review/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/admin_.user.review.$slug-NQV7MI27.js", imports: ["/build/_shared/chunk-ZEZB7FIK.js", "/build/_shared/chunk-HUA6FSZE.js", "/build/_shared/chunk-S7P53F5Y.js", "/build/_shared/chunk-IULPZLDX.js", "/build/_shared/chunk-RUKEUQLF.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.text": { id: "routes/api.text", parentId: "root", path: "api/text", index: void 0, caseSensitive: void 0, module: "/build/routes/api.text-A4DRPZQ7.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.text.$version": { id: "routes/api.text.$version", parentId: "routes/api.text", path: ":version", index: void 0, caseSensitive: void 0, module: "/build/routes/api.text.$version-D5R6AXVU.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.user": { id: "routes/api.user", parentId: "root", path: "api/user", index: void 0, caseSensitive: void 0, module: "/build/routes/api.user-7BYWHH7L.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.user.$username": { id: "routes/api.user.$username", parentId: "routes/api.user", path: ":username", index: void 0, caseSensitive: void 0, module: "/build/routes/api.user.$username-K3HPPKXU.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.word": { id: "routes/api.word", parentId: "root", path: "api/word", index: void 0, caseSensitive: void 0, module: "/build/routes/api.word-JTVRFTHW.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demo": { id: "routes/demo", parentId: "root", path: "demo", index: void 0, caseSensitive: void 0, module: "/build/routes/demo-NE2WVTOI.js", imports: ["/build/_shared/chunk-2GTJYX55.js", "/build/_shared/chunk-HUA6FSZE.js", "/build/_shared/chunk-S7P53F5Y.js", "/build/_shared/chunk-IULPZLDX.js", "/build/_shared/chunk-RUKEUQLF.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/error": { id: "routes/error", parentId: "root", path: "error", index: void 0, caseSensitive: void 0, module: "/build/routes/error-VKEWX2GE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "24a4d435", hmr: { runtime: "/build/_shared\\chunk-UENAGXQR.js", timestamp: 1693906203340 }, url: "/build/manifest-24A4D435.js" };

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
