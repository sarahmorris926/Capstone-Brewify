"use strict";

const angular = require("angular");

angular.module("BrewifyApp").factory("BreweryDB", BreweryDBFactory);
BreweryDBFactory.$inject = ["$q", "$http", "brewerydbCreds"];
function BreweryDBFactory($q, $http, brewerydbCreds) {
  let getBeerData = () => {
    return $q((resolve, reject) => {
      $http
        .get(`http://api.brewerydb.com/v2/?key=${brewerydbCreds.apiKey}`)
        .then(beerData => {
          resolve (beerData);
        })
        .catch(error => {
          reject (error);
        });
    });
  };
  return { getBeerData };
}
