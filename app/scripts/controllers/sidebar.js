'use strict';

/**
 * @ngdoc function
 * @name caminoAlExitoApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the caminoAlExitoApp
 */
angular.module('caminoAlExitoApp')
  .controller('SidebarCtrl', function ($scope, $mdSidenav) {
    $scope.close = function() {
      $mdSidenav('left').close();
    };
  });
