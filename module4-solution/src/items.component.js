(function () {
'use strict';

angular.module('MenuApp')
.component('items',{
  templateUrl:'src/categories/templates/itemsList.template.html',
  bindings : {
    items: '<'
  }

})

})();
