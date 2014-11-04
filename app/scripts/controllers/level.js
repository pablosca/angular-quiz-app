'use strict';

angular.module('quizApp')
    .controller('LevelCtrl', [
        '$scope',
        '$state',
        'QuizConfig',
        function($scope, $state, QuizConfig) {
            $scope.levels = [
                {'id': 0, 'name': 'Newbie'},
                {'id': 1, 'name': 'Intermediate'},
                {'id': 2, 'name': 'Pro'}
            ];
            $scope.setLevel = setLevel;

            function setLevel(level) {
                QuizConfig.setLevel(level);
                $state.go('questionsLength');
            };
        }
    ]);