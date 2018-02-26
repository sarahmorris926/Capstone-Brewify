# Capstone-Brewify
This is my front-end capstone project for Nashville Software School. The app allows the user to search for an artist they're listening to, and get a few beer recommendations to pair with their music. It also allows for opposite search (search for the beer you're drinking, and get back a few artist recommendations).

## Getting Started

First, you'll need to clone the project to your machine:

```
$ git clone https://github.com/sarahmorris926/Capstone-Brewify.git
```

Next, you need to run "npm install" in your terminal and start two servers: one as a local server, and one node server. Node server can be started using this command in the terminal: 

```
$ node server.js
```

You should be able to go to your local server on your browser and view the project. You will need to click the "Spotify Login" button first, as Spotify requires authentication in order to search for any artists.

## Built With

* [Spotify API](https://developer.spotify.com/web-api/) - Spotify API for the web
* [Angular-Spotify](https://github.com/eddiemoore/angular-spotify) - Wrapper for the Spotify API
* [Firebase](https://firebase.google.com) - Database for genre/beer style pairings
* [BreweryDB API](www.brewerydb.com/developers/docs) - BreweryDB API for beer styles and beer names
* [Lodash](https://lodash.com/) - Lodash "startCase" feature for search results
* [Heroku](https://www.heroku.com/) - Cloud application service used in this app to create a backend server in order to get data from BreweryDB API
* [Bootstrap](https://getbootstrap.com/) - Used for styling elements on the page

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


