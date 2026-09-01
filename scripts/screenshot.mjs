/**
 * 使用手册截图脚本:登录管理后台后按 shots.json 清单逐页截图,输出到 images/。
 *
 * 用法:
 *   VEM_GUIDE_URL=http://192.168.50.3:5173 \
 *   VEM_GUIDE_USER=xxx VEM_GUIDE_PASS=xxx \
 *   pnpm shots [过滤关键字]
 *
 * 说明:
 *   - 用本机 Chrome(puppeteer-core),启动参数带 --no-proxy-server 绕系统代理
 *   - shots.json 每项: { "file": "device-list.png", "route": "#/vem/device", "waitMs": 800, "fullPage": false }
 *   - 传"过滤关键字"参数时只截文件名包含该关键字的项,便于单张重截
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer-core'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.resolve(__dirname, '../public/images')
const SHOTS = JSON.parse(fs.readFileSync(path.join(__dirname, 'shots.json'), 'utf8'))

const BASE = process.env.VEM_GUIDE_URL
const USER = process.env.VEM_GUIDE_USER
const PASS = process.env.VEM_GUIDE_PASS
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const FILTER = process.argv[2] || ''

if (!BASE || !USER || !PASS) {
  console.error('缺少环境变量: VEM_GUIDE_URL / VEM_GUIDE_USER / VEM_GUIDE_PASS')
  process.exit(1)
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms))

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-proxy-server', '--window-size=1440,900'],
  defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 } // 2x 高清截图
})

try {
  const page = await browser.newPage()

  // ---- 登录 ----
  console.log('登录', BASE)
  await page.goto(BASE + '/#/login', { waitUntil: 'networkidle2', timeout: 30000 })
  await page.waitForSelector('input', { timeout: 15000 })
  const inputs = await page.$$('input:not([type=checkbox])')
  await inputs[0].type(USER, { delay: 20 })
  await page.type('input[type=password]', PASS, { delay: 20 })
  await page.click('.login-btn')
  // 等待跳出登录页(菜单出现)
  await page.waitForFunction(() => !location.hash.includes('login'), { timeout: 20000 })
  await sleep(2000)
  console.log('登录成功,开始截图')

  // ---- 逐页截图 ----
  fs.mkdirSync(OUT_DIR, { recursive: true })
  for (const shot of SHOTS) {
    if (FILTER && !shot.file.includes(FILTER)) continue
    const url = BASE + '/' + shot.route.replace(/^\//, '')
    process.stdout.write(`  ${shot.file}  ←  ${shot.route} ... `)
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })
      await sleep(shot.waitMs ?? 1200)
      if (shot.click) { // 需要先点开弹窗/Tab 的截图
        for (const sel of [].concat(shot.click)) {
          await page.click(sel)
          await sleep(600)
        }
      }
      await page.screenshot({
        path: path.join(OUT_DIR, shot.file),
        fullPage: shot.fullPage ?? false
      })
      console.log('✓')
    } catch (e) {
      console.log('✗ ' + e.message)
    }
  }
} finally {
  await browser.close()
}
console.log('完成,输出目录:', OUT_DIR)
