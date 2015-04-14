/**
 * CustomerForm.controller.js
 */
angular.module('MyApp').controller('CustomerFormController', function($scope) {
	$scope.customer = new Customer();

	$scope.save = function() {
		console.log("Saved..." + $scope.customer);
	};
	
});
