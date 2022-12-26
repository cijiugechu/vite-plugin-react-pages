import{c as e}from"./clientRender.bdf7c7ff.js";const r={},l="wrapper";function t({components:a,...n}){return e(l,{...r,...n,components:a,mdxType:"MDXLayout"},e("h1",null,"Filesystem Routing"),e("p",null,"Vite-pages generates page routes based on your project file structure (filesystem routing)."),e("h2",null,"Basic Filesystem Routing Convention"),e("p",null,"The basic filesystem routing convention is very intuitive. It works out of the box and doesn't need any config. It should satisfy most users' needs."),e("p",null,e("strong",{parentName:"p"},"You can create a page by simply creating a file"),": ",e("inlineCode",{parentName:"p"},"page-name$.tsx"),". Notice the ",e("inlineCode",{parentName:"p"},"$")," ",e("strong",{parentName:"p"},"at the end of the filename"),". Vite-pages recognizes it and know it is a page entry."),e("p",null,"If the filename is ",e("inlineCode",{parentName:"p"},"index$.tsx"),", the page route path will be the path of the directory. See examples below."),e("blockquote",null,e("p",{parentName:"blockquote"},"All file extensions ",e("inlineCode",{parentName:"p"},".ts|.tsx|.js|.jsx|.md|.mdx")," works, as long as ",e("inlineCode",{parentName:"p"},"$")," is the last character before the extension.")),e("h2",null,"Examples"),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"file path"),e("th",{parentName:"tr",align:null},"page url path"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},e("inlineCode",{parentName:"td"},"index$.tsx")),e("td",{parentName:"tr",align:null},e("inlineCode",{parentName:"td"},"/"))),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},e("inlineCode",{parentName:"td"},"$.tsx")," (has same effect as ",e("inlineCode",{parentName:"td"},"index$.tsx"),")"),e("td",{parentName:"tr",align:null},e("inlineCode",{parentName:"td"},"/"))),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},e("inlineCode",{parentName:"td"},"page-one$.tsx")),e("td",{parentName:"tr",align:null},e("inlineCode",{parentName:"td"},"/page-one"))),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},e("inlineCode",{parentName:"td"},"page-two$.md")),e("td",{parentName:"tr",align:null},e("inlineCode",{parentName:"td"},"/page-two"))),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},e("inlineCode",{parentName:"td"},"dir-name/index$.jsx")),e("td",{parentName:"tr",align:null},e("inlineCode",{parentName:"td"},"/dir-name"))),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},e("inlineCode",{parentName:"td"},"dir-name/page-three$.mdx")),e("td",{parentName:"tr",align:null},e("inlineCode",{parentName:"td"},"/dir-name/page-three"))),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},e("inlineCode",{parentName:"td"},"dir-name/[id]/index$.tsx")," (URL Paramater)"),e("td",{parentName:"tr",align:null},e("inlineCode",{parentName:"td"},"/dir-name/:id"))),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},e("inlineCode",{parentName:"td"},"dir-name/[id]/[id2]$.tsx")," (URL Paramaters)"),e("td",{parentName:"tr",align:null},e("inlineCode",{parentName:"td"},"/dir-name/:id/:id2"))))),e("p",null,"Theme can decide what to render when no page matches the url. Checkout ",e("a",{parentName:"p",href:"/theme-customization"},"the theme doc"),"."),e("p",null,"If a page path contains url paramaters, you can use ",e("a",{parentName:"p",href:"https://reactrouter.com/web/example/url-params"},"useParams")," of ",e("inlineCode",{parentName:"p"},"react-router-dom")," to access the actual paramaters."),e("p",null,"Checkout ",e("a",{parentName:"p",href:"https://github.com/vitejs/vite-plugin-react-pages/tree/main/packages/playground/basic/pages"},"the basic fixture")," for an example."),e("h2",null,"Advanced Filesystem Routing"),e("p",null,`The "Basic Filesystem Routing Convention" should satisfy most users' needs. For advanced users, vite-pages let you implement your own filesystem routing convention: you can `,e("strong",{parentName:"p"},"teach vite-pages how to collect page data from your project"),". Checkout ",e("a",{parentName:"p",href:"/advanced-fs-routing"},"advanced fs routing"),"."))}t.isMDXComponent=!0;const i=Object.freeze(Object.defineProperty({__proto__:null,default:t},Symbol.toStringTag,{value:"Module"})),o={};o.main=i;export{o as default};
