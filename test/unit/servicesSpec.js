'use strict';

describe('personService', function () {

    var $q, $rootScope, personService, $httpBackend, apiBaseUrl, deferred,
        resultData, resultError;

    function successHandler(data) {
        resultData = data;
    }

    function errorHandler(error) {
        resultError = error;
    }

    beforeEach(function () {

        module('onsApp');

        inject(function(_$q_, _$rootScope_, _personService_,
                        _$httpBackend_) {
            $q = _$q_;
            $rootScope = _$rootScope_;
            personService = _personService_;
            $httpBackend = _$httpBackend_;
        });
        deferred = $q.defer();
        resultData = undefined;
        resultError = undefined;
    });

    describe('Add Person', function() {

        var expectedPostData, person;

        beforeEach(function () {
            person = {firstName: 'martin', surname: 'etherton'};
            expectedPostData = {
                'firstName':'martin',
                'surname':'etherton'
            };
        });

        xit('should add person with correct POST data', function () {
            personService.addPerson(person).
                then(successHandler, errorHandler);

            $httpBackend.expectPOST('http://localhost:8080/ons-command/rest/persons', expectedPostData).
                respond({id : 'id'}
            );
            expect(resultData).toBeUndefined();
            $httpBackend.flush();
            expect(resultData.id).toBe('id');
            expect(resultError).toBeUndefined();
        });
    });

});


