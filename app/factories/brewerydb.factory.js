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
  let getBeerNames = (pageNumber, styleIdNumber) => {
    return $q((resolve, reject) => {
      $http
      .get(`https://evening-river-37839.herokuapp.com/api/brewerydb/beers/?key=${brewerydbCreds.apiKey}&p=${pageNumber}&styleId=${styleIdNumber}`)
      .then(beers => {
        resolve (beers);
      })
      .catch(error => {
        reject(error);
      });
    }); 
  };
  
  return {getBeerStyles, getBeerNames};
});

