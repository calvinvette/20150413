angular.module('MyApp').controller('AddressFormController', function($scope) {
	$scope.address = new Address();
	
	// TODO - add a onchange listener to the ZIP/Postal Code to 
	// Either validate and/or pre-populate city/state/country WRT postal code
});
