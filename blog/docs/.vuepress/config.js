module.exports = {
  title: '个人博客',
  description: '希望我的答案对你有所帮助',
  base: "/Blog/",

  // 地址栏Logo
  head: [
    ['link', { rel: 'icon', href: '/url.jpg' }] // 增加一个自定义的 favicon
  ],

  // 配置导航栏nav
  themeConfig: {
    // 导航栏 Logo
    logo: '/url.jpg',
    // nav
    nav: [
      { text: "主页", link: "/pages/a/" },
      { text: "node", link: "/pages/node/" },
      { text: "前端", link: "/pages/webframe/" },
      { text: "数据库", link: "/pages/database/" },
      { text: "android", link: "/pages/android/" },
      { text: "面试问题", link: "/pages/interview/" },
      { text: 'Github', link: 'https://github.com/Baobao-Li/Blog' }
    ],

    // 自动获取侧边栏内容
    sidebar: 'auto',
  }

}