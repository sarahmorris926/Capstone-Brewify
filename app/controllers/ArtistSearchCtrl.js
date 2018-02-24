"use strict";
const angular = require("angular");
const ngRoute = require("angular-route");
const angular_spotify = require("angular-spotify");

angular
  .module("BrewifyApp")
  .controller("ArtistSearchCtrl", function(
    $scope,
    Spotify,
    Artist,
    Pairings,
    BreweryDB,
    $q
  ) {
    $scope.login = () => {
      Spotify.login();
    };

    $scope.search = () => {
      Spotify.search($scope.searchTerm, "artist").then(function(data) {
        $scope.results = data.data.artists.items;
        $scope.results = $scope.results.map(artist => {
          return new Artist(artist);
        });
      });
    };

    $scope.clickedArtist = genres => {
      Pairings.getPairings().then(beerStyleName => {
        for (let i = 0; i < genres.length; i++) {
          let currentGenre = genres[i];
          if (beerStyleName[currentGenre] !== undefined) {
            $scope.beer = beerStyleName[currentGenre];
            break;
          }
        }
      });
    };

    $scope.clickedBeerStyle = () => {
      $scope.beerArr = [];
      Pairings.getStyleIdNumber($scope.beer).then(data => {
        // console.log("scope.beer", data.data);
        let styleId = Object.values(data.data)[0].id;
        let promArr = [];
        for (let i = 0; i < 10; i++) {
          promArr.push(BreweryDB.getBeerNames(i + 1, styleId));
        }
        $q.all(promArr).then(beerName => {
          beerName.forEach(beerArr => {
            console.log(beerArr.data.data);
            $scope.beerArr = $scope.beerArr.concat(beerArr.data.data);
          });
        });
      });
    };

    $scope.clickedBeerName = () => {
      console.log("hello");
    };
  });



console.log("Welcome to Brewify!");
console.log(
  "Login first, then search for an artist. Click the 'Play' button to see the artist's Spotify page, or click on their name to see the beer pairings."
);
