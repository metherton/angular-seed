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

onsServices.service('treeService', ['$resource', 'baseRestUrl', '$q',
        function($resource, baseRestUrl, $q){

            var treeServiceApi = function() {
                var url = baseRestUrl + 'ons-command/rest/trees/:treeId';
                console.log('url', url);
                return $resource(url, {}, {
                    query: {method:'GET', params:{treeId:''}, isArray:false},
                    addTree: {method: 'POST'}
                });
            };

            this.getTree = function (treeId) {
                console.log('treeid', treeId);
                var deferred = $q.defer();
                treeServiceApi().query(treeId).$promise.then(
                    function (data) {
                        deferred.resolve(data);
                    },
                    function (error) {
                        deferred.reject(error);
                    }
                );
                return deferred.promise;
            };

            this.getTrees = function () {
                console.log('+++++++++++++++in getTrees++++++++++++++');
                var deferred = $q.defer();
                treeServiceApi().query().$promise.then(
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


onsServices.service('surnameService', ['$resource', 'baseRestUrl', '$q',
    function($resource, baseRestUrl, $q) {

        var surnameServiceApi = function() {
            return $resource(baseRestUrl + 'ons-command/rest/surnames/:surnameId', {}, {
                query: {method: 'GET', params: {surnameId: ''}, isArray: false},
                addSurname: {method: 'POST'}});
        };

        this.addSurname = function(surname) {
            var deferred = $q.defer();
            surnameServiceApi().addSurname(surname).$promise.then(
                function (data) {
                    deferred.resolve(data);
                },
                function (error) {
                    deferred.reject(error);
                }
            );
            return deferred.promise;
        };

        this.getSurname = function (surnameId) {
            var deferred = $q.defer();
            surnameServiceApi().query(surnameId).$promise.then(
                function (data) {
                    deferred.resolve(data);
                },
                function (error) {
                    deferred.reject(error);
                }
            );
            return deferred.promise;
        };

        this.surnames = function () {
            var deferred = $q.defer();
            surnameServiceApi().query().$promise.then(
                function (data) {
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

onsServices.service('logService',
    function() {
        this.log = function(message) {
            console.log('in log service log funciton', message);
        };
    }
);

onsServices.service('censusService', ['$resource', 'baseRestUrl', '$q',
    function($resource, baseRestUrl, $q) {

        var censusServiceApi = function() {
            return $resource(baseRestUrl + 'ons-command/rest/censuses/:censusHouseholdEntryId', {}, {
                query: {method: 'GET', params: {censusHouseholdEntryId: ''}, isArray: false},
                addCensusHouseholdEntry: {method: 'POST'}});
        };

        this.addCensusHouseholdEntry = function(censusHouseholdEntry) {
            var deferred = $q.defer();
            censusServiceApi().addCensusHouseholdEntry(censusHouseholdEntry).$promise.then(
                function (data) {
                    deferred.resolve(data);
                },
                function (error) {
                    deferred.reject(error);
                }
            );
            return deferred.promise;
        };

        this.getCensusHouseholdEntry = function (censusHouseholdEntryId) {
            var deferred = $q.defer();
            censusServiceApi().query(censusHouseholdEntryId).$promise.then(
                function (data) {

                    deferred.resolve(data);
                },
                function (error) {
                    deferred.reject(error);
                }
            );
            return deferred.promise;
        };

        this.getCensusHouseholdEntries = function () {
            var deferred = $q.defer();
            censusServiceApi().query().$promise.then(
                function (data) {
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

onsServices.service('locationService', ['$resource', 'baseRestUrl', '$q',
    function($resource, baseRestUrl, $q) {

        var locationServiceApi = function() {
            return $resource(baseRestUrl + 'ons-command/rest/locations/:locationId', {}, {
                query: {method: 'GET', params: {locationId: ''}, isArray: false},
                addLocation: {method: 'POST'}});
        };

        this.addLocation = function(location) {
            var deferred = $q.defer();
            locationServiceApi().addLocation(location).$promise.then(
                function (data) {
                    deferred.resolve(data);
                },
                function (error) {
                    deferred.reject(error);
                }
            );
            return deferred.promise;
        };

        this.getLocation = function (locationId) {
            var deferred = $q.defer();
            locationServiceApi().query(locationId).$promise.then(
                function (data) {
                    deferred.resolve(data);
                },
                function (error) {
                    deferred.reject(error);
                }
            );
            return deferred.promise;
        };

        this.locations = function () {
            var deferred = $q.defer();
            locationServiceApi().query().$promise.then(
                function (data) {
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