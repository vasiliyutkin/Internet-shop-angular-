(function() {
    'use strict';

    angular.module("sportsStore")
        .controller("cartSummaryController", cartSummaryController);


    function cartSummaryController($scope, cart) {
        $scope.cartData = cart.getProducts();
        $scope.total = total;

        function total() {
            var total = 0;
            for (var i = 0; i < $scope.cartData.length; i++) {
                total += ($scope.cartData[i].price * $scope.cartData[i].count);
            }
            return total;
        }
        $scope.remove = remove;

        function remove(id) {
            cart.removeProduct(id);
        }
    }
})()
