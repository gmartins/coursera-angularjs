(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController );

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch="";
  $scope.message="";
  $scope.style={};

  $scope.checkQuantity = function() {
    $scope.count = countItems($scope.lunch);
    $scope.message = chooseMessage($scope.count);
    $scope.color = chooseColor($scope.message);
  }

  function chooseMessage(count) {
    if (count==0) return "Please enter data first";
    if (count<=3) return "Enjoy!"
    return "Too much!";

  }
  function countItems(items) {
    var items = items.split(",");
    var count = items.length;
    for (var i=0;i<items.length;i++) {
      if (items[i].trim()=="") {
        count--;
      }
    }
    return count;
  }

  function chooseColor(message) {
    if (message=="Please enter data first") return "red";
    return "green";
  }

}

})();
