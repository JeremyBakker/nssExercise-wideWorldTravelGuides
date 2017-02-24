"use strict";

var app = angular.module("wideWorldTravelApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.
  when('/',{
    templateUrl: "partials/guide-list.html",
    controller: 'bookCtrl'
  });
});