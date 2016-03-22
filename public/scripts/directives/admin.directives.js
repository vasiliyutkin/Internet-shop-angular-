(function() {
    'use strict';

    angular.module("sportsStoreAdmin")
        .directive('adminLogin', adminLogin)
        .directive('adminMain', adminMain)
        .directive('adminOrders', adminOrders)
        .directive('adminProducts', adminProducts);

    function adminLogin() {
        return {
            restrict: "E",
            templateUrl: 'views/adminLogin.html',
            controller: 'authCtrl'
        }
    };

    function adminMain() {
        return {
            restrict: "E",
            templateUrl: 'views/adminMain.html',
            controller: 'mainCtrl'
        }
    };

    function adminOrders() {
        return {
            restrict: "E",
            templateUrl: 'views/adminOrders.html',
            controller: 'ordersCtrl'
        }
    };

    function adminProducts() {
        return {
            restrict: "E",
            templateUrl: 'views/adminProducts.html',
            controller: 'ordersCtrl'
        }
    };
})();
