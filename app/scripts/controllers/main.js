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
  .controller('MainCtrl', function($scope, $firebaseArray, $http) {
    var ref = new Firebase('https://caminoalexito.firebaseio.com/'); //
    $scope.stories = $firebaseArray(ref);
    $scope.story = {};
    $scope.saved = false;
    $scope.selectSchool = function() {
      if($scope.selectedSchool){
        $scope.story.cct = $scope.selectedSchool.cct;
      }else{
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

    $scope.save = function(){
      //console.log(hey);
      $scope.stories.$add($scope.story);
      $scope.saved = true;
    };

  });
