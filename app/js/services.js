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

      this.getPersons = function () {
          var deferred = $q.defer();
          personServiceApi().query().$promise.then(
              function (data) {
                  deferred.resolve(data);
              },
              function (error) {
                  deferred.reject(error);
              }
          );
          return deferred.promise;
      };
//
//          var shippingAddresses = [];
//          var customer = selectedCustomerService.getCustomer();
//          if (angular.isDefined(customer.shippingAddress)) {
//              shippingAddresses.push({name: customer.name,
//                      address: customer.shippingAddress,
//                      addressLines: customer.shippingAddressLines}
//              );
//          }
//
//          // can we omit the filter?
//          var paymentAccounts = productService.getPaymentAccounts(function (account) {
//              return account.type >= 20 && account.type <= 30;
//          });
//          // create a new list with only an agreementId
//          var accounts = _.map(paymentAccounts, function (account) {
//              return {agreementId: account.agreementId};
//          });
//
//          var hasErrors = false;
//
//          var promises = _.map(accounts, function (account) {
//              var result = accountSummaryService.getAccountSummary(account.agreementId);
//              result.then(function (data) {
//                      account.name = data.agreementHolderName;
//                      account.addressLines = data.addressLines;
//                      account.address = data.address;
//                  },
//                  function (error) {
//                      hasErrors = true;
//                      account.error = error;
//                      account.hasError = true;
//                  });
//              return result;
//          });
//
//          allSettled(promises).then(function() {
//              var filteredAccounts = filterAccounts(shippingAddresses.concat(accounts));
//              if (hasErrors) {
//                  deferred.reject(filteredAccounts);
//              } else {
//                  deferred.resolve(filteredAccounts);
//              }
//          });

//          return deferred.promise;
 //     };


//      $scope.addPerson = function(person) {
//          personService.addPerson(person).$promise.then($route.reload);
//          $scope.personDetails = {};
//      };



//      this.requestFolder = function (folderRequest, shippingAddress) {
//          var deferred = $q.defer();
//          var selectedCustomer = selectedCustomerService.getCustomer();
//          var postObject = {
//              customerId: selectedCustomer.id,
//              customerType: selectedCustomer.type,
//              agentId: currentAgentService.agent.id,
//              contactDialogueId: customerContactService.getContactDialogueId(),
//              folderName: folderRequest.folderName,
//              folderCode: folderRequest.folderCode,
//              numberOfFolders: folderRequest.numberOfFolders,
//              name: selectedCustomer.name,
//              address: shippingAddress.address
//          };
//
//          if (selectedCustomerService.isPrivateCustomer()) {
//              postObject.gender = selectedCustomer.gender;
//              postObject.initials = selectedCustomer.details.initials;
//              postObject.prefix = selectedCustomer.details.prefix;
//          } else if (selectedCustomerService.isBusinessCustomer()) {
//              if (angular.isDefined(selectedCustomer.selectedContactPerson.id)) {
//                  postObject.contactPerson = selectedCustomer.selectedContactPerson.name;
//              }
//          }
//
//          requestFolderAPI(selectedCustomer.id).post(postObject).$promise.then(
//              function (data) {
//                  deferred.resolve(data);
//              },
//              function (error) {
//                  deferred.reject(error);
//              });
//          return deferred.promise;
//      };


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