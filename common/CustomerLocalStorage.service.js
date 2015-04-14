/**
 * CustomerLocalStorage Service
 * Saves, Updates, Deletes, Finds customers using window.localStorage
 */
console.log("Loaded CustomerLocalStorage file...");
angular.module('MyApp').service('CustomerLocalStorage', function($rootScope) {
	console.log("Loaded CustomerLocalStorage.service");
	$rootScope.$on('CustomerAddedEvent', function(event, data) {
		console.log("Customer Added Event in CustomerLocalStorage... ");
		console.log(data);
		addCustomer(data);
	});
	
	var addCustomer = function(customer) {
		console.log("CustomerLocalStorage.addCustomer: " + customer);
	}
});


