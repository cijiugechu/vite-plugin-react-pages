import{c as e}from"./clientRender.bdf7c7ff.js";const i={},o="wrapper";function t({components:a,...n}){return e(o,{...i,...n,components:a,mdxType:"MDXLayout"},e("h1",null,"Upgrade from vite-plugin-react-pages v2"),e("h2",null,"Upgrade package versions"),e("p",null,"Upgrade these package versions:"),e("pre",null,e("code",{parentName:"pre",className:"language-json"},`{
  "devDependencies": {
    "@vitejs/plugin-react": "^2.0.1",
    "vite": "^3.0.7",
    "vite-plugin-mdx": "^3.5.6",
    "vite-plugin-react-pages": "^3.2.1",
    "vite-pages-theme-basic": "^3.0.0"
  }
}
`)),e("p",null,"Notice that you need to ",e("a",{parentName:"p",href:"https://vitejs.dev/guide/migration.html"},"migrate your app to vite v3")," with this setup."),e("p",null,"It is very recommended to migrate ",e("inlineCode",{parentName:"p"},"vite-pages-theme-basic")," to ",e("a",{parentName:"p",href:"/official-theme"},"vite-pages-theme-doc"),"."),e("h3",null,"Stick with vite v2"),e("p",null,"If you are not ready for vite v3 for some reason, you can stick with vite v2:"),e("pre",null,e("code",{parentName:"pre",className:"language-json"},`{
  "devDependencies": {
    "@vitejs/plugin-react": "^1.1.4",
    "vite": "^2.5.6",
    "vite-plugin-mdx": "^3.5.6",
    "vite-plugin-react-pages": "^3.2.1",
    "vite-pages-theme-basic": "^3.0.0"
  }
}
`)),e("p",null,"Notice the version of ",e("inlineCode",{parentName:"p"},"@vitejs/plugin-react")," need to be changed together with ",e("inlineCode",{parentName:"p"},"vite"),"."),e("p",null,"We also recommend you to migrate ",e("inlineCode",{parentName:"p"},"vite-pages-theme-basic")," to ",e("a",{parentName:"p",href:"/official-theme"},"vite-pages-theme-doc")," with this setup (with vite v2)."),e("h2",null,"Install peerDependencies for mdx"),e("p",null,e("inlineCode",{parentName:"p"},"vite-plugin-mdx")," no longer install mdx-related peerDependencies for you. You should install them in your project:"),e("pre",null,e("code",{parentName:"pre",className:"language-json"},`{
  "devDependencies": {
    "@mdx-js/mdx": "^1.6.22",
    "@mdx-js/react": "^1.6.22"
  }
}
`)),e("blockquote",null,e("p",{parentName:"blockquote"},e("a",{parentName:"p",href:"https://github.com/brillout/vite-plugin-mdx"},"vite-plugin-mdx")," has been moved to a seperate repo. (",e("a",{parentName:"p",href:"https://github.com/vitejs/vite-plugin-react-pages/issues/6"},"related issue"),")")),e("h2",null,"A Small update to theme API"),e("blockquote",null,e("p",{parentName:"blockquote"},e("strong",{parentName:"p"},"If you have only used the basic theme and haven't created a custom theme. You don't need to care about this API change."))),e("p",null,"In ",e("inlineCode",{parentName:"p"},"vite-plugin-react-pages@3.x"),", vite-pages don't pass staticData to the theme component any more. You should use the hook ",e("inlineCode",{parentName:"p"},"useStaticData")," to get staticData. This API update is for less prop drilling and more efficient HMR update during dev."),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`interface ThemeProps {
  // staticData is removed, use useStaticData instead
  readonly loadedData: PagesLoaded
  readonly loadState: LoadState
}

/**
 * A react hook to get static data.
 * import { useStaticData } from 'vite-plugin-react-pages/client'
 */
export interface UseStaticData {
  (): PagesStaticData
  (path: string): Record<string, any>
}
`)),e("p",null,"Here is an ",e("a",{parentName:"p",href:"https://github.com/vitejs/vite-plugin-react-pages/commit/61f0fa0223ef28c526dfc7bd87bafd8de2523c38#diff-e18e1392eaf0be6f307cc5ba266f589b1517c4d991d6e0d5006c339fbe4b7ff6"},"example upgrade commit"),"."),e("h2",null,"findPages API change"),e("blockquote",null,e("p",{parentName:"blockquote"},e("strong",{parentName:"p"},`If you have only used the "Basic Filesystem Routing Convention" and haven't used `,e("inlineCode",{parentName:"strong"},"findPages"),` to do "Advanced Filesystem Routing". You don't need to care about this API change.`))),e("p",null,"Previously, ",e("inlineCode",{parentName:"p"},"vite-plugin-react-pages"),` don't react to the change from the fileSystem. If there is file add/update/unlink that will result in different pageData, you need to restart the dev server.
In `,e("inlineCode",{parentName:"p"},"vite-plugin-react-pages@3.x"),", vite-pages use chokidar to scan the fileSystem and watch for files."),e("blockquote",null,e("p",{parentName:"blockquote"},"Thanks ",e("a",{parentName:"p",href:"https://github.com/aleclarson"},"Alec Larson")," for the idea and initial implementation.")),e("p",null,'In order to handle the change from from the fileSystem, the "Advanced Filesystem Routing" API has changed from the ',e("inlineCode",{parentName:"p"},"findPages")," API to the ",e("inlineCode",{parentName:"p"},"pageStrategy")," API. Checkout ",e("a",{parentName:"p",href:"/advanced-fs-routing"},"the advanced-fs-routing doc")," to learn about the latest API."))}t.isMDXComponent=!0;const p=Object.freeze(Object.defineProperty({__proto__:null,default:t},Symbol.toStringTag,{value:"Module"})),r={};r.main=p;export{r as default};
