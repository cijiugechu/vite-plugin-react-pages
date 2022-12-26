import{c as e}from"./clientRender.bdf7c7ff.js";const r=`import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
import mdx from 'vite-plugin-mdx'
import pages, {
  PageStrategy,
  FileHandler,
  File,
  extractStaticData,
} from 'vite-plugin-react-pages'

export default defineConfig({
  plugins: [
    react(),
    mdx(),
    pages({
      pagesDir: __dirname,
      // custom pageStrategy
      pageStrategy: new PageStrategy(function findPages(pagesDir, helpers) {
        helpers.watchFiles(
          pagesDir,
          '**/index.{md,mdx,js,jsx,ts,tsx}',
          fileHandler
        )
      }),
    }),
  ],
})

const fileHandler: FileHandler = async (file: File, fileHandlerAPI) => {
  const pagePublicPath = getPagePublicPath(file.relative)
  fileHandlerAPI.addPageData({
    pageId: pagePublicPath,
    dataPath: file.path,
    staticData: await extractStaticData(file),
  })
}

/**
 * turn \`sub-path/page2/index.tsx\` into \`/sub-path/page2\`
 */
function getPagePublicPath(relativePageFilePath: string) {
  console.log('getPagePublicPath', relativePageFilePath)
  let pagePublicPath = relativePageFilePath.replace(
    /index\\.(md|mdx|js|jsx|ts|tsx)$/,
    ''
  )
  // remove ending slash
  pagePublicPath = pagePublicPath.replace(/\\/$/, '')
  // add starting slash
  pagePublicPath = \`/\${pagePublicPath}\`
  return pagePublicPath
}
`,o=`import type { File } from '../utils/virtual-module'

export type FindPages = (
  pagesDir: string,
  helpers: PageHelpers
) => void | Promise<void>

export interface PageHelpers extends PageAPIs {
  /**
   * Read the static data from a file.
   */
  readonly extractStaticData: (file: File) => Promise<{
    readonly [key: string]: any
    readonly sourceType: string
  }>
  /**
   * Scan the fileSystem and
   * set page data in the file handler.
   * File deletion will be handled automatically
   */
  readonly watchFiles: WatchFilesHelper
}

export interface WatchFilesHelper {
  /** Watch all files within a directory (except node_modules and .git) */
  (baseDir: string, fileHandler?: FileHandler): void
  /** Watch files matching the given glob */
  (baseDir: string, glob: string, fileHandler?: FileHandler): void
  /** Watch files matching one of the given globs */
  (baseDir: string, globs: string[], fileHandler?: FileHandler): void
}

export type FileHandler = (
  file: File,
  api: PageAPIs
) => void | Promise<void> | DataPiece | Promise<DataPiece>

export interface PageAPIs {
  /**
   * Get a mutable data object of runtimeData
   */
  getRuntimeData: (pageId: string) => {
    [key: string]: string
  }
  /**
   * Get a mutable data object of staticData
   */
  getStaticData: (pageId: string) => {
    [key: string]: any
  }
  /**
   * Add page data.
   * If the data already exists, overwrite it.
   */
  addPageData: (pageData: DataPiece) => void
}

export interface DataPiece {
  /**
   * The page route path.
   * User can register multiple page data with same pageId,
   * as long as they have different keys.
   * Page data with same pageId will be merged.
   *
   * @example '/posts/hello-world'
   */
  readonly pageId: string
  /**
   * The data key.
   * For a same page, users can register multiple data pieces,
   * each with its own key. (Composed Page Data)
   *
   * @default 'main'
   */
  readonly key?: string
  /**
   * The path to the runtime data module.
   * It will be registered with the \`key\`.
   */
  readonly dataPath?: string
  /**
   * The value of static data.
   * It will be registered with the \`key\`.
   */
  readonly staticData?: any
  /**
   * when multiple data pieces have same key (conflict),
   * the data piece with highest priority will win
   * @default 1
   */
  readonly priority?: number
}
`,s=a=>function(l){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",{...l})},n=s("FileText"),p={},d="wrapper";function i({components:a,...t}){return e(d,{...p,...t,components:a,mdxType:"MDXLayout"},e("h2",null,"Advanced Filesystem Routing: pageStrategy API"),e("blockquote",null,e("p",{parentName:"blockquote"},`The "Basic Filesystem Routing Convention" should satisfy most users' needs. `,e("strong",{parentName:"p"},"You probably don't need to read this advanced guide"),".")),e("p",null,"For advanced users, vite-pages let you implement your own filesystem routing convention: you can ",e("strong",{parentName:"p"},"teach vite-pages how to collect page data from your project"),"."),e("p",null,"When ",e("a",{parentName:"p",href:"https://github.com/vitejs/vite-plugin-react-pages/blob/main/packages/create-project/template-lib/docs/vite.config.ts"},"configuring vite-plugin-react-pages"),", you can pass the ",e("inlineCode",{parentName:"p"},"pageStrategy")," option. It should be an instance of ",e("inlineCode",{parentName:"p"},"PageStrategy")," class. Here is an example of customizing pageStrategy:"),e("p",null,"vite.config.ts:"),e(n,{text:r,syntax:"ts",mdxType:"FileText"}),e("p",null,"With this custom pageStrategy, page files don't need to ends with ",e("inlineCode",{parentName:"p"},"$"),". Instead, they need to match the pattern ",e("inlineCode",{parentName:"p"},"**/index.{md,mdx,js,jsx,ts,tsx}"),"."),e("blockquote",null,e("p",{parentName:"blockquote"},"Checkout complete examples in ",e("a",{parentName:"p",href:"https://github.com/vitejs/vite-plugin-react-pages/blob/main/packages/playground/custom-find-pages2/vite.config.ts"},"the custom-find-pages2 fixture")," or ",e("a",{parentName:"p",href:"https://github.com/vitejs/vite-plugin-react-pages/blob/main/packages/create-project/template-lib/docs/vite.config.ts"},"the project scaffold"),".")),e("h3",null,"Steps of customizing pageStrategy"),e("p",null,"As shown by the above example, here is the usual steps to customize pageStrategy:"),e("ol",null,e("li",{parentName:"ol"},"Define a ",e("inlineCode",{parentName:"li"},"findPages")," function and pass it to ",e("inlineCode",{parentName:"li"},"PageStrategy")," constructor."),e("li",{parentName:"ol"},"Inside the ",e("inlineCode",{parentName:"li"},"findPages"),", use ",e("inlineCode",{parentName:"li"},"helpers.watchFiles(baseDir, glob, fileHandler)")," to find the files that you need.",e("ul",{parentName:"li"},e("li",{parentName:"ul"},"vite-pages will pass the glob(or glob array) to ",e("a",{parentName:"li",href:"https://github.com/paulmillr/chokidar"},"chokidar"),". vite-pages use chokidar to scan the fileSystem and watch for files."),e("li",{parentName:"ul"},"Whenever a file is scaned, added or updated, vite-pages will call the fileHandler with that file. When the file is unlinked, vite-pages will automatically delete the related page data."))),e("li",{parentName:"ol"},"Inside the ",e("inlineCode",{parentName:"li"},"fileHandler"),", read the infomation from ",e("inlineCode",{parentName:"li"},"file")," and register page data by calling ",e("inlineCode",{parentName:"li"},"fileHandlerAPI.addPageData"),".",e("ul",{parentName:"li"},e("li",{parentName:"ul"},"There are two more helpers inside ",e("inlineCode",{parentName:"li"},"fileHandlerAPI")," that help you to update page data. We will introduce them in the following section.")))),e("h3",null,"Handle file change and update page data"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"fileHandler")," should conform to this interface:"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`type FileHandler = (
  file: File,
  api: PageAPIs
) => void | Promise<void> | DataPiece | Promise<DataPiece>
`)),e("p",null,"The ",e("inlineCode",{parentName:"p"},"HandlerAPI")," contains a set of helpers that help you to update page data."),e("h4",null,"fileHandlerAPI.addPageData(dataPiece)"),e("p",null,"The dataPiece should conform to this interface:"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`interface DataPiece {
  /**
   * The page route path.
   * User can register multiple page data with same pageId,
   * as long as they have different keys.
   * Page data with same pageId will be merged.
   *
   * @example '/posts/hello-world'
   */
  readonly pageId: string
  /**
   * The data key.
   * For a same page, users can register multiple data pieces,
   * each with its own key. (Composed Page Data)
   *
   * @default 'main'
   */
  readonly key?: string
  /**
   * The path to the runtime data module.
   * It will be registered with the \`key\`.
   */
  readonly dataPath?: string
  /**
   * The value of static data.
   * It will be registered with the \`key\`.
   */
  readonly staticData?: any
  /**
   * when multiple data pieces have same key (conflict),
   * the data piece with highest priority will win
   * @default 1
   */
  readonly priority?: number
}
`)),e("p",null,"In most cases, ",e("inlineCode",{parentName:"p"},"dataPath")," is the path of the currently handled file. And ",e("inlineCode",{parentName:"p"},"staticData")," is statically extracted from the file content (js docblock or markdown frontmatter). Vite-pages has exported a helper ",e("inlineCode",{parentName:"p"},"extractStaticData")," to do that."),e("p",null,"Checkout ",e("a",{parentName:"p",href:"https://github.com/vitejs/vite-plugin-react-pages/blob/main/packages/playground/custom-find-pages2/vite.config.ts"},"the custom-find-pages2 fixture")," for an example."),e("blockquote",null,e("p",{parentName:"blockquote"},"Checkout ",e("a",{parentName:"p",href:"/page-data"},"the page data doc")," for more explanation of ",e("inlineCode",{parentName:"p"},"key"),".")),e("h4",null,"fileHandlerAPI.getRuntimeData(pageId)"),e("p",null,"Inside the fileHandler, you can use it to get the runtimeData of a certain page. You can read or mutate the properties of it:"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`const runtimeDataPaths = fileHandlerAPI.getRuntimeData(pageId)
if (!runtimeDataPaths[key]) runtimeDataPaths[key] = pathToRuntimeModule
`)),e("p",null,"Checkout ",e("a",{parentName:"p",href:"https://github.com/vitejs/vite-plugin-react-pages/blob/main/packages/playground/custom-find-pages/vite.config.ts"},"the custom-find-pages fixture")," for an example."),e("h4",null,"fileHandlerAPI.getStaticData(pageId)"),e("p",null,"Similar to the ",e("inlineCode",{parentName:"p"},"fileHandlerAPI.getRuntimeData")," API, you can use ",e("inlineCode",{parentName:"p"},"fileHandlerAPI.getStaticData")," to get the staticData of a certain page. And tou can read or mutate the properties of it:"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`const staticData = fileHandlerAPI.getStaticData(pageId)
if (!staticData[key]) staticData[key] = await extractStaticData(file)
`)),e("p",null,"Checkout ",e("a",{parentName:"p",href:"https://github.com/vitejs/vite-plugin-react-pages/blob/main/packages/playground/custom-find-pages/vite.config.ts"},"the custom-find-pages fixture")," for an example."),e("h3",null,"Sharable pageStrategy"),e("p",null,"You can also define your strategy as a subclass of ",e("inlineCode",{parentName:"p"},"PageStrategy"),". It is more sharable than the previous way."),e("p",null,"For example, this is how vite-pages defines the default page strategy:"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`export class DefaultPageStrategy extends PageStrategy {
  constructor(
    opts: { extraFindPages?: FindPages; fileHandler?: FileHandler } = {}
  ) {
    const { extraFindPages, fileHandler = defaultFileHandler } = opts
    // pass a wrapped findPages function to super class
    super((pagesDir, helpersFromParent) => {
      // we can create our own helpers, providing a default fileHandler
      // and not using helpersFromParent
      const helpers = this.createHelpers(fileHandler)
      helpers.watchFiles(pagesDir, '**/*$.{md,mdx,js,jsx,ts,tsx}')
      if (typeof extraFindPages === 'function') {
        extraFindPages(pagesDir, helpers)
      }
    })
  }
}
`)),e("blockquote",null,e("p",{parentName:"blockquote"},e("a",{parentName:"p",href:"https://github.com/vitejs/vite-plugin-react-pages/blob/main/packages/react-pages/src/node/page-strategy/DefaultPageStrategy/index.ts"},"Source code of DefaultPageStrategy"),".")),e("p",null,e("a",{parentName:"p",href:"/examples/component-library"},"here is an example of using it"),"."),e("h4",null,"Examples"),e("p",null,"For real-life examples of customizing pageStrategy, checkout ",e("a",{parentName:"p",href:"/examples/component-library"},'"Example: develop a component library"'),"."),e("h4",null,"Types"),e("p",null,"Here is the relavent types:"),e(n,{text:o,syntax:"ts",mdxType:"FileText"}),e("blockquote",null,e("p",{parentName:"blockquote"},e("a",{parentName:"p",href:"https://github.com/vitejs/vite-plugin-react-pages/blob/main/packages/react-pages/src/node/page-strategy/types.document.d.ts"},"Source code"),".")))}i.isMDXComponent=!0;const g=Object.freeze(Object.defineProperty({__proto__:null,default:i},Symbol.toStringTag,{value:"Module"})),c={};c.main=g;export{c as default};
