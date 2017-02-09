(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['ShareService','MenuService'];
function SignupController(ShareService,MenuService) {
  var signupCtrl = this;
  signupCtrl.user = {
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    favorite:""
  }
  signupCtrl.fav_error=false;
  signupCtrl.show_saved=false;

  var user_info = ShareService.getItem("user_info");

  if (user_info) {
    signupCtrl.user = user_info;
  }
    signupCtrl.submit= function() {

        MenuService.getMenuItem(signupCtrl.user.favorite).then( function() {
          signupCtrl.fav_error=false;
          // Save user info
          ShareService.setItem("user_info",signupCtrl.user);
          signupCtrl.show_saved=true;
        }).catch(function (errorResponse) {
          signupCtrl.fav_error=true;
          signupCtrl.show_saved=false;
        });
    };
  };



})();
