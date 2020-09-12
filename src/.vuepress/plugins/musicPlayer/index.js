const { path } = require('@vuepress/shared-utils')
module.exports = () => ({
  name: 'vuepress-plugin-musicPlayer',
  enhanceAppFiles: [
    path.resolve(__dirname, './musicPlayer/musicPlayer.js')
  ],
  globalUIComponents: 'musicPlayer'
})