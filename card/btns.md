# 卡片功能按钮

## 设置/取消更多按钮操作
- `SY_WF_BTN_GROUP_OTHER`
<ZoomImg src="/bottom-btns.png" />

## 动态添加按钮
```js
this.$refs.cardRef.buttonAdd({ ACT_CODE: 'save', ACT_NAME: '保存' })
this.$refs.cardRef.viFormCard.clearCardStatus() // 取消只读状态
```