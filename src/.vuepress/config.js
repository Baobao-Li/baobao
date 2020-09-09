module.exports = {
  dest: './docs/',
  base: '/Blog/',
  title: "知识点总结",
  description: '任何不能够给你快乐的编程都是耍流氓',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }]
  ],

  themeConfig: {
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 导航栏 Logo
    logo: '/logo.jpg',
    // 开启侧边栏
    sidebar: 'auto',
    // 导航
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
          { text: 'Vue', link: '/web/Vue.md' },
          { text: 'React', link: '/web/React.md' },
        ]
      },
      {
        text: 'GitHub',
        link: 'https://github.com/Baobao-Li/Blog'
      },
    ],

    // 最后更新时间
    lastUpdated: true,
    lastUpdated: '上次更新', // string | boolean
    // 作者
    author: 'Baobao-Li',
    // 备案号
    record: '京ICP备17067634号-1',
    // 项目开始时间
    startYear: '2019',
    // 如果你的文档不在仓库的根部
    docsDir: 'src',
  }
}