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
//        element.all(by.repeater('(rowRenderIndex, row) in rowContainer.renderedRows track by $index')).filter(function(element) {
//
//            element.getText().then(console.log);
//            console.log(i);
//            i++;
//            console.log(element.getText() === 'Etherton');
//            return element.getText() === 'Etherton';
//        }).each(function(e) {
//            e.getText().then(console.log);
//        });

        element.all(by.repeater('(rowRenderIndex, row) in rowContainer.renderedRows track by $index')).filter(function(element) {

            return element.getText().then(function(s) {
               return s.indexOf('george') > -1;
            });
//            element.getText().then(function(s) {
//                console.log('bla');
//                console.log(s.indexOf('Etherton')  > -1);
//            });
//            element.getText().then(console.log);
//            console.log(i);
//            i++;
//            return element.getText() === 'Etherton';

//            function containsString(e) {
//                return e.indexOf('samuel') > -1;
//            }
//
//            return containsString(element.getText().then);

//            element.getText().then(function(s) {
//                return s.indexOf('samuel')  > -1;
//            });

//            return element.getText().then( function(s) {
//                return s.indexOf('Etherton')  > -1)};
//            })



        }).each(function(e) {
            e.getText().then(console.log);
//            then(function(e) {
//                console.log(e.getText());
//            });
        });



//        element.all(by.repeater('(rowRenderIndex, row) in rowContainer.renderedRows track by $index')).each(function(element) {
//            element.getText().then(console.log);
//        });
//        _(rows).forEach(function(row) {
//           console.log(row.getTagName());
//        });




    });



});
