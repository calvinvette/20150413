/**
 * AddCustomer Service
 * Registers to listen for CustomerAdd events
 * Saves them to LocalStorage (initially)
 * TODO - version 2 - switch to REST
 * 	version 3 - dynamically detect/synch between local & REST
 */

angular.module('MyApp').service('AddCustomerService', function() {
	var customers = [];
	
	this.addCustomer = function(customer) {
		customers.push(customer);
		console.log(customers);
	};
});