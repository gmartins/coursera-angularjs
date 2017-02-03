(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['detail'];
function ItemsController(detail) {
  var itemsCtrl = this;
  itemsCtrl.categoryName = detail.category.name;
  itemsCtrl.items = detail.menu_items;
}

})();
