var angularAppModule = angular.module("AngularApp", []);

angularAppModule.config(["$httpProvider",function($httpProvider) {
	delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

angularAppModule.controller("StudentsListController", ["$scope", function StudentsListController($scope){
	var students = [
		{ name: "Mary Contrary", id: 1 },
		{ name: "Jack Sprat", id: 2 },
		{ name: "Jill Hill", id: 3 },
	];

	$scope.students = students;

	$scope.insertTom = function insertTom() {
		$scope.students.splice(1,0,{ name: "Tom Highans", id: 4 });
	};
}]);

angularAppModule.controller("AlbumController", ["$scope", function($scope){
	var album = [
		{name: "Southwest Serenade", duration: "2:34"},
		{name: "Northern Light Waltz", duration: "3:21"},
		{name: "Eastern Tango", duration: "17:35"},
	];

	$scope.album = album;
}]);

angularAppModule.controller("PostController", ["$scope", "$http", function PostController($scope, $http) {
	$scope.posts = [
		{
			title: "Sample Blog Post",
			post_meta: "Jan 1, 1994 by <a href=\"https://twitter.com/eduarmreyes\">eduarmreyes</a>",
			post_content: "" +
				"<p>This blog post shows a few different types of content that\'s supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>" +
				"<hr>" +
				"<p>Cum sociis natoque penatibus et magnis <a href=\"#\">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>" +
				"<blockquote>" +
					"<p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>" +
				"</blockquote>" +
				"<p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>" +
				"<h2>Heading</h2>" +
				"<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>" +
				"<h3>Sub-heading</h3>" +
				"<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>" +
				"<pre><code>Example code block</code></pre>" +
				"<p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>" +
				"<h3>Sub-heading</h3>" +
				"<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>" +
				"<ul>" +
				  "<li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>" +
				  "<li>Donec id elit non mi porta gravida at eget metus.</li>" +
				  "<li>Nulla vitae elit libero, a pharetra augue.</li>" +
				"</ul>" +
				"<p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>" +
				"<ol>" +
				  "<li>Vestibulum id ligula porta felis euismod semper.</li>" +
				  "<li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>" +
				  "<li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>" +
				"</ol>" +
				"<p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>"
		},
		{
			title: "Second Blog Post",
			post_meta: "Jan 1, 1994 by <a href=\"https://twitter.com/eduarmreyes\">eduarmreyes</a>",
			post_content: "" +
				"<p>This blog post shows a few different types of content that\'s supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>" +
				"<hr>" +
				"<p>Cum sociis natoque penatibus et magnis <a href=\"#\">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>" +
				"<blockquote>" +
					"<p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>" +
				"</blockquote>" +
				"<p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>" +
				"<h2>Heading</h2>" +
				"<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>" +
				"<h3>Sub-heading</h3>" +
				"<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>" +
				"<pre><code>Example code block</code></pre>" +
				"<p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>" +
				"<h3>Sub-heading</h3>" +
				"<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>" +
				"<ul>" +
				  "<li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>" +
				  "<li>Donec id elit non mi porta gravida at eget metus.</li>" +
				  "<li>Nulla vitae elit libero, a pharetra augue.</li>" +
				"</ul>" +
				"<p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>" +
				"<ol>" +
				  "<li>Vestibulum id ligula porta felis euismod semper.</li>" +
				  "<li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>" +
				  "<li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>" +
				"</ol>" +
				"<p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>"
		},
	];	
}]);

angularAppModule.controller("CartController", ["$scope", function CartController($scope){
	$scope.bill = {};

	$scope.items = [
		{title: "Paint Pots", quantity: 8, price: 3.95},
		{title: "Polka Dots", quantity: 17, price: 12.95},
		{title: "Pebbles", quantity: 5, price: 6.95}
	];

	$scope.$watch(function() {
		var total = 0;
		for (var i = 0, len = $scope.items.length; i < len; i++) {
			total = total + $scope.items[i].price * $scope.items[i].quantity;
		}

		$scope.bill.total = total;
		$scope.bill.discount = total > 100 ? 10: 0;
		$scope.bill.subTotal = total - $scope.bill.discount;
	});
}]);

angularAppModule.controller("HelloController", ["$scope", function($scope){
	$scope.greeting = { text: "Write your greetin..." };
}]);

angularAppModule.controller("StartUpController", ["$scope", function($scope){
	$scope.computeNeeded = function computeNeeded() {
		$scope.needed = $scope.startingEstimate * 10;
	 };

	 $scope.requestFunding = function requestFunding () {
	 	console.log("Sorry, please get more customers first.");
	 };

	 $scope.reset = function reset () {
	 	$scope.startingEstimate = 0;
	 };
}]);

angularAppModule.controller("WeatherController", ["$scope", "$http", function($scope, $http){
	var url = "http://api.openweathermap.org/data/2.5/weather?q=San%20Salvador,sv";
	$http({
		method: "POST",
		url: url
	}).success(function(data, status) {
		$scope.response = data;
		$scope.error = "false";
		$scope.labelType = "info";
	}).error(function(data, status) {
		$scope.error = "true";
		$scope.labelType = "warning";
		$scope.response = data;
	});
}]);
