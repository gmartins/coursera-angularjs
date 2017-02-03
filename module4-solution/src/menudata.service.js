(function () {
'use strict';

angular.module('data')
.service('MenuDataService',MenuDataService)
.constant('MenuBaseUrl',' https://davids-restaurant.herokuapp.com');

MenuDataService.$inject = ['$http','MenuBaseUrl'];
function MenuDataService($http,MenuBaseUrl) {
    var service = this;

    service.getAllCategories = function() {
      var promise = $http({
        method:'GET',
        url:(MenuBaseUrl+"/categories.json")
      }).then( function(response) {
        return response.data;
      })
      return promise;
    }

    service.getItemsForCategory = function(categoryShortName) {
      var promise = $http({
        method:'GET',
        url:(MenuBaseUrl+"//menu_items.json"),
        params : { category : categoryShortName}
      }).then( function(response) {
        return response.data;
      })
      return promise;
    }
}

})();
