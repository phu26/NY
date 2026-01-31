(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ARViewer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$model$2d$viewer$2f$lib$2f$model$2d$viewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@google/model-viewer/lib/model-viewer.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$view$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__View$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/view.js [app-client] (ecmascript) <export default as View>");
;
var _s = __turbopack_context__.k.signature();
// @ts-nocheck
"use client";
;
;
;
const ARViewer = ({ src, poster, alt, className = "w-full h-full" })=>{
    _s();
    const viewerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ARViewer.useEffect": ()=>{
            // Optional: Log errors or status if needed
            const viewer = viewerRef.current;
            if (viewer) {
                viewer.addEventListener('error', {
                    "ARViewer.useEffect": (event)=>{
                        console.error('Model Viewer Error:', event.detail);
                    }
                }["ARViewer.useEffect"]);
            }
        }
    }["ARViewer.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("model-viewer", {
                ref: viewerRef,
                src: src,
                poster: poster,
                alt: alt,
                ar: true,
                "ar-modes": "webxr scene-viewer quick-look",
                "camera-controls": true,
                "auto-rotate": true,
                "shadow-intensity": "1",
                style: {
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'transparent'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    slot: "progress-bar"
                }, void 0, false, {
                    fileName: "[project]/components/ARViewer.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ARViewer.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>viewerRef.current?.activateAR(),
                className: "absolute bottom-4 right-4 bg-[#3F3127] text-white px-4 py-3 rounded-full flex items-center gap-2 shadow-lg hover:bg-[#5a4638] transition-all transform hover:scale-105 z-50 font-medium text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$view$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__View$3e$__["View"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/components/ARViewer.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    "View in your space"
                ]
            }, void 0, true, {
                fileName: "[project]/components/ARViewer.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ARViewer.tsx",
        lineNumber: 47,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ARViewer, "WZlWBGTTx29lA8KL541/EmcE3B8=");
_c = ARViewer;
const __TURBOPACK__default__export__ = ARViewer;
var _c;
__turbopack_context__.k.register(_c, "ARViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ARViewer.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/ARViewer.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_ARViewer_tsx_2adf6ed4._.js.map