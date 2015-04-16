/**
 * CustomerForm.controller.js
 */
angular.module('MyApp').controller('CustomerFormController', function($scope, $http, $q, AddCustomerService) {
	$scope.customer = new Customer();

	$scope.save = function() {
		AddCustomerService.addCustomer($scope.customer);
		console.log("Saved..." + $scope.customer);
		$scope.customer = new Customer(); 
	};

	$scope.getCustomerService = function() {
		var deferred = $q.defer();
		for (var i = 0; i <= 7; i++) {
			setTimeout(function(x) {
				deferred.notify("Retrieving customers...." + x/7 * 100 + "%");
			}, 500 * i, i);
		}
		setTimeout(function() { 
			$http.get("data/customers.json")
			.success(function(data) { 
				// Additional post-processing of customer data goes here
				deferred.resolve(data);
			})
			.error(function() { 
				deferred.reject("Failed to retrieve customers...");
			});
		}, 3500);
		return deferred.promise;
	}
	
	$scope.demo = function() {
		var myPromise = $scope.getCustomerService();
		myPromise.then(
				function(data) {
					console.log(data);
				}, function(error) {
					console.log(error);
				}, function(notification) {
					console.log(notification);
				});
	};
	
	$scope.calOpened = false;
	
	$scope.calOpen = function($event) {
		$event.preventDefault();
	    $event.stopPropagation();
	    $scope.calOpened = true;
	};
	
	$scope.saveHomeAddress = function(addrForm) {
		console.log(addrForm);
	}
});
