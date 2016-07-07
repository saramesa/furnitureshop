var app = angular.module('store', ["ngRoute"]);

var getJSON = function ($scope, $http){
	$http.get("js/furnitureJSON.json").success(function(data) {
		$scope.items = data;	
	})
}

app.controller('HomeViewController', ['$scope', '$http', function($scope, $http) {
	$scope.appTittle = "HEARTCRAFT FURNITURE"
}]);

app.controller('catalogViewController', ['$scope', '$http', function($scope, $http) {
	getJSON($scope, $http);
}]);

app.controller('categoryViewController', ['$scope', '$http', '$routeParams',  function($scope, $http, $routeParams) {
	$scope.category = $routeParams.category;
	getJSON($scope, $http);
}]);

app.controller('idViewController', ['$scope', '$http', '$routeParams',  function($scope, $http, $routeParams) {
	$scope.id = $routeParams.id;
	getJSON($scope, $http);
}]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider 
	.when('/', {
		templateUrl:'views/home.html', 
		controller: 'HomeViewController'
	})
	.when('/catalog', {
		templateUrl: 'views/catalog.html',
		controller: 'catalogViewController'
	})
	.when('/catalog/:category', {
		templateUrl: 'views/catalog.html',
		controller: 'categoryViewController'
	})
	.when('/catalog/:id', {
		templateUrl: 'views/id-item.html',
		controller: 'idViewController'
	})						
	.when('/aboutus', {
		templateUrl: 'views/aboutUs.html',
		controller: 'catalogViewController'
	})
	.when('/contact', {
		templateUrl: 'views/form.html',
		controller: 'catalogViewController'
	})
	.otherwise({
		redirectTo:'/'
	})
}])

