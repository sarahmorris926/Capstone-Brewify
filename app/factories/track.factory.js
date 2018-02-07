"use strict";
const angular = require('angular');

angular.module("BrewifyApp").factory('Track', TrackFactory);
TrackFactory.$inject = ['Spotify'];
function TrackFactory(Spotify) {
    class Track {
        constructor(trackObj) {

            // bring in all existing properties on trackObj and put them on `this`
            Object.assign(this, trackObj);

            this.displayArtists = this.artists.map(artist => {
                return artist.name;
            });

            console.log(this);

            Spotify.getTrackAudioFeatures(trackObj.id).then(data => {
                console.log('track', data);
            });

        }
    }

    return Track;
}
