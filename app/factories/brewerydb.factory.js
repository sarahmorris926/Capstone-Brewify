"use strict";

const angular = require("angular");

angular.module("BrewifyApp").factory("BreweryDB", BreweryDBFactory);
BreweryDBFactory.$inject = ["$q", "$http", "brewerydbCreds"];
function BreweryDBFactory($q, $http, brewerydbCreds) {
  let getBeerStyles = () => {
    return $q((resolve, reject) => {
      $http
        .get(`http://api.brewerydb.com/v2/styles/?key=${brewerydbCreds.apiKey}`)
        .then(beerStyles => {
          resolve (beerStyles);
        })
        .catch(error => {
          reject (error);
        });
    });
  };
  return { getBeerStyles };
}
