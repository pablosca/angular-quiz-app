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
        '$state',
        function($scope, CorrectAnswers, $state) {
            
            var correctAnswers = CorrectAnswers.get();

            if (correctAnswers) {
	            $scope.correct = correctAnswers.length;
            } else {
            	$state.go('level');
            }
        }
    ]);