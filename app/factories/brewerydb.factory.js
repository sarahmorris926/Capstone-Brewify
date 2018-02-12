"use strict";

const angular = require("angular");

angular.module("BrewifyApp").factory("BreweryDB", BreweryDBFactory);
BreweryDBFactory.$inject = ["$q", "$http", "brewerydbCreds"];
function BreweryDBFactory($q, $http, brewerydbCreds) {
  let getBeerStyles = () => {
    return $q((resolve, reject) => {
      $http
        .get(`http://api.brewerydb.com/v2/styles/?key=603678d034663dbe732e79930c90a6e7`)
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
