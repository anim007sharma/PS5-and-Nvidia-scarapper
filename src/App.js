const { firefox } = require("playwright");
const cron = require("node-schedule");
const nodemailer = require("nodemailer");
const urlAmazon = "https://www.amazon.in/gp/product/B08FV5GC28/";

const configureBrowser = async () => {
  const browser = await firefox.launch();
  await searchAmazonForRyzen(browser);
  browser.close();
};

var searchAmazonForRyzen = async (browser) => {
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
};

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const start = () => {
  let job = cron.scheduleJob("*/15 * * * * *", function () {
    configureBrowser();
  });
};

start();
