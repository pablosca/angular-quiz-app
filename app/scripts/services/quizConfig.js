'use strict';

/**
 * @ngdoc service
 * @name quizApp.QuizConfig
 * @description
 * # QuizConfig
 * Factory in the quizApp.
 */
angular.module('quizApp')
    .factory('QuizConfig', function() {
        var quizConfig = {
            questionsQuantity: 10,
            level: 'easy'
        };

        return {
            get: function() {
                return quizConfig;
            },
            setLevel: function(level) {
                quizConfig.level = level;
            },
            setQuestionsLength: function(quantity) {
                quizConfig.questionsQuantity = quantity;
            }
        };
    });