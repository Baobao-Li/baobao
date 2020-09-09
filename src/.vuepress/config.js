module.exports = {
  dest: './docs/',
  base: '/Blog/',
  title: "知识点总结",
  description: '任何不能够给你快乐的编程都是耍流氓',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }]
  ],
  theme: 'reco',
  themeConfig: {
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 导航栏 Logo
    logo: '/logo.jpg',
    // 开启侧边栏
    sidebar: 'auto',
    sidebarDepth: 2,
    // 导航
    nav: [
      {
        text: '首页',
        link: '/',
        icon: 'reco-home'
      },
      {
        text: '快速搭建开发环境',
        link: '/exploit/Start.md',
        icon: 'reco-document'
      },
      {
        text: 'Web前端',
        link: '/web',
        items: [
          { text: 'Vue', link: '/web/Vue.md' },
          { text: 'React', link: '/web/React.md' },
        ]
      },
      {
        text: 'GitHub',
        link: 'https://github.com/Baobao-Li/Blog',
        icon: 'reco-github'
      },
    ],

    // 最后更新时间
    lastUpdated: true,
    lastUpdated: '上次更新', // string | boolean
    // 作者
    author: 'Baobao-Li',
    // 项目开始时间
    startYear: '2020',
    // 如果你的文档不在仓库的根部
    docsDir: 'docs',
    markdown: {
      // 是否在每个代码块的左侧显示行号。
      lineNumbers: true
    },
    // https://vuepress-theme-reco.recoluan.com/
  }
}