(function() {
    'use strict';

    angular.module('sportsStoreAdmin', [
            'ngRoute',
            'ngResource'
        ])
        .config(function($routeProvider) {
            $routeProvider
                .when('/login', {
                    template: '<admin-login></admin-login>'
                })
                .when('/main', {
                    template: '<admin-main></admin-main>'
                })
                .otherwise({
                    redirectTo: '/login'
                })
        })

})();
