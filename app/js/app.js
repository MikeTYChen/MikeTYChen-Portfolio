'use strict';

// Declare app level module which depends on views, and components
angular.module('portfolioApp', [
  'ngRoute',
  'projectCtrl',
  'skillsCtrl'
])

.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
	$routeProvider.when('/', {
		templateUrl: 'main.html'
	});
  $routeProvider.otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true);
}]);
