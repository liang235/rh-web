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