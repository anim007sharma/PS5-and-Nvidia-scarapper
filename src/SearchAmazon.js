const { sleep } = require("./utils.js");
const { urlAmazon } = require("./config.js");
async function searchAmazon(browser) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(urlAmazon);
  await sleep(3000);
  const text = await page.innerText(".a-size-medium.a-color-price");
  console.log(text);
  if (text === "Currently unavailable.") {
    console.log("Out of Stock");
  } else {
    console.log("In Stock");
  }
  await context.close();
}

module.exports = { searchAmazon: searchAmazon };
