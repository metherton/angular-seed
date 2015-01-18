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

  beforeEach(module('onsServices'));

    describe('PersonListCtrl', function(){

        var scope, ctrl, personService, $httpBackend, $routeParams, $location, $route;

        beforeEach(module('onsApp'));

        beforeEach(inject(function($rootScope, $controller, _personService_, _$httpBackend_) {

            personService = _personService_;
            $httpBackend = _$httpBackend_;

            spyOn(personService, 'query').andReturn({personDetails : [{person: {surname:'Etherton',firstName:'Mark', birthDate: 2}}, {person : {surname:'Etherton',firstName:'Samuel', birthDate: 1}}]});

//            $routeParams = _$routeParams_;
//            $location = _$location_;
//            $route = _$route_;

            scope = $rootScope.$new();
            ctrl = $controller('PersonListCtrl', {$scope: scope, personService: personService});
        }));


        it('should create "persons" model with 2 persons fetched from xhr', function() {
            expect(scope.bla).toEqualData('martin');
        });

    });

});
