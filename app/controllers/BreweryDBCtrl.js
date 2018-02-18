"use strict";
const angular = require("angular");
const ngRoute = require("angular-route");

angular
  .module("BrewifyApp")
  .controller("BreweryDBCtrl", function($scope, BreweryDB, Spotify, Pairings) {
    $scope.login = () => {
      Spotify.login();
    };

    $scope.getBeerStyles = beerInfo =>
      BreweryDB.getBeerStyles().then(beerStyles => {
        // console.log(beerStyles.data.data[0]);
        $scope.beerNames = beerStyles.data.data.map(beer => {
          let beerInfo = {};
          beerInfo.id = beer.id;
          beerInfo.name = beer.name;
          return beerInfo;
          });

        console.log("beerNames", $scope.beerNames);
      });



    $scope.clickedBeer = beerStyles => { // beerStyles is the style string that the user clicks on
      Pairings.getPairings().then(beerName => { // beerName is the object from Firebase that has {Genre: Beer Style}
        for (var key in beerName) {
          if (beerStyles === beerName[key]) {
            $scope.genre = key;
          }
        }
      });
    };
  });
