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
        
        // questions will come from server call
        var questions = [{
            'content': 'How is an angular module defined?',
            'answers': [
                'angular.module("moduleName", [])',
                'angular.module("moduleName")',
                'angular("moduleName")'
            ],
            'correctAnswer': 0,
            'score': 10,
            'level': 0
        }, {
            'content': 'Why is the project called "AngularJS"?',
            'answers': [
                'Is the last name of its creator',
                'Because HTML has Angular brackets',
                'Is the name of the dog of its creator'
            ],
            'correctAnswer': 1,
            'score': 10,
            'level': 0
        }, {
            'content': 'What is a scope in AngularJS?',
            'answers': [
                'Is an object that refers to the application model.',
                'It is the glue between application controller and the view.',
                'It is an execution context for expressions and arranged in hierarchical structure.',
                'All of the above.'
            ],
            'correctAnswer': 3,
            'score': 10,
            'level': 1
        }, {
            'content': 'How many root scopes an Angular application have?',
            'answers': [
                'Only one.',
                'None.',
                'All those created by the app developer.'
            ],
            'correctAnswer': 0,
            'score': 10,
            'level': 1
        }, {
            'content': 'What Angular built-in directive would you use to loop through a collection and list each item?',
            'answers': [
                'ngLoop',
                'ngRepeat.',
                'ngCollection'
            ],
            'correctAnswer': 1,
            'score': 10,
            'level': 1
        }];

        return {
            get: function(quantity) {
                return quantity ? _.first(questions, quantity) : questions;
            }
        };
    });