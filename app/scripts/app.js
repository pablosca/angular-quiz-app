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

    .run([
        '$rootScope',
        '$log',
        function($rootScope, $log) {
            $rootScope.$log = $log;
        }])

    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {
        
                $stateProvider
                    .state('main', {
                        url: '/main',
                        templateUrl: 'views/main.html'
                    })
                    .state('options', {
                        url: '/options',
                        templateUrl: 'views/options.html'
                    })
                    .state('level', {
                        url: '/level',
                        templateUrl: 'views/level.html',
                        controller: 'LevelCtrl'
                    })
                    .state('questionsLength', {
                        url: '/questions-length',
                        templateUrl: 'views/questions-length.html',
                        controller: 'QuestionsLengthCtrl'
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
        
                    $urlRouterProvider.otherwise('/main');
            }]);