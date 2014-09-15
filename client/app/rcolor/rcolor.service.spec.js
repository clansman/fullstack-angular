'use strict';

describe('Service: rcolor', function () {

  // load the service's module
  beforeEach(module('eyeSpendApp'));

  // instantiate service
  var rcolor;
  beforeEach(inject(function (_rcolor_) {
    rcolor = _rcolor_;
  }));

  it('should do something', function () {
    expect(!!rcolor).toBe(true);
  });

});
