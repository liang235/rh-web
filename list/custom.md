# 自定义列表页面

```html
<template>
	<div>
		<ui-form-list ref="formList" v-bind="$attrs" :button-listener="buttonListener" v-on="$listeners">
			<template v-slot:FD_HOLD_TIME_value="itemScope">
				<div class="ui-item ui-item-date">
					<div class="ui-item-body">
						<div class="rh-date-picker ui-item-com">
							<el-date-picker
								v-model="input"
								type="daterange"
								range-separator="至"
								size="small"
								value-format="yyyy-MM-dd"
								:disabled="isDisabled(itemScope.item)"
								@change="changePicker($event, itemScope.data)"
							/>
						</div>
					</div>
				</div>
			</template>
		</ui-form-list>
	</div>
</template>

<script>
export default {
	data() {
		return {
			input: '',
		}
	},
	methods: {
		changePicker(val, data) {
			this.$set(data, 'FD_HOLD_TIME', val.toString())
		},
		isDisabled(item) {
			try {
				if (this.$attrs.disabled === true) {
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

## 查询项部分

### el-date-picker
```html
<template v-slot:FD_HOLD_TIME_value="itemScope">
	<div class="ui-item ui-item-date">
		<div class="ui-item-body">
			<div class="rh-date-picker ui-item-com rh-date-range">
				<el-date-picker
					v-model="itemScope.data.FD_HOLD_TIME"
					type="daterange"
					range-separator="至"
					default-value="yyyy-MM-dd"
					:disabled="isDisabled(itemScope.data)"
					class="border-none custom-date-picker"
				/>
			</div>
		</div>
	</div>
</template>
```