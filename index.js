const puppeteer = require('puppeteer')

async function run() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.google.com')

  await page.screenshot({ path: 'export/example.png', fullPage: true })
  await page.pdf({ path: 'export/example.pdf', format: 'A4' })

  await browser.close()
}

run()
