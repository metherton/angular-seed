'use strict';

describe('personService', function () {

    var $q, $rootScope, personService, $httpBackend, apiBaseUrl, deferred, surnameService, treeService,
        resultData, resultError, mockLogService;

    function successHandler(data) {
        resultData = data;
    }

    function errorHandler(error) {
        resultError = error;
    }

    beforeEach(function () {

        module('onsApp');

        module(function($provide) {
            mockLogService = {
                log: jasmine.createSpy()
            };
            $provide.value('logService', mockLogService);
        });

        inject(function(_$q_, _$rootScope_, _personService_,
                        _$httpBackend_, _surnameService_, _treeService_) {
            $q = _$q_;
            $rootScope = _$rootScope_;
            personService = _personService_;
            surnameService = _surnameService_;
            $httpBackend = _$httpBackend_;
            treeService = _treeService_;
        });
        deferred = $q.defer();
        resultData = undefined;
        resultError = undefined;
    });

    describe('getPersons and surnames', function() {

        it('should return persons', function() {
            var result;
            $httpBackend.expectGET('http://localhost:8080/ons-command/rest/persons').respond({data: 'somePersons'});
            personService.getPersons().then(function(persons) {
                console.log('data:', persons);
                result = persons;
            });
            $httpBackend.flush();
            expect(result.data).toBe('somePersons');
        });

        it('should return surnames', function() {
            var result;

            $httpBackend.expectGET('http://localhost:8080/ons-command/rest/surnames').respond({data: 'someSurnames'});
            surnameService.surnames().then(function(surnames) {
                console.log('data:', surnames);
                result = surnames;
            });
            $httpBackend.flush();
            expect(result.data).toBe('someSurnames');
            expect(mockLogService.log).toHaveBeenCalled();
        });

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        })

    });

    describe('buildTree', function() {
       it('should return tree', function() {
           var result;
           var tree = 'ethertonTree';
           $httpBackend.expectGET('http://localhost:8080/ons-command/rest/trees').respond({data: tree});
           treeService.getTree(1).then(function(tree) {
               result = tree;
           });
           $httpBackend.flush();
           expect(result.data).toBe('ethertonTree');
       });
    });

//    describe('Add Person', function() {
//
//        var expectedPostData, person;
//
//        beforeEach(function () {
//            person = {firstName: 'martin', surname: 'etherton'};
//            expectedPostData = {
//                'firstName':'martin',
//                'surname':'etherton'
//            };
//        });
//
//        xit('should add person with correct POST data', function () {
//            personService.addPerson(person).
//                then(successHandler, errorHandler);
//
//            $httpBackend.expectPOST('http://localhost:8080/ons-command/rest/persons', expectedPostData).
//                respond({id : 'id'}
//            );
//            expect(resultData).toBeUndefined();
//            $httpBackend.flush();
//            expect(resultData.id).toBe('id');
//            expect(resultError).toBeUndefined();
//        });
//    });


});


