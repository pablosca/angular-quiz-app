'use strict';

describe('Service: QuizConfig', function () {

  // load the service's module
  beforeEach(module('quizApp'));

  // instantiate service
  var QuizConfig;
  beforeEach(inject(function (_QuizConfig_) {
    QuizConfig = _QuizConfig_;
  }));

  it('should do something', function () {
    expect(!!QuizConfig).toBe(true);
  });

});
