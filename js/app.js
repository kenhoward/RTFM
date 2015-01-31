var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: 'templates/login/login-view.html',
			controller: 'loginCtrl'
		})
		.when('/threads', {
			templateUrl: 'templates/threads/threads-view.html',
			controller: 'threadsCtrl',
			resolve: {
				threadsThing: function(threadService) {
					console.log(threadService.getThreads());
				return threadService.getThreads();	
				}
			}
		})
		.when('/thread/:threadId', {
			templateUrl: 'templates/single-thread/single-thread-view.html',
			controller: 'singleThreadCtrl',
			resolve: {
				threadRef: function(threadService, $route) {
					console.log(threadService)
					return threadService.getThread($route.current.params.threadId)
				},
				commentsRef: function(threadService, $route) {
					return threadService.getComments($route.current.params.threadId);
				}
			}
		})
		.otherwise({
			redirectTo: '/login'
		})


}).run(function($rootScope, $location, environmentService) {
	$rootScope.$on('$routeChangeStart', function(event, next, current) { // like jQuery // this $on is super powerful
		if (environmentService.getUsername()) { // returns the name if they are logged in, if not 'null'
			$rootScope.user = environmentService.getUsername();
		} else {
			$location.path('/login');
		}
	})

});
