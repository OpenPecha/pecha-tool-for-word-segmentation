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
var tailwind_default = "/build/_assets/tailwind-CJ6NSEC4.css";

// app/styles/global.css
var global_default = "/build/_assets/global-237JSVY2.css";

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
  { rel: "stylesheet", href: global_default }
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
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "m-0 overflow-hidden font-[20px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SocketProvider, { socket, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error: error2 }) {
  return console.error(error2), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "Oh no!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

// app/routes/api.user.$username.tsx
var api_user_username_exports = {};
__export(api_user_username_exports, {
  loader: () => loader
});

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
}, getUser = async (username) => {
  try {
    return db.user.findUnique({
      where: {
        username
      },
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
function updateUserCategory(id, categories) {
  let data = JSON.parse(categories);
  return db.user.update({
    where: { id },
    data: {
      categories: data
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

// app/routes/api.user.$username.tsx
var loader = async ({ request, params }) => {
  let username = params.username;
  return { users: await getUser(username) };
};

// app/routes/admin_.$slug.tsx
var admin_slug_exports = {};
__export(admin_slug_exports, {
  default: () => admin_slug_default,
  loader: () => loader2
});
var import_react10 = require("@remix-run/react"), import_react11 = require("react"), import_react_router = require("react-router");

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
      className: "inline-block mr-2 cursor-pointer md:hidden ",
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Link, { to: `/admin?session=${data.admin.username}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "cursor-pointer", children: "Word segmentation" }, void 0, !1, {
      fileName: "app/components/AdminHistorySidebar.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/AdminHistorySidebar.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "close", onClick: () => setOpenMenu(!1), children: "x" }, void 0, !1, {
      fileName: "app/components/AdminHistorySidebar.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AdminHistorySidebar.tsx",
    lineNumber: 33,
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
            lineNumber: 48,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_react6.Link,
            {
              to: `/admin?session=${data.admin.username}`,
              style: { textDecoration: "none", color: "inherit" },
              children: "Word segmentation"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AdminHistorySidebar.tsx",
              lineNumber: 49,
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
        lineNumber: 44,
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
              lineNumber: 62,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_react6.Link,
              {
                to: `/admin?session=${data == null ? void 0 : data.admin.username}`,
                className: "decoration-0 text-white bg-gray-500 h-fit px-2 py-1 ",
                children: "ADMIN"
              },
              void 0,
              !1,
              {
                fileName: "app/components/AdminHistorySidebar.tsx",
                lineNumber: 63,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TextInfo, { children: [
              "User : ",
              user == null ? void 0 : user.username
            ] }, void 0, !0, {
              fileName: "app/components/AdminHistorySidebar.tsx",
              lineNumber: 69,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TextInfo, { children: [
              "text id :",
              selectedId
            ] }, void 0, !0, {
              fileName: "app/components/AdminHistorySidebar.tsx",
              lineNumber: 70,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TextInfo, { children: [
              "Approved :",
              (_a = user == null ? void 0 : user.text) == null ? void 0 : _a.length
            ] }, void 0, !0, {
              fileName: "app/components/AdminHistorySidebar.tsx",
              lineNumber: 71,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TextInfo, { children: [
              "Rejected :",
              (_b = user == null ? void 0 : user.rejected_list) == null ? void 0 : _b.length
            ] }, void 0, !0, {
              fileName: "app/components/AdminHistorySidebar.tsx",
              lineNumber: 72,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TextInfo, { children: [
              "Reviewed : ",
              (_c = user == null ? void 0 : user.text.filter((r) => r.reviewed)) == null ? void 0 : _c.length
            ] }, void 0, !0, {
              fileName: "app/components/AdminHistorySidebar.tsx",
              lineNumber: 73,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/AdminHistorySidebar.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text-sm mb-2 font-bold", children: "History" }, void 0, !1, {
              fileName: "app/components/AdminHistorySidebar.tsx",
              lineNumber: 78,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col gap-2 max-h-[30vh] overflow-y-auto", children: user && user.text && [...(user == null ? void 0 : user.text) || []].sort(sortUpdate_reviewed).map((text) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              AdminHistoryItem,
              {
                id: text == null ? void 0 : text.id,
                onClick: () => {
                  setOpenMenu(!1), setSelectedId(text == null ? void 0 : text.id);
                },
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Tick, {}, void 0, !1, {
                  fileName: "app/components/AdminHistorySidebar.tsx",
                  lineNumber: 92,
                  columnNumber: 27
                }, this),
                reviewed: text == null ? void 0 : text.reviewed,
                selectedId
              },
              text.id + "-accepted",
              !1,
              {
                fileName: "app/components/AdminHistorySidebar.tsx",
                lineNumber: 85,
                columnNumber: 19
              },
              this
            )) }, void 0, !1, {
              fileName: "app/components/AdminHistorySidebar.tsx",
              lineNumber: 79,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/AdminHistorySidebar.tsx",
            lineNumber: 77,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/AdminHistorySidebar.tsx",
        lineNumber: 56,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/AdminHistorySidebar.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
var AdminHistorySidebar_default = AdminHistorySidebar;

// app/routes/admin_.$slug.tsx
var import_remix_utils = require("remix-utils"), import_Editor = __toESM(require_Editor());

// app/components/Button.tsx
var import_react8 = require("react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Button({
  handleClick,
  value,
  disabled,
  title,
  shortCut
}) {
  let classbtn = "h-[100px] w-[100px]  cursor-pointer", innerValue = value, btnRef = (0, import_react8.useRef)(null);
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
        lineNumber: 34,
        columnNumber: 20
      }, this), classbtn += " bg-[--success-btn]";
      break;
    case "REJECT":
      innerValue = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Wrong, {}, void 0, !1, {
        fileName: "app/components/Button.tsx",
        lineNumber: 38,
        columnNumber: 20
      }, this), classbtn += " bg-[--cancel-btn]";
      break;
    case "IGNORE":
      innerValue = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Ignore, {}, void 0, !1, {
        fileName: "app/components/Button.tsx",
        lineNumber: 42,
        columnNumber: 20
      }, this), classbtn += " bg-[--normal-btn]";
      break;
    case "UNDO":
      innerValue = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Undo, {}, void 0, !1, {
        fileName: "app/components/Button.tsx",
        lineNumber: 46,
        columnNumber: 20
      }, this), classbtn += " bg-[--normal-btn]";
      break;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "button",
    {
      disabled,
      title,
      className: classbtn + " hover:opacity-80",
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

// app/routes/admin_.$slug.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), loader2 = async ({ request, params }) => {
  let session = new URL(request.url).searchParams.get("session"), admin2 = await getUser(session), user = await getUser(params.slug), text_data = await db.text.findMany({
    where: { modified_by_id: user == null ? void 0 : user.id, status: "APPROVED", reviewed: !1 },
    orderBy: { updatedAt: "desc" }
  }), currentText = await db.text.findFirst({
    where: { reviewed: !1, modified_by_id: user == null ? void 0 : user.id, status: "APPROVED" },
    orderBy: { id: "asc" }
  });
  return { user, admin: admin2, text_data, id_now: currentText == null ? void 0 : currentText.id };
};
function UserDetail() {
  let fetcher = (0, import_react10.useFetcher)(), data = (0, import_react_router.useLoaderData)(), { user, text_data, admin: admin2, id_now } = data, text = text_data == null ? void 0 : text_data.sort(
    (a, b) => a.reviewed === b.reviewed ? 0 : a.reviewed ? -1 : 1
  ), socket = useSocket(), [content, setContent] = (0, import_react11.useState)(""), [selectedId, setSelectedId] = (0, import_react11.useState)(id_now);
  (0, import_react11.useEffect)(() => {
    setSelectedId(id_now);
  }, [id_now]), (0, import_react11.useEffect)(() => {
    var _a;
    if (!user)
      return;
    let display = selectedId ? user.text.find((d) => d.id === selectedId) : user.text.sort(sortUpdate_reviewed).find((d) => d.id === text.id);
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
      socket == null || socket.emit("reviewed", { user });
    }, 1e3);
  }
  let saveText2 = async () => {
    fetcher.submit(
      {
        id: selectedId,
        modified_text: editor == null ? void 0 : editor.getText(),
        userId: user.id,
        adminId: admin2 == null ? void 0 : admin2.id
      },
      { method: "POST", action: "/api/text" }
    ), text_reviewed();
  }, rejectTask = async () => {
    fetcher.submit(
      { id: selectedId, userId: user.id, _action: "reject", admin: !0 },
      { method: "PATCH", action: "/api/text" }
    ), text_reviewed();
  }, isButtonDisabled = text.length < 1;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      AdminHistorySidebar_default,
      {
        user,
        selectedId,
        setSelectedId
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin_.$slug.tsx",
        lineNumber: 102,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex-1 flex items-center flex-col md:mt-[10vh]", children: [
      !text || !selectedId || !editor ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "fixed top-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]", children: "Thank you . your work is complete ! \u{1F60A}\u{1F60A}\u{1F60A}" }, void 0, !1, {
        fileName: "app/routes/admin_.$slug.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "fixed bottom-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center justify-between opacity-75 text-sm font-bold px-2 capitalize pt-1 ", children: "transcript" }, void 0, !1, {
          fileName: "app/routes/admin_.$slug.tsx",
          lineNumber: 115,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_remix_utils.ClientOnly, { fallback: null, children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_Editor.default, { editor }, void 0, !1, {
          fileName: "app/routes/admin_.$slug.tsx",
          lineNumber: 119,
          columnNumber: 22
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin_.$slug.tsx",
          lineNumber: 118,
          columnNumber: 13
        }, this),
        !editor && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: "loading..." }, void 0, !1, {
          fileName: "app/routes/admin_.$slug.tsx",
          lineNumber: 121,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin_.$slug.tsx",
        lineNumber: 114,
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
            fileName: "app/routes/admin_.$slug.tsx",
            lineNumber: 127,
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
            fileName: "app/routes/admin_.$slug.tsx",
            lineNumber: 134,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/admin_.$slug.tsx",
        lineNumber: 126,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin_.$slug.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin_.$slug.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin_.$slug.tsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}
var admin_slug_default = UserDetail;

// app/routes/api.text.tsx
var api_text_exports = {};
__export(api_text_exports, {
  action: () => action
});
var import_node2 = require("@remix-run/node");

// app/lib/server.sendDiscordNotification.ts
var import_webhook_discord = __toESM(require("webhook-discord"));
async function sendNotification(username, message, type) {
  let webhookUrl = process.env.DISCORD_WEBHOOK_URL, Hook = new import_webhook_discord.default.Webhook(webhookUrl);
  if (!username)
    return null;
  type === "success" ? Hook.success(username, message) : type === "info" && Hook.info(username, message);
}

// app/model/server.group.ts
var getAllUniqueBatches = async () => {
  try {
    let batches = (await db.text.findMany({
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
}, getUnassignedBatch = async (userId) => {
  try {
    let allBatches = await getAllUniqueBatches(), assignedBatches = await getAllAssignedBatches(), ignoredTextbatches = (await db.user.findMany({
      where: {
        NOT: { id: userId }
      },
      select: { ignored_list: !0 }
    })).flatMap(
      (user) => user.ignored_list.map((item) => parseInt(item.batch + ""))
    ) || [], filtered = (await db.text.findMany({
      where: {
        batch: { in: ignoredTextbatches }
      }
    })).find(
      (item) => !item.reviewed
    );
    return filtered ? filtered == null ? void 0 : filtered.batch : allBatches.filter((batch) => !assignedBatches.includes(batch)).sort((a, b) => parseInt(a) - parseInt(b))[0];
  } catch (error2) {
    throw console.error(
      "An error occurred while fetching unassigned batches:",
      error2
    ), error2;
  }
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
        ignored_list: !0
      }
    }), assigned_batch = user == null ? void 0 : user.assigned_batch;
    if (!user)
      return null;
    if ((assigned_batch == null ? void 0 : assigned_batch.length) === 0)
      batchToAssign = await getUnassignedBatch(userId);
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
      !batchToAssign && allReviewed && (batchToAssign = await getUnassignedBatch(userId));
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
    let total = await db.text.findMany(), reviewed = await db.text.findMany({
      where: { reviewed: !0 }
    });
    return { total: total.length, reviewed: reviewed.length };
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

// app/routes/api.text.tsx
var action = async ({ request }) => {
  let formData = await request.formData(), headerUrl = request.headers.get("referer"), url = new URL(headerUrl), session = url.searchParams.get("session"), history = url.searchParams.get("history"), text = null, admin_id = formData.get("adminId");
  if (request.method === "POST") {
    let modified_text = formData.get("modified_text"), userId = formData.get("userId"), id = formData.get("id");
    await removeRejectText(parseInt(id), userId, "APPROVED"), text = await saveText(parseInt(id), modified_text, userId, admin_id);
    let user = await getUserById(userId), admin2 = await getUserById(admin_id), { remaining_count, not_reviewed_count } = await remainingTextToApproved(
      userId
    );
    remaining_count === 0 && !admin_id && sendNotification(
      user == null ? void 0 : user.username,
      `A batch is ready to review by ${user == null ? void 0 : user.nickname}`,
      "info"
    ), not_reviewed_count === 0 && admin_id && sendNotification(
      admin2 == null ? void 0 : admin2.username,
      `batch reviewed, ${user == null ? void 0 : user.nickname} will get new batch now`,
      "success"
    );
  }
  if (request.method === "PATCH") {
    let id = formData.get("id"), userId = formData.get("userId"), action4 = formData.get("_action");
    if (action4 === "reject") {
      await updateTextRejectCount(parseInt(id));
      let numberOfReject = await getNumberOfReject(parseInt(id));
      numberOfReject !== 0 && numberOfReject % 3 === 0 && await updateUserAssign(userId, !1), text = await rejectText(parseInt(id), userId);
    }
    action4 === "ignore" && (await removeRejectText(parseInt(id), userId, "PENDING"), text = await ignoreText(parseInt(id), userId));
  }
  return history ? (0, import_node2.redirect)(`/?session=${session}`) : text;
};

// app/routes/api.user.tsx
var api_user_exports = {};
__export(api_user_exports, {
  action: () => action2,
  loader: () => loader3
});
var loader3 = async ({ request }) => ({ users: await getUsers() }), action2 = async ({ request }) => {
  let formdata = await request.formData(), nickname = formdata.get("nickname"), id = formdata.get("id"), allow = formdata.get("allow"), action4 = formdata.get("action");
  if (action4 === "change_nickname")
    return await updateUserNickname(id, nickname);
  if (action4 === "change_categories") {
    let categories = formdata.get("categories");
    return await updateUserCategory(id, categories);
  }
  return action4 === "change_allow_assign" ? await updateUserAssign(id, allow === "true") : null;
};

// app/routes/api.word.tsx
var api_word_exports = {};
__export(api_word_exports, {
  loader: () => loader4
});
var loader4 = async ({ request }) => {
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
  default: () => Index,
  loader: () => loader5,
  meta: () => meta
});
var import_node3 = require("@remix-run/node"), import_react15 = require("react"), import_react16 = require("@remix-run/react");
var import_Editor2 = __toESM(require_Editor());

// app/components/Sidebar.tsx
var import_react13 = require("@remix-run/react"), import_react14 = require("react");

// app/components/hooks/useOnlineCount.tsx
var import_react12 = require("react");
function useOnlineCount() {
  let [onlineCount, setOnlineCount] = (0, import_react12.useState)(0), socket = useSocket();
  return (0, import_react12.useEffect)(() => {
    socket && socket.on("count", (data) => {
      setOnlineCount(data);
    });
  }, [socket]), onlineCount;
}

// app/components/Sidebar.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Sidebar({ user, text }) {
  var _a, _b, _c, _d;
  let onlineCount = useOnlineCount(), [openMenu, setOpenMenu] = (0, import_react14.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: " flex px-2 py-3 text-white bg-gray-600 text-lg font-semibold items-center  gap-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { onClick: () => setOpenMenu((p) => !p), children: openMenu ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Crossburger, {}, void 0, !1, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 27,
        columnNumber: 40
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Hamburger, {}, void 0, !1, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 27,
        columnNumber: 24
      }, this) }, void 0, !1, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      "Word Segmentation"
    ] }, void 0, !0, {
      fileName: "app/components/Sidebar.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "div",
      {
        className: `flex flex-col text-white bg-[#54606e] overflow-y-auto overflow-x-hidden max-h-[100vh] transition-all -translate-x-full z-30 ${openMenu ? "block translate-x-0" : ""} min-h-[100vh] w-[260px] md:translate-x-0`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "px-2 flex gap-2 flex-col border-b-2 border-b-[#384451] mb-3 pb-2 mt-2 ", children: [
            (user.role === "ADMIN" || user.role === "REVIEWER") && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_react13.Link,
              {
                to: `/admin?session=${user == null ? void 0 : user.username}`,
                className: "decoration-0 text-white bg-gray-500 h-fit px-2 py-1 rounded-sm",
                children: user.role
              },
              void 0,
              !1,
              {
                fileName: "app/components/Sidebar.tsx",
                lineNumber: 38,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TextInfo, { children: [
              "User : ",
              user == null ? void 0 : user.username.split("@")[0]
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 45,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TextInfo, { children: [
              "text id :",
              text == null ? void 0 : text.id
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TextInfo, { children: [
              "Batch : ",
              text == null ? void 0 : text.batch
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TextInfo, { children: [
              "Approved : ",
              (_a = user == null ? void 0 : user.text) == null ? void 0 : _a.length
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 48,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TextInfo, { children: [
              "Rejected :",
              (_b = user == null ? void 0 : user.rejected_list) == null ? void 0 : _b.length
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 49,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TextInfo, { children: [
              "Online:",
              onlineCount
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 50,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TextInfo, { children: [
              "Reviewed : ",
              (_c = user == null ? void 0 : user.text.filter((r) => r.reviewed)) == null ? void 0 : _c.length
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 51,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 36,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "text-sm mb-2 font-bold", children: "History" }, void 0, !1, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-col gap-2 max-h-[30vh] overflow-y-auto", children: [
              user && ((_d = user == null ? void 0 : user.rejected_list) == null ? void 0 : _d.length) > 0 && ((user == null ? void 0 : user.rejected_list) || []).sort(sortUpdate_reviewed).map((text2) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                HistoryItem,
                {
                  user,
                  id: text2 == null ? void 0 : text2.id,
                  onClick: () => setOpenMenu(!1),
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Cross, {}, void 0, !1, {
                    fileName: "app/components/Sidebar.tsx",
                    lineNumber: 68,
                    columnNumber: 27
                  }, this)
                },
                text2.id + "-rejected",
                !1,
                {
                  fileName: "app/components/Sidebar.tsx",
                  lineNumber: 63,
                  columnNumber: 19
                },
                this
              )),
              ((user == null ? void 0 : user.text) || []).sort(sortUpdate_reviewed).map((text2) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                HistoryItem,
                {
                  user,
                  id: text2 == null ? void 0 : text2.id,
                  onClick: () => setOpenMenu(!1),
                  disabled: text2 == null ? void 0 : text2.reviewed,
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center justify-between flex-1", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Tick, {}, void 0, !1, {
                      fileName: "app/components/Sidebar.tsx",
                      lineNumber: 82,
                      columnNumber: 23
                    }, this),
                    (text2 == null ? void 0 : text2.reviewed) && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: "reviewed" }, void 0, !1, {
                      fileName: "app/components/Sidebar.tsx",
                      lineNumber: 83,
                      columnNumber: 42
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/Sidebar.tsx",
                    lineNumber: 81,
                    columnNumber: 21
                  }, this)
                },
                text2.id + "-accepted",
                !1,
                {
                  fileName: "app/components/Sidebar.tsx",
                  lineNumber: 74,
                  columnNumber: 17
                },
                this
              ))
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 57,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 31,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Sidebar.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
var Sidebar_default = Sidebar;

// app/routes/_index.tsx
var import_remix_utils2 = require("remix-utils");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), loader5 = async ({ request }) => {
  let { NODE_ENV } = process.env, url = new URL(request.url), session = url.searchParams.get("session"), history = url.searchParams.get("history") || null;
  if (session) {
    let user = await createUserIfNotExists(session), text = null;
    return user.allow_assign && (text = await getTextToDisplay(user == null ? void 0 : user.id, history)), { text, user, NODE_ENV, history };
  } else
    return (0, import_node3.redirect)("https://pecha.tools");
}, meta = () => [
  { title: "Pecha Tools" },
  { name: "description", content: "Word segmentation" },
  {
    keywords: "pecha,tools,word,segmentation,pecha tools,pecha tools word segmentation"
  }
];
function Index() {
  var _a, _b;
  let fetcher = (0, import_react16.useFetcher)(), data = (0, import_react16.useLoaderData)(), text = ((_a = data == null ? void 0 : data.text) == null ? void 0 : _a.original_text.trim()) || "", dialogref = (0, import_react15.useRef)(null), user = data.user, insertHTML = insertHtmlOnText_default(text), newText = checkUnknown_default(insertHTML), editor = useEditorTiptap(newText), socket = useSocket(), revalidate = (0, import_react16.useRevalidator)();
  (0, import_react15.useEffect)(() => {
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
  return data.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: data.error }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 98,
    columnNumber: 26
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-col md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Sidebar_default, { user: data.user, text: data.text }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex-1 flex items-center flex-col md:mt-[10vh] ", children: [
      data.text ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "fixed bottom-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center justify-between opacity-75 text-sm font-bold px-2 capitalize pt-1 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: "transcript" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 123,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "div",
            {
              onClick: () => {
                var _a2;
                return (_a2 = dialogref.current) == null ? void 0 : _a2.showModal();
              },
              className: "cursor-pointer",
              children: "reference"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 125,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("dialog", { ref: dialogref, className: "modal", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("form", { method: "dialog", className: "modal-box p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              "iframe",
              {
                className: "w-full h-[80vh]",
                src: "https://docs.google.com/spreadsheets/d/1ZdkguvvvWiqZoEh4LLbceYsnHubBDpAAdi4DToFN9I0/edit?usp=sharing"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 133,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 132,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("form", { method: "dialog", className: "modal-backdrop", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { children: "close" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 139,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 138,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 131,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 122,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_remix_utils2.ClientOnly, { fallback: null, children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_Editor2.default, { editor }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 144,
          columnNumber: 22
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 143,
          columnNumber: 13
        }, this),
        !editor && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: "loading..." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 146,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "fixed top-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm text-center py-4", children: [
        !user.allow_assign && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "font-bold first-letter:uppercase first-letter:text-red-400", children: "A single work must have been rejected 3 times or more . please contact admin ." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 107,
          columnNumber: 15
        }, this),
        "Thank you . your work is complete ! \u{1F60A}\u{1F60A}\u{1F60A}",
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 113,
          columnNumber: 13
        }, this),
        ((_b = user == null ? void 0 : user.rejected_list) == null ? void 0 : _b.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: "you have some rejected work,please visit them" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 115,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: "once work are reviewed , you will be assigned new work" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 117,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this),
      data.text && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex gap-2 fixed bottom-0 justify-center ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
            lineNumber: 151,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
            lineNumber: 158,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
            lineNumber: 172,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 150,
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
  action: () => action3,
  default: () => admin_default,
  loader: () => loader6,
  meta: () => meta2
});
var import_node4 = require("@remix-run/node"), import_react20 = require("@remix-run/react"), import_react21 = require("react");
var import_fi2 = require("react-icons/fi"), import_ti = require("react-icons/ti"), import_im = require("react-icons/im");

// app/components/AssignCategory.tsx
var import_react18 = require("@remix-run/react"), import_fi = require("react-icons/fi");

// app/components/MultiSelect.tsx
var import_react17 = require("@remix-run/react"), import_react_tailwindcss_select = __toESM(require("react-tailwindcss-select")), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function MultiSelect({
  optionsData,
  values,
  user
}) {
  let options = optionsData.map((c) => ({ value: c, label: c })), fetcher = (0, import_react17.useFetcher)();
  function handleChange(category) {
    let data = category == null ? void 0 : category.map((c) => c.value);
    category || (data = []), fetcher.submit(
      {
        id: user.id,
        categories: JSON.stringify(data),
        action: "change_categories"
      },
      {
        method: "POST",
        action: "/api/user"
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "max-w-xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    import_react_tailwindcss_select.default,
    {
      isMultiple: !0,
      value: values.map((c) => ({ value: c, label: c })) || [],
      options,
      primaryColor: "green",
      onChange: handleChange,
      isSearchable: !0,
      loading: fetcher.state !== "idle"
    },
    void 0,
    !1,
    {
      fileName: "app/components/MultiSelect.tsx",
      lineNumber: 41,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/MultiSelect.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

// app/components/AssignCategory.tsx
var import_react19 = require("react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function AssignCategory({ user, editable }) {
  let { categories } = (0, import_react18.useLoaderData)(), modalref = (0, import_react19.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex", children: [
    user.categories.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: user.categories.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { className: "badge bg-green-300", children: c }, c, !1, {
      fileName: "app/components/AssignCategory.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/components/AssignCategory.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "button",
      {
        onClick: () => {
          var _a;
          return (_a = modalref.current) == null ? void 0 : _a.showModal();
        },
        className: "mx-2  ",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_fi.FiEdit2, { size: 10 }, void 0, !1, {
          fileName: "app/components/AssignCategory.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/AssignCategory.tsx",
        lineNumber: 26,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dialog", { ref: modalref, className: "modal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("form", { method: "dialog", className: "modal-box h-[40vh]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { className: "bg-gray-400 btn-sm btn-circle  btn-ghost absolute right-2 top-2", children: "\u2715" }, void 0, !1, {
        fileName: "app/components/AssignCategory.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h3", { className: "font-bold text-lg", children: "Select Categories" }, void 0, !1, {
        fileName: "app/components/AssignCategory.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        MultiSelect,
        {
          optionsData: categories,
          values: user.categories,
          user
        },
        void 0,
        !1,
        {
          fileName: "app/components/AssignCategory.tsx",
          lineNumber: 40,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/AssignCategory.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/AssignCategory.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AssignCategory.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var AssignCategory_default = AssignCategory;

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

// app/routes/admin.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), loader6 = async ({ request }) => {
  let session = new URL(request.url).searchParams.get("session");
  if (!session)
    return (0, import_node4.redirect)("/error");
  let admin2 = await getUser(session), users = await getUsers(), groups = await getAprovedBatch(), progress = await getProgress(), reviewers = users.filter((user) => user.role === "REVIEWER"), categories = await getCategories();
  return (0, import_node4.defer)({ admin: admin2, users, groups, progress, reviewers, categories });
}, action3 = async ({ request }) => {
  let formdata = await request.formData();
  if (request.method === "DELETE") {
    let batch = formdata.get("batch"), userId = formdata.get("id");
    return await removeBatchFromUser(parseInt(batch), userId);
  }
};
function meta2() {
  return [
    { title: "Admin Dashboard" },
    {
      name: "description",
      content: "admin dashboard for word segmentation , pecha tools"
    }
  ];
}
function admin() {
  let { admin: admin2, users, progress, reviewers } = (0, import_react20.useLoaderData)(), [search, setSearch] = (0, import_react21.useState)(""), [selectedReviewer, setSelectedReviewer] = (0, import_react21.useState)("All"), dashboardRef = (0, import_react21.useRef)(null);
  users = users.sort(
    (a, b) => b.assigned_batch.length - a.assigned_batch.length
  );
  let colorScheme = [
    { color: "bg-blue-300", text: "Ready" },
    { color: "bg-red-300", text: "Some Rejected" },
    { color: "bg-green-300", text: "All Accepted" }
  ], list = users.filter((user) => user.username.includes(search));
  selectedReviewer !== "All" && (list = list.filter(
    (user) => {
      var _a;
      return ((_a = user == null ? void 0 : user.reviewer) == null ? void 0 : _a.username) === selectedReviewer || (user == null ? void 0 : user.username) === selectedReviewer;
    }
  ));
  let isAdmin = admin2.role === "ADMIN";
  function handleReviewerChange(e) {
    let selectedReviewer2 = e.target.value;
    setSelectedReviewer(selectedReviewer2);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "p-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col justify-between md:flex-row gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react20.Link, { to: `/?session=${admin2.username}`, className: "btn", children: "Home" }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "button",
          {
            className: "btn p-2",
            onClick: () => {
              var _a;
              return (_a = dashboardRef == null ? void 0 : dashboardRef.current) == null ? void 0 : _a.showModal();
            },
            children: "Dashboard"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin.tsx",
            lineNumber: 89,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        "div",
        {
          className: "tooltip tooltip-bottom",
          "data-tip": `${progress.reviewed} / ${progress.total}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "md:text-center", children: "Progress" }, void 0, !1, {
              fileName: "app/routes/admin.tsx",
              lineNumber: 100,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              "progress",
              {
                className: "progress progress-success w-56",
                max: progress.total,
                value: progress.reviewed
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin.tsx",
                lineNumber: 102,
                columnNumber: 11
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/admin.tsx",
          lineNumber: 96,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("dialog", { id: "my_modal_3", ref: dashboardRef, className: "modal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("form", { method: "dialog", className: "modal-box w-11/12 max-w-5xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { className: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2", children: "\u2715" }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 110,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "iframe",
          {
            src: "https://metabase.pecha.tools/public/dashboard/4e6afb12-9c15-48cc-afd4-61e52887ad80",
            style: { border: 0, width: "100%", height: "80vh" },
            allowtransparency: "true"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin.tsx",
            lineNumber: 113,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 109,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex items-center gap-2", children: colorScheme == null ? void 0 : colorScheme.map((data) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex gap-2 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "span",
          {
            className: `inline-block w-4 h-4 rounded-full ${data.color} border-2 border-gray-300]`
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin.tsx",
            lineNumber: 125,
            columnNumber: 17
          },
          this
        ),
        data.text
      ] }, data.color, !0, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 124,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col md:flex-row gap-2 mt-2 justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex gap-2  items-center flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { children: "Users:" }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "input",
          {
            type: "text",
            onChange: (e) => setSearch(e.target.value),
            placeholder: "search",
            className: "input input-bordered w-full max-w-xs"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin.tsx",
            lineNumber: 137,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex gap-2  items-center flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("label", { htmlFor: "reviewer-select", children: "Select Reviewer: " }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 145,
          columnNumber: 11
        }, this),
        isAdmin && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "select",
          {
            id: "reviewer-select",
            className: "select select-bordered w-full max-w-xs",
            onChange: handleReviewerChange,
            value: selectedReviewer,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("option", { value: "All", children: "All" }, void 0, !1, {
                fileName: "app/routes/admin.tsx",
                lineNumber: 153,
                columnNumber: 15
              }, this),
              reviewers.map((reviewer) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                "option",
                {
                  value: reviewer.username,
                  children: reviewer.username
                },
                reviewer.id + "-key-selection",
                !1,
                {
                  fileName: "app/routes/admin.tsx",
                  lineNumber: 155,
                  columnNumber: 17
                },
                this
              ))
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/admin.tsx",
            lineNumber: 147,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 144,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 134,
      columnNumber: 7
    }, this),
    users.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "overflow-x-auto max-h-[80dvh] overflow-y-scroll", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("table", { className: "table", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("thead", { className: "sticky top-0 bg-white shadow-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("th", { children: "User" }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 171,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("th", { children: "Role" }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 172,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("th", { children: "Active" }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 173,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("th", { children: "Category" }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 174,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("th", { children: "Approved/Reviewed" }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 175,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("th", { children: "Assigned Jobs" }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 176,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 170,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 169,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("tbody", { children: list.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Users, { user, admin: admin2 }, user.id, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 181,
        columnNumber: 17
      }, this)) }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 179,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 168,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 167,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}
var admin_default = admin;
function Users({ user, admin: admin2 }) {
  var _a, _b;
  let { groups } = (0, import_react20.useLoaderData)(), socket = useSocket(), [openEdit, setOpenEdit] = (0, import_react21.useState)(!1), inputRef = (0, import_react21.useRef)(null), url = `/admin/${user.username}?session=${admin2.username}`, fetcher = (0, import_react20.useFetcher)(), userfetcher = (0, import_react20.useFetcher)(), reviewed_count = user == null ? void 0 : user.text.filter((item) => item.reviewed).length, approved_count = user.text.length, reval = (0, import_react20.useRevalidator)();
  (0, import_react21.useEffect)(() => {
    socket && socket.on("text-status-changed", (data) => {
      reval.revalidate();
    });
  }, [socket]);
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
  function handleChangeAllow() {
    fetcher.submit(
      {
        id: user.id,
        allow: !user.allow_assign,
        action: "change_allow_assign"
      },
      {
        action: "/api/user",
        method: "POST"
      }
    ), socket == null || socket.emit("change-allow", { user });
  }
  let removeBatch = (e) => {
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
  }, removing = ((_a = userfetcher.formData) == null ? void 0 : _a.get("id")) === user.id && fetcher.formMethod === "DELETE";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("tr", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { className: "flex gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex gap-2", children: openEdit ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "input",
          {
            type: "text",
            defaultValue: user.nickname,
            name: "nickname",
            ref: inputRef,
            className: "input input-xs input-bordered w-full max-w-xs"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin.tsx",
            lineNumber: 276,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { type: "button", onClick: handleSubmit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_ti.TiTick, { color: "green", size: 24 }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 284,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 283,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { type: "button", onClick: () => setOpenEdit(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_im.ImCross, { color: "red", size: 20 }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 287,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 286,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 275,
        columnNumber: 13
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
        ((_b = fetcher == null ? void 0 : fetcher.formData) == null ? void 0 : _b.get("nickname")) || user.nickname,
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { onClick: () => setOpenEdit(!0), children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_fi2.FiEdit2, {}, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 271,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 270,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 268,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 266,
        columnNumber: 9
      }, this),
      "(",
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react20.Link, { to: url, style: { textDecoration: "none", color: "inherit" }, children: user.username }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 293,
        columnNumber: 9
      }, this),
      ")"
    ] }, void 0, !0, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 265,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { children: user.role }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 298,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "input",
      {
        type: "checkbox",
        className: `toggle toggle-success ${fetcher.state !== "idle" && "cursor-not-allowed opacity-50 pointer-events-non"}`,
        checked: user == null ? void 0 : user.allow_assign,
        onChange: handleChangeAllow,
        "aria-label": "Toggle_role"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin.tsx",
        lineNumber: 300,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 299,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      AssignCategory_default,
      {
        user,
        editable: user.role === "REVIEWER" || user.role === "ADMIN"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin.tsx",
        lineNumber: 312,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 311,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { children: [
      approved_count,
      "/",
      reviewed_count
    ] }, void 0, !0, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 317,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { className: "flex gap-2 ", children: [
      user.assigned_batch.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        "span",
        {
          className: " text-black  mr-1 cursor-pointer p-1 border-2 rounded border-gray-300",
          onClick: () => removeBatch(item),
          style: {
            background: groups[item].rejected ? "pink" : groups[item].reviewed ? "lightgreen" : groups[item].approved ? "lightblue" : "white"
          },
          children: item
        },
        item,
        !1,
        {
          fileName: "app/routes/admin.tsx",
          lineNumber: 323,
          columnNumber: 13
        },
        this
      )),
      removing && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: "wait" }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 341,
        columnNumber: 22
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 320,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 264,
    columnNumber: 5
  }, this);
}

// app/routes/error.tsx
var error_exports = {};
__export(error_exports, {
  default: () => error_default,
  loader: () => loader7
});
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), loader7 = () => null;
function error() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: "error no session ,require session to continue" }, void 0, !1, {
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
  loader: () => loader8
});
var import_react23 = require("@tiptap/react"), import_starter_kit2 = __toESM(require("@tiptap/starter-kit")), import_react24 = require("react");

// app/components/demo/Sidebar.tsx
var import_react22 = require("react");
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function Sidebar2({ user, text, setHistory }) {
  var _a, _b, _c, _d;
  let [openMenu, setOpenMenu] = (0, import_react22.useState)(!1);
  function SidebarHeader() {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex bg-[#384451] px-2 py-3 items-center justify-between md:hidden ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: "About" }, void 0, !1, {
        fileName: "app/components/demo/Sidebar.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "cursor-pointer p-2", onClick: () => setOpenMenu(!1), children: "x" }, void 0, !1, {
        fileName: "app/components/demo/Sidebar.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/demo/Sidebar.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      "div",
      {
        className: " flex px-2 py-3 text-white bg-gray-600 text-lg font-semibold items-center  gap-2 ",
        onClick: () => setOpenMenu(!0),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Hamburger, {}, void 0, !1, {
            fileName: "app/components/demo/Sidebar.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          "Word Segmentation"
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/demo/Sidebar.tsx",
        lineNumber: 28,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      "div",
      {
        className: `flex flex-col text-white bg-[#54606e] overflow-y-auto overflow-x-hidden max-h-[100vh] transition-all -translate-x-full z-30 ${openMenu ? "block translate-x-0" : ""} min-h-[100vh] w-[260px] md:translate-x-0`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "px-2 flex gap-2 flex-col border-b-2 border-b-[#384451] mb-3 pb-2 mt-2 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(SidebarHeader, {}, void 0, !1, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 41,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(TextInfo, { children: [
              "User : ",
              user == null ? void 0 : user.username
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(TextInfo, { children: [
              "text id :",
              text == null ? void 0 : text.id
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 43,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(TextInfo, { children: [
              "Batch : ",
              text == null ? void 0 : text.batch
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 44,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(TextInfo, { children: [
              "Approved : ",
              (_a = user == null ? void 0 : user.text) == null ? void 0 : _a.length
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 45,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(TextInfo, { children: [
              "Rejected :",
              (_b = user == null ? void 0 : user.rejected_list) == null ? void 0 : _b.length
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(TextInfo, { children: [
              "Ignored : ",
              (_c = user == null ? void 0 : user.ignored_list) == null ? void 0 : _c.length
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(TextInfo, { children: [
              "Reviewed : ",
              (_d = user == null ? void 0 : user.text.filter((r) => r.reviewed)) == null ? void 0 : _d.length
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 48,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/demo/Sidebar.tsx",
            lineNumber: 40,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-sm mb-2 font-bold", children: "History" }, void 0, !1, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 53,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-col gap-2 max-h-[30vh] overflow-y-auto", children: [
              user && (user.rejected_list || user.text) && ((user == null ? void 0 : user.rejected_list) || []).sort(sortUpdate_reviewed).map((text2) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                DemoHistoryItem,
                {
                  user,
                  id: text2 == null ? void 0 : text2.id,
                  onClick: () => {
                    setOpenMenu(!1), setHistory(text2.id);
                  },
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Cross, {}, void 0, !1, {
                    fileName: "app/components/demo/Sidebar.tsx",
                    lineNumber: 68,
                    columnNumber: 27
                  }, this)
                },
                text2.id + "-accepted",
                !1,
                {
                  fileName: "app/components/demo/Sidebar.tsx",
                  lineNumber: 60,
                  columnNumber: 19
                },
                this
              )),
              ((user == null ? void 0 : user.text) || []).sort(sortUpdate_reviewed).map((text2) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                DemoHistoryItem,
                {
                  user,
                  id: text2 == null ? void 0 : text2.id,
                  onClick: () => {
                    setOpenMenu(!1), setHistory(text2.id);
                  },
                  disabled: text2 == null ? void 0 : text2.reviewed,
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center justify-between flex-1", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Tick, {}, void 0, !1, {
                      fileName: "app/components/demo/Sidebar.tsx",
                      lineNumber: 85,
                      columnNumber: 23
                    }, this),
                    (text2 == null ? void 0 : text2.reviewed) && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { children: "reviewed" }, void 0, !1, {
                      fileName: "app/components/demo/Sidebar.tsx",
                      lineNumber: 86,
                      columnNumber: 42
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/demo/Sidebar.tsx",
                    lineNumber: 84,
                    columnNumber: 21
                  }, this)
                },
                text2.id + "-rejected",
                !1,
                {
                  fileName: "app/components/demo/Sidebar.tsx",
                  lineNumber: 74,
                  columnNumber: 17
                },
                this
              ))
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 54,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/demo/Sidebar.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/demo/Sidebar.tsx",
        lineNumber: 35,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/demo/Sidebar.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
var Sidebar_default2 = Sidebar2;

// app/routes/demo.tsx
var import_Editor3 = __toESM(require_Editor()), import_react25 = require("@remix-run/react");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), loader8 = async ({ request }) => {
  let url = new URL(request.url);
  return { text: await db.text.findMany({
    take: 10,
    select: { original_text: !0, id: !0 }
  }) };
};
function DemoPage() {
  let { text } = (0, import_react25.useLoaderData)(), [text_Array, setTextArray] = (0, import_react24.useState)(text), [user, setUser] = (0, import_react24.useState)({
    username: "demo",
    role: "USER",
    text: [],
    rejected_list: [],
    ignored_list: []
  }), [history, setHistory] = (0, import_react24.useState)(null), dialogref = (0, import_react24.useRef)(null), content = text_Array.find(
    (i) => ![...user.text, ...user.rejected_list].find((j) => j.id == i.id)
  ) || null;
  history && (content = user.text.find((i) => i.id === history) || text_Array.find((i) => i.id == history));
  let original_text = content.content || (content == null ? void 0 : content.original_text.trim()), insertHTML = insertHtmlOnText_default(original_text), setter = () => {
  }, charClick = () => {
  }, editor = (0, import_react23.useEditor)(
    {
      extensions: [import_starter_kit2.default, Space(setter), Character(charClick)],
      content: insertHTML,
      editorProps,
      editable: !1
    },
    [insertHTML]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-col md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Sidebar_default2, { user, text, setHistory }, void 0, !1, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex-1 flex items-center flex-col md:mt-[10vh] ", children: [
      content ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "fixed bottom-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex items-center justify-between opacity-75 text-sm font-bold px-2 capitalize pt-1 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: "transcript" }, void 0, !1, {
            fileName: "app/routes/demo.tsx",
            lineNumber: 122,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "div",
            {
              onClick: () => {
                var _a;
                return (_a = dialogref.current) == null ? void 0 : _a.showModal();
              },
              className: "cursor-pointer",
              children: "reference"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/demo.tsx",
              lineNumber: 124,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("dialog", { ref: dialogref, className: "modal", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("form", { method: "dialog", className: "modal-box p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              "iframe",
              {
                className: "w-full h-[80vh]",
                src: "https://docs.google.com/spreadsheets/d/1ZdkguvvvWiqZoEh4LLbceYsnHubBDpAAdi4DToFN9I0/edit?usp=sharing"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/demo.tsx",
                lineNumber: 132,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/demo.tsx",
              lineNumber: 131,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("form", { method: "dialog", className: "modal-backdrop", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { children: "close" }, void 0, !1, {
              fileName: "app/routes/demo.tsx",
              lineNumber: 138,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/demo.tsx",
              lineNumber: 137,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/demo.tsx",
            lineNumber: 130,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/demo.tsx",
          lineNumber: 121,
          columnNumber: 13
        }, this),
        editor ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_Editor3.default, { editor }, void 0, !1, {
          fileName: "app/routes/demo.tsx",
          lineNumber: 145,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: "loading..." }, void 0, !1, {
          fileName: "app/routes/demo.tsx",
          lineNumber: 143,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 120,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: "Thank you . your work is complete ! \u{1F60A}\u{1F60A}\u{1F60A}" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex gap-2 fixed bottom-0 justify-center ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          Button_default,
          {
            disabled: !1,
            handleClick: () => {
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
            },
            value: "CONFIRM",
            title: "CONFIRM (a)",
            shortCut: "a"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/demo.tsx",
            lineNumber: 150,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          Button_default,
          {
            disabled: !1,
            handleClick: () => {
              history ? (user.text.some((item) => item.id === history) && setUser((prev) => ({
                ...prev,
                text: prev.text.filter((item) => item.id != history),
                rejected_list: [...prev.rejected_list, { id: history }]
              })), setHistory(null)) : (setUser({
                ...user,
                rejected_list: [...user.rejected_list, { id: content.id }]
              }), setHistory(null));
            },
            value: "REJECT",
            title: "REJECT (x)",
            shortCut: "x"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/demo.tsx",
            lineNumber: 157,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          Button_default,
          {
            disabled: !1,
            handleClick: () => {
              let text2 = insertHtmlOnText_default(content.original_text);
              editor == null || editor.commands.setContent(text2);
            },
            value: "UNDO",
            title: "UNDO (backspace)",
            shortCut: "Backspace"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/demo.tsx",
            lineNumber: 164,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/demo.tsx",
    lineNumber: 113,
    columnNumber: 5
  }, this);
}
var demo_default = DemoPage;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-G7JOO27U.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-GVK3FNSX.js", "/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-UENAGXQR.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-C7PBTCF6.js", imports: ["/build/_shared/chunk-AU7JXUKY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-554XMJDG.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-QBCE5T6G.js", "/build/_shared/chunk-TND25XQH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-HKM5AMYG.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin_.$slug": { id: "routes/admin_.$slug", parentId: "root", path: "admin/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/admin_.$slug-E3CILY64.js", imports: ["/build/_shared/chunk-HUA6FSZE.js", "/build/_shared/chunk-QBCE5T6G.js", "/build/_shared/chunk-TND25XQH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.text": { id: "routes/api.text", parentId: "root", path: "api/text", index: void 0, caseSensitive: void 0, module: "/build/routes/api.text-A4DRPZQ7.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.user": { id: "routes/api.user", parentId: "root", path: "api/user", index: void 0, caseSensitive: void 0, module: "/build/routes/api.user-7BYWHH7L.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.user.$username": { id: "routes/api.user.$username", parentId: "routes/api.user", path: ":username", index: void 0, caseSensitive: void 0, module: "/build/routes/api.user.$username-K3HPPKXU.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.word": { id: "routes/api.word", parentId: "root", path: "api/word", index: void 0, caseSensitive: void 0, module: "/build/routes/api.word-JTVRFTHW.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demo": { id: "routes/demo", parentId: "root", path: "demo", index: void 0, caseSensitive: void 0, module: "/build/routes/demo-KMTIPG5G.js", imports: ["/build/_shared/chunk-HUA6FSZE.js", "/build/_shared/chunk-TND25XQH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/error": { id: "routes/error", parentId: "root", path: "error", index: void 0, caseSensitive: void 0, module: "/build/routes/error-QFS7PSXJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "aa8c2fab", hmr: { runtime: "/build/_shared\\chunk-UENAGXQR.js", timestamp: 1693545448909 }, url: "/build/manifest-AA8C2FAB.js" };

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
  "routes/api.user.$username": {
    id: "routes/api.user.$username",
    parentId: "routes/api.user",
    path: ":username",
    index: void 0,
    caseSensitive: void 0,
    module: api_user_username_exports
  },
  "routes/admin_.$slug": {
    id: "routes/admin_.$slug",
    parentId: "root",
    path: "admin/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: admin_slug_exports
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
