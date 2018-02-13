"use strict";
const angular = require("angular");
const ngRoute = require("angular-route");

angular.module("BrewifyApp").controller("BreweryDBCtrl", function($scope, BreweryDB, Spotify, Pairings) {
    $scope.login = () => {
      Spotify.login();
    };

    $scope.getBeerStyles = beerInfo =>
      BreweryDB.getBeerStyles().then(beerStyles => {
        // console.log(beerStyles.data.data[0]);
        $scope.beerNames = beerStyles.data.data.map(beer => beer.name);
        console.log("beerNames", $scope.beerNames);
      });

      $scope.clickedBeer = genres => {
        Pairings.getPairings().then(beerName => {
          for (let i = 0; i < genres.length; i++) {
            let currentGenre = genres[i];
            if (beerName[currentGenre] !== undefined) {
              $scope.beer = beerName[currentGenre];
              break;
            }
          }
        });
      };



  });
