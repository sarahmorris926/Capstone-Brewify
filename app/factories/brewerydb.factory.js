"use strict";

const angular = require("angular");

angular.module("BrewifyApp").factory("BreweryDB", BreweryDBFactory);
BreweryDBFactory.$inject = ["$q", "$http", "brewerydbCreds"];
function BreweryDBFactory($q, $http, brewerydbCreds) {
  let getBeerData = () => {
    $http
      .get(`http://api.brewerydb.com/v2/?key=${brewerydbCreds.apiKey}`)
      .then(beerData => {
        return beerData;
      })
      .catch(error => {
        return error;
      });
  };
  return { getBeerData };
}
