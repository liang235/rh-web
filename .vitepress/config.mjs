import { defineConfig } from "vitepress"
import sidebar from "./sidebar.mjs" // 侧边栏
import nav from "./navbar.mjs" // 头部导航

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "rh-web",
  description: "rh-web 文档",
  lang: "zh-cn", // 语言
  base: "/rh-web/", // 基础路径
  head: [["link", { rel: "icon", href: "/rh-web/vitepress-logo-mini.svg" }]],
  themeConfig: {
    logo: { src: "/vitepress-logo-mini.svg", width: 24, height: 24 },

    // 头部导航
    nav,

    // 多个侧边栏，根据页面路径显示不同的侧边栏
    sidebar,

    outline: "deep",

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    // 标题大纲
    outlineTitle: "当前页导航",

    // 可用于自定义出现在上一个和下一个链接上方的文本
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    // https://vitepress.qzxdp.cn/reference/default-theme-search.html
    search: {
      provider: "local",
      options: {
        translations: {
          button: { buttonText: "搜索文档", buttonAriaLabel: "搜索文档" },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
  },
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
})
