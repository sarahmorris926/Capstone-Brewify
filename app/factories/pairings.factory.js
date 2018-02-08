"use strict";

const angular = require("angular");

angular.module("BrewifyApp").factory("Pairings", PairingsFactory);
PairingsFactory.$inject = ["$q", "$http"];
function PairingsFactory($q, $http) {
  let getPairings = () => {
    $http
      .get("https://brewify-capstone.firebaseio.com/pairings.json")
      .then(beers => {
        return beers.data;
      })
      .catch(error => {
        return error;
      });
  };
  return { getPairings };
}
