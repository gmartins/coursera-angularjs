(function () {
'use strict';

angular.module('MenuApp')
.component('categories',{
  templateUrl:'src/categories/templates/categoriesList.template.html',
  bindings : {
    categories: '<'
  }
})

})();
