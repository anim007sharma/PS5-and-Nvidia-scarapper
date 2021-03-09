const { sleep } = require("./utils.js");
const { urlSony } = require("./config.js");
async function searchSony(browser) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(urlSony);
  await sleep(3000);
  let qs = await page.$(".groups-btn >> #product-add-to-cart");
  if (qs) {
    console.log("In Stock");
  } else {
    console.log("Out of Stock");
  }
}

module.exports = { searchSony: searchSony };
