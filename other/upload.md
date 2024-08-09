# 文件上传

```vue
<el-upload
    action=""
    :http-request="doFileUpload"
    :multiple="false"
    :show-file-list="false"
>
    <el-button type="primary">上传附件</el-button>
</el-upload>

<script>
export default {
    methods: {
        doFileUpload(param) {
            const formData = new FormData()
            formData.append('file', param.file)
            formData.append('SERV_ID', this.servId)
            formData.append('DATA_ID', this.dataId)
            this.$api.doAct('SY_DOCS_CENTER_PLATFORM', 'addFile', formData).then(res => {
                console.log(res)
            })
        }
    }
</script>
```