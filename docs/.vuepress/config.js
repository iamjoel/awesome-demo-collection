module.exports = {
  title: '了不起的代码集',
  description: '了不起的代码集',
  base: '/awesome-demo-collection/dist/', // 部署站点的基础路径
  dest: './dist', // 构建输出的位置，从项目根路径开始算。
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F
    nav: [
      {text: 'GitHub', link: 'https://github.com/iamjoel/awesome-demo-collection'},
    ],
    // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F
    sidebar: [
      {
        title: '介绍',
        path: '/'
      },
      {
        title: '项目',
        collapsable: false,
        children: [
          {
            title: '猜数字游戏',
            path: '/content/guess-num'
          }
        ]
      },
    ]

  }
}