import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"

Given(/^Google page is opened$/, async function(){
    await browser.url("hhtps://www.google.com")
    await browser.pause(1000)
    
})
