'use strict';

/* jasmine specs for controllers go here */
describe('Ons controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('onsApp'));
//    beforeEach(module('onsServices'));
//
//  beforeEach(module('onsServices'));

    describe('PersonListCtrl', function(){

        var scope, ctrl, personService, $httpBackend, $routeParams, $location, $route;
        var deferredPersonForm, personServiceMock;

        beforeEach(inject(function($rootScope, $controller, _$httpBackend_, $q) {

//            deferredPersonForm = $q.defer();
//            deferredPersonForm.resolve('somevalue');

            scope = $rootScope.$new();

            personServiceMock = {
                query: function() {
                    deferredPersonForm = $q.defer();
                    return {$promise: deferredPersonForm.promise};
                }
            };

//            personService = _personService_;
            $httpBackend = _$httpBackend_;

//            spyOn(personService, 'query').andReturn({personDetails : [{person: {surname:'Etherton',firstName:'Mark', birthDate: 2}}, {person : {surname:'Etherton',firstName:'Samuel', birthDate: 1}}]});

//            $routeParams = _$routeParams_;
//            $location = _$location_;
//            $route = _$route_;

            spyOn(personServiceMock, 'query').andCallThrough();

            $httpBackend.when('GET', 'partials/home.html').respond('someresponse');

            ctrl = $controller('PersonListCtrl', {$scope: scope, personService: personServiceMock}, $httpBackend);
          //  $rootScope.$apply();


        }));

        it('should do an add person', function () {
            scope.
            scope.model.folderType = {
                folderCode: 'X',
                folderName: 'MyFolderName'
            };
            scope.action.startSubmitting = angular.noop;
            spyOn(scope.action, 'startSubmitting');
            scope.action.setFinishedSuccesfully = angular.noop;
            spyOn(scope.action, 'setFinishedSuccesfully');
            scope.action.setFinishedWithError = angular.noop;
            spyOn(scope.action, 'setFinishedWithError');

            $rootScope.$digest();
            scope.requestFolder();

            deferredCustomerDetails.resolve();
            $rootScope.$digest();

            expect(selectedCustomerService.getCustomerDetails).toHaveBeenCalled();
            expect(requestFolderService.requestFolder).toHaveBeenCalled();
            expect(scope.action.startSubmitting).toHaveBeenCalled();

            deferredFolderRequest.resolve();
            $rootScope.$digest();

            expect(summaryListService.add).toHaveBeenCalled();
            expect(scope.action.setFinishedSuccesfully).toHaveBeenCalled();
            expect(scope.action.setFinishedWithError).not.toHaveBeenCalled();
        });


        xit('should create "persons" model with 2 persons fetched from xhr', function() {
            $httpBackend.expectGET('partials/home.html');
            $httpBackend.flush();
            expect(scope.bla).toEqualData('martin');
        });

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

    });

});
