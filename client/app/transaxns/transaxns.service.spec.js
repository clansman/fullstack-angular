'use strict';

describe('Service: transaxns', function () {

  // load the service's module
  beforeEach(module('eyeSpendApp'));

  // instantiate service
  var transaxns;
  beforeEach(inject(function (_transaxns_) {
    transaxns = _transaxns_;
  }));

  it('should do something', function () {
    expect(!!transaxns).toBe(true);
  });

});
