const commonPath = '/list' // 根路径

export default [
  {
    text: '参考',
    collapsible: false, // 是否可折叠的侧边栏组
    collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
    items: [{ text: '参考', link: `${commonPath}/index.md` }],
  },
  {
    text: '使用',
    collapsible: false, // 是否可折叠的侧边栏组
    collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
    items: [
      { text: '自定义页面', link: `${commonPath}/custom.md` },
      { text: '常用方法', link: `${commonPath}/common.md` },
      { text: '插槽使用', link: `${commonPath}/solt.md` },
    ],
  },
]
