'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

    var _ = require('lodash');

    beforeEach(function() {
        browser.get('index.html');
    });

    xit('should automatically redirect to /home when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/home");
    });

    it('should load list of persons', function() {
        browser.get('http://localhost:8000/app/index.html#/persons');
        expect(element.all(by.repeater('(rowRenderIndex, row) in rowContainer.renderedRows track by $index')).count()).toEqual(10);

        var i = 1;

    //    browser.wait(until(textToBePresentInElement(element(by.id('births')), 'Births From 1568 - present day')), 5000);
//        browser.wait(until.elementLocated(By.id('births'), 10000));


        browser.wait(function() {
            element(by.id('births')).getText().then(function (value) {
                expect(value).toBe('Births From 1568 - present day');
            });
            return true;
         //   return expect(element(by.id('births')).getText()).toBe('Births From 1568 - present day');
        } ,5000);


//        browser.wait(function() {
//            return browser.isElementPresent(by.id('births'));
//        }  , 5000);



        element.all(by.repeater('(rowRenderIndex, row) in rowContainer.renderedRows track by $index')).filter(function(element) {
            return element.getText().then(function(s) {
               return s.indexOf('george') > -1;
            });
        }).first().click();

        browser.sleep(5000);
    });

    xit('should redirect to login page', function() {
        element(by.id('dna')).click();
        browser.sleep(1000);
        browser.driver.getCurrentUrl().then(function(url) {
            var theUrl = url;
            console.log('get current url is ', theUrl);

            if (theUrl.indexOf('login') > -1) {
                browser.driver.findElement(By.id('agent')).sendKeys('martin');
                browser.driver.findElement(By.id('submit')).click();
            }

        })


        browser.sleep(3000);

        browser.waitForAngular();
        expect(element(by.id('births')).isPresent()).toBeTruthy();
        expect(element(by.id('births')).getText()).toBe('Births From 1568 - present day');

    })



});
