(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.inject = ['ShoppingListCheckOffService'];
	function ToBuyController (ShoppingListCheckOffService) {
		var buyer = this;

		buyer.toBuyList = ShoppingListCheckOffService.toBuy();

		buyer.moveToBoughtList = function (itemIndex) {
			ShoppingListCheckOffService.moveToBoughtList(itemIndex);
		};
	}

	AlreadyBoughtController.inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController (ShoppingListCheckOffService) {
		var displayList = this;

		displayList.boughtList = ShoppingListCheckOffService.bought;		
	}

	function ShoppingListCheckOffService () {
		var service = this;

		service.toBuyList = [];
		service.bought = [];

		service.initialList = [
            {
                name: 'Puppies',
                quantity: '2 litter',
                image: '/images/puppies.JPG'
            },
            {
                name: 'Sodas',
                quantity: '5 bottles',
                image: '/images/sodas.JPG'
            },
            {
                name: 'Socks',
                quantity: '2 pairs',
                image: '/images/socks.JPG'
            },
            {
                name: 'Chips',
                quantity: '18 bags',
                image: '/images/chips.JPG'
            },
            {
                name: 'Shoes',
                quantity: '2 pairs',
                image: '/images/shoes.JPG'
            }    
		];

		service.toBuy = function () {
			service.toBuyList = service.initialList;
			return service.toBuyList;
		};

		service.moveToBoughtList = function (itemIndex) {
            var boughtItem = service.toBuyList.splice(itemIndex, 1)[0];
            service.bought.push(boughtItem);
           return service.bought;	
		};
	}

})();