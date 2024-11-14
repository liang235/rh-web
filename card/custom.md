# 自定义页面

```vue
<template>
	<div>
		<ui-form-card 
			ref="formCard"
			v-bind="$attrs" 
			v-on="$listeners"
			:card-data="cardData" 
			:card-def="cardDef"
			:button-listener="buttonListener"
		>
			<template slot="column_SITUATION_FEEDBACK" slot-scope="scope">
				<el-button>插槽</el-button>
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
	      	default: () => ({})
	    }
	},
	data() {
		return {
			// 重写按钮方法
			buttonListener: { }
		}
	},
	methods: {},
}
</script>

<style lang="scss" scoped></style>
```