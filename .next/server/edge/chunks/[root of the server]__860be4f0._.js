(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root of the server]__860be4f0._.js", {

"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$international$2f$dist$2f$app$2f$middleware$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-international/dist/app/middleware/index.js [middleware-edge] (ecmascript)");
;
const I18nMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$international$2f$dist$2f$app$2f$middleware$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createI18nMiddleware"])({
    locales: [
        'en',
        'fr'
    ],
    defaultLocale: 'fr',
    urlMappingStrategy: 'redirect' // or 'rewrite' or 'redirect'
});
function middleware(request) {
    return I18nMiddleware(request);
}
const config = {
    matcher: [
        '/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__860be4f0._.js.map