(function () {
'use strict';

angular.module('MenuApp', ['Data','ui.router', 'Spinner'])
.config(function () {
  console.log("MenuApp config fired.");
}).
run(function () {
  console.log("MenuApp run fired.");
});

})();
