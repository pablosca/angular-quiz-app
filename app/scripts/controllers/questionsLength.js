'use strict';

angular.module('quizApp')
    .controller('QuestionsLengthCtrl', [
        '$scope',
        '$state',
        'QuizConfig',
        function($scope, $state, QuizConfig) {
            $scope.quizLength = [2, 4, 5];
            $scope.setQuestionsLength = setQuestionsLength;

            function setQuestionsLength(length) {
                QuizConfig.setQuestionsLength(length);
                $state.go('question');
            };
        }
    ]);