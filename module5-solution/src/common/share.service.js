(function () {
"use strict";

angular.module('common')
.service('ShareService', ShareService);



function ShareService() {
  var service = this;

  service.shared = {}
  service.getItem = function (item_name) {
    return service.shared[item_name];
  };

  service.setItem = function (item_name,item_value) {
    service.shared[item_name] = item_value;
  };
}
})();
