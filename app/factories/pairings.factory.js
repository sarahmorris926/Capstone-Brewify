"use strict";

const angular = require("angular");

angular.module("BrewifyApp").factory("Pairings", function($q, $http) {

  let getPairings = () => {
    return $q((resolve, reject) => {
      $http
        .get("https://brewify-capstone.firebaseio.com/pairings.json")
        .then(genrePairings => {
          resolve(genrePairings.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  let addStyleIds = (styleIdCollection) => {
    return $q((resolve, reject) => {
      $http
      .post("https://brewify-capstone.firebaseio.com/.json", JSON.stringify(styleIdCollection))
      .then(styleIds => {
        resolve(styleIds);
      })
      .catch(error => {
        reject(error);
      });
    });
  };

  let getStyleIdNumber = (FBbeerStyle) => {
    return $q((resolve, reject) => {
      $http
      .get(`https://brewify-capstone.firebaseio.com/-L5QR8SMSzYoIPzvDNHH.json?orderBy="name"&equalTo="${FBbeerStyle}"`) //order by & equal to in firebase
      .then(styleIdNumber => {
        resolve(styleIdNumber);
      })
      .catch(error => {
        reject(error);
      });
    });
  };
  return { getPairings, addStyleIds, getStyleIdNumber };
});


