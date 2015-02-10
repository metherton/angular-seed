'use strict';

/* jasmine specs for controllers go here */
describe('Ons controllers', function() {

    describe('PersonListCtrl', function() {

        var scope, $rootScope, $q, mockPersonService, deferredPersons, $controller, _ , $httpBackend;

        beforeEach(module('onsApp'));
        beforeEach(module('onsControllers'));

        beforeEach(inject(function(_$controller_, personService, _$rootScope_, _$q_, _$httpBackend_) {
            $q = _$q_;
            $controller = _$controller_;
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            $httpBackend = _$httpBackend_;
            deferredPersons = $q.defer();

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
        }));

        it('should set all person list data on the scope', function() {
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

    });


});