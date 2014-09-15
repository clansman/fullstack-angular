'use strict';

describe('Service: statsService', function () {

  // load the service's module
  beforeEach(module('eyeSpendApp'));

  // instantiate service
  var statsService;
  beforeEach(inject(function (_statsService_) {
    statsService = _statsService_;
  }));

  it('should do something', function () {
    expect(!!statsService).toBe(true);
  });

});
