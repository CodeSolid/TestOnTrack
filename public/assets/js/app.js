'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngRoute'])
    
    .config(function ($routeProvider) {

      $routeProvider.when("/about", {
        templateUrl: "views/about.html"
      });
/*
      $routeProvider.when("/essays_tryit", {
        templateUrl: "views/essays/tryit.html"
      });
*/

      $routeProvider.otherwise({
        templateUrl: "views/home.html"
      });
    });
