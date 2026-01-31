module.exports = [
"[project]/components/SmoothScroll.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function SmoothScroll({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            duration: 1.2,
            easing: (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return ()=>{
            lenis.destroy();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/components/Carousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Carousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-ssr] (ecmascript) <export default as PlayCircle>");
"use client";
;
;
;
;
const slides = [
    {
        id: 1,
        title: "Cloud-like Comfort",
        description: "Experience the softness of our new cloud series.",
        image: "/carousel/slide2.png",
        bg: "bg-indigo-50",
        textColor: "text-indigo-900"
    },
    {
        id: 2,
        title: "The Modern Touch",
        description: "Sleek lines for the contemporary home.",
        image: "/carousel/slide3.png",
        bg: "bg-orange-50",
        textColor: "text-orange-900"
    },
    {
        id: 3,
        title: "Elegant Storage",
        description: "Functionality meets exquisite design.",
        image: "/carousel/slide4.png",
        bg: "bg-gray-50",
        textColor: "text-gray-900"
    },
    {
        id: 4,
        title: "Softest Dreams",
        description: "Sink into luxury after a long day.",
        image: "/carousel/slide5.png",
        bg: "bg-blue-50",
        textColor: "text-blue-900"
    }
];
function Carousel() {
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Auto-advance
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setInterval(()=>{
            setCurrent((prev)=>(prev + 1) % slides.length);
        }, 5000);
        return ()=>clearInterval(timer);
    }, []);
    const slide = slides[current];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-[80vh] overflow-hidden flex items-center justify-center bg-gray-100/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.5
                    },
                    className: `absolute inset-0 flex flex-col md:flex-row items-center justify-center p-8 md:p-20 ${slide.bg}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:w-1/2 flex flex-col justify-center items-start space-y-6 z-10 pl-4 md:pl-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    initial: {
                                        y: 20,
                                        opacity: 0
                                    },
                                    animate: {
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.2
                                    },
                                    className: `text-5xl md:text-7xl font-bold tracking-tight ${slide.textColor}`,
                                    children: slide.title
                                }, void 0, false, {
                                    fileName: "[project]/components/Carousel.tsx",
                                    lineNumber: 68,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                    initial: {
                                        y: 20,
                                        opacity: 0
                                    },
                                    animate: {
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.3
                                    },
                                    className: `text-xl md:text-2xl opacity-80 max-w-lg ${slide.textColor}`,
                                    children: slide.description
                                }, void 0, false, {
                                    fileName: "[project]/components/Carousel.tsx",
                                    lineNumber: 76,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    initial: {
                                        y: 20,
                                        opacity: 0
                                    },
                                    animate: {
                                        y: 0,
                                        opacity: 1
                                    },
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    transition: {
                                        delay: 0.4
                                    },
                                    className: "flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition text-gray-900 font-semibold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"], {
                                            size: 20,
                                            className: "fill-current"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Carousel.tsx",
                                            lineNumber: 91,
                                            columnNumber: 29
                                        }, this),
                                        "Watch Video"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Carousel.tsx",
                                    lineNumber: 84,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Carousel.tsx",
                            lineNumber: 67,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:w-1/2 h-[50vh] md:h-full relative flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
                                initial: {
                                    scale: 0.9,
                                    opacity: 0,
                                    x: 50
                                },
                                animate: {
                                    scale: 1,
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: 0.2,
                                    duration: 0.6
                                },
                                src: slide.image,
                                alt: slide.title,
                                className: "object-contain max-w-full max-h-full drop-shadow-2xl"
                            }, void 0, false, {
                                fileName: "[project]/components/Carousel.tsx",
                                lineNumber: 98,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Carousel.tsx",
                            lineNumber: 97,
                            columnNumber: 21
                        }, this)
                    ]
                }, slide.id, true, {
                    fileName: "[project]/components/Carousel.tsx",
                    lineNumber: 58,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Carousel.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-10 flex gap-3 z-20 bg-black/10 backdrop-blur-md px-4 py-2 rounded-full",
                children: slides.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrent(index),
                        className: `w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === current ? "bg-gray-900 w-8" : "bg-gray-400 hover:bg-gray-600"}`
                    }, index, false, {
                        fileName: "[project]/components/Carousel.tsx",
                        lineNumber: 113,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Carousel.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Carousel.tsx",
        lineNumber: 56,
        columnNumber: 9
    }, this);
}
}),
"[project]/components/TransformationScroll.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransformationScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function TransformationScroll() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    // Global Rotation - twist slightly during transform but land flat (0)
    const rotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.5,
        1
    ], [
        0,
        15,
        0
    ]);
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.2,
        0.8,
        1
    ], [
        0.8,
        1,
        1,
        0.9
    ]);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        50
    ]); // Move down slightly to "settle" on floor
    // Stage 1 Opacity: 0 - 25%
    const opacity1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.2,
        0.25
    ], [
        1,
        1,
        0
    ]);
    // Stage 2 Opacity: 25% - 50%
    const opacity2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.2,
        0.25,
        0.45,
        0.5
    ], [
        0,
        1,
        1,
        0
    ]);
    // Stage 3 Opacity: 50% - 75%
    const opacity3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.45,
        0.5,
        0.7,
        0.75
    ], [
        0,
        1,
        1,
        0
    ]);
    // Stage 4 Opacity: 75% - 100%
    const opacity4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.7,
        0.75,
        1
    ], [
        0,
        1,
        1
    ]);
    // Text Animation
    const textOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.8,
        1
    ], [
        0,
        1
    ]);
    const textY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.8,
        1
    ], [
        50,
        0
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "h-[200vh] relative bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "absolute top-10 text-3xl font-bold text-gray-300",
                    children: "Scroll to Transform"
                }, void 0, false, {
                    fileName: "[project]/components/TransformationScroll.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-2xl aspect-square flex items-center justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
                            style: {
                                opacity: opacity1,
                                rotate: rotation,
                                scale,
                                y
                            },
                            src: "/transform-v2/stage1.png",
                            alt: "Sofa Stage 1",
                            className: "absolute w-full h-full object-contain"
                        }, void 0, false, {
                            fileName: "[project]/components/TransformationScroll.tsx",
                            lineNumber: 42,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
                            style: {
                                opacity: opacity2,
                                rotate: rotation,
                                scale,
                                y
                            },
                            src: "/transform-v2/stage2.png",
                            alt: "Sofa Stage 2",
                            className: "absolute w-full h-full object-contain"
                        }, void 0, false, {
                            fileName: "[project]/components/TransformationScroll.tsx",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
                            style: {
                                opacity: opacity3,
                                rotate: rotation,
                                scale,
                                y
                            },
                            src: "/transform-v2/stage3.png",
                            alt: "Sofa Stage 3",
                            className: "absolute w-full h-full object-contain"
                        }, void 0, false, {
                            fileName: "[project]/components/TransformationScroll.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
                            style: {
                                opacity: opacity4,
                                rotate: rotation,
                                scale,
                                y
                            },
                            src: "/transform-v2/stage4.png",
                            alt: "Sofa Stage 4",
                            className: "absolute w-full h-full object-contain"
                        }, void 0, false, {
                            fileName: "[project]/components/TransformationScroll.tsx",
                            lineNumber: 63,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TransformationScroll.tsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: {
                        opacity: textOpacity,
                        y: textY
                    },
                    className: "absolute bottom-20 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-4xl font-bold text-gray-900 mb-2",
                            children: "Versatility Redefined"
                        }, void 0, false, {
                            fileName: "[project]/components/TransformationScroll.tsx",
                            lineNumber: 75,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: "From lounging to sleeping in one smooth motion."
                        }, void 0, false, {
                            fileName: "[project]/components/TransformationScroll.tsx",
                            lineNumber: 76,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TransformationScroll.tsx",
                    lineNumber: 71,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/TransformationScroll.tsx",
            lineNumber: 36,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/TransformationScroll.tsx",
        lineNumber: 35,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SmoothScroll$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SmoothScroll.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Carousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Carousel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TransformationScroll$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TransformationScroll.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Home() {
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Scroll hooks
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])();
    const scaleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    // Hero Parallax
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])();
    const heroY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        500
    ], [
        0,
        200
    ]);
    const heroOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        400
    ], [
        1,
        0
    ]);
    const heroScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        500
    ], [
        1,
        1.2
    ]);
    // Section 2 - Fade in
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('http://localhost:4000/api/products').then((res)=>res.json()).then((data)=>{
            setProducts(data);
            setLoading(false);
        }).catch((error)=>{
            console.error('Error fetching products:', error);
            setLoading(false);
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SmoothScroll$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "fixed top-0 left-0 right-0 h-2 bg-indigo-600 origin-left z-50",
                    style: {
                        scaleX
                    }
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: heroRef,
                    className: "relative h-screen flex items-center justify-center overflow-hidden bg-gray-900 text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute inset-0 z-0",
                            style: {
                                y: heroY,
                                scale: heroScale,
                                opacity: 0.4
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full bg-indigo-900",
                                style: {
                                    backgroundImage: "radial-gradient(circle at center, #4f46e5 0%, #1e1b4b 100%)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "relative z-10 text-center px-4",
                            style: {
                                opacity: heroOpacity
                            },
                            initial: {
                                opacity: 0,
                                y: 50
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-6xl md:text-8xl font-bold mb-6 tracking-tight",
                                    children: [
                                        "Artistry in ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 27
                                        }, this),
                                        " Furniture."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light",
                                    children: "Redefining spaces with timeless design and unparalleled comfort."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    className: "bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition",
                                    children: "Explore Collection"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[200vh] relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StickyShowcase, {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Carousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TransformationScroll$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 bg-white z-20 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            viewport: {
                                once: true,
                                margin: "-100px"
                            },
                            transition: {
                                duration: 1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold text-gray-900 mb-12 text-center tracking-tight",
                                children: "Curated Masterpieces"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-20 text-gray-500",
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12",
                            children: products.map((product, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductCard, {
                                    product: product,
                                    index: i
                                }, product.id, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 128,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "bg-gray-900 text-white py-20 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500",
                        children: "© 2026 Furniture Studio. Designed with passion."
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
function ProductCard({ product, index }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/product/${product.id}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 50
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: true,
                margin: "-50px"
            },
            transition: {
                duration: 0.6,
                delay: index * 0.1
            },
            className: "group cursor-pointer",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "aspect-[4/3] bg-gray-100 mb-6 rounded-2xl overflow-hidden relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
                        whileHover: {
                            scale: 1.05
                        },
                        transition: {
                            duration: 0.4
                        },
                        src: product.imageUrl,
                        alt: product.name,
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition",
                    children: product.name
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 line-clamp-2 mb-3",
                    children: product.description
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg font-semibold text-gray-900",
                    children: [
                        "$",
                        product.price
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 145,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
function StickyShowcase() {
    // This component creates the "Sticky" scrolling effect where content holds while images change
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            "start end",
            "end start"
        ]
    });
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.3,
        0.6,
        0.8
    ], [
        0.8,
        1.1,
        1
    ]);
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.3,
        0.5,
        0.8,
        1
    ], [
        0,
        1,
        1,
        0
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "sticky top-0 h-[150vh] flex items-center justify-center overflow-hidden bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            style: {
                scale,
                opacity
            },
            className: "w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-black/10 z-10"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80",
                    alt: "Modern Living",
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-10 left-10 z-20 text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-6xl font-bold mb-2",
                            children: "Modern Comfort"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl opacity-90",
                            children: "Designed for your lifestyle."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 182,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/motion-dom/dist/es/utils/transform.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transform",
    ()=>transform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/utils/interpolate.mjs [app-ssr] (ecmascript)");
;
function transform(...args) {
    const useImmediate = !Array.isArray(args[0]);
    const argOffset = useImmediate ? 0 : -1;
    const inputValue = args[0 + argOffset];
    const inputRange = args[1 + argOffset];
    const outputRange = args[2 + argOffset];
    const options = args[3 + argOffset];
    const interpolator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(inputRange, outputRange, options);
    return useImmediate ? interpolator(inputValue) : interpolator;
}
;
}),
"[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMotionValue",
    ()=>useMotionValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/value/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */ function useMotionValue(initial) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConstant"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motionValue"])(initial));
    /**
     * If this motion value is being used in static mode, like on
     * the Framer canvas, force components to rerender when the motion
     * value is updated.
     */ const { isStatic } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MotionConfigContext"]);
    if (isStatic) {
        const [, setLatest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initial);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>value.on("change", setLatest), []);
    }
    return value;
}
;
}),
"[project]/node_modules/framer-motion/dist/es/value/use-combine-values.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCombineMotionValues",
    ()=>useCombineMotionValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function useCombineMotionValues(values, combineValues) {
    /**
     * Initialise the returned motion value. This remains the same between renders.
     */ const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(combineValues());
    /**
     * Create a function that will update the template motion value with the latest values.
     * This is pre-bound so whenever a motion value updates it can schedule its
     * execution in Framesync. If it's already been scheduled it won't be fired twice
     * in a single frame.
     */ const updateValue = ()=>value.set(combineValues());
    /**
     * Synchronously update the motion value with the latest values during the render.
     * This ensures that within a React render, the styles applied to the DOM are up-to-date.
     */ updateValue();
    /**
     * Subscribe to all motion values found within the template. Whenever any of them change,
     * schedule an update.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(()=>{
        const scheduleUpdate = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frame"].preRender(updateValue, false, true);
        const subscriptions = values.map((v)=>v.on("change", scheduleUpdate));
        return ()=>{
            subscriptions.forEach((unsubscribe)=>unsubscribe());
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cancelFrame"])(updateValue);
        };
    });
    return value;
}
;
}),
"[project]/node_modules/framer-motion/dist/es/value/use-computed.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useComputed",
    ()=>useComputed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/value/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-combine-values.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function useComputed(compute) {
    /**
     * Open session of collectMotionValues. Any MotionValue that calls get()
     * will be saved into this array.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collectMotionValues"].current = [];
    compute();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCombineMotionValues"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collectMotionValues"].current, compute);
    /**
     * Synchronously close session of collectMotionValues.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collectMotionValues"].current = undefined;
    return value;
}
;
}),
"[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTransform",
    ()=>useTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/utils/transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-combine-values.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$computed$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-computed.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function useTransform(input, inputRangeOrTransformer, outputRange, options) {
    if (typeof input === "function") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$computed$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComputed"])(input);
    }
    const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transform"])(inputRangeOrTransformer, outputRange, options);
    return Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([
        input
    ], ([latest])=>transformer(latest));
}
function useListTransform(values, transformer) {
    const latest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConstant"])(()=>[]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCombineMotionValues"])(values, ()=>{
        latest.length = 0;
        const numValues = values.length;
        for(let i = 0; i < numValues; i++){
            latest[i] = values[i].get();
        }
        return transformer(latest);
    });
}
;
}),
"[project]/node_modules/motion-dom/dist/es/value/spring-value.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attachSpring",
    ()=>attachSpring,
    "springValue",
    ()=>springValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/value/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$JSAnimation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/animation/JSAnimation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-ssr] (ecmascript)");
;
;
;
;
/**
 * Create a `MotionValue` that animates to its latest value using a spring.
 * Can either be a value or track another `MotionValue`.
 *
 * ```jsx
 * const x = motionValue(0)
 * const y = transformValue(() => x.get() * 2) // double x
 * ```
 *
 * @param transformer - A transform function. This function must be pure with no side-effects or conditional statements.
 * @returns `MotionValue`
 *
 * @public
 */ function springValue(source, options) {
    const initialValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMotionValue"])(source) ? source.get() : source;
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motionValue"])(initialValue);
    attachSpring(value, source, options);
    return value;
}
function attachSpring(value, source, options) {
    const initialValue = value.get();
    let activeAnimation = null;
    let latestValue = initialValue;
    let latestSetter;
    const unit = typeof initialValue === "string" ? initialValue.replace(/[\d.-]/g, "") : undefined;
    const stopAnimation = ()=>{
        if (activeAnimation) {
            activeAnimation.stop();
            activeAnimation = null;
        }
    };
    const startAnimation = ()=>{
        stopAnimation();
        activeAnimation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$JSAnimation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JSAnimation"]({
            keyframes: [
                asNumber(value.get()),
                asNumber(latestValue)
            ],
            velocity: value.getVelocity(),
            type: "spring",
            restDelta: 0.001,
            restSpeed: 0.01,
            ...options,
            onUpdate: latestSetter
        });
    };
    value.attach((v, set)=>{
        latestValue = v;
        latestSetter = (latest)=>set(parseValue(latest, unit));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frame"].postRender(startAnimation);
    }, stopAnimation);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMotionValue"])(source)) {
        const removeSourceOnChange = source.on("change", (v)=>value.set(parseValue(v, unit)));
        const removeValueOnDestroy = value.on("destroy", removeSourceOnChange);
        return ()=>{
            removeSourceOnChange();
            removeValueOnDestroy();
        };
    }
    return stopAnimation;
}
function parseValue(v, unit) {
    return unit ? v + unit : v;
}
function asNumber(v) {
    return typeof v === "number" ? v : parseFloat(v);
}
;
}),
"[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSpring",
    ()=>useSpring
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$spring$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/value/spring-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function useSpring(source, options = {}) {
    const { isStatic } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MotionConfigContext"]);
    const getFromSource = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMotionValue"])(source) ? source.get() : source;
    // isStatic will never change, allowing early hooks return
    if (isStatic) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(getFromSource);
    }
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(getFromSource());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInsertionEffect"])(()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$spring$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["attachSpring"])(value, source, options);
    }, [
        value,
        JSON.stringify(options)
    ]);
    return value;
}
;
}),
"[project]/node_modules/lenis/dist/lenis.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Lenis
]);
// package.json
var version = "1.3.17";
// packages/core/src/maths.ts
function clamp(min, input, max) {
    return Math.max(min, Math.min(input, max));
}
function lerp(x, y, t) {
    return (1 - t) * x + t * y;
}
function damp(x, y, lambda, deltaTime) {
    return lerp(x, y, 1 - Math.exp(-lambda * deltaTime));
}
function modulo(n, d) {
    return (n % d + d) % d;
}
// packages/core/src/animate.ts
var Animate = class {
    isRunning = false;
    value = 0;
    from = 0;
    to = 0;
    currentTime = 0;
    // These are instanciated in the fromTo method
    lerp;
    duration;
    easing;
    onUpdate;
    /**
   * Advance the animation by the given delta time
   *
   * @param deltaTime - The time in seconds to advance the animation
   */ advance(deltaTime) {
        if (!this.isRunning) return;
        let completed = false;
        if (this.duration && this.easing) {
            this.currentTime += deltaTime;
            const linearProgress = clamp(0, this.currentTime / this.duration, 1);
            completed = linearProgress >= 1;
            const easedProgress = completed ? 1 : this.easing(linearProgress);
            this.value = this.from + (this.to - this.from) * easedProgress;
        } else if (this.lerp) {
            this.value = damp(this.value, this.to, this.lerp * 60, deltaTime);
            if (Math.round(this.value) === this.to) {
                this.value = this.to;
                completed = true;
            }
        } else {
            this.value = this.to;
            completed = true;
        }
        if (completed) {
            this.stop();
        }
        this.onUpdate?.(this.value, completed);
    }
    /** Stop the animation */ stop() {
        this.isRunning = false;
    }
    /**
   * Set up the animation from a starting value to an ending value
   * with optional parameters for lerping, duration, easing, and onUpdate callback
   *
   * @param from - The starting value
   * @param to - The ending value
   * @param options - Options for the animation
   */ fromTo(from, to, { lerp: lerp2, duration, easing, onStart, onUpdate }) {
        this.from = this.value = from;
        this.to = to;
        this.lerp = lerp2;
        this.duration = duration;
        this.easing = easing;
        this.currentTime = 0;
        this.isRunning = true;
        onStart?.();
        this.onUpdate = onUpdate;
    }
};
// packages/core/src/debounce.ts
function debounce(callback, delay) {
    let timer;
    return function(...args) {
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            timer = void 0;
            callback.apply(context, args);
        }, delay);
    };
}
// packages/core/src/dimensions.ts
var Dimensions = class {
    constructor(wrapper, content, { autoResize = true, debounce: debounceValue = 250 } = {}){
        this.wrapper = wrapper;
        this.content = content;
        if (autoResize) {
            this.debouncedResize = debounce(this.resize, debounceValue);
            if (this.wrapper instanceof Window) {
                window.addEventListener("resize", this.debouncedResize, false);
            } else {
                this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize);
                this.wrapperResizeObserver.observe(this.wrapper);
            }
            this.contentResizeObserver = new ResizeObserver(this.debouncedResize);
            this.contentResizeObserver.observe(this.content);
        }
        this.resize();
    }
    width = 0;
    height = 0;
    scrollHeight = 0;
    scrollWidth = 0;
    // These are instanciated in the constructor as they need information from the options
    debouncedResize;
    wrapperResizeObserver;
    contentResizeObserver;
    destroy() {
        this.wrapperResizeObserver?.disconnect();
        this.contentResizeObserver?.disconnect();
        if (this.wrapper === window && this.debouncedResize) {
            window.removeEventListener("resize", this.debouncedResize, false);
        }
    }
    resize = ()=>{
        this.onWrapperResize();
        this.onContentResize();
    };
    onWrapperResize = ()=>{
        if (this.wrapper instanceof Window) {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        } else {
            this.width = this.wrapper.clientWidth;
            this.height = this.wrapper.clientHeight;
        }
    };
    onContentResize = ()=>{
        if (this.wrapper instanceof Window) {
            this.scrollHeight = this.content.scrollHeight;
            this.scrollWidth = this.content.scrollWidth;
        } else {
            this.scrollHeight = this.wrapper.scrollHeight;
            this.scrollWidth = this.wrapper.scrollWidth;
        }
    };
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        };
    }
};
// packages/core/src/emitter.ts
var Emitter = class {
    events = {};
    /**
   * Emit an event with the given data
   * @param event Event name
   * @param args Data to pass to the event handlers
   */ emit(event, ...args) {
        let callbacks = this.events[event] || [];
        for(let i = 0, length = callbacks.length; i < length; i++){
            callbacks[i]?.(...args);
        }
    }
    /**
   * Add a callback to the event
   * @param event Event name
   * @param cb Callback function
   * @returns Unsubscribe function
   */ on(event, cb) {
        this.events[event]?.push(cb) || (this.events[event] = [
            cb
        ]);
        return ()=>{
            this.events[event] = this.events[event]?.filter((i)=>cb !== i);
        };
    }
    /**
   * Remove a callback from the event
   * @param event Event name
   * @param callback Callback function
   */ off(event, callback) {
        this.events[event] = this.events[event]?.filter((i)=>callback !== i);
    }
    /**
   * Remove all event listeners and clean up
   */ destroy() {
        this.events = {};
    }
};
// packages/core/src/virtual-scroll.ts
var LINE_HEIGHT = 100 / 6;
var listenerOptions = {
    passive: false
};
var VirtualScroll = class {
    constructor(element, options = {
        wheelMultiplier: 1,
        touchMultiplier: 1
    }){
        this.element = element;
        this.options = options;
        window.addEventListener("resize", this.onWindowResize, false);
        this.onWindowResize();
        this.element.addEventListener("wheel", this.onWheel, listenerOptions);
        this.element.addEventListener("touchstart", this.onTouchStart, listenerOptions);
        this.element.addEventListener("touchmove", this.onTouchMove, listenerOptions);
        this.element.addEventListener("touchend", this.onTouchEnd, listenerOptions);
    }
    touchStart = {
        x: 0,
        y: 0
    };
    lastDelta = {
        x: 0,
        y: 0
    };
    window = {
        width: 0,
        height: 0
    };
    emitter = new Emitter();
    /**
   * Add an event listener for the given event and callback
   *
   * @param event Event name
   * @param callback Callback function
   */ on(event, callback) {
        return this.emitter.on(event, callback);
    }
    /** Remove all event listeners and clean up */ destroy() {
        this.emitter.destroy();
        window.removeEventListener("resize", this.onWindowResize, false);
        this.element.removeEventListener("wheel", this.onWheel, listenerOptions);
        this.element.removeEventListener("touchstart", this.onTouchStart, listenerOptions);
        this.element.removeEventListener("touchmove", this.onTouchMove, listenerOptions);
        this.element.removeEventListener("touchend", this.onTouchEnd, listenerOptions);
    }
    /**
   * Event handler for 'touchstart' event
   *
   * @param event Touch event
   */ onTouchStart = (event)=>{
        const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
        this.touchStart.x = clientX;
        this.touchStart.y = clientY;
        this.lastDelta = {
            x: 0,
            y: 0
        };
        this.emitter.emit("scroll", {
            deltaX: 0,
            deltaY: 0,
            event
        });
    };
    /** Event handler for 'touchmove' event */ onTouchMove = (event)=>{
        const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
        const deltaX = -(clientX - this.touchStart.x) * this.options.touchMultiplier;
        const deltaY = -(clientY - this.touchStart.y) * this.options.touchMultiplier;
        this.touchStart.x = clientX;
        this.touchStart.y = clientY;
        this.lastDelta = {
            x: deltaX,
            y: deltaY
        };
        this.emitter.emit("scroll", {
            deltaX,
            deltaY,
            event
        });
    };
    onTouchEnd = (event)=>{
        this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event
        });
    };
    /** Event handler for 'wheel' event */ onWheel = (event)=>{
        let { deltaX, deltaY, deltaMode } = event;
        const multiplierX = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? this.window.width : 1;
        const multiplierY = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? this.window.height : 1;
        deltaX *= multiplierX;
        deltaY *= multiplierY;
        deltaX *= this.options.wheelMultiplier;
        deltaY *= this.options.wheelMultiplier;
        this.emitter.emit("scroll", {
            deltaX,
            deltaY,
            event
        });
    };
    onWindowResize = ()=>{
        this.window = {
            width: window.innerWidth,
            height: window.innerHeight
        };
    };
};
// packages/core/src/lenis.ts
var defaultEasing = (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t));
var Lenis = class {
    _isScrolling = false;
    // true when scroll is animating
    _isStopped = false;
    // true if user should not be able to scroll - enable/disable programmatically
    _isLocked = false;
    // same as isStopped but enabled/disabled when scroll reaches target
    _preventNextNativeScrollEvent = false;
    _resetVelocityTimeout = null;
    _rafId = null;
    /**
   * Whether or not the user is touching the screen
   */ isTouching;
    /**
   * The time in ms since the lenis instance was created
   */ time = 0;
    /**
   * User data that will be forwarded through the scroll event
   *
   * @example
   * lenis.scrollTo(100, {
   *   userData: {
   *     foo: 'bar'
   *   }
   * })
   */ userData = {};
    /**
   * The last velocity of the scroll
   */ lastVelocity = 0;
    /**
   * The current velocity of the scroll
   */ velocity = 0;
    /**
   * The direction of the scroll
   */ direction = 0;
    /**
   * The options passed to the lenis instance
   */ options;
    /**
   * The target scroll value
   */ targetScroll;
    /**
   * The animated scroll value
   */ animatedScroll;
    // These are instanciated here as they don't need information from the options
    animate = new Animate();
    emitter = new Emitter();
    // These are instanciated in the constructor as they need information from the options
    dimensions;
    // This is not private because it's used in the Snap class
    virtualScroll;
    constructor({ wrapper = window, content = document.documentElement, eventsTarget = wrapper, smoothWheel = true, syncTouch = false, syncTouchLerp = 0.075, touchInertiaExponent = 1.7, duration, // in seconds
    easing, lerp: lerp2 = 0.1, infinite = false, orientation = "vertical", // vertical, horizontal
    gestureOrientation = orientation === "horizontal" ? "both" : "vertical", // vertical, horizontal, both
    touchMultiplier = 1, wheelMultiplier = 1, autoResize = true, prevent, virtualScroll, overscroll = true, autoRaf = false, anchors = false, autoToggle = false, // https://caniuse.com/?search=transition-behavior
    allowNestedScroll = false, // @ts-ignore: this will be deprecated in the future
    __experimental__naiveDimensions = false, naiveDimensions = __experimental__naiveDimensions, stopInertiaOnNavigate = false } = {}){
        window.lenisVersion = version;
        if (!wrapper || wrapper === document.documentElement) {
            wrapper = window;
        }
        if (typeof duration === "number" && typeof easing !== "function") {
            easing = defaultEasing;
        } else if (typeof easing === "function" && typeof duration !== "number") {
            duration = 1;
        }
        this.options = {
            wrapper,
            content,
            eventsTarget,
            smoothWheel,
            syncTouch,
            syncTouchLerp,
            touchInertiaExponent,
            duration,
            easing,
            lerp: lerp2,
            infinite,
            gestureOrientation,
            orientation,
            touchMultiplier,
            wheelMultiplier,
            autoResize,
            prevent,
            virtualScroll,
            overscroll,
            autoRaf,
            anchors,
            autoToggle,
            allowNestedScroll,
            naiveDimensions,
            stopInertiaOnNavigate
        };
        this.dimensions = new Dimensions(wrapper, content, {
            autoResize
        });
        this.updateClassName();
        this.targetScroll = this.animatedScroll = this.actualScroll;
        this.options.wrapper.addEventListener("scroll", this.onNativeScroll, false);
        this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
            capture: true
        });
        if (this.options.anchors || this.options.stopInertiaOnNavigate) {
            this.options.wrapper.addEventListener("click", this.onClick, false);
        }
        this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, false);
        this.virtualScroll = new VirtualScroll(eventsTarget, {
            touchMultiplier,
            wheelMultiplier
        });
        this.virtualScroll.on("scroll", this.onVirtualScroll);
        if (this.options.autoToggle) {
            this.checkOverflow();
            this.rootElement.addEventListener("transitionend", this.onTransitionEnd, {
                passive: true
            });
        }
        if (this.options.autoRaf) {
            this._rafId = requestAnimationFrame(this.raf);
        }
    }
    /**
   * Destroy the lenis instance, remove all event listeners and clean up the class name
   */ destroy() {
        this.emitter.destroy();
        this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, false);
        this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
            capture: true
        });
        this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, false);
        if (this.options.anchors || this.options.stopInertiaOnNavigate) {
            this.options.wrapper.removeEventListener("click", this.onClick, false);
        }
        this.virtualScroll.destroy();
        this.dimensions.destroy();
        this.cleanUpClassName();
        if (this._rafId) {
            cancelAnimationFrame(this._rafId);
        }
    }
    on(event, callback) {
        return this.emitter.on(event, callback);
    }
    off(event, callback) {
        return this.emitter.off(event, callback);
    }
    onScrollEnd = (e)=>{
        if (!(e instanceof CustomEvent)) {
            if (this.isScrolling === "smooth" || this.isScrolling === false) {
                e.stopPropagation();
            }
        }
    };
    dispatchScrollendEvent = ()=>{
        this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
            bubbles: this.options.wrapper === window,
            // cancelable: false,
            detail: {
                lenisScrollEnd: true
            }
        }));
    };
    get overflow() {
        const property = this.isHorizontal ? "overflow-x" : "overflow-y";
        return getComputedStyle(this.rootElement)[property];
    }
    checkOverflow() {
        if ([
            "hidden",
            "clip"
        ].includes(this.overflow)) {
            this.internalStop();
        } else {
            this.internalStart();
        }
    }
    onTransitionEnd = (event)=>{
        if (event.propertyName.includes("overflow")) {
            this.checkOverflow();
        }
    };
    setScroll(scroll) {
        if (this.isHorizontal) {
            this.options.wrapper.scrollTo({
                left: scroll,
                behavior: "instant"
            });
        } else {
            this.options.wrapper.scrollTo({
                top: scroll,
                behavior: "instant"
            });
        }
    }
    onClick = (event)=>{
        const path = event.composedPath();
        const anchorElements = path.filter((node)=>node instanceof HTMLAnchorElement && node.getAttribute("href"));
        if (this.options.anchors) {
            const anchor = anchorElements.find((node)=>node.getAttribute("href")?.includes("#"));
            if (anchor) {
                const href = anchor.getAttribute("href");
                if (href) {
                    const options = typeof this.options.anchors === "object" && this.options.anchors ? this.options.anchors : void 0;
                    const target = `#${href.split("#")[1]}`;
                    this.scrollTo(target, options);
                }
            }
        }
        if (this.options.stopInertiaOnNavigate) {
            const internalLink = anchorElements.find((node)=>node.host === window.location.host);
            if (internalLink) {
                this.reset();
            }
        }
    };
    onPointerDown = (event)=>{
        if (event.button === 1) {
            this.reset();
        }
    };
    onVirtualScroll = (data)=>{
        if (typeof this.options.virtualScroll === "function" && this.options.virtualScroll(data) === false) return;
        const { deltaX, deltaY, event } = data;
        this.emitter.emit("virtual-scroll", {
            deltaX,
            deltaY,
            event
        });
        if (event.ctrlKey) return;
        if (event.lenisStopPropagation) return;
        const isTouch = event.type.includes("touch");
        const isWheel = event.type.includes("wheel");
        this.isTouching = event.type === "touchstart" || event.type === "touchmove";
        const isClickOrTap = deltaX === 0 && deltaY === 0;
        const isTapToStop = this.options.syncTouch && isTouch && event.type === "touchstart" && isClickOrTap && !this.isStopped && !this.isLocked;
        if (isTapToStop) {
            this.reset();
            return;
        }
        const isUnknownGesture = this.options.gestureOrientation === "vertical" && deltaY === 0 || this.options.gestureOrientation === "horizontal" && deltaX === 0;
        if (isClickOrTap || isUnknownGesture) {
            return;
        }
        let composedPath = event.composedPath();
        composedPath = composedPath.slice(0, composedPath.indexOf(this.rootElement));
        const prevent = this.options.prevent;
        if (!!composedPath.find((node)=>node instanceof HTMLElement && (typeof prevent === "function" && prevent?.(node) || node.hasAttribute?.("data-lenis-prevent") || isTouch && node.hasAttribute?.("data-lenis-prevent-touch") || isWheel && node.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.checkNestedScroll(node, {
                deltaX,
                deltaY
            })))) return;
        if (this.isStopped || this.isLocked) {
            if (event.cancelable) {
                event.preventDefault();
            }
            return;
        }
        const isSmooth = this.options.syncTouch && isTouch || this.options.smoothWheel && isWheel;
        if (!isSmooth) {
            this.isScrolling = "native";
            this.animate.stop();
            event.lenisStopPropagation = true;
            return;
        }
        let delta = deltaY;
        if (this.options.gestureOrientation === "both") {
            delta = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
        } else if (this.options.gestureOrientation === "horizontal") {
            delta = deltaX;
        }
        if (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && deltaY > 0 || this.animatedScroll === this.limit && deltaY < 0)) {
            event.lenisStopPropagation = true;
        }
        if (event.cancelable) {
            event.preventDefault();
        }
        const isSyncTouch = isTouch && this.options.syncTouch;
        const isTouchEnd = isTouch && event.type === "touchend";
        const hasTouchInertia = isTouchEnd;
        if (hasTouchInertia) {
            delta = Math.sign(this.velocity) * Math.pow(Math.abs(this.velocity), this.options.touchInertiaExponent);
        }
        this.scrollTo(this.targetScroll + delta, {
            programmatic: false,
            ...isSyncTouch ? {
                lerp: hasTouchInertia ? this.options.syncTouchLerp : 1
            } : {
                lerp: this.options.lerp,
                duration: this.options.duration,
                easing: this.options.easing
            }
        });
    };
    /**
   * Force lenis to recalculate the dimensions
   */ resize() {
        this.dimensions.resize();
        this.animatedScroll = this.targetScroll = this.actualScroll;
        this.emit();
    }
    emit() {
        this.emitter.emit("scroll", this);
    }
    onNativeScroll = ()=>{
        if (this._resetVelocityTimeout !== null) {
            clearTimeout(this._resetVelocityTimeout);
            this._resetVelocityTimeout = null;
        }
        if (this._preventNextNativeScrollEvent) {
            this._preventNextNativeScrollEvent = false;
            return;
        }
        if (this.isScrolling === false || this.isScrolling === "native") {
            const lastScroll = this.animatedScroll;
            this.animatedScroll = this.targetScroll = this.actualScroll;
            this.lastVelocity = this.velocity;
            this.velocity = this.animatedScroll - lastScroll;
            this.direction = Math.sign(this.animatedScroll - lastScroll);
            if (!this.isStopped) {
                this.isScrolling = "native";
            }
            this.emit();
            if (this.velocity !== 0) {
                this._resetVelocityTimeout = setTimeout(()=>{
                    this.lastVelocity = this.velocity;
                    this.velocity = 0;
                    this.isScrolling = false;
                    this.emit();
                }, 400);
            }
        }
    };
    reset() {
        this.isLocked = false;
        this.isScrolling = false;
        this.animatedScroll = this.targetScroll = this.actualScroll;
        this.lastVelocity = this.velocity = 0;
        this.animate.stop();
    }
    /**
   * Start lenis scroll after it has been stopped
   */ start() {
        if (!this.isStopped) return;
        if (this.options.autoToggle) {
            this.rootElement.style.removeProperty("overflow");
            return;
        }
        this.internalStart();
    }
    internalStart() {
        if (!this.isStopped) return;
        this.reset();
        this.isStopped = false;
        this.emit();
    }
    /**
   * Stop lenis scroll
   */ stop() {
        if (this.isStopped) return;
        if (this.options.autoToggle) {
            this.rootElement.style.setProperty("overflow", "clip");
            return;
        }
        this.internalStop();
    }
    internalStop() {
        if (this.isStopped) return;
        this.reset();
        this.isStopped = true;
        this.emit();
    }
    /**
   * RequestAnimationFrame for lenis
   *
   * @param time The time in ms from an external clock like `requestAnimationFrame` or Tempus
   */ raf = (time)=>{
        const deltaTime = time - (this.time || time);
        this.time = time;
        this.animate.advance(deltaTime * 1e-3);
        if (this.options.autoRaf) {
            this._rafId = requestAnimationFrame(this.raf);
        }
    };
    /**
   * Scroll to a target value
   *
   * @param target The target value to scroll to
   * @param options The options for the scroll
   *
   * @example
   * lenis.scrollTo(100, {
   *   offset: 100,
   *   duration: 1,
   *   easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
   *   lerp: 0.1,
   *   onStart: () => {
   *     console.log('onStart')
   *   },
   *   onComplete: () => {
   *     console.log('onComplete')
   *   },
   * })
   */ scrollTo(target, { offset = 0, immediate = false, lock = false, programmatic = true, // called from outside of the class
    lerp: lerp2 = programmatic ? this.options.lerp : void 0, duration = programmatic ? this.options.duration : void 0, easing = programmatic ? this.options.easing : void 0, onStart, onComplete, force = false, // scroll even if stopped
    userData } = {}) {
        if ((this.isStopped || this.isLocked) && !force) return;
        if (typeof target === "string" && [
            "top",
            "left",
            "start",
            "#"
        ].includes(target)) {
            target = 0;
        } else if (typeof target === "string" && [
            "bottom",
            "right",
            "end"
        ].includes(target)) {
            target = this.limit;
        } else {
            let node;
            if (typeof target === "string") {
                node = document.querySelector(target);
                if (!node) {
                    if (target === "#top") {
                        target = 0;
                    } else {
                        console.warn("Lenis: Target not found", target);
                    }
                }
            } else if (target instanceof HTMLElement && target?.nodeType) {
                node = target;
            }
            if (node) {
                if (this.options.wrapper !== window) {
                    const wrapperRect = this.rootElement.getBoundingClientRect();
                    offset -= this.isHorizontal ? wrapperRect.left : wrapperRect.top;
                }
                const rect = node.getBoundingClientRect();
                target = (this.isHorizontal ? rect.left : rect.top) + this.animatedScroll;
            }
        }
        if (typeof target !== "number") return;
        target += offset;
        target = Math.round(target);
        if (this.options.infinite) {
            if (programmatic) {
                this.targetScroll = this.animatedScroll = this.scroll;
                const distance = target - this.animatedScroll;
                if (distance > this.limit / 2) {
                    target = target - this.limit;
                } else if (distance < -this.limit / 2) {
                    target = target + this.limit;
                }
            }
        } else {
            target = clamp(0, target, this.limit);
        }
        if (target === this.targetScroll) {
            onStart?.(this);
            onComplete?.(this);
            return;
        }
        this.userData = userData ?? {};
        if (immediate) {
            this.animatedScroll = this.targetScroll = target;
            this.setScroll(this.scroll);
            this.reset();
            this.preventNextNativeScrollEvent();
            this.emit();
            onComplete?.(this);
            this.userData = {};
            requestAnimationFrame(()=>{
                this.dispatchScrollendEvent();
            });
            return;
        }
        if (!programmatic) {
            this.targetScroll = target;
        }
        if (typeof duration === "number" && typeof easing !== "function") {
            easing = defaultEasing;
        } else if (typeof easing === "function" && typeof duration !== "number") {
            duration = 1;
        }
        this.animate.fromTo(this.animatedScroll, target, {
            duration,
            easing,
            lerp: lerp2,
            onStart: ()=>{
                if (lock) this.isLocked = true;
                this.isScrolling = "smooth";
                onStart?.(this);
            },
            onUpdate: (value, completed)=>{
                this.isScrolling = "smooth";
                this.lastVelocity = this.velocity;
                this.velocity = value - this.animatedScroll;
                this.direction = Math.sign(this.velocity);
                this.animatedScroll = value;
                this.setScroll(this.scroll);
                if (programmatic) {
                    this.targetScroll = value;
                }
                if (!completed) this.emit();
                if (completed) {
                    this.reset();
                    this.emit();
                    onComplete?.(this);
                    this.userData = {};
                    requestAnimationFrame(()=>{
                        this.dispatchScrollendEvent();
                    });
                    this.preventNextNativeScrollEvent();
                }
            }
        });
    }
    preventNextNativeScrollEvent() {
        this._preventNextNativeScrollEvent = true;
        requestAnimationFrame(()=>{
            this._preventNextNativeScrollEvent = false;
        });
    }
    checkNestedScroll(node, { deltaX, deltaY }) {
        const time = Date.now();
        const cache = node._lenis ??= {};
        let hasOverflowX, hasOverflowY, isScrollableX, isScrollableY, scrollWidth, scrollHeight, clientWidth, clientHeight;
        const gestureOrientation = this.options.gestureOrientation;
        if (time - (cache.time ?? 0) > 2e3) {
            cache.time = Date.now();
            const computedStyle = window.getComputedStyle(node);
            cache.computedStyle = computedStyle;
            const overflowXString = computedStyle.overflowX;
            const overflowYString = computedStyle.overflowY;
            hasOverflowX = [
                "auto",
                "overlay",
                "scroll"
            ].includes(overflowXString);
            hasOverflowY = [
                "auto",
                "overlay",
                "scroll"
            ].includes(overflowYString);
            cache.hasOverflowX = hasOverflowX;
            cache.hasOverflowY = hasOverflowY;
            if (!hasOverflowX && !hasOverflowY) return false;
            if (gestureOrientation === "vertical" && !hasOverflowY) return false;
            if (gestureOrientation === "horizontal" && !hasOverflowX) return false;
            scrollWidth = node.scrollWidth;
            scrollHeight = node.scrollHeight;
            clientWidth = node.clientWidth;
            clientHeight = node.clientHeight;
            isScrollableX = scrollWidth > clientWidth;
            isScrollableY = scrollHeight > clientHeight;
            cache.isScrollableX = isScrollableX;
            cache.isScrollableY = isScrollableY;
            cache.scrollWidth = scrollWidth;
            cache.scrollHeight = scrollHeight;
            cache.clientWidth = clientWidth;
            cache.clientHeight = clientHeight;
        } else {
            isScrollableX = cache.isScrollableX;
            isScrollableY = cache.isScrollableY;
            hasOverflowX = cache.hasOverflowX;
            hasOverflowY = cache.hasOverflowY;
            scrollWidth = cache.scrollWidth;
            scrollHeight = cache.scrollHeight;
            clientWidth = cache.clientWidth;
            clientHeight = cache.clientHeight;
        }
        if (!hasOverflowX && !hasOverflowY || !isScrollableX && !isScrollableY) {
            return false;
        }
        if (gestureOrientation === "vertical" && (!hasOverflowY || !isScrollableY)) return false;
        if (gestureOrientation === "horizontal" && (!hasOverflowX || !isScrollableX)) return false;
        let orientation;
        if (gestureOrientation === "horizontal") {
            orientation = "x";
        } else if (gestureOrientation === "vertical") {
            orientation = "y";
        } else {
            const isScrollingX = deltaX !== 0;
            const isScrollingY = deltaY !== 0;
            if (isScrollingX && hasOverflowX && isScrollableX) {
                orientation = "x";
            }
            if (isScrollingY && hasOverflowY && isScrollableY) {
                orientation = "y";
            }
        }
        if (!orientation) return false;
        let scroll, maxScroll, delta, hasOverflow, isScrollable;
        if (orientation === "x") {
            scroll = node.scrollLeft;
            maxScroll = scrollWidth - clientWidth;
            delta = deltaX;
            hasOverflow = hasOverflowX;
            isScrollable = isScrollableX;
        } else if (orientation === "y") {
            scroll = node.scrollTop;
            maxScroll = scrollHeight - clientHeight;
            delta = deltaY;
            hasOverflow = hasOverflowY;
            isScrollable = isScrollableY;
        } else {
            return false;
        }
        const willScroll = delta > 0 ? scroll < maxScroll : scroll > 0;
        return willScroll && hasOverflow && isScrollable;
    }
    /**
   * The root element on which lenis is instanced
   */ get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    /**
   * The limit which is the maximum scroll value
   */ get limit() {
        if (this.options.naiveDimensions) {
            if (this.isHorizontal) {
                return this.rootElement.scrollWidth - this.rootElement.clientWidth;
            } else {
                return this.rootElement.scrollHeight - this.rootElement.clientHeight;
            }
        } else {
            return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
        }
    }
    /**
   * Whether or not the scroll is horizontal
   */ get isHorizontal() {
        return this.options.orientation === "horizontal";
    }
    /**
   * The actual scroll value
   */ get actualScroll() {
        const wrapper = this.options.wrapper;
        return this.isHorizontal ? wrapper.scrollX ?? wrapper.scrollLeft : wrapper.scrollY ?? wrapper.scrollTop;
    }
    /**
   * The current scroll value
   */ get scroll() {
        return this.options.infinite ? modulo(this.animatedScroll, this.limit) : this.animatedScroll;
    }
    /**
   * The progress of the scroll relative to the limit
   */ get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    /**
   * Current scroll state
   */ get isScrolling() {
        return this._isScrolling;
    }
    set isScrolling(value) {
        if (this._isScrolling !== value) {
            this._isScrolling = value;
            this.updateClassName();
        }
    }
    /**
   * Check if lenis is stopped
   */ get isStopped() {
        return this._isStopped;
    }
    set isStopped(value) {
        if (this._isStopped !== value) {
            this._isStopped = value;
            this.updateClassName();
        }
    }
    /**
   * Check if lenis is locked
   */ get isLocked() {
        return this._isLocked;
    }
    set isLocked(value) {
        if (this._isLocked !== value) {
            this._isLocked = value;
            this.updateClassName();
        }
    }
    /**
   * Check if lenis is smooth scrolling
   */ get isSmooth() {
        return this.isScrolling === "smooth";
    }
    /**
   * The class name applied to the wrapper element
   */ get className() {
        let className = "lenis";
        if (this.options.autoToggle) className += " lenis-autoToggle";
        if (this.isStopped) className += " lenis-stopped";
        if (this.isLocked) className += " lenis-locked";
        if (this.isScrolling) className += " lenis-scrolling";
        if (this.isScrolling === "smooth") className += " lenis-smooth";
        return className;
    }
    updateClassName() {
        this.cleanUpClassName();
        this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim();
    }
    cleanUpClassName() {
        this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
    }
};
;
 //# sourceMappingURL=lenis.mjs.map
}),
"[project]/node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useComposedRefs",
    ()=>useComposedRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
