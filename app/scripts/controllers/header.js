'use strict';

/**
 * @ngdoc function
 * @name caminoAlExitoApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the caminoAlExitoApp
 */
angular.module('caminoAlExitoApp')
  .controller('HeaderCtrl', function ($scope, $mdSidenav) {
    $scope.toggleLeft = function() {
      $mdSidenav('left').toggle();
    };

    $scope.close = function() {
      $mdSidenav('left').close();
    };

  });
