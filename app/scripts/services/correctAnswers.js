'use strict';

/**
 * @ngdoc service
 * @name quizApp.correctAnswer
 * @description
 * # correctAnswer
 * Service in the quizApp.
 */
angular.module('quizApp')
    .factory('CorrectAnswers', function() {
        var answers = {};

        return {
            get: function() {
                return answers;
            },
            save: function(correct, total) {
                answers.correct = correct;
                answers.totalQuestions = total;
            }
        };
    });