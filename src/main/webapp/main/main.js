'use strict';

var app = angular.module('app', ['ngRoute','ngResource', 'ngCookies', 'ngDialog', 'timer', 'ngAnimate', 'ui.router', 'ui.bootstrap', 'ui.ace', 'chart.js','pascalprecht.translate','summernote','ngMaterial','ngMessages']);
var currentUser;
app
  .config(['$stateProvider', '$urlRouterProvider','$translateProvider', function ($stateProvider, $urlRouterProvider,$translateProvider,$http) {

    $urlRouterProvider.otherwise('/teachers');

    $stateProvider
        .state('admin', {
            templateUrl: 'modules/admin/admin.html',
            controller: 'UserController'
        })
        .state('admin.teachers', {
            url: '/teachers',
            views: {
                '': {
                    templateUrl: 'modules/teachers/teachers.html',
                    controller: 'TeachersCtrl'
                }
            }
        })
        .state('admin.specialty', {
            url: '/specialty',
            views: {
                '': {
                    templateUrl: 'modules/specialty/specialty.html',
                    controller: 'SpecialtyCtrl'
                }
            }
        })
        .state('admin.subjects', {
            url: '/subjects',
            views: {
                '': {
                    templateUrl: 'modules/subjects/subjects.html',
                    controller: 'SubjectsCtrl'
                }
            }
        })
        .state('admin.tasks', {
            url: '/tasks',
            views: {
                '': {
                    templateUrl: 'modules/tasks/tasks.html',
                    controller: 'TasksCtrl'
                }
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: 'modules/login/login.template.html',
            controller: 'LoginController'
        })
        .state('workspace', {
            url: '/workspace',
            templateUrl: 'modules/workspace/workspace.html'
        })
        .state('workspacev', {
            url: '/workspacev',
            templateUrl: 'modules/workspace/workspace.v2.html',
            controller: 'WorkspaceCtrl'
        });
        $translateProvider.useStaticFilesLoader({
            prefix: '/lang/',
            suffix: '.json'
          });
  }
])
  .run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);
