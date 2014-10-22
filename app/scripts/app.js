'use strict';

/**
 * @ngdoc overview
 * @name quizApp
 * @description
 * # quizApp
 *
 * Main module of the application.
 */
angular
  .module('quizApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $routeProvider) {
    $routeProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html'
        // controller: 'MainCtrl'
      })
      .state('quizLength', {
        url: '/quiz-length',
        templateUrl: 'views/quiz-length.html',
        controller: 'QuizLengthCtrl'
      })
      .state('quizLevel', {
        url: '/quiz-level',
        templateUrl: 'views/quiz-levels.html',
        controller: 'QuizLevelsCtrl'
      })
      .state('question', {
        url: '/question',
        templateUrl: 'views/question.html',
        controller: 'QuestionCtrl'
      });
      // .state('about', {
      //   url: '/about',
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl'
      // });
  });
