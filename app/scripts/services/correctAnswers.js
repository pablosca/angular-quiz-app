'use strict';

/**
 * @ngdoc service
 * @name quizApp.correctAnswer
 * @description
 * # correctAnswer
 * Service in the quizApp.
 */
angular.module('quizApp')
	.factory('CorrectAnswers', function () {
		var correctAnswers;

		return {
			get: function() {
				return correctAnswers;
			},
			save: function(correct) {
				correctAnswers = correct;
			}
		};
	});