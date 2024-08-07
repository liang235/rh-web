# 页面跳转

## 跳转到卡片页
```js
// 比如这个页面是添加页面
this.$openTab.open({
    path: `/card/OA_MEETING/`,
    query: {
        title: '标题',
        // 菜单ID，用于打开带菜单的页面
        menuId: '1797887012571828224'
    },
    reload: true,
    closeBackFunc: function(v) { // 关闭路由页签的回调
        console.log('路由参数===============>', v)
    }
})
```

## 跳转到详情页
```js
// 主要是加了个 _PK_ 就可以了
this.$openTab.open({
    path: `/card/OA_MEETING/${val.MEET_ID}`,
    query: {
        menuId: '1797887012571828224'
    },
    reload: true,
    closeBackFunc: function(v) { // 关闭路由页签的回调
        console.log('路由参数===============>', v)
    }
})
```

## 在当前页面打开 dialog
把列表页和卡片页以  dialog 的形式在当前页打开
```js
// 需要引入，card 页面 换成 viFormCard
inject:['viFormList']

const params = {
    servId: 'OA_MEETING',
    extend: {
        // 过滤参数信息
        TEST_FLAG: 1
    },
    params: {
        startTIme, endTime
    }
}
this.viFormList.showComByType('viFormList', params)
```