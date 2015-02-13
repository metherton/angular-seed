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

    xit('should load list of persons', function() {
        browser.get('http://localhost:8000/app/index.html#/persons');
        expect(element.all(by.repeater('(rowRenderIndex, row) in rowContainer.renderedRows track by $index')).count()).toEqual(10);

        var i = 1;

        element.all(by.repeater('(rowRenderIndex, row) in rowContainer.renderedRows track by $index')).filter(function(element) {
            return element.getText().then(function(s) {
               return s.indexOf('george') > -1;
            });
        }).first().click();

    });

    it('should redirect to login page', function() {
        element(by.id('dna')).click();
        browser.sleep(1000);
        browser.driver.findElement(By.id('agent')).sendKeys('martin');
        browser.driver.findElement(By.id('submit')).click();

        browser.sleep(3000);

        expect(element(by.id('births')).isPresent()).toBeTruthy();
        expect(element(by.id('births')).getText()).toBe('Births From 1568 - present day');

    })



});
