---
title: 关于我
isTimeLine: false
sidebar: false
isShowComments: true
---

<p align="center">
  <img style="border-radius:41%;pointer-events:none;transform: scale(0.9);" :src="$withBase('/img/logo.jpg')" alt="Baobao-Li" width=160>
</p>

<div class="outerLink">
  <div class="outerLink_item" @click="linkEvent(item.href)" v-for="(item,index) in outerLink" :key="index">
    <i v-bind:class="[item.icon ? 'iconfont ' + item.icon : '']"></i>
    <div><span></span></div>
  </div>
</div>
<!-- 时间 -->
<Times />
<!-- 线条 -->
<CanvasNest color="255,0,0"/>

::: theorem YOU AND ME
世界上最远的距离，是我在 if 里你在 else 里，虽然经常一起出现，但却永不结伴执行。

::: right
来自 [Blog](https://baobao-li.github.io/Blog/)
:::


### 一句话

- Just do it !    （翻译：我只是个搞 IT的！哭笑脸）

### 关于我

- 一个莫名其妙的，喜欢敲代码，喜欢研究技术的，表面上高冷、不苟言笑的，偶尔又嬉皮笑脸，偶尔又特立独行的，双重性格的技术爱好者！

### 兴趣方向

- 在互联网信息高速公路上​流浪。​。​

### 成熟标志

- 会扔、敢买、能赚、懂爱！
- 自信乐观，勇于担当，明白责任的意义！
- 意识到自己时间有限，具备区分什么是值得花时间的、什么是不值得花时间的的能力！
- 成年人的发泄方式，不再是改头像、换签名、发朋友圈，而是吹吹风，静一静，习惯性的等待自愈！

### 参与社区

- 博客：[https://baobao-li.github.io/Blog/](https://baobao-li.github.io/Blog/)
- Github：[https://github.com/Baobao-Li](https://github.com/Baobao-Li)

### 联系我

- <i class="zi zi_envelopeBold" zico="黑信封"></i> Email：[a1261964921@qq.com](mailto:a1261964921@qq.com)

### 其他

- 本仓库代码使用 [MIT](https://github.com/SigureMo/notev/blob/master/LICENSE) 协议进行开源，但是全部文档内容使用 [CC 4.0 BY-SA](https://creativecommons.org/licenses/by-sa/4.0/) 协议进行发布




<script>

export default {
  data(){
    return {
      outerLink: [
        {
          href: "",
          icon: "reco-mayun"
        },
        {
          href: "",
          icon: "reco-mail"
        },
        {
          href: "https://github.com/Baobao-Li/Blog",
          icon: "reco-github"
        },
        {
          href: "",
          icon: "reco-twitter"
        },
        {
          href: "",
          icon: "reco-qq"
        }
      ]
    }
  },
  methods: {
    linkEvent(href){
      window.open(href)
    }
  }
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>