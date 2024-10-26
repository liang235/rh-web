# 常用方法

## 刷新页面
```js
inject: ['viFormList']

this.viFormList.refresh({
  	showLoading: true
})
```

## 监听列表按钮事件
```js
<ui-form-list :button-listener="buttonListener" />

data() {
	return {
		buttonListener: {
			batchFengCun: this.batchFengCun,
		}
	}
}

batchFengCun(data){}
```