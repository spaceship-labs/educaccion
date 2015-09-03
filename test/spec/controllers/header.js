'use strict';

describe('Controller: HeaderCtrl', function () {

  // load the controller's module
  beforeEach(module('caminoAlExitoApp'));

  var HeaderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HeaderCtrl = $controller('HeaderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should toggleLeft defined', function () {
    expect(scope.toggleLeft).to.be.a('function');
  });
});
