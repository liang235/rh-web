# 修改表单字段

```js
<template>
    <div>
        <ui-form-card ref="formList" v-bind="$attrs" :card-data="cardData"/>
    </div>
</template>

<script>
export default {
    created() {
        this.$set(this.cardData, 'FD_HOLD_TIME', this.$route.query.startTime)
        this.$set(this.cardData, 'FD_END_TIME', this.$route.query.endTime)
        this.$set(this.cardData, 'FD_PLACE_ID', this.$route.query.title)
    },
}
</script>
```