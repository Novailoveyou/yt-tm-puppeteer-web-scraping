const puppeteer = require('puppeteer')

async function run() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.google.com')

  await page.screenshot({ path: 'example.png', fullPage: true })

  await browser.close()
}

run()
