var myApp = angular.module('MyApp', [ /*'ngRoute',*/ 'ui.bootstrap', /*'ui.utils', 'ngMask',*/ 'ui.router' ]);

myApp.config(/*['$routeProvider','$stateProvider', */
	function(/*$routeProvider, */$stateProvider) {
		$stateProvider
			.state('viewState', {
				url : "/SaveCustomer",
				templateUrl : "CustomerForm/CustomerView.html"//,
				//controller : "CustomerFormController"
			})
			.state('editState', {
				url : "/SaveCustomer",
				templateUrl : "CustomerForm/CustomerForm.html",
				controller : "CustomerFormController"
			});
		/*
	
		$routeProvider
			.when('/SaveCustomer', {
				templateUrl : 'CustomerForm/CustomerForm.html',
				controller : 'CustomerFormController'
			})
			.when('/OrderManagement', {
				templateUrl : 'OrderManagement/OrderManagement.html',
				controller : 'OrderManagementController'
			});
			*/
	}
//]
);

