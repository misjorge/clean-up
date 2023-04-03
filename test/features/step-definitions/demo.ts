import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"

Given(/^Google page is opened$/, async function(){
    await browser.url("https://www.google.com")
    await browser.pause(10000)
    

})
