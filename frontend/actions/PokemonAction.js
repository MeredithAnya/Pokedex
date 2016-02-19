var AppDispatcher = require('../dispatcher/dispatcher'),
    PokemonConstants = require('../constants/PokemonConstants'),
    PokemonApi = require('../util/apiUtil');

var PokemonActions = {

  receiveAllPokemons: function (pokemons) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  }

};

module.exports = PokemonActions;
