const puppeteer = require('puppeteer')
const fs = require('fs')

async function visit_with_session(user, pass, link) {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'], product: 'firefox', headless: false, ignoreHTTPSErrors: true})
    const page = await browser.newPage()
    await page.goto("http://localhost/original-store/login.php")
    await new Promise(resolve => setTimeout(resolve, 500));
    await page.type('#username', user);
    await page.type('#password', pass);
    await page.click('#submit');
	await page.waitForTimeout(2000)
    await page.goto(link);
    await page.waitForTimeout(4000) 
   
    await page.close();
    await browser.close();
}

module.exports.visit_with_session = visit_with_session;
