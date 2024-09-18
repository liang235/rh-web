# 页面拖拉拽
一般用于首页拖拽布局

## 添加看板组件
<ZoomImg src="/sortable-page-1.png" />

## 添加页面模版
<ZoomImg src="/sortable-page-2.png" />
- `/tmplView/MH_HOME?title=门户首页`
<ZoomImg src="/sortable-page-5.png" />

## 配置默认首页
<ZoomImg src="/sortable-page-3.png" />
- SY_HOME_CONFIG
<ZoomImg src="/sortable-page-4.png" />

## 重写拖拉拽配置
- 将原来的拖拉拽开启按钮使用样式隐藏
- 自定义拖拉拽按钮放到需要的位置
```js
<rh-icon name="aim" @click="drag" />

drag() {
    this.$bus.emit('openDrap', true)
}
```

- 拖拉拽的方法放到需要的位置
```html
<div v-show="isDrap" class="drap">
    <el-button plain @click="showAddCom">增加组件</el-button>
    <el-button plain @click="resetUserTmpl">重置</el-button>
    <el-button plain @click="saveUserTmpl">保存</el-button>
    <el-button plain @click="hideEditor">取消</el-button>
</div>


<!-- 在需要的页面用全局的方法调用即可 -->
<script>
export default {
    data() {
        return {
            isDrap: false
        }
    },
    created() {
        this.$bus.on('openDrap', (data) => {
            if (!window._tmplView) return
            window._tmplView.showEditor()
            this.isDrap = data
        })
    },
    destroyed() {
        this.$bus.off('openDrap')
    },
    methods: {
        showAddCom() { // 显示新增组件dialog
            if (!window._tmplView) return
            window._tmplView.showAddCom()
        },
        resetUserTmpl() { // 删除用户个人配置，用来进行模板重置
            if (!window._tmplView) return
            window._tmplView.resetUserTmpl()
        },
        saveUserTmpl() { // 保存个人模板配置
            if (!window._tmplView) return
            window._tmplView.saveUserTmpl()
        },
        hideEditor() { // 隐藏设置按钮
            if (!window._tmplView) return
            window._tmplView.hideEditor()
            this.isDrap = false
        }
    }
}
</script>
```