'use strict';

describe('Service: correctAnswer', function () {

  // load the service's module
  beforeEach(module('quizApp'));

  // instantiate service
  var correctAnswer;
  beforeEach(inject(function (_correctAnswer_) {
    correctAnswer = _correctAnswer_;
  }));

  it('should do something', function () {
    expect(!!correctAnswer).toBe(true);
  });

});
