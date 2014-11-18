'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
    .controller('QuestionCtrl', [
        '$scope',
        '$state',
        'CorrectAnswers',
        'Questions',
        'QuizConfig',
        function($scope, $state, CorrectAnswers, Questions, QuizConfig) {

            // private variables
            var quizConfig = QuizConfig.get(),
                questions = Questions.get(quizConfig.questionsQuantity), // questions (this will come from an external json)
                indexes = _.range(questions.length), // put all the indexes of the questions array in a separated array
                currentQuestionId = _.sample(indexes), // randomly select the first index of questions to display
                fullCorrectAnswers = [];

            // variables in scope
            $scope.indexes = indexes;
            $scope.current = questions[currentQuestionId];
            $scope.currentQuestionStep = 0;
            $scope.selectedAnswer = null;
            
            // functions in scope
            $scope.selectAnswer = selectAnswer;
            $scope.nextQuestion = nextQuestion;


            // changes to next questions
            function nextQuestion() {
                validateAnswer();
                indexes = _.without(indexes, currentQuestionId); // removes the current (already old) question index from the indexes array

                if (indexes.length) {
                    currentQuestionId = _.sample(indexes); // gets a new index again from the indexes array
                    $scope.current = questions[currentQuestionId]; // changes the current question to display with the new question index
                    $scope.currentQuestionStep++;
                    $scope.selectedAnswer = null;
                } else {
                    CorrectAnswers.save(fullCorrectAnswers, questions.length);
                    $state.go('completed');
                }
            }

            // if correct, push the question id to fullCorrectAnswers
            function validateAnswer() {    
                if ($scope.selectedAnswer == $scope.current.correctAnswer) {
                    fullCorrectAnswers.push(currentQuestionId);
                }
            }

            // changes selectedAnswer to have the value of the selected answer
            function selectAnswer(index) {
                $scope.selectedAnswer = index;
            }
        }
    ])
    
    .directive('breadcrumb', [function () {
        return {
            restrict: 'E',
            scope: {
                activeClass: '@',
                steps: '=',
                currentStep: '='
            },
            templateUrl: 'views/breadcrumb.html'
        };
    }]);