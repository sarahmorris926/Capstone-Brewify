"use strict";
const angular = require('angular');

angular.module('BrewifyApp').factory('Artist', ArtistFactory);
ArtistFactory.$inject = ['Spotify'];
function ArtistFactory(Spotify) {
    class Artist {
        constructor(artistObj) {
            Object.assign(this, artistObj);
        }
    }

    return Artist;
}
