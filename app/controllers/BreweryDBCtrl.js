'use strict';
const angular = require("angular");
const ngRoute = require("angular-route");

angular.module("BrewifyApp").controller("BreweryDBCtrl", BreweryDBCtrl);
BreweryDBCtrl.$inject = ["$scope", "BreweryDB"];
function BreweryDBCtrl($scope, BreweryDB) {

}