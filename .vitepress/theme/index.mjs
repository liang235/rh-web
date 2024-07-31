import Theme from 'vitepress/theme' // 主题方案
import ZoomImg from './components/ZoomImg.vue' // 图片缩放组件
import './fonts/fira_code/fira_code.css' // 字体样式
import './styles/var.css' // 自定义样式

export default {
	...Theme,
	enhanceApp({ app }) {
		app.component('ZoomImg', ZoomImg)
	},
}