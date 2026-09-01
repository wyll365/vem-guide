import { defineConfig } from 'vitepress'

// —— 中文侧边栏 ——
const zhSidebar = [
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
]

// —— 英文侧边栏 ——
const enSidebar = [
  {
    text: 'Getting Started',
    items: [
      { text: 'Quick Start', link: '/en/guide/getting-started' }
    ]
  },
  {
    text: 'Devices & Products (Go Live in 3 Steps)',
    items: [
      { text: '1. Connect & Manage Devices', link: '/en/guide/device' },
      { text: '2. Product Management', link: '/en/guide/product' },
      { text: '3. Assign Slots & Stock Up', link: '/en/guide/stock' }
    ]
  },
  {
    text: 'Daily Operations',
    items: [
      { text: 'Restocking', link: '/en/guide/restock' },
      { text: 'Orders & Refunds', link: '/en/guide/order' },
      { text: 'Dashboard & Reports', link: '/en/guide/report' },
      { text: 'Device Map', link: '/en/guide/map' },
      { text: 'Alerts', link: '/en/guide/alarm' }
    ]
  },
  {
    text: 'Marketing',
    items: [
      { text: 'Promotions', link: '/en/guide/promotion' },
      { text: 'Promo Codes', link: '/en/guide/promotion-code' }
    ]
  },
  {
    text: 'Screen Design',
    items: [
      { text: 'Device Templates & Screen Design', link: '/en/guide/template' }
    ]
  },
  {
    text: 'Others',
    items: [
      { text: 'Settings', link: '/en/guide/settings' },
      { text: 'FAQ', link: '/en/faq' }
    ]
  },
  {
    text: 'Channel Guide',
    items: [
      { text: 'Channel Overview', link: '/en/channel/index' }
    ]
  }
]

export default defineConfig({
  title: 'VEM 售卖机管理后台使用手册',
  description: '售卖机(VEM)管理后台的商户与渠道操作指南',
  srcDir: '.',
  vite: {
    server: { port: 5177 },
    preview: { port: 4177 }
  },
  themeConfig: {
    search: { provider: 'local' }
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '快速上手', link: '/guide/getting-started' },
          { text: '商户操作指南', link: '/guide/device' },
          { text: '渠道操作指南', link: '/channel/index' },
          { text: '常见问题', link: '/faq' }
        ],
        sidebar: zhSidebar,
        outline: { label: '本页目录', level: [2, 3] },
        docFooter: { prev: '上一篇', next: '下一篇' },
        lastUpdated: { text: '最后更新' }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'VEM Vending Admin Guide',
      description: 'Merchant and channel operation guide for the VEM vending machine admin console',
      themeConfig: {
        nav: [
          { text: 'Quick Start', link: '/en/guide/getting-started' },
          { text: 'Merchant Guide', link: '/en/guide/device' },
          { text: 'Channel Guide', link: '/en/channel/index' },
          { text: 'FAQ', link: '/en/faq' }
        ],
        sidebar: enSidebar,
        outline: { label: 'On this page', level: [2, 3] },
        docFooter: { prev: 'Previous', next: 'Next' },
        lastUpdated: { text: 'Last updated' }
      }
    }
  }
})
