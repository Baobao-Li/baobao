module.exports = {
  dest: './docs/',
  base: '/Blog/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '前端知识点总结',
      description: '任何不能够给你快乐的编程都是耍流氓'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  // 主题
  theme: 'reco',
  themeConfig: {
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 导航栏 Logo
    logo: '/logo.jpg',
    // 开启侧边栏
    // sidebar: 'auto',
    // sidebarDepth: 1,
    locales: {

      '/': {
        label: '简体中文',
        repo: 'baobao-li/Blog',
        selectText: '选择语言',
        editLinkText: '帮助我们改进内容',
        lastUpdated: '上次更新',
        // 导航
        nav: [
          { text: '首页', link: '/', icon: 'reco-home' },
          { text: '快速搭建开发环境', link: '/exploit/', icon: 'reco-document' },
          {
            text: 'Web知识点笔记',
            items: [
              { text: '思维导图', link: '/web/Mind/' },
              { text: 'Vue', link: '/web/Vue/' },
              { text: 'React', link: '/web/React/' },
              { text: 'React Hooks', link: '/web/ReactHooks/' },
              { text: '小程序', link: '/web/VX/' },
              { text: 'Webpack', link: '/web/Webpack/' },
              { text: 'TypeScript', link: '/web/Ts/' },
              { text: 'Git', link: '/web/Git/' },
            ]
          },
          { text: 'GitHub', link: 'https://github.com/Baobao-Li/Blog', icon: 'reco-github' },
        ],
        // 侧边栏
        sidebar: {
          '/exploit/': [{
            title: '快速搭建开发环境', children: [
              ''
            ]
          }],
          '/web/Mind/': [{
            title: '思维导图版知识点总结', children: [
              ''
            ]
          }],
          '/web/Vue/': [{
            title: 'Vue知识点', children: ['', 'Es6', 'Es6方法扩展', 'Webpack', 'Babel', 'Promise', 'Vue 各种方法之间的区别', 'Vue组件', 'Vue路由', 'Vue动画', 'vue钩子函数', 'vuex']
          }],
          '/web/React/': [{
            title: 'React知识点', children: [
              '', 'JSX', 'MVVM', 'Props', 'React生命周期', 'React组件', 'React路由', 'redux', 'redux中间件', '组件通信', '高阶组件'
            ]
          }],
          '/web/ReactHooks/': [{
            title: 'React Hooks', children: [
              ''
            ]
          }],
          '/web/VX/': [{
            title: '小程序知识点', children: [
              '', 'WXS', 'wepy组件通信', '小程序事件', '小程序路由', '小程序组件', '小程序组件化'
            ]
          }],
          '/web/Webpack/': [{
            title: 'Webpack', children: [
              '',
            ]
          }],
          '/web/Ts/': [{
            title: 'TypeScript', children: [
              'TypeScript基础用法','TypeScript高级用法']
          }],
          '/web/Git/': [{
            title: 'Git操作', children: [
              '']
          }],
        },
      }
    },



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