'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:CompletedCtrl
 * @description
 * # CompletedCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
    .controller('CompletedCtrl', [
        '$scope',
        'CorrectAnswers',
        function($scope, CorrectAnswers) {
            $scope.correct = CorrectAnswers.get().length;
        }
    ]);