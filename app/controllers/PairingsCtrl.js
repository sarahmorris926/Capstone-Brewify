"use strict";

const angular = require("angular");

angular
  .module("BrewifyApp")
  .controller("PairingsCtrl", function(
    $scope,
    Spotify,
    Artist,
    Pairings,
    $window
  ) {
    $scope.login = () => {
      Spotify.login();
    };

    $scope.search = genres => {
      Pairings.getPairings().then(genreName => {
        for (let i = 0; i < genres.length; i++) {
          let currentGenre = genres[i];
          if (genreName[currentGenre] !== undefined) {
            $scope.genre = genreName[currentGenre];
            break;
          }
        }
      });
    };
  });
