"use strict";

const angular = require("angular");

angular.module("BrewifyApp").factory("Pairings", Pairings);
Pairings.$inject = ["$q", "$http"];
function Pairings($q, $http) {
  let getPairings = () => {
    return $q((resolve, reject) => {
      $http
        .get("https://brewify-capstone.firebaseio.com/pairings.json")
        .then(beers => {
          resolve(beers.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  return { getPairings };
}
