/**
 * CustomerForm.controller.js
 */
angular.module('MyApp').controller('CustomerFormController', function($scope) {
	$scope.customerId = "";
	$scope.firstName = "";
	$scope.lastName = "";
	$scope.phoneNumber = "";
	$scope.email = "";
	
	$scope.save = function() {
		var customer = new Customer(
				$scope.customerId,
				$scope.firstName,
				$scope.lastName,
				$scope.phoneNumber,
				$scope.email
				);
		console.log("Saved..." + customer);
	};
	
});
