var PokemonActions = require('../actions/PokemonAction');

var PokemonApi = {

  fetchAllPokemons: function(){
    $.get("api/pokemon", {}, function(pokemons){
      PokemonActions.receiveAllPokemons(pokemons);
    });
  }

};

module.exports = PokemonApi;
