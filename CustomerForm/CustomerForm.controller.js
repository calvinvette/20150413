/**
 * CustomerForm.controller.js
 */
angular.module('MyApp').controller('CustomerFormController', function($scope, AddCustomerService) {
	$scope.customer = new Customer();

	$scope.save = function() {
		AddCustomerService.addCustomer($scope.customer);
		$scope.customer = new Customer(); 
		console.log("Saved..." + $scope.customer);
	};
	
});
