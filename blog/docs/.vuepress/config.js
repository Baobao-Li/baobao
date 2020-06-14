module.exports = {
  title: '个人博客',
  description: '希望我的答案对你有所帮助',
  base: "/Blog/",
// 配置导航栏nav
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "node", link: "/node/" },
      { text: "前端", link: "/webframe/" },
      { text: "数据库", link: "/database/" },
      { text: "android", link: "/android/" },
      { text: "面试问题", link: "/interview/" }
    ],
  },

  // 自动获取侧边栏内容
  themeConfig:{
    sidebar: 'auto',
    // sidebarDepth: 1 
  }

}