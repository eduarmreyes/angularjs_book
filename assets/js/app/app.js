var app = angular.module("app", []).config(function ($routeProvider) {
	$routeProvider.when("/login", {
		templateUrl	: "login.html",
		controller	: "LoginController"
	});
	$routeProvider.when("/home", {
		templateUrl	: "home.html",
		controller	: "HomeController"
	});
	$routeProvider.otherwise({redirectTo : "/login"});
});

app.factory('AuthenticationService', ["$location", function ($a) {
	return {
		login	: function(credentials) {
			if (credentials.username === "diego") {
				$a.path("/home");
			}
		},
		logout	: function() {
			$a.path("/login");
		}
	};
}]);

app.controller('LoginController', ["$scope", "AuthenticationService", function (a, b) {
	a.credentials = {username : "", password : ""};

	a.login = function() {
		b.login(a.credentials);
	};
}]);

app.controller('HomeController', function ($scope, AuthenticationService) {
	$scope.title = "Home";
	$scope.message = "Mouse Over these images to see a directive angular stuff";
	$scope.logout = function() {
		AuthenticationService.logout();
	};
});
app.directive('showsMessageWhenHovered', function () {
	return {
		restrict: 'A', // A = Attribute, C = Class Name, E = Element <element>, M = HTML Comment
		link: function (scope, iElement, iAttrs) {
			var originalMessage = scope.message;
			iElement.bind("mouseover", function() {
				scope.message = iAttrs.message;
				scope.$apply();
			});
			iElement.bind("mouseout", function() {
				scope.message = originalMessage;
				scope.$apply();
			});
		}
	};
});
