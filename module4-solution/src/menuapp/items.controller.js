(function () {
'use strict';
angular.module('Data')
.controller('ItemsController',ItemsController);

ItemsController.$inject = ['menuitems'];

function ItemsController(menuitems) {
	var itemsCtrl = this;
	itemsCtrl.menuitems = menuitems;
	console.log("Inside ItemsController");
	console.log(itemsCtrl.menuitems);
}

})();
