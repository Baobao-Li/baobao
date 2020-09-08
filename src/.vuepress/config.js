module.exports = {
  dest: './docs/',
  base: '/Blog/',
  title: "知识点总结",
  description: '任何不能够给你快乐的编程都是耍流氓',
  head: [
    ['link', {rel: 'icon',href: '/logo.jpg'}]
  ],
  themeConfig: {
    // 导航栏 Logo
    logo: '/logo.jpg',
    // 开启侧边栏
    sidebar: 'auto',
    nav: [
      {
        text: '首页',
        link: '/',
        icon: 'reco-home'
      },
      {
        text: '快速搭建开发环境',
        link: '/exploit/Start.md'
      },
      {
        text: 'Web前端',
        items: [
          { text: 'Vue', link: '/web/Vue.md'},
          { text: 'React', link: '/web/React.md'},
        ]
      },
      {
        text: 'GitHub',
        link: 'https://github.com/Baobao-Li/Blog'
      },
    ]
  }
}