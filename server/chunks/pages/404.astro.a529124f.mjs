/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot, u as unescapeHTML, F as Fragment, m as maybeRenderHead } from '../astro.eba8dd8c.mjs';

const pwaInfo = {"pwaInDevEnvironment":false,"webManifest":{"href":"/manifest.webmanifest","useCredentials":false,"linkTag":"<link rel=\"manifest\" href=\"/manifest.webmanifest\">"}};

const $$Astro$4 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,viewport-fit=cover">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="192x192">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <title>${title}</title>
    <meta name="theme-color" content="#f6f8fa">
    
    ${pwaInfo && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(pwaInfo.webManifest.linkTag)}` })}`}
  ${renderHead()}</head>
  <body>
    ${renderSlot($$result, $$slots["default"])}
  </body></html>`;
}, "D:/\u5F00\u53D1\u5DE5\u5177/Isstech/chatgpt-vercel/src/layouts/Layout.astro");

const $$Astro$3 = createAstro();
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${maybeRenderHead()}<svg id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><style>
      .cls-1 {
        fill: #ff8a14;
      }
      .cls-2 {
        fill: #adc4d9;
      }
      .cls-2,
      .cls-5,
      .cls-7,
      .cls-8,
      .cls-9 {
        stroke: #45413c;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .cls-3 {
        fill: #ffe500;
      }
      .cls-4 {
        fill: #fff48c;
      }
      .cls-5 {
        fill: none;
      }
      .cls-13,
      .cls-6 {
        fill: #45413c;
      }
      .cls-6 {
        opacity: 0.15;
      }
      .cls-7 {
        fill: #fff;
      }
      .cls-8 {
        fill: #ff6242;
      }
      .cls-9 {
        fill: #6dd627;
      }
      .cls-10 {
        fill: #ffaa54;
      }
      .cls-11 {
        fill: #c0dceb;
      }
      .cls-12 {
        fill: #daedf7;
      }
    </style></defs><title>93-robot-face-2</title><path id="_Path_" data-name="<Path>" class="cls-1" d="M2.34,39A4.06,4.06,0,0,1,1.16,33.4l7.47,4.86A4.05,4.05,0,0,1,3,39.45Z"></path><path id="_Path_2" data-name="<Path>" class="cls-2" d="M33.5,17h-9l.58-2.38A1.46,1.46,0,0,1,26.5,13.5h5a1.47,1.47,0,0,1,1.42,1.11Z"></path><path class="cls-3" d="M29,16A14.5,14.5,0,0,0,14.5,30.5V41A3.5,3.5,0,0,0,18,44.5H40A3.5,3.5,0,0,0,43.5,41V30.5A14.5,14.5,0,0,0,29,16Z"></path><path class="cls-4" d="M29,16A14.5,14.5,0,0,0,14.5,30.5v4a14.5,14.5,0,0,1,29,0v-4A14.5,14.5,0,0,0,29,16Z"></path><path class="cls-5" d="M29,16A14.5,14.5,0,0,0,14.5,30.5V41A3.5,3.5,0,0,0,18,44.5H40A3.5,3.5,0,0,0,43.5,41V30.5A14.5,14.5,0,0,0,29,16Z"></path><ellipse id="_Ellipse_" data-name="<Ellipse>" class="cls-6" cx="29" cy="46.5" rx="16.5" ry="1.5"></ellipse><circle id="_Ellipse_2" data-name="<Ellipse>" class="cls-7" cx="35.89" cy="29.08" r="4.46"></circle><circle id="_Ellipse_3" data-name="<Ellipse>" class="cls-8" cx="35.89" cy="29.08" r="1.62"></circle><circle id="_Ellipse_4" data-name="<Ellipse>" class="cls-7" cx="22.11" cy="29.08" r="4.05"></circle><circle id="_Ellipse_5" data-name="<Ellipse>" class="cls-9" cx="22.11" cy="29.08" r="1.62"></circle><line id="_Line_" data-name="<Line>" class="cls-5" x1="29" y1="16" x2="29" y2="38"></line><line id="_Line_2" data-name="<Line>" class="cls-5" x1="35.89" y1="26.25" x2="35.89" y2="24.62"></line><line id="_Line_3" data-name="<Line>" class="cls-5" x1="37.9" y1="27.08" x2="39.04" y2="25.93"></line><line id="_Line_4" data-name="<Line>" class="cls-5" x1="38.73" y1="29.08" x2="40.35" y2="29.08"></line><line id="_Line_5" data-name="<Line>" class="cls-5" x1="37.9" y1="31.09" x2="39.04" y2="32.24"></line><line id="_Line_6" data-name="<Line>" class="cls-5" x1="35.89" y1="31.92" x2="35.89" y2="33.54"></line><line id="_Line_7" data-name="<Line>" class="cls-5" x1="33.88" y1="31.09" x2="32.74" y2="32.24"></line><line id="_Line_8" data-name="<Line>" class="cls-5" x1="33.05" y1="29.08" x2="31.43" y2="29.08"></line><line id="_Line_9" data-name="<Line>" class="cls-5" x1="33.88" y1="27.08" x2="32.74" y2="25.93"></line><polyline id="_Path_3" data-name="<Path>" class="cls-5" points="29 13.5 29 11.5 33.5 10 28 5 36 7 38.03 2.53"></polyline><circle id="_Ellipse_6" data-name="<Ellipse>" class="cls-8" cx="38.03" cy="2.53" r="2.03"></circle><path id="_Path_4" data-name="<Path>" class="cls-5" d="M14.5,36.38s-.5-5.27-2.93-4.87c-2.88.49-2,7.71.41,7.3,2-.34-1.62-6.89-4.46-6.08C5.93,33.19,5.1,35.25,5,35.92"></path><path id="_Path_5" data-name="<Path>" class="cls-10" d="M1.08,33.55a4.76,4.76,0,0,0,2.26,4l.77.5a4.81,4.81,0,0,0,4.26.57,2,2,0,0,0,.26-.32L1.16,33.4A1.09,1.09,0,0,0,1.08,33.55Z"></path><path id="_Path_6" data-name="<Path>" class="cls-5" d="M2.34,39A4.06,4.06,0,0,1,1.16,33.4l7.47,4.86A4.05,4.05,0,0,1,3,39.45Z"></path><path class="cls-1" d="M47.5,35.5a4,4,0,0,1-4,4v-9a4,4,0,0,1,4,4Z"></path><path class="cls-10" d="M43.5,30.5v2a4,4,0,0,1,4,3.5,4.07,4.07,0,0,0,0-.5v-1A4,4,0,0,0,43.5,30.5Z"></path><path class="cls-5" d="M47.5,35.5a4,4,0,0,1-4,4v-9a4,4,0,0,1,4,4Z"></path><rect class="cls-11" x="18.5" y="38" width="21" height="8" rx="1.5" ry="1.5"></rect><path class="cls-12" d="M38,38H20a1.5,1.5,0,0,0-1.5,1.5v2A1.5,1.5,0,0,1,20,40H38a1.5,1.5,0,0,1,1.5,1.5v-2A1.5,1.5,0,0,0,38,38Z"></path><rect class="cls-5" x="18.5" y="38" width="21" height="8" rx="1.5" ry="1.5"></rect><path class="cls-13" d="M20.5,39.5a.5.5,0,1,0,.5.5.5.5,0,0,0-.5-.5Z"></path><path class="cls-13" d="M37.5,39.5a.5.5,0,1,0,.5.5.5.5,0,0,0-.5-.5Z"></path></svg>`;
}, "D:/\u5F00\u53D1\u5DE5\u5177/Isstech/chatgpt-vercel/src/components/Logo.astro");

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro();
const $$ThemeToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ThemeToggle;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<button id="themeToggle" class="flex items-center justify-center w-10 h-10 rounded-md border transition-colors hover:bg-slate/10 astro-X3PJSKD3" onclick="handleToggleTheme()">
  <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="astro-X3PJSKD3">
    <path class="sun astro-X3PJSKD3" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z"></path>
    <path class="moon astro-X3PJSKD3" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z"></path>
  </svg>
