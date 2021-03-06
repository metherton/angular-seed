'use strict';

/* jasmine specs for controllers go here */
describe('Ons controllers', function() {

    xdescribe('PersonListCtrl', function() {

        var scope, $rootScope, $q, mockPersonService, deferredPersons, $controller, _ , $httpBackend,
            form, compile, numbersOnlyDirective, implFn, element, mockTreeService, treeCtrl;

        beforeEach(module('onsApp'));
        beforeEach(module('onsControllers'));
        beforeEach(module(function($provide) {
            mockTreeService = {
                getTree: jasmine.createSpy().andReturn('tree')
            };
            $provide.value('treeService', mockTreeService);
        }));

        beforeEach(inject(function(_$controller_, personService, _$rootScope_, _$q_, _$httpBackend_, $compile, _numbersOnlyDirective_) {
            $q = _$q_;
            $controller = _$controller_;
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            $httpBackend = _$httpBackend_;
            deferredPersons = $q.defer();

            compile = $compile;
            numbersOnlyDirective = _numbersOnlyDirective_;

            element = angular.element(
                    '<form name="form">' +
                    '<input numbers-only name="somenum" ng-model="model.mynum" />Value is {{mynum}}' +
                    '</form>'
            );
            scope.model = {mynum: null};
            compile(element)(scope);
            form = scope.form;

//            compile(element)(scope);
//            scope.$digest();
//            form = scope.form;
//            var linkFn = numbersOnlyDirective[0].link;
//
//            var fakeCtrl = {$parsers : { push: jasmine.createSpy()},
//                $setViewValue : jasmine.createSpy(),$render : jasmine.createSpy()};
//
//
//            linkFn(null, null, null, fakeCtrl);
//            console.log('fakeCtrl', fakeCtrl.$parsers.push.calls[0].args[0]);
//            implFn = fakeCtrl.$parsers.push.calls[0].args[0];


            mockPersonService = {
                getPersons: function() {return deferredPersons.promise;}
            };



            spyOn(mockPersonService, 'getPersons').andCallThrough();

            $httpBackend.expectGET('partials/home.html').respond(200);

            $controller('PersonListCtrl',
                {
                    $scope: scope,
                    personService: mockPersonService,
                    _: $rootScope._

                }
            );
            treeCtrl = $controller('TreeCtrl',
                {
                    $scope: scope,
                    _: $rootScope._

                }
            );

        }));

        xit('should set all person list data on the scope', function() {
            var surnames = ['Etherton', 'Jones'];
            var fathers = ['Samuel', 'Sidney'];
            var mothers = ['Nora', 'Mary'];
            var locations = ['Sheffield', 'London'];
            var employees = [];
            deferredPersons.resolve(
                {
                    surnames: surnames,
                    fatherDetails: fathers,
                    motherDetails: mothers,
                    locations: locations,
                    employees: employees
                }
            );

            $rootScope.$digest();

            expect(scope.surnames).toBe(surnames);
            expect(scope.fathers).toBe(fathers);
            expect(scope.mothers).toBe(mothers);
            expect(scope.locations).toBe(locations);
        });

        it('should strip non digits from input', function() {
           // expect(implFn('a9')).toBe('9');
            form.somenum.$setViewValue('9asda');
            $rootScope.$digest();
            expect(scope.model.mynum).toEqual('9');
        });

        it('should construct tree', function() {

            treeCtrl.makeTree(1);

            expect(mockTreeService.getTree).toHaveBeenCalled();
            expect(scope.tree).toBe('tree');
        });

    });

    describe('directives', function() {

        var $rootScope, $compile, element, $timeout;

        beforeEach(module('onsApp'));

        beforeEach(inject(function(_$rootScope_, _$compile_, _$timeout_) {
            $rootScope = _$rootScope_;
            $compile = _$compile_;
            $timeout = _$timeout_;

        }));

        it('should set focus on the input element', function() {
            element = angular.element('<input focus-me="true" />');
            $compile(element)($rootScope);

            spyOn(element[0],'focus');
            $rootScope.$digest();


            $timeout.flush();

//            $rootScope.$digest();
            expect(element[0].focus).toHaveBeenCalled();
        });

        it('should set focus on the input element for an expression', function() {
            element = angular.element('<input focus-me-expression="true" />');
            $compile(element)($rootScope);

            spyOn(element[0],'focus');
            $rootScope.$digest();


        //      $timeout.flush();

//            $rootScope.$digest();
            expect(element[0].focus).toHaveBeenCalled();
        });

        afterEach(function() {
            $timeout.verifyNoPendingTasks()
        })


    });


});