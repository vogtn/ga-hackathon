var app = angular.module('App', ['ui.router', 'AppCtrl']);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/404');

        $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'app/views/home.html',
    })
    .state('users',{
        url: '/users',
        templateUrl: 'app/views/users.html',
        controller: 'UserCtrl'
    })
    .state('signup', {
        url: '/signup',
        templateUrl: 'app/views/userSignup.html',
        controller: 'SignupCtrl'
    })
    .state('login', {
        url: '/login',
        templateUrl: 'app/views/userLogin.html',
        controller: 'LoginCtrl'
    })
    .state('404', {
        url: '/404',
        templateUrl: 'app/views/404.html'
    })
    .state('user',{
        url: '/user/:id',
        templateUrl: 'app/views/user.html',
        controller: 'InfoCtrl'
    })
    .state('projects',{
        url: '/projects',
        templateUrl: 'app/views/projects.html',
        controller: 'InfoCtrl'
    })
    $locationProvider.html5Mode(true);
    }])
    .config(["$httpProvider", function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor')
}])
