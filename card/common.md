# 常用方法

## 刷新当前卡片页面
```js
inject: ['viFormCard']

this.viFormCard.refresh({
  	showLoading: true
})
```

## 监听表单字段变化
```js
<ui-form-card @item-change="itemChange" />

itemChange(code, value, attrs, oldVal) {}
```

## 监听卡片按钮事件
```js
<ui-form-card :button-listener="buttonListener" />

data() {
	return {
		buttonListener: {
			batchFengCun: this.batchFengCun,
		}
	}
}

batchFengCun(data){}
```

## 卡片页保存刷新列表页
```js
inject: ['viFormCard']

watch: {
'viFormCard.refreshFlag': function(val) {
	if (val) {
	    this.viFormCard.sendMessage()
	}
}
```

- 或者
```js
inject: ['viFormCard']

return {
    buttonListener: {
		afterSave: this.afterSave
    }
}

afterSave() {
  localStorage.setItem('sseMessage', JSON.stringify({ refreshParent: this.viFormCard.refreshParent, servId: this.viFormCard.servId, type: 'closeCard', _time: new Date().getTime() }))
},
```