(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  console.log("MenuDataService");
  var service = this;

  service.getAllCategories = function () {
    console.log("Inside getAllCategories function");
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function(result){
      console.log(result.data);
      return result.data;
    });

    return response;
  };


  service.getItemsForCategory = function (categoryShortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    }).then(function(result){
      console.log("Menu Items recovered");
      console.log(result.data.menu_items);
      return result.data.menu_items;
    });

    return response;
  };
}

})();
