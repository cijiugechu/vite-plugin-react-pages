import{c as e}from"./clientRender.bdf7c7ff.js";const u=`import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
import mdx from 'vite-plugin-mdx'
import pages, { DefaultPageStrategy } from 'vite-plugin-react-pages'

export default defineConfig({
  plugins: [
    react(),
    mdx(),
    pages({
      pagesDir: path.join(__dirname, 'pages'),
      pageStrategy: new DefaultPageStrategy({
        extraFindPages: async (pagesDir, helpers) => {
          const srcPath = path.join(__dirname, '../src')
          if (String(process.env.SHOW_ALL_COMPONENT_DEMOS) === 'true') {
            // show all component demos during dev
            // put them in page \`/components/demos/\${componentName}\`
            helpers.watchFiles(
              srcPath,
              '*/demos/**/*.{[tj]sx,md?(x)}',
              async function fileHandler(file, api) {
                const { relative, path: absolute } = file
                const match = relative.match(
                  /(.*)\\/demos\\/(.*)\\.([tj]sx|mdx?)$/
                )
                if (!match) throw new Error('unexpected file: ' + absolute)
                const [_, componentName, demoName] = match
                const pageId = \`/components/demos/\${componentName}\`
                // register page data
                api.addPageData({
                  pageId,
                  key: demoName,
                  // register demo runtime data path
                  // the ?demo query will wrap the module with useful demoInfo
                  // that will be consumed by theme-doc
                  dataPath: \`\${absolute}?demo\`,
                  // register demo static data
                  staticData: await helpers.extractStaticData(file),
                })
              }
            )
          }

          // find all component README
          helpers.watchFiles(
            srcPath,
            '*/README.md?(x)',
            async function fileHandler(file, api) {
              const { relative, path: absolute } = file
              const match = relative.match(/(.*)\\/README\\.mdx?$/)
              if (!match) throw new Error('unexpected file: ' + absolute)
              const [_, componentName] = match
              const pageId = \`/components/\${componentName}\`
              // register page data
              api.addPageData({
                pageId,
                // register demo runtime data path
                dataPath: absolute,
                // register demo static data
                staticData: await helpers.extractStaticData(file),
              })
            }
          )
        },
      }),
    }),
  ],
  resolve: {
    alias: {
      'my-lib': path.join(__dirname, '../src'),
    },
  },
})
`,s=t=>function(o){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",{...o})},i=s("FileText"),l={},p="wrapper";function a({components:t,...n}){return e(p,{...l,...n,components:t,mdxType:"MDXLayout"},e("h1",null,"Example: develop a component library"),e("p",null,'This is an example of using "Advanced Filesystem Routing" inside a component library project.'),e("p",null,"Suppose you are developing a React component library. Your project have file structure like this:"),e("pre",null,e("code",{parentName:"pre",className:"language-text"},`src
\u251C\u2500\u2500 Button
\u2502   \u251C\u2500\u2500 demos
\u2502   \u2502   \u251C\u2500\u2500 demo1.tsx
\u2502   \u2502   \u2514\u2500\u2500 demo2.tsx
\u2502   \u251C\u2500\u2500 index.tsx
\u2502   \u251C\u2500\u2500 style.module.css
\u2502   \u2514\u2500\u2500 README.md
\u251C\u2500\u2500 Card
\u2502   \u251C\u2500\u2500 demos
\u2502   \u2502   \u251C\u2500\u2500 demo1.tsx
\u2502   \u2502   \u2514\u2500\u2500 demo2.tsx
\u2502   \u251C\u2500\u2500 index.tsx
\u2502   \u251C\u2500\u2500 style.module.css
\u2502   \u2514\u2500\u2500 README.md
\u2514\u2500\u2500 index.ts
`)),e("p",null,"You want to use vite as your local demo development environment (because it is blazingly fast). ",e("strong",{parentName:"p"},"How to collect all components and all demos from this project?")," The file structure doesn't follow the ",e("a",{parentName:"p",href:"/fs-routing"},"Basic Filesystem Routing Convention"),"."),e("p",null,"The answer: implement your own filesystem routing convention!"),e("p",null,"vite.config.ts:"),e(i,{text:u,syntax:"ts",mdxType:"FileText"}),e("p",null,"We use ",e("inlineCode",{parentName:"p"},"api.getRuntimeData(pageId)")," and ",e("inlineCode",{parentName:"p"},"api.getStaticData(pageId)")," inside fileHandlers to get the pageData object. We can mutate the data object, and vite-pages will update its pages accordingly."),e("p",null,"Checkout the complete example in ",e("a",{parentName:"p",href:"https://github.com/vitejs/vite-plugin-react-pages/blob/main/packages/create-project/template-lib/docs/vite.config.ts"},"the library project scaffold"),`.
You can initialize this project `,e("a",{parentName:"p",href:"/"},"with one command")," (choose ",e("inlineCode",{parentName:"p"},"lib")," template)."),e("h2",null,"Monorepo"),e("p",null,"In some cases, we want to publish each component in their own packages."),e("blockquote",null,e("p",{parentName:"blockquote"},"Monorepo has more advantages when components are complex and tend to evolve independently. If we use a single package to publish all these components like the above example, all components share a version number. If we need to introduce a breaking change in a component, we have to bump the major version of the whole package. But with the monorepo we only need to bump the major version of that sub-package. Users will be more confident to upgrade.")),e("p",null,"In that case, we create a seperate package to run vite-pages, collecting all components and their demos. The project setup will look like this:"),e("pre",null,e("code",{parentName:"pre",className:"language-text"},`packages
\u251C\u2500\u2500 Button
\u2502   \u251C\u2500\u2500 demos
\u2502   \u2502   \u251C\u2500\u2500 demo1.tsx
\u2502   \u2502   \u2514\u2500\u2500 demo2.tsx
\u2502   \u251C\u2500\u2500 src
\u2502   \u2502   \u251C\u2500\u2500 index.tsx
\u2502   \u2502   \u2514\u2500\u2500 style.module.css
\u2502   \u251C\u2500\u2500 package.json
\u2502   \u2514\u2500\u2500 README.md
\u251C\u2500\u2500 Card
\u2502   \u251C\u2500\u2500 demos
\u2502   \u2502   \u251C\u2500\u2500 demo1.tsx
\u2502   \u2502   \u2514\u2500\u2500 demo2.tsx
\u2502   \u251C\u2500\u2500 src
\u2502   \u2502   \u251C\u2500\u2500 index.tsx
\u2502   \u2502   \u2514\u2500\u2500 style.module.css
\u2502   \u251C\u2500\u2500 package.json
\u2502   \u2514\u2500\u2500 README.md
\u251C\u2500\u2500 demos
\u2502   \u251C\u2500\u2500 pages
\u2502   \u2502   \u251C\u2500\u2500 index$.tsx
\u2502   \u2502   \u2514\u2500\u2500 _theme.tsx
\u2502   \u251C\u2500\u2500 index.html
\u2502   \u251C\u2500\u2500 package.json
\u2502   \u2514\u2500\u2500 vite.config.ts
\u2514\u2500\u2500 package.json
`)),e("p",null,"Checkout the complete example in ",e("a",{parentName:"p",href:"https://github.com/vitejs/vite-plugin-react-pages/blob/main/packages/create-project/template-lib-monorepo/packages/demos/vite.config.ts"},"the lib-monorepo scaffold"),`.
You can initialize this project `,e("a",{parentName:"p",href:"/"},"with one command")," (choose ",e("inlineCode",{parentName:"p"},"lib-monorepo")," template)."))}a.isMDXComponent=!0;const r=Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"})),m={};m.main=r;export{m as default};
