(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuyController )
.controller('AlreadyBoughtController', AlreadyBoughtController )
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(service) {
  var toBuy=this;
  toBuy.items = [{quantity:10,name:"Cookies"},{quantity:10,name:"Candies"},{quantity:100,name:"Marshmallows"},{quantity:50,name:"Lollipops"},{quantity:50,name:"Jelly Beans"}];
  service.setToBuyItems(toBuy.items);
  toBuy.checkOff = function(index) {
    service.checkOff(index);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(service) {
  var alreadyBought=this;
  alreadyBought.items = service.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service=this;
  var toBuyItems;
  var boughtItems = [];

  service.setToBuyItems = function(items) {
    toBuyItems = items;
  }

  service.getBoughtItems = function() {
    return boughtItems;
  }
  service.checkOff = function(index) {
    var items =  toBuyItems.splice(index, 1);
    boughtItems.push(items[0]);
  }

}


})();
