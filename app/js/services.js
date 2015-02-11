'use strict';

var onsServices = angular.module('onsServices', ['ngResource']);

onsServices.service('personService', ['$resource', 'baseRestUrl', '$q',
  function($resource, baseRestUrl, $q){

      var personServiceApi = function() {
          return $resource(baseRestUrl + 'ons-command/rest/persons/:personId', {}, {
              query: {method:'GET', params:{personId:''}, isArray:false},
              addPerson: {method: 'POST'}
          });
      };

      this.addPerson = function(person) {
          var deferred = $q.defer();
          personServiceApi().addPerson(person).$promise.then(
              function (data) {
                  deferred.resolve(data);
              },
              function (error) {
                  deferred.reject(error);
              }
          );
          return deferred.promise;
      };

      this.getPerson = function (personId) {
          var deferred = $q.defer();
          personServiceApi().query(personId).$promise.then(
              function (data) {

                  deferred.resolve(data);
              },
              function (error) {
                  deferred.reject(error);
              }
          );
          return deferred.promise;
      };

      this.getPersons = function () {
          console.log('+++++++++++++++in getPersons++++++++++++++');
          var deferred = $q.defer();
          personServiceApi().query().$promise.then(
              function (data) {
                  console.log('datainapip', data);
                  deferred.resolve(data);
              },
              function (error) {
                  deferred.reject(error);
              }
          );
          return deferred.promise;
      };


  }]
);

onsServices.factory('surnameService', ['$resource', 'baseRestUrl',
  function($resource, baseRestUrl){
	return $resource(baseRestUrl + 'ons-command/rest/surnames/:surnameId', {}, {
        query: {method: 'GET', params: {surnameId: ''}, isArray: false},
        addSurname: {method: 'POST'}
    });
  }]
);

onsServices.factory('censusService', ['$resource', 'baseRestUrl',
        function($resource, baseRestUrl){
            return $resource(baseRestUrl + 'ons-command/rest/censuses/:censusHouseholdEntryId', {}, {
                query: {method: 'GET', params: {censusHouseholdEntryId: ''}, isArray: false},
                addCensusHouseholdEntry: {method: 'POST'}
            });
        }]
);

onsServices.factory('locationService', ['$resource', 'baseRestUrl',
    function($resource, baseRestUrl){
        return $resource(baseRestUrl + 'ons-command/rest/locations/:locationId', {}, {
            query: {method: 'GET', params: {locationId: ''}, isArray: false},
            addLocation: {method: 'POST'}
        });
    }]
);