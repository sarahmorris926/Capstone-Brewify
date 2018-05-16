# Front End Capstone: Brewify
This is my front-end capstone project for Nashville Software School. The app allows the user to search for an artist they're listening to, and get a few beer recommendations to pair with their music. It also allows for opposite search (search for the beer you're drinking, and get back a few artist recommendations).

## Getting Started

First, you'll need to clone the project to your machine:

```
$ git clone https://github.com/sarahmorris926/Capstone-Brewify.git
```

Next, you need to run "npm install" in your terminal and start two servers: one as a local server, and one node server. The Node server code can be found [here](https://github.com/sarahmorris926/capstone-proxy-server). You will need to clone it or fork it and `cd` into the file you put it in. The Node server can be started using this command in the terminal: 

```
$ node server.js
```

After you start the node server, which should be on `PORT 6060` which should not intervene with the server you start for the capstone project, which if forked, will be `PORT 8080`. 

You should be able to go to your local server on your browser and view the project. You will need to click the "Spotify Login" button first, as Spotify requires authentication in order to search for any artists.

## Using

![](/images/SpotifyLogin.png)
1. Click the "Spotify Login" button in order to begin searching for artists
2. Type an artist's name and click the "Search" button
3. Click on the artist you are listening to (if you're unsure if it's the right artist, click the play icon to the right of the name to bring up their artist page on Spotify)
4. Get your beer type and click "Get Beers" to get specific recommendations! 
5. Click on the specific beers to get a description (if provided by BreweryDB API)
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


