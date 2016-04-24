// app.js


var app = angular.module('me', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html',
            containerClass: 'home'

        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
         .state('about', {
            url: '/about',
            templateUrl: 'partials/about.html',
            containerClass: 'about'
        })
           .state('training', {
            url: '/training',
            templateUrl: 'partials/training.html',
            containerClass: 'training'
        })
         .state('contact', {
            url: '/contact',
            templateUrl: 'partials/contact.html',
            containerClass: 'contact'
        })
         .state('projects', {
            url: '/projects',
            templateUrl: 'partials/projects.html',
            containerClass: 'projects'
        });
        
});

app.run(function($rootScope){

    $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
        $rootScope.containerClass = toState.containerClass;
    });

});
