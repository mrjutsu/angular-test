'use strict';

describe('Controller: RegistrationsCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTestApp'));

  var RegistrationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistrationsCtrl = $controller('RegistrationsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegistrationsCtrl.awesomeThings.length).toBe(3);
  });
});
