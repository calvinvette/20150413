var myApp = angular.module('MyApp', [ /*'ngRoute',*/ 'ui.bootstrap', /*'ui.utils', 'ngMask',*/ 'ui.router' ]);

myApp.config(/*['$routeProvider','$stateProvider', */
	function(/*$routeProvider, */$stateProvider) {
		$stateProvider
			.state('viewState', {
				url : "/SaveCustomer",
				views : {
					"main" : {
						templateUrl : "CustomerForm/CustomerView.html",
						controller : "CustomerFormController"
					},
					"legal" : {
						templateUrl : "Legal/LegalView.html",
						controller : "LegalController"
					}, 
					"accountOverview" : {
						templateUrl : "AccountOverview/AccountView.html",
						controller : "AccountOverviewController"
					}
				}

			})
			.state('editState', {
				url : "/SaveCustomer",
				views : {
					"main" : {
						templateUrl : "CustomerForm/CustomerForm.html",
						controller : "CustomerFormController"					},
					"legal" : {
						templateUrl : "Legal/LegalView.html",
						controller : "LegalController"
					}, 
					"accountOverview" : {
						templateUrl : "AccountOverview/AccountForm.html",
						controller : "AccountOverviewController"
					}
				}

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

