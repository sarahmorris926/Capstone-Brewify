"use strict";
const angular = require("angular");
const ngRoute = require("angular-route");
const angular_spotify = require("angular-spotify");

angular.module("BrewifyApp").controller("ArtistSearchCtrl", function($scope, Spotify, Artist, Pairings, BreweryDB) {
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

console.log("Welcome to Brewify!");
console.log(
  "Login first, then search for an artist to get a link to their Spotify page!"
);
