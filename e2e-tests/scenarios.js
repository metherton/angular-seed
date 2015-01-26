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

//        element.all(by.repeater('(rowRenderIndex, row) in rowContainer.renderedRows track by $index')).filter(function(element) {
//            return element.getText().then(function(s) {
//                return s.indexOf('george') > -1;
//            });
//        }).each(function(e) {
//                e.getText().then(console.log);
//            });

//        var arr = [1,2,3,4,5,6,7,8,9];
//        var res = _.filter(arr, function(e) {
//            return e < 5;
//        });
//
//        console.log('result is', res);



//        rowElements.then(function(items) {
//           _.each(items, function(e) {
//               console.log('********');
//               console.log(e.getText());
//               console.log('--------');
//
//           });
//        });

//        var containsGeorge = function(element) {
//    //        console.log(element);
//            return element.getText().then(function(n) {
//                return n.indexOf('george') > -1;
//            });
//        };

   //     var row = _.find(rowElements, containsGeorge);
//        console.log(row);

//        rowElements.find(function(e) {
//            e.getText().then(function(s) {
//               console.log(s);
//            });
//        });

    //    console.log(rowElements);

//        var row = _

//        var row = _.find(),
//        function(e) {
//            return e.getText().then(function(s) {
//                return s.indexOf('george') > -1;
//            });
//        });

//        _.each(element.all(by.repeater('(rowRenderIndex, row) in rowContainer.renderedRows track by $index')), function(e) {
//            e.getText().then(console.log);
//        });

//        _.(element.all(by.repeater('(rowRenderIndex, row) in rowContainer.renderedRows track by $index'))).filter(function(element) {
//            return element.getText().then(function(s) {
//               return s.indexOf('george') > -1;
//            });
//        }).each(function(e) {
//            e.getText().then(console.log);
//        });

//        element.all(by.repeater('(rowRenderIndex, row) in rowContainer.renderedRows track by $index')).filter(function(element) {
//            return element.getText().then(function(s) {
//                return s.indexOf('george') > -1;
//            });
//        }).each(function(e) {
//            e.getText().then(console.log);
//        });

//        element.all(by.repeater('personDetail in personDetails')).filter(function(element) {
//            return element.getText().then(function(s) {
//                return s.indexOf('george') > -1;
//            });
//        }).each(function(e) {
//            e.getText().then(console.log);
//        });

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

//        var searchEls = element.all(by.repeater('(rowRenderIndex, row) in rowContainer.renderedRows track by $index'));
//        _.each(searchEls, function(e) {
//            e.then(function(f) {
//                console.log(f.getText());
//            });
//        });

  //      console.log(searchEls);

//        _.filter(element.all(by.repeater('(rowRenderIndex, row) in rowContainer.renderedRows track by $index')),function(e) {
//            return e.getText().then(function(s) {
//                return s.indexOf('george') > -1;
//            });
//        }).each(function(f) {
//            f.getText().then(console.log);
//        });

    });



});
