'use strict';

angular.module('myApp.view2', ['ngRoute','ngAnimate',
    'ngMaterial'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', function($scope) {
    $scope.ws.send(JSON.stringify({type: 'posts'}));

    $scope.chipNames = ['Whatever'];
    $scope.showOver = false;

    $scope.$watch('posts', function() {
            const posts = $scope.posts && $scope.posts.media;
            if (posts && posts.length > 0) {
                $scope.postsShown = posts;

            }
        }
    );
    $scope.showConsole = function(msg){
        console.log(msg);
    };
    $scope.postsApproved = [];
    $scope.postsRejected = [];
    $scope.postApproved = function(x, $index){
        $scope.postsApproved.push(x);
        $scope.postsShown.splice($index, 1);
    };
    $scope.postRejected = function(x, $index){
        $scope.postsRejected.push(x);
        $scope.postsShown.splice($index, 1);
    };
    $scope.postReject = function(x, $index){
        $scope.postsRejected.push(x);
        $scope.postsApproved.splice($index, 1);
    };
    $scope.postApprove = function(x, $index){
        $scope.postsApproved.push(x);
        $scope.postsRejected.splice($index, 1);
    };


}]);