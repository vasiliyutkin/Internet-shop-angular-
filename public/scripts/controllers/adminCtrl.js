(function() {
    'use strict';

    angular.module('sportsStoreAdmin')
        .constant('authUrl', 'http://localhost:5000/users')
        .constant("ordersUrl", "http://localhost:5000/orders")
        .controller('authCtrl', authCtrl)
        .controller('mainCtrl', mainCtrl)
        .controller("ordersCtrl", ordersCtrl);

    //Controller's function     
    function authCtrl($scope, $http, $location, authUrl) {
        $scope.authenticate = authenticate;

        function authenticate(user, pass) {
            $http.post(authUrl, {
                    username: user,
                    password: pass
                }, {
                    withCredentials: true
                })
                .success(function(data) {
                    $location.path('/main')
                })
                .error(function(error) {
                    $scope.authenticationError = error;
                });
        }
    };

    //Controller's function     
    function mainCtrl($scope) {
        $scope.screens = ['Products', 'Orders'];
        $scope.current = $scope.screens[0];
        $scope.setScreen = setScreen;
        $scope.getScreen = getScreen;

        function setScreen(index) {
            $scope.current = $scope.screens[index];
        };

        function getScreen() {
            return $scope.current == 'Products' ? 'views/adminProducts.html' : 'views/adminOrders.html'
        };
    };

    //Controller's function     
    function ordersCtrl($scope, $http, ordersUrl) {
        $http.get(ordersUrl, {
                withCredentials: true
            })
            .success(function(data) {
                $scope.orders = data;
            })
            .error(function(error) {
                $scope.error = error;
            });
        $scope.selectedOrder;
        $scope.selectOrder = selectOrder;

        function selectOrder(order) {
            $scope.selectedOrder = order;
        };
        $scope.calcTotal = calcTotal;

        function calcTotal(order) {
            var total = 0;
            for (var i = 0; i < order.products.length; i++) {
                total +=
                    order.products[i].count * order.products[i].price;
            }
            return total;
        }
    }

})()
