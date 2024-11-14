# 插槽
在原有表单的基础上，自定义单独的字段，[参考地址](http://apusx.cn:88/web/#/5/162)

## 基础用法
```html
<ui-form-card 
    ref="formCard"
    :card-data="cardData"
    :card-def="cardDef"
    v-bind="$attrs"
    :button-listener="buttonListener"
    v-on="$listeners"
>
    <template #MEET_ROOM_item>
        <el-input v-model="scope.row.title" :disabled="isDisabled(scope.item)"></el-input>
    </template>
</ui-form-card>

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
