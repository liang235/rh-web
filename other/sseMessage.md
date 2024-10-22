# 关闭页面刷新列表页面
- 参考 `eventSource.js` 中事件

- viFormCard.vue
```js
goback() {
    if (window.history.length === 1) {
        this.sendMessage()
        window.close()
    } else {
        const item = {
            ACT_CODE: 'back',
            ACT_ICON: 'el-icon-circle-close',
            ACT_NAME: '关闭',
            buttonType: 'primary'
        }
        this.buttonClick(item)
    }
},
sendMessage() {
    // refreshParent 是表单有操作的时候会变为true，也就是只有在表单有操作的情况下，关闭页签才会刷新
    localStorage.setItem('sseMessage', JSON.stringify({ refreshParent: this.refreshParent, servId: this.servId, type: 'closeCard', _time: new Date().getTime() }))
},

buttonClick(buttonItem) {
    if (this.openCard) {
        this.sendMessage()
        window.close()
        return
    }

    const code = buttonItem['ACT_CODE']
    const listeners = this.$listeners || {}
    // 如果调用组件有监听，则由被监听对象自行处理，否则走默认处理方式
    const eventName = `${code}-click`
    if (listeners[eventName]) {
        this.$emit(eventName, this.refreshParent)
        return
    }
    switch (code) {
        case 'back':
            // 默认关闭当前tab
            this.$bus.emit(this.$busEvent.TAB_CLOSE_CURRENT)
            break
    }
},
```

- viFormList.vue
```js
created() {
    this.$bus.on(this.$busEvent.EVENT_SOURCE, this.eventSource)
},
methods: {
    eventSource(data) {
        if (data && data.type === 'closeCard' && data.refreshParent === true && data.servId === this.servId) {
            this.$set(this, 'refreshLoad', new Date().getTime())
        }
    }
}
```


