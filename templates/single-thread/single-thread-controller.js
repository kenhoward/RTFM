var app = angular.module('rtfmApp');

app.controller('singleThreadCtrl', function($scope, threadService, threadRef, commentsRef, $rootScope) {
	// $scope.test = 'single-thread is working'
	var thread = threadRef.$asObject();

	thread.$bindTo($scope, 'thread');

	console.log(thread)

	$scope.comments = commentsRef.$asArray();

	$scope.createComment = function(text) {
		$scope.comments.$add({
			username: $rootScope.user,
			text: text
		});
	}
})