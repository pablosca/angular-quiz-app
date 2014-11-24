'use strict';

angular.module('quizApp')
    .controller('LevelCtrl', [
        '$scope',
        '$state',
        'QuizConfig',
        'LEVELS',
        function($scope, $state, QuizConfig, LEVELS) {
            $scope.levels = LEVELS;
            $scope.setLevel = setLevel;

            function setLevel(level) {
                QuizConfig.setLevel(level);
                $state.go('questionsLength');
            };
        }
    ]);