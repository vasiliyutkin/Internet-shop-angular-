(function() {
    'use strict';

    angular.module("cart")
        .directive('cartSummary', cartSummary)
        .directive('checkoutSummary', checkoutSummary)
        .directive('productList', productList)
        .directive('thankYou', thankYou)
        .directive('placeOrder', placeOrder);


    function checkoutSummary() {
        return {
            restrict: "E",
            templateUrl: '/views/checkoutSummary.html',
            controller: 'SportsStoreCtrl'
        }
    };

    function placeOrder() {
        return {
            restrict: "E",
            templateUrl: "/views/placeOrder.html",
            controller: 'SportsStoreCtrl'
        }
    };

    function thankYou() {
        return {
            restrict: "E",
            templateUrl: '/views/thankYou.html',
            controller: 'SportsStoreCtrl'
        }
    };

    function productList() {
        return {
            restrict: "E",
            templateUrl: "/views/productList.html",
            controller: 'SportsStoreCtrl'
        }
    };

    function cartSummary(cart) {
        return {
            restrict: "E",
            templateUrl: 'views/cartSummary.html',
            controller: function($scope) {
                var cartData = cart.getProducts();
                $scope.total = function() {
                    var total = 0;
                    for (var i = 0; i < cartData.length; i++) {
                        total += (cartData[i].price * cartData[i].count);
                    }
                    return total;
                };
                $scope.itemCount = function() {
                    var total = 0;
                    for (var i = 0; i < cartData.length; i++) {
                        total += cartData[i].count;
                    }
                    return total;
                };
            }
        }
    }
})();
