(function() {
    'use strict';

    angular.module("sportsStore")
        .constant("productListActiveClass", "btn-info")
        .constant("productListPageCount", 3)
        .controller("productListCtrl", productListCtrl);


    function productListCtrl($scope, $filter, productListActiveClass, productListPageCount, cart) {
        var selectedCategory = null;
        $scope.selectedPage = 1;
        $scope.pageSize = productListPageCount;
        $scope.selectCategory = selectCategory;

        function selectCategory(newCategory) {
            selectedCategory = newCategory;
            $scope.selectedPage = 1;
        }
        $scope.selectPage = selectPage;

        function selectPage(newPage) {
            $scope.selectedPage = newPage;
        }
        $scope.categoryFilterFn = categoryFilterFn;

        function categoryFilterFn(product) {
            return selectedCategory == null ||
                product.category == selectedCategory;
        }
        $scope.getCategoryClass = getCategoryClass;

        function getCategoryClass(category) {
            return selectedCategory == category ? productListActiveClass : "";
        }
        $scope.getPageClass = getPageClass;

        function getPageClass(page) {
            return $scope.selectedPage == page ? productListActiveClass : "";
        }
        $scope.addProductToCart = addProductToCart;

        function addProductToCart(product) {
            cart.addProduct(product.id, product.name, product.price);
        }
    }
})()
