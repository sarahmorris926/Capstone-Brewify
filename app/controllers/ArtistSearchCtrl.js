"use strict";
const angular = require("angular");
const ngRoute = require("angular-route");

angular.module("BrewifyApp").controller("ArtistSearchCtrl", ArtistSearchCtrl);
ArtistSearchCtrl.$inject = ["$scope", "Spotify", "Artist", "Pairings"];
function ArtistSearchCtrl($scope, Spotify, Artist, Pairings) {
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

  $scope.clicked = genres => {
         Pairings.getPairings().then(beers => {
           for (let i = 0; i < genres.length; i++) {
             let currentGenre = genres[i];
             if (beers[currentGenre] !== undefined) {
               $scope.beer = beers[currentGenre];
               break;
             }
           }
         });
       };
     }
     
     console.log("Welcome to Brewify!");
     console.log(
       "Login first, then search for an artist to get a link to their Spotify page!"
     );
