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
            
            var answers = CorrectAnswers.get();

            if (answers.correct) {
                var correct = answers.correct.length,
                    total = answers.totalQuestions;
                
                // TODO: messages should go in a service or config?
                var messages = {
                    success: {
                        'class': 'success',
                        text: 'Flawless!'
                    },
                    good: {
                        'class': 'info',
                        text: 'Good work!'
                    },
                    regular: {
                        'class': 'warning',
                        text: 'Try a lower level.'
                    },
                    bad: {
                        'class': 'danger',
                        text: 'Are you ok?'
                    }
                }

                $scope.result = {
                    correct: correct,
                    total: total,
                    percent: correct / total * 100
                };

                if (correct) {
                    
                    if (correct > total / 2) {
                        $scope.result.status = messages.good;

                        if (correct == total) {
                            $scope.result.status = messages.success;
                        }
                    } else if (correct <= total / 2) {
                        $scope.result.status = messages.regular;
                    }
                } else {
                    // correct is 0, no correct answers
                    $scope.result.status = messages.bad;
                }

            } else {
            	$state.go('level');
            }
        }
    ]);