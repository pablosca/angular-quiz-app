'use strict';

angular.module('quizApp')
	.controller('QuizLevelsCtrl', function($scope) {
		$scope.levels = [
			'Newbie',
			'Intermediate',
			'Pro'
		];
	});