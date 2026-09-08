import { b as require_jsx_runtime, v as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useCurrentUserState, n as SiteShell, r as signIn, t as Mark } from "./site-shell-C75GTTV6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-C-kVUSXk.js
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	const { user, isPending } = useCurrentUserState();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid flex-1 place-items-center px-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-24 w-full max-w-sm animate-pulse rounded-xl bg-surface" })
	}) });
	if (user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid flex-1 place-items-center px-5 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid size-14 place-items-center rounded-full shadow-tray",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 font-display text-3xl tracking-tight italic",
					children: "Enter Xircle"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: "Sign in with X to join a circle."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => void signIn("grok-x", { callbackURL: "/" }),
					className: "mt-8 inline-flex h-11 w-full items-center justify-center gap-2.5 rounded-full bg-accent px-5 text-sm font-medium text-accent-fg transition-[transform,opacity] duration-quick ease-out-smooth hover:opacity-90 active:scale-[0.96]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XMark, {}), "Continue with X"]
				})
			]
		})
	}) });
}
function XMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className: "size-4 fill-current",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.725-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
	});
}
//#endregion
export { Login as component };
