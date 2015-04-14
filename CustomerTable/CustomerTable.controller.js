/**
 * CustomerTable Controller
 * Uses the CustomerLocalStorage Service to retrieve local customers
 * and displays them in the HTML table 
 * TODO - version 2 - add inline table row Edit capabilities 
 */

angular.module('MyApp').controller('CustomerTableController', function($scope, CustomerLocalStorage) {
	$scope.customers = CustomerLocalStorage.findAll();
	
});