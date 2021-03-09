/**
 * TODO: Add Support for Chroma (PS5)
 * TODO: Add Support for Reliance (PS5)
 * TODO: Add Support for Sony (PS5)
 * TODO: Add Support for notification (SMS and Email)
 */

const { firefox } = require("playwright");
// const cron = require("node-schedule");
// const nodemailer = require("nodemailer");
// const searchAmazon = require("./SearchAmazon.js");
// const { searchFlipkart } = require("./SearchFlipkart.js");
// const { searchGamesTheShop } = require("./searchGamesTheShop.js");
// const { searchRptech } = require("./SearchRptech");
// const { searchReliance } = require("./SearchReliance");
const { searchSony } = require("./SearchSony");

async function configureBrowser() {
  const browser = await firefox.launch();
  // await searchAmazon(browser);
  // await searchFlipkart(browser);
  // await searchGamesTheShop(browser);
  // await searchRptech(browser);
  // await searchReliance(browser);
  await searchSony(browser);
  // browser.close();
}

// const start = () => {
//   let job = cron.scheduleJob("*/15 * * * * *", function () {
//     configureBrowser();
//   });
// };

// start();
configureBrowser();