</button>



<script>
  const persistentTheme = localStorage.getItem("theme")
  const darkSchema = window.matchMedia("(prefers-color-scheme: dark)")
  function toggle(flag) {
    document.documentElement.classList.toggle("dark", flag)
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", flag ? "#16161a" : "#f6f8fa")
  }

  function listener() {
    toggle(darkSchema?.matches)
  }

  if (persistentTheme) {
    toggle(persistentTheme === "dark")
  } else {
    darkSchema.addEventListener("change", listener)
    toggle(darkSchema?.matches)
  }

  function handleToggleTheme() {
    const element = document.documentElement
    element.classList.toggle("dark")

    const isDark = element.classList.contains("dark")
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", isDark ? "#16161a" : "#f6f8fa")
    darkSchema.removeEventListener("change", listener)
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }
<\/script>`])), maybeRenderHead());
}, "D:/\u5F00\u53D1\u5DE5\u5177/Isstech/chatgpt-vercel/src/components/ThemeToggle.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate(_a || (_a = __template(["", '<header class="sticky top--100px z-99 px-2em">\n  <div class="w-100px h-100px logo">\n    ', '\n  </div>\n  <div class="flex justify-between items-center py-1">\n    <div class="flex items-center mt-2 pb-2 text-2xl title cursor-pointer" onclick="scrollToTop()">\n      <span class="text-transparent font-extrabold bg-clip-text bg-gradient-to-r dark:from-yellow-300 from-yellow-600 dark:to-red-700 to-red-700 mr-1">ChatGPT</span>\n      <span class="ml-1 font-extrabold text-slate-7 dark:text-slate">Vercel</span>\n      <!-- <a\n        class="ml-2 <sm:hidden"\n        href="https://github.com/ourongxing/chatgpt-vercel"\n      >\n        <img\n          alt="GitHub forks badge"\n          src="https://img.shields.io/github/stars/ourongxing/chatgpt-vercel?logo=github"\n        />\n      </a>\n      <a class="ml-2" href="https://github.com/ourongxing/chatgpt-vercel/fork">\n        <img\n          alt="GitHub forks badge"\n          src="https://img.shields.io/github/forks/ourongxing/chatgpt-vercel?logo=github"\n        />\n      </a> -->\n    </div>\n    ', '\n  </div>\n</header>\n\n<script>\n  function scrollToTop() {\n    window.scrollTo({\n      top: 0,\n      behavior: "smooth"\n    })\n  }\n<\/script>\n\n<style>\n  .after .title,\n  .after #themeToggle,\n  .after .logo,\n  .after #message-container {\n    transition-property: transform, opacity;\n    transition-duration: 1s;\n    transition-timing-function: ease-in-out;\n  }\n\n  .before .logo {\n    transform: translate3D(25px, 150px, 0) scale(2);\n  }\n\n  .before #themeToggle {\n    transform: translate3D(0, 200px, 0) rotate(540deg);\n  }\n\n  .before .title,\n  .before #message-container {\n    transform: translate3D(0, 200px, 0);\n  }\n\n  .before #themeToggle,\n  .before #message-container {\n    opacity: 0;\n  }\n\n  #themeToggle {\n    border: 0;\n    opacity: 1;\n  }\n  .after #message-container {\n    opacity: 1;\n  }\n</style>'])), maybeRenderHead(), renderComponent($$result, "Logo", $$Logo, {}), renderComponent($$result, "ThemeToggle", $$ThemeToggle, {}));
}, "D:/\u5F00\u53D1\u5DE5\u5177/Isstech/chatgpt-vercel/src/components/Header.astro");

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<main>
    ${renderComponent($$result2, "Header", $$Header, {})}
    <a href="/" class="text-2xl font-extrabold text-slate-7 dark:text-slate">迷路了，点我回主页吧</a>
  </main>
` })}`;
}, "D:/\u5F00\u53D1\u5DE5\u5177/Isstech/chatgpt-vercel/src/pages/404.astro");

const $$file = "D:/开发工具/Isstech/chatgpt-vercel/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, _404 as _, $$Layout as a };
