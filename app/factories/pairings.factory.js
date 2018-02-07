"use strict";

const angular = require("angular");

angular.module("BrewifyApp").factory("Pairings", PairingsFactory);
PairingsFactory.$inject = ["$q", "$http"];
function PairingsFactory($q, $http) {
  let getPairings = () => {
    return $q((resolve, reject) => {
      $http
        .get("../../pairings.json")
        .then(beers => {
          resolve(beers.data.pairings);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  return { getPairings };
}
