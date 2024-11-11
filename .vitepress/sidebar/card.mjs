const commonPath = '/card' // 根路径

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
      { text: '字段校验', link: `${commonPath}/verify.md` },
      { text: '创建服务表单', link: `${commonPath}/server.md` },
      { text: '设计表单', link: `${commonPath}/design-form.md` },
      { text: '插槽使用', link: `${commonPath}/solt.md` },
      { text: 'api 接口', link: `${commonPath}/api.md` },
      { text: '修改表单字段', link: `${commonPath}/edid-field.md` },
      { text: '修改流程标签', link: `${commonPath}/wfe-tab.md` },
      { text: '功能按钮操作', link: `${commonPath}/btns.md` },
      { text: '表单状态', link: `${commonPath}/status.md` },
    ],
  },
]
