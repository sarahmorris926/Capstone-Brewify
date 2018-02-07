"use strict";
const angular = require("angular");
angular.module("BrewifyApp").controller("HomeCtrl", HomeCtrl);
HomeCtrl.$inject = ["$scope", "Spotify", "Artist", "Pairings"];
function HomeCtrl($scope, Spotify, Artist, Pairings) {
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

  Pairings.getPairings()
  .then( (beers) => {
    console.log('beers', beers);
    
    $scope.beerPairings = beers.pairings;
  });

  $scope.clicked = (genres) => {
    console.log("you clicked", genres);
    for (let i = 0; i < genres.length; i++) {
      if ()
    };


  };
}

console.log("Welcome to Brewify!");
console.log(
  "Login first, then search for an artist to get a link to their Spotify page!"
);
