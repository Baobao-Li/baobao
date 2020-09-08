module.exports = {
  base: '/Blog/',
  title: "知识点总结",
  description: '任何不能够给你快乐的编程都是耍流氓',
  head: [
    ['link', {rel: 'icon',href: '/logo.jpg'}]
  ],
  themeConfig: {
    // 导航栏 Logo
    logo: '/logo.jpg',
    // HitHub
    repo: 'https://github.com/Baobao-Li/Blog',
    sidebar: 'auto',
    displayAllHeaders: true,
    docsDir: 'src',
    editLinks: true,
    nav: [
      {
        text: '快速搭建开发环境',
        link: '/zh/standard/Start.md'
      },
      {
        text: 'Web前端',
        link: '/zh/standard/St.md'
      }
    ]
  }
}