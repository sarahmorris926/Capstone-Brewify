"use strict";
const angular = require("angular");
const ngRoute = require("angular-route");

angular.module("BrewifyApp").controller("BreweryDBCtrl", function($scope, BreweryDB) {
  
    $scope.beerData = beerInfo =>
      BreweryDB.getBeerStyles().then(beerNames => {
        console.log("beerInfo", beerNames);
      });

});

