'use strict';

/**
 * @ngdoc service
 * @name quizApp.questions
 * @description
 * # questions
 * Factory in the quizApp.
 */
angular.module('quizApp')
    .factory('Questions', function() {
        // Service logic
        var questions = [{
            'content': '¿Cómo se define un módulo en angular?',
            'answers': [
                'angular.module("nombreModulo", [])',
                'angular.module("nombreModulo")',
                'angular("nombreModulo")'
            ],
            'correctAnswer': 0,
            'score': 10
        }, {
            'content': 'última versión de html',
            'answers': [
                '4',
                '3',
                '5'
            ],
            'correctAnswer': 2,
            'score': 10
        }, {
            'content': 'libreria javascript',
            'answers': [
                'css3',
                'jquery',
                'cachata'
            ],
            'correctAnswer': 1,
            'score': 10
        }];

        // Public API here
        return {
            get: function() {
                return questions;
            }
        };
    });