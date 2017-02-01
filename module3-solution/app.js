(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItemsDirective)
.constant('menuBaseUrl',"https://davids-restaurant.herokuapp.com");


MenuSearchService.$inject = ['$http','menuBaseUrl'];
function MenuSearchService($http,menuBaseUrl) {
  var service = this;
  service.getMatchedMenuItems = function(searchTerm) {
      return $http( {
          method:'GET',
          url:(menuBaseUrl+"/menu_items.json")
        }).then( function(result) {
      // process result and only keep items that match
      var items = result.data.menu_items;
      var foundItems = [];

      if (searchTerm===undefined||searchTerm=='') {
        return [];
      }

      for (var i=0;i<items.length;i++) {
        if (items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase())!=-1) {
          foundItems.push(items[i]);
        }
      }
      // return processed items
      return foundItems;
  });
  }
}
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(service) {
  var ctrl = this;

  ctrl.getMatchedMenuItems = function() {
    service.getMatchedMenuItems(ctrl.searchTerm).then(function(found) {
      ctrl.found = found;
    })
  }
  ctrl.dontWantThisOne = function(index) {
      ctrl.found.splice(index,1);
  }
}

function foundItemsDirective() {
  var ddo = {
    templateUrl : 'itemList.html',
    restrict: 'E',
    controller: NarrowItDownController,
    controllerAs: 'ctrl',
    bindToController: true,
    transclude: true,
    scope: {
      listItems : '<',
      onRemove: '&'
    }
  }
  return ddo;
}
})();
