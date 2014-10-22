'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuestionCtrl', function ($scope) {
    $scope.questions = [{
		'content': '¿Cómo se define un módulo en angular?',
		'answers': [
			'angular.module("nombreModulo", [])',
			'angular.module("nombreModulo")',
			'angular("nombreModulo")'
		],
		'correctAnswer': 0
	},
	{
		'content': 'última versión de html',
		'answers': [
			'4',
			'3',
			'5'
		],
		'correctAnswer': 2
	},
	{
		'content': 'libreria javascript',
		'answers': [
			'css3',
			'jquery',
			'cachata'
		],
		'correctAnswer': 1
	}];

	// var questionIndexes = _.range($scope.questions.length -1),
	$scope.indexes = _.range($scope.questions.length);
	$scope.currentIndex = _.sample($scope.indexes);

	$scope.current = $scope.questions[$scope.currentIndex];
		
	$scope.selectAnswer = selectAnswer;

	function changeQuestion() {
		$scope.indexes = _.without($scope.indexes, $scope.currentIndex);
		$scope.currentIndex = _.sample($scope.indexes);
		$scope.current = $scope.questions[$scope.currentIndex];
	}

	function selectAnswer () {
		changeQuestion();
	}
  });