/**
 * Taken from https://github.com/radix-ui/primitives/blob/main/packages/react/compose-refs/src/compose-refs.tsx
 */ /**
 * Set a given ref to a given value
 * This utility takes care of different types of refs: callback refs and RefObject(s)
 */ function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== undefined) {
        ref.current = value;
    }
}
/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */ function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup === "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        // React <19 will log an error to the console if a callback ref returns a
        // value. We don't use ref cleanups internally so this will only happen if a
        // user's ref callback returns a value, which we only expect if they are
        // using the cleanup functionality added in React 19.
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup === "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */ function useComposedRefs(...refs) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
;
}),
"[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopChild",
    ()=>PopChild
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/utils/is-html-element.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$composed$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */ class PopChildMeasure extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"] {
    getSnapshotBeforeUpdate(prevProps) {
        const element = this.props.childRef.current;
        if (element && prevProps.isPresent && !this.props.isPresent) {
            const parent = element.offsetParent;
            const parentWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHTMLElement"])(parent) ? parent.offsetWidth || 0 : 0;
            const size = this.props.sizeRef.current;
            size.height = element.offsetHeight || 0;
            size.width = element.offsetWidth || 0;
            size.top = element.offsetTop;
            size.left = element.offsetLeft;
            size.right = parentWidth - size.width - size.left;
        }
        return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */ componentDidUpdate() {}
    render() {
        return this.props.children;
    }
}
function PopChild({ children, isPresent, anchorX, root }) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0
    });
    const { nonce } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MotionConfigContext"]);
    const composedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$composed$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(ref, children?.ref);
    /**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInsertionEffect"])(()=>{
        const { width, height, top, left, right } = size.current;
        if (isPresent || !ref.current || !width || !height) return;
        const x = anchorX === "left" ? `left: ${left}` : `right: ${right}`;
        ref.current.dataset.motionPopId = id;
        const style = document.createElement("style");
        if (nonce) style.nonce = nonce;
        const parent = root ?? document.head;
        parent.appendChild(style);
        if (style.sheet) {
            style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            top: ${top}px !important;
          }
        `);
        }
        return ()=>{
            if (parent.contains(style)) {
                parent.removeChild(style);
            }
        };
    }, [
        isPresent
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PopChildMeasure, {
        isPresent: isPresent,
        childRef: ref,
        sizeRef: size,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](children, {
            ref: composedRef
        })
    });
}
;
}),
"[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PresenceChild",
    ()=>PresenceChild
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/context/PresenceContext.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$PopChild$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, root })=>{
    const presenceChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConstant"])(newChildrenMap);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    let isReusedContext = true;
    let context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        isReusedContext = false;
        return {
            id,
            initial,
            isPresent,
            custom,
            onExitComplete: (childId)=>{
                presenceChildren.set(childId, true);
                for (const isComplete of presenceChildren.values()){
                    if (!isComplete) return; // can stop searching when any is incomplete
                }
                onExitComplete && onExitComplete();
            },
            register: (childId)=>{
                presenceChildren.set(childId, false);
                return ()=>presenceChildren.delete(childId);
            }
        };
    }, [
        isPresent,
        presenceChildren,
        onExitComplete
    ]);
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */ if (presenceAffectsLayout && isReusedContext) {
        context = {
            ...context
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        presenceChildren.forEach((_, key)=>presenceChildren.set(key, false));
    }, [
        isPresent
    ]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
    }, [
        isPresent
    ]);
    if (mode === "popLayout") {
        children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$PopChild$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopChild"], {
            isPresent: isPresent,
            anchorX: anchorX,
            root: root,
            children: children
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PresenceContext"].Provider, {
        value: context,
        children: children
    });
};
function newChildrenMap() {
    return new Map();
}
;
}),
"[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChildKey",
    ()=>getChildKey,
    "onlyElements",
    ()=>onlyElements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const getChildKey = (child)=>child.key || "";
