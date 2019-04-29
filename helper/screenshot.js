const puppeteer = require("puppeteer");
// const cheerio = require("cheerio");

module.exports = async function getDetails(url, cb) {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto(url, {waitUntil: 'domcontentloaded'});
  let title = await page.title();  
  let shot = await page.screenshot({ fullPage: false, encoding: "base64" });
  await browser.close();
  cb({ title: title, shot: shot })
}

// module.exports = function getTitle(html) {
//   const $ = cheerio.load(html);
//   let title = $("title").text();
//   return title;
// }