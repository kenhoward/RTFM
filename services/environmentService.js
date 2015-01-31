var app = angular.module('rtfmApp');

app.service('environmentService', function($window) {
	this.getEnv = function() { // look in login-controller
		return $window.env; // getEnv, returns window.env which returns what's in env.js // look in env.js
	}
	this.saveUsername = function(username) { // Step 4 // got to login-controller.js
		$window.localStorage.setItem('username', username)
		// console.log($window.localStorage.getItem('username', username)) **TESTING IT** 
	}
	this.getUsername = function () {
		return $window.localStorage.getItem('username') // go to login-controller.js // don't need the ',' because you are just telling it to get username // got to app.js to see this in action
	}
})