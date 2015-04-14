/**
 * CustomerLocalStorage Service
 * Saves, Updates, Deletes, Finds customers using window.localStorage
 */
angular.module('MyApp').service('CustomerLocalStorage', function($rootScope) {
	console.log("Loaded CustomerLocalStorage.service");
	$rootScope.$on('CustomerAddedEvent', function(data) {
		console.log("Customer Added Event in CustomerLocalStorage... " + data);
		this.addCustomer(data);
	});
	
	this.addCustomer = function(customer) {
		console.log("CustomerLocalStorage.addCustomer: " + customer);
	}
});