function onlyElements(children) {
    const filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].forEach(children, (child)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(child)) filtered.push(child);
    });
    return filtered;
}
;
}),
"[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatePresence",
    ()=>AnimatePresence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$PresenceChild$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */ const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", root })=>{
    const [isParentPresent, safeToRemove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePresence"])(propagate);
    /**
     * Filter any children that aren't ReactElements. We can only track components
     * between renders with a props.key.
     */ const presentChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onlyElements"])(children), [
        children
    ]);
    /**
     * Track the keys of the currently rendered children. This is used to
     * determine which children are exiting.
     */ const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChildKey"]);
    /**
     * If `initial={false}` we only want to pass this to components in the first render.
     */ const isInitialRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    /**
     * A ref containing the currently present children. When all exit animations
     * are complete, we use this to re-render the component with the latest children
     * *committed* rather than the latest children *rendered*.
     */ const pendingPresentChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(presentChildren);
    /**
     * Track which exiting children have finished animating out.
     */ const exitComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConstant"])(()=>new Map());
    /**
     * Save children to render as React state. To ensure this component is concurrent-safe,
     * we check for exiting children via an effect.
     */ const [diffedChildren, setDiffedChildren] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(presentChildren);
    const [renderedChildren, setRenderedChildren] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(presentChildren);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(()=>{
        isInitialRender.current = false;
        pendingPresentChildren.current = presentChildren;
        /**
         * Update complete status of exiting children.
         */ for(let i = 0; i < renderedChildren.length; i++){
            const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChildKey"])(renderedChildren[i]);
            if (!presentKeys.includes(key)) {
                if (exitComplete.get(key) !== true) {
                    exitComplete.set(key, false);
                }
            } else {
                exitComplete.delete(key);
            }
        }
    }, [
        renderedChildren,
        presentKeys.length,
        presentKeys.join("-")
    ]);
    const exitingChildren = [];
    if (presentChildren !== diffedChildren) {
        let nextChildren = [
            ...presentChildren
        ];
        /**
         * Loop through all the currently rendered components and decide which
         * are exiting.
         */ for(let i = 0; i < renderedChildren.length; i++){
            const child = renderedChildren[i];
            const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChildKey"])(child);
            if (!presentKeys.includes(key)) {
                nextChildren.splice(i, 0, child);
                exitingChildren.push(child);
            }
        }
        /**
         * If we're in "wait" mode, and we have exiting children, we want to
         * only render these until they've all exited.
         */ if (mode === "wait" && exitingChildren.length) {
            nextChildren = exitingChildren;
        }
        setRenderedChildren((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onlyElements"])(nextChildren));
        setDiffedChildren(presentChildren);
        /**
         * Early return to ensure once we've set state with the latest diffed
         * children, we can immediately re-render.
         */ return null;
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && mode === "wait" && renderedChildren.length > 1) {
        console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
    }
    /**
     * If we've been provided a forceRender function by the LayoutGroupContext,
     * we can use it to force a re-render amongst all surrounding components once
     * all components have finished animating out.
     */ const { forceRender } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayoutGroupContext"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: renderedChildren.map((child)=>{
            const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChildKey"])(child);
            const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
            const onExit = ()=>{
                if (exitComplete.has(key)) {
                    exitComplete.set(key, true);
                } else {
                    return;
                }
                let isEveryExitComplete = true;
                exitComplete.forEach((isExitComplete)=>{
                    if (!isExitComplete) isEveryExitComplete = false;
                });
                if (isEveryExitComplete) {
                    forceRender?.();
                    setRenderedChildren(pendingPresentChildren.current);
                    propagate && safeToRemove?.();
                    onExitComplete && onExitComplete();
                }
            };
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$PresenceChild$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PresenceChild"], {
                isPresent: isPresent,
                initial: !isInitialRender.current || initial ? undefined : false,
                custom: custom,
                presenceAffectsLayout: presenceAffectsLayout,
                mode: mode,
                root: root,
                onExitComplete: isPresent ? undefined : onExit,
                anchorX: anchorX,
                children: child
            }, key);
        })
    });
};
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CirclePlay
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
            key: "kmsa83"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const CirclePlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("circle-play", __iconNode);
;
 //# sourceMappingURL=circle-play.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-ssr] (ecmascript) <export default as PlayCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_34664832._.js.map