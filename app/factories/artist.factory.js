"use strict";
const angular = require("angular");

angular.module("BrewifyApp").factory("Artist", function(Spotify) {
  class Artist {
    constructor(artistObj) {
      Object.assign(this, artistObj);
    }
  }
  
  return Artist;

});


