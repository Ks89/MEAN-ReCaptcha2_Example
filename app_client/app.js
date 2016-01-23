(function () {
	angular.module('mySiteApp', ['ngRoute', 'ngSanitize']);

	function config ($routeProvider, $locationProvider) {
		$routeProvider
		.when('/', {
			templateUrl: '/contact/contact.view.html',
			controller: 'contactCtrl',
			controllerAs: 'vm'
		})
		.otherwise({redirectTo: '/'});
		
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: true,
			rewriteLinks: false
		});
	}

	angular
	.module('mySiteApp')
	.config(['$routeProvider', '$locationProvider', config]);

})();