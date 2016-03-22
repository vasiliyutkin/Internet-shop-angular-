(function() {
    'use strict';

    angular.module("sportsStoreAdmin")
        .constant("productUrl", "http://localhost:5000/products/")
        .config(function($httpProvider) {
            $httpProvider.defaults.withCredentials = true;
        })
        .controller("productCtrl", productCtrl);



    function productCtrl($scope, $resource, productUrl) {
        $scope.productsResource = $resource(productUrl + ":id", {
            id: "@id"
        });
        $scope.listProducts = listProducts;

        function listProducts() {
            $scope.products = $scope.productsResource.query();
        }
        $scope.deleteProduct = deleteProduct;

        function deleteProduct(product) {
            product.$delete().then(function() {
                $scope.products.splice($scope.products.indexOf(product), 1);
            });
        }
        $scope.createProduct = createProduct;

        function createProduct(product) {
            new $scope.productsResource(product).$save().then(function(newProduct) {
                $scope.products.push(newProduct);
                $scope.editedProduct = null;
            });
        }
        $scope.updateProduct = updateProduct;

        function updateProduct(product) {
            product.$save();
            $scope.editedProduct = null;
        }
        $scope.startEdit = startEdit;

        function startEdit(product) {
            $scope.editedProduct = product;
        }
        $scope.cancelEdit = cancelEdit;

        function cancelEdit() {
            $scope.editedProduct = null;
        }
        $scope.listProducts();
    }

})()
