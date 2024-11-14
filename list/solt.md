# 插槽
在原有列表的基础上，自定义单独的字段，[参考地址](http://apusx.cn:88/web/#/5/109)

## 基础用法
```html
<template slot="grid_opt" slot-scope="scope">
    <el-input v-model="scope.row.title" :disabled="isDisabled(scope.item)"></el-input>
</template>

isDisabled(item) {
  try {
    if (this.$attrs.disabled === true) {
      return true
    }
    if (this.cardDef.config.disabled === true) {
      return true
    }
    return item.option.readonly === true
  } catch (e) {
    return false
  }
}

```