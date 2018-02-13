"use strict";

const angular = require("angular");

angular.module("BrewifyApp").controller("PairingsCtrl", PairingsCtrl);
PairingsCtrl.$inject = ["$scope", "Spotify", "PairingsFactory", "$window"];
function PairingsCtrl($scope, Spotify, Artist, PairingsFactory, $window) {
  $scope.login = () => {
    Spotify.login();
  };

  $scope.search = genres => {
    PairingsFactory.getPairings().then(genreName => {
      for (let i = 0; i < genres.length; i++) {
        let currentGenre = genres[i];
        if (genreName[currentGenre] !== undefined) {
          $scope.genre = genreName[currentGenre];
          break;
        }
      }
    });
  };
}
