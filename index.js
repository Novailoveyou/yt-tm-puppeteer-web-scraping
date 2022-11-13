const puppeteer = require('puppeteer')

async function run() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.traversymedia.com')

  // await page.screenshot({ path: 'export/example.png', fullPage: true })
  // await page.pdf({ path: 'export/example.pdf', format: 'A4' })

  // const html = await page.content()

  // const title = await page.evaluate(() => document.title)

  // const text = await page.evaluate(() => document.body.innerText)

  // const links = await page.evaluate(() =>
  //   Array.from(document.querySelectorAll('a'), e => e.href)
  // )

  const courses = await page.evaluate(() =>
    Array.from(document.querySelectorAll('#courses .card'), e => ({
      title: e.querySelector('.card-body h3').innerText,
      level: e.querySelector('.card-body .level').innerText,
      url: e.querySelector('.card-footer a').href,
      promo: e.querySelector('.card-footer .promo-code .promo').innerText
    }))
  )

  console.log(courses)

  await browser.close()
}

run()
