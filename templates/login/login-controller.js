var app = angular.module('rtfmApp');

app.controller('loginCtrl', function($scope, $location, environmentService) { //$location is from step 4
	// $scope.test = 'testing, 1, 2, 3'
	// $scope.test = environmentService.getEnv(); // look in environmentService.js // this is a function
	$scope.login = function(username) { // *1* or.. empty
		environmentService.saveUsername(username); // *1* or.. alert($scope.username) // got to environmentService.js
		console.log(environmentService.getUsername()) // go to environmentService.js
		$location.path('/threads')

	}
	
})