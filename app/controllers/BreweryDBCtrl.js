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
        // Pairings.addStyleIds($scope.beerNames).then(styleIds => {
        //   console.log(styleIds);
        //   }
        // );

        console.log("beerNames", $scope.beerNames);
      });



    $scope.clickedBeer = beerStyles => {
      // console.log("beer styles", beerStyles); // this is the string you clicked on
      Pairings.getPairings().then(beerName => {
        // console.log("beername?", beerName); // object from fb
        // let objBeername = Object.values(beerName);
        // console.log(objBeername);

        for (var key in beerName) {
          if (beerStyles === beerName[key]) {
            $scope.genre = key;
          }
        }
      });
    };
  });
