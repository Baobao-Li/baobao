import Vue from "vue"
// 公共css
import "./public/css/index.css"


// 引入公共组件
Vue.mixin({
  components: {
    // 线条
    CanvasNest: () => import("../components/CanvasNest"),
    // 时间
    Times: () => import("../components/Time")
  },
  mounted() {
    // 鼠标点击效果
    import("./public/js/MouseClickEffect.js")
  }
})



// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer, // 当前应用配置是处于 服务端渲染 或 客户端
  Times
}) => {
  // ...做一些其他的应用级别的优化
}