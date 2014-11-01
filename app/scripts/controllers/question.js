'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuestionCtrl', function ($scope, $state, correctAnswers) {
  	// questions (this will come from an external json)
    var questions = [{
		'content': '¿Cómo se define un módulo en angular?',
		'answers': [
			'angular.module("nombreModulo", [])',
			'angular.module("nombreModulo")',
			'angular("nombreModulo")'
		],
		'correctAnswer': 0,
		'score': 10 //easy
	},
	{
		'content': 'última versión de html',
		'answers': [
			'4',
			'3',
			'5'
		],
		'correctAnswer': 2,
		'score': 10 //easy
	},
	{
		'content': 'libreria javascript',
		'answers': [
			'css3',
			'jquery',
			'cachata'
		],
		'correctAnswer': 1,
		'score': 10 //easy
	}];

	// put all the indexes of the questions array in a separated array
	var indexes = _.range(questions.length),
		// randomly select the first index of questions to display
		currentIndex = _.sample(indexes),
		fullCorrectAnswers = [];

	$scope.current = questions[currentIndex];		
	$scope.selectAnswer = selectAnswer;


	function changeQuestion() {
		// removes the current (already old) question index from the indexes array
		indexes = _.without(indexes, currentIndex);
	
		if (indexes.length) {
			// gets a new index again from the indexes array
			currentIndex = _.sample(indexes);
			// changes the current question to display with the new question index
			$scope.current = questions[currentIndex];
		} else {
			correctAnswers.save(fullCorrectAnswers.length);
			$state.go('completed');
		}
	}

	function validateAnswer (index) {
		if (index == $scope.current.correctAnswer) {
			fullCorrectAnswers.push(currentIndex);
		}
	}

	function selectAnswer (index) {
		validateAnswer(index);
		// change to the next question
		changeQuestion();
	}
  });
