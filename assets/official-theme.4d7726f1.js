import{c as e}from"./clientRender.bdf7c7ff.js";const r=`import type { MenuConfig } from './Layout/renderMenu'
import type { FooterConfig, FooterColumn, FooterLink } from './Layout/Footer'
import type {
  PagesStaticData,
  ThemeProps,
} from 'vite-plugin-react-pages/clientTypes'

export interface ThemeConfig {
  /**
   * Logo at top bar
   */
  logo?: React.ReactNode | ((ctx: ThemeContextValue) => React.ReactNode)
  /**
   * Logo link path
   * @defaultValue "/"
   */
  logoLink?:
    | string
    | null
    | undefined
    | ((ctx: ThemeContextValue) => string | null | undefined)
  /**
   * Navigation menu at top bar.
   */
  topNavs?:
    | ReadonlyArray<MenuConfig>
    | ((ctx: ThemeContextValue) => ReadonlyArray<MenuConfig> | null | undefined)
  /**
   * Side menu.
   */
  sideNavs?:
    | ReadonlyArray<MenuConfig>
    | ((ctx: ThemeContextValue) => ReadonlyArray<MenuConfig> | null | undefined)
  /**
   * Extra area at top bar.
   */
  TopBarExtra?: React.ComponentType
  /**
   * Footer
   */
  footer?:
    | FooterConfig
    | ((ctx: ThemeContextValue) => FooterConfig | null | undefined)
  /**
   * View to be rendered when app in 404 state
   * (url not matching any page)
   */
  Component404?: React.ComponentType
  /**
   * Wrap the App with custom Component.
   * You can use \`useThemeCtx()\` in it to get context info
   */
  AppWrapper?: React.ComponentType
  /**
   * i18n metadata
   */
  i18n?: I18nConfig
}

export interface I18nConfig {
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

export interface LocalConfig {
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

export type ThemeContextValue = ThemeProps & {
  themeConfig: ThemeConfig
  staticData: PagesStaticData
  /**
   * The resolved locale data of the current page
   */
  resolvedLocale: {
    /**
     * the locale config object that is currently activated
     */
    locale?: LocalConfig
    /**
     * The key of the locale config object inside \`I18nConfig.locales\` object
     */
    localeKey?: string
    /**
     * Current pagePath without locale routePrefix.
     * For example, page \`/zh/foo\` will have pagePathWithoutLocalePrefix \`/foo\`
     */
    pagePathWithoutLocalePrefix?: string
  }
}

export type { MenuConfig, FooterConfig, FooterColumn, FooterLink }
`,i=n=>function(a){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",{...a})},l=i("FileText"),p={},s="wrapper";function o({components:n,...t}){return e(s,{...p,...t,components:n,mdxType:"MDXLayout"},e("h1",null,"Official Theme"),e("p",null,e("inlineCode",{parentName:"p"},"vite-pages-theme-doc")," is an official theme of vite-pages. It should satisfy most users' needs. This document site is powered by this theme."),e("h2",null,"How to use"),e("p",null,"You should config the theme in ",e("inlineCode",{parentName:"p"},"_theme.tsx"),":"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`// _theme.tsx
import React from 'react'
import { createTheme } from 'vite-pages-theme-doc'

export default createTheme({
  topNavs: [
    { label: 'index', path: '/' },
    { label: 'Vite', href: 'https://github.com/vitejs/vite' },
  ],
  logo: 'Vite Pages',
  // Other configs...
})
`)),e("p",null,e("a",{parentName:"p",href:"https://github.com/vitejs/vite-plugin-react-pages/tree/main/packages/playground/use-theme-doc"},"Here is a complete example"),"."),e("h2",null,"Auto side menu generation"),e("p",null,"Doc theme can generation a side menu automatically, based on the pages information."),e("p",null,"You can control the title/sorting/grouping of the side menu, by notating these ",e("a",{parentName:"p",href:"/page-data#static-data"},"page static data"),":"),e("ul",null,e("li",{parentName:"ul"},"title"),e("li",{parentName:"ul"},"order (default order is 1)"),e("li",{parentName:"ul"},"group (explain later)"),e("li",{parentName:"ul"},"subGroup (explain later)")),e("h3",null,"How side menu generation works"),e("p",null,"For example, if your site has these pages:"),e("pre",null,e("code",{parentName:"pre"},`/
/playground
/components
/components/button
/components/card
/references/glossary
/references/apis/api1
/references/apis/api2
/references/error-codes/code1
/references/error-codes/code2
`)),e("p",null,"Firstly, the theme will divide pages into ",e("inlineCode",{parentName:"p"},"group"),"s based on the ",e("strong",{parentName:"p"},"first segment")," of page path:"),e("pre",null,e("code",{parentName:"pre"},`group /:
  /
  /playground

group components:
  /components
  /components/button
  /components/card

group references:
  /references/glossary
  /references/apis/api1
  /references/apis/api2
  /references/error-codes/code1
  /references/error-codes/code2
`)),e("p",null,"You can customize ",e("inlineCode",{parentName:"p"},"group")," in page static data. For example:"),e("pre",null,e("code",{parentName:"pre"},`Put this at top of a markdown page:
---
group: references
---
Or put this at top of a tsx/jsx page:
/**
 * @group references
 */
`)),e("p",null,"Then, the theme will divide pages into ",e("inlineCode",{parentName:"p"},"subGroup"),"s based on the ",e("strong",{parentName:"p"},"second segment")," of pages' path:"),e("pre",null,e("code",{parentName:"pre"},`group /:
  subGroup /:
    /
    /playground

group components:
  subGroup /:
    /components
    /components/button
    /components/card

group references:
  subGroup /:
    /references/glossary
  subGroup apis:
    /references/apis/api1
    /references/apis/api2
  subGroup error-codes:
    /references/error-codes/code1
    /references/error-codes/code2
`)),e("p",null,e("inlineCode",{parentName:"p"},"subGroup")," can also be customized in page static data, just like ",e("inlineCode",{parentName:"p"},"group")," does."),e("p",null,"What is the meanings of ",e("inlineCode",{parentName:"p"},"group")," and ",e("inlineCode",{parentName:"p"},"subGroup"),"?"),e("ul",null,e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"group")," is a site isolation boundary: we only display ",e("strong",{parentName:"li"},"one")," ",e("inlineCode",{parentName:"li"},"group")," at a time. If a user open a page in group ",e("inlineCode",{parentName:"li"},"references"),", he/she will ",e("strong",{parentName:"li"},"only see side menu items from that group"),". He/She will not see menu items from ",e("inlineCode",{parentName:"li"},"components")," group."),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"subGroup")," decide how the theme sort side menu items. All side menu items with same ",e("inlineCode",{parentName:"li"},"subGroup")," will be rendered adjacently. This document site is an example.")),e("h2",null,"Theme configs"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"createTheme")," exported by ",e("inlineCode",{parentName:"p"},"vite-pages-theme-doc")," accepts ",e("a",{parentName:"p",href:"https://github.com/vitejs/vite-plugin-react-pages/blob/main/packages/theme-doc/src/index.tsx"},"these options"),":"),e(l,{text:r,syntax:"ts",mdxType:"FileText"}),e("h2",null,"Fully theme customization"),e("p",null,"If the basic theme doesn't satisfy your need, you can ",e("a",{parentName:"p",href:"/theme-customization"},"create your own theme"),"."),e("blockquote",null,e("p",{parentName:"blockquote"},"Contributions to ",e("a",{parentName:"p",href:"https://github.com/vitejs/vite-plugin-react-pages/tree/main/packages/theme-doc"},"the theme")," are always welcomed.")))}o.isMDXComponent=!0;const u=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"})),c={};c.main=u;export{c as default};
