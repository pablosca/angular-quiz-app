'use strict';

angular.module('quizApp')
    .controller('QuestionsLengthCtrl', [
        '$scope',
        '$state',
        'QuizConfig',
        function($scope, $state, QuizConfig) {
            $scope.quizLength = [1, 2, 20, 50];
            $scope.setQuestionsLength = setQuestionsLength;

            function setQuestionsLength(length) {
                QuizConfig.setQuestionsLength(length);
                $state.go('question');
            };
        }
    ]);