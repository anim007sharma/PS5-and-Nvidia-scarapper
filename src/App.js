const { firefox } = require("playwright");
// const cron = require("node-schedule");
// const nodemailer = require("nodemailer");
// const searchAmazon = require("./SearchAmazon.js");
// const { searchFlipkart } = require("./SearchFlipkart.js");
// const { searchGamesTheShop } = require("./searchGamesTheShop.js");
const { searchRptech } = require("./SearchRptech");

async function configureBrowser() {
  const browser = await firefox.launch();
  // await searchAmazon(browser);
  // await searchFlipkart(browser);
  // await searchGamesTheShop(browser);
  await searchRptech(browser);
  // browser.close();
}

// const start = () => {
//   let job = cron.scheduleJob("*/15 * * * * *", function () {
//     configureBrowser();
//   });
// };

// start();
configureBrowser();
