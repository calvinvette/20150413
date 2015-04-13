var myApp = angular.module('MyApp', [ 'ngRoute' ]);

myApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/SaveCustomer', {
				templateUrl : 'CustomerForm/CustomerForm.html',
				controller : 'CustomerFormController'
			})
			.when('/OrderManagement', {
				templateUrl : 'OrderManagement/OrderManagement.html',
				controller : 'OrderManagementController'
			});
	}
]);

