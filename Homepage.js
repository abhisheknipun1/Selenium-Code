var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().forBrowser('firefox').build();

var assert = require('assert');
 
driver.get('http://localhost:3000/#/home').
	then(function(){
			return driver.getTitle();
		}).
		then( function(title){
			assert.equal("React App", title);
		}).
		then(function(){

				console.log('successfully opening Traig Dashboard page');
				return driver.quit();

			});
