var React = require('react'),
    ReactDOM = require('react-dom'),
    PokemonApi = require('./util/apiUtil'),
    PokemonActions = require('./actions/PokemonAction'),
    PokemonsIndex = require('./components/pokemons/pokemonsIndex'),
    App = require('./components/app'),
    PokemonConstants = require('./constants/PokemonConstants'),
    PokeStore = require('./stores/pokemon'),
    PokemonDetail = require('./components/pokemons/pokemonDetail'),
    ToyDetail = require('./components/toys/toyDetail'),
    Router = require('react-router').Router,
    Route = require('react-router').Route;

var routes = (
  <Route component={App} path="/">
    <Route component={PokemonDetail} path="pokemon/:pokemonid">
      <Route component={ToyDetail} path="toys/:toyid"/>
    </Route>
  </Route>

);

document.addEventListener("DOMContentLoaded", function() {
  var root = document.getElementById('root');
  ReactDOM.render(<Router>{routes}</Router>, root);
});
