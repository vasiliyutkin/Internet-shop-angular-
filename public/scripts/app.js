(function() {
    'use strict';

    angular.module("sportsStore", ['customFilters', 'cart', 'ngRoute'])
        .config(function($routeProvider) {
            $routeProvider
                .when("/checkout", {
                    template: '<checkout-summary></checkout-summary>'
                })
                .when("/products", {
                    template: '<product-list></product-list>'
                })
                .when("/complete", {
                    template: "<thank-you></thank-you>"
                })
                .when("/placeorder", {
                    template: '<place-order></place-order>'
                })
                .otherwise({
                    template: "<product-list></product-list>"
                });
        });

})();
