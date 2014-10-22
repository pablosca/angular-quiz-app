'use strict';

angular.module('quizApp')
	.controller('QuizLengthCtrl', function($scope) {
		$scope.quizLength = [5, 10, 20, 50];
	});