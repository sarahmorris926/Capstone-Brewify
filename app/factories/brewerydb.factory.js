"use strict";

const angular = require("angular");

angular.module("BrewifyApp").factory("BreweryDB", function($q, $http, brewerydbCreds) {

  let getBeerStyles = () => {
    return $q((resolve, reject) => {
      $http
        .get(`https://evening-river-37839.herokuapp.com/api/brewerydb/styles/?key=${brewerydbCreds.apiKey}`)
        .then(beers => {
          resolve (beers);
        })
        .catch(error => {
          reject (error);
        });
    });
  };
  return {getBeerStyles};
});


