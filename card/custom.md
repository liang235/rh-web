# 自定义页面
```html
<template>
	<div>
		<ui-form-card 
			ref="formCard" 
			v-bind="$attrs" 
			v-on="$listeners" 
			:card-data="cardData" 
			:card-def="cardDef" 
			:button-listener="buttonListener"
			@item-change="itemChange"
		>
			<template v-slot:GD_USER_NAME_value="itemScope">
				<!-- 系统封装的 item -->
		        <rh-item
		          	:item="itemScope.item"
		          	:data="itemScope.data"
		          	v-bind="itemScope"
		          	v-on="itemScope.listeners"
		        />
	      	</template>

			<!-- <template slot="column_SITUATION_FEEDBACK" slot-scope="scope">
				<el-input v-model="scope.row.title" :disabled="isDisabled(scope.item)"></el-input>
			</template> -->
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
		itemChange(code, value, attrs, oldVal) {}
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
	},
}
</script>

<style lang="scss" scoped></style>
```
