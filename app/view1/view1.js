'use strict';

angular.module('myApp.dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
    $scope.ws.send(JSON.stringify({type: 'cards'}));

    $scope.$watch('cards', function(){
      const cards = $scope.cards;
      if(cards && cards.length > 0){
          $scope.cardsShown = cards.slice(0,7);

          $scope.cardsHidden = cards.slice(7, 15);
      }


    });
    $scope.hideCard = function(x, index){

        $scope.cardsHidden.push(x);
        $scope.cardsShown.splice(index, 1);
        $scope.butHidden = false;
    };
    $scope.addCards = function(){
        $scope.cardsShown = $scope.cardsShown.concat($scope.cardsHidden);
        $scope.cardsHidden = [];

        $scope.butHidden = true;
    };


}]);