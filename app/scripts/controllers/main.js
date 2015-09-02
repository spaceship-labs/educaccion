/* globals Firebase */
'use strict';

/**
 * @ngdoc function
 * @name caminoAlExitoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the caminoAlExitoApp
 */
angular.module('caminoAlExitoApp')
  .controller('MainCtrl', function($scope, $firebaseArray, $http, $mdDialog, $location, $anchorScroll) {
    var firebaseEntries = new Firebase('https://caminoalexito.firebaseio.com/').child('entries'); //
    /*$scope.stories = $firebaseArray(ref);

    $scope.stories.$loaded(function(data){
      console.log(data);
    });
*/
    $scope.story = {};

    $scope.saved = false;
    $scope.saving = false;
    $scope.readMethod = "readAsDataURL";

    $scope.onReaded = function(e, file) {
      $scope.file = file;
      if ($scope.file.size < 10000000) {
        $scope.story.signatures = e.target.result;
      } else {
        $scope.alertFileSize();
        $scope.file = null;
        $scope.story.signatrues = null;
      }
    };

    $scope.alertFileSize = function() {
      $mdDialog.show(
        $mdDialog.alert()
        .clickOutsideToClose(true)
        .title('Imagen demasiado grande')
        .content('El tamaño maximo permitido es de 10mbs')
        .ok('Ok')
      );
    };

    $scope.selectSchool = function(school) {
      if (school) {
        $scope.story.cct = school.cct;
      } else {
        $scope.story.cct = null;
      }
    };
    $scope.getSchools = function(name) {
      return $http({
        method: 'GET',
        url: 'http://mte.spaceshiplabs.com/api/escuelas',
        params: {
          term: name,
          solr: true
        }
      }).then(function(res) {
        if (res.data && res.data.escuelas) {
          return res.data.escuelas;
        }
        return [];
      });
    };

    $scope.save = function() {
      $scope.saving = true;
      firebaseEntries.push().set($scope.story, function(e) {
        $scope.saving = false;
        $scope.saved = !e ? true : false;
        $scope.$apply();
      });
    };

    $scope.toDown = function(){
      $location.hash('registro');
      $anchorScroll();
    };

  });
