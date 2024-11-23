# 自定义页面
```html
<template>
	<div>
		<ui-form-card ref="formCard" v-bind="$attrs" v-on="$listeners" :card-data="cardData" :card-def="cardDef" :button-listener="buttonListener">
			<template slot="column_SITUATION_FEEDBACK" slot-scope="scope">
				<el-input v-model="scope.row.title" :disabled="isDisabled(scope.item)"></el-input>
			</template>
		</ui-form-card>
	</div>
</template>

<script>
export default {
	props: {
		cardData: {
			type: Object,
			default: () => ({}),
		},
		cardDef: {
			type: Object,
			default: () => ({}),
		},
	},
	data() {
		return {
			// 重写按钮方法
			buttonListener: {},
		}
	},
	methods: {
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
		},
	},
}
</script>

<style lang="scss" scoped></style>
```
