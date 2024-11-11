# 插槽
在原有表单的基础上，自定义单独的字段，[参考地址](http://apusx.cn:88/web/#/5/162)

## 基础用法
```html
<ui-form-card ref="formList" v-bind="$attrs" v-on="$listeners">
    <template #MEET_ROOM_item>会议室测试</template>
</ui-form-card>
```
