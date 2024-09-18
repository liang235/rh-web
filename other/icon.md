# 图标使用

## 基础使用
- `type` 类型为 `static/src/assets/iconFont/clique` 下的文件名, `name` 为 `svg` 图标名称
```html
<rh-icon type="clique" name="work" />
```

## 动态使用
- `type-name-str` 为动态传递回来的值，会拼接特殊符号 `@@`
```html
<rh-icon :type-name-str="item.ACT_CSS" name="aim" />
```