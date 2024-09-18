# 查询选择
http://apusx.cn:88/web/#/5/222

## rhSelectListBox

### 自定义调用查询选择
```js
this.$rhSelectListBox({
    servId: 'OA_CALENDAR_LEADER_LIST', // 服务编码
    code: 'MEET_ROOM', // 服务字段编码
    multiple: false, // 是否为多选
    showFootBtn: false, // 是否需要显示确定按钮
    formData: scope.row, // 表单数据，处理查询条件有用
    dialogTitle: '查询选择',
    defQueryParam: { // 查询条件
        TIME_ON: '', // 开始时间
        TIME_END: '', // 结束时间
        QUERY_ALL: '1', // 是否查询空闲资源
        FD_NAME: '', // 会议室名称
    },
    rowDblClick: ({ row, column, boxObj, listObj }) => {
        scope.row.MEET_ROOM = row.FD_NAME
        boxObj.closeDialog()
        this.$forceUpdate()
    }
})
```

### 给 rhSelectListBox 组件传值
```js
watch: {
    // MIND_CONTENT 是绑定的输入意见
    'cardData.MIND_CONTENT': function(val, oldval) {
        // 传递给组件中的常用意见
        this.$set(this.cardData._EXT_.WFE, 'mindBean', this.cardData._EXT_.WFE.mindBean || {})
        this.$set(this.cardData._EXT_.WFE.mindBean, 'MIND_CONTENT', this.cardData.MIND_CONTENT)
    }
}
```