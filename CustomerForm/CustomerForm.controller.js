/**
 * CustomerForm.controller.js
 */
angular.module('MyApp').controller('CustomerFormController', function($scope, AddCustomerService) {
	$scope.customer = new Customer();

	$scope.save = function() {
//		$scope.$emit("CustomerAdded", $scope.customer);
		AddCustomerService.addCustomer($scope.customer);
		console.log("Saved..." + $scope.customer);
		$scope.customer = new Customer(); 
	};
	
});
