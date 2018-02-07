"use strict";
const angular = require("angular");
angular.module("BrewifyApp").controller("HomeCtrl", HomeCtrl);
HomeCtrl.$inject = ["$scope", "Spotify", "Artist"];
function HomeCtrl($scope, Spotify, Artist) {
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

  $scope.clicked = () => {
    console.log("you clicked");
  };
}

console.log("Welcome to Brewify!");
console.log(
  "Login first, then search for an artist to get a link to their Spotify page!"
);
