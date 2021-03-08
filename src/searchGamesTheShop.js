const { sleep } = require("./utils.js");
const { urlGamesTheShop } = require("./config.js");

async function searchGamesTheShop(browser) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(urlGamesTheShop);
  await sleep(3000);
  let qs = await page.$(".vrt-mdl.in-stock");
  if (qs) {
    const text = await page.innerText(".vrt-mdl.in-stock");
    if (text === "In Stock") {
      console.log("In Stock");
    } else {
      console.log("Error");
    }
  } else {
    console.log("Out of Stock");
  }
}
module.exports = { searchGamesTheShop: searchGamesTheShop };
