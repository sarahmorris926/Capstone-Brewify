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
        $scope.beerNames = beerStyles.data.data.map(beer => beer.name);
        console.log("beerNames", $scope.beerNames);
      });

    $scope.clickedBeer = beerStyles => {
      console.log("beer styles", beerStyles); // this is the string you clicked on
      Pairings.getPairings().then(beerName => {
        // console.log("beername?", beerName); // object from fb
        // let objBeername = Object.values(beerName);
        // console.log(objBeername);

        for (var key in beerName) {
          console.log("key", key);
          if (beerStyles === beerName[key]) {
            $scope.genre = key;
          }
        }


        // for (let i = 0; i < beerStyles.length; i++) {
        //   let currentGenre = beerStyles[i];
        //   if (beerName[currentGenre] !== undefined) {
        //     $scope.genre = beerName[currentGenre];
        //     break;
        //   }
        // }
      });
    };
  });
