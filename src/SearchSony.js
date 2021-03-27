const { sleep } = require("./utils.js");
const { sendEmailNotification } = require("./SendEmailNotification");
const { urlSony } = require("./config.js");
async function searchSony(browser) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(
    "https://shopatsc.com/collections/television/products/sony-bravia-123-cm-49-inches-ultra-hd-certified-android-smart-led-tv-49x7500h-black"
  );
  await sleep(3000);
  let qs = await page.$(".groups-btn >> #product-add-to-cart");
  if (qs) {
    console.log("In Stock");
    await sendEmailNotification("PS5", urlSony);
  } else {
    console.log("Out of Stock");
  }
}

module.exports = { searchSony: searchSony };
