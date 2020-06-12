module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '个人博客',
      description: '希望我的答案对你有所帮助',
      link: '/han.jpg'
    }
  },
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/han.jpg' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '算法', link: '/', icon: 'reco-home' },
      { text: '面试', link: '/timeline/', icon: 'reco-date' },
      {
        text: '框架',
        items: [
          { text: 'vuepress-reco', link: '/docs/theme-reco/' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/recoluan', icon: 'reco-github' }
    ],

    

    
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    // lastUpdated: 'Last Updated',
    // 作者
    // author: 'reco_luan',
    // 作者头像
    // authorAvatar: 'http://img0.imgtn.bdimg.com/it/u=1291611477,2704838439&fm=26&gp=0.jpg',
    // 备案号
    // record: 'xxxx',
    // 项目开始时间
    // startYear: '2017'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  }
}  
