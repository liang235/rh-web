const commonPath = '/other' // 根路径

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
      // { text: 'API', link: `${commonPath}/api.md` },
      { text: '系统变量', link: `${commonPath}/settings.md` },
      { text: 'icon 图标', link: `${commonPath}/icon.md` },
      { text: '页面跳转', link: `${commonPath}/jump.md` },
      { text: '上传', link: `${commonPath}/upload.md` },
      { text: '查询选择', link: `${commonPath}/search.md` },
      { text: 'wps在线编辑方式', link: `${commonPath}/wps.md` },
      { text: '首页拖拉拽', link: `${commonPath}/sortable-page.md` },
      { text: '长链接监听', link: `${commonPath}/sseMessage.md` },
    ],
  },
]
