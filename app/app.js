"use strict";
const angular = require("angular");
const ngRoute = require("angular-route");
const angular_spotify = require("angular-spotify");

angular
  .module("BrewifyApp", ["ngRoute", "spotify"])
  .config($routeProvider => {
    $routeProvider.when("/", {
      templateUrl: "app/routes/home/home.html",
      controller: "HomeCtrl"
    });
  })
  .config(SpotifyProvider => {
    SpotifyProvider.setClientId("f344405cfc06454d9d1f452c2f32b32d");
    SpotifyProvider.setRedirectUri("http://localhost:8080/#!/callback");
    SpotifyProvider.setScope(
      "user-read-private playlist-read-private playlist-modify-private playlist-modify-public user-top-read user-read-recently-played"
    );
    SpotifyProvider.setAuthToken("b491542892d54f9481944a8b916ac825");
  });
