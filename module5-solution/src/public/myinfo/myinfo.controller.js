(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['ShareService','MenuService'];
function MyInfoController(ShareService,MenuService) {
  var myinfoCtrl = this;
  myinfoCtrl.user = ShareService.getItem("user_info");
  if (myinfoCtrl.user) {
    MenuService.getMenuItem(myinfoCtrl.user.favorite).then( function(menuItem) {
        myinfoCtrl.menuItem= menuItem;
    }).catch(function (errorResponse) {

    });
  }
  };



})();
