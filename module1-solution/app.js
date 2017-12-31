(function () {
  'use strict'

  angular.module('lunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.value = "";
    $scope.info_message = "";
    $scope.checkItems = function(string) {
      var newArray = string.split(",");
      var count = 0;
      for(var i = 0; i<newArray.length; i++) {
        var arrayItem = newArray[i];
        var newString = validateItem(arrayItem);
        if(newString != "") count++;
      };
      if(count > 0 && count <= 3){
        $scope.colorStyle = {
              "color" : "#029F12",
              "background-color": "#D1FFD6",
              "border" : "2px solid green"
        }
         $scope.info_message = "Enjoy your lunch!"
      }
      else if(count > 3) {
        $scope.colorStyle = {
              "color" : "#029F12",
              "background-color": "#D1FFD6",
              "border" : "2px solid green"
          }
        $scope.info_message = "Too many items!"
      }
      else {
        $scope.colorStyle = {
              "color" : "red",
              "background-color": "white",
              "border" : "2px solid red"
          }
        $scope.info_message = "Please enter data first";
      }
    }

    function validateItem(string) {
      for(var i = 0; i<string.length; i++)  {
          string = string.replace(" ", "");
      }
      return string;
    }
  }


})
();