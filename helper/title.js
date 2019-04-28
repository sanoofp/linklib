// const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

module.exports = async function getDetails(url, cb) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, {waitUntil: 'domcontentloaded'});
  let title = await page.title();  
  let shot = await page.screenshot({ fullPage: false });
  await browser.close();
  // if(shot) {
    // cb({
      // shot: shot,
  //     title: title
  //   })
  // } else {
  //   return null;
  // }
  cb({ title: title, shot: shot.toString("base64") })
}

// module.exports = function getTitle(html) {
//   const $ = cheerio.load(html);
//   let title = $("title").text();
//   return title;
// }