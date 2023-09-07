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
var tailwind_default = "/build/_assets/tailwind-QNPEVVCJ.css";

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
      text: {
        select: { id: !0, reviewed: !0, batch: !0 },
        orderBy: { id: "desc" }
      },
      rejected_list: { select: { id: !0, reviewed: !0, batch: !0 } }
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
function Ignore() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { "aria-hidden": "true", fill: "white", viewBox: "0 0 24 24", className: "c01125", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M12 20.016c4.406 0 8.016-3.609 8.016-8.016 0-1.828-0.609-3.563-1.688-4.922l-11.25 11.25c1.359 1.078 3.094 1.688 4.922 1.688zM3.984 12c0 1.828 0.609 3.563 1.688 4.922l11.25-11.25c-1.359-1.078-3.094-1.688-4.922-1.688-4.406 0-8.016 3.609-8.016 8.016zM12 2.016c5.531 0 9.984 4.453 9.984 9.984s-4.453 9.984-9.984 9.984-9.984-4.453-9.984-9.984 4.453-9.984 9.984-9.984z" }, void 0, !1, {
    fileName: "app/assets/svgs.tsx",
    lineNumber: 98,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/assets/svgs.tsx",
    lineNumber: 97,
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
  var _a, _b, _c, _d;
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col gap-2 max-h-fit overflow-y-auto", children: user && ((_d = user == null ? void 0 : user.text) == null ? void 0 : _d.sort(sortUpdate_reviewed).map((text) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              AdminHistoryItem,
              {
                id: text == null ? void 0 : text.id,
                onClick: () => {
                  setOpenMenu(!1), setSelectedId(text == null ? void 0 : text.id);
                },
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Tick, {}, void 0, !1, {
                  fileName: "app/components/AdminHistorySidebar.tsx",
                  lineNumber: 90,
                  columnNumber: 25
                }, this),
                reviewed: text == null ? void 0 : text.reviewed,
                selectedId
              },
              text.id + "-accepted",
              !1,
              {
                fileName: "app/components/AdminHistorySidebar.tsx",
                lineNumber: 83,
                columnNumber: 17
              },
              this
            ))) }, void 0, !1, {
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
    where: {
      modified_by_id: annotator == null ? void 0 : annotator.id,
      status: "APPROVED",
      reviewed: !1
    },
    orderBy: { updatedAt: "desc" }
  }), currentText = await db.text.findFirst({
    where: {
      reviewed: !1,
      modified_by_id: annotator == null ? void 0 : annotator.id,
      status: "APPROVED"
    },
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
        lineNumber: 107,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex-1 flex items-center flex-col md:mt-[10vh]", children: [
      !text || !selectedId || !editor ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "fixed top-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]", children: "Thank you . your work is complete ! \u{1F60A}\u{1F60A}\u{1F60A}" }, void 0, !1, {
        fileName: "app/routes/admin_.user.review.$slug.tsx",
        lineNumber: 115,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "fixed bottom-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center justify-between opacity-75 text-sm font-bold px-2 capitalize pt-1 ", children: "transcript" }, void 0, !1, {
          fileName: "app/routes/admin_.user.review.$slug.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_remix_utils.ClientOnly, { fallback: null, children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_Editor.default, { editor }, void 0, !1, {
          fileName: "app/routes/admin_.user.review.$slug.tsx",
          lineNumber: 124,
          columnNumber: 22
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin_.user.review.$slug.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this),
        !editor && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: "loading..." }, void 0, !1, {
          fileName: "app/routes/admin_.user.review.$slug.tsx",
          lineNumber: 126,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin_.user.review.$slug.tsx",
        lineNumber: 119,
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
            lineNumber: 132,
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
            lineNumber: 139,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/admin_.user.review.$slug.tsx",
        lineNumber: 131,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin_.user.review.$slug.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin_.user.review.$slug.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin_.user.review.$slug.tsx",
    lineNumber: 106,
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
var import_react22 = require("@remix-run/react");

// app/components/AllowAnnotation.tsx
var import_react14 = require("@remix-run/react");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
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
var import_react15 = require("@remix-run/react"), import_react_tailwindcss_select = __toESM(require("react-tailwindcss-select")), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "w-[50%] flex gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
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
var import_react16 = require("@remix-run/react"), import_react17 = __toESM(require("react")), import_fi = require("react-icons/fi"), import_ti = require("react-icons/ti"), import_im = require("react-icons/im"), import_react18 = require("react"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: openEdit ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "join ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      "button",
      {
        type: "button",
        className: "btn join-item",
        onClick: handleSubmit,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_ti.TiTick, { color: "green" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      "button",
      {
        type: "button",
        className: "btn join-item",
        onClick: () => setOpenEdit(!1),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_im.ImCross, { color: "red" }, void 0, !1, {
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
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex gap-3", children: [
    ((_a = fetcher == null ? void 0 : fetcher.formData) == null ? void 0 : _a.get("nickname")) || user.nickname,
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("button", { onClick: () => setOpenEdit(!0), children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_fi.FiEdit2, {}, void 0, !1, {
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
var import_react19 = require("@remix-run/react"), import_react_tailwindcss_select2 = __toESM(require("react-tailwindcss-select")), import_ai = require("react-icons/ai"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function AssignReviewer({ user }) {
  var _a, _b;
  let { users } = (0, import_react19.useLoaderData)(), options = users.filter((user2) => user2.role === "REVIEWER").map((c) => ({
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex gap-2 w-[50%]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
        lineNumber: 70,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center cursor-pointer", onClick: handleDelete, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_ai.AiFillDelete, {}, void 0, !1, {
      fileName: "app/components/AssignReviewer.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/AssignReviewer.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AssignReviewer.tsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
}
var AssignReviewer_default = AssignReviewer;

// app/components/AssignRole.tsx
var import_react20 = require("react"), import_react_tailwindcss_select3 = __toESM(require("react-tailwindcss-select")), import_react_router_dom = require("react-router-dom"), import_fi2 = require("react-icons/fi"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
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
  ], value = { value: annotator.role, label: annotator.role };
  function handleChange(data) {
    let role = data.value;
    role || (data = ""), confirm(
      "do you want " + annotator.nickname + " to be " + role + "?"
    ) && (fetcher.submit(
      {
        id: annotator.id,
        role,
        action: "change_role"
      },
      {
        method: "POST",
        action: "/api/user"
      }
    ), setEditRole(!1));
  }
  return editRole ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
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
      lineNumber: 52,
      columnNumber: 7
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex gap-2 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "font-light text-sm", children: annotator.role }, void 0, !1, {
      fileName: "app/components/AssignRole.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    isAdmin && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { onClick: openRoleEdit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_fi2.FiEdit2, {}, void 0, !1, {
      fileName: "app/components/AssignRole.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/AssignRole.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AssignRole.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}
var AssignRole_default = AssignRole;

// app/components/AssignedBatchList.tsx
var import_react21 = require("@remix-run/react"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function AssignedBatchList({ user }) {
  var _a;
  let { groups } = (0, import_react21.useLoaderData)(), userfetcher = (0, import_react21.useFetcher)(), removeBatch = (e) => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mt-2 flex gap-2", children: [
    reviewedBatch.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
      return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function Info({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-col items-start px-2 text-lg mt-2", children }, void 0, !1, {
    fileName: "app/components/admin/AboutUser.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
function Title({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "text-lg font-bold flex justify-between w-full", children }, void 0, !1, {
    fileName: "app/components/admin/AboutUser.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
var AboutUser = ({
  selectedUser,
  user
}) => {
  let { users } = (0, import_react22.useLoaderData)(), annotator = users.find((user2) => (user2 == null ? void 0 : user2.username) === selectedUser), reviewed_count = annotator == null ? void 0 : annotator.text.filter((item) => item.reviewed).length, approved_count = annotator == null ? void 0 : annotator.text.length, url = `/admin/user/review/${selectedUser}?session=` + user.username, isAdmin = user.role === "ADMIN";
  return selectedUser === "" ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "sticky top-[80px]  rounded-sm border border-stroke bg-white px-5 pt-6 pb-10 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-10 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-col md:flex-row justify-between px-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h4", { className: "mb-6 text-xl font-semibold text-black dark:text-white", children: annotator == null ? void 0 : annotator.username }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(AllowAnnotation_default, { annotator }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Info, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Title, { children: "Name:" }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(AssignNickName_default, { user: annotator }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Info, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Title, { children: "Role" }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(AssignRole_default, { annotator, isAdmin }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Info, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Title, { children: "Email:" }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: annotator == null ? void 0 : annotator.username }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Info, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Title, { children: "Reviewer:" }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(AssignReviewer_default, { user: annotator }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Info, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Title, { children: "Category:" }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(AssignCategory_default, { user: annotator }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Info, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Title, { children: [
        "Assigned Batch:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { title: "reviewed/total", children: [
          reviewed_count,
          "/",
          approved_count
        ] }, void 0, !0, {
          fileName: "app/components/admin/AboutUser.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(AssignedBatchList_default, { user: annotator }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      import_react22.Link,
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
        lineNumber: 78,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/admin/AboutUser.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}, AboutUser_default = AboutUser;

// app/components/admin/UserListCard.tsx
var import_react23 = require("@remix-run/react"), import_react24 = require("react"), import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), UserListCard = ({
  setSelectedUser,
  selectedUser,
  user
}) => {
  let { users } = (0, import_react23.useLoaderData)(), reviewers = users.filter((user2) => user2.role === "REVIEWER"), isAdmin = user.role === "ADMIN", [selectedReviewer, setSelectedReviewer] = (0, import_react24.useState)("All"), [search, setSearch] = (0, import_react24.useState)("");
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
  )), /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h4", { className: "mb-6 pl-2 px-7.5 text-xl font-semibold text-black dark:text-white", children: "Annotators" }, void 0, !1, {
      fileName: "app/components/admin/UserListCard.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex gap-2  items-center flex-1 mb-2 mx-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
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
        lineNumber: 40,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/admin/UserListCard.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    isAdmin && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex gap-2  items-center mb-2 mx-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      "select",
      {
        id: "reviewer-select",
        className: "select select-sm select-bordered w-full max-w-xs",
        onChange: handleReviewerChange,
        value: selectedReviewer,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("option", { value: "All", children: "All" }, void 0, !1, {
            fileName: "app/components/admin/UserListCard.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this),
          reviewers.map((reviewer) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "option",
            {
              value: reviewer.username,
              children: reviewer.username
            },
            reviewer.id + "-key-selection",
            !1,
            {
              fileName: "app/components/admin/UserListCard.tsx",
              lineNumber: 57,
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
        lineNumber: 49,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/admin/UserListCard.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: list.map((user2) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      EachUser,
      {
        user: user2,
        setSelectedUser,
        selectedUser
      },
      user2.id + "unique_key",
      !1,
      {
        fileName: "app/components/admin/UserListCard.tsx",
        lineNumber: 69,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/admin/UserListCard.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/UserListCard.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
};
function EachUser({ user, setSelectedUser, selectedUser }) {
  let { groups } = (0, import_react23.useLoaderData)(), handleSelection = (value) => {
    console.log(...oo_oo("6ce4f9e0_0", "hi from userlistcard")), setSelectedUser(value);
  }, currentBatch = user.assigned_batch.filter(
    (item) => {
      var _a, _b;
      return !((_a = groups[item]) != null && _a.reviewed) && ((_b = groups[item]) == null ? void 0 : _b.approved);
    }
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    "div",
    {
      onClick: () => handleSelection(user.username),
      className: ` cursor-pointer flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4 hover:rounded-sm transition duration-300 ease-in-out hover:bg-green-300 ${selectedUser === user.username && "bg-green-300"}`,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex flex-1 items-center justify-between px-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h5", { className: "font-medium text-black dark:text-white", children: user.nickname }, void 0, !1, {
            fileName: "app/components/admin/UserListCard.tsx",
            lineNumber: 102,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "text-sm text-black dark:text-white", children: user.username }, void 0, !1, {
              fileName: "app/components/admin/UserListCard.tsx",
              lineNumber: 106,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "text-xs", children: " . 12 min" }, void 0, !1, {
              fileName: "app/components/admin/UserListCard.tsx",
              lineNumber: 109,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/UserListCard.tsx",
            lineNumber: 105,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/UserListCard.tsx",
          lineNumber: 101,
          columnNumber: 9
        }, this),
        currentBatch.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex h-6 w-6 items-center justify-center rounded-full bg-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "text-xs text-white", children: currentBatch.length }, void 0, !1, {
          fileName: "app/components/admin/UserListCard.tsx",
          lineNumber: 114,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/UserListCard.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/UserListCard.tsx",
        lineNumber: 100,
        columnNumber: 7
      }, this)
    },
    user.id + "-userList",
    !1,
    {
      fileName: "app/components/admin/UserListCard.tsx",
      lineNumber: 93,
      columnNumber: 5
    },
    this
  );
}
var UserListCard_default = UserListCard;
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x2b7c(_0x260d6a,_0x145e28){var _0x2cbb0f=_0x2cbb();return _0x2b7c=function(_0x2b7c3a,_0x2ec08c){_0x2b7c3a=_0x2b7c3a-0xaa;var _0x113936=_0x2cbb0f[_0x2b7c3a];return _0x113936;},_0x2b7c(_0x260d6a,_0x145e28);}var _0x412ae9=_0x2b7c;(function(_0x58fb7d,_0x165ae8){var _0x4b6a83=_0x2b7c,_0x1c1762=_0x58fb7d();while(!![]){try{var _0x1cc6b2=-parseInt(_0x4b6a83(0x169))/0x1+-parseInt(_0x4b6a83(0x105))/0x2*(parseInt(_0x4b6a83(0x135))/0x3)+-parseInt(_0x4b6a83(0xfe))/0x4+parseInt(_0x4b6a83(0x16c))/0x5*(-parseInt(_0x4b6a83(0x140))/0x6)+parseInt(_0x4b6a83(0xaf))/0x7*(-parseInt(_0x4b6a83(0x154))/0x8)+parseInt(_0x4b6a83(0xd4))/0x9*(-parseInt(_0x4b6a83(0xc8))/0xa)+parseInt(_0x4b6a83(0x175))/0xb;if(_0x1cc6b2===_0x165ae8)break;else _0x1c1762['push'](_0x1c1762['shift']());}catch(_0x1f93c2){_0x1c1762['push'](_0x1c1762['shift']());}}}(_0x2cbb,0x29ba5));var j=Object['create'],X=Object[_0x412ae9(0x15c)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x412ae9(0x149)],te=Object[_0x412ae9(0x14c)],ne=Object[_0x412ae9(0x139)][_0x412ae9(0xcf)],re=(_0x37905a,_0xd50ae3,_0x41106c,_0x315bd3)=>{var _0xbc379a=_0x412ae9;if(_0xd50ae3&&typeof _0xd50ae3==_0xbc379a(0x188)||typeof _0xd50ae3=='function'){for(let _0x298457 of ee(_0xd50ae3))!ne[_0xbc379a(0xb6)](_0x37905a,_0x298457)&&_0x298457!==_0x41106c&&X(_0x37905a,_0x298457,{'get':()=>_0xd50ae3[_0x298457],'enumerable':!(_0x315bd3=G(_0xd50ae3,_0x298457))||_0x315bd3['enumerable']});}return _0x37905a;},K=(_0x460b4b,_0x29b516,_0x31f998)=>(_0x31f998=_0x460b4b!=null?j(te(_0x460b4b)):{},re(_0x29b516||!_0x460b4b||!_0x460b4b[_0x412ae9(0x184)]?X(_0x31f998,_0x412ae9(0x168),{'value':_0x460b4b,'enumerable':!0x0}):_0x31f998,_0x460b4b)),q=class{constructor(_0x230f6c,_0x117323,_0x31fad4,_0x4720f4,_0x15e215){var _0xd84976=_0x412ae9;this[_0xd84976(0x15e)]=_0x230f6c,this[_0xd84976(0x176)]=_0x117323,this[_0xd84976(0x177)]=_0x31fad4,this[_0xd84976(0x18c)]=_0x4720f4,this[_0xd84976(0x15a)]=_0x15e215,this['_allowedToSend']=!0x0,this[_0xd84976(0xc7)]=!0x0,this['_connected']=!0x1,this[_0xd84976(0x181)]=!0x1,this['_inBrowser']=!this[_0xd84976(0x15e)][_0xd84976(0xd5)]?.[_0xd84976(0x15b)],this[_0xd84976(0x145)]=null,this['_connectAttemptCount']=0x0,this[_0xd84976(0x146)]=0x14,this['_webSocketErrorDocsLink']=_0xd84976(0xb7),this[_0xd84976(0x12d)]=(this['_inBrowser']?_0xd84976(0xff):_0xd84976(0x125))+this[_0xd84976(0xe1)];}async[_0x412ae9(0x156)](){var _0x27b9b7=_0x412ae9;if(this[_0x27b9b7(0x145)])return this[_0x27b9b7(0x145)];let _0xeabb97;if(this[_0x27b9b7(0x17f)])_0xeabb97=this[_0x27b9b7(0x15e)][_0x27b9b7(0xea)];else{if(this[_0x27b9b7(0x15e)][_0x27b9b7(0xd5)]?.[_0x27b9b7(0x109)])_0xeabb97=this[_0x27b9b7(0x15e)][_0x27b9b7(0xd5)]?.['_WebSocket'];else try{let _0x3c2199=await import('path');_0xeabb97=(await import((await import(_0x27b9b7(0x13f)))['pathToFileURL'](_0x3c2199[_0x27b9b7(0x16e)](this[_0x27b9b7(0x18c)],'ws/index.js'))[_0x27b9b7(0x11c)]()))['default'];}catch{try{_0xeabb97=require(require(_0x27b9b7(0xe6))[_0x27b9b7(0x16e)](this[_0x27b9b7(0x18c)],'ws'));}catch{throw new Error(_0x27b9b7(0x18d));}}}return this[_0x27b9b7(0x145)]=_0xeabb97,_0xeabb97;}[_0x412ae9(0xf4)](){var _0x3480de=_0x412ae9;this['_connecting']||this[_0x3480de(0x167)]||this[_0x3480de(0xef)]>=this[_0x3480de(0x146)]||(this[_0x3480de(0xc7)]=!0x1,this[_0x3480de(0x181)]=!0x0,this[_0x3480de(0xef)]++,this[_0x3480de(0x11a)]=new Promise((_0x499217,_0xc46417)=>{var _0x1b3137=_0x3480de;this[_0x1b3137(0x156)]()['then'](_0x3e9d6f=>{var _0x55e041=_0x1b3137;let _0x34618e=new _0x3e9d6f(_0x55e041(0xc4)+(!this['_inBrowser']&&this[_0x55e041(0x15a)]?_0x55e041(0x18e):this['host'])+':'+this[_0x55e041(0x177)]);_0x34618e[_0x55e041(0x119)]=()=>{var _0x5c1048=_0x55e041;this[_0x5c1048(0x107)]=!0x1,this[_0x5c1048(0x131)](_0x34618e),this[_0x5c1048(0x187)](),_0xc46417(new Error(_0x5c1048(0x11d)));},_0x34618e[_0x55e041(0x14b)]=()=>{var _0xb07325=_0x55e041;this[_0xb07325(0x17f)]||_0x34618e[_0xb07325(0xbd)]&&_0x34618e['_socket']['unref']&&_0x34618e['_socket'][_0xb07325(0x152)](),_0x499217(_0x34618e);},_0x34618e['onclose']=()=>{var _0x55fb7f=_0x55e041;this[_0x55fb7f(0xc7)]=!0x0,this[_0x55fb7f(0x131)](_0x34618e),this[_0x55fb7f(0x187)]();},_0x34618e[_0x55e041(0xb2)]=_0x5f36df=>{var _0x3c160a=_0x55e041;try{_0x5f36df&&_0x5f36df[_0x3c160a(0x150)]&&this[_0x3c160a(0x17f)]&&JSON[_0x3c160a(0x103)](_0x5f36df[_0x3c160a(0x150)])[_0x3c160a(0x10c)]===_0x3c160a(0x13b)&&this[_0x3c160a(0x15e)][_0x3c160a(0x102)]['reload']();}catch{}};})[_0x1b3137(0x147)](_0x2021f4=>(this[_0x1b3137(0x167)]=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x1b3137(0x107)]=!0x0,this[_0x1b3137(0xef)]=0x0,_0x2021f4))[_0x1b3137(0xe7)](_0x411d4f=>(this[_0x1b3137(0x167)]=!0x1,this[_0x1b3137(0x181)]=!0x1,console[_0x1b3137(0xad)](_0x1b3137(0x106)+this[_0x1b3137(0xe1)]),_0xc46417(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x411d4f&&_0x411d4f[_0x1b3137(0xda)])))));}));}[_0x412ae9(0x131)](_0x1f15d1){var _0x58d68d=_0x412ae9;this[_0x58d68d(0x167)]=!0x1,this[_0x58d68d(0x181)]=!0x1;try{_0x1f15d1['onclose']=null,_0x1f15d1[_0x58d68d(0x119)]=null,_0x1f15d1[_0x58d68d(0x14b)]=null;}catch{}try{_0x1f15d1[_0x58d68d(0xc1)]<0x2&&_0x1f15d1['close']();}catch{}}[_0x412ae9(0x187)](){var _0x265d15=_0x412ae9;clearTimeout(this[_0x265d15(0x10d)]),!(this[_0x265d15(0xef)]>=this['_maxConnectAttemptCount'])&&(this[_0x265d15(0x10d)]=setTimeout(()=>{var _0x36976b=_0x265d15;this[_0x36976b(0x167)]||this[_0x36976b(0x181)]||(this[_0x36976b(0xf4)](),this['_ws']?.[_0x36976b(0xe7)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x265d15(0x10d)][_0x265d15(0x152)]&&this['_reconnectTimeout'][_0x265d15(0x152)]());}async['send'](_0x53cdcf){var _0x5a74d9=_0x412ae9;try{if(!this[_0x5a74d9(0x107)])return;this['_allowedToConnectOnSend']&&this['_connectToHostNow'](),(await this[_0x5a74d9(0x11a)])['send'](JSON['stringify'](_0x53cdcf));}catch(_0x1b753b){console[_0x5a74d9(0xad)](this[_0x5a74d9(0x12d)]+':\\x20'+(_0x1b753b&&_0x1b753b[_0x5a74d9(0xda)])),this[_0x5a74d9(0x107)]=!0x1,this[_0x5a74d9(0x187)]();}}};function J(_0x46fff0,_0x4f670,_0x1410a7,_0x2612f5,_0x4dea0d,_0x117a56){var _0x1af8b1=_0x412ae9;let _0x458a33=_0x1410a7[_0x1af8b1(0xe3)](',')[_0x1af8b1(0x143)](_0x4c118a=>{var _0x52be3b=_0x1af8b1;try{_0x46fff0['_console_ninja_session']||((_0x4dea0d==='next.js'||_0x4dea0d===_0x52be3b(0x126)||_0x4dea0d===_0x52be3b(0x148))&&(_0x4dea0d+=_0x46fff0[_0x52be3b(0xd5)]?.[_0x52be3b(0x10e)]?.[_0x52be3b(0x18a)]?'\\x20server':_0x52be3b(0x14f)),_0x46fff0[_0x52be3b(0x182)]={'id':+new Date(),'tool':_0x4dea0d});let _0x58fa92=new q(_0x46fff0,_0x4f670,_0x4c118a,_0x2612f5,_0x117a56);return _0x58fa92['send'][_0x52be3b(0xd9)](_0x58fa92);}catch(_0x53521e){return console[_0x52be3b(0xad)](_0x52be3b(0x118),_0x53521e&&_0x53521e[_0x52be3b(0xda)]),()=>{};}});return _0x22dfe9=>_0x458a33['forEach'](_0x286063=>_0x286063(_0x22dfe9));}function W(_0xba72f3){var _0x4a9979=_0x412ae9;let _0x4a7c05=function(_0x1cf58d,_0x5ba849){return _0x5ba849-_0x1cf58d;},_0x453c00;if(_0xba72f3['performance'])_0x453c00=function(){var _0x372646=_0x2b7c;return _0xba72f3['performance'][_0x372646(0xc5)]();};else{if(_0xba72f3[_0x4a9979(0xd5)]&&_0xba72f3[_0x4a9979(0xd5)][_0x4a9979(0xc0)])_0x453c00=function(){var _0x15d80d=_0x4a9979;return _0xba72f3[_0x15d80d(0xd5)][_0x15d80d(0xc0)]();},_0x4a7c05=function(_0x257957,_0x50ed1b){return 0x3e8*(_0x50ed1b[0x0]-_0x257957[0x0])+(_0x50ed1b[0x1]-_0x257957[0x1])/0xf4240;};else try{let {performance:_0x3015d9}=require(_0x4a9979(0x120));_0x453c00=function(){var _0x51e241=_0x4a9979;return _0x3015d9[_0x51e241(0xc5)]();};}catch{_0x453c00=function(){return+new Date();};}}return{'elapsed':_0x4a7c05,'timeStamp':_0x453c00,'now':()=>Date[_0x4a9979(0xc5)]()};}function Y(_0x5673b1,_0x1838af,_0x2f7bfb){var _0x1a42be=_0x412ae9;if(_0x5673b1['_consoleNinjaAllowedToStart']!==void 0x0)return _0x5673b1[_0x1a42be(0x130)];let _0xc7546=_0x5673b1[_0x1a42be(0xd5)]?.[_0x1a42be(0x10e)]?.['node'];return _0xc7546&&_0x2f7bfb===_0x1a42be(0x116)?_0x5673b1[_0x1a42be(0x130)]=!0x1:_0x5673b1[_0x1a42be(0x130)]=_0xc7546||!_0x1838af||_0x5673b1['location']?.[_0x1a42be(0x132)]&&_0x1838af[_0x1a42be(0x13e)](_0x5673b1[_0x1a42be(0x102)][_0x1a42be(0x132)]),_0x5673b1[_0x1a42be(0x130)];}function _0x2cbb(){var _0x14bcfe=['_property','prototype','serialize','reload','isArray','_setNodeId','includes','url','1302dUyEMp','log','_setNodeQueryPath','map','autoExpandPropertyCount','_WebSocketClass','_maxConnectAttemptCount','then','astro','getOwnPropertyNames','negativeZero','onopen','getPrototypeOf','_setNodeExpandableState','name','\\x20browser','data','_treeNodePropertiesAfterFullValue','unref','elements','40UmKYFF','_HTMLAllCollection','getWebSocketClass','function','1694076870722','push','dockerizedApp','cwd','defineProperty','allStrLength','global','error','disabledTrace','sort','_getOwnPropertySymbols','constructor','toLowerCase','getOwnPropertyDescriptor','test','_connected','default','176266xSgffG','timeEnd','autoExpand','2265uoGSKR','noFunctions','join','rootExpression','_isNegativeZero','Map','1.0.0','_type','hits','11115401rcXNov','host','port','depth','bigint','positiveInfinity','current','expId','index','_regExpToString','_inBrowser','Error','_connecting','_console_ninja_session','_isPrimitiveWrapperType','__es'+'Module','length','cappedProps','_attemptToReconnectShortly','object','getOwnPropertySymbols','node','expressionsToEvaluate','nodeModules','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','gateway.docker.internal','root_exp','Boolean','elapsed','warn','concat','102228LdDRBX','resolveGetters','_addProperty','onmessage','disabledLog','_propertyName','timeStamp','call','https://tinyurl.com/37x8b79t','root_exp_id','RegExp','_isMap','count','match','_socket','_p_','Buffer','hrtime','readyState','negativeInfinity','string','ws://','now','sortProps','_allowedToConnectOnSend','11620UIpqdg','_setNodeExpressionPath','_console_ninja','type','_capIfString','autoExpandLimit','_Symbol','hasOwnProperty','parent','unshift','stackTraceLimit','_treeNodePropertiesBeforeFullValue','2367VchJSa','process',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.216\\\\node_modules",'symbol','_quotedRegExp','bind','message','Set','_getOwnPropertyDescriptor','...','[object\\x20Array]','_sortProps','level','_webSocketErrorDocsLink','_p_length','split','_isSet','_blacklistedProperty','path','catch','_hasSetOnItsPath','_isPrimitiveType','WebSocket','strLength','_cleanNode','array','NEGATIVE_INFINITY','_connectAttemptCount','_processTreeNodeResult','replace','_addObjectProperty','[object\\x20BigInt]','_connectToHostNow','trace','nan','String','Number','cappedElements','_undefined','unknown','time','substr','742088NLRSjy','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','valueOf','','location','parse','set','2ZDQfue','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_allowedToSend','[object\\x20Map]','_WebSocket','pop','forEach','method','_reconnectTimeout','versions','number','date','setter','_keyStrRegExp','_hasSymbolPropertyOnItsPath','funcName','_setNodePermissions','nuxt','autoExpandMaxDepth','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','onerror','_ws','stringify','toString','logger\\x20websocket\\x20error','reduceLimits','autoExpandPreviousObjects','perf_hooks','props','value','_setNodeLabel','isExpressionToEvaluate','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','remix','console','null','_addFunctionsNode','_getOwnPropertyNames','capped','_dateToString','_sendErrorMessage','totalStrLength','_objectToString','_consoleNinjaAllowedToStart','_disposeWebsocket','hostname','HTMLAllCollection','_additionalMetadata','2577RRjwgX','slice','undefined'];_0x2cbb=function(){return _0x14bcfe;};return _0x2cbb();}function Q(_0x290e6d,_0x5d2345,_0x1d034e,_0x32b5bf){var _0x27fde3=_0x412ae9;_0x290e6d=_0x290e6d,_0x5d2345=_0x5d2345,_0x1d034e=_0x1d034e,_0x32b5bf=_0x32b5bf;let _0x2fd348=W(_0x290e6d),_0x5034eb=_0x2fd348[_0x27fde3(0xac)],_0xe1cf00=_0x2fd348[_0x27fde3(0xb5)];class _0x3607ac{constructor(){var _0x5a5936=_0x27fde3;this[_0x5a5936(0x112)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x5a5936(0xd8)]=/'([^\\\\']|\\\\')*'/,this[_0x5a5936(0xfa)]=_0x290e6d[_0x5a5936(0x137)],this['_HTMLAllCollection']=_0x290e6d['HTMLAllCollection'],this[_0x5a5936(0xdc)]=Object[_0x5a5936(0x165)],this[_0x5a5936(0x12a)]=Object[_0x5a5936(0x149)],this[_0x5a5936(0xce)]=_0x290e6d['Symbol'],this[_0x5a5936(0x17e)]=RegExp[_0x5a5936(0x139)][_0x5a5936(0x11c)],this[_0x5a5936(0x12c)]=Date[_0x5a5936(0x139)][_0x5a5936(0x11c)];}['serialize'](_0x336de1,_0x25c239,_0x53319d,_0x4603c7){var _0x59bbde=_0x27fde3,_0x21ea3b=this,_0x243fc8=_0x53319d[_0x59bbde(0x16b)];function _0x7db955(_0x2d868a,_0x3547fa,_0x46ead3){var _0x12a29f=_0x59bbde;_0x3547fa[_0x12a29f(0xcb)]='unknown',_0x3547fa['error']=_0x2d868a[_0x12a29f(0xda)],_0x314554=_0x46ead3[_0x12a29f(0x18a)][_0x12a29f(0x17b)],_0x46ead3[_0x12a29f(0x18a)][_0x12a29f(0x17b)]=_0x3547fa,_0x21ea3b['_treeNodePropertiesBeforeFullValue'](_0x3547fa,_0x46ead3);}try{_0x53319d['level']++,_0x53319d[_0x59bbde(0x16b)]&&_0x53319d[_0x59bbde(0x11f)]['push'](_0x25c239);var _0x3fd16f,_0x296637,_0xd0cd01,_0x59a762,_0x29789f=[],_0x3aa9c1=[],_0x34e9d2,_0x1c4a92=this[_0x59bbde(0x173)](_0x25c239),_0x552152=_0x1c4a92===_0x59bbde(0xed),_0x130ab2=!0x1,_0x1a1286=_0x1c4a92==='function',_0x5003f2=this[_0x59bbde(0xe9)](_0x1c4a92),_0x4782b5=this[_0x59bbde(0x183)](_0x1c4a92),_0x2cf711=_0x5003f2||_0x4782b5,_0x43e890={},_0x4da75b=0x0,_0x3224c5=!0x1,_0x314554,_0x47b215=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x53319d['depth']){if(_0x552152){if(_0x296637=_0x25c239['length'],_0x296637>_0x53319d[_0x59bbde(0x153)]){for(_0xd0cd01=0x0,_0x59a762=_0x53319d[_0x59bbde(0x153)],_0x3fd16f=_0xd0cd01;_0x3fd16f<_0x59a762;_0x3fd16f++)_0x3aa9c1[_0x59bbde(0x159)](_0x21ea3b['_addProperty'](_0x29789f,_0x25c239,_0x1c4a92,_0x3fd16f,_0x53319d));_0x336de1[_0x59bbde(0xf9)]=!0x0;}else{for(_0xd0cd01=0x0,_0x59a762=_0x296637,_0x3fd16f=_0xd0cd01;_0x3fd16f<_0x59a762;_0x3fd16f++)_0x3aa9c1[_0x59bbde(0x159)](_0x21ea3b[_0x59bbde(0xb1)](_0x29789f,_0x25c239,_0x1c4a92,_0x3fd16f,_0x53319d));}_0x53319d['autoExpandPropertyCount']+=_0x3aa9c1[_0x59bbde(0x185)];}if(!(_0x1c4a92==='null'||_0x1c4a92===_0x59bbde(0x137))&&!_0x5003f2&&_0x1c4a92!==_0x59bbde(0xf7)&&_0x1c4a92!==_0x59bbde(0xbf)&&_0x1c4a92!==_0x59bbde(0x179)){var _0x504b42=_0x4603c7[_0x59bbde(0x121)]||_0x53319d[_0x59bbde(0x121)];if(this[_0x59bbde(0xe4)](_0x25c239)?(_0x3fd16f=0x0,_0x25c239[_0x59bbde(0x10b)](function(_0x5b16aa){var _0x49794c=_0x59bbde;if(_0x4da75b++,_0x53319d[_0x49794c(0x144)]++,_0x4da75b>_0x504b42){_0x3224c5=!0x0;return;}if(!_0x53319d[_0x49794c(0x124)]&&_0x53319d['autoExpand']&&_0x53319d['autoExpandPropertyCount']>_0x53319d['autoExpandLimit']){_0x3224c5=!0x0;return;}_0x3aa9c1[_0x49794c(0x159)](_0x21ea3b[_0x49794c(0xb1)](_0x29789f,_0x25c239,_0x49794c(0xdb),_0x3fd16f++,_0x53319d,function(_0x45f4ef){return function(){return _0x45f4ef;};}(_0x5b16aa)));})):this[_0x59bbde(0xba)](_0x25c239)&&_0x25c239[_0x59bbde(0x10b)](function(_0x192721,_0x8ee187){var _0x5ac51f=_0x59bbde;if(_0x4da75b++,_0x53319d[_0x5ac51f(0x144)]++,_0x4da75b>_0x504b42){_0x3224c5=!0x0;return;}if(!_0x53319d[_0x5ac51f(0x124)]&&_0x53319d[_0x5ac51f(0x16b)]&&_0x53319d[_0x5ac51f(0x144)]>_0x53319d[_0x5ac51f(0xcd)]){_0x3224c5=!0x0;return;}var _0x12afdf=_0x8ee187['toString']();_0x12afdf['length']>0x64&&(_0x12afdf=_0x12afdf[_0x5ac51f(0x136)](0x0,0x64)+_0x5ac51f(0xdd)),_0x3aa9c1[_0x5ac51f(0x159)](_0x21ea3b['_addProperty'](_0x29789f,_0x25c239,_0x5ac51f(0x171),_0x12afdf,_0x53319d,function(_0x294b2e){return function(){return _0x294b2e;};}(_0x192721)));}),!_0x130ab2){try{for(_0x34e9d2 in _0x25c239)if(!(_0x552152&&_0x47b215[_0x59bbde(0x166)](_0x34e9d2))&&!this['_blacklistedProperty'](_0x25c239,_0x34e9d2,_0x53319d)){if(_0x4da75b++,_0x53319d[_0x59bbde(0x144)]++,_0x4da75b>_0x504b42){_0x3224c5=!0x0;break;}if(!_0x53319d['isExpressionToEvaluate']&&_0x53319d[_0x59bbde(0x16b)]&&_0x53319d[_0x59bbde(0x144)]>_0x53319d[_0x59bbde(0xcd)]){_0x3224c5=!0x0;break;}_0x3aa9c1[_0x59bbde(0x159)](_0x21ea3b['_addObjectProperty'](_0x29789f,_0x43e890,_0x25c239,_0x1c4a92,_0x34e9d2,_0x53319d));}}catch{}if(_0x43e890[_0x59bbde(0xe2)]=!0x0,_0x1a1286&&(_0x43e890['_p_name']=!0x0),!_0x3224c5){var _0x4d061e=[][_0x59bbde(0xae)](this[_0x59bbde(0x12a)](_0x25c239))[_0x59bbde(0xae)](this[_0x59bbde(0x162)](_0x25c239));for(_0x3fd16f=0x0,_0x296637=_0x4d061e['length'];_0x3fd16f<_0x296637;_0x3fd16f++)if(_0x34e9d2=_0x4d061e[_0x3fd16f],!(_0x552152&&_0x47b215[_0x59bbde(0x166)](_0x34e9d2[_0x59bbde(0x11c)]()))&&!this['_blacklistedProperty'](_0x25c239,_0x34e9d2,_0x53319d)&&!_0x43e890[_0x59bbde(0xbe)+_0x34e9d2[_0x59bbde(0x11c)]()]){if(_0x4da75b++,_0x53319d[_0x59bbde(0x144)]++,_0x4da75b>_0x504b42){_0x3224c5=!0x0;break;}if(!_0x53319d['isExpressionToEvaluate']&&_0x53319d['autoExpand']&&_0x53319d['autoExpandPropertyCount']>_0x53319d[_0x59bbde(0xcd)]){_0x3224c5=!0x0;break;}_0x3aa9c1[_0x59bbde(0x159)](_0x21ea3b[_0x59bbde(0xf2)](_0x29789f,_0x43e890,_0x25c239,_0x1c4a92,_0x34e9d2,_0x53319d));}}}}}if(_0x336de1[_0x59bbde(0xcb)]=_0x1c4a92,_0x2cf711?(_0x336de1['value']=_0x25c239['valueOf'](),this[_0x59bbde(0xcc)](_0x1c4a92,_0x336de1,_0x53319d,_0x4603c7)):_0x1c4a92===_0x59bbde(0x110)?_0x336de1[_0x59bbde(0x122)]=this[_0x59bbde(0x12c)][_0x59bbde(0xb6)](_0x25c239):_0x1c4a92==='bigint'?_0x336de1[_0x59bbde(0x122)]=_0x25c239[_0x59bbde(0x11c)]():_0x1c4a92===_0x59bbde(0xb9)?_0x336de1[_0x59bbde(0x122)]=this[_0x59bbde(0x17e)][_0x59bbde(0xb6)](_0x25c239):_0x1c4a92===_0x59bbde(0xd7)&&this[_0x59bbde(0xce)]?_0x336de1[_0x59bbde(0x122)]=this[_0x59bbde(0xce)][_0x59bbde(0x139)][_0x59bbde(0x11c)][_0x59bbde(0xb6)](_0x25c239):!_0x53319d[_0x59bbde(0x178)]&&!(_0x1c4a92===_0x59bbde(0x128)||_0x1c4a92===_0x59bbde(0x137))&&(delete _0x336de1['value'],_0x336de1[_0x59bbde(0x12b)]=!0x0),_0x3224c5&&(_0x336de1[_0x59bbde(0x186)]=!0x0),_0x314554=_0x53319d[_0x59bbde(0x18a)][_0x59bbde(0x17b)],_0x53319d['node'][_0x59bbde(0x17b)]=_0x336de1,this[_0x59bbde(0xd3)](_0x336de1,_0x53319d),_0x3aa9c1[_0x59bbde(0x185)]){for(_0x3fd16f=0x0,_0x296637=_0x3aa9c1[_0x59bbde(0x185)];_0x3fd16f<_0x296637;_0x3fd16f++)_0x3aa9c1[_0x3fd16f](_0x3fd16f);}_0x29789f[_0x59bbde(0x185)]&&(_0x336de1[_0x59bbde(0x121)]=_0x29789f);}catch(_0x5dfb0f){_0x7db955(_0x5dfb0f,_0x336de1,_0x53319d);}return this[_0x59bbde(0x134)](_0x25c239,_0x336de1),this[_0x59bbde(0x151)](_0x336de1,_0x53319d),_0x53319d[_0x59bbde(0x18a)][_0x59bbde(0x17b)]=_0x314554,_0x53319d[_0x59bbde(0xe0)]--,_0x53319d[_0x59bbde(0x16b)]=_0x243fc8,_0x53319d['autoExpand']&&_0x53319d['autoExpandPreviousObjects'][_0x59bbde(0x10a)](),_0x336de1;}['_getOwnPropertySymbols'](_0x448146){var _0x5386c2=_0x27fde3;return Object[_0x5386c2(0x189)]?Object['getOwnPropertySymbols'](_0x448146):[];}['_isSet'](_0x1fc54d){var _0x26d5eb=_0x27fde3;return!!(_0x1fc54d&&_0x290e6d['Set']&&this['_objectToString'](_0x1fc54d)==='[object\\x20Set]'&&_0x1fc54d[_0x26d5eb(0x10b)]);}[_0x27fde3(0xe5)](_0x2d0e27,_0x29608d,_0x4d03cb){var _0x411f2e=_0x27fde3;return _0x4d03cb['noFunctions']?typeof _0x2d0e27[_0x29608d]==_0x411f2e(0x157):!0x1;}[_0x27fde3(0x173)](_0x47abed){var _0x2b6a5b=_0x27fde3,_0x3a74b6='';return _0x3a74b6=typeof _0x47abed,_0x3a74b6===_0x2b6a5b(0x188)?this[_0x2b6a5b(0x12f)](_0x47abed)==='[object\\x20Array]'?_0x3a74b6=_0x2b6a5b(0xed):this['_objectToString'](_0x47abed)==='[object\\x20Date]'?_0x3a74b6=_0x2b6a5b(0x110):this['_objectToString'](_0x47abed)===_0x2b6a5b(0xf3)?_0x3a74b6=_0x2b6a5b(0x179):_0x47abed===null?_0x3a74b6='null':_0x47abed[_0x2b6a5b(0x163)]&&(_0x3a74b6=_0x47abed['constructor']['name']||_0x3a74b6):_0x3a74b6===_0x2b6a5b(0x137)&&this[_0x2b6a5b(0x155)]&&_0x47abed instanceof this[_0x2b6a5b(0x155)]&&(_0x3a74b6=_0x2b6a5b(0x133)),_0x3a74b6;}[_0x27fde3(0x12f)](_0x159939){var _0x4a0fc5=_0x27fde3;return Object[_0x4a0fc5(0x139)][_0x4a0fc5(0x11c)]['call'](_0x159939);}[_0x27fde3(0xe9)](_0x42e792){var _0x3678c0=_0x27fde3;return _0x42e792==='boolean'||_0x42e792===_0x3678c0(0xc3)||_0x42e792===_0x3678c0(0x10f);}[_0x27fde3(0x183)](_0x1e4c9f){var _0x599f75=_0x27fde3;return _0x1e4c9f===_0x599f75(0xab)||_0x1e4c9f==='String'||_0x1e4c9f==='Number';}[_0x27fde3(0xb1)](_0xc6955a,_0x444a8f,_0x42ba4a,_0x492910,_0x352859,_0x5d013d){var _0x27e5ba=this;return function(_0x545c84){var _0x303154=_0x2b7c,_0x219d6d=_0x352859[_0x303154(0x18a)][_0x303154(0x17b)],_0xdc9188=_0x352859[_0x303154(0x18a)]['index'],_0x3c63dd=_0x352859[_0x303154(0x18a)][_0x303154(0xd0)];_0x352859[_0x303154(0x18a)][_0x303154(0xd0)]=_0x219d6d,_0x352859['node'][_0x303154(0x17d)]=typeof _0x492910==_0x303154(0x10f)?_0x492910:_0x545c84,_0xc6955a['push'](_0x27e5ba[_0x303154(0x138)](_0x444a8f,_0x42ba4a,_0x492910,_0x352859,_0x5d013d)),_0x352859['node'][_0x303154(0xd0)]=_0x3c63dd,_0x352859[_0x303154(0x18a)][_0x303154(0x17d)]=_0xdc9188;};}[_0x27fde3(0xf2)](_0x4dfd94,_0x4131a3,_0x464fae,_0x2ac684,_0x33cb00,_0x32be84,_0x553091){var _0xbb02bf=_0x27fde3,_0x391bb9=this;return _0x4131a3[_0xbb02bf(0xbe)+_0x33cb00[_0xbb02bf(0x11c)]()]=!0x0,function(_0x24a3af){var _0x968c01=_0xbb02bf,_0x1957b1=_0x32be84[_0x968c01(0x18a)][_0x968c01(0x17b)],_0x569ba=_0x32be84[_0x968c01(0x18a)]['index'],_0xcde6f6=_0x32be84['node'][_0x968c01(0xd0)];_0x32be84[_0x968c01(0x18a)]['parent']=_0x1957b1,_0x32be84[_0x968c01(0x18a)][_0x968c01(0x17d)]=_0x24a3af,_0x4dfd94[_0x968c01(0x159)](_0x391bb9[_0x968c01(0x138)](_0x464fae,_0x2ac684,_0x33cb00,_0x32be84,_0x553091)),_0x32be84[_0x968c01(0x18a)][_0x968c01(0xd0)]=_0xcde6f6,_0x32be84['node'][_0x968c01(0x17d)]=_0x569ba;};}[_0x27fde3(0x138)](_0x551ee5,_0x3f1447,_0x17366a,_0x4ca077,_0x1fab5e){var _0x582297=_0x27fde3,_0x470f4d=this;_0x1fab5e||(_0x1fab5e=function(_0x499db0,_0x853d54){return _0x499db0[_0x853d54];});var _0x31cf12=_0x17366a['toString'](),_0x2abe69=_0x4ca077[_0x582297(0x18b)]||{},_0x4d9c04=_0x4ca077[_0x582297(0x178)],_0xe96e35=_0x4ca077[_0x582297(0x124)];try{var _0xee52ec=this[_0x582297(0xba)](_0x551ee5),_0x20061b=_0x31cf12;_0xee52ec&&_0x20061b[0x0]==='\\x27'&&(_0x20061b=_0x20061b[_0x582297(0xfd)](0x1,_0x20061b[_0x582297(0x185)]-0x2));var _0xe52cfd=_0x4ca077['expressionsToEvaluate']=_0x2abe69[_0x582297(0xbe)+_0x20061b];_0xe52cfd&&(_0x4ca077[_0x582297(0x178)]=_0x4ca077[_0x582297(0x178)]+0x1),_0x4ca077[_0x582297(0x124)]=!!_0xe52cfd;var _0x2f7df3=typeof _0x17366a=='symbol',_0x624358={'name':_0x2f7df3||_0xee52ec?_0x31cf12:this[_0x582297(0xb4)](_0x31cf12)};if(_0x2f7df3&&(_0x624358[_0x582297(0xd7)]=!0x0),!(_0x3f1447===_0x582297(0xed)||_0x3f1447===_0x582297(0x180))){var _0x1d4d65=this['_getOwnPropertyDescriptor'](_0x551ee5,_0x17366a);if(_0x1d4d65&&(_0x1d4d65[_0x582297(0x104)]&&(_0x624358[_0x582297(0x111)]=!0x0),_0x1d4d65['get']&&!_0xe52cfd&&!_0x4ca077[_0x582297(0xb0)]))return _0x624358['getter']=!0x0,this[_0x582297(0xf0)](_0x624358,_0x4ca077),_0x624358;}var _0x2ec494;try{_0x2ec494=_0x1fab5e(_0x551ee5,_0x17366a);}catch(_0x9fc7c5){return _0x624358={'name':_0x31cf12,'type':_0x582297(0xfb),'error':_0x9fc7c5['message']},this['_processTreeNodeResult'](_0x624358,_0x4ca077),_0x624358;}var _0x285bf4=this[_0x582297(0x173)](_0x2ec494),_0x495350=this['_isPrimitiveType'](_0x285bf4);if(_0x624358[_0x582297(0xcb)]=_0x285bf4,_0x495350)this[_0x582297(0xf0)](_0x624358,_0x4ca077,_0x2ec494,function(){var _0x2e5737=_0x582297;_0x624358[_0x2e5737(0x122)]=_0x2ec494[_0x2e5737(0x100)](),!_0xe52cfd&&_0x470f4d['_capIfString'](_0x285bf4,_0x624358,_0x4ca077,{});});else{var _0x49b0a9=_0x4ca077[_0x582297(0x16b)]&&_0x4ca077[_0x582297(0xe0)]<_0x4ca077['autoExpandMaxDepth']&&_0x4ca077['autoExpandPreviousObjects']['indexOf'](_0x2ec494)<0x0&&_0x285bf4!=='function'&&_0x4ca077[_0x582297(0x144)]<_0x4ca077[_0x582297(0xcd)];_0x49b0a9||_0x4ca077[_0x582297(0xe0)]<_0x4d9c04||_0xe52cfd?(this['serialize'](_0x624358,_0x2ec494,_0x4ca077,_0xe52cfd||{}),this['_additionalMetadata'](_0x2ec494,_0x624358)):this['_processTreeNodeResult'](_0x624358,_0x4ca077,_0x2ec494,function(){var _0x50ae1d=_0x582297;_0x285bf4==='null'||_0x285bf4===_0x50ae1d(0x137)||(delete _0x624358['value'],_0x624358[_0x50ae1d(0x12b)]=!0x0);});}return _0x624358;}finally{_0x4ca077['expressionsToEvaluate']=_0x2abe69,_0x4ca077[_0x582297(0x178)]=_0x4d9c04,_0x4ca077['isExpressionToEvaluate']=_0xe96e35;}}[_0x27fde3(0xcc)](_0x1929f8,_0x64218c,_0x45f324,_0x5e2ad0){var _0x47fbd1=_0x27fde3,_0x5da76f=_0x5e2ad0[_0x47fbd1(0xeb)]||_0x45f324[_0x47fbd1(0xeb)];if((_0x1929f8===_0x47fbd1(0xc3)||_0x1929f8===_0x47fbd1(0xf7))&&_0x64218c[_0x47fbd1(0x122)]){let _0x8b4bbd=_0x64218c[_0x47fbd1(0x122)][_0x47fbd1(0x185)];_0x45f324[_0x47fbd1(0x15d)]+=_0x8b4bbd,_0x45f324[_0x47fbd1(0x15d)]>_0x45f324['totalStrLength']?(_0x64218c['capped']='',delete _0x64218c['value']):_0x8b4bbd>_0x5da76f&&(_0x64218c['capped']=_0x64218c[_0x47fbd1(0x122)]['substr'](0x0,_0x5da76f),delete _0x64218c[_0x47fbd1(0x122)]);}}[_0x27fde3(0xba)](_0xf5cf55){var _0x317058=_0x27fde3;return!!(_0xf5cf55&&_0x290e6d[_0x317058(0x171)]&&this[_0x317058(0x12f)](_0xf5cf55)===_0x317058(0x108)&&_0xf5cf55['forEach']);}[_0x27fde3(0xb4)](_0x48f782){var _0x173e85=_0x27fde3;if(_0x48f782[_0x173e85(0xbc)](/^\\d+$/))return _0x48f782;var _0x2afef1;try{_0x2afef1=JSON[_0x173e85(0x11b)](''+_0x48f782);}catch{_0x2afef1='\\x22'+this['_objectToString'](_0x48f782)+'\\x22';}return _0x2afef1[_0x173e85(0xbc)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x2afef1=_0x2afef1[_0x173e85(0xfd)](0x1,_0x2afef1[_0x173e85(0x185)]-0x2):_0x2afef1=_0x2afef1[_0x173e85(0xf1)](/'/g,'\\x5c\\x27')[_0x173e85(0xf1)](/\\\\"/g,'\\x22')[_0x173e85(0xf1)](/(^"|"$)/g,'\\x27'),_0x2afef1;}[_0x27fde3(0xf0)](_0x5b49ea,_0x1de7d1,_0x30f9c5,_0x2dc318){var _0x5688e8=_0x27fde3;this[_0x5688e8(0xd3)](_0x5b49ea,_0x1de7d1),_0x2dc318&&_0x2dc318(),this[_0x5688e8(0x134)](_0x30f9c5,_0x5b49ea),this[_0x5688e8(0x151)](_0x5b49ea,_0x1de7d1);}[_0x27fde3(0xd3)](_0x4611ef,_0x3233e0){var _0x5c26d4=_0x27fde3;this['_setNodeId'](_0x4611ef,_0x3233e0),this['_setNodeQueryPath'](_0x4611ef,_0x3233e0),this[_0x5c26d4(0xc9)](_0x4611ef,_0x3233e0),this[_0x5c26d4(0x115)](_0x4611ef,_0x3233e0);}[_0x27fde3(0x13d)](_0x4fb3b6,_0x5344e3){}[_0x27fde3(0x142)](_0x4512ed,_0x3cf9e3){}['_setNodeLabel'](_0x5e71a2,_0x22d5e6){}['_isUndefined'](_0x4d302a){return _0x4d302a===this['_undefined'];}[_0x27fde3(0x151)](_0x3b0072,_0x14c657){var _0x5bf6e4=_0x27fde3;this[_0x5bf6e4(0x123)](_0x3b0072,_0x14c657),this['_setNodeExpandableState'](_0x3b0072),_0x14c657[_0x5bf6e4(0xc6)]&&this['_sortProps'](_0x3b0072),this[_0x5bf6e4(0x129)](_0x3b0072,_0x14c657),this['_addLoadNode'](_0x3b0072,_0x14c657),this['_cleanNode'](_0x3b0072);}[_0x27fde3(0x134)](_0x5de5b7,_0x1ed045){var _0x16b8fa=_0x27fde3;let _0x2d9b32;try{_0x290e6d[_0x16b8fa(0x127)]&&(_0x2d9b32=_0x290e6d['console'][_0x16b8fa(0x15f)],_0x290e6d[_0x16b8fa(0x127)]['error']=function(){}),_0x5de5b7&&typeof _0x5de5b7[_0x16b8fa(0x185)]=='number'&&(_0x1ed045['length']=_0x5de5b7[_0x16b8fa(0x185)]);}catch{}finally{_0x2d9b32&&(_0x290e6d[_0x16b8fa(0x127)][_0x16b8fa(0x15f)]=_0x2d9b32);}if(_0x1ed045['type']===_0x16b8fa(0x10f)||_0x1ed045[_0x16b8fa(0xcb)]===_0x16b8fa(0xf8)){if(isNaN(_0x1ed045[_0x16b8fa(0x122)]))_0x1ed045[_0x16b8fa(0xf6)]=!0x0,delete _0x1ed045['value'];else switch(_0x1ed045['value']){case Number['POSITIVE_INFINITY']:_0x1ed045[_0x16b8fa(0x17a)]=!0x0,delete _0x1ed045['value'];break;case Number[_0x16b8fa(0xee)]:_0x1ed045[_0x16b8fa(0xc2)]=!0x0,delete _0x1ed045['value'];break;case 0x0:this['_isNegativeZero'](_0x1ed045[_0x16b8fa(0x122)])&&(_0x1ed045[_0x16b8fa(0x14a)]=!0x0);break;}}else _0x1ed045[_0x16b8fa(0xcb)]===_0x16b8fa(0x157)&&typeof _0x5de5b7[_0x16b8fa(0x14e)]==_0x16b8fa(0xc3)&&_0x5de5b7[_0x16b8fa(0x14e)]&&_0x1ed045['name']&&_0x5de5b7[_0x16b8fa(0x14e)]!==_0x1ed045[_0x16b8fa(0x14e)]&&(_0x1ed045[_0x16b8fa(0x114)]=_0x5de5b7[_0x16b8fa(0x14e)]);}[_0x27fde3(0x170)](_0xf1f197){var _0xd212b5=_0x27fde3;return 0x1/_0xf1f197===Number[_0xd212b5(0xee)];}[_0x27fde3(0xdf)](_0x4f81d7){var _0x43dad8=_0x27fde3;!_0x4f81d7[_0x43dad8(0x121)]||!_0x4f81d7[_0x43dad8(0x121)]['length']||_0x4f81d7[_0x43dad8(0xcb)]===_0x43dad8(0xed)||_0x4f81d7[_0x43dad8(0xcb)]===_0x43dad8(0x171)||_0x4f81d7[_0x43dad8(0xcb)]===_0x43dad8(0xdb)||_0x4f81d7[_0x43dad8(0x121)][_0x43dad8(0x161)](function(_0x18a94e,_0x41df81){var _0x115e99=_0x43dad8,_0x5c4fbd=_0x18a94e[_0x115e99(0x14e)][_0x115e99(0x164)](),_0x2d2a2d=_0x41df81['name'][_0x115e99(0x164)]();return _0x5c4fbd<_0x2d2a2d?-0x1:_0x5c4fbd>_0x2d2a2d?0x1:0x0;});}['_addFunctionsNode'](_0x1ad50a,_0xe0bf09){var _0x2e59ea=_0x27fde3;if(!(_0xe0bf09[_0x2e59ea(0x16d)]||!_0x1ad50a['props']||!_0x1ad50a[_0x2e59ea(0x121)][_0x2e59ea(0x185)])){for(var _0x4bbd0e=[],_0x210c57=[],_0x586890=0x0,_0x4c747a=_0x1ad50a[_0x2e59ea(0x121)][_0x2e59ea(0x185)];_0x586890<_0x4c747a;_0x586890++){var _0x5a8811=_0x1ad50a['props'][_0x586890];_0x5a8811[_0x2e59ea(0xcb)]===_0x2e59ea(0x157)?_0x4bbd0e[_0x2e59ea(0x159)](_0x5a8811):_0x210c57[_0x2e59ea(0x159)](_0x5a8811);}if(!(!_0x210c57[_0x2e59ea(0x185)]||_0x4bbd0e['length']<=0x1)){_0x1ad50a['props']=_0x210c57;var _0x301c10={'functionsNode':!0x0,'props':_0x4bbd0e};this[_0x2e59ea(0x13d)](_0x301c10,_0xe0bf09),this[_0x2e59ea(0x123)](_0x301c10,_0xe0bf09),this[_0x2e59ea(0x14d)](_0x301c10),this['_setNodePermissions'](_0x301c10,_0xe0bf09),_0x301c10['id']+='\\x20f',_0x1ad50a[_0x2e59ea(0x121)][_0x2e59ea(0xd1)](_0x301c10);}}}['_addLoadNode'](_0x53d2af,_0x276d8a){}['_setNodeExpandableState'](_0x40b745){}['_isArray'](_0x99aeaf){var _0x209e2a=_0x27fde3;return Array[_0x209e2a(0x13c)](_0x99aeaf)||typeof _0x99aeaf==_0x209e2a(0x188)&&this[_0x209e2a(0x12f)](_0x99aeaf)===_0x209e2a(0xde);}[_0x27fde3(0x115)](_0x581961,_0xf2b812){}[_0x27fde3(0xec)](_0x3db89f){var _0x544923=_0x27fde3;delete _0x3db89f[_0x544923(0x113)],delete _0x3db89f[_0x544923(0xe8)],delete _0x3db89f['_hasMapOnItsPath'];}[_0x27fde3(0xc9)](_0x2522e2,_0x15f212){}}let _0x1c8c6d=new _0x3607ac(),_0x33c478={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x5ed33d={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4bae95(_0x536f2e,_0x39ff12,_0x2ea389,_0x519fb0,_0x457ef3,_0x5d62ac){var _0x3d1f6d=_0x27fde3;let _0x47c1d7,_0x38a272;try{_0x38a272=_0xe1cf00(),_0x47c1d7=_0x1d034e[_0x39ff12],!_0x47c1d7||_0x38a272-_0x47c1d7['ts']>0x1f4&&_0x47c1d7[_0x3d1f6d(0xbb)]&&_0x47c1d7['time']/_0x47c1d7[_0x3d1f6d(0xbb)]<0x64?(_0x1d034e[_0x39ff12]=_0x47c1d7={'count':0x0,'time':0x0,'ts':_0x38a272},_0x1d034e[_0x3d1f6d(0x174)]={}):_0x38a272-_0x1d034e[_0x3d1f6d(0x174)]['ts']>0x32&&_0x1d034e[_0x3d1f6d(0x174)][_0x3d1f6d(0xbb)]&&_0x1d034e[_0x3d1f6d(0x174)]['time']/_0x1d034e[_0x3d1f6d(0x174)][_0x3d1f6d(0xbb)]<0x64&&(_0x1d034e[_0x3d1f6d(0x174)]={});let _0x38ca5c=[],_0x437642=_0x47c1d7[_0x3d1f6d(0x11e)]||_0x1d034e[_0x3d1f6d(0x174)][_0x3d1f6d(0x11e)]?_0x5ed33d:_0x33c478,_0xbaca36=_0x47c631=>{var _0x54942d=_0x3d1f6d;let _0x39d4a2={};return _0x39d4a2[_0x54942d(0x121)]=_0x47c631[_0x54942d(0x121)],_0x39d4a2[_0x54942d(0x153)]=_0x47c631[_0x54942d(0x153)],_0x39d4a2[_0x54942d(0xeb)]=_0x47c631[_0x54942d(0xeb)],_0x39d4a2[_0x54942d(0x12e)]=_0x47c631[_0x54942d(0x12e)],_0x39d4a2['autoExpandLimit']=_0x47c631['autoExpandLimit'],_0x39d4a2[_0x54942d(0x117)]=_0x47c631[_0x54942d(0x117)],_0x39d4a2['sortProps']=!0x1,_0x39d4a2[_0x54942d(0x16d)]=!_0x5d2345,_0x39d4a2['depth']=0x1,_0x39d4a2['level']=0x0,_0x39d4a2[_0x54942d(0x17c)]=_0x54942d(0xb8),_0x39d4a2[_0x54942d(0x16f)]=_0x54942d(0xaa),_0x39d4a2['autoExpand']=!0x0,_0x39d4a2[_0x54942d(0x11f)]=[],_0x39d4a2[_0x54942d(0x144)]=0x0,_0x39d4a2[_0x54942d(0xb0)]=!0x0,_0x39d4a2[_0x54942d(0x15d)]=0x0,_0x39d4a2[_0x54942d(0x18a)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x39d4a2;};for(var _0x48ba80=0x0;_0x48ba80<_0x457ef3['length'];_0x48ba80++)_0x38ca5c[_0x3d1f6d(0x159)](_0x1c8c6d['serialize']({'timeNode':_0x536f2e===_0x3d1f6d(0xfc)||void 0x0},_0x457ef3[_0x48ba80],_0xbaca36(_0x437642),{}));if(_0x536f2e===_0x3d1f6d(0xf5)){let _0x2a815b=Error[_0x3d1f6d(0xd2)];try{Error[_0x3d1f6d(0xd2)]=0x1/0x0,_0x38ca5c[_0x3d1f6d(0x159)](_0x1c8c6d[_0x3d1f6d(0x13a)]({'stackNode':!0x0},new Error()['stack'],_0xbaca36(_0x437642),{'strLength':0x1/0x0}));}finally{Error[_0x3d1f6d(0xd2)]=_0x2a815b;}}return{'method':_0x3d1f6d(0x141),'version':_0x32b5bf,'args':[{'ts':_0x2ea389,'session':_0x519fb0,'args':_0x38ca5c,'id':_0x39ff12,'context':_0x5d62ac}]};}catch(_0x180345){return{'method':'log','version':_0x32b5bf,'args':[{'ts':_0x2ea389,'session':_0x519fb0,'args':[{'type':_0x3d1f6d(0xfb),'error':_0x180345&&_0x180345['message']}],'id':_0x39ff12,'context':_0x5d62ac}]};}finally{try{if(_0x47c1d7&&_0x38a272){let _0x339d55=_0xe1cf00();_0x47c1d7[_0x3d1f6d(0xbb)]++,_0x47c1d7['time']+=_0x5034eb(_0x38a272,_0x339d55),_0x47c1d7['ts']=_0x339d55,_0x1d034e[_0x3d1f6d(0x174)]['count']++,_0x1d034e[_0x3d1f6d(0x174)][_0x3d1f6d(0xfc)]+=_0x5034eb(_0x38a272,_0x339d55),_0x1d034e['hits']['ts']=_0x339d55,(_0x47c1d7[_0x3d1f6d(0xbb)]>0x32||_0x47c1d7[_0x3d1f6d(0xfc)]>0x64)&&(_0x47c1d7[_0x3d1f6d(0x11e)]=!0x0),(_0x1d034e[_0x3d1f6d(0x174)][_0x3d1f6d(0xbb)]>0x3e8||_0x1d034e[_0x3d1f6d(0x174)][_0x3d1f6d(0xfc)]>0x12c)&&(_0x1d034e['hits'][_0x3d1f6d(0x11e)]=!0x0);}}catch{}}}return _0x4bae95;}((_0x571127,_0x3a2dc0,_0x5865e5,_0x4f9b70,_0xf2d553,_0x46ce9a,_0xf11f1,_0x40e862,_0x557754,_0x4e73b0)=>{var _0x3f7583=_0x412ae9;if(_0x571127['_console_ninja'])return _0x571127[_0x3f7583(0xca)];if(!Y(_0x571127,_0x40e862,_0xf2d553))return _0x571127[_0x3f7583(0xca)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x571127[_0x3f7583(0xca)];let _0x1e02b5=W(_0x571127),_0x165a18=_0x1e02b5['elapsed'],_0x21bfa1=_0x1e02b5[_0x3f7583(0xb5)],_0x5ecbea=_0x1e02b5[_0x3f7583(0xc5)],_0x276216={'hits':{},'ts':{}},_0x2185e6=Q(_0x571127,_0x557754,_0x276216,_0x46ce9a),_0x3ed04c=_0x24eb44=>{_0x276216['ts'][_0x24eb44]=_0x21bfa1();},_0x3ccd38=(_0x2937b1,_0x5187d0)=>{var _0x231c7a=_0x3f7583;let _0x1bccb2=_0x276216['ts'][_0x5187d0];if(delete _0x276216['ts'][_0x5187d0],_0x1bccb2){let _0x43c0c3=_0x165a18(_0x1bccb2,_0x21bfa1());_0x4756c9(_0x2185e6(_0x231c7a(0xfc),_0x2937b1,_0x5ecbea(),_0x1056bd,[_0x43c0c3],_0x5187d0));}},_0x5ec0d5=_0x14deae=>_0x2e0e1a=>{var _0x27d177=_0x3f7583;try{_0x3ed04c(_0x2e0e1a),_0x14deae(_0x2e0e1a);}finally{_0x571127[_0x27d177(0x127)]['time']=_0x14deae;}},_0x1af50d=_0x1f41d8=>_0x2cb9c4=>{var _0x17d6a8=_0x3f7583;try{let [_0x2cf5ec,_0x40ea28]=_0x2cb9c4[_0x17d6a8(0xe3)](':logPointId:');_0x3ccd38(_0x40ea28,_0x2cf5ec),_0x1f41d8(_0x2cf5ec);}finally{_0x571127[_0x17d6a8(0x127)][_0x17d6a8(0x16a)]=_0x1f41d8;}};_0x571127[_0x3f7583(0xca)]={'consoleLog':(_0x193776,_0x12ef27)=>{var _0x2ee307=_0x3f7583;_0x571127[_0x2ee307(0x127)][_0x2ee307(0x141)][_0x2ee307(0x14e)]!==_0x2ee307(0xb3)&&_0x4756c9(_0x2185e6(_0x2ee307(0x141),_0x193776,_0x5ecbea(),_0x1056bd,_0x12ef27));},'consoleTrace':(_0x465189,_0x4516d0)=>{var _0x4c6456=_0x3f7583;_0x571127[_0x4c6456(0x127)][_0x4c6456(0x141)]['name']!==_0x4c6456(0x160)&&_0x4756c9(_0x2185e6(_0x4c6456(0xf5),_0x465189,_0x5ecbea(),_0x1056bd,_0x4516d0));},'consoleTime':()=>{var _0xc0c7a9=_0x3f7583;_0x571127['console'][_0xc0c7a9(0xfc)]=_0x5ec0d5(_0x571127['console'][_0xc0c7a9(0xfc)]);},'consoleTimeEnd':()=>{var _0x5d7247=_0x3f7583;_0x571127[_0x5d7247(0x127)][_0x5d7247(0x16a)]=_0x1af50d(_0x571127[_0x5d7247(0x127)][_0x5d7247(0x16a)]);},'autoLog':(_0x2c4995,_0x11e3bb)=>{var _0x310ad4=_0x3f7583;_0x4756c9(_0x2185e6(_0x310ad4(0x141),_0x11e3bb,_0x5ecbea(),_0x1056bd,[_0x2c4995]));},'autoLogMany':(_0x353afb,_0xe41d16)=>{var _0x1acfa8=_0x3f7583;_0x4756c9(_0x2185e6(_0x1acfa8(0x141),_0x353afb,_0x5ecbea(),_0x1056bd,_0xe41d16));},'autoTrace':(_0x3628ed,_0x1049b6)=>{var _0x489950=_0x3f7583;_0x4756c9(_0x2185e6(_0x489950(0xf5),_0x1049b6,_0x5ecbea(),_0x1056bd,[_0x3628ed]));},'autoTraceMany':(_0x58e4ad,_0x1dca41)=>{var _0xe38e4=_0x3f7583;_0x4756c9(_0x2185e6(_0xe38e4(0xf5),_0x58e4ad,_0x5ecbea(),_0x1056bd,_0x1dca41));},'autoTime':(_0x19c4a9,_0x4760fe,_0x577ba7)=>{_0x3ed04c(_0x577ba7);},'autoTimeEnd':(_0x460b81,_0x43ec4b,_0x488fbb)=>{_0x3ccd38(_0x43ec4b,_0x488fbb);},'coverage':_0x4c56f9=>{_0x4756c9({'method':'coverage','version':_0x46ce9a,'args':[{'id':_0x4c56f9}]});}};let _0x4756c9=J(_0x571127,_0x3a2dc0,_0x5865e5,_0x4f9b70,_0xf2d553,_0x4e73b0),_0x1056bd=_0x571127[_0x3f7583(0x182)];return _0x571127[_0x3f7583(0xca)];})(globalThis,'127.0.0.1','51528',_0x412ae9(0xd6),'remix',_0x412ae9(0x172),_0x412ae9(0x158),["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.157.223"],_0x412ae9(0x101),'');`);
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

// app/routes/admin.user.tsx
var import_react25 = require("react");

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
  let batch = await checkAndAssignBatch(userId), user = await db.user.findUnique({
    where: { id: userId },
    include: {
      ignored_list: !0,
      rejected_list: !0
    }
  }), rejectedIds = (user == null ? void 0 : user.rejected_list.map((item) => item.id)) || [], text = await db.text.findFirst({
    where: {
      batch,
      OR: [{ status: null }, { status: "PENDING" }]
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
function saveText(id, text, userId, adminId, time) {
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
      reviewed_by_id: adminId || null,
      duration: time || null
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
var import_react26 = require("@remix-run/react");
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), loader5 = async ({ request }) => {
  let session = new URL(request.url).searchParams.get("session");
  if (!session)
    return (0, import_node4.redirect)("/error");
  let admin = await getUser(session, !0), users = await getUsers(), groups = await getAprovedBatch(), categories = await getCategories(), texts = await getUniqueTextsGroup();
  return users = users.sort(
    (a, b) => b.assigned_batch.length - a.assigned_batch.length
  ), (admin == null ? void 0 : admin.role) !== "ADMIN" && (users = users.filter(
    (user) => user.reviewer_id === null || user.reviewer_id === (admin == null ? void 0 : admin.id)
  ).sort((a, b) => a.reviewer_id === null && b.reviewer_id !== null ? 1 : a.reviewer_id !== null && b.reviewer_id === null ? -1 : 0)), (0, import_node4.json)({
    texts,
    users,
    groups,
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
  let [selectedUser, setSelectedUser] = (0, import_react25.useState)(""), socket = useSocket(), reval = (0, import_react26.useRevalidator)(), user = (0, import_react26.useOutletContext)();
  return (0, import_react25.useEffect)(() => {
    socket && socket.on("text-status-changed", (data) => {
      data && reval.revalidate();
    });
  }, [socket]), /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "col-span-12 xl:col-span-8 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(AboutUser_default, { selectedUser, user }, void 0, !1, {
      fileName: "app/routes/admin.user.tsx",
      lineNumber: 91,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.user.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      UserListCard_default,
      {
        user,
        setSelectedUser,
        selectedUser
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin.user.tsx",
        lineNumber: 93,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/admin.user.tsx",
    lineNumber: 89,
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
var action2 = async ({ request }) => {
  let formData = await request.formData(), headerUrl = request.headers.get("referer"), url = new URL(headerUrl), session = url.searchParams.get("session"), history = url.searchParams.get("history"), text = null, admin_id = formData.get("adminId"), action4 = formData.get("_action");
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
    if (action4 === "reject") {
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
    if (action4 === "change_category") {
      let category = formData.get("category"), version = formData.get("version");
      return console.log(category, version), text = await changeCategory(version, category), text;
    }
  }
  return history ? (0, import_node5.redirect)(`/?session=${session}`) : text;
};

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
  if (action4 === "change_role") {
    let role = formdata.get("role");
    return await updateUserRole(id, role);
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
var import_node6 = require("@remix-run/node"), import_react30 = require("react"), import_react31 = require("@remix-run/react");
var import_Editor2 = __toESM(require_Editor());

// app/components/Sidebar.tsx
var import_react28 = require("@remix-run/react"), import_react29 = require("react");

// app/components/hooks/useOnlineCount.tsx
var import_react27 = require("react");
function useOnlineCount() {
  let [onlineCount, setOnlineCount] = (0, import_react27.useState)(0), socket = useSocket();
  return (0, import_react27.useEffect)(() => {
    socket && socket.on("count", (data) => {
      setOnlineCount(data);
    });
  }, [socket]), onlineCount;
}

// app/components/Sidebar.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function Sidebar({ user, text }) {
  var _a, _b, _c, _d, _e;
  let onlineCount = useOnlineCount(), [openMenu, setOpenMenu] = (0, import_react29.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: " flex px-2 py-3 text-white bg-gray-600 text-lg font-semibold items-center  gap-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { onClick: () => setOpenMenu((p) => !p), className: "block md:hidden", children: openMenu ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Crossburger, {}, void 0, !1, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 26,
        columnNumber: 40
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Hamburger, {}, void 0, !1, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 26,
        columnNumber: 24
      }, this) }, void 0, !1, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      toolname
    ] }, void 0, !0, {
      fileName: "app/components/Sidebar.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      "div",
      {
        className: `flex flex-col text-white bg-[#54606e] overflow-y-auto overflow-x-hidden max-h-[100vh] transition-all -translate-x-full z-30 ${openMenu ? "block translate-x-0" : ""} min-h-[100vh] w-[260px] md:translate-x-0`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "px-2 flex gap-2 flex-col border-b-2 border-b-[#384451] mb-3 pb-2 mt-2 ", children: [
            ((user == null ? void 0 : user.role) === "ADMIN" || (user == null ? void 0 : user.role) === "REVIEWER") && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
              import_react28.Link,
              {
                to: `/admin/user?session=${user == null ? void 0 : user.username}`,
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
                lineNumber: 37,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(TextInfo, { children: [
              "User : ",
              user == null ? void 0 : user.username.split("@")[0]
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 44,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(TextInfo, { children: [
              "text id :",
              text == null ? void 0 : text.id
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 45,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(TextInfo, { children: [
              "Batch : ",
              text == null ? void 0 : text.batch
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(TextInfo, { children: [
              "Approved : ",
              (_a = user == null ? void 0 : user.text) == null ? void 0 : _a.length
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(TextInfo, { children: [
              "Rejected :",
              (_b = user == null ? void 0 : user.rejected_list) == null ? void 0 : _b.length
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 48,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(TextInfo, { children: [
              "Online:",
              onlineCount
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 49,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(TextInfo, { children: [
              "Reviewed : ",
              (_c = user == null ? void 0 : user.text.filter((r) => r.reviewed)) == null ? void 0 : _c.length
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 50,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "text-sm mb-2 font-bold", children: "History" }, void 0, !1, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 55,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex flex-col gap-2 max-h-fit overflow-y-auto", children: [
              (_d = user == null ? void 0 : user.rejected_list) == null ? void 0 : _d.map((text2) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
                HistoryItem,
                {
                  user,
                  id: text2 == null ? void 0 : text2.id,
                  onClick: () => setOpenMenu(!1),
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Cross, {}, void 0, !1, {
                    fileName: "app/components/Sidebar.tsx",
                    lineNumber: 63,
                    columnNumber: 23
                  }, this)
                },
                text2.id + "-rejected",
                !1,
                {
                  fileName: "app/components/Sidebar.tsx",
                  lineNumber: 58,
                  columnNumber: 15
                },
                this
              )),
              (_e = user == null ? void 0 : user.text) == null ? void 0 : _e.map((text2) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
                HistoryItem,
                {
                  user,
                  id: text2 == null ? void 0 : text2.id,
                  onClick: () => setOpenMenu(!1),
                  disabled: text2 == null ? void 0 : text2.reviewed,
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex items-center justify-between flex-1", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Tick, {}, void 0, !1, {
                      fileName: "app/components/Sidebar.tsx",
                      lineNumber: 76,
                      columnNumber: 21
                    }, this),
                    (text2 == null ? void 0 : text2.reviewed) && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { children: "reviewed" }, void 0, !1, {
                      fileName: "app/components/Sidebar.tsx",
                      lineNumber: 77,
                      columnNumber: 40
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/Sidebar.tsx",
                    lineNumber: 75,
                    columnNumber: 19
                  }, this)
                },
                text2.id + "-accepted",
                !1,
                {
                  fileName: "app/components/Sidebar.tsx",
                  lineNumber: 68,
                  columnNumber: 15
                },
                this
              ))
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 30,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Sidebar.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
var Sidebar_default = Sidebar;

// app/routes/_index.tsx
var import_remix_utils2 = require("remix-utils");

// app/lib/formatTime.ts
var formatTime = (milliseconds) => {
  let dateObj = new Date(milliseconds), hours = dateObj.getUTCHours(), minutes = dateObj.getUTCMinutes(), seconds = dateObj.getSeconds();
  return hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
}, formatTime_default = formatTime;

// app/routes/_index.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), loader8 = async ({ request }) => {
  let { NODE_ENV } = process.env, url = new URL(request.url), session = url.searchParams.get("session"), history = url.searchParams.get("history") || null;
  if (session) {
    let user = await createUserIfNotExists(session), text = null;
    user.allow_assign && (text = await getTextToDisplay(user == null ? void 0 : user.id, history));
    let current_time = Date.now();
    return { text, user, NODE_ENV, history, current_time };
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
  var _a, _b, _c;
  let fetcher = (0, import_react31.useFetcher)(), data = (0, import_react31.useLoaderData)(), text = ((_a = data == null ? void 0 : data.text) == null ? void 0 : _a.original_text.trim()) || "", user = data.user, insertHTML = insertHtmlOnText_default(text), newText = checkUnknown_default(insertHTML), editor = useEditorTiptap(newText), socket = useSocket(), revalidate = (0, import_react31.useRevalidator)();
  (0, import_react30.useEffect)(() => {
    socket && (socket.on("change-allow", (data2) => {
      data2.user.id === user.id && revalidate.revalidate();
    }), socket.on("reviewed", (data2) => {
      data2.user.id === user.id && revalidate.revalidate();
    }));
  }, [socket]);
  let saveText2 = async () => {
    let timeDiff = Date.now() - (data == null ? void 0 : data.current_time), duration = formatTime_default(timeDiff), modified_text = editor.getText(), id = data.text.id;
    fetcher.submit(
      { id, modified_text, userId: user.id, duration },
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
  return data.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: data.error }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 98,
    columnNumber: 26
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex flex-col md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Sidebar_default, { user: data.user, text: data.text }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex-1 flex items-center flex-col md:mt-[10vh] ", children: [
      ((_c = (_b = data.user) == null ? void 0 : _b.rejected_list) == null ? void 0 : _c.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "text-red-500 flex items-center gap-2 font-bold", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
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
            lineNumber: 106,
            columnNumber: 13
          },
          this
        ),
        "SOME OF YOUR WORK IS REJECTED"
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this),
      data.text ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "fixed bottom-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex items-center justify-between opacity-75 text-sm font-bold px-2 capitalize pt-1 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: "transcript" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 128,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 127,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_remix_utils2.ClientOnly, { fallback: null, children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_Editor2.default, { editor }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 131,
          columnNumber: 22
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 130,
          columnNumber: 13
        }, this),
        !editor && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: "loading..." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 133,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 126,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "fixed top-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm text-center py-4", children: [
        !user.allow_assign && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "font-bold first-letter:uppercase first-letter:text-red-400", children: "A single work must have been rejected 3 times or more . please contact admin ." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 117,
          columnNumber: 15
        }, this),
        "Thank you . your work is complete ! \u{1F60A}\u{1F60A}\u{1F60A}",
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 115,
        columnNumber: 11
      }, this),
      data.text && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex gap-2 fixed bottom-0 justify-center ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
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
            lineNumber: 138,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
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
            lineNumber: 145,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
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
            lineNumber: 153,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}

// app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => admin_default,
  loader: () => loader9
});
var import_react36 = require("react");

// app/components/admin/Header.tsx
var import_react_router_dom2 = require("react-router-dom");

// app/components/Dropdowns/DropdownUser.tsx
var import_react32 = require("react"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), DropdownUser = ({ user }) => {
  let [dropdownOpen, setDropdownOpen] = (0, import_react32.useState)(!1), trigger = (0, import_react32.useRef)(null), dropdown = (0, import_react32.useRef)(null);
  return (0, import_react32.useEffect)(() => {
    let clickHandler = ({ target }) => {
      dropdown.current && (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target) || setDropdownOpen(!1));
    };
    return document.addEventListener("click", clickHandler), () => document.removeEventListener("click", clickHandler);
  }), (0, import_react32.useEffect)(() => {
    let keyHandler = ({ keyCode }) => {
      !dropdownOpen || keyCode !== 27 || setDropdownOpen(!1);
    };
    return document.addEventListener("keydown", keyHandler), () => document.removeEventListener("keydown", keyHandler);
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
    "div",
    {
      ref: trigger,
      onClick: () => setDropdownOpen(!dropdownOpen),
      className: "flex items-center gap-4",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { className: "hidden text-right lg:block", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { className: "block text-sm font-medium text-black dark:text-white", children: user.username }, void 0, !1, {
          fileName: "app/components/Dropdowns/DropdownUser.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { className: "block text-xs", children: user.role }, void 0, !1, {
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
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function Progress({ current, max }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    "div",
    {
      className: "tooltip tooltip-bottom flex flex-col",
      "data-tip": `${current} / ${max}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "self-start", children: "Progress" }, void 0, !1, {
          fileName: "app/components/Progress.tsx",
          lineNumber: 12,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
var import_react33 = require("@remix-run/react");
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), Header = (props) => {
  let { progress, user } = (0, import_react33.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("header", { className: "sticky top-0 z-10 flex w-full bg-white drop-shadow-1 shadow-lg dark:bg-boxdark dark:drop-shadow-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex items-center gap-2 sm:gap-4 lg:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        "button",
        {
          "aria-controls": "sidebar",
          onClick: (e) => {
            e.stopPropagation(), props.setSidebarOpen(!props.sidebarOpen);
          },
          className: "z-10 block rounded-sm   bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Hamburger, {}, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react_router_dom2.Link, { className: "block flex-shrink-0 lg:hidden", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Progress_default, { max: progress.total, current: progress.reviewed }, void 0, !1, {
      fileName: "app/components/admin/Header.tsx",
      lineNumber: 40,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/Header.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex items-center gap-3 2xsm:gap-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(DropdownUser_default, { user }, void 0, !1, {
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
var import_react37 = require("@remix-run/react");

// app/components/admin/Sidebar.tsx
var import_react34 = require("react"), import_react35 = require("@remix-run/react");
var import_bi2 = require("react-icons/bi");
var import_fi3 = require("react-icons/fi"), import_ai2 = require("react-icons/ai"), import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function Sidebar2({ sidebarOpen, setSidebarOpen }) {
  let sidebar = (0, import_react34.useRef)(null), trigger = (0, import_react34.useRef)(null), { pathname } = (0, import_react35.useLocation)(), { user } = (0, import_react35.useLoaderData)(), url = "/?session=" + (user == null ? void 0 : user.username);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
    "aside",
    {
      ref: sidebar,
      className: ` absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden text-white bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react35.NavLink, { to: url, children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h3", { className: "mb-2 text-2xl pt-4 font-semibold text-bodydark2 capitalize", children: toolname }, void 0, !1, {
            fileName: "app/components/admin/Sidebar.tsx",
            lineNumber: 28,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/admin/Sidebar.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
            "button",
            {
              ref: trigger,
              onClick: () => setSidebarOpen(!sidebarOpen),
              "aria-controls": "sidebar",
              "aria-expanded": sidebarOpen,
              className: "block lg:hidden",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Hamburger, {}, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("nav", { className: "mt-5 py-4 px-2 lg:mt-9 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "text-xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
            import_react35.NavLink,
            {
              to: `/admin/metabase?session=${user.username}`,
              className: `group relative flex mb-3 items-center gap-2.5 rounded-sm py-2  font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("metabase") && "bg-slate-600 dark:bg-meta-4 "}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_bi2.BiSolidDashboard, {}, void 0, !1, {
                  fileName: "app/components/admin/Sidebar.tsx",
                  lineNumber: 52,
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h3", { className: "mb-4 text-sm font-semibold text-gray-400", children: "MENU" }, void 0, !1, {
            fileName: "app/components/admin/Sidebar.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("ul", { className: "mt-4 mb-5.5 flex flex-col gap-2.5 pl-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
              import_react35.NavLink,
              {
                to: "/admin/user?session=" + user.username,
                className: ({ isActive }) => "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " + (isActive && "!text-white bg-slate-600 dark:bg-meta-4"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_fi3.FiUsers, {}, void 0, !1, {
                    fileName: "app/components/admin/Sidebar.tsx",
                    lineNumber: 66,
                    columnNumber: 19
                  }, this),
                  " User"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/admin/Sidebar.tsx",
                lineNumber: 59,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/admin/Sidebar.tsx",
              lineNumber: 58,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
              import_react35.NavLink,
              {
                to: "/admin/text?session=" + user.username,
                className: ({ isActive }) => "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " + (isActive && "!text-white  bg-slate-600 dark:bg-meta-4"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_ai2.AiOutlineFileText, {}, void 0, !1, {
                    fileName: "app/components/admin/Sidebar.tsx",
                    lineNumber: 77,
                    columnNumber: 19
                  }, this),
                  " Text"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/admin/Sidebar.tsx",
                lineNumber: 70,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/admin/Sidebar.tsx",
              lineNumber: 69,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/Sidebar.tsx",
            lineNumber: 57,
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
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime"), loader9 = async ({ request }) => {
  let session = new URL(request.url).searchParams.get("session");
  if (!session)
    return (0, import_node7.redirect)("/error");
  let user = await getUser(session, !0), progress = await getProgress();
  return (0, import_node7.json)({
    user,
    progress
  });
}, DefaultLayout = () => {
  let [sidebarOpen, setSidebarOpen] = (0, import_react36.useState)(!1), { pathname } = (0, import_react37.useLocation)(), { user } = (0, import_react37.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "dark:bg-boxdark-2 dark:text-bodydark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex h-screen overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Sidebar_default2, { sidebarOpen, setSidebarOpen }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Header_default, { sidebarOpen, setSidebarOpen }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
        "div",
        {
          className: `mx-auto max-w-screen-2xl  ${pathname.includes("metabase") ? "p-0" : " p-4 md:p-6 2xl:p-10"}`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react37.Outlet, { context: user }, void 0, !1, {
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
}, admin_default = DefaultLayout;

// app/routes/error.tsx
var error_exports = {};
__export(error_exports, {
  default: () => error_default,
  loader: () => loader10
});
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime"), loader10 = () => null;
function error() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: "error no session ,require session to continue" }, void 0, !1, {
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
var import_react40 = require("@tiptap/react"), import_starter_kit2 = __toESM(require("@tiptap/starter-kit")), import_react41 = require("react");

// app/components/demo/Sidebar.tsx
var import_react38 = require("react");
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function Sidebar3({ user, text, setHistory }) {
  var _a, _b, _c, _d;
  let [openMenu, setOpenMenu] = (0, import_react38.useState)(!1);
  function SidebarHeader() {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex bg-[#384451] px-2 py-3 items-center justify-between md:hidden ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { children: "About" }, void 0, !1, {
        fileName: "app/components/demo/Sidebar.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "cursor-pointer p-2", onClick: () => setOpenMenu(!1), children: "x" }, void 0, !1, {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
      "div",
      {
        className: " flex px-2 py-3 text-white bg-gray-600 text-lg font-semibold items-center  gap-2 ",
        onClick: () => setOpenMenu(!0),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Hamburger, {}, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
      "div",
      {
        className: `flex flex-col text-white bg-[#54606e] overflow-y-auto overflow-x-hidden max-h-[100vh] transition-all -translate-x-full z-30 ${openMenu ? "block translate-x-0" : ""} min-h-[100vh] w-[260px] md:translate-x-0`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "px-2 flex gap-2 flex-col border-b-2 border-b-[#384451] mb-3 pb-2 mt-2 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(SidebarHeader, {}, void 0, !1, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(TextInfo, { children: [
              "User : ",
              user == null ? void 0 : user.username
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 43,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(TextInfo, { children: [
              "text id :",
              text == null ? void 0 : text.id
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 44,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(TextInfo, { children: [
              "Batch : ",
              text == null ? void 0 : text.batch
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 45,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(TextInfo, { children: [
              "Approved : ",
              (_a = user == null ? void 0 : user.text) == null ? void 0 : _a.length
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(TextInfo, { children: [
              "Rejected :",
              (_b = user == null ? void 0 : user.rejected_list) == null ? void 0 : _b.length
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(TextInfo, { children: [
              "Ignored : ",
              (_c = user == null ? void 0 : user.ignored_list) == null ? void 0 : _c.length
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 48,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(TextInfo, { children: [
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "text-sm mb-2 font-bold", children: "History" }, void 0, !1, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 54,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex flex-col gap-2 max-h-[30vh] overflow-y-auto", children: [
              user && (user.rejected_list || user.text) && ((user == null ? void 0 : user.rejected_list) || []).sort(sortUpdate_reviewed).map((text2) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
                DemoHistoryItem,
                {
                  user,
                  id: text2 == null ? void 0 : text2.id,
                  onClick: () => {
                    setOpenMenu(!1), setHistory(text2.id);
                  },
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Cross, {}, void 0, !1, {
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
              ((user == null ? void 0 : user.text) || []).sort(sortUpdate_reviewed).map((text2) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
                DemoHistoryItem,
                {
                  user,
                  id: text2 == null ? void 0 : text2.id,
                  onClick: () => {
                    setOpenMenu(!1), setHistory(text2.id);
                  },
                  disabled: text2 == null ? void 0 : text2.reviewed,
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex items-center justify-between flex-1", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Tick, {}, void 0, !1, {
                      fileName: "app/components/demo/Sidebar.tsx",
                      lineNumber: 86,
                      columnNumber: 23
                    }, this),
                    (text2 == null ? void 0 : text2.reviewed) && /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { children: "reviewed" }, void 0, !1, {
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
var import_Editor3 = __toESM(require_Editor()), import_react42 = require("@remix-run/react");

// app/components/hooks/useModal.tsx
var import_react39 = require("react"), import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function useModal() {
  let [isOpen, setIsOpen] = (0, import_react39.useState)(!1), openModal = () => {
    setIsOpen(!0);
  };
  return { Toggle_Modal: ({ children, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("button", { onClick: openModal, ...props, children }, void 0, !1, {
    fileName: "app/components/hooks/useModal.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this), Modal: ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_jsx_dev_runtime31.Fragment, { children: isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
    "dialog",
    {
      open: isOpen,
      className: "modal z-20 absolute",
      onClose: () => setIsOpen(!1),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "modal-box w-11/12 max-w-5xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "modal-backdrop backdrop-blur-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("button", { type: "button", onClick: () => setIsOpen(!1), children: "close" }, void 0, !1, {
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

// app/routes/demo.tsx
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), loader11 = async ({ request }) => {
  let url = new URL(request.url);
  return { text: await db.text.findMany({
    take: 10,
    select: { original_text: !0, id: !0 }
  }) };
};
function DemoPage() {
  let { text } = (0, import_react42.useLoaderData)(), [text_Array, setTextArray] = (0, import_react41.useState)(text), [user, setUser] = (0, import_react41.useState)({
    username: "demo",
    role: "USER",
    text: [],
    rejected_list: [],
    ignored_list: []
  }), [history, setHistory] = (0, import_react41.useState)(null), dialogref = (0, import_react41.useRef)(null), content = text_Array.find(
    (i) => ![...user.text, ...user.rejected_list].find((j) => j.id == i.id)
  ) || null;
  history && (content = user.text.find((i) => i.id === history) || text_Array.find((i) => i.id == history));
  let original_text = content.content || (content == null ? void 0 : content.original_text.trim()), insertHTML = insertHtmlOnText_default(original_text), setter = () => {
  }, charClick = () => {
  }, editor = (0, import_react40.useEditor)(
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex flex-col md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Sidebar_default3, { user, text, setHistory }, void 0, !1, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex-1 flex items-center flex-col md:mt-[10vh] ", children: [
      content ? /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "fixed bottom-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex items-center justify-between opacity-75 text-sm font-bold px-2 capitalize pt-1 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: "transcript" }, void 0, !1, {
            fileName: "app/routes/demo.tsx",
            lineNumber: 124,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Toggle_Modal, { className: "cursor-pointer", children: "reference" }, void 0, !1, {
            fileName: "app/routes/demo.tsx",
            lineNumber: 126,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Modal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
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
        editor ? /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_Editor3.default, { editor }, void 0, !1, {
          fileName: "app/routes/demo.tsx",
          lineNumber: 137,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: "loading..." }, void 0, !1, {
          fileName: "app/routes/demo.tsx",
          lineNumber: 135,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: "Thank you . your work is complete ! \u{1F60A}\u{1F60A}\u{1F60A}" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 120,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex gap-2 fixed bottom-0 justify-center ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
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
var assets_manifest_default = { entry: { module: "/build/entry.client-AN7T7EHS.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-SZGQBB4K.js", "/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-UENAGXQR.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-BTC7IOFU.js", imports: ["/build/_shared/chunk-YOH2CPLV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-HK5I2X64.js", imports: ["/build/_shared/chunk-V7ASUWXA.js", "/build/_shared/chunk-FJI5CMXX.js", "/build/_shared/chunk-UUBW257Y.js", "/build/_shared/chunk-RUKEUQLF.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-WBGVORKO.js", imports: ["/build/_shared/chunk-UUBW257Y.js", "/build/_shared/chunk-F2P733AV.js", "/build/_shared/chunk-FXCVAPJI.js", "/build/_shared/chunk-RUKEUQLF.js", "/build/_shared/chunk-QX4QACTM.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.metabase": { id: "routes/admin.metabase", parentId: "routes/admin", path: "metabase", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.metabase-OFUYJ642.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.text": { id: "routes/admin.text", parentId: "routes/admin", path: "text", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.text-ZM5PB5ST.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.user": { id: "routes/admin.user", parentId: "routes/admin", path: "user", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.user-KXSADXBK.js", imports: ["/build/_shared/chunk-YOH2CPLV.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin_.user.review.$slug": { id: "routes/admin_.user.review.$slug", parentId: "root", path: "admin/user/review/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/admin_.user.review.$slug-HDUJ4ASR.js", imports: ["/build/_shared/chunk-V7ASUWXA.js", "/build/_shared/chunk-4SHR5HQ5.js", "/build/_shared/chunk-FJI5CMXX.js", "/build/_shared/chunk-UUBW257Y.js", "/build/_shared/chunk-RUKEUQLF.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.text": { id: "routes/api.text", parentId: "root", path: "api/text", index: void 0, caseSensitive: void 0, module: "/build/routes/api.text-A4DRPZQ7.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.text.$version": { id: "routes/api.text.$version", parentId: "routes/api.text", path: ":version", index: void 0, caseSensitive: void 0, module: "/build/routes/api.text.$version-D5R6AXVU.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.user": { id: "routes/api.user", parentId: "root", path: "api/user", index: void 0, caseSensitive: void 0, module: "/build/routes/api.user-7BYWHH7L.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.user.$username": { id: "routes/api.user.$username", parentId: "routes/api.user", path: ":username", index: void 0, caseSensitive: void 0, module: "/build/routes/api.user.$username-K3HPPKXU.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.word": { id: "routes/api.word", parentId: "root", path: "api/word", index: void 0, caseSensitive: void 0, module: "/build/routes/api.word-JTVRFTHW.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demo": { id: "routes/demo", parentId: "root", path: "demo", index: void 0, caseSensitive: void 0, module: "/build/routes/demo-ZDFMY5N3.js", imports: ["/build/_shared/chunk-4SHR5HQ5.js", "/build/_shared/chunk-FJI5CMXX.js", "/build/_shared/chunk-UUBW257Y.js", "/build/_shared/chunk-RUKEUQLF.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/error": { id: "routes/error", parentId: "root", path: "error", index: void 0, caseSensitive: void 0, module: "/build/routes/error-VKEWX2GE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "3d7bff88", hmr: { runtime: "/build/_shared\\chunk-UENAGXQR.js", timestamp: 1694077244149 }, url: "/build/manifest-3D7BFF88.js" };

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
