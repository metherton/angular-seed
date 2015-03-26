'use strict';

describe('logService', function () {

    var $q, $rootScope, $httpBackend, apiBaseUrl, deferred, logService,
        resultData, resultError;

    function successHandler(data) {
        resultData = data;
    }

    function errorHandler(error) {
        resultError = error;
    }

    beforeEach(function () {

        module('onsApp');
        inject(function(_logService_) {
            logService = _logService_;
        });
        resultData = undefined;
        resultError = undefined;
    });

    describe('log method', function() {

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


