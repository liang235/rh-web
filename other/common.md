# 常用内容

## 常用参数
```js
const formFields = {
	_PK_: this.viFormCard.getFormDataId(),
	SERV_ID: this.viFormCard.getFormServId(),
	DATA_ID: this.viFormCard.getFormDataId(),
	PI_ID: this.viFormCard.getFormPId(),
	NI_ID: this.viFormCard.getFormNId(),
	WF_NI_ID: this.viFormCard.getFormNId(),
}
```

## css 变量转数值
```js
import settings from 'rh-lib/src/settings'

computed: {
	rhMarginBase() {
	  	const rhMarginBase = getComputedStyle(document.documentElement).getPropertyValue('--rh-margin-base')
	  	return parseFloat(rhMarginBase) * settings.baseSize
	}
}
```

## css 变量使用负数
```scss
left: calc(-1 * var(--rh-margin-base));
```