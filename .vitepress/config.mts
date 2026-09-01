import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'VEM 售卖机管理后台使用手册',
  description: '售卖机(VEM)管理后台的商户与渠道操作指南',
  srcDir: '.',
  vite: {
    server: { port: 5177 },
    preview: { port: 4177 }
  },
  themeConfig: {
    search: { provider: 'local' },
    nav: [
      { text: '快速上手', link: '/guide/getting-started' },
      { text: '商户操作指南', link: '/guide/device' },
      { text: '渠道操作指南', link: '/channel/index' },
      { text: '常见问题', link: '/faq' }
    ],
    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '快速上手', link: '/guide/getting-started' }
        ]
      },
      {
        text: '设备与商品(上线三步)',
        items: [
          { text: '① 设备接入与管理', link: '/guide/device' },
          { text: '② 商品管理', link: '/guide/product' },
          { text: '③ 排货与上架', link: '/guide/stock' }
        ]
      },
      {
        text: '日常运营',
        items: [
          { text: '补货', link: '/guide/restock' },
          { text: '订单与退款', link: '/guide/order' },
          { text: '工作台与报表', link: '/guide/report' },
          { text: '设备地图', link: '/guide/map' },
          { text: '告警处理', link: '/guide/alarm' }
        ]
      },
      {
        text: '营销',
        items: [
          { text: '促销活动', link: '/guide/promotion' },
          { text: '优惠码', link: '/guide/promotion-code' }
        ]
      },
      {
        text: '屏幕装修',
        items: [
          { text: '设备模板与屏幕装修', link: '/guide/template' }
        ]
      },
      {
        text: '其它',
        items: [
          { text: '系统设置', link: '/guide/settings' },
          { text: '常见问题', link: '/faq' }
        ]
      },
      {
        text: '渠道操作指南',
        items: [
          { text: '渠道功能总览', link: '/channel/index' }
        ]
      }
    ],
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新' }
  }
})
