(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {


  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  //Home page
  .state('home', {
    url: '/',
    templateUrl:'src/categories/templates/home.template.html'
  })

  // categories list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/categories/templates/categories.template.html',
    controller: 'CategoriesController as categoriesCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // items list page
  .state('categories.items', {
    url: '/items/{catShortName}',
    templateUrl: 'src/categories/templates/items.template.html',
    controller: 'ItemsController as itemsCtrl',
    resolve: {
      detail: ['MenuDataService','$stateParams', function (MenuDataService,$stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.catShortName);
      }]
    },
    params: {
      catShortName: ''
    }
  });
}

})();
