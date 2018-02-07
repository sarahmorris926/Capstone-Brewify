'use strict';

const angular = require("angular");

angular.module("BrewifyApp").controller("PairingsCtrl", PairingsCtrl);
PairingsCtrl.$inject = ["$scope", "Spotify", "Artist", "Pairings", "$window"];
function PairingsCtrl($scope, Spotify, Artist, Pairings, $window) {

  // $scope.clicked = genres => {
  //   console.log('you clicked', genres);
  //   Pairings.getPairings().then(beers => {
  //     console.log('beers stuff', beers);
  //     for (let i = 0; i < genres.length; i++) {
  //       let currentGenre = genres[i];
  //       if (beers[currentGenre] !== undefined) {
  //         console.log(beers[currentGenre]);
  //         break;
  //       }
  //       $window.location = "/#!/pairings";
  //     }
      
  //   });
  // };

}