const { sleep } = require("./utils.js");
const { urlFlipkart } = require("./config.js");

async function searchFlipkart(browser) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(urlFlipkart);
  await sleep(3000);
  let qs = await page.$("._16FRp0");
  if (qs) {
    const text = await page.innerText("._16FRp0");
    if (text === "Sold Out") {
      console.log("Out of Stock");
    } else {
      console.log("Error");
    }
  } else {
    console.log("In Stock");
  }
}

module.exports = { searchFlipkart: searchFlipkart };
