var app = angular.module("projectApp", ['ngRoute']);


app .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/users', {
        templateUrl: '../views/user.html',
        controller: 'userController'
      }).
     when('/projects', {
        templateUrl: '../views/projects.html',
        controller: 'projectController'
      }).
     when('/tasks', {
        templateUrl: '../views/Tasks.html',
        controller: 'taskController'
      }).
    when('/All', {
        templateUrl: '../views/All.html',
        controller: 'allController'
      }).	
     when('/users/:id/projects', {
        templateUrl: '../views/projects.html',
        controller: 'paramController'
      });
     
  }]);
