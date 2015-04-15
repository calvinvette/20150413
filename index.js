var myApp = angular.module('MyApp', [ 'ngRoute', 'ui.bootstrap', 'ui.utils', 'ngMask' ]);

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

