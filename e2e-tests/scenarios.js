'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

    var _ = require('lodash');

    beforeEach(function() {
        browser.get('index.html');
    });

  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });

    it('should load list of persons', function() {
        browser.get('http://localhost:8000/app/index.html#/persons');
        expect(element.all(by.repeater('(rowRenderIndex, row) in rowContainer.renderedRows track by $index')).count()).toEqual(10);

        var i = 1;

        element.all(by.repeater('(rowRenderIndex, row) in rowContainer.renderedRows track by $index')).filter(function(element) {
            return element.getText().then(function(s) {
               return s.indexOf('george') > -1;
            });
        }).first().click();

        element.all(by.repeater('personDetail in personDetails')).filter(function(element) {
            return element.getText().then(function(s) {
                return s.indexOf('george') > -1;
            });
        }).each(function(e) {
            e.getText().then(console.log);
        });

//        element.all(by.repeater('(rowRenderIndex, row) in rowContainer.renderedRows track by $index')).filter(function(element) {
//            return element.getText().then(function(s) {
//                return s.indexOf('george') > -1;
//            });
//        }).first.then(function(row) {
//                row.click();
//            });


//        element.all(by.repeater('(rowRenderIndex, row) in rowContainer.renderedRows track by $index')).filter(function(element) {
//            return element.getText().then(function(s) {
//                return s.indexOf('george') > -1;
//            });
//        }).each(function(e) {
//            e.getText().then(console.log);
//        });

    });



});
