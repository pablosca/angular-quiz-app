'use strict';

/**
 * @ngdoc service
 * @name quizApp.correctAnswer
 * @description
 * # correctAnswer
 * Service in the quizApp.
 */
angular.module('quizApp')
	.factory('correctAnswers', function correctAnswers() {
		var correctAnswers;

		return {
			get: function() {
				return correctAnswers;
			},
			save: function(correct) {
				correctAnswers = correct;
			},
			start: function() {
				correctAnswers = 0;
			}
		};
	});