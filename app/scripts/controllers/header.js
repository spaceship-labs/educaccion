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
    console.log('md', $mdSidenav);
    $scope.toggleLeft = function() {
      $mdsidenav('left').toggle();
    };

    $scope.close = function() {
      $mdSidenav('left').close();
    };

  });
