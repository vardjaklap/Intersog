'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
    'ngAnimate',
  'ngMaterial',
  'ngMessages',
  'myApp.dashboard',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/dashboard'});
}])

    .controller('MainCtrl', ['$scope','$location', function($scope, $location) {


        $scope.ws = new WebSocket("ws://localhost:40510");


        $scope.ws.onmessage = e => {
            $scope.$apply(function(){
                const response = JSON.parse(e.data);
                $scope[response.type] = response.data;



            })
        };
    }]);
