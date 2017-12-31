(function() {

    var ShoppingListCheckOff = angular.module('ShoppingListCheckOff', []);

    ShoppingListCheckOff.service('ShoppingListCheckOffService', function() {
        let toBuy = [
            { name: "cookies", quantity: 10 },
            { name: "chips", quantity: 3 },
            { name: "water", quantity: 5 },
            { name: "milk", quantity: 2 },
            { name: "pepsi", quantity: 12 }
        ];

        let bought = [];

        this.buyItem = function(index) {
            let boughtItem = toBuy.splice(index, 1);
            // console.log(boughtItem[0]);
            bought.push(boughtItem[0]);
        }

        this.toBuyItems = function() {
            return toBuy;
        }

        this.boughtItems = function() {
            return bought;
        }
    });

    ShoppingListCheckOff.controller('ToBuyController', ['$scope', 'ShoppingListCheckOffService', function($scope, ShoppingListCheckOffService) {
        var buyer = this;
        buyer.buyItems = ShoppingListCheckOffService.toBuyItems();

        buyer.buyThisItem = function(idx) {
            ShoppingListCheckOffService.buyItem(idx);
        };
    }]);

    
    ShoppingListCheckOff.controller('AlreadyBoughtController', ['$scope', 'ShoppingListCheckOffService', function($scope, ShoppingListCheckOffService) {
        var showList = this;
        showList.boughtItems = ShoppingListCheckOffService.boughtItems();
    }]);

})();