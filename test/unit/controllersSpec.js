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



    describe('PersonListCtrl', function(){

        var $rootScope, $q, scope, ctrl, personService, $routeParams, rootScope,
            $location, $route, deferredPersons, deferredPerson, fakePersonService,
            deferredPersons;

        var fakeModal = {
            result: {
                then: function(confirmCallback, cancelCallback) {
                    //Store the callbacks for later when the user clicks on the OK or Cancel button of the dialog
                    this.confirmCallBack = confirmCallback;
                    this.cancelCallback = cancelCallback;
                }
            },
            close: function(item) {
                //The user clicked OK on the modal dialog, call the stored confirm callback with the selected item
                console.log('item', item)
                this.result.confirmCallBack( item );
            },
            dismiss: function( type ) {
                //The user clicked cancel on the modal dialog, call the stored cancel callback
                this.result.cancelCallback( type );
            }
        };

        beforeEach(module('onsApp'));
        beforeEach(module('onsServices'));

//        beforeEach(inject(function($modal) {
//            spyOn($modal, 'open').andReturn(fakeModal);
//        }));

//        beforeEach(module(function($provide) {
//
//            deferredPersons = $q.defer();
//
//            fakePersonService = {
//                getPersons: function() {
//                    return deferredPersons.promise;
//                }
//            };
//
//            $provide.value('personService', fakePersonService);
//            spyOn(fakePersonService, 'getPersons');
//        }));

        beforeEach(inject(function(_$rootScope_, $controller, $modal, _$q_) {
          //  personService = _personService_;
            $rootScope = _$rootScope_;
            $q = _$q_;
            scope = $rootScope.$new();
          //  spyOn(personService,'getPersons');
            spyOn($modal, 'open').andReturn(fakeModal);

            deferredPersons = $q.defer();
            deferredPerson = $q.defer();

            fakePersonService = {
                getPersons: function() {
                    return deferredPersons.promise;
                },
                addPerson: function() {
                    return deferredPerson.promise;
                }
            };

            spyOn(fakePersonService, 'getPersons').andCallThrough();
            spyOn(fakePersonService, 'addPerson').andCallThrough();

            ctrl = $controller('PersonListCtrl', {
                $scope: scope,
                personService: fakePersonService
            });
        }));

        it('should call getPersons', function() {

            expect(fakePersonService.getPersons).toHaveBeenCalled();

        });

        it('should attach a show success when modal login returns success response', function () {
            var selectedPerson = {name: 'john1'};

            // Mock out the modal closing, resolving with a selected item, say 1
      //      deferredPerson.resolve({name: 'john'});

            scope.open(); // Open the modal
            scope.modalInstance.close(selectedPerson);

            expect(fakePersonService.addPerson).toHaveBeenCalledWith(selectedPerson);
        });



//        beforeEach(inject(function(_$rootScope_, $controller,  _$routeParams_, _$location_, _$route_, _$modal_, _$q_) {
//
//            $q = _$q_;
//
//            deferredPersons = $q.defer();
//            deferredPerson = $q.defer();
//
//            //personService = _personService_;
//            personService = {
//                addPerson: function() {
//                    return deferredPerson.promise;
//                },
//                getPersons : function() {
//                    return deferredPersons.promise;
//                }
//            };
//
//       //     spyOn(personService, 'query').andReturn({personDetails : [{person: {surname:'Etherton',firstName:'Mark', birthDate: 2}}, {person : {surname:'Etherton',firstName:'Samuel', birthDate: 1}}]});
//
//            $routeParams = _$routeParams_;
//            $location = _$location_;
//            $route = _$route_;
//
//            $rootScope = _$rootScope_;
//            scope = $rootScope.$new();
//            scope.person = {};
//
//            spyOn(personService, 'addPerson').andCallThrough();
//            spyOn(personService, 'getPersons');
//
//            ctrl = $controller('PersonListCtrl', {
//                $scope: scope,
//                personService: personService,
//                $modal: _$modal_});
//
//        }));
//
//        it('should attach a show success when modal login returns success response', function () {
//       //     expect(scope.items).toEqual(['item1', 'item2', 'item3']);
//            var selectedPerson = {name: 'john'};
//
//       //     $rootScope.$digest();
//
//            // Mock out the modal closing, resolving with a selected item, say 1
//            scope.open(); // Open the modal
//            scope.modalInstance.close(selectedPerson);
//
//
//            expect(scope.person.name).toEqual('john'); // No dice (scope.selected) is not defined accroding to Jasmine.
//        });
//
//
//
//        xit('should do an add person', function () {
//            scope.
//            scope.model.folderType = {
//                folderCode: 'X',
//                folderName: 'MyFolderName'
//            };
//            scope.action.startSubmitting = angular.noop;
//            spyOn(scope.action, 'startSubmitting');
//            scope.action.setFinishedSuccesfully = angular.noop;
//            spyOn(scope.action, 'setFinishedSuccesfully');
//            scope.action.setFinishedWithError = angular.noop;
//            spyOn(scope.action, 'setFinishedWithError');
//
//            $rootScope.$digest();
//            scope.requestFolder();
//
//            deferredCustomerDetails.resolve();
//            $rootScope.$digest();
//
//            expect(selectedCustomerService.getCustomerDetails).toHaveBeenCalled();
//            expect(requestFolderService.requestFolder).toHaveBeenCalled();
//            expect(scope.action.startSubmitting).toHaveBeenCalled();
//
//            deferredFolderRequest.resolve();
//            $rootScope.$digest();
//
//            expect(summaryListService.add).toHaveBeenCalled();
//            expect(scope.action.setFinishedSuccesfully).toHaveBeenCalled();
//            expect(scope.action.setFinishedWithError).not.toHaveBeenCalled();
//        });
//
//
//        xit('should create "persons" model with 2 persons fetched from xhr', function() {
//            $httpBackend.expectGET('partials/home.html');
//            $httpBackend.flush();
//            expect(scope.bla).toEqualData('martin');
//        });
//
////        afterEach(function() {
////            $httpBackend.verifyNoOutstandingExpectation();
////            $httpBackend.verifyNoOutstandingRequest();
////        });
//
    });

});
