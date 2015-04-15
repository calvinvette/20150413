/**
 * CustomerForm.controller.js
 */
angular.module('MyApp').controller('CustomerFormController', function($scope, AddCustomerService) {
	$scope.customer = new Customer();

	$scope.save = function() {
		AddCustomerService.addCustomer($scope.customer);
		console.log("Saved..." + $scope.customer);
		$scope.customer = new Customer(); 
	};

	$scope.calOpened = false;
	
	$scope.calOpen = function($event) {
		$event.preventDefault();
	    $event.stopPropagation();
	    $scope.calOpened = true;
	};
	
});
