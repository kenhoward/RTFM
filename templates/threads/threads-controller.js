var app = angular.module('rtfmApp')

app.controller('threadsCtrl', function($scope, threadService, threadsThing, $rootScope) {
	// $scope.test = 'Easily the best view!'

// 	var threads = threadService.getThreads();

// 	console.log(threadService.getThreads().$asArray());

// 	$scope.threads.$loaded().then(function (threads) {
//       console.log(threads);

// })

    $scope.createThread = function (title) {
      $scope.threads.$add({
        title: title,
        username: $rootScope.user
      });

    }

    $scope.threads = threadsThing.$asArray()

    console.log($scope.threads);

  });