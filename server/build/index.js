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
  links: () => links,
  loader: () => loader
});
var import_react3 = require("@remix-run/react"), import_react4 = require("react");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-Z5D2XZ65.css";

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
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), loader = async ({ request }) => ({ session: new URL(request.url).searchParams.get("session") }), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: global_default },
  { rel: "stylesheet", href: dist_default }
];
function App() {
  let [socket, setSocket] = (0, import_react4.useState)(), { session } = (0, import_react3.useLoaderData)();
  return (0, import_react4.useEffect)(() => {
    let socket2 = connect();
    return setSocket(socket2), socket2.emit("user_login", session), () => {
      socket2.close();
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "m-0 overflow-hidden font-[20px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SocketProvider, { socket, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error: error2 }) {
  return console.error(error2), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "Oh no!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

// app/routes/admin_.user.review.$slug.tsx
var admin_user_review_slug_exports = {};
__export(admin_user_review_slug_exports, {
  default: () => admin_user_review_slug_default,
  loader: () => loader2
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
  let user;
  if (user = await db.user.findUnique({
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
  return user;
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
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), loader2 = async ({ request, params }) => {
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
  }, isButtonDisabled = (editor == null ? void 0 : editor.getText().length) < 1;
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
  loader: () => loader3
});
var loader3 = async ({ request, params }) => {
  let username = params.username;
  return { users: await getUser(username, !1) };
};

// app/routes/api.text.$version.tsx
var api_text_version_exports = {};
__export(api_text_version_exports, {
  loader: () => loader4
});
var loader4 = async ({ request, params }) => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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

// app/routes/admin.text.tsx
var admin_text_exports = {};
__export(admin_text_exports, {
  default: () => admin_text_default,
  loader: () => loader5
});
var import_node3 = require("@remix-run/node");

// app/components/admin/AboutText.tsx
var import_react14 = require("@remix-run/react"), import_react15 = __toESM(require("react")), import_bi = require("react-icons/bi");

// app/lib/downloadfile.ts
var downloadJsonlFile = (data, title) => {
  let jsonContent = JSON.stringify(data, null, 2), element = document.createElement("a"), file = new Blob([jsonContent], { type: "application/json" });
  element.href = URL.createObjectURL(file), element.download = title.replace(".txt", "") + ".json", document.body.appendChild(element), element.click();
};

// app/components/admin/UploadText.tsx
var import_react12 = require("@remix-run/react"), import_react13 = __toESM(require("react")), import_papaparse = __toESM(require("papaparse")), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function UploadText() {
  var _a;
  let [data, setData] = import_react13.default.useState(""), [fileName, setFileName] = import_react13.default.useState(""), [csvData, setCsvData] = import_react13.default.useState([]), dataUpload = (0, import_react12.useFetcher)(), { lastbatch } = (0, import_react12.useLoaderData)(), startBatch = parseInt(lastbatch) + 1, convertToCSV = () => {
    import_papaparse.default.parse(data, {
      complete: (result) => {
        let lines = result.data, rows = [], currentRow = [], currentBatch = startBatch;
        lines.forEach((line, index) => {
          if (currentRow.push(line), currentRow.length === 10 || index === lines.length - 1) {
            let rowData = {
              original_text: currentRow.join(" "),
              version: fileName,
              batch: currentBatch
            };
            rows.push(rowData), rows.length % 10 === 0 && rows.length !== 0 && (currentBatch += 1), currentRow = [];
          }
        }), setCsvData(rows);
      }
    });
  };
  import_react13.default.useEffect(() => {
    convertToCSV();
  }, [data]);
  let handleFileInputChange = (e) => {
    let file = e.target.files[0];
    if (file) {
      let filename = file.name;
      filename.includes(".txt") && (filename = filename.replace(".txt", "")), setFileName(filename);
      let reader = new FileReader();
      reader.onload = (event) => {
        setData(event.target.result);
      }, reader.readAsText(file);
    }
  }, handleUpload = () => {
    if ((csvData == null ? void 0 : csvData.length) < 1)
      return null;
    let value = JSON.stringify(csvData);
    try {
      dataUpload.submit(
        {
          name: fileName,
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
      setData(""), setFileName("");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "float-right mb-2 flex gap-3 items-center", children: [
    ((_a = dataUpload.data) == null ? void 0 : _a.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "text-red-600", children: dataUpload.data.error }, void 0, !1, {
      fileName: "app/components/admin/UploadText.tsx",
      lineNumber: 91,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "input",
      {
        type: "file",
        accept: ".txt",
        onChange: handleFileInputChange,
        className: "file-input file-input-bordered w-full max-w-xs"
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/UploadText.tsx",
        lineNumber: 93,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "button",
      {
        onClick: handleUpload,
        className: " bg-green-300 dark:bg-green-600 dark:text-white btn-sm rounded-md min-h-0",
        children: dataUpload.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: "uploading" }, void 0, !1, {
          fileName: "app/components/admin/UploadText.tsx",
          lineNumber: 103,
          columnNumber: 40
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: "upload" }, void 0, !1, {
          fileName: "app/components/admin/UploadText.tsx",
          lineNumber: 103,
          columnNumber: 63
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/UploadText.tsx",
        lineNumber: 99,
        columnNumber: 7
      },
      this
    ),
    " "
  ] }, void 0, !0, {
    fileName: "app/components/admin/UploadText.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}
var UploadText_default = UploadText;

// app/components/admin/AboutText.tsx
var import_ti = require("react-icons/ti"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function AboutText() {
  let { texts, user } = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
    user.role === "ADMIN" && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(UploadText_default, {}, void 0, !1, {
      fileName: "app/components/admin/AboutText.tsx",
      lineNumber: 16,
      columnNumber: 33
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "collapse collapse-plus bg-base-200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "radio", name: "my-accordion-3" }, void 0, !1, {
        fileName: "app/components/admin/AboutText.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "collapse-title text-xl font-medium bg-gray-300 dark:bg-slate-600 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { children: "Category" }, void 0, !1, {
        fileName: "app/components/admin/AboutText.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/admin/AboutText.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "collapse-content", children: texts.map((text) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Text_Category, { text }, text.version, !1, {
        fileName: "app/components/admin/AboutText.tsx",
        lineNumber: 24,
        columnNumber: 20
      }, this)) }, void 0, !1, {
        fileName: "app/components/admin/AboutText.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutText.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "collapse collapse-plus bg-base-200 mt-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "radio", name: "my-accordion-3" }, void 0, !1, {
        fileName: "app/components/admin/AboutText.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "collapse-title text-xl font-medium bg-gray-300 dark:bg-slate-600 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { children: "Downloads" }, void 0, !1, {
        fileName: "app/components/admin/AboutText.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/admin/AboutText.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "collapse-content", children: texts.map((text) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(DownloadText, { text }, text.version, !1, {
        fileName: "app/components/admin/AboutText.tsx",
        lineNumber: 35,
        columnNumber: 20
      }, this)) }, void 0, !1, {
        fileName: "app/components/admin/AboutText.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutText.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/AboutText.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
function Text_Category({ text }) {
  let [hasChanges, setHasChanges] = import_react15.default.useState(!1), [value, setValue] = import_react15.default.useState(null), inputRef = import_react15.default.useRef(null), { user } = (0, import_react14.useLoaderData)(), isAdmin = (user == null ? void 0 : user.role) === "ADMIN", fetcher = (0, import_react14.useFetcher)();
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    "form",
    {
      onSubmit: handleSubmit,
      className: "text-center flex w-full px-2 justify-between mt-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h4", { className: "text-lg font-bold", children: [
          text.version,
          " ",
          user.role === "ADMIN" && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("button", { onClick: handleDelete, type: "button", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_ti.TiDelete, {}, void 0, !1, {
            fileName: "app/components/admin/AboutText.tsx",
            lineNumber: 87,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/admin/AboutText.tsx",
            lineNumber: 86,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/AboutText.tsx",
          lineNumber: 83,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { hidden: !0, name: "_action", readOnly: !0, value: "change_category" }, void 0, !1, {
          fileName: "app/components/admin/AboutText.tsx",
          lineNumber: 92,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
              lineNumber: 94,
              columnNumber: 9
            },
            this
          ),
          hasChanges && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
              lineNumber: 107,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/admin/AboutText.tsx",
          lineNumber: 93,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/admin/AboutText.tsx",
      lineNumber: 79,
      columnNumber: 5
    },
    this
  );
}
function DownloadText({ text }) {
  let fetcher = (0, import_react14.useFetcher)();
  function handleDownload() {
    fetcher.load(`/api/text/${text.version}`);
  }
  return (0, import_react15.useEffect)(() => {
    fetcher.data && downloadJsonlFile(fetcher.data, text.version);
  }, [fetcher.data]), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "text-center flex w-full px-2 justify-between mt-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h4", { className: "text-lg font-bold", children: text.version }, void 0, !1, {
      fileName: "app/components/admin/AboutText.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      "button",
      {
        onClick: handleDownload,
        className: "flex gap-2 items-center cursor-pointer hover:bg-green-300 px-2 rounded",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_bi.BiSolidCloudDownload, {}, void 0, !1, {
            fileName: "app/components/admin/AboutText.tsx",
            lineNumber: 138,
            columnNumber: 11
          }, this),
          "Download"
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/admin/AboutText.tsx",
        lineNumber: 134,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/admin/AboutText.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/AboutText.tsx",
    lineNumber: 131,
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
      version: !0,
      category: !0
      // Include category in the query
    },
    orderBy: {
      updatedAt: "desc"
    }
  }), uniqueVersionCategories = /* @__PURE__ */ new Map();
  for (let record of textRecords)
    uniqueVersionCategories.has(record.version) || uniqueVersionCategories.set(record.version, record.category);
  return Array.from(uniqueVersionCategories, ([version, category]) => ({
    version,
    category
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
      status: !0
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
      modified_on: /* @__PURE__ */ new Date()
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

// app/routes/admin.text.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), loader5 = async ({ request }) => {
  let session = new URL(request.url).searchParams.get("session");
  if (!session)
    return (0, import_node3.redirect)("/error");
  let texts = await getUniqueTextsGroup(), user = await getUser(session, !0), lastbatch = await getLastBatch();
  return (0, import_node3.defer)({
    user,
    texts,
    lastbatch
  });
};
function Admin_Text() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(AboutText_default, {}, void 0, !1, {
    fileName: "app/routes/admin.text.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
var admin_text_default = Admin_Text;

// app/routes/admin.user.tsx
var admin_user_exports = {};
__export(admin_user_exports, {
  action: () => action,
  default: () => admin_user_default,
  loader: () => loader6,
  meta: () => meta
});
var import_node4 = require("@remix-run/node");

// app/components/admin/AboutUser.tsx
var import_react25 = require("@remix-run/react");

// app/components/AllowAnnotation.tsx
var import_react16 = require("@remix-run/react");
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function AllowAnnotation({ annotator }) {
  let fetcher = (0, import_react16.useFetcher)(), socket = useSocket();
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
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
var import_react17 = require("@remix-run/react"), import_react_tailwindcss_select = __toESM(require("react-tailwindcss-select")), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function AssignCategory({ user }) {
  var _a;
  let { categories } = (0, import_react17.useLoaderData)(), fetcher = (0, import_react17.useFetcher)(), id = user.id;
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "w-[50%] flex gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
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
var import_react18 = require("@remix-run/react"), import_react19 = __toESM(require("react")), import_fi = require("react-icons/fi"), import_ti2 = require("react-icons/ti"), import_im = require("react-icons/im"), import_react20 = require("react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function AssignNickName({ user }) {
  var _a;
  let fetcher = (0, import_react18.useFetcher)(), inputRef = import_react19.default.useRef(null), [openEdit, setOpenEdit] = import_react19.default.useState(!1);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: openEdit ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "join ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      "button",
      {
        type: "button",
        className: "btn join-item",
        onClick: handleSubmit,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_ti2.TiTick, { color: "green" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      "button",
      {
        type: "button",
        className: "btn join-item",
        onClick: () => setOpenEdit(!1),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_im.ImCross, { color: "red" }, void 0, !1, {
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
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex gap-3", children: [
    ((_a = fetcher == null ? void 0 : fetcher.formData) == null ? void 0 : _a.get("nickname")) || user.nickname,
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("button", { onClick: () => setOpenEdit(!0), children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_fi.FiEdit2, {}, void 0, !1, {
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
var AssignNickName_default = (0, import_react20.memo)(AssignNickName);

// app/components/AssignReviewer.tsx
var import_react21 = require("@remix-run/react"), import_react_tailwindcss_select2 = __toESM(require("react-tailwindcss-select")), import_ai = require("react-icons/ai"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function AssignReviewer({ user }) {
  var _a, _b;
  let { users } = (0, import_react21.useLoaderData)(), options = users.filter((user2) => user2.role === "REVIEWER").map((c) => ({
    value: c.username,
    label: c.username
  })), fetcher = (0, import_react21.useFetcher)();
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex gap-2 w-[50%]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex items-center cursor-pointer", onClick: handleDelete, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_ai.AiFillDelete, {}, void 0, !1, {
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
var import_react22 = require("react"), import_react_tailwindcss_select3 = __toESM(require("react-tailwindcss-select")), import_react_router_dom = require("react-router-dom"), import_fi2 = require("react-icons/fi"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function AssignRole({
  annotator,
  isAdmin
}) {
  let [editRole, setEditRole] = (0, import_react22.useState)(!1), fetcher = (0, import_react_router_dom.useFetcher)();
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
  return editRole ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex gap-2 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "font-light text-sm", children: annotator == null ? void 0 : annotator.role }, void 0, !1, {
      fileName: "app/components/AssignRole.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    isAdmin && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("button", { onClick: openRoleEdit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_fi2.FiEdit2, {}, void 0, !1, {
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
var import_react24 = require("@remix-run/react");

// app/components/hooks/useModal.tsx
var import_react23 = require("react"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function useModal() {
  let [isOpen, setIsOpen] = (0, import_react23.useState)(!1), openModal = () => {
    setIsOpen(!0);
  };
  return { Toggle_Modal: ({ children, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { onClick: openModal, ...props, children }, void 0, !1, {
    fileName: "app/components/hooks/useModal.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this), Modal: ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    "dialog",
    {
      open: isOpen,
      className: "modal z-20 absolute",
      onClose: () => setIsOpen(!1),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "modal-box w-11/12 max-w-5xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "modal-backdrop backdrop-blur-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { type: "button", onClick: () => setIsOpen(!1), children: "close" }, void 0, !1, {
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

// app/components/AssignedBatchList.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function AssignedBatchList({ user }) {
  var _a;
  let { groups } = (0, import_react24.useLoaderData)(), { Modal, Toggle_Modal } = useModal_default(), userfetcher = (0, import_react24.useFetcher)(), removeBatch = (e) => {
    if (groups[e].rejected)
      return alert(
        "group contain rejected data, contact the annotator to either ignore or accept!"
      ), null;
    confirm("Are you sure you want to remove this group from user?") && userfetcher.submit(
      { batch: e, id: user == null ? void 0 : user.id },
      {
        method: "DELETE"
      }
    );
  }, removing = ((_a = userfetcher.formData) == null ? void 0 : _a.get("id")) === user.id && userfetcher.formMethod === "DELETE", currentBatch = user.assigned_batch.filter(
    (item) => {
      var _a2;
      return !((_a2 = groups[item]) != null && _a2.reviewed);
    }
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mt-2 flex gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Toggle_Modal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "text-black underline dark:text-white", children: "Active Jobs" }, void 0, !1, {
      fileName: "app/components/AssignedBatchList.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/AssignedBatchList.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Modal, { children: currentBatch.map((item) => {
      var _a2, _b, _c;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
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
          lineNumber: 43,
          columnNumber: 13
        },
        this
      );
    }) }, void 0, !1, {
      fileName: "app/components/AssignedBatchList.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AssignedBatchList.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
var AssignedBatchList_default = AssignedBatchList;

// app/components/admin/AboutUser.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function Info({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-col items-start px-2 text-lg mt-2 dark:text-white text-black", children }, void 0, !1, {
    fileName: "app/components/admin/AboutUser.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
function Title({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "text-lg font-bold flex justify-between w-full", children }, void 0, !1, {
    fileName: "app/components/admin/AboutUser.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
var AboutUser = ({
  selectedUser,
  user,
  removeUser: removeUser2
}) => {
  let { users } = (0, import_react25.useLoaderData)(), annotator = users == null ? void 0 : users.find(
    (user2) => (user2 == null ? void 0 : user2.username) === selectedUser
  ), url = `/admin/user/review/${selectedUser}?session=` + (user == null ? void 0 : user.username), isAdmin = (user == null ? void 0 : user.role) === "ADMIN";
  return selectedUser === "" || !annotator ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "sticky top-[80px]  rounded-sm border border-stroke bg-white dark:bg-slate-600  px-5 pt-6 pb-10 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-10 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-col md:flex-row justify-between px-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h4", { className: "mb-6 text-xl font-semibold text-black dark:text-white", children: annotator == null ? void 0 : annotator.username }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(AllowAnnotation_default, { annotator }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Info, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Title, { children: "Name:" }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(AssignNickName_default, { user: annotator }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Info, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Title, { children: "Role" }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(AssignRole_default, { annotator, isAdmin }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Info, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Title, { children: "Email:" }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: annotator == null ? void 0 : annotator.username }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Info, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Title, { children: "Reviewer:" }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(AssignReviewer_default, { user: annotator }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Info, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Title, { children: "Category:" }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(AssignCategory_default, { user: annotator }, void 0, !1, {
        fileName: "app/components/admin/AboutUser.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Info, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(AssignedBatchList_default, { user: annotator }, void 0, !1, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    isAdmin && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Info, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
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
        lineNumber: 78,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/admin/AboutUser.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      import_react25.Link,
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
        lineNumber: 86,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/admin/AboutUser.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}, AboutUser_default = AboutUser;

// app/components/admin/UserListCard.tsx
var import_react27 = require("@remix-run/react"), import_react28 = require("react");

// app/components/hooks/useOnlineList.tsx
var import_react26 = require("react");
function useOnlineList() {
  let [online, setOnline] = (0, import_react26.useState)([]), socket = useSocket();
  return (0, import_react26.useEffect)(() => {
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
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), UserListCard = ({
  setSelectedUser,
  selectedUser,
  user
}) => {
  let onlineUsers = useOnlineList(), { users } = (0, import_react27.useLoaderData)(), reviewers = users.filter((user2) => user2.role === "REVIEWER"), isAdmin = user.role === "ADMIN", [selectedReviewer, setSelectedReviewer] = (0, import_react28.useState)("All"), [search, setSearch] = (0, import_react28.useState)("");
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
  )), /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "col-span-12 rounded-sm border border-stroke bg-white dark:bg-slate-600 py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex justify-between px-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h4", { className: "mb-6 text-xl font-semibold text-black dark:text-white", children: "Annotators" }, void 0, !1, {
        fileName: "app/components/admin/UserListCard.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "text-gray-400", children: [
        "online :",
        onlineUsers.length
      ] }, void 0, !0, {
        fileName: "app/components/admin/UserListCard.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/UserListCard.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex gap-2  items-center flex-1 mb-2 mx-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
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
        lineNumber: 47,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/admin/UserListCard.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    isAdmin && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex gap-2  items-center mb-2 mx-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      "select",
      {
        id: "reviewer-select",
        className: "select select-sm select-bordered w-full max-w-xs",
        onChange: handleReviewerChange,
        value: selectedReviewer,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("option", { value: "All", children: "All" }, void 0, !1, {
            fileName: "app/components/admin/UserListCard.tsx",
            lineNumber: 62,
            columnNumber: 13
          }, this),
          reviewers.map((reviewer) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            "option",
            {
              value: reviewer.username,
              children: reviewer.username
            },
            reviewer.id + "-key-selection",
            !1,
            {
              fileName: "app/components/admin/UserListCard.tsx",
              lineNumber: 64,
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
        lineNumber: 56,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/admin/UserListCard.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: list.map((user2) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
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
        lineNumber: 76,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/admin/UserListCard.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/UserListCard.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
};
function EachUser({ user, setSelectedUser, selectedUser }) {
  let { groups } = (0, import_react27.useLoaderData)(), onlineUsers = useOnlineList(), handleSelection = (value) => {
    setSelectedUser(value);
  }, currentBatch = user.assigned_batch.filter(
    (item) => {
      var _a, _b;
      return !((_a = groups[item]) != null && _a.reviewed) && ((_b = groups[item]) == null ? void 0 : _b.approved);
    }
  ), Time = user == null ? void 0 : user.text.find((item) => item.modified_on !== null), time_ago = timeAgo(Time == null ? void 0 : Time.modified_on);
  return user ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
    "div",
    {
      onClick: () => handleSelection(user.username),
      className: ` cursor-pointer flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4 hover:rounded-sm transition duration-300 ease-in-out hover:bg-green-300 ${selectedUser === user.username && "bg-green-300"}`,
      children: [
        user.picture ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "avatar ml-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-[40px] rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("img", { src: user.picture, alt: "" }, void 0, !1, {
          fileName: "app/components/admin/UserListCard.tsx",
          lineNumber: 112,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/UserListCard.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/UserListCard.tsx",
          lineNumber: 110,
          columnNumber: 9
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "avatar placeholder ml-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "bg-neutral-focus text-neutral-content rounded-full w-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { children: user.username.charAt(0) }, void 0, !1, {
          fileName: "app/components/admin/UserListCard.tsx",
          lineNumber: 118,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/UserListCard.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/UserListCard.tsx",
          lineNumber: 116,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex flex-1 items-center justify-between px-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "font-medium text-black dark:text-white flex justify-between items-center w-full", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: [
                (onlineUsers == null ? void 0 : onlineUsers.includes(user == null ? void 0 : user.username)) && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "text-xs mr-2", title: "online", children: "\u{1F7E2}" }, void 0, !1, {
                  fileName: "app/components/admin/UserListCard.tsx",
                  lineNumber: 127,
                  columnNumber: 17
                }, this),
                user.nickname
              ] }, void 0, !0, {
                fileName: "app/components/admin/UserListCard.tsx",
                lineNumber: 125,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "text-xs ", children: time_ago }, void 0, !1, {
                fileName: "app/components/admin/UserListCard.tsx",
                lineNumber: 133,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/admin/UserListCard.tsx",
              lineNumber: 124,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { className: "flex justify-between items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "text-sm text-black dark:text-white", children: user.username }, void 0, !1, {
              fileName: "app/components/admin/UserListCard.tsx",
              lineNumber: 136,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/components/admin/UserListCard.tsx",
              lineNumber: 135,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/UserListCard.tsx",
            lineNumber: 123,
            columnNumber: 9
          }, this),
          currentBatch.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex h-6 w-6 items-center justify-center rounded-full bg-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "text-xs text-white", children: currentBatch.length }, void 0, !1, {
            fileName: "app/components/admin/UserListCard.tsx",
            lineNumber: 144,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/admin/UserListCard.tsx",
            lineNumber: 143,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/UserListCard.tsx",
          lineNumber: 122,
          columnNumber: 7
        }, this)
      ]
    },
    user.id + "-userList",
    !0,
    {
      fileName: "app/components/admin/UserListCard.tsx",
      lineNumber: 102,
      columnNumber: 5
    },
    this
  ) : null;
}
var UserListCard_default = UserListCard;

// app/routes/admin.user.tsx
var import_react29 = require("react");

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
var import_react30 = require("@remix-run/react");
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), loader6 = async ({ request }) => {
  let session = new URL(request.url).searchParams.get("session");
  if (!session)
    return (0, import_node4.redirect)("/error");
  let admin = await getUser(session, !0), users = await getUsers(), groups = await getAprovedBatch(), categories = await getCategories();
  return users = users.sort(
    (a, b) => b.assigned_batch.length - a.assigned_batch.length
  ), (admin == null ? void 0 : admin.role) !== "ADMIN" && (users = users.filter(
    (user) => user.reviewer_id === null || user.reviewer_id === (admin == null ? void 0 : admin.id)
  ).sort((a, b) => a.reviewer_id === null && b.reviewer_id !== null ? 1 : a.reviewer_id !== null && b.reviewer_id === null ? -1 : 0)), (0, import_node4.json)({
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
  let [selectedUser, setSelectedUser] = (0, import_react29.useState)(""), socket = useSocket(), reval = (0, import_react30.useRevalidator)(), user = (0, import_react30.useOutletContext)();
  (0, import_react29.useEffect)(() => {
    socket && socket.on("text-status-changed", (data) => {
      data && reval.revalidate();
    });
  }, [socket]);
  let fetcher = (0, import_react30.useFetcher)();
  function removeUser2() {
    window.confirm("Are you sure you want to remove this user ?") && fetcher.submit(
      {
        username: selectedUser,
        action: "remove_user"
      },
      {
        method: "DELETE",
        action: "/api/user"
      }
    ), setSelectedUser("");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "col-span-12 xl:col-span-8 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      AboutUser_default,
      {
        selectedUser,
        user,
        removeUser: removeUser2
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin.user.tsx",
        lineNumber: 104,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/admin.user.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
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
        lineNumber: 110,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/admin.user.tsx",
    lineNumber: 102,
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
async function uploadData({ name, data }) {
  try {
    if (await db.text.findFirst({
      where: {
        version: name
      }
    }))
      return console.log(...oo_oo("3875416888_0", "Record already exists")), { error: "Record already exists" };
    let UploadData = data == null ? void 0 : data.map((item) => ({
      version: name,
      original_text: item.original_text,
      batch: item.batch
    })), uploaded = await db.text.createMany({
      data: UploadData
    });
    return console.log(...oo_oo("3875416888_1", "uploaded data: ")), uploaded;
  } catch (e) {
    throw new Error("upload failed" + e);
  }
}
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x2be6(_0x45b4b5,_0x1abd1c){var _0x5ce3f4=_0x5ce3();return _0x2be6=function(_0x2be64f,_0x24075c){_0x2be64f=_0x2be64f-0x191;var _0x386770=_0x5ce3f4[_0x2be64f];return _0x386770;},_0x2be6(_0x45b4b5,_0x1abd1c);}var _0xd7bbed=_0x2be6;(function(_0x34e0a1,_0x21ed9f){var _0x355b47=_0x2be6,_0x18de2b=_0x34e0a1();while(!![]){try{var _0x41df9d=-parseInt(_0x355b47(0x248))/0x1+parseInt(_0x355b47(0x1e9))/0x2+-parseInt(_0x355b47(0x1e0))/0x3+parseInt(_0x355b47(0x1cf))/0x4*(parseInt(_0x355b47(0x1d8))/0x5)+-parseInt(_0x355b47(0x238))/0x6*(parseInt(_0x355b47(0x25a))/0x7)+parseInt(_0x355b47(0x1b1))/0x8+parseInt(_0x355b47(0x20e))/0x9;if(_0x41df9d===_0x21ed9f)break;else _0x18de2b['push'](_0x18de2b['shift']());}catch(_0x1bd688){_0x18de2b['push'](_0x18de2b['shift']());}}}(_0x5ce3,0xaf547));var j=Object[_0xd7bbed(0x259)],X=Object[_0xd7bbed(0x1e5)],G=Object[_0xd7bbed(0x26d)],ee=Object[_0xd7bbed(0x215)],te=Object[_0xd7bbed(0x1fd)],ne=Object['prototype'][_0xd7bbed(0x1c6)],re=(_0xc7e537,_0x1b8676,_0x5e77d4,_0x5d7aec)=>{var _0x208618=_0xd7bbed;if(_0x1b8676&&typeof _0x1b8676==_0x208618(0x1f3)||typeof _0x1b8676=='function'){for(let _0xa99c3b of ee(_0x1b8676))!ne[_0x208618(0x240)](_0xc7e537,_0xa99c3b)&&_0xa99c3b!==_0x5e77d4&&X(_0xc7e537,_0xa99c3b,{'get':()=>_0x1b8676[_0xa99c3b],'enumerable':!(_0x5d7aec=G(_0x1b8676,_0xa99c3b))||_0x5d7aec[_0x208618(0x1f9)]});}return _0xc7e537;},K=(_0x56e71d,_0x194872,_0x2c9993)=>(_0x2c9993=_0x56e71d!=null?j(te(_0x56e71d)):{},re(_0x194872||!_0x56e71d||!_0x56e71d[_0xd7bbed(0x1ea)]?X(_0x2c9993,_0xd7bbed(0x210),{'value':_0x56e71d,'enumerable':!0x0}):_0x2c9993,_0x56e71d)),q=class{constructor(_0x583369,_0x933a97,_0x6d1f17,_0x327097,_0x49458a){var _0x174d98=_0xd7bbed;this['global']=_0x583369,this[_0x174d98(0x1e6)]=_0x933a97,this[_0x174d98(0x20b)]=_0x6d1f17,this[_0x174d98(0x1b0)]=_0x327097,this[_0x174d98(0x1a8)]=_0x49458a,this[_0x174d98(0x1ed)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x174d98(0x197)]=!0x1,this[_0x174d98(0x25f)]=!0x1,this[_0x174d98(0x1ba)]=!this[_0x174d98(0x264)]['process']?.[_0x174d98(0x1dc)]?.[_0x174d98(0x21c)],this[_0x174d98(0x224)]=null,this[_0x174d98(0x1ef)]=0x0,this[_0x174d98(0x26c)]=0x14,this[_0x174d98(0x272)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x174d98(0x1ba)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x174d98(0x1bd))+this[_0x174d98(0x272)];}async[_0xd7bbed(0x1a5)](){var _0x7de100=_0xd7bbed;if(this[_0x7de100(0x224)])return this[_0x7de100(0x224)];let _0x55ccce;if(this[_0x7de100(0x1ba)])_0x55ccce=this[_0x7de100(0x264)][_0x7de100(0x234)];else{if(this[_0x7de100(0x264)]['process']?.[_0x7de100(0x236)])_0x55ccce=this[_0x7de100(0x264)][_0x7de100(0x1de)]?.['_WebSocket'];else try{let _0x2b4a09=await import(_0x7de100(0x1d3));_0x55ccce=(await import((await import(_0x7de100(0x19a)))[_0x7de100(0x23e)](_0x2b4a09['join'](this['nodeModules'],_0x7de100(0x226)))['toString']()))['default'];}catch{try{_0x55ccce=require(require('path')[_0x7de100(0x1ee)](this[_0x7de100(0x1b0)],'ws'));}catch{throw new Error(_0x7de100(0x278));}}}return this[_0x7de100(0x224)]=_0x55ccce,_0x55ccce;}[_0xd7bbed(0x256)](){var _0x3a0fc6=_0xd7bbed;this[_0x3a0fc6(0x25f)]||this[_0x3a0fc6(0x197)]||this['_connectAttemptCount']>=this[_0x3a0fc6(0x26c)]||(this[_0x3a0fc6(0x27a)]=!0x1,this['_connecting']=!0x0,this[_0x3a0fc6(0x1ef)]++,this[_0x3a0fc6(0x1bb)]=new Promise((_0xaaf5fc,_0x12d1c6)=>{var _0x36ce9a=_0x3a0fc6;this[_0x36ce9a(0x1a5)]()[_0x36ce9a(0x231)](_0x682f22=>{var _0x42f8a9=_0x36ce9a;let _0x4b1d82=new _0x682f22('ws://'+(!this[_0x42f8a9(0x1ba)]&&this[_0x42f8a9(0x1a8)]?'gateway.docker.internal':this[_0x42f8a9(0x1e6)])+':'+this['port']);_0x4b1d82[_0x42f8a9(0x21d)]=()=>{var _0x50286d=_0x42f8a9;this[_0x50286d(0x1ed)]=!0x1,this[_0x50286d(0x1ca)](_0x4b1d82),this[_0x50286d(0x277)](),_0x12d1c6(new Error(_0x50286d(0x1bf)));},_0x4b1d82[_0x42f8a9(0x1a3)]=()=>{var _0x189b09=_0x42f8a9;this[_0x189b09(0x1ba)]||_0x4b1d82[_0x189b09(0x250)]&&_0x4b1d82[_0x189b09(0x250)]['unref']&&_0x4b1d82['_socket'][_0x189b09(0x23a)](),_0xaaf5fc(_0x4b1d82);},_0x4b1d82[_0x42f8a9(0x1f0)]=()=>{var _0x23adfe=_0x42f8a9;this[_0x23adfe(0x27a)]=!0x0,this[_0x23adfe(0x1ca)](_0x4b1d82),this[_0x23adfe(0x277)]();},_0x4b1d82[_0x42f8a9(0x22b)]=_0x3e4e27=>{var _0x5a7cd3=_0x42f8a9;try{_0x3e4e27&&_0x3e4e27['data']&&this['_inBrowser']&&JSON[_0x5a7cd3(0x220)](_0x3e4e27[_0x5a7cd3(0x268)])['method']===_0x5a7cd3(0x21a)&&this[_0x5a7cd3(0x264)][_0x5a7cd3(0x1df)][_0x5a7cd3(0x21a)]();}catch{}};})['then'](_0x3c11fd=>(this[_0x36ce9a(0x197)]=!0x0,this[_0x36ce9a(0x25f)]=!0x1,this[_0x36ce9a(0x27a)]=!0x1,this['_allowedToSend']=!0x0,this['_connectAttemptCount']=0x0,_0x3c11fd))[_0x36ce9a(0x25d)](_0x391557=>(this[_0x36ce9a(0x197)]=!0x1,this[_0x36ce9a(0x25f)]=!0x1,console['warn'](_0x36ce9a(0x1e4)+this[_0x36ce9a(0x272)]),_0x12d1c6(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x391557&&_0x391557['message'])))));}));}[_0xd7bbed(0x1ca)](_0x570b27){var _0x12e149=_0xd7bbed;this[_0x12e149(0x197)]=!0x1,this['_connecting']=!0x1;try{_0x570b27[_0x12e149(0x1f0)]=null,_0x570b27[_0x12e149(0x21d)]=null,_0x570b27[_0x12e149(0x1a3)]=null;}catch{}try{_0x570b27[_0x12e149(0x1c3)]<0x2&&_0x570b27[_0x12e149(0x221)]();}catch{}}['_attemptToReconnectShortly'](){var _0x4b00b9=_0xd7bbed;clearTimeout(this[_0x4b00b9(0x208)]),!(this[_0x4b00b9(0x1ef)]>=this['_maxConnectAttemptCount'])&&(this[_0x4b00b9(0x208)]=setTimeout(()=>{var _0x2c2bad=_0x4b00b9;this[_0x2c2bad(0x197)]||this[_0x2c2bad(0x25f)]||(this[_0x2c2bad(0x256)](),this[_0x2c2bad(0x1bb)]?.[_0x2c2bad(0x25d)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x4b00b9(0x208)][_0x4b00b9(0x23a)]&&this[_0x4b00b9(0x208)][_0x4b00b9(0x23a)]());}async[_0xd7bbed(0x235)](_0x4f7bd9){var _0x50811e=_0xd7bbed;try{if(!this[_0x50811e(0x1ed)])return;this['_allowedToConnectOnSend']&&this[_0x50811e(0x256)](),(await this[_0x50811e(0x1bb)])[_0x50811e(0x235)](JSON[_0x50811e(0x1d9)](_0x4f7bd9));}catch(_0x34d823){console[_0x50811e(0x24c)](this[_0x50811e(0x266)]+':\\x20'+(_0x34d823&&_0x34d823['message'])),this[_0x50811e(0x1ed)]=!0x1,this[_0x50811e(0x277)]();}}};function J(_0x4e9d93,_0x554a21,_0x1b6ae3,_0x546958,_0x2a0f4b,_0xb76381){var _0x48020b=_0xd7bbed;let _0xa0c98a=_0x1b6ae3[_0x48020b(0x253)](',')[_0x48020b(0x1ab)](_0x35e29d=>{var _0x2bc445=_0x48020b;try{_0x4e9d93[_0x2bc445(0x217)]||((_0x2a0f4b===_0x2bc445(0x192)||_0x2a0f4b===_0x2bc445(0x22a)||_0x2a0f4b===_0x2bc445(0x24e))&&(_0x2a0f4b+=_0x4e9d93['process']?.[_0x2bc445(0x1dc)]?.['node']?_0x2bc445(0x1f8):'\\x20browser'),_0x4e9d93[_0x2bc445(0x217)]={'id':+new Date(),'tool':_0x2a0f4b});let _0x70f09c=new q(_0x4e9d93,_0x554a21,_0x35e29d,_0x546958,_0xb76381);return _0x70f09c[_0x2bc445(0x235)]['bind'](_0x70f09c);}catch(_0x278dd7){return console[_0x2bc445(0x24c)](_0x2bc445(0x23b),_0x278dd7&&_0x278dd7['message']),()=>{};}});return _0x240a61=>_0xa0c98a['forEach'](_0x4f46ab=>_0x4f46ab(_0x240a61));}function _0x5ce3(){var _0x49a14b=['onmessage','1.0.0','string','_isPrimitiveWrapperType','_dateToString','remix','then','RegExp','_setNodeId','WebSocket','send','_WebSocket','_processTreeNodeResult','8328fWMXWD','_quotedRegExp','unref','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','_Symbol','autoExpand','pathToFileURL','String','call','1695892548998','number','_hasSetOnItsPath','index','_setNodeQueryPath','_isPrimitiveType','name','649651orBZXa','_addLoadNode','NEGATIVE_INFINITY','nan','warn','_sortProps','astro','positiveInfinity','_socket','type','symbol','split','_setNodeExpandableState','_getOwnPropertyDescriptor','_connectToHostNow','_isMap','strLength','create','4529FlEPdj','timeStamp','toString','catch','Symbol','_connecting','Buffer','autoExpandLimit','date','','global','_HTMLAllCollection','_sendErrorMessage','timeEnd','data','_setNodePermissions','_cleanNode','length','_maxConnectAttemptCount','getOwnPropertyDescriptor','_consoleNinjaAllowedToStart','nuxt','undefined','_hasSymbolPropertyOnItsPath','_webSocketErrorDocsLink','negativeInfinity','isExpressionToEvaluate','_undefined','stackTraceLimit','_attemptToReconnectShortly','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','allStrLength','_allowedToConnectOnSend','bigint','elapsed','next.js','prototype','_treeNodePropertiesBeforeFullValue','unknown','cappedElements','_connected','Map','[object\\x20Array]','url','expId','[object\\x20Map]','disabledTrace','_objectToString','parent','depth','pop','_capIfString','onopen','concat','getWebSocketClass','message','_setNodeExpressionPath','dockerizedApp','...','hostname','map','level','_p_','_additionalMetadata','_p_length','nodeModules','9489600CEAQMz','function','replace','noFunctions','error','_regExpToString','time','_propertyName','_isUndefined','_inBrowser','_ws','sort','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','getter','logger\\x20websocket\\x20error','stack','disabledLog','_treeNodePropertiesAfterFullValue','readyState','hrtime','_isArray','hasOwnProperty',["localhost","127.0.0.1","example.cypress.io","kunsang","172.18.64.1","192.168.1.10"],'autoExpandPropertyCount','trace','_disposeWebsocket','slice','now','elements','constructor','1596tOlvxD','_setNodeLabel','_addFunctionsNode','push','path','[object\\x20BigInt]','get','_blacklistedProperty',':logPointId:','13280zNghud','stringify','root_exp_id','forEach','versions','_isNegativeZero','process','location','3466956qngpoR','_getOwnPropertyNames','totalStrLength','value','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','defineProperty','host','indexOf','_addProperty','1223420qZbTDv','__es'+'Module','_getOwnPropertySymbols','_addObjectProperty','_allowedToSend','join','_connectAttemptCount','onclose','performance','_numberRegExp','object','current','null','sortProps','match','\\x20server','enumerable','funcName','_property','_keyStrRegExp','getPrototypeOf','log','isArray','Error','_isSet','Set','boolean','count','_hasMapOnItsPath','HTMLAllCollection','Number','_reconnectTimeout','getOwnPropertySymbols','valueOf','port','autoExpandMaxDepth','hits','5074524EToXKP','_console_ninja','default','cappedProps','console','capped','toLowerCase','getOwnPropertyNames','','_console_ninja_session','serialize','reduceLimits','reload','_type','node','onerror','test','props','parse','close','array','autoExpandPreviousObjects','_WebSocketClass','[object\\x20Set]','ws/index.js','51528','expressionsToEvaluate','setter','remix'];_0x5ce3=function(){return _0x49a14b;};return _0x5ce3();}function W(_0xb663a7){var _0x23a34c=_0xd7bbed;let _0x50e06c=function(_0x441781,_0x1dd6da){return _0x1dd6da-_0x441781;},_0x3e9804;if(_0xb663a7[_0x23a34c(0x1f1)])_0x3e9804=function(){var _0x48da61=_0x23a34c;return _0xb663a7[_0x48da61(0x1f1)][_0x48da61(0x1cc)]();};else{if(_0xb663a7[_0x23a34c(0x1de)]&&_0xb663a7[_0x23a34c(0x1de)][_0x23a34c(0x1c4)])_0x3e9804=function(){var _0x3539f3=_0x23a34c;return _0xb663a7[_0x3539f3(0x1de)][_0x3539f3(0x1c4)]();},_0x50e06c=function(_0x119147,_0x2d9af9){return 0x3e8*(_0x2d9af9[0x0]-_0x119147[0x0])+(_0x2d9af9[0x1]-_0x119147[0x1])/0xf4240;};else try{let {performance:_0x5d6fda}=require('perf_hooks');_0x3e9804=function(){return _0x5d6fda['now']();};}catch{_0x3e9804=function(){return+new Date();};}}return{'elapsed':_0x50e06c,'timeStamp':_0x3e9804,'now':()=>Date['now']()};}function Y(_0x5df65d,_0x5940cb,_0xdfc810){var _0x5358a1=_0xd7bbed;if(_0x5df65d[_0x5358a1(0x26e)]!==void 0x0)return _0x5df65d[_0x5358a1(0x26e)];let _0x764729=_0x5df65d['process']?.[_0x5358a1(0x1dc)]?.[_0x5358a1(0x21c)];return _0x764729&&_0xdfc810===_0x5358a1(0x26f)?_0x5df65d[_0x5358a1(0x26e)]=!0x1:_0x5df65d[_0x5358a1(0x26e)]=_0x764729||!_0x5940cb||_0x5df65d[_0x5358a1(0x1df)]?.[_0x5358a1(0x1aa)]&&_0x5940cb['includes'](_0x5df65d[_0x5358a1(0x1df)][_0x5358a1(0x1aa)]),_0x5df65d[_0x5358a1(0x26e)];}function Q(_0x1816bf,_0x225e5f,_0x4f5b38,_0x38870e){var _0x298e48=_0xd7bbed;_0x1816bf=_0x1816bf,_0x225e5f=_0x225e5f,_0x4f5b38=_0x4f5b38,_0x38870e=_0x38870e;let _0x20c471=W(_0x1816bf),_0x472a08=_0x20c471['elapsed'],_0x1ae37a=_0x20c471[_0x298e48(0x25b)];class _0x937f4a{constructor(){var _0x5677b7=_0x298e48;this[_0x5677b7(0x1fc)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x5677b7(0x1f2)]=/^(0|[1-9][0-9]*)$/,this[_0x5677b7(0x239)]=/'([^\\\\']|\\\\')*'/,this[_0x5677b7(0x275)]=_0x1816bf[_0x5677b7(0x270)],this[_0x5677b7(0x265)]=_0x1816bf['HTMLAllCollection'],this[_0x5677b7(0x255)]=Object['getOwnPropertyDescriptor'],this[_0x5677b7(0x1e1)]=Object[_0x5677b7(0x215)],this['_Symbol']=_0x1816bf[_0x5677b7(0x25e)],this[_0x5677b7(0x1b6)]=RegExp['prototype'][_0x5677b7(0x25c)],this[_0x5677b7(0x22f)]=Date[_0x5677b7(0x193)]['toString'];}[_0x298e48(0x218)](_0x4b18ec,_0x2abf46,_0x35b43d,_0x275edb){var _0x5d3ecf=_0x298e48,_0x338408=this,_0x18103b=_0x35b43d[_0x5d3ecf(0x23d)];function _0x514d07(_0x2e41b5,_0x4ad158,_0x41a4d2){var _0x571e58=_0x5d3ecf;_0x4ad158['type']=_0x571e58(0x195),_0x4ad158[_0x571e58(0x1b5)]=_0x2e41b5['message'],_0x36b5d8=_0x41a4d2[_0x571e58(0x21c)][_0x571e58(0x1f4)],_0x41a4d2[_0x571e58(0x21c)][_0x571e58(0x1f4)]=_0x4ad158,_0x338408[_0x571e58(0x194)](_0x4ad158,_0x41a4d2);}try{_0x35b43d[_0x5d3ecf(0x1ac)]++,_0x35b43d[_0x5d3ecf(0x23d)]&&_0x35b43d[_0x5d3ecf(0x223)][_0x5d3ecf(0x1d2)](_0x2abf46);var _0x59f8e3,_0x3525de,_0x1e9023,_0x505937,_0x56b619=[],_0xde7ef9=[],_0x39ebc6,_0x442e95=this['_type'](_0x2abf46),_0x1ad0d9=_0x442e95===_0x5d3ecf(0x222),_0x1d6388=!0x1,_0x59ca99=_0x442e95==='function',_0x4db55c=this['_isPrimitiveType'](_0x442e95),_0x3e0d59=this[_0x5d3ecf(0x22e)](_0x442e95),_0x52bca5=_0x4db55c||_0x3e0d59,_0x10d44b={},_0x496c07=0x0,_0xd857f4=!0x1,_0x36b5d8,_0x37d617=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x35b43d[_0x5d3ecf(0x1a0)]){if(_0x1ad0d9){if(_0x3525de=_0x2abf46[_0x5d3ecf(0x26b)],_0x3525de>_0x35b43d[_0x5d3ecf(0x1cd)]){for(_0x1e9023=0x0,_0x505937=_0x35b43d['elements'],_0x59f8e3=_0x1e9023;_0x59f8e3<_0x505937;_0x59f8e3++)_0xde7ef9[_0x5d3ecf(0x1d2)](_0x338408['_addProperty'](_0x56b619,_0x2abf46,_0x442e95,_0x59f8e3,_0x35b43d));_0x4b18ec[_0x5d3ecf(0x196)]=!0x0;}else{for(_0x1e9023=0x0,_0x505937=_0x3525de,_0x59f8e3=_0x1e9023;_0x59f8e3<_0x505937;_0x59f8e3++)_0xde7ef9[_0x5d3ecf(0x1d2)](_0x338408[_0x5d3ecf(0x1e8)](_0x56b619,_0x2abf46,_0x442e95,_0x59f8e3,_0x35b43d));}_0x35b43d[_0x5d3ecf(0x1c8)]+=_0xde7ef9[_0x5d3ecf(0x26b)];}if(!(_0x442e95===_0x5d3ecf(0x1f5)||_0x442e95===_0x5d3ecf(0x270))&&!_0x4db55c&&_0x442e95!==_0x5d3ecf(0x23f)&&_0x442e95!==_0x5d3ecf(0x260)&&_0x442e95!==_0x5d3ecf(0x27b)){var _0x3d119b=_0x275edb[_0x5d3ecf(0x21f)]||_0x35b43d['props'];if(this[_0x5d3ecf(0x201)](_0x2abf46)?(_0x59f8e3=0x0,_0x2abf46[_0x5d3ecf(0x1db)](function(_0x16b20e){var _0x5626ac=_0x5d3ecf;if(_0x496c07++,_0x35b43d[_0x5626ac(0x1c8)]++,_0x496c07>_0x3d119b){_0xd857f4=!0x0;return;}if(!_0x35b43d[_0x5626ac(0x274)]&&_0x35b43d['autoExpand']&&_0x35b43d[_0x5626ac(0x1c8)]>_0x35b43d[_0x5626ac(0x261)]){_0xd857f4=!0x0;return;}_0xde7ef9[_0x5626ac(0x1d2)](_0x338408['_addProperty'](_0x56b619,_0x2abf46,_0x5626ac(0x202),_0x59f8e3++,_0x35b43d,function(_0x47f2aa){return function(){return _0x47f2aa;};}(_0x16b20e)));})):this[_0x5d3ecf(0x257)](_0x2abf46)&&_0x2abf46[_0x5d3ecf(0x1db)](function(_0x549436,_0x549073){var _0x22b0aa=_0x5d3ecf;if(_0x496c07++,_0x35b43d[_0x22b0aa(0x1c8)]++,_0x496c07>_0x3d119b){_0xd857f4=!0x0;return;}if(!_0x35b43d['isExpressionToEvaluate']&&_0x35b43d[_0x22b0aa(0x23d)]&&_0x35b43d[_0x22b0aa(0x1c8)]>_0x35b43d[_0x22b0aa(0x261)]){_0xd857f4=!0x0;return;}var _0x12bda6=_0x549073['toString']();_0x12bda6[_0x22b0aa(0x26b)]>0x64&&(_0x12bda6=_0x12bda6[_0x22b0aa(0x1cb)](0x0,0x64)+_0x22b0aa(0x1a9)),_0xde7ef9['push'](_0x338408['_addProperty'](_0x56b619,_0x2abf46,'Map',_0x12bda6,_0x35b43d,function(_0x578cfe){return function(){return _0x578cfe;};}(_0x549436)));}),!_0x1d6388){try{for(_0x39ebc6 in _0x2abf46)if(!(_0x1ad0d9&&_0x37d617['test'](_0x39ebc6))&&!this[_0x5d3ecf(0x1d6)](_0x2abf46,_0x39ebc6,_0x35b43d)){if(_0x496c07++,_0x35b43d[_0x5d3ecf(0x1c8)]++,_0x496c07>_0x3d119b){_0xd857f4=!0x0;break;}if(!_0x35b43d[_0x5d3ecf(0x274)]&&_0x35b43d[_0x5d3ecf(0x23d)]&&_0x35b43d['autoExpandPropertyCount']>_0x35b43d['autoExpandLimit']){_0xd857f4=!0x0;break;}_0xde7ef9[_0x5d3ecf(0x1d2)](_0x338408['_addObjectProperty'](_0x56b619,_0x10d44b,_0x2abf46,_0x442e95,_0x39ebc6,_0x35b43d));}}catch{}if(_0x10d44b[_0x5d3ecf(0x1af)]=!0x0,_0x59ca99&&(_0x10d44b['_p_name']=!0x0),!_0xd857f4){var _0x25c838=[]['concat'](this[_0x5d3ecf(0x1e1)](_0x2abf46))[_0x5d3ecf(0x1a4)](this[_0x5d3ecf(0x1eb)](_0x2abf46));for(_0x59f8e3=0x0,_0x3525de=_0x25c838[_0x5d3ecf(0x26b)];_0x59f8e3<_0x3525de;_0x59f8e3++)if(_0x39ebc6=_0x25c838[_0x59f8e3],!(_0x1ad0d9&&_0x37d617[_0x5d3ecf(0x21e)](_0x39ebc6[_0x5d3ecf(0x25c)]()))&&!this[_0x5d3ecf(0x1d6)](_0x2abf46,_0x39ebc6,_0x35b43d)&&!_0x10d44b['_p_'+_0x39ebc6[_0x5d3ecf(0x25c)]()]){if(_0x496c07++,_0x35b43d[_0x5d3ecf(0x1c8)]++,_0x496c07>_0x3d119b){_0xd857f4=!0x0;break;}if(!_0x35b43d[_0x5d3ecf(0x274)]&&_0x35b43d['autoExpand']&&_0x35b43d[_0x5d3ecf(0x1c8)]>_0x35b43d[_0x5d3ecf(0x261)]){_0xd857f4=!0x0;break;}_0xde7ef9[_0x5d3ecf(0x1d2)](_0x338408['_addObjectProperty'](_0x56b619,_0x10d44b,_0x2abf46,_0x442e95,_0x39ebc6,_0x35b43d));}}}}}if(_0x4b18ec['type']=_0x442e95,_0x52bca5?(_0x4b18ec[_0x5d3ecf(0x1e3)]=_0x2abf46[_0x5d3ecf(0x20a)](),this[_0x5d3ecf(0x1a2)](_0x442e95,_0x4b18ec,_0x35b43d,_0x275edb)):_0x442e95===_0x5d3ecf(0x262)?_0x4b18ec[_0x5d3ecf(0x1e3)]=this['_dateToString'][_0x5d3ecf(0x240)](_0x2abf46):_0x442e95===_0x5d3ecf(0x27b)?_0x4b18ec[_0x5d3ecf(0x1e3)]=_0x2abf46[_0x5d3ecf(0x25c)]():_0x442e95===_0x5d3ecf(0x232)?_0x4b18ec[_0x5d3ecf(0x1e3)]=this['_regExpToString'][_0x5d3ecf(0x240)](_0x2abf46):_0x442e95===_0x5d3ecf(0x252)&&this[_0x5d3ecf(0x23c)]?_0x4b18ec[_0x5d3ecf(0x1e3)]=this[_0x5d3ecf(0x23c)][_0x5d3ecf(0x193)]['toString'][_0x5d3ecf(0x240)](_0x2abf46):!_0x35b43d[_0x5d3ecf(0x1a0)]&&!(_0x442e95===_0x5d3ecf(0x1f5)||_0x442e95===_0x5d3ecf(0x270))&&(delete _0x4b18ec[_0x5d3ecf(0x1e3)],_0x4b18ec[_0x5d3ecf(0x213)]=!0x0),_0xd857f4&&(_0x4b18ec[_0x5d3ecf(0x211)]=!0x0),_0x36b5d8=_0x35b43d['node'][_0x5d3ecf(0x1f4)],_0x35b43d[_0x5d3ecf(0x21c)][_0x5d3ecf(0x1f4)]=_0x4b18ec,this[_0x5d3ecf(0x194)](_0x4b18ec,_0x35b43d),_0xde7ef9['length']){for(_0x59f8e3=0x0,_0x3525de=_0xde7ef9[_0x5d3ecf(0x26b)];_0x59f8e3<_0x3525de;_0x59f8e3++)_0xde7ef9[_0x59f8e3](_0x59f8e3);}_0x56b619[_0x5d3ecf(0x26b)]&&(_0x4b18ec['props']=_0x56b619);}catch(_0x37cf42){_0x514d07(_0x37cf42,_0x4b18ec,_0x35b43d);}return this['_additionalMetadata'](_0x2abf46,_0x4b18ec),this['_treeNodePropertiesAfterFullValue'](_0x4b18ec,_0x35b43d),_0x35b43d[_0x5d3ecf(0x21c)]['current']=_0x36b5d8,_0x35b43d['level']--,_0x35b43d[_0x5d3ecf(0x23d)]=_0x18103b,_0x35b43d[_0x5d3ecf(0x23d)]&&_0x35b43d[_0x5d3ecf(0x223)][_0x5d3ecf(0x1a1)](),_0x4b18ec;}[_0x298e48(0x1eb)](_0x4e1021){var _0x422b0f=_0x298e48;return Object[_0x422b0f(0x209)]?Object[_0x422b0f(0x209)](_0x4e1021):[];}[_0x298e48(0x201)](_0x279a0f){var _0x1b1ec7=_0x298e48;return!!(_0x279a0f&&_0x1816bf[_0x1b1ec7(0x202)]&&this[_0x1b1ec7(0x19e)](_0x279a0f)===_0x1b1ec7(0x225)&&_0x279a0f['forEach']);}[_0x298e48(0x1d6)](_0x5edf38,_0x14f857,_0x24f5bf){var _0x276cfc=_0x298e48;return _0x24f5bf[_0x276cfc(0x1b4)]?typeof _0x5edf38[_0x14f857]==_0x276cfc(0x1b2):!0x1;}['_type'](_0x44e698){var _0x2ce3c7=_0x298e48,_0x134cc3='';return _0x134cc3=typeof _0x44e698,_0x134cc3===_0x2ce3c7(0x1f3)?this[_0x2ce3c7(0x19e)](_0x44e698)===_0x2ce3c7(0x199)?_0x134cc3=_0x2ce3c7(0x222):this[_0x2ce3c7(0x19e)](_0x44e698)==='[object\\x20Date]'?_0x134cc3='date':this['_objectToString'](_0x44e698)===_0x2ce3c7(0x1d4)?_0x134cc3=_0x2ce3c7(0x27b):_0x44e698===null?_0x134cc3='null':_0x44e698[_0x2ce3c7(0x1ce)]&&(_0x134cc3=_0x44e698[_0x2ce3c7(0x1ce)][_0x2ce3c7(0x247)]||_0x134cc3):_0x134cc3==='undefined'&&this[_0x2ce3c7(0x265)]&&_0x44e698 instanceof this[_0x2ce3c7(0x265)]&&(_0x134cc3=_0x2ce3c7(0x206)),_0x134cc3;}[_0x298e48(0x19e)](_0x3e9a0a){var _0x208956=_0x298e48;return Object[_0x208956(0x193)][_0x208956(0x25c)][_0x208956(0x240)](_0x3e9a0a);}[_0x298e48(0x246)](_0xaa36db){var _0x3ef427=_0x298e48;return _0xaa36db===_0x3ef427(0x203)||_0xaa36db===_0x3ef427(0x22d)||_0xaa36db===_0x3ef427(0x242);}[_0x298e48(0x22e)](_0x49b55b){var _0x1712bc=_0x298e48;return _0x49b55b==='Boolean'||_0x49b55b===_0x1712bc(0x23f)||_0x49b55b===_0x1712bc(0x207);}['_addProperty'](_0x3cf607,_0x3bb6d8,_0x378688,_0x19d160,_0x3966db,_0x1898df){var _0x4e722f=this;return function(_0x2a9122){var _0x4e801e=_0x2be6,_0x234d21=_0x3966db[_0x4e801e(0x21c)][_0x4e801e(0x1f4)],_0x35820b=_0x3966db[_0x4e801e(0x21c)]['index'],_0x14ae84=_0x3966db[_0x4e801e(0x21c)][_0x4e801e(0x19f)];_0x3966db[_0x4e801e(0x21c)][_0x4e801e(0x19f)]=_0x234d21,_0x3966db['node'][_0x4e801e(0x244)]=typeof _0x19d160=='number'?_0x19d160:_0x2a9122,_0x3cf607[_0x4e801e(0x1d2)](_0x4e722f['_property'](_0x3bb6d8,_0x378688,_0x19d160,_0x3966db,_0x1898df)),_0x3966db[_0x4e801e(0x21c)][_0x4e801e(0x19f)]=_0x14ae84,_0x3966db['node'][_0x4e801e(0x244)]=_0x35820b;};}[_0x298e48(0x1ec)](_0x3fdeb4,_0x151e15,_0x301b90,_0x410955,_0x59650c,_0xa54e62,_0x317b39){var _0x63d791=_0x298e48,_0x1dfb14=this;return _0x151e15[_0x63d791(0x1ad)+_0x59650c[_0x63d791(0x25c)]()]=!0x0,function(_0x50d901){var _0x5e9db5=_0x63d791,_0x37136e=_0xa54e62[_0x5e9db5(0x21c)]['current'],_0xad0bbc=_0xa54e62[_0x5e9db5(0x21c)][_0x5e9db5(0x244)],_0x4cfea9=_0xa54e62[_0x5e9db5(0x21c)][_0x5e9db5(0x19f)];_0xa54e62[_0x5e9db5(0x21c)]['parent']=_0x37136e,_0xa54e62['node']['index']=_0x50d901,_0x3fdeb4[_0x5e9db5(0x1d2)](_0x1dfb14[_0x5e9db5(0x1fb)](_0x301b90,_0x410955,_0x59650c,_0xa54e62,_0x317b39)),_0xa54e62['node'][_0x5e9db5(0x19f)]=_0x4cfea9,_0xa54e62[_0x5e9db5(0x21c)]['index']=_0xad0bbc;};}[_0x298e48(0x1fb)](_0x42f87d,_0x33c9af,_0x1aa5b9,_0x293834,_0x239746){var _0x193b28=_0x298e48,_0x4fe853=this;_0x239746||(_0x239746=function(_0x32293b,_0xe9ac7){return _0x32293b[_0xe9ac7];});var _0x9a0389=_0x1aa5b9[_0x193b28(0x25c)](),_0x5505c8=_0x293834[_0x193b28(0x228)]||{},_0x3bafe2=_0x293834[_0x193b28(0x1a0)],_0x2e0f0d=_0x293834[_0x193b28(0x274)];try{var _0x4b4a2d=this['_isMap'](_0x42f87d),_0x53336a=_0x9a0389;_0x4b4a2d&&_0x53336a[0x0]==='\\x27'&&(_0x53336a=_0x53336a['substr'](0x1,_0x53336a['length']-0x2));var _0x2b6751=_0x293834[_0x193b28(0x228)]=_0x5505c8[_0x193b28(0x1ad)+_0x53336a];_0x2b6751&&(_0x293834[_0x193b28(0x1a0)]=_0x293834[_0x193b28(0x1a0)]+0x1),_0x293834[_0x193b28(0x274)]=!!_0x2b6751;var _0x418e67=typeof _0x1aa5b9==_0x193b28(0x252),_0x414b66={'name':_0x418e67||_0x4b4a2d?_0x9a0389:this[_0x193b28(0x1b8)](_0x9a0389)};if(_0x418e67&&(_0x414b66[_0x193b28(0x252)]=!0x0),!(_0x33c9af===_0x193b28(0x222)||_0x33c9af===_0x193b28(0x200))){var _0x399054=this[_0x193b28(0x255)](_0x42f87d,_0x1aa5b9);if(_0x399054&&(_0x399054['set']&&(_0x414b66[_0x193b28(0x229)]=!0x0),_0x399054[_0x193b28(0x1d5)]&&!_0x2b6751&&!_0x293834['resolveGetters']))return _0x414b66[_0x193b28(0x1be)]=!0x0,this[_0x193b28(0x237)](_0x414b66,_0x293834),_0x414b66;}var _0x283116;try{_0x283116=_0x239746(_0x42f87d,_0x1aa5b9);}catch(_0x465773){return _0x414b66={'name':_0x9a0389,'type':'unknown','error':_0x465773[_0x193b28(0x1a6)]},this['_processTreeNodeResult'](_0x414b66,_0x293834),_0x414b66;}var _0x1b16ec=this[_0x193b28(0x21b)](_0x283116),_0x593fb7=this[_0x193b28(0x246)](_0x1b16ec);if(_0x414b66['type']=_0x1b16ec,_0x593fb7)this[_0x193b28(0x237)](_0x414b66,_0x293834,_0x283116,function(){var _0x3e086c=_0x193b28;_0x414b66[_0x3e086c(0x1e3)]=_0x283116['valueOf'](),!_0x2b6751&&_0x4fe853[_0x3e086c(0x1a2)](_0x1b16ec,_0x414b66,_0x293834,{});});else{var _0x437357=_0x293834[_0x193b28(0x23d)]&&_0x293834[_0x193b28(0x1ac)]<_0x293834[_0x193b28(0x20c)]&&_0x293834[_0x193b28(0x223)][_0x193b28(0x1e7)](_0x283116)<0x0&&_0x1b16ec!=='function'&&_0x293834[_0x193b28(0x1c8)]<_0x293834[_0x193b28(0x261)];_0x437357||_0x293834[_0x193b28(0x1ac)]<_0x3bafe2||_0x2b6751?(this[_0x193b28(0x218)](_0x414b66,_0x283116,_0x293834,_0x2b6751||{}),this[_0x193b28(0x1ae)](_0x283116,_0x414b66)):this['_processTreeNodeResult'](_0x414b66,_0x293834,_0x283116,function(){var _0x12d7f3=_0x193b28;_0x1b16ec===_0x12d7f3(0x1f5)||_0x1b16ec==='undefined'||(delete _0x414b66[_0x12d7f3(0x1e3)],_0x414b66[_0x12d7f3(0x213)]=!0x0);});}return _0x414b66;}finally{_0x293834[_0x193b28(0x228)]=_0x5505c8,_0x293834[_0x193b28(0x1a0)]=_0x3bafe2,_0x293834['isExpressionToEvaluate']=_0x2e0f0d;}}[_0x298e48(0x1a2)](_0x4130d4,_0x61b264,_0x5e0e3d,_0x4bc475){var _0x452512=_0x298e48,_0x34a12f=_0x4bc475[_0x452512(0x258)]||_0x5e0e3d[_0x452512(0x258)];if((_0x4130d4===_0x452512(0x22d)||_0x4130d4===_0x452512(0x23f))&&_0x61b264[_0x452512(0x1e3)]){let _0x504a52=_0x61b264['value'][_0x452512(0x26b)];_0x5e0e3d[_0x452512(0x279)]+=_0x504a52,_0x5e0e3d['allStrLength']>_0x5e0e3d[_0x452512(0x1e2)]?(_0x61b264[_0x452512(0x213)]='',delete _0x61b264[_0x452512(0x1e3)]):_0x504a52>_0x34a12f&&(_0x61b264['capped']=_0x61b264[_0x452512(0x1e3)]['substr'](0x0,_0x34a12f),delete _0x61b264[_0x452512(0x1e3)]);}}[_0x298e48(0x257)](_0x275a92){var _0x1778f9=_0x298e48;return!!(_0x275a92&&_0x1816bf[_0x1778f9(0x198)]&&this[_0x1778f9(0x19e)](_0x275a92)===_0x1778f9(0x19c)&&_0x275a92[_0x1778f9(0x1db)]);}[_0x298e48(0x1b8)](_0x2f2e7c){var _0x5312c1=_0x298e48;if(_0x2f2e7c['match'](/^\\d+$/))return _0x2f2e7c;var _0x4fb514;try{_0x4fb514=JSON['stringify'](''+_0x2f2e7c);}catch{_0x4fb514='\\x22'+this['_objectToString'](_0x2f2e7c)+'\\x22';}return _0x4fb514[_0x5312c1(0x1f7)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x4fb514=_0x4fb514['substr'](0x1,_0x4fb514[_0x5312c1(0x26b)]-0x2):_0x4fb514=_0x4fb514[_0x5312c1(0x1b3)](/'/g,'\\x5c\\x27')[_0x5312c1(0x1b3)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x4fb514;}[_0x298e48(0x237)](_0xac0802,_0x3e1022,_0x35228d,_0x183084){var _0x484098=_0x298e48;this[_0x484098(0x194)](_0xac0802,_0x3e1022),_0x183084&&_0x183084(),this[_0x484098(0x1ae)](_0x35228d,_0xac0802),this[_0x484098(0x1c2)](_0xac0802,_0x3e1022);}[_0x298e48(0x194)](_0x53e84a,_0x36e94f){var _0x2263de=_0x298e48;this[_0x2263de(0x233)](_0x53e84a,_0x36e94f),this[_0x2263de(0x245)](_0x53e84a,_0x36e94f),this[_0x2263de(0x1a7)](_0x53e84a,_0x36e94f),this['_setNodePermissions'](_0x53e84a,_0x36e94f);}['_setNodeId'](_0x17d92c,_0xe607de){}[_0x298e48(0x245)](_0x3bb021,_0x5ecf52){}['_setNodeLabel'](_0x975f96,_0x2f88db){}[_0x298e48(0x1b9)](_0x5ec963){var _0x249805=_0x298e48;return _0x5ec963===this[_0x249805(0x275)];}[_0x298e48(0x1c2)](_0x23dd35,_0x3da593){var _0x2c63d1=_0x298e48;this[_0x2c63d1(0x1d0)](_0x23dd35,_0x3da593),this[_0x2c63d1(0x254)](_0x23dd35),_0x3da593[_0x2c63d1(0x1f6)]&&this[_0x2c63d1(0x24d)](_0x23dd35),this[_0x2c63d1(0x1d1)](_0x23dd35,_0x3da593),this[_0x2c63d1(0x249)](_0x23dd35,_0x3da593),this[_0x2c63d1(0x26a)](_0x23dd35);}['_additionalMetadata'](_0x35f79d,_0x4fa330){var _0x125d63=_0x298e48;let _0x839c62;try{_0x1816bf[_0x125d63(0x212)]&&(_0x839c62=_0x1816bf[_0x125d63(0x212)][_0x125d63(0x1b5)],_0x1816bf[_0x125d63(0x212)]['error']=function(){}),_0x35f79d&&typeof _0x35f79d[_0x125d63(0x26b)]==_0x125d63(0x242)&&(_0x4fa330[_0x125d63(0x26b)]=_0x35f79d['length']);}catch{}finally{_0x839c62&&(_0x1816bf[_0x125d63(0x212)]['error']=_0x839c62);}if(_0x4fa330[_0x125d63(0x251)]===_0x125d63(0x242)||_0x4fa330['type']===_0x125d63(0x207)){if(isNaN(_0x4fa330[_0x125d63(0x1e3)]))_0x4fa330[_0x125d63(0x24b)]=!0x0,delete _0x4fa330[_0x125d63(0x1e3)];else switch(_0x4fa330[_0x125d63(0x1e3)]){case Number['POSITIVE_INFINITY']:_0x4fa330[_0x125d63(0x24f)]=!0x0,delete _0x4fa330[_0x125d63(0x1e3)];break;case Number[_0x125d63(0x24a)]:_0x4fa330[_0x125d63(0x273)]=!0x0,delete _0x4fa330['value'];break;case 0x0:this[_0x125d63(0x1dd)](_0x4fa330[_0x125d63(0x1e3)])&&(_0x4fa330['negativeZero']=!0x0);break;}}else _0x4fa330['type']===_0x125d63(0x1b2)&&typeof _0x35f79d[_0x125d63(0x247)]==_0x125d63(0x22d)&&_0x35f79d[_0x125d63(0x247)]&&_0x4fa330[_0x125d63(0x247)]&&_0x35f79d[_0x125d63(0x247)]!==_0x4fa330[_0x125d63(0x247)]&&(_0x4fa330[_0x125d63(0x1fa)]=_0x35f79d[_0x125d63(0x247)]);}[_0x298e48(0x1dd)](_0xde1ebf){var _0xa08b32=_0x298e48;return 0x1/_0xde1ebf===Number[_0xa08b32(0x24a)];}[_0x298e48(0x24d)](_0x2d0295){var _0x217ab2=_0x298e48;!_0x2d0295[_0x217ab2(0x21f)]||!_0x2d0295[_0x217ab2(0x21f)]['length']||_0x2d0295[_0x217ab2(0x251)]==='array'||_0x2d0295[_0x217ab2(0x251)]===_0x217ab2(0x198)||_0x2d0295[_0x217ab2(0x251)]==='Set'||_0x2d0295['props'][_0x217ab2(0x1bc)](function(_0x116ceb,_0x5c4118){var _0x44dfaa=_0x217ab2,_0x5cbc4a=_0x116ceb[_0x44dfaa(0x247)][_0x44dfaa(0x214)](),_0x11cdf7=_0x5c4118[_0x44dfaa(0x247)][_0x44dfaa(0x214)]();return _0x5cbc4a<_0x11cdf7?-0x1:_0x5cbc4a>_0x11cdf7?0x1:0x0;});}['_addFunctionsNode'](_0x30e0d5,_0x301612){var _0x693e3c=_0x298e48;if(!(_0x301612['noFunctions']||!_0x30e0d5[_0x693e3c(0x21f)]||!_0x30e0d5['props']['length'])){for(var _0x27a234=[],_0xdf8302=[],_0x4ce7c4=0x0,_0x56e574=_0x30e0d5[_0x693e3c(0x21f)]['length'];_0x4ce7c4<_0x56e574;_0x4ce7c4++){var _0x6a07a9=_0x30e0d5[_0x693e3c(0x21f)][_0x4ce7c4];_0x6a07a9[_0x693e3c(0x251)]===_0x693e3c(0x1b2)?_0x27a234['push'](_0x6a07a9):_0xdf8302[_0x693e3c(0x1d2)](_0x6a07a9);}if(!(!_0xdf8302[_0x693e3c(0x26b)]||_0x27a234['length']<=0x1)){_0x30e0d5['props']=_0xdf8302;var _0x296461={'functionsNode':!0x0,'props':_0x27a234};this[_0x693e3c(0x233)](_0x296461,_0x301612),this['_setNodeLabel'](_0x296461,_0x301612),this[_0x693e3c(0x254)](_0x296461),this[_0x693e3c(0x269)](_0x296461,_0x301612),_0x296461['id']+='\\x20f',_0x30e0d5[_0x693e3c(0x21f)]['unshift'](_0x296461);}}}[_0x298e48(0x249)](_0x2c871f,_0x3eb283){}[_0x298e48(0x254)](_0x2ab315){}[_0x298e48(0x1c5)](_0x280216){var _0x5c0cdd=_0x298e48;return Array[_0x5c0cdd(0x1ff)](_0x280216)||typeof _0x280216==_0x5c0cdd(0x1f3)&&this[_0x5c0cdd(0x19e)](_0x280216)==='[object\\x20Array]';}[_0x298e48(0x269)](_0x5cb6eb,_0x354173){}['_cleanNode'](_0x3060a6){var _0x684c4d=_0x298e48;delete _0x3060a6[_0x684c4d(0x271)],delete _0x3060a6[_0x684c4d(0x243)],delete _0x3060a6[_0x684c4d(0x205)];}[_0x298e48(0x1a7)](_0x353600,_0x32f555){}}let _0x3503d2=new _0x937f4a(),_0x288fab={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x84cd93={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4936d6(_0x229e1f,_0x4760e8,_0x2c5853,_0x1ba126,_0x33af6f,_0x118904){var _0x4ff6f2=_0x298e48;let _0x21ed1e,_0x52f8dd;try{_0x52f8dd=_0x1ae37a(),_0x21ed1e=_0x4f5b38[_0x4760e8],!_0x21ed1e||_0x52f8dd-_0x21ed1e['ts']>0x1f4&&_0x21ed1e['count']&&_0x21ed1e[_0x4ff6f2(0x1b7)]/_0x21ed1e['count']<0x64?(_0x4f5b38[_0x4760e8]=_0x21ed1e={'count':0x0,'time':0x0,'ts':_0x52f8dd},_0x4f5b38[_0x4ff6f2(0x20d)]={}):_0x52f8dd-_0x4f5b38[_0x4ff6f2(0x20d)]['ts']>0x32&&_0x4f5b38[_0x4ff6f2(0x20d)][_0x4ff6f2(0x204)]&&_0x4f5b38['hits'][_0x4ff6f2(0x1b7)]/_0x4f5b38[_0x4ff6f2(0x20d)][_0x4ff6f2(0x204)]<0x64&&(_0x4f5b38[_0x4ff6f2(0x20d)]={});let _0x2d562b=[],_0xc10bf5=_0x21ed1e[_0x4ff6f2(0x219)]||_0x4f5b38[_0x4ff6f2(0x20d)][_0x4ff6f2(0x219)]?_0x84cd93:_0x288fab,_0x567d13=_0x4801f7=>{var _0x1f23a9=_0x4ff6f2;let _0x21d105={};return _0x21d105['props']=_0x4801f7[_0x1f23a9(0x21f)],_0x21d105[_0x1f23a9(0x1cd)]=_0x4801f7['elements'],_0x21d105[_0x1f23a9(0x258)]=_0x4801f7[_0x1f23a9(0x258)],_0x21d105[_0x1f23a9(0x1e2)]=_0x4801f7[_0x1f23a9(0x1e2)],_0x21d105['autoExpandLimit']=_0x4801f7[_0x1f23a9(0x261)],_0x21d105['autoExpandMaxDepth']=_0x4801f7[_0x1f23a9(0x20c)],_0x21d105['sortProps']=!0x1,_0x21d105[_0x1f23a9(0x1b4)]=!_0x225e5f,_0x21d105[_0x1f23a9(0x1a0)]=0x1,_0x21d105['level']=0x0,_0x21d105[_0x1f23a9(0x19b)]=_0x1f23a9(0x1da),_0x21d105['rootExpression']='root_exp',_0x21d105[_0x1f23a9(0x23d)]=!0x0,_0x21d105[_0x1f23a9(0x223)]=[],_0x21d105[_0x1f23a9(0x1c8)]=0x0,_0x21d105['resolveGetters']=!0x0,_0x21d105[_0x1f23a9(0x279)]=0x0,_0x21d105[_0x1f23a9(0x21c)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x21d105;};for(var _0x16bd2d=0x0;_0x16bd2d<_0x33af6f[_0x4ff6f2(0x26b)];_0x16bd2d++)_0x2d562b[_0x4ff6f2(0x1d2)](_0x3503d2[_0x4ff6f2(0x218)]({'timeNode':_0x229e1f==='time'||void 0x0},_0x33af6f[_0x16bd2d],_0x567d13(_0xc10bf5),{}));if(_0x229e1f===_0x4ff6f2(0x1c9)){let _0x31c9b8=Error[_0x4ff6f2(0x276)];try{Error[_0x4ff6f2(0x276)]=0x1/0x0,_0x2d562b[_0x4ff6f2(0x1d2)](_0x3503d2[_0x4ff6f2(0x218)]({'stackNode':!0x0},new Error()[_0x4ff6f2(0x1c0)],_0x567d13(_0xc10bf5),{'strLength':0x1/0x0}));}finally{Error[_0x4ff6f2(0x276)]=_0x31c9b8;}}return{'method':_0x4ff6f2(0x1fe),'version':_0x38870e,'args':[{'ts':_0x2c5853,'session':_0x1ba126,'args':_0x2d562b,'id':_0x4760e8,'context':_0x118904}]};}catch(_0x1e7bf9){return{'method':_0x4ff6f2(0x1fe),'version':_0x38870e,'args':[{'ts':_0x2c5853,'session':_0x1ba126,'args':[{'type':'unknown','error':_0x1e7bf9&&_0x1e7bf9[_0x4ff6f2(0x1a6)]}],'id':_0x4760e8,'context':_0x118904}]};}finally{try{if(_0x21ed1e&&_0x52f8dd){let _0x1d9d80=_0x1ae37a();_0x21ed1e[_0x4ff6f2(0x204)]++,_0x21ed1e[_0x4ff6f2(0x1b7)]+=_0x472a08(_0x52f8dd,_0x1d9d80),_0x21ed1e['ts']=_0x1d9d80,_0x4f5b38[_0x4ff6f2(0x20d)]['count']++,_0x4f5b38[_0x4ff6f2(0x20d)][_0x4ff6f2(0x1b7)]+=_0x472a08(_0x52f8dd,_0x1d9d80),_0x4f5b38[_0x4ff6f2(0x20d)]['ts']=_0x1d9d80,(_0x21ed1e[_0x4ff6f2(0x204)]>0x32||_0x21ed1e[_0x4ff6f2(0x1b7)]>0x64)&&(_0x21ed1e[_0x4ff6f2(0x219)]=!0x0),(_0x4f5b38[_0x4ff6f2(0x20d)][_0x4ff6f2(0x204)]>0x3e8||_0x4f5b38[_0x4ff6f2(0x20d)][_0x4ff6f2(0x1b7)]>0x12c)&&(_0x4f5b38[_0x4ff6f2(0x20d)][_0x4ff6f2(0x219)]=!0x0);}}catch{}}}return _0x4936d6;}((_0x1f6814,_0x2df50f,_0x45276d,_0x431c1d,_0x183d9b,_0x39d1f4,_0x338b81,_0x4ae1c0,_0x5dc0fd,_0x2e29ab)=>{var _0x81e640=_0xd7bbed;if(_0x1f6814['_console_ninja'])return _0x1f6814['_console_ninja'];if(!Y(_0x1f6814,_0x4ae1c0,_0x183d9b))return _0x1f6814[_0x81e640(0x20f)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x1f6814['_console_ninja'];let _0x5b4040=W(_0x1f6814),_0x3c836d=_0x5b4040[_0x81e640(0x191)],_0x52dbf6=_0x5b4040[_0x81e640(0x25b)],_0xcde4e0=_0x5b4040[_0x81e640(0x1cc)],_0x47e88b={'hits':{},'ts':{}},_0x4b5df0=Q(_0x1f6814,_0x5dc0fd,_0x47e88b,_0x39d1f4),_0x1022c6=_0x30053e=>{_0x47e88b['ts'][_0x30053e]=_0x52dbf6();},_0x275704=(_0x315ec2,_0x37450d)=>{var _0x2db88b=_0x81e640;let _0x44ad9c=_0x47e88b['ts'][_0x37450d];if(delete _0x47e88b['ts'][_0x37450d],_0x44ad9c){let _0x538b3d=_0x3c836d(_0x44ad9c,_0x52dbf6());_0x856e0f(_0x4b5df0(_0x2db88b(0x1b7),_0x315ec2,_0xcde4e0(),_0x5ccd65,[_0x538b3d],_0x37450d));}},_0x36d77b=_0x4c45e9=>_0x47f265=>{var _0x395d4b=_0x81e640;try{_0x1022c6(_0x47f265),_0x4c45e9(_0x47f265);}finally{_0x1f6814['console'][_0x395d4b(0x1b7)]=_0x4c45e9;}},_0xca8894=_0x2f5344=>_0x5457a9=>{var _0x7a6bd6=_0x81e640;try{let [_0x51c915,_0x5eeac4]=_0x5457a9['split'](_0x7a6bd6(0x1d7));_0x275704(_0x5eeac4,_0x51c915),_0x2f5344(_0x51c915);}finally{_0x1f6814[_0x7a6bd6(0x212)][_0x7a6bd6(0x267)]=_0x2f5344;}};_0x1f6814['_console_ninja']={'consoleLog':(_0x3d2ae5,_0x4f8737)=>{var _0x3f4339=_0x81e640;_0x1f6814[_0x3f4339(0x212)][_0x3f4339(0x1fe)]['name']!==_0x3f4339(0x1c1)&&_0x856e0f(_0x4b5df0('log',_0x3d2ae5,_0xcde4e0(),_0x5ccd65,_0x4f8737));},'consoleTrace':(_0x39a59a,_0x5c1eaf)=>{var _0x1a47e1=_0x81e640;_0x1f6814['console'][_0x1a47e1(0x1fe)]['name']!==_0x1a47e1(0x19d)&&_0x856e0f(_0x4b5df0(_0x1a47e1(0x1c9),_0x39a59a,_0xcde4e0(),_0x5ccd65,_0x5c1eaf));},'consoleTime':()=>{var _0x44ced9=_0x81e640;_0x1f6814['console'][_0x44ced9(0x1b7)]=_0x36d77b(_0x1f6814[_0x44ced9(0x212)][_0x44ced9(0x1b7)]);},'consoleTimeEnd':()=>{var _0x29d864=_0x81e640;_0x1f6814[_0x29d864(0x212)]['timeEnd']=_0xca8894(_0x1f6814[_0x29d864(0x212)][_0x29d864(0x267)]);},'autoLog':(_0x566095,_0xf6ad24)=>{var _0x3b4342=_0x81e640;_0x856e0f(_0x4b5df0(_0x3b4342(0x1fe),_0xf6ad24,_0xcde4e0(),_0x5ccd65,[_0x566095]));},'autoLogMany':(_0x174570,_0x2a578e)=>{_0x856e0f(_0x4b5df0('log',_0x174570,_0xcde4e0(),_0x5ccd65,_0x2a578e));},'autoTrace':(_0x9836af,_0x37c601)=>{var _0x3d9c00=_0x81e640;_0x856e0f(_0x4b5df0(_0x3d9c00(0x1c9),_0x37c601,_0xcde4e0(),_0x5ccd65,[_0x9836af]));},'autoTraceMany':(_0x18cc92,_0x2a8e10)=>{_0x856e0f(_0x4b5df0('trace',_0x18cc92,_0xcde4e0(),_0x5ccd65,_0x2a8e10));},'autoTime':(_0x5525f2,_0x25c1ce,_0x45d182)=>{_0x1022c6(_0x45d182);},'autoTimeEnd':(_0x117397,_0x3289dd,_0x1be123)=>{_0x275704(_0x3289dd,_0x1be123);},'coverage':_0x310bcd=>{_0x856e0f({'method':'coverage','version':_0x39d1f4,'args':[{'id':_0x310bcd}]});}};let _0x856e0f=J(_0x1f6814,_0x2df50f,_0x45276d,_0x431c1d,_0x183d9b,_0x2e29ab),_0x5ccd65=_0x1f6814[_0x81e640(0x217)];return _0x1f6814[_0x81e640(0x20f)];})(globalThis,'127.0.0.1',_0xd7bbed(0x227),"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.227\\\\node_modules",_0xd7bbed(0x230),_0xd7bbed(0x22c),_0xd7bbed(0x241),_0xd7bbed(0x1c7),_0xd7bbed(0x263),_0xd7bbed(0x216));`);
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

// app/routes/api.upload.tsx
var action2 = async ({ request }) => {
  let formdata = await request.formData(), data = formdata.get("data"), name = formdata.get("name"), parsed_Data = JSON.parse(data);
  return request.method === "POST" ? await uploadData({ name, data: parsed_Data }) : null;
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
      return console.log(...oo_oo2("836230453_0", category, version)), text = await changeCategory(version, category), text;
    }
  }
  if (request.method === "DELETE") {
    let version = formData.get("version");
    return await deleteTextByVersion(version);
  }
  return history ? (0, import_node5.redirect)(`/?session=${session}`) : text;
};
function oo_cm2() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x2be6(_0x45b4b5,_0x1abd1c){var _0x5ce3f4=_0x5ce3();return _0x2be6=function(_0x2be64f,_0x24075c){_0x2be64f=_0x2be64f-0x191;var _0x386770=_0x5ce3f4[_0x2be64f];return _0x386770;},_0x2be6(_0x45b4b5,_0x1abd1c);}var _0xd7bbed=_0x2be6;(function(_0x34e0a1,_0x21ed9f){var _0x355b47=_0x2be6,_0x18de2b=_0x34e0a1();while(!![]){try{var _0x41df9d=-parseInt(_0x355b47(0x248))/0x1+parseInt(_0x355b47(0x1e9))/0x2+-parseInt(_0x355b47(0x1e0))/0x3+parseInt(_0x355b47(0x1cf))/0x4*(parseInt(_0x355b47(0x1d8))/0x5)+-parseInt(_0x355b47(0x238))/0x6*(parseInt(_0x355b47(0x25a))/0x7)+parseInt(_0x355b47(0x1b1))/0x8+parseInt(_0x355b47(0x20e))/0x9;if(_0x41df9d===_0x21ed9f)break;else _0x18de2b['push'](_0x18de2b['shift']());}catch(_0x1bd688){_0x18de2b['push'](_0x18de2b['shift']());}}}(_0x5ce3,0xaf547));var j=Object[_0xd7bbed(0x259)],X=Object[_0xd7bbed(0x1e5)],G=Object[_0xd7bbed(0x26d)],ee=Object[_0xd7bbed(0x215)],te=Object[_0xd7bbed(0x1fd)],ne=Object['prototype'][_0xd7bbed(0x1c6)],re=(_0xc7e537,_0x1b8676,_0x5e77d4,_0x5d7aec)=>{var _0x208618=_0xd7bbed;if(_0x1b8676&&typeof _0x1b8676==_0x208618(0x1f3)||typeof _0x1b8676=='function'){for(let _0xa99c3b of ee(_0x1b8676))!ne[_0x208618(0x240)](_0xc7e537,_0xa99c3b)&&_0xa99c3b!==_0x5e77d4&&X(_0xc7e537,_0xa99c3b,{'get':()=>_0x1b8676[_0xa99c3b],'enumerable':!(_0x5d7aec=G(_0x1b8676,_0xa99c3b))||_0x5d7aec[_0x208618(0x1f9)]});}return _0xc7e537;},K=(_0x56e71d,_0x194872,_0x2c9993)=>(_0x2c9993=_0x56e71d!=null?j(te(_0x56e71d)):{},re(_0x194872||!_0x56e71d||!_0x56e71d[_0xd7bbed(0x1ea)]?X(_0x2c9993,_0xd7bbed(0x210),{'value':_0x56e71d,'enumerable':!0x0}):_0x2c9993,_0x56e71d)),q=class{constructor(_0x583369,_0x933a97,_0x6d1f17,_0x327097,_0x49458a){var _0x174d98=_0xd7bbed;this['global']=_0x583369,this[_0x174d98(0x1e6)]=_0x933a97,this[_0x174d98(0x20b)]=_0x6d1f17,this[_0x174d98(0x1b0)]=_0x327097,this[_0x174d98(0x1a8)]=_0x49458a,this[_0x174d98(0x1ed)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x174d98(0x197)]=!0x1,this[_0x174d98(0x25f)]=!0x1,this[_0x174d98(0x1ba)]=!this[_0x174d98(0x264)]['process']?.[_0x174d98(0x1dc)]?.[_0x174d98(0x21c)],this[_0x174d98(0x224)]=null,this[_0x174d98(0x1ef)]=0x0,this[_0x174d98(0x26c)]=0x14,this[_0x174d98(0x272)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x174d98(0x1ba)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x174d98(0x1bd))+this[_0x174d98(0x272)];}async[_0xd7bbed(0x1a5)](){var _0x7de100=_0xd7bbed;if(this[_0x7de100(0x224)])return this[_0x7de100(0x224)];let _0x55ccce;if(this[_0x7de100(0x1ba)])_0x55ccce=this[_0x7de100(0x264)][_0x7de100(0x234)];else{if(this[_0x7de100(0x264)]['process']?.[_0x7de100(0x236)])_0x55ccce=this[_0x7de100(0x264)][_0x7de100(0x1de)]?.['_WebSocket'];else try{let _0x2b4a09=await import(_0x7de100(0x1d3));_0x55ccce=(await import((await import(_0x7de100(0x19a)))[_0x7de100(0x23e)](_0x2b4a09['join'](this['nodeModules'],_0x7de100(0x226)))['toString']()))['default'];}catch{try{_0x55ccce=require(require('path')[_0x7de100(0x1ee)](this[_0x7de100(0x1b0)],'ws'));}catch{throw new Error(_0x7de100(0x278));}}}return this[_0x7de100(0x224)]=_0x55ccce,_0x55ccce;}[_0xd7bbed(0x256)](){var _0x3a0fc6=_0xd7bbed;this[_0x3a0fc6(0x25f)]||this[_0x3a0fc6(0x197)]||this['_connectAttemptCount']>=this[_0x3a0fc6(0x26c)]||(this[_0x3a0fc6(0x27a)]=!0x1,this['_connecting']=!0x0,this[_0x3a0fc6(0x1ef)]++,this[_0x3a0fc6(0x1bb)]=new Promise((_0xaaf5fc,_0x12d1c6)=>{var _0x36ce9a=_0x3a0fc6;this[_0x36ce9a(0x1a5)]()[_0x36ce9a(0x231)](_0x682f22=>{var _0x42f8a9=_0x36ce9a;let _0x4b1d82=new _0x682f22('ws://'+(!this[_0x42f8a9(0x1ba)]&&this[_0x42f8a9(0x1a8)]?'gateway.docker.internal':this[_0x42f8a9(0x1e6)])+':'+this['port']);_0x4b1d82[_0x42f8a9(0x21d)]=()=>{var _0x50286d=_0x42f8a9;this[_0x50286d(0x1ed)]=!0x1,this[_0x50286d(0x1ca)](_0x4b1d82),this[_0x50286d(0x277)](),_0x12d1c6(new Error(_0x50286d(0x1bf)));},_0x4b1d82[_0x42f8a9(0x1a3)]=()=>{var _0x189b09=_0x42f8a9;this[_0x189b09(0x1ba)]||_0x4b1d82[_0x189b09(0x250)]&&_0x4b1d82[_0x189b09(0x250)]['unref']&&_0x4b1d82['_socket'][_0x189b09(0x23a)](),_0xaaf5fc(_0x4b1d82);},_0x4b1d82[_0x42f8a9(0x1f0)]=()=>{var _0x23adfe=_0x42f8a9;this[_0x23adfe(0x27a)]=!0x0,this[_0x23adfe(0x1ca)](_0x4b1d82),this[_0x23adfe(0x277)]();},_0x4b1d82[_0x42f8a9(0x22b)]=_0x3e4e27=>{var _0x5a7cd3=_0x42f8a9;try{_0x3e4e27&&_0x3e4e27['data']&&this['_inBrowser']&&JSON[_0x5a7cd3(0x220)](_0x3e4e27[_0x5a7cd3(0x268)])['method']===_0x5a7cd3(0x21a)&&this[_0x5a7cd3(0x264)][_0x5a7cd3(0x1df)][_0x5a7cd3(0x21a)]();}catch{}};})['then'](_0x3c11fd=>(this[_0x36ce9a(0x197)]=!0x0,this[_0x36ce9a(0x25f)]=!0x1,this[_0x36ce9a(0x27a)]=!0x1,this['_allowedToSend']=!0x0,this['_connectAttemptCount']=0x0,_0x3c11fd))[_0x36ce9a(0x25d)](_0x391557=>(this[_0x36ce9a(0x197)]=!0x1,this[_0x36ce9a(0x25f)]=!0x1,console['warn'](_0x36ce9a(0x1e4)+this[_0x36ce9a(0x272)]),_0x12d1c6(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x391557&&_0x391557['message'])))));}));}[_0xd7bbed(0x1ca)](_0x570b27){var _0x12e149=_0xd7bbed;this[_0x12e149(0x197)]=!0x1,this['_connecting']=!0x1;try{_0x570b27[_0x12e149(0x1f0)]=null,_0x570b27[_0x12e149(0x21d)]=null,_0x570b27[_0x12e149(0x1a3)]=null;}catch{}try{_0x570b27[_0x12e149(0x1c3)]<0x2&&_0x570b27[_0x12e149(0x221)]();}catch{}}['_attemptToReconnectShortly'](){var _0x4b00b9=_0xd7bbed;clearTimeout(this[_0x4b00b9(0x208)]),!(this[_0x4b00b9(0x1ef)]>=this['_maxConnectAttemptCount'])&&(this[_0x4b00b9(0x208)]=setTimeout(()=>{var _0x2c2bad=_0x4b00b9;this[_0x2c2bad(0x197)]||this[_0x2c2bad(0x25f)]||(this[_0x2c2bad(0x256)](),this[_0x2c2bad(0x1bb)]?.[_0x2c2bad(0x25d)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x4b00b9(0x208)][_0x4b00b9(0x23a)]&&this[_0x4b00b9(0x208)][_0x4b00b9(0x23a)]());}async[_0xd7bbed(0x235)](_0x4f7bd9){var _0x50811e=_0xd7bbed;try{if(!this[_0x50811e(0x1ed)])return;this['_allowedToConnectOnSend']&&this[_0x50811e(0x256)](),(await this[_0x50811e(0x1bb)])[_0x50811e(0x235)](JSON[_0x50811e(0x1d9)](_0x4f7bd9));}catch(_0x34d823){console[_0x50811e(0x24c)](this[_0x50811e(0x266)]+':\\x20'+(_0x34d823&&_0x34d823['message'])),this[_0x50811e(0x1ed)]=!0x1,this[_0x50811e(0x277)]();}}};function J(_0x4e9d93,_0x554a21,_0x1b6ae3,_0x546958,_0x2a0f4b,_0xb76381){var _0x48020b=_0xd7bbed;let _0xa0c98a=_0x1b6ae3[_0x48020b(0x253)](',')[_0x48020b(0x1ab)](_0x35e29d=>{var _0x2bc445=_0x48020b;try{_0x4e9d93[_0x2bc445(0x217)]||((_0x2a0f4b===_0x2bc445(0x192)||_0x2a0f4b===_0x2bc445(0x22a)||_0x2a0f4b===_0x2bc445(0x24e))&&(_0x2a0f4b+=_0x4e9d93['process']?.[_0x2bc445(0x1dc)]?.['node']?_0x2bc445(0x1f8):'\\x20browser'),_0x4e9d93[_0x2bc445(0x217)]={'id':+new Date(),'tool':_0x2a0f4b});let _0x70f09c=new q(_0x4e9d93,_0x554a21,_0x35e29d,_0x546958,_0xb76381);return _0x70f09c[_0x2bc445(0x235)]['bind'](_0x70f09c);}catch(_0x278dd7){return console[_0x2bc445(0x24c)](_0x2bc445(0x23b),_0x278dd7&&_0x278dd7['message']),()=>{};}});return _0x240a61=>_0xa0c98a['forEach'](_0x4f46ab=>_0x4f46ab(_0x240a61));}function _0x5ce3(){var _0x49a14b=['onmessage','1.0.0','string','_isPrimitiveWrapperType','_dateToString','remix','then','RegExp','_setNodeId','WebSocket','send','_WebSocket','_processTreeNodeResult','8328fWMXWD','_quotedRegExp','unref','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','_Symbol','autoExpand','pathToFileURL','String','call','1695892548998','number','_hasSetOnItsPath','index','_setNodeQueryPath','_isPrimitiveType','name','649651orBZXa','_addLoadNode','NEGATIVE_INFINITY','nan','warn','_sortProps','astro','positiveInfinity','_socket','type','symbol','split','_setNodeExpandableState','_getOwnPropertyDescriptor','_connectToHostNow','_isMap','strLength','create','4529FlEPdj','timeStamp','toString','catch','Symbol','_connecting','Buffer','autoExpandLimit','date','','global','_HTMLAllCollection','_sendErrorMessage','timeEnd','data','_setNodePermissions','_cleanNode','length','_maxConnectAttemptCount','getOwnPropertyDescriptor','_consoleNinjaAllowedToStart','nuxt','undefined','_hasSymbolPropertyOnItsPath','_webSocketErrorDocsLink','negativeInfinity','isExpressionToEvaluate','_undefined','stackTraceLimit','_attemptToReconnectShortly','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','allStrLength','_allowedToConnectOnSend','bigint','elapsed','next.js','prototype','_treeNodePropertiesBeforeFullValue','unknown','cappedElements','_connected','Map','[object\\x20Array]','url','expId','[object\\x20Map]','disabledTrace','_objectToString','parent','depth','pop','_capIfString','onopen','concat','getWebSocketClass','message','_setNodeExpressionPath','dockerizedApp','...','hostname','map','level','_p_','_additionalMetadata','_p_length','nodeModules','9489600CEAQMz','function','replace','noFunctions','error','_regExpToString','time','_propertyName','_isUndefined','_inBrowser','_ws','sort','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','getter','logger\\x20websocket\\x20error','stack','disabledLog','_treeNodePropertiesAfterFullValue','readyState','hrtime','_isArray','hasOwnProperty',["localhost","127.0.0.1","example.cypress.io","kunsang","172.18.64.1","192.168.1.10"],'autoExpandPropertyCount','trace','_disposeWebsocket','slice','now','elements','constructor','1596tOlvxD','_setNodeLabel','_addFunctionsNode','push','path','[object\\x20BigInt]','get','_blacklistedProperty',':logPointId:','13280zNghud','stringify','root_exp_id','forEach','versions','_isNegativeZero','process','location','3466956qngpoR','_getOwnPropertyNames','totalStrLength','value','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','defineProperty','host','indexOf','_addProperty','1223420qZbTDv','__es'+'Module','_getOwnPropertySymbols','_addObjectProperty','_allowedToSend','join','_connectAttemptCount','onclose','performance','_numberRegExp','object','current','null','sortProps','match','\\x20server','enumerable','funcName','_property','_keyStrRegExp','getPrototypeOf','log','isArray','Error','_isSet','Set','boolean','count','_hasMapOnItsPath','HTMLAllCollection','Number','_reconnectTimeout','getOwnPropertySymbols','valueOf','port','autoExpandMaxDepth','hits','5074524EToXKP','_console_ninja','default','cappedProps','console','capped','toLowerCase','getOwnPropertyNames','','_console_ninja_session','serialize','reduceLimits','reload','_type','node','onerror','test','props','parse','close','array','autoExpandPreviousObjects','_WebSocketClass','[object\\x20Set]','ws/index.js','51528','expressionsToEvaluate','setter','remix'];_0x5ce3=function(){return _0x49a14b;};return _0x5ce3();}function W(_0xb663a7){var _0x23a34c=_0xd7bbed;let _0x50e06c=function(_0x441781,_0x1dd6da){return _0x1dd6da-_0x441781;},_0x3e9804;if(_0xb663a7[_0x23a34c(0x1f1)])_0x3e9804=function(){var _0x48da61=_0x23a34c;return _0xb663a7[_0x48da61(0x1f1)][_0x48da61(0x1cc)]();};else{if(_0xb663a7[_0x23a34c(0x1de)]&&_0xb663a7[_0x23a34c(0x1de)][_0x23a34c(0x1c4)])_0x3e9804=function(){var _0x3539f3=_0x23a34c;return _0xb663a7[_0x3539f3(0x1de)][_0x3539f3(0x1c4)]();},_0x50e06c=function(_0x119147,_0x2d9af9){return 0x3e8*(_0x2d9af9[0x0]-_0x119147[0x0])+(_0x2d9af9[0x1]-_0x119147[0x1])/0xf4240;};else try{let {performance:_0x5d6fda}=require('perf_hooks');_0x3e9804=function(){return _0x5d6fda['now']();};}catch{_0x3e9804=function(){return+new Date();};}}return{'elapsed':_0x50e06c,'timeStamp':_0x3e9804,'now':()=>Date['now']()};}function Y(_0x5df65d,_0x5940cb,_0xdfc810){var _0x5358a1=_0xd7bbed;if(_0x5df65d[_0x5358a1(0x26e)]!==void 0x0)return _0x5df65d[_0x5358a1(0x26e)];let _0x764729=_0x5df65d['process']?.[_0x5358a1(0x1dc)]?.[_0x5358a1(0x21c)];return _0x764729&&_0xdfc810===_0x5358a1(0x26f)?_0x5df65d[_0x5358a1(0x26e)]=!0x1:_0x5df65d[_0x5358a1(0x26e)]=_0x764729||!_0x5940cb||_0x5df65d[_0x5358a1(0x1df)]?.[_0x5358a1(0x1aa)]&&_0x5940cb['includes'](_0x5df65d[_0x5358a1(0x1df)][_0x5358a1(0x1aa)]),_0x5df65d[_0x5358a1(0x26e)];}function Q(_0x1816bf,_0x225e5f,_0x4f5b38,_0x38870e){var _0x298e48=_0xd7bbed;_0x1816bf=_0x1816bf,_0x225e5f=_0x225e5f,_0x4f5b38=_0x4f5b38,_0x38870e=_0x38870e;let _0x20c471=W(_0x1816bf),_0x472a08=_0x20c471['elapsed'],_0x1ae37a=_0x20c471[_0x298e48(0x25b)];class _0x937f4a{constructor(){var _0x5677b7=_0x298e48;this[_0x5677b7(0x1fc)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x5677b7(0x1f2)]=/^(0|[1-9][0-9]*)$/,this[_0x5677b7(0x239)]=/'([^\\\\']|\\\\')*'/,this[_0x5677b7(0x275)]=_0x1816bf[_0x5677b7(0x270)],this[_0x5677b7(0x265)]=_0x1816bf['HTMLAllCollection'],this[_0x5677b7(0x255)]=Object['getOwnPropertyDescriptor'],this[_0x5677b7(0x1e1)]=Object[_0x5677b7(0x215)],this['_Symbol']=_0x1816bf[_0x5677b7(0x25e)],this[_0x5677b7(0x1b6)]=RegExp['prototype'][_0x5677b7(0x25c)],this[_0x5677b7(0x22f)]=Date[_0x5677b7(0x193)]['toString'];}[_0x298e48(0x218)](_0x4b18ec,_0x2abf46,_0x35b43d,_0x275edb){var _0x5d3ecf=_0x298e48,_0x338408=this,_0x18103b=_0x35b43d[_0x5d3ecf(0x23d)];function _0x514d07(_0x2e41b5,_0x4ad158,_0x41a4d2){var _0x571e58=_0x5d3ecf;_0x4ad158['type']=_0x571e58(0x195),_0x4ad158[_0x571e58(0x1b5)]=_0x2e41b5['message'],_0x36b5d8=_0x41a4d2[_0x571e58(0x21c)][_0x571e58(0x1f4)],_0x41a4d2[_0x571e58(0x21c)][_0x571e58(0x1f4)]=_0x4ad158,_0x338408[_0x571e58(0x194)](_0x4ad158,_0x41a4d2);}try{_0x35b43d[_0x5d3ecf(0x1ac)]++,_0x35b43d[_0x5d3ecf(0x23d)]&&_0x35b43d[_0x5d3ecf(0x223)][_0x5d3ecf(0x1d2)](_0x2abf46);var _0x59f8e3,_0x3525de,_0x1e9023,_0x505937,_0x56b619=[],_0xde7ef9=[],_0x39ebc6,_0x442e95=this['_type'](_0x2abf46),_0x1ad0d9=_0x442e95===_0x5d3ecf(0x222),_0x1d6388=!0x1,_0x59ca99=_0x442e95==='function',_0x4db55c=this['_isPrimitiveType'](_0x442e95),_0x3e0d59=this[_0x5d3ecf(0x22e)](_0x442e95),_0x52bca5=_0x4db55c||_0x3e0d59,_0x10d44b={},_0x496c07=0x0,_0xd857f4=!0x1,_0x36b5d8,_0x37d617=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x35b43d[_0x5d3ecf(0x1a0)]){if(_0x1ad0d9){if(_0x3525de=_0x2abf46[_0x5d3ecf(0x26b)],_0x3525de>_0x35b43d[_0x5d3ecf(0x1cd)]){for(_0x1e9023=0x0,_0x505937=_0x35b43d['elements'],_0x59f8e3=_0x1e9023;_0x59f8e3<_0x505937;_0x59f8e3++)_0xde7ef9[_0x5d3ecf(0x1d2)](_0x338408['_addProperty'](_0x56b619,_0x2abf46,_0x442e95,_0x59f8e3,_0x35b43d));_0x4b18ec[_0x5d3ecf(0x196)]=!0x0;}else{for(_0x1e9023=0x0,_0x505937=_0x3525de,_0x59f8e3=_0x1e9023;_0x59f8e3<_0x505937;_0x59f8e3++)_0xde7ef9[_0x5d3ecf(0x1d2)](_0x338408[_0x5d3ecf(0x1e8)](_0x56b619,_0x2abf46,_0x442e95,_0x59f8e3,_0x35b43d));}_0x35b43d[_0x5d3ecf(0x1c8)]+=_0xde7ef9[_0x5d3ecf(0x26b)];}if(!(_0x442e95===_0x5d3ecf(0x1f5)||_0x442e95===_0x5d3ecf(0x270))&&!_0x4db55c&&_0x442e95!==_0x5d3ecf(0x23f)&&_0x442e95!==_0x5d3ecf(0x260)&&_0x442e95!==_0x5d3ecf(0x27b)){var _0x3d119b=_0x275edb[_0x5d3ecf(0x21f)]||_0x35b43d['props'];if(this[_0x5d3ecf(0x201)](_0x2abf46)?(_0x59f8e3=0x0,_0x2abf46[_0x5d3ecf(0x1db)](function(_0x16b20e){var _0x5626ac=_0x5d3ecf;if(_0x496c07++,_0x35b43d[_0x5626ac(0x1c8)]++,_0x496c07>_0x3d119b){_0xd857f4=!0x0;return;}if(!_0x35b43d[_0x5626ac(0x274)]&&_0x35b43d['autoExpand']&&_0x35b43d[_0x5626ac(0x1c8)]>_0x35b43d[_0x5626ac(0x261)]){_0xd857f4=!0x0;return;}_0xde7ef9[_0x5626ac(0x1d2)](_0x338408['_addProperty'](_0x56b619,_0x2abf46,_0x5626ac(0x202),_0x59f8e3++,_0x35b43d,function(_0x47f2aa){return function(){return _0x47f2aa;};}(_0x16b20e)));})):this[_0x5d3ecf(0x257)](_0x2abf46)&&_0x2abf46[_0x5d3ecf(0x1db)](function(_0x549436,_0x549073){var _0x22b0aa=_0x5d3ecf;if(_0x496c07++,_0x35b43d[_0x22b0aa(0x1c8)]++,_0x496c07>_0x3d119b){_0xd857f4=!0x0;return;}if(!_0x35b43d['isExpressionToEvaluate']&&_0x35b43d[_0x22b0aa(0x23d)]&&_0x35b43d[_0x22b0aa(0x1c8)]>_0x35b43d[_0x22b0aa(0x261)]){_0xd857f4=!0x0;return;}var _0x12bda6=_0x549073['toString']();_0x12bda6[_0x22b0aa(0x26b)]>0x64&&(_0x12bda6=_0x12bda6[_0x22b0aa(0x1cb)](0x0,0x64)+_0x22b0aa(0x1a9)),_0xde7ef9['push'](_0x338408['_addProperty'](_0x56b619,_0x2abf46,'Map',_0x12bda6,_0x35b43d,function(_0x578cfe){return function(){return _0x578cfe;};}(_0x549436)));}),!_0x1d6388){try{for(_0x39ebc6 in _0x2abf46)if(!(_0x1ad0d9&&_0x37d617['test'](_0x39ebc6))&&!this[_0x5d3ecf(0x1d6)](_0x2abf46,_0x39ebc6,_0x35b43d)){if(_0x496c07++,_0x35b43d[_0x5d3ecf(0x1c8)]++,_0x496c07>_0x3d119b){_0xd857f4=!0x0;break;}if(!_0x35b43d[_0x5d3ecf(0x274)]&&_0x35b43d[_0x5d3ecf(0x23d)]&&_0x35b43d['autoExpandPropertyCount']>_0x35b43d['autoExpandLimit']){_0xd857f4=!0x0;break;}_0xde7ef9[_0x5d3ecf(0x1d2)](_0x338408['_addObjectProperty'](_0x56b619,_0x10d44b,_0x2abf46,_0x442e95,_0x39ebc6,_0x35b43d));}}catch{}if(_0x10d44b[_0x5d3ecf(0x1af)]=!0x0,_0x59ca99&&(_0x10d44b['_p_name']=!0x0),!_0xd857f4){var _0x25c838=[]['concat'](this[_0x5d3ecf(0x1e1)](_0x2abf46))[_0x5d3ecf(0x1a4)](this[_0x5d3ecf(0x1eb)](_0x2abf46));for(_0x59f8e3=0x0,_0x3525de=_0x25c838[_0x5d3ecf(0x26b)];_0x59f8e3<_0x3525de;_0x59f8e3++)if(_0x39ebc6=_0x25c838[_0x59f8e3],!(_0x1ad0d9&&_0x37d617[_0x5d3ecf(0x21e)](_0x39ebc6[_0x5d3ecf(0x25c)]()))&&!this[_0x5d3ecf(0x1d6)](_0x2abf46,_0x39ebc6,_0x35b43d)&&!_0x10d44b['_p_'+_0x39ebc6[_0x5d3ecf(0x25c)]()]){if(_0x496c07++,_0x35b43d[_0x5d3ecf(0x1c8)]++,_0x496c07>_0x3d119b){_0xd857f4=!0x0;break;}if(!_0x35b43d[_0x5d3ecf(0x274)]&&_0x35b43d['autoExpand']&&_0x35b43d[_0x5d3ecf(0x1c8)]>_0x35b43d[_0x5d3ecf(0x261)]){_0xd857f4=!0x0;break;}_0xde7ef9[_0x5d3ecf(0x1d2)](_0x338408['_addObjectProperty'](_0x56b619,_0x10d44b,_0x2abf46,_0x442e95,_0x39ebc6,_0x35b43d));}}}}}if(_0x4b18ec['type']=_0x442e95,_0x52bca5?(_0x4b18ec[_0x5d3ecf(0x1e3)]=_0x2abf46[_0x5d3ecf(0x20a)](),this[_0x5d3ecf(0x1a2)](_0x442e95,_0x4b18ec,_0x35b43d,_0x275edb)):_0x442e95===_0x5d3ecf(0x262)?_0x4b18ec[_0x5d3ecf(0x1e3)]=this['_dateToString'][_0x5d3ecf(0x240)](_0x2abf46):_0x442e95===_0x5d3ecf(0x27b)?_0x4b18ec[_0x5d3ecf(0x1e3)]=_0x2abf46[_0x5d3ecf(0x25c)]():_0x442e95===_0x5d3ecf(0x232)?_0x4b18ec[_0x5d3ecf(0x1e3)]=this['_regExpToString'][_0x5d3ecf(0x240)](_0x2abf46):_0x442e95===_0x5d3ecf(0x252)&&this[_0x5d3ecf(0x23c)]?_0x4b18ec[_0x5d3ecf(0x1e3)]=this[_0x5d3ecf(0x23c)][_0x5d3ecf(0x193)]['toString'][_0x5d3ecf(0x240)](_0x2abf46):!_0x35b43d[_0x5d3ecf(0x1a0)]&&!(_0x442e95===_0x5d3ecf(0x1f5)||_0x442e95===_0x5d3ecf(0x270))&&(delete _0x4b18ec[_0x5d3ecf(0x1e3)],_0x4b18ec[_0x5d3ecf(0x213)]=!0x0),_0xd857f4&&(_0x4b18ec[_0x5d3ecf(0x211)]=!0x0),_0x36b5d8=_0x35b43d['node'][_0x5d3ecf(0x1f4)],_0x35b43d[_0x5d3ecf(0x21c)][_0x5d3ecf(0x1f4)]=_0x4b18ec,this[_0x5d3ecf(0x194)](_0x4b18ec,_0x35b43d),_0xde7ef9['length']){for(_0x59f8e3=0x0,_0x3525de=_0xde7ef9[_0x5d3ecf(0x26b)];_0x59f8e3<_0x3525de;_0x59f8e3++)_0xde7ef9[_0x59f8e3](_0x59f8e3);}_0x56b619[_0x5d3ecf(0x26b)]&&(_0x4b18ec['props']=_0x56b619);}catch(_0x37cf42){_0x514d07(_0x37cf42,_0x4b18ec,_0x35b43d);}return this['_additionalMetadata'](_0x2abf46,_0x4b18ec),this['_treeNodePropertiesAfterFullValue'](_0x4b18ec,_0x35b43d),_0x35b43d[_0x5d3ecf(0x21c)]['current']=_0x36b5d8,_0x35b43d['level']--,_0x35b43d[_0x5d3ecf(0x23d)]=_0x18103b,_0x35b43d[_0x5d3ecf(0x23d)]&&_0x35b43d[_0x5d3ecf(0x223)][_0x5d3ecf(0x1a1)](),_0x4b18ec;}[_0x298e48(0x1eb)](_0x4e1021){var _0x422b0f=_0x298e48;return Object[_0x422b0f(0x209)]?Object[_0x422b0f(0x209)](_0x4e1021):[];}[_0x298e48(0x201)](_0x279a0f){var _0x1b1ec7=_0x298e48;return!!(_0x279a0f&&_0x1816bf[_0x1b1ec7(0x202)]&&this[_0x1b1ec7(0x19e)](_0x279a0f)===_0x1b1ec7(0x225)&&_0x279a0f['forEach']);}[_0x298e48(0x1d6)](_0x5edf38,_0x14f857,_0x24f5bf){var _0x276cfc=_0x298e48;return _0x24f5bf[_0x276cfc(0x1b4)]?typeof _0x5edf38[_0x14f857]==_0x276cfc(0x1b2):!0x1;}['_type'](_0x44e698){var _0x2ce3c7=_0x298e48,_0x134cc3='';return _0x134cc3=typeof _0x44e698,_0x134cc3===_0x2ce3c7(0x1f3)?this[_0x2ce3c7(0x19e)](_0x44e698)===_0x2ce3c7(0x199)?_0x134cc3=_0x2ce3c7(0x222):this[_0x2ce3c7(0x19e)](_0x44e698)==='[object\\x20Date]'?_0x134cc3='date':this['_objectToString'](_0x44e698)===_0x2ce3c7(0x1d4)?_0x134cc3=_0x2ce3c7(0x27b):_0x44e698===null?_0x134cc3='null':_0x44e698[_0x2ce3c7(0x1ce)]&&(_0x134cc3=_0x44e698[_0x2ce3c7(0x1ce)][_0x2ce3c7(0x247)]||_0x134cc3):_0x134cc3==='undefined'&&this[_0x2ce3c7(0x265)]&&_0x44e698 instanceof this[_0x2ce3c7(0x265)]&&(_0x134cc3=_0x2ce3c7(0x206)),_0x134cc3;}[_0x298e48(0x19e)](_0x3e9a0a){var _0x208956=_0x298e48;return Object[_0x208956(0x193)][_0x208956(0x25c)][_0x208956(0x240)](_0x3e9a0a);}[_0x298e48(0x246)](_0xaa36db){var _0x3ef427=_0x298e48;return _0xaa36db===_0x3ef427(0x203)||_0xaa36db===_0x3ef427(0x22d)||_0xaa36db===_0x3ef427(0x242);}[_0x298e48(0x22e)](_0x49b55b){var _0x1712bc=_0x298e48;return _0x49b55b==='Boolean'||_0x49b55b===_0x1712bc(0x23f)||_0x49b55b===_0x1712bc(0x207);}['_addProperty'](_0x3cf607,_0x3bb6d8,_0x378688,_0x19d160,_0x3966db,_0x1898df){var _0x4e722f=this;return function(_0x2a9122){var _0x4e801e=_0x2be6,_0x234d21=_0x3966db[_0x4e801e(0x21c)][_0x4e801e(0x1f4)],_0x35820b=_0x3966db[_0x4e801e(0x21c)]['index'],_0x14ae84=_0x3966db[_0x4e801e(0x21c)][_0x4e801e(0x19f)];_0x3966db[_0x4e801e(0x21c)][_0x4e801e(0x19f)]=_0x234d21,_0x3966db['node'][_0x4e801e(0x244)]=typeof _0x19d160=='number'?_0x19d160:_0x2a9122,_0x3cf607[_0x4e801e(0x1d2)](_0x4e722f['_property'](_0x3bb6d8,_0x378688,_0x19d160,_0x3966db,_0x1898df)),_0x3966db[_0x4e801e(0x21c)][_0x4e801e(0x19f)]=_0x14ae84,_0x3966db['node'][_0x4e801e(0x244)]=_0x35820b;};}[_0x298e48(0x1ec)](_0x3fdeb4,_0x151e15,_0x301b90,_0x410955,_0x59650c,_0xa54e62,_0x317b39){var _0x63d791=_0x298e48,_0x1dfb14=this;return _0x151e15[_0x63d791(0x1ad)+_0x59650c[_0x63d791(0x25c)]()]=!0x0,function(_0x50d901){var _0x5e9db5=_0x63d791,_0x37136e=_0xa54e62[_0x5e9db5(0x21c)]['current'],_0xad0bbc=_0xa54e62[_0x5e9db5(0x21c)][_0x5e9db5(0x244)],_0x4cfea9=_0xa54e62[_0x5e9db5(0x21c)][_0x5e9db5(0x19f)];_0xa54e62[_0x5e9db5(0x21c)]['parent']=_0x37136e,_0xa54e62['node']['index']=_0x50d901,_0x3fdeb4[_0x5e9db5(0x1d2)](_0x1dfb14[_0x5e9db5(0x1fb)](_0x301b90,_0x410955,_0x59650c,_0xa54e62,_0x317b39)),_0xa54e62['node'][_0x5e9db5(0x19f)]=_0x4cfea9,_0xa54e62[_0x5e9db5(0x21c)]['index']=_0xad0bbc;};}[_0x298e48(0x1fb)](_0x42f87d,_0x33c9af,_0x1aa5b9,_0x293834,_0x239746){var _0x193b28=_0x298e48,_0x4fe853=this;_0x239746||(_0x239746=function(_0x32293b,_0xe9ac7){return _0x32293b[_0xe9ac7];});var _0x9a0389=_0x1aa5b9[_0x193b28(0x25c)](),_0x5505c8=_0x293834[_0x193b28(0x228)]||{},_0x3bafe2=_0x293834[_0x193b28(0x1a0)],_0x2e0f0d=_0x293834[_0x193b28(0x274)];try{var _0x4b4a2d=this['_isMap'](_0x42f87d),_0x53336a=_0x9a0389;_0x4b4a2d&&_0x53336a[0x0]==='\\x27'&&(_0x53336a=_0x53336a['substr'](0x1,_0x53336a['length']-0x2));var _0x2b6751=_0x293834[_0x193b28(0x228)]=_0x5505c8[_0x193b28(0x1ad)+_0x53336a];_0x2b6751&&(_0x293834[_0x193b28(0x1a0)]=_0x293834[_0x193b28(0x1a0)]+0x1),_0x293834[_0x193b28(0x274)]=!!_0x2b6751;var _0x418e67=typeof _0x1aa5b9==_0x193b28(0x252),_0x414b66={'name':_0x418e67||_0x4b4a2d?_0x9a0389:this[_0x193b28(0x1b8)](_0x9a0389)};if(_0x418e67&&(_0x414b66[_0x193b28(0x252)]=!0x0),!(_0x33c9af===_0x193b28(0x222)||_0x33c9af===_0x193b28(0x200))){var _0x399054=this[_0x193b28(0x255)](_0x42f87d,_0x1aa5b9);if(_0x399054&&(_0x399054['set']&&(_0x414b66[_0x193b28(0x229)]=!0x0),_0x399054[_0x193b28(0x1d5)]&&!_0x2b6751&&!_0x293834['resolveGetters']))return _0x414b66[_0x193b28(0x1be)]=!0x0,this[_0x193b28(0x237)](_0x414b66,_0x293834),_0x414b66;}var _0x283116;try{_0x283116=_0x239746(_0x42f87d,_0x1aa5b9);}catch(_0x465773){return _0x414b66={'name':_0x9a0389,'type':'unknown','error':_0x465773[_0x193b28(0x1a6)]},this['_processTreeNodeResult'](_0x414b66,_0x293834),_0x414b66;}var _0x1b16ec=this[_0x193b28(0x21b)](_0x283116),_0x593fb7=this[_0x193b28(0x246)](_0x1b16ec);if(_0x414b66['type']=_0x1b16ec,_0x593fb7)this[_0x193b28(0x237)](_0x414b66,_0x293834,_0x283116,function(){var _0x3e086c=_0x193b28;_0x414b66[_0x3e086c(0x1e3)]=_0x283116['valueOf'](),!_0x2b6751&&_0x4fe853[_0x3e086c(0x1a2)](_0x1b16ec,_0x414b66,_0x293834,{});});else{var _0x437357=_0x293834[_0x193b28(0x23d)]&&_0x293834[_0x193b28(0x1ac)]<_0x293834[_0x193b28(0x20c)]&&_0x293834[_0x193b28(0x223)][_0x193b28(0x1e7)](_0x283116)<0x0&&_0x1b16ec!=='function'&&_0x293834[_0x193b28(0x1c8)]<_0x293834[_0x193b28(0x261)];_0x437357||_0x293834[_0x193b28(0x1ac)]<_0x3bafe2||_0x2b6751?(this[_0x193b28(0x218)](_0x414b66,_0x283116,_0x293834,_0x2b6751||{}),this[_0x193b28(0x1ae)](_0x283116,_0x414b66)):this['_processTreeNodeResult'](_0x414b66,_0x293834,_0x283116,function(){var _0x12d7f3=_0x193b28;_0x1b16ec===_0x12d7f3(0x1f5)||_0x1b16ec==='undefined'||(delete _0x414b66[_0x12d7f3(0x1e3)],_0x414b66[_0x12d7f3(0x213)]=!0x0);});}return _0x414b66;}finally{_0x293834[_0x193b28(0x228)]=_0x5505c8,_0x293834[_0x193b28(0x1a0)]=_0x3bafe2,_0x293834['isExpressionToEvaluate']=_0x2e0f0d;}}[_0x298e48(0x1a2)](_0x4130d4,_0x61b264,_0x5e0e3d,_0x4bc475){var _0x452512=_0x298e48,_0x34a12f=_0x4bc475[_0x452512(0x258)]||_0x5e0e3d[_0x452512(0x258)];if((_0x4130d4===_0x452512(0x22d)||_0x4130d4===_0x452512(0x23f))&&_0x61b264[_0x452512(0x1e3)]){let _0x504a52=_0x61b264['value'][_0x452512(0x26b)];_0x5e0e3d[_0x452512(0x279)]+=_0x504a52,_0x5e0e3d['allStrLength']>_0x5e0e3d[_0x452512(0x1e2)]?(_0x61b264[_0x452512(0x213)]='',delete _0x61b264[_0x452512(0x1e3)]):_0x504a52>_0x34a12f&&(_0x61b264['capped']=_0x61b264[_0x452512(0x1e3)]['substr'](0x0,_0x34a12f),delete _0x61b264[_0x452512(0x1e3)]);}}[_0x298e48(0x257)](_0x275a92){var _0x1778f9=_0x298e48;return!!(_0x275a92&&_0x1816bf[_0x1778f9(0x198)]&&this[_0x1778f9(0x19e)](_0x275a92)===_0x1778f9(0x19c)&&_0x275a92[_0x1778f9(0x1db)]);}[_0x298e48(0x1b8)](_0x2f2e7c){var _0x5312c1=_0x298e48;if(_0x2f2e7c['match'](/^\\d+$/))return _0x2f2e7c;var _0x4fb514;try{_0x4fb514=JSON['stringify'](''+_0x2f2e7c);}catch{_0x4fb514='\\x22'+this['_objectToString'](_0x2f2e7c)+'\\x22';}return _0x4fb514[_0x5312c1(0x1f7)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x4fb514=_0x4fb514['substr'](0x1,_0x4fb514[_0x5312c1(0x26b)]-0x2):_0x4fb514=_0x4fb514[_0x5312c1(0x1b3)](/'/g,'\\x5c\\x27')[_0x5312c1(0x1b3)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x4fb514;}[_0x298e48(0x237)](_0xac0802,_0x3e1022,_0x35228d,_0x183084){var _0x484098=_0x298e48;this[_0x484098(0x194)](_0xac0802,_0x3e1022),_0x183084&&_0x183084(),this[_0x484098(0x1ae)](_0x35228d,_0xac0802),this[_0x484098(0x1c2)](_0xac0802,_0x3e1022);}[_0x298e48(0x194)](_0x53e84a,_0x36e94f){var _0x2263de=_0x298e48;this[_0x2263de(0x233)](_0x53e84a,_0x36e94f),this[_0x2263de(0x245)](_0x53e84a,_0x36e94f),this[_0x2263de(0x1a7)](_0x53e84a,_0x36e94f),this['_setNodePermissions'](_0x53e84a,_0x36e94f);}['_setNodeId'](_0x17d92c,_0xe607de){}[_0x298e48(0x245)](_0x3bb021,_0x5ecf52){}['_setNodeLabel'](_0x975f96,_0x2f88db){}[_0x298e48(0x1b9)](_0x5ec963){var _0x249805=_0x298e48;return _0x5ec963===this[_0x249805(0x275)];}[_0x298e48(0x1c2)](_0x23dd35,_0x3da593){var _0x2c63d1=_0x298e48;this[_0x2c63d1(0x1d0)](_0x23dd35,_0x3da593),this[_0x2c63d1(0x254)](_0x23dd35),_0x3da593[_0x2c63d1(0x1f6)]&&this[_0x2c63d1(0x24d)](_0x23dd35),this[_0x2c63d1(0x1d1)](_0x23dd35,_0x3da593),this[_0x2c63d1(0x249)](_0x23dd35,_0x3da593),this[_0x2c63d1(0x26a)](_0x23dd35);}['_additionalMetadata'](_0x35f79d,_0x4fa330){var _0x125d63=_0x298e48;let _0x839c62;try{_0x1816bf[_0x125d63(0x212)]&&(_0x839c62=_0x1816bf[_0x125d63(0x212)][_0x125d63(0x1b5)],_0x1816bf[_0x125d63(0x212)]['error']=function(){}),_0x35f79d&&typeof _0x35f79d[_0x125d63(0x26b)]==_0x125d63(0x242)&&(_0x4fa330[_0x125d63(0x26b)]=_0x35f79d['length']);}catch{}finally{_0x839c62&&(_0x1816bf[_0x125d63(0x212)]['error']=_0x839c62);}if(_0x4fa330[_0x125d63(0x251)]===_0x125d63(0x242)||_0x4fa330['type']===_0x125d63(0x207)){if(isNaN(_0x4fa330[_0x125d63(0x1e3)]))_0x4fa330[_0x125d63(0x24b)]=!0x0,delete _0x4fa330[_0x125d63(0x1e3)];else switch(_0x4fa330[_0x125d63(0x1e3)]){case Number['POSITIVE_INFINITY']:_0x4fa330[_0x125d63(0x24f)]=!0x0,delete _0x4fa330[_0x125d63(0x1e3)];break;case Number[_0x125d63(0x24a)]:_0x4fa330[_0x125d63(0x273)]=!0x0,delete _0x4fa330['value'];break;case 0x0:this[_0x125d63(0x1dd)](_0x4fa330[_0x125d63(0x1e3)])&&(_0x4fa330['negativeZero']=!0x0);break;}}else _0x4fa330['type']===_0x125d63(0x1b2)&&typeof _0x35f79d[_0x125d63(0x247)]==_0x125d63(0x22d)&&_0x35f79d[_0x125d63(0x247)]&&_0x4fa330[_0x125d63(0x247)]&&_0x35f79d[_0x125d63(0x247)]!==_0x4fa330[_0x125d63(0x247)]&&(_0x4fa330[_0x125d63(0x1fa)]=_0x35f79d[_0x125d63(0x247)]);}[_0x298e48(0x1dd)](_0xde1ebf){var _0xa08b32=_0x298e48;return 0x1/_0xde1ebf===Number[_0xa08b32(0x24a)];}[_0x298e48(0x24d)](_0x2d0295){var _0x217ab2=_0x298e48;!_0x2d0295[_0x217ab2(0x21f)]||!_0x2d0295[_0x217ab2(0x21f)]['length']||_0x2d0295[_0x217ab2(0x251)]==='array'||_0x2d0295[_0x217ab2(0x251)]===_0x217ab2(0x198)||_0x2d0295[_0x217ab2(0x251)]==='Set'||_0x2d0295['props'][_0x217ab2(0x1bc)](function(_0x116ceb,_0x5c4118){var _0x44dfaa=_0x217ab2,_0x5cbc4a=_0x116ceb[_0x44dfaa(0x247)][_0x44dfaa(0x214)](),_0x11cdf7=_0x5c4118[_0x44dfaa(0x247)][_0x44dfaa(0x214)]();return _0x5cbc4a<_0x11cdf7?-0x1:_0x5cbc4a>_0x11cdf7?0x1:0x0;});}['_addFunctionsNode'](_0x30e0d5,_0x301612){var _0x693e3c=_0x298e48;if(!(_0x301612['noFunctions']||!_0x30e0d5[_0x693e3c(0x21f)]||!_0x30e0d5['props']['length'])){for(var _0x27a234=[],_0xdf8302=[],_0x4ce7c4=0x0,_0x56e574=_0x30e0d5[_0x693e3c(0x21f)]['length'];_0x4ce7c4<_0x56e574;_0x4ce7c4++){var _0x6a07a9=_0x30e0d5[_0x693e3c(0x21f)][_0x4ce7c4];_0x6a07a9[_0x693e3c(0x251)]===_0x693e3c(0x1b2)?_0x27a234['push'](_0x6a07a9):_0xdf8302[_0x693e3c(0x1d2)](_0x6a07a9);}if(!(!_0xdf8302[_0x693e3c(0x26b)]||_0x27a234['length']<=0x1)){_0x30e0d5['props']=_0xdf8302;var _0x296461={'functionsNode':!0x0,'props':_0x27a234};this[_0x693e3c(0x233)](_0x296461,_0x301612),this['_setNodeLabel'](_0x296461,_0x301612),this[_0x693e3c(0x254)](_0x296461),this[_0x693e3c(0x269)](_0x296461,_0x301612),_0x296461['id']+='\\x20f',_0x30e0d5[_0x693e3c(0x21f)]['unshift'](_0x296461);}}}[_0x298e48(0x249)](_0x2c871f,_0x3eb283){}[_0x298e48(0x254)](_0x2ab315){}[_0x298e48(0x1c5)](_0x280216){var _0x5c0cdd=_0x298e48;return Array[_0x5c0cdd(0x1ff)](_0x280216)||typeof _0x280216==_0x5c0cdd(0x1f3)&&this[_0x5c0cdd(0x19e)](_0x280216)==='[object\\x20Array]';}[_0x298e48(0x269)](_0x5cb6eb,_0x354173){}['_cleanNode'](_0x3060a6){var _0x684c4d=_0x298e48;delete _0x3060a6[_0x684c4d(0x271)],delete _0x3060a6[_0x684c4d(0x243)],delete _0x3060a6[_0x684c4d(0x205)];}[_0x298e48(0x1a7)](_0x353600,_0x32f555){}}let _0x3503d2=new _0x937f4a(),_0x288fab={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x84cd93={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4936d6(_0x229e1f,_0x4760e8,_0x2c5853,_0x1ba126,_0x33af6f,_0x118904){var _0x4ff6f2=_0x298e48;let _0x21ed1e,_0x52f8dd;try{_0x52f8dd=_0x1ae37a(),_0x21ed1e=_0x4f5b38[_0x4760e8],!_0x21ed1e||_0x52f8dd-_0x21ed1e['ts']>0x1f4&&_0x21ed1e['count']&&_0x21ed1e[_0x4ff6f2(0x1b7)]/_0x21ed1e['count']<0x64?(_0x4f5b38[_0x4760e8]=_0x21ed1e={'count':0x0,'time':0x0,'ts':_0x52f8dd},_0x4f5b38[_0x4ff6f2(0x20d)]={}):_0x52f8dd-_0x4f5b38[_0x4ff6f2(0x20d)]['ts']>0x32&&_0x4f5b38[_0x4ff6f2(0x20d)][_0x4ff6f2(0x204)]&&_0x4f5b38['hits'][_0x4ff6f2(0x1b7)]/_0x4f5b38[_0x4ff6f2(0x20d)][_0x4ff6f2(0x204)]<0x64&&(_0x4f5b38[_0x4ff6f2(0x20d)]={});let _0x2d562b=[],_0xc10bf5=_0x21ed1e[_0x4ff6f2(0x219)]||_0x4f5b38[_0x4ff6f2(0x20d)][_0x4ff6f2(0x219)]?_0x84cd93:_0x288fab,_0x567d13=_0x4801f7=>{var _0x1f23a9=_0x4ff6f2;let _0x21d105={};return _0x21d105['props']=_0x4801f7[_0x1f23a9(0x21f)],_0x21d105[_0x1f23a9(0x1cd)]=_0x4801f7['elements'],_0x21d105[_0x1f23a9(0x258)]=_0x4801f7[_0x1f23a9(0x258)],_0x21d105[_0x1f23a9(0x1e2)]=_0x4801f7[_0x1f23a9(0x1e2)],_0x21d105['autoExpandLimit']=_0x4801f7[_0x1f23a9(0x261)],_0x21d105['autoExpandMaxDepth']=_0x4801f7[_0x1f23a9(0x20c)],_0x21d105['sortProps']=!0x1,_0x21d105[_0x1f23a9(0x1b4)]=!_0x225e5f,_0x21d105[_0x1f23a9(0x1a0)]=0x1,_0x21d105['level']=0x0,_0x21d105[_0x1f23a9(0x19b)]=_0x1f23a9(0x1da),_0x21d105['rootExpression']='root_exp',_0x21d105[_0x1f23a9(0x23d)]=!0x0,_0x21d105[_0x1f23a9(0x223)]=[],_0x21d105[_0x1f23a9(0x1c8)]=0x0,_0x21d105['resolveGetters']=!0x0,_0x21d105[_0x1f23a9(0x279)]=0x0,_0x21d105[_0x1f23a9(0x21c)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x21d105;};for(var _0x16bd2d=0x0;_0x16bd2d<_0x33af6f[_0x4ff6f2(0x26b)];_0x16bd2d++)_0x2d562b[_0x4ff6f2(0x1d2)](_0x3503d2[_0x4ff6f2(0x218)]({'timeNode':_0x229e1f==='time'||void 0x0},_0x33af6f[_0x16bd2d],_0x567d13(_0xc10bf5),{}));if(_0x229e1f===_0x4ff6f2(0x1c9)){let _0x31c9b8=Error[_0x4ff6f2(0x276)];try{Error[_0x4ff6f2(0x276)]=0x1/0x0,_0x2d562b[_0x4ff6f2(0x1d2)](_0x3503d2[_0x4ff6f2(0x218)]({'stackNode':!0x0},new Error()[_0x4ff6f2(0x1c0)],_0x567d13(_0xc10bf5),{'strLength':0x1/0x0}));}finally{Error[_0x4ff6f2(0x276)]=_0x31c9b8;}}return{'method':_0x4ff6f2(0x1fe),'version':_0x38870e,'args':[{'ts':_0x2c5853,'session':_0x1ba126,'args':_0x2d562b,'id':_0x4760e8,'context':_0x118904}]};}catch(_0x1e7bf9){return{'method':_0x4ff6f2(0x1fe),'version':_0x38870e,'args':[{'ts':_0x2c5853,'session':_0x1ba126,'args':[{'type':'unknown','error':_0x1e7bf9&&_0x1e7bf9[_0x4ff6f2(0x1a6)]}],'id':_0x4760e8,'context':_0x118904}]};}finally{try{if(_0x21ed1e&&_0x52f8dd){let _0x1d9d80=_0x1ae37a();_0x21ed1e[_0x4ff6f2(0x204)]++,_0x21ed1e[_0x4ff6f2(0x1b7)]+=_0x472a08(_0x52f8dd,_0x1d9d80),_0x21ed1e['ts']=_0x1d9d80,_0x4f5b38[_0x4ff6f2(0x20d)]['count']++,_0x4f5b38[_0x4ff6f2(0x20d)][_0x4ff6f2(0x1b7)]+=_0x472a08(_0x52f8dd,_0x1d9d80),_0x4f5b38[_0x4ff6f2(0x20d)]['ts']=_0x1d9d80,(_0x21ed1e[_0x4ff6f2(0x204)]>0x32||_0x21ed1e[_0x4ff6f2(0x1b7)]>0x64)&&(_0x21ed1e[_0x4ff6f2(0x219)]=!0x0),(_0x4f5b38[_0x4ff6f2(0x20d)][_0x4ff6f2(0x204)]>0x3e8||_0x4f5b38[_0x4ff6f2(0x20d)][_0x4ff6f2(0x1b7)]>0x12c)&&(_0x4f5b38[_0x4ff6f2(0x20d)][_0x4ff6f2(0x219)]=!0x0);}}catch{}}}return _0x4936d6;}((_0x1f6814,_0x2df50f,_0x45276d,_0x431c1d,_0x183d9b,_0x39d1f4,_0x338b81,_0x4ae1c0,_0x5dc0fd,_0x2e29ab)=>{var _0x81e640=_0xd7bbed;if(_0x1f6814['_console_ninja'])return _0x1f6814['_console_ninja'];if(!Y(_0x1f6814,_0x4ae1c0,_0x183d9b))return _0x1f6814[_0x81e640(0x20f)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x1f6814['_console_ninja'];let _0x5b4040=W(_0x1f6814),_0x3c836d=_0x5b4040[_0x81e640(0x191)],_0x52dbf6=_0x5b4040[_0x81e640(0x25b)],_0xcde4e0=_0x5b4040[_0x81e640(0x1cc)],_0x47e88b={'hits':{},'ts':{}},_0x4b5df0=Q(_0x1f6814,_0x5dc0fd,_0x47e88b,_0x39d1f4),_0x1022c6=_0x30053e=>{_0x47e88b['ts'][_0x30053e]=_0x52dbf6();},_0x275704=(_0x315ec2,_0x37450d)=>{var _0x2db88b=_0x81e640;let _0x44ad9c=_0x47e88b['ts'][_0x37450d];if(delete _0x47e88b['ts'][_0x37450d],_0x44ad9c){let _0x538b3d=_0x3c836d(_0x44ad9c,_0x52dbf6());_0x856e0f(_0x4b5df0(_0x2db88b(0x1b7),_0x315ec2,_0xcde4e0(),_0x5ccd65,[_0x538b3d],_0x37450d));}},_0x36d77b=_0x4c45e9=>_0x47f265=>{var _0x395d4b=_0x81e640;try{_0x1022c6(_0x47f265),_0x4c45e9(_0x47f265);}finally{_0x1f6814['console'][_0x395d4b(0x1b7)]=_0x4c45e9;}},_0xca8894=_0x2f5344=>_0x5457a9=>{var _0x7a6bd6=_0x81e640;try{let [_0x51c915,_0x5eeac4]=_0x5457a9['split'](_0x7a6bd6(0x1d7));_0x275704(_0x5eeac4,_0x51c915),_0x2f5344(_0x51c915);}finally{_0x1f6814[_0x7a6bd6(0x212)][_0x7a6bd6(0x267)]=_0x2f5344;}};_0x1f6814['_console_ninja']={'consoleLog':(_0x3d2ae5,_0x4f8737)=>{var _0x3f4339=_0x81e640;_0x1f6814[_0x3f4339(0x212)][_0x3f4339(0x1fe)]['name']!==_0x3f4339(0x1c1)&&_0x856e0f(_0x4b5df0('log',_0x3d2ae5,_0xcde4e0(),_0x5ccd65,_0x4f8737));},'consoleTrace':(_0x39a59a,_0x5c1eaf)=>{var _0x1a47e1=_0x81e640;_0x1f6814['console'][_0x1a47e1(0x1fe)]['name']!==_0x1a47e1(0x19d)&&_0x856e0f(_0x4b5df0(_0x1a47e1(0x1c9),_0x39a59a,_0xcde4e0(),_0x5ccd65,_0x5c1eaf));},'consoleTime':()=>{var _0x44ced9=_0x81e640;_0x1f6814['console'][_0x44ced9(0x1b7)]=_0x36d77b(_0x1f6814[_0x44ced9(0x212)][_0x44ced9(0x1b7)]);},'consoleTimeEnd':()=>{var _0x29d864=_0x81e640;_0x1f6814[_0x29d864(0x212)]['timeEnd']=_0xca8894(_0x1f6814[_0x29d864(0x212)][_0x29d864(0x267)]);},'autoLog':(_0x566095,_0xf6ad24)=>{var _0x3b4342=_0x81e640;_0x856e0f(_0x4b5df0(_0x3b4342(0x1fe),_0xf6ad24,_0xcde4e0(),_0x5ccd65,[_0x566095]));},'autoLogMany':(_0x174570,_0x2a578e)=>{_0x856e0f(_0x4b5df0('log',_0x174570,_0xcde4e0(),_0x5ccd65,_0x2a578e));},'autoTrace':(_0x9836af,_0x37c601)=>{var _0x3d9c00=_0x81e640;_0x856e0f(_0x4b5df0(_0x3d9c00(0x1c9),_0x37c601,_0xcde4e0(),_0x5ccd65,[_0x9836af]));},'autoTraceMany':(_0x18cc92,_0x2a8e10)=>{_0x856e0f(_0x4b5df0('trace',_0x18cc92,_0xcde4e0(),_0x5ccd65,_0x2a8e10));},'autoTime':(_0x5525f2,_0x25c1ce,_0x45d182)=>{_0x1022c6(_0x45d182);},'autoTimeEnd':(_0x117397,_0x3289dd,_0x1be123)=>{_0x275704(_0x3289dd,_0x1be123);},'coverage':_0x310bcd=>{_0x856e0f({'method':'coverage','version':_0x39d1f4,'args':[{'id':_0x310bcd}]});}};let _0x856e0f=J(_0x1f6814,_0x2df50f,_0x45276d,_0x431c1d,_0x183d9b,_0x2e29ab),_0x5ccd65=_0x1f6814[_0x81e640(0x217)];return _0x1f6814[_0x81e640(0x20f)];})(globalThis,'127.0.0.1',_0xd7bbed(0x227),"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.227\\\\node_modules",_0xd7bbed(0x230),_0xd7bbed(0x22c),_0xd7bbed(0x241),_0xd7bbed(0x1c7),_0xd7bbed(0x263),_0xd7bbed(0x216));`);
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

// app/routes/api.user.tsx
var api_user_exports = {};
__export(api_user_exports, {
  action: () => action4,
  loader: () => loader7
});
var loader7 = async ({ request }) => ({ users: await getUsers() }), action4 = async ({ request }) => {
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
  loader: () => loader8
});
var loader8 = async ({ request }) => {
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
  loader: () => loader9
});
var import_node6 = require("@remix-run/node"), loader9 = async () => (0, import_node6.json)(
  { status: "ok" },
  {
    status: 200
  }
);

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index2,
  loader: () => loader10,
  meta: () => meta2
});
var import_node7 = require("@remix-run/node"), import_react34 = require("react"), import_react35 = require("@remix-run/react");
var import_Editor2 = __toESM(require_Editor());

// app/components/Sidebar.tsx
var import_react31 = require("@remix-run/react"), import_react32 = require("react");
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function Sidebar({ user, text }) {
  var _a, _b, _c, _d, _e;
  let [openMenu, setOpenMenu] = (0, import_react32.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex flex-col border-r", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: " flex px-2 py-3 capitalize bg-white dark:text-white dark:bg-gray-600 text-lg font-semibold items-center  gap-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { onClick: () => setOpenMenu((p) => !p), className: "block md:hidden", children: openMenu ? /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Crossburger, {}, void 0, !1, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 24,
        columnNumber: 40
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Hamburger, {}, void 0, !1, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 24,
        columnNumber: 24
      }, this) }, void 0, !1, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      toolname
    ] }, void 0, !0, {
      fileName: "app/components/Sidebar.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "div",
      {
        className: `flex flex-col bg-white dark:text-white  dark:bg-[#54606e] overflow-y-auto overflow-x-hidden max-h-[100vh] transition-all -translate-x-full z-30 ${openMenu ? "block translate-x-0" : ""} min-h-[100vh] w-[260px] md:translate-x-0`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "px-2 flex gap-2 flex-col  mb-3 pb-2 mt-2 ", children: [
            ((user == null ? void 0 : user.role) === "ADMIN" || (user == null ? void 0 : user.role) === "REVIEWER") && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
              import_react31.Link,
              {
                to: `/admin/user?session=${user == null ? void 0 : user.username}`,
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
                lineNumber: 35,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(TextInfo, { children: [
              "User : ",
              user == null ? void 0 : user.username.split("@")[0]
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(TextInfo, { children: [
              "text id :",
              text == null ? void 0 : text.id
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 43,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(TextInfo, { children: [
              "Batch : ",
              text == null ? void 0 : text.batch
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 44,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(TextInfo, { children: [
              "Approved : ",
              (_a = user == null ? void 0 : user.text) == null ? void 0 : _a.length
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 45,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(TextInfo, { children: [
              "Rejected :",
              (_b = user == null ? void 0 : user.rejected_list) == null ? void 0 : _b.length
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(TextInfo, { children: [
              "Reviewed : ",
              (_c = user == null ? void 0 : user.text.filter((r) => r.reviewed)) == null ? void 0 : _c.length
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex-1 border-t", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "text-sm mb-2 font-bold pl-2", children: "History" }, void 0, !1, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 52,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex flex-col gap-2 max-h-fit overflow-y-auto", children: [
              (_d = user == null ? void 0 : user.rejected_list) == null ? void 0 : _d.map((text2) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                HistoryItem,
                {
                  user,
                  id: text2 == null ? void 0 : text2.id,
                  onClick: () => setOpenMenu(!1),
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Cross, {}, void 0, !1, {
                    fileName: "app/components/Sidebar.tsx",
                    lineNumber: 60,
                    columnNumber: 23
                  }, this)
                },
                text2.id + "-rejected",
                !1,
                {
                  fileName: "app/components/Sidebar.tsx",
                  lineNumber: 55,
                  columnNumber: 15
                },
                this
              )),
              (_e = user == null ? void 0 : user.text) == null ? void 0 : _e.map((text2) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                HistoryItem,
                {
                  user,
                  id: text2 == null ? void 0 : text2.id,
                  onClick: () => setOpenMenu(!1),
                  disabled: text2 == null ? void 0 : text2.reviewed,
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex items-center justify-between flex-1", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Tick, {}, void 0, !1, {
                      fileName: "app/components/Sidebar.tsx",
                      lineNumber: 73,
                      columnNumber: 21
                    }, this),
                    (text2 == null ? void 0 : text2.reviewed) && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { children: "reviewed" }, void 0, !1, {
                      fileName: "app/components/Sidebar.tsx",
                      lineNumber: 74,
                      columnNumber: 40
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/Sidebar.tsx",
                    lineNumber: 72,
                    columnNumber: 19
                  }, this)
                },
                text2.id + "-accepted",
                !1,
                {
                  fileName: "app/components/Sidebar.tsx",
                  lineNumber: 65,
                  columnNumber: 15
                },
                this
              ))
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 53,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 28,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Sidebar.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
var Sidebar_default = Sidebar;

// app/routes/_index.tsx
var import_remix_utils2 = require("remix-utils");

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
var import_react33 = require("react"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function ActiveUser({ active, setActive }) {
  let idle = useIdle(5e3), timer = null;
  return (0, import_react33.useEffect)(() => (idle || (timer = setInterval(() => {
    setActive((prev) => prev + 1);
  }, 1e3)), () => clearInterval(timer)), [idle]), /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: idle ? "idle" : "" }, void 0, !1, {
      fileName: "app/components/ActiveUser.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("label", { children: [
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
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), loader10 = async ({ request }) => {
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
  var _a, _b, _c;
  let fetcher = (0, import_react35.useFetcher)(), data = (0, import_react35.useLoaderData)(), text = ((_a = data == null ? void 0 : data.text) == null ? void 0 : _a.original_text.trim()) || "", user = data.user, insertHTML = insertHtmlOnText_default(text), newText = checkUnknown_default(insertHTML), editor = useEditorTiptap(newText), socket = useSocket(), revalidate = (0, import_react35.useRevalidator)(), [activeTime, setActiveTime] = (0, import_react34.useState)(0);
  (0, import_react34.useEffect)(() => {
    socket && (socket.on("change-allow", (data2) => {
      data2.user.id === user.id && revalidate.revalidate();
    }), socket.on("reviewed", (data2) => {
      data2.user.id === user.id && revalidate.revalidate();
    }));
  }, [socket]);
  let saveText2 = async () => {
    let duration = activeTime, modified_text = editor.getText(), id = data.text.id;
    fetcher.submit(
      { id, modified_text, userId: user.id, duration },
      { method: "POST", action: "/api/text" }
    ), socket == null || socket.emit("text-status-changed", { user }), setActiveTime(0);
  }, undoTask = async () => {
    var _a2;
    let text2 = checkUnknown_default(insertHtmlOnText_default((_a2 = data == null ? void 0 : data.text) == null ? void 0 : _a2.original_text));
    editor == null || editor.commands.setContent(text2);
  }, rejectTask = async () => {
    let id = data.text.id;
    fetcher.submit(
      { id, userId: user.id, _action: "reject" },
      { method: "PATCH", action: "/api/text" }
    ), socket == null || socket.emit("text-status-changed", { user }), setActiveTime(0);
  }, isButtonDisabled = !data.text || data.text.reviewed;
  return data.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { children: data.error }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 96,
    columnNumber: 26
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex flex-col md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Sidebar_default, { user: data.user, text: data.text }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex-1 flex items-center flex-col md:mt-[10vh] ", children: [
      ((_c = (_b = data.user) == null ? void 0 : _b.rejected_list) == null ? void 0 : _c.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "text-red-500 flex items-center gap-2 font-bold", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
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
            lineNumber: 104,
            columnNumber: 13
          },
          this
        ),
        "SOME OF YOUR WORK IS REJECTED"
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this),
      data.text ? /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "fixed bottom-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex items-center justify-between opacity-75 text-sm font-bold px-2 capitalize pt-1 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(ActiveUser, { active: activeTime, setActive: setActiveTime }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 126,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { children: "transcript" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 127,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 125,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_remix_utils2.ClientOnly, { fallback: null, children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_Editor2.default, { editor }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 130,
          columnNumber: 22
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this),
        !editor && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { children: "loading..." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 132,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 124,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "fixed top-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm text-center py-4", children: [
        !user.allow_assign && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "font-bold first-letter:uppercase first-letter:text-red-400", children: "A single work must have been rejected 3 times or more . please contact admin ." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 115,
          columnNumber: 15
        }, this),
        "Thank you . your work is complete ! \u{1F60A}\u{1F60A}\u{1F60A}",
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 121,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this),
      data.text && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex gap-2 fixed bottom-0 justify-center ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
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
            lineNumber: 152,
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
      lineNumber: 101,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 98,
    columnNumber: 5
  }, this);
}

// app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => admin_default,
  loader: () => loader11
});
var import_react40 = require("react");

// app/components/admin/Header.tsx
var import_react_router_dom2 = require("react-router-dom");

// app/components/Dropdowns/DropdownUser.tsx
var import_react36 = require("react"), import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), DropdownUser = ({ user }) => {
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
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
    "div",
    {
      ref: trigger,
      onClick: () => setDropdownOpen(!dropdownOpen),
      className: "flex items-center gap-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("span", { className: "hidden text-right lg:block", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("span", { className: "block text-sm font-medium text-black dark:text-white", children: user.username }, void 0, !1, {
            fileName: "app/components/Dropdowns/DropdownUser.tsx",
            lineNumber: 45,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("span", { className: "block text-xs", children: user.role }, void 0, !1, {
            fileName: "app/components/Dropdowns/DropdownUser.tsx",
            lineNumber: 48,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Dropdowns/DropdownUser.tsx",
          lineNumber: 44,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
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
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function Progress({ current, max }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "div",
    {
      className: "tooltip tooltip-bottom flex flex-col",
      "data-tip": `${current} / ${max}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "self-start", children: "Progress" }, void 0, !1, {
          fileName: "app/components/Progress.tsx",
          lineNumber: 12,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
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
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime"), Header = (props) => {
  let { progress, user } = (0, import_react37.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("header", { className: "sticky top-0 z-10 flex w-full bg-white dark:bg-slate-600  drop-shadow-1 shadow-lg dark:bg-boxdark dark:drop-shadow-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex items-center gap-2 sm:gap-4 lg:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        "button",
        {
          "aria-controls": "sidebar",
          onClick: (e) => {
            e.stopPropagation(), props.setSidebarOpen(!props.sidebarOpen);
          },
          className: "z-10 block rounded-sm   bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Hamburger, {}, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react_router_dom2.Link, { className: "block flex-shrink-0 lg:hidden", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Progress_default, { max: progress.total, current: progress.reviewed }, void 0, !1, {
      fileName: "app/components/admin/Header.tsx",
      lineNumber: 40,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/Header.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex items-center gap-3 2xsm:gap-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(DropdownUser_default, { user }, void 0, !1, {
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
var import_react41 = require("@remix-run/react");

// app/components/admin/Sidebar.tsx
var import_react38 = require("react"), import_react39 = require("@remix-run/react");
var import_bi2 = require("react-icons/bi");
var import_fi3 = require("react-icons/fi"), import_ai2 = require("react-icons/ai"), import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function Sidebar2({ sidebarOpen, setSidebarOpen }) {
  let sidebar = (0, import_react38.useRef)(null), trigger = (0, import_react38.useRef)(null), { pathname } = (0, import_react39.useLocation)(), { user } = (0, import_react39.useLoaderData)(), url = "/?session=" + (user == null ? void 0 : user.username);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
    "aside",
    {
      ref: sidebar,
      className: ` absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden text-white bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react39.NavLink, { to: url, children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h3", { className: "mb-2 text-2xl pt-4 font-semibold text-bodydark2 capitalize", children: toolname }, void 0, !1, {
            fileName: "app/components/admin/Sidebar.tsx",
            lineNumber: 28,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/admin/Sidebar.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            "button",
            {
              ref: trigger,
              onClick: () => setSidebarOpen(!sidebarOpen),
              "aria-controls": "sidebar",
              "aria-expanded": sidebarOpen,
              className: "block lg:hidden",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Hamburger, {}, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("nav", { className: "mt-5 py-4 px-2 lg:mt-9 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "text-xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            import_react39.NavLink,
            {
              to: `/admin/metabase?session=${user.username}`,
              className: `group relative flex mb-3 items-center gap-2.5 rounded-sm py-2  font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("metabase") && "bg-slate-600 dark:bg-meta-4 "}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_bi2.BiSolidDashboard, {}, void 0, !1, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h3", { className: "mb-4 text-sm font-semibold text-gray-400", children: "MENU" }, void 0, !1, {
            fileName: "app/components/admin/Sidebar.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("ul", { className: "mt-4 mb-5.5 flex flex-col gap-2.5 pl-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              import_react39.NavLink,
              {
                to: "/admin/user?session=" + user.username,
                className: ({ isActive }) => "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " + (isActive && "!text-white bg-slate-600 dark:bg-meta-4"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_fi3.FiUsers, {}, void 0, !1, {
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              import_react39.NavLink,
              {
                to: "/admin/text?session=" + user.username,
                className: ({ isActive }) => "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " + (isActive && "!text-white  bg-slate-600 dark:bg-meta-4"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_ai2.AiOutlineFileText, {}, void 0, !1, {
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
var import_node8 = require("@remix-run/node");
var import_react42 = require("@remix-run/react"), import_jsx_dev_runtime31 = require("react/jsx-dev-runtime"), loader11 = async ({ request }) => {
  let session = new URL(request.url).searchParams.get("session");
  if (!session)
    return (0, import_node8.redirect)("/error");
  let user = await getUser(session, !0), progress = await getProgress();
  return (0, import_node8.json)({
    user,
    progress
  });
}, DefaultLayout = () => {
  let [sidebarOpen, setSidebarOpen] = (0, import_react40.useState)(!1), { pathname } = (0, import_react41.useLocation)(), { user } = (0, import_react41.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "dark:bg-boxdark-2 dark:text-bodydark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex h-screen overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Sidebar_default2, { sidebarOpen, setSidebarOpen }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Header_default, { sidebarOpen, setSidebarOpen }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
        "div",
        {
          className: `mx-auto max-w-screen-2xl  ${pathname.includes("metabase") ? "p-0" : " p-4 md:p-6 2xl:p-10"}`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react41.Outlet, { context: user }, void 0, !1, {
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
  let error2 = (0, import_react42.useRouteError)();
  return (0, import_react42.isRouteErrorResponse)(error2) ? /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h1", { children: "Oops" }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("p", { children: [
      "Status: ",
      error2.status
    ] }, void 0, !0, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("p", { children: error2.data.message }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 52,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h1", { children: "Uh oh ..." }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("p", { children: "Something went wrong." }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("pre", { children: "Unknown error" }, void 0, !1, {
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
  loader: () => loader12
});
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), loader12 = () => null;
function error() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: "error no session ,require session to continue" }, void 0, !1, {
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
  loader: () => loader13
});
var import_react44 = require("@tiptap/react"), import_starter_kit2 = __toESM(require("@tiptap/starter-kit")), import_react45 = require("react");

// app/components/demo/Sidebar.tsx
var import_react43 = require("react");
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
function Sidebar3({ user, text, setHistory }) {
  var _a, _b, _c, _d;
  let [openMenu, setOpenMenu] = (0, import_react43.useState)(!1);
  function SidebarHeader() {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex bg-[#384451] px-2 py-3 items-center justify-between md:hidden ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: "About" }, void 0, !1, {
        fileName: "app/components/demo/Sidebar.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "cursor-pointer p-2", onClick: () => setOpenMenu(!1), children: "x" }, void 0, !1, {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
      "div",
      {
        className: " flex px-2 py-3 text-white bg-gray-600 text-lg font-semibold items-center  gap-2 ",
        onClick: () => setOpenMenu(!0),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Hamburger, {}, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
      "div",
      {
        className: `flex flex-col text-white bg-[#54606e] overflow-y-auto overflow-x-hidden max-h-[100vh] transition-all -translate-x-full z-30 ${openMenu ? "block translate-x-0" : ""} min-h-[100vh] w-[260px] md:translate-x-0`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "px-2 flex gap-2 flex-col border-b-2 border-b-[#384451] mb-3 pb-2 mt-2 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(SidebarHeader, {}, void 0, !1, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(TextInfo, { children: [
              "User : ",
              user == null ? void 0 : user.username
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 43,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(TextInfo, { children: [
              "text id :",
              text == null ? void 0 : text.id
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 44,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(TextInfo, { children: [
              "Batch : ",
              text == null ? void 0 : text.batch
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 45,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(TextInfo, { children: [
              "Approved : ",
              (_a = user == null ? void 0 : user.text) == null ? void 0 : _a.length
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(TextInfo, { children: [
              "Rejected :",
              (_b = user == null ? void 0 : user.rejected_list) == null ? void 0 : _b.length
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(TextInfo, { children: [
              "Ignored : ",
              (_c = user == null ? void 0 : user.ignored_list) == null ? void 0 : _c.length
            ] }, void 0, !0, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 48,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(TextInfo, { children: [
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "text-sm mb-2 font-bold", children: "History" }, void 0, !1, {
              fileName: "app/components/demo/Sidebar.tsx",
              lineNumber: 54,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex flex-col gap-2 max-h-[30vh] overflow-y-auto", children: [
              user && (user.rejected_list || user.text) && ((user == null ? void 0 : user.rejected_list) || []).sort(sortUpdate_reviewed).map((text2) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
                DemoHistoryItem,
                {
                  user,
                  id: text2 == null ? void 0 : text2.id,
                  onClick: () => {
                    setOpenMenu(!1), setHistory(text2.id);
                  },
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Cross, {}, void 0, !1, {
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
              ((user == null ? void 0 : user.text) || []).sort(sortUpdate_reviewed).map((text2) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
                DemoHistoryItem,
                {
                  user,
                  id: text2 == null ? void 0 : text2.id,
                  onClick: () => {
                    setOpenMenu(!1), setHistory(text2.id);
                  },
                  disabled: text2 == null ? void 0 : text2.reviewed,
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex items-center justify-between flex-1", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Tick, {}, void 0, !1, {
                      fileName: "app/components/demo/Sidebar.tsx",
                      lineNumber: 86,
                      columnNumber: 23
                    }, this),
                    (text2 == null ? void 0 : text2.reviewed) && /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("span", { children: "reviewed" }, void 0, !1, {
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
var import_Editor3 = __toESM(require_Editor()), import_react46 = require("@remix-run/react");
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime"), loader13 = async ({ request }) => {
  let url = new URL(request.url);
  return { text: await db.text.findMany({
    take: 10,
    select: { original_text: !0, id: !0 }
  }) };
};
function DemoPage() {
  let { text } = (0, import_react46.useLoaderData)(), [text_Array, setTextArray] = (0, import_react45.useState)(text), [user, setUser] = (0, import_react45.useState)({
    username: "demo",
    role: "USER",
    text: [],
    rejected_list: [],
    ignored_list: []
  }), [history, setHistory] = (0, import_react45.useState)(null), dialogref = (0, import_react45.useRef)(null), content = text_Array.find(
    (i) => ![...user.text, ...user.rejected_list].find((j) => j.id == i.id)
  ) || null;
  history && (content = user.text.find((i) => i.id === history) || text_Array.find((i) => i.id == history));
  let original_text = content.content || (content == null ? void 0 : content.original_text.trim()), insertHTML = insertHtmlOnText_default(original_text), setter = () => {
  }, charClick = () => {
  }, editor = (0, import_react44.useEditor)(
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex flex-col md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Sidebar_default3, { user, text, setHistory }, void 0, !1, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex-1 flex items-center flex-col md:mt-[10vh] ", children: [
      content ? /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "fixed bottom-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex items-center justify-between opacity-75 text-sm font-bold px-2 capitalize pt-1 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: "transcript" }, void 0, !1, {
            fileName: "app/routes/demo.tsx",
            lineNumber: 124,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Toggle_Modal, { className: "cursor-pointer", children: "reference" }, void 0, !1, {
            fileName: "app/routes/demo.tsx",
            lineNumber: 126,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Modal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
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
        editor ? /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_Editor3.default, { editor }, void 0, !1, {
          fileName: "app/routes/demo.tsx",
          lineNumber: 137,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: "loading..." }, void 0, !1, {
          fileName: "app/routes/demo.tsx",
          lineNumber: 135,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: "Thank you . your work is complete ! \u{1F60A}\u{1F60A}\u{1F60A}" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 120,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex gap-2 fixed bottom-0 justify-center ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
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
var assets_manifest_default = { entry: { module: "/build/entry.client-AN7T7EHS.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-SZGQBB4K.js", "/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-UENAGXQR.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-R46YOMSK.js", imports: ["/build/_shared/chunk-YOH2CPLV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-3NT72KYP.js", imports: ["/build/_shared/chunk-C7CYVNKI.js", "/build/_shared/chunk-BRTVMTPN.js", "/build/_shared/chunk-UUBW257Y.js", "/build/_shared/chunk-RUKEUQLF.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-R4SWNAUA.js", imports: ["/build/_shared/chunk-UUBW257Y.js", "/build/_shared/chunk-F2P733AV.js", "/build/_shared/chunk-FXCVAPJI.js", "/build/_shared/chunk-RUKEUQLF.js", "/build/_shared/chunk-QX4QACTM.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/admin.metabase": { id: "routes/admin.metabase", parentId: "routes/admin", path: "metabase", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.metabase-2NUQ4KYQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.text": { id: "routes/admin.text", parentId: "routes/admin", path: "text", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.text-2FATGTWR.js", imports: ["/build/_shared/chunk-TQEC4IOH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.user": { id: "routes/admin.user", parentId: "routes/admin", path: "user", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.user-2M5PFGU2.js", imports: ["/build/_shared/chunk-VW7BFLMU.js", "/build/_shared/chunk-YOH2CPLV.js", "/build/_shared/chunk-TQEC4IOH.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin_.user.review.$slug": { id: "routes/admin_.user.review.$slug", parentId: "root", path: "admin/user/review/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/admin_.user.review.$slug-GCAKSJDA.js", imports: ["/build/_shared/chunk-4SHR5HQ5.js", "/build/_shared/chunk-C7CYVNKI.js", "/build/_shared/chunk-BRTVMTPN.js", "/build/_shared/chunk-UUBW257Y.js", "/build/_shared/chunk-RUKEUQLF.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.text": { id: "routes/api.text", parentId: "root", path: "api/text", index: void 0, caseSensitive: void 0, module: "/build/routes/api.text-A4DRPZQ7.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.text.$version": { id: "routes/api.text.$version", parentId: "routes/api.text", path: ":version", index: void 0, caseSensitive: void 0, module: "/build/routes/api.text.$version-D5R6AXVU.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.upload": { id: "routes/api.upload", parentId: "root", path: "api/upload", index: void 0, caseSensitive: void 0, module: "/build/routes/api.upload-NKI3ERUQ.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.user": { id: "routes/api.user", parentId: "root", path: "api/user", index: void 0, caseSensitive: void 0, module: "/build/routes/api.user-7BYWHH7L.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.user.$username": { id: "routes/api.user.$username", parentId: "routes/api.user", path: ":username", index: void 0, caseSensitive: void 0, module: "/build/routes/api.user.$username-K3HPPKXU.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.word": { id: "routes/api.word", parentId: "root", path: "api/word", index: void 0, caseSensitive: void 0, module: "/build/routes/api.word-JTVRFTHW.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demo": { id: "routes/demo", parentId: "root", path: "demo", index: void 0, caseSensitive: void 0, module: "/build/routes/demo-7TTKROLN.js", imports: ["/build/_shared/chunk-4SHR5HQ5.js", "/build/_shared/chunk-BRTVMTPN.js", "/build/_shared/chunk-UUBW257Y.js", "/build/_shared/chunk-VW7BFLMU.js", "/build/_shared/chunk-RUKEUQLF.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/error": { id: "routes/error", parentId: "root", path: "error", index: void 0, caseSensitive: void 0, module: "/build/routes/error-VKEWX2GE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/health": { id: "routes/health", parentId: "root", path: "health", index: void 0, caseSensitive: void 0, module: "/build/routes/health-WRGBPVEM.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "ddd90fe0", hmr: { runtime: "/build/_shared\\chunk-UENAGXQR.js", timestamp: 1695892810096 }, url: "/build/manifest-DDD90FE0.js" };

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
