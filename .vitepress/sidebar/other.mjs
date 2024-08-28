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
      { text: '上传', link: `${commonPath}/upload.md` },
      { text: '查询选择', link: `${commonPath}/rhSelectListBox.md` },
      { text: 'wps在线编辑方式', link: `${commonPath}/wps.md` },
    ],
  },
]
