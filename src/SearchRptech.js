const { sleep } = require("./utils.js");
const {
  url3060TiRptech,
  url3070Rptech,
  url3080Rptech,
  url3090Rptech,
} = require("./config.js");

async function searchRptech(browser) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await search3060Ti(page);
  await search3070(page);
  await search3080(page);
  await search3090(page);
  await context.close();
}

async function search3090(page) {
  await page.goto("url3090Rptech");
  await sleep(3000);
  const text = await page.innerText(".rs2");
  if (text === "In stock") {
    console.log("In Stock");
  } else if (text === "Out of stock") {
    console.log("Out of Stock");
  } else {
    console.log("Error");
  }
}

async function search3080(page) {
  await page.goto(url3080Rptech);
  await sleep(3000);
  const text = await page.innerText(".rs2");
  if (text === "In stock") {
    console.log("In Stock");
  } else if (text === "Out of stock") {
    console.log("Out of Stock");
  } else {
    console.log("Error");
  }
}
async function search3070(page) {
  await page.goto(url3070Rptech);
  await sleep(3000);
  const text = await page.innerText(".rs2");
  if (text === "In stock") {
    console.log("In Stock");
  } else if (text === "Out of stock") {
    console.log("Out of Stock");
  } else {
    console.log("Error");
  }
}
async function search3060Ti(page) {
  await page.goto(url3060TiRptech);
  await sleep(3000);
  const text = await page.innerText(".rs2");
  if (text === "In stock") {
    console.log("In Stock");
  } else if (text === "Out of stock") {
    console.log("Out of Stock");
  } else {
    console.log("Error");
  }
}

module.exports = {
  searchRptech: searchRptech,
};
