# 系统变量

## 添加使用系统变量
- 添加系统变量
<ZoomImg src="/settings-1.png" />

- 使用系统变量
```js
import settings from 'rh-lib/src/settings'

const store = settings.syStore
const sysParams = store.getters.sysParams
```

## 添加使用流程变量
- 使用流程变量
```js
const wfe = this.cardData._EXT_.WFE.WF_CUSTOM_VARS
```

