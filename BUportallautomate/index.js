const xelenium = require("selenium-webdriver");


async function action(){
    let driver = new xelenium.Builder().forBrowser("chrome").build();
    await driver.get("http://google.com")
   
}


action();