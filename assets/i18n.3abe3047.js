import{c as e}from"./clientRender.bdf7c7ff.js";const n={},o="wrapper";function t({components:a,...l}){return e(o,{...n,...l,components:a,mdxType:"MDXLayout"},e("h1",null,"Internationalization"),e("p",null,"i18n support can be provided by theme. For example, ",e("a",{parentName:"p",href:"/official-theme"},"the official theme(vite-pages-theme-doc)")," support i18n. This document shows how to create a multi-lingual site with it."),e("h2",null,"Define i18n metadata in the theme config"),e("p",null,"The ",e("a",{parentName:"p",href:"/official-theme"},"the official theme(vite-pages-theme-doc)")," accepts 1i8n config like this:"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`import { createTheme } from 'vite-pages-theme-doc'

export default createTheme({
  i18n: {
    defaultLocale: 'en',
    topBarLocaleSelector: true,
    locales: {
      en: {
        label: 'English',
        lang: 'en', // this will be set as the \`lang\` attribute on <html>
        routePrefix: '/',
      },
      zh: {
        label: '\u4E2D\u6587',
        lang: 'zh-CN',
        routePrefix: '/zh',
      },
    },
  },
  /** Other configs... */
})
`)),e("p",null,"Here is the type definition of the ",e("inlineCode",{parentName:"p"},"i18n")," property (",e("inlineCode",{parentName:"p"},"I18nConfig"),"):"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`interface I18nConfig {
  /**
   * The localeKey of default locale
   * If a page have pagePath that doesn't match any \`LocalConfig.routePrefix\`,
   *  the \`I18nConfig.defaultLocale\` will apply to it
   */
  defaultLocale: string
  /**
   * If true, this theme will render a locale selector at topbar
   * Only matters when you have more than one locales
   * @defaultValue true
   */
  topBarLocaleSelector?: boolean
  /**
   * Define all locales that your site supports
   * Map localeKey to locale config
   */
  locales: Record<string, LocalConfig>
}

interface LocalConfig {
  /**
   * This will be set as the lang attribute on <html>
   */
  lang?: string
  /**
   * This label will be used when rendering the locale
   * in the locale selector
   */
  label?: string
  /**
   * If a page have pagePath with this prefix, this locale will apply to it
   * If a page have pagePath that doesn't match any routePrefix,
   *  the \`I18nConfig.defaultLocale\` will apply to it
   */
  routePrefix?: string
}
`)),e("p",null,"With this i18n metadata, the theme can decide which locale to apply. For any specific page, it match its pagePath with each ",e("inlineCode",{parentName:"p"},"LocalConfig.routePrefix"),":"),e("ul",null,e("li",{parentName:"ul"},"If the pagePath match with a ",e("inlineCode",{parentName:"li"},"LocalConfig.routePrefix"),", this locale will apply to the page"),e("li",{parentName:"ul"},"If the pagePath doesn't match any routePrefix, the ",e("inlineCode",{parentName:"li"},"I18nConfig.defaultLocale")," will apply to the page")),e("p",null,"With the example config above, page ",e("inlineCode",{parentName:"p"},"/foo$.tsx")," will have the locale keyed with ",e("inlineCode",{parentName:"p"},"en"),". Page ",e("inlineCode",{parentName:"p"},"/zh/foo$.tsx")," will have the locale keyed with ",e("inlineCode",{parentName:"p"},"zh"),"."),e("p",null,'What does it mean when we say "the page P has locale L" (or "locale L applies to page P")? It means two things:'),e("ul",null,e("li",{parentName:"ul"},"Most site-level theme configs can decide their value based on the current applied locale. So that you can render ",e("inlineCode",{parentName:"li"},"topNavs")," and ",e("inlineCode",{parentName:"li"},"sideNavs")," with the correct language."),e("li",{parentName:"ul"},"In any React Component, you can get the current applied locale from ",e("inlineCode",{parentName:"li"},"useThemeCtx()")," so that you can decide which i18n translated message to render.")),e("p",null,"We will talk about these techniques in the following sections."),e("h2",null,"Return theme config according to the current locale"),e("p",null,"All ",e("a",{parentName:"p",href:"/official-theme#theme-configs"},"theme config")," (",e("inlineCode",{parentName:"p"},"topNavs"),", ",e("inlineCode",{parentName:"p"},"sideNavs"),", ",e("inlineCode",{parentName:"p"},"logo"),", etc.) ",e("strong",{parentName:"p"},"that accepts a value")," can also accept a config function, so that you can get the current locale info from the function argument(",e("inlineCode",{parentName:"p"},"ThemeContextValue"),"). For example, here is the type definition of the theme config ",e("inlineCode",{parentName:"p"},"topNavs"),":"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`interface ThemeConfig {
  /** ... */
  topNavs?:
    | ReadonlyArray<MenuConfig>
    | ((ctx: ThemeContextValue) => ReadonlyArray<MenuConfig> | null | undefined)
}

type ThemeContextValue = {
  /** ... */
  resolvedLocale: {
    locale?: LocalConfig
    localeKey?: string
    pagePathWithoutLocalePrefix?: string
  }
}
`)),e("p",null,"To make topNavs support multiple languages, you can define ",e("inlineCode",{parentName:"p"},"topNavs")," like this:"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`import { createTheme } from 'vite-pages-theme-doc'
import type { MenuConfig } from 'vite-pages-theme-doc'

const topNavsConfig: { [locale: string]: MenuConfig[] } = {
  en: [
    { label: 'Home', path: '/' },
    {
      label: 'Guide',
      path: '/guide/introduce',
    },
    {
      subMenu: 'Links',
      children: [
        {
          label: 'Resources',
          path: '/resources',
        },
        {
          label: 'Vite',
          href: 'https://vitejs.dev/',
        },
      ],
    },
  ],
  zh: [
    { label: '\u9996\u9875', path: '/zh' },
    {
      label: '\u6307\u5357',
      path: '/zh/guide/introduce',
    },
    {
      subMenu: '\u94FE\u63A5',
      children: [
        {
          label: '\u8D44\u6E90',
          path: '/zh/resources',
        },
        {
          label: 'Vite',
          href: 'https://vitejs.dev/',
        },
      ],
    },
  ],
}

export default createTheme({
  /** ... */
  topNavs: ({ resolvedLocale: { localeKey } }) => {
    // return config according to resolvedLocale
    return topNavsConfig[localeKey!]
  },
})
`)),e("blockquote",null,e("p",{parentName:"blockquote"},e("a",{parentName:"p",href:"https://github.com/vitejs/vite-plugin-react-pages/blob/1a67c7c41f6fb488243183bf6814550d85ce5c23/packages/playground/use-theme-doc/pages/_theme.tsx#L27"},"Here is a complete example project"),".")),e("h2",null,"Create pages for each locale"),e("p",null,"Your project file structure should be like this:"),e("pre",null,e("code",{parentName:"pre",className:"language-txt"},`docs
\u251C\u2500 foo$.md
\u251C\u2500 bar$.tsx
\u251C\u2500 nested
\u2502  \u2514\u2500 baz$.md
\u2514\u2500 zh
   \u251C\u2500 foo$.md
   \u251C\u2500 bar$.tsx
   \u2514\u2500 nested
      \u2514\u2500 baz.md
`)),e("p",null,"Each page with default locale should have its translated version. For example, ",e("inlineCode",{parentName:"p"},"/zh/foo$.md")," should be the chinese-translated version of ",e("inlineCode",{parentName:"p"},"/foo$.md"),"."),e("h3",null,"Markdown pages: translate them into each locale"),e("p",null,"Here is a markdown page for default locale (",e("inlineCode",{parentName:"p"},"/foo$.md"),"):"),e("pre",null,e("code",{parentName:"pre",className:"language-md"},`---
title: This is the title written in default locale
---

This is the markdown content written in default locale.
`)),e("p",null,"Here is the translated markdown page (",e("inlineCode",{parentName:"p"},"/zh/foo$.md"),"):"),e("pre",null,e("code",{parentName:"pre",className:"language-md"},`---
title: This is the translated title
---

This is the translated markdown content.
`)),e("h3",null,"React Component pages: support all locales within them"),e("p",null,"If you define a page with React Component (",e("inlineCode",{parentName:"p"},".tsx"),"), it is recommended to make it support all locales, instead of defining a new React Component for each locale."),e("p",null,"For example, here is a React Component page for default locale (",e("inlineCode",{parentName:"p"},"/bar$.tsx"),"):"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`/**
 * @title This is the title written in default locale
 */

import React from 'react'
import { useThemeCtx } from 'vite-pages-theme-doc'

const Page = () => {
  const intl = useIntl()
  return <p>{messages['page.page1.content']}</p>
}

/**
 * In a more complex app, you can use i18n library like \`react-intl\`
 * to make a React Component support multiple languages
 */
function useIntl() {
  const {
    resolvedLocale: { localeKey },
  } = useThemeCtx()
  return messages[localeKey]
}

const messages = {
  en: {
    'page.page1.content': 'This is Page1 content',
  },
  zh: {
    'page.page1.content':
      'This is translated Page1 content for the locale \`zh\`',
  },
}

export default Page
`)),e("p",null,"When defining the page for other locale (",e("inlineCode",{parentName:"p"},"/zh/bar$.tsx"),"), you can ",e("strong",{parentName:"p"},"re-export the React Component"),":"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`/**
 * @title This is the translated title for the locale \`zh\`
 */

export { default } from '../bar$'
`)),e("p",null,"Notice that we reuse the same React Component for multiple locales. And we define page static metadata(",e("inlineCode",{parentName:"p"},"@title"),") with correct translation in each page file."),e("blockquote",null,e("p",{parentName:"blockquote"},"When using i18n library like ",e("inlineCode",{parentName:"p"},"react-intl"),", and you need to wrap your App with some custom React Component, you can use ",e("inlineCode",{parentName:"p"},"ThemeConfig.AppWrapper"),".")),e("h3",null,"Get current locale in React Components or Hooks"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`import { useThemeCtx } from 'vite-pages-theme-doc'

function useI18nMeta() {
  const {
    resolvedLocale,
    themeConfig: { i18n },
  } = useThemeCtx()
  // get resolvedLocale and i18nConfig from \`useThemeCtx()\`
  return { resolvedLocale, i18nConfig: i18n }
}
`)))}t.isMDXComponent=!0;const i=Object.freeze(Object.defineProperty({__proto__:null,default:t},Symbol.toStringTag,{value:"Module"})),r={};r.main=i;export{r as default};
