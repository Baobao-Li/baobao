---
home: true
# 中央图标
heroImage: '/logo.jpg' 
isShowTitleInHome: true
actionText: 'Let`s Go →'
actionLink: /exploit/
docsDir: 'src'
features:
# - title: 
#   details: 把所有的不快给昨天
# - title: 
#   details: 把所有的努力给今天
# - title: 
#   details: 把所有的希望给明天
footer: MIT Licensed | Copyright © 2018-present Evan You
---

### 起步就像数 1, 2, 3 一样容易

```bash
# 安装
yarn global add vuepress # 或 npm install -g vuepress

# 创建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始编写
vuepress dev

# 构建为静态文件
vuepress build
```

::: tip 兼容性注意事项
- VuePress 要求 Node.js >= 8
- 知识点总结需要持之以恒的积累
- 立目标，定计划，不断总结，持续超越
:::
<br />

[官方文档：https://www.vuepress.cn/](https://www.vuepress.cn/)
<br />

[主题文档：https://vuepress-theme-reco.recoluan.com/](https://vuepress-theme-reco.recoluan.com/)
<br />

[主题模板：https://zpj80231.gitee.io/znote/](https://zpj80231.gitee.io/znote/)
<br />

[午后南杂：https://www.recoluan.com/](https://www.recoluan.com/)
<br />

[冰雨：https://bingyu123.gitee.io/blog/](https://bingyu123.gitee.io/blog/)
<br />

[蔓杰：https://jasonandjay.github.io/study/](https://jasonandjay.github.io/study/)
<br />

[基础：https://blog.poetries.top/FE-Interview-Questions/](https://blog.poetries.top/FE-Interview-Questions/)

  <!-- # 页脚信息 -->
<!-- # footer: https://baobao-li.github.io/Blog/ -->


<!-- https://github.com/Baobao-Li/Blog -->
<!-- https://baobao-li.github.io/Blog/ -->

<!-- https://gitee.com/bingyu123/blog -->
<!-- https://bingyu123.gitee.io/blog/ -->

<!-- 线条 -->
<CanvasNest color="255,0,0" count="111"/>
<script>
export default {
  components: {
    CanvasNest: () => import("./components/CanvasNest")
  },
};
</script>

<style lang="css">
#app:before {
  content: "";
  background: url(https://ae01.alicdn.com/kf/HTB1y5zVXv1H3KVjSZFH762KppXaH.png);
  height: 3px;
  top: 0;
  position: fixed;
  width: 100%;
  Z-index: 9999;
}
.home, 
.content__default {
  /* margin: 0 !important;
  padding: 0 !important; */
}
.home {
  max-width: 100vw !important;
}
.content__default {
  
}
#app .site-name {
  font-family: 楷体;
  font-size: 1.6rem;
  background: -webkit-linear-gradient(45deg, rgb(112, 247, 254), rgb(251, 215, 198), rgb(253, 239, 172), rgb(191, 181, 221), rgb(190, 213, 245));
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  animation: stream 3s infinite linear;
  background-size: 200% 100%;
}
@keyframes stream {
  0%  {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>