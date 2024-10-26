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

## 打开新页面
```js
const { href } = this.$router.resolve({
    path: '/openCard/OA_MEETING/',
    query: {
      startTime,
      endTime,
      title: resource.title
      // returnUrl: encodeURIComponent(this.$route.fullPath),
    },
    reload: true
})

window.open(href)
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

## 关闭页面
```js
this.$emit('back-click', true)
```

## open 打开页面隐藏左侧列表和头部header
- 不管是卡片页面还是列表页面只需要再路径的签名加上open即可
- 新路径已驼峰的方式命名
- 如：`openTodolist`

## 打开页面是否需要关闭按钮
```js
const { href } = this.$router.resolve({
path: '/openTodolist',
    query: {
        // 曲解与是否传递了 returnUrl 参数
        returnUrl: encodeURIComponent(this.$route.fullPath)
    },
    reload: true
})

window.open(href)
```

## 打开待办列表
```js
/**
 * row 数据列表
 * data 传递参数
 * mode 打开方式
 * hideOther 是否隐藏头部和左侧菜单
*/
pageSkip(row, data, mode = 'open', hideOther = true) {
    let openType = ''
    hideOther ? openType = 'openCard' : 'card'

    const params = Object.assign({}, data)
    const todoURL = row.TODO_URL || ''
    // 外系统连接
    if (todoURL.indexOf('http') === 0) {
        window.open(todoURL)
        return
    }
    // 拼接url中的参数
    const result = todoURL.match(/{(.*)?}/g)
    if (result != null && result.length > 0) {
        // 字符串转对象
        let strs = result[0].substring(1, result[0].length - 1)
        strs = strs.split(',')
        const obj = {}
        for (let i = 0; i < strs.length; i++) {
            if (strs[i].indexOf(':') > 0) {
                obj[strs[i].split(':')[0]] = strs[i].split(':')[1]
            }
        }
        // 拼接参数
        if (obj.SEND_ID) {
            params.SEND_ID = obj.SEND_ID
        }
        if (obj.NI_ID) {
            params.NI_ID = obj.NI_ID
        }
    }
    params.menuId = 'auto'
    //   params.returnUrl = encodeURIComponent(this.$route.fullPath)

    if (mode === 'open') {
        const { href } = this.$router.resolve({
            path: `/${openType}/${row.SERV_ID}/${row.TODO_OBJECT_ID1}`,
            query: params,
            reload: true
        })

        window.open(href)
    } else {
        // 卡片形式打开
        this.$openTab.open({
            path: `/${openType}/${row.SERV_ID}/${row.TODO_OBJECT_ID1}`,
            query: params,
            reload: true
        })
    }
}
```