# 自定义列表页面

```html
<template>
  <div>
    <ui-form-list
      ref="formList"
      v-bind="$attrs"
      :button-listener="buttonListener"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import { getFileDownUrl } from 'rh-lib/src/utils/tools'

export default {
  data() {
    return {
      buttonListener: {
        preview: this.preview,
        download: this.download
      }
    }
  },
  created() { },
  methods: {
    async preview({ rows }) {
      const result = await this.$api.byid('OA_BZ_INFO_BZWD', { _PK_: rows._PK_ })
      const FUJIAN = result._EXT_?.FILE?.FUJIAN[0]
      this.$api.doAct('SY_DOCS_CENTER_PLATFORM', 'preview', { FILE_ID: FUJIAN.FILE_ID, _PK_: FUJIAN.FILE_ID }).then((res) => {
        window.open(res.data)
      })
    },
    download({ rows }) {
      this.$api.byid('OA_BZ_INFO_BZWD', { _PK_: rows._PK_ }).then(res => {
        const FUJIAN = res._EXT_?.FILE?.FUJIAN[0]
        window.open(getFileDownUrl(FUJIAN.FILE_PATH))
      })
    }
  }
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