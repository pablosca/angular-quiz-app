'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:CompletedCtrl
 * @description
 * # CompletedCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('CompletedCtrl', function ($scope, correctAnswers) {
    $scope.correct = correctAnswers.get();
  });
