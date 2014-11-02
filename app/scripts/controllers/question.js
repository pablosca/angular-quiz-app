'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuestionCtrl', function ($scope, $state, CorrectAnswers, Questions) {
  	
    var questions = Questions.get(), // questions (this will come from an external json)
		indexes = _.range(questions.length), // put all the indexes of the questions array in a separated array
		currentIndex = _.sample(indexes), // randomly select the first index of questions to display
		fullCorrectAnswers = [];

	$scope.current = questions[currentIndex];		
	$scope.selectAnswer = selectAnswer;


	function changeQuestion() {
		
		indexes = _.without(indexes, currentIndex); // removes the current (already old) question index from the indexes array
	
		if (indexes.length) {
			currentIndex = _.sample(indexes); // gets a new index again from the indexes array
			$scope.current = questions[currentIndex]; // changes the current question to display with the new question index
		} else {
			CorrectAnswers.save(fullCorrectAnswers.length);
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
		changeQuestion();
	}
  });
