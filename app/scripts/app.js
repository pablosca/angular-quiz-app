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
    .config(function($stateProvider, $routeProvider) {

        $routeProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'views/main.html'
                // controller: 'MainCtrl'
            })
            .state('questionsLength', {
                url: '/questions-length',
                templateUrl: 'views/questions-length.html',
                controller: 'QuestionsLengthCtrl'
            })
            .state('level', {
                url: '/level',
                templateUrl: 'views/level.html',
                controller: 'LevelCtrl'
            })
            .state('question', {
                url: '/question',
                templateUrl: 'views/question.html',
                controller: 'QuestionCtrl'
            })
            .state('completed', {
                url: '/completed',
                // url: '/completed/:correct',
                // resolve: {
                //   correct: ['$stateParams', function($stateParams) {
                //       return $stateParams.correct;
                //     }
                //   ]
                // },
                templateUrl: 'views/completed.html',
                controller: 'CompletedCtrl'
            });
        // .state('about', {
        //   url: '/about',
        //   templateUrl: 'views/about.html',
        //   controller: 'AboutCtrl'
        // });
    });