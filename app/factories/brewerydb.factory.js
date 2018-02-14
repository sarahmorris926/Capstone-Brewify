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
  let getBeerNames = () => {
    return $q.all((resolve, reject) => {
      $http
      .get(`https://evening-river-37839.herokuapp.com/api/brewerydb/beers/?key=${brewerydbCreds.apiKey}&p=1`)
      .then(beerNames => {
        resolve (beerNames);
      })
      .catch(error => {
        reject(error);
      });
      $http
      .get(`https://evening-river-37839.herokuapp.com/api/brewerydb/beers/?key=${brewerydbCreds.apiKey}&p=2`)
      .then(beerNames => {
        resolve (beerNames);
      })
      .catch(error => {
        reject(error);
      });
      $http
      .get(`https://evening-river-37839.herokuapp.com/api/brewerydb/beers/?key=${brewerydbCreds.apiKey}&p=3`)
      .then(beerNames => {
        resolve (beerNames);
      })
      .catch(error => {
        reject(error);
      });
      $http
      .get(`https://evening-river-37839.herokuapp.com/api/brewerydb/beers/?key=${brewerydbCreds.apiKey}&p=4`)
      .then(beerNames => {
        resolve (beerNames);
      })
      .catch(error => {
        reject(error);
      });
      $http
      .get(`https://evening-river-37839.herokuapp.com/api/brewerydb/beers/?key=${brewerydbCreds.apiKey}&p=5`)
      .then(beerNames => {
        resolve (beerNames);
      })
      .catch(error => {
        reject(error);
      });
    });
  };
  return {getBeerStyles, getBeerNames};
});


