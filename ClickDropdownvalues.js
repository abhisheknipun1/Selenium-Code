var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().forBrowser('firefox').build();

var assert = require('assert');

driver.get('http://localhost:3000/#/home').then(function(){
			return driver.findElement( {xpath : '/html/body/div/div/div/header/div/a/button'}).click();
}).then(function(){

			return driver.findElement( {xpath : '/html/body/div/div/div/center/div/div/div/div'}).click();
				}).then (function(){
					return driver.findElement({xpath : '/html/body/div[2]/div[2]/ul/li[3]' }).click();
				}).then(function(){
					return driver.getCurrentUrl();
				}).then( function(url){
					assert.equal("http://localhost:3000/#/loadconf", url);
				}).then( function(){
					console.log('successfully clicking dropdown option');
					return driver.sleep(5000);
			}).then(function(){
					return driver.quit();
				});
