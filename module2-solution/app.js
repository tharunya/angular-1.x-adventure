(function() {

    var ShoppingListCheckOff = angular.module('ShoppingListCheckOff', [])
                                        .controller('ToBuyController', ToBuyController)
	                                    .controller('AlreadyBoughtController', AlreadyBoughtController);

    ShoppingListCheckOff.service('ShoppingListCheckOffService', function() {
        let initialItemsToBuy = [
            { 
                name: "dogs", 
                quantity: 2 
            },
            { 
                name: "cookies", 
                quantity: 10 
            },
            { 
                name: "shoes", 
                quantity: 5 
            },
            { 
                name: "bands", 
                quantity: 20
            },
            { 
                name: "watches", 
                quantity: 8 
            }
        ];

        let bought = [];

        this.buyItem = function(index) {
            let boughtItem = initialItemsToBuy.splice(index, 1);
            bought.push(boughtItem[0]);
        }

        this.toBuyList = function() {
            return initialItemsToBuy;
        }

        this.boughtList = function() {
            return bought;
        }
    });


    ToBuyController.inject = ['ShoppingListCheckOffService'];
	function ToBuyController (ShoppingListCheckOffService) {
		var buyer = this;

		buyer.buyList = ShoppingListCheckOffService.toBuyList();

		buyer.buyThisItem = function (itemIndex) {
			ShoppingListCheckOffService.buyItem(itemIndex);
		};
	}
    
    AlreadyBoughtController.inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController (ShoppingListCheckOffService) {
		var displayList = this;

		displayList.boughtList = ShoppingListCheckOffService.boughtList();
    }	
		
})();