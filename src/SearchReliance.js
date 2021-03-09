const { sleep } = require("./utils.js");
const { urlReliance } = require("./config.js");
async function searchReliance(browser) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(urlReliance);
  await sleep(3000);
  let qs = await page.$(".pdp__addToCartSection");
  if (qs) {
    console.log("In Stock");
  } else {
    console.log("Out of Stock");
  }
}

module.exports = { searchReliance: searchReliance };
