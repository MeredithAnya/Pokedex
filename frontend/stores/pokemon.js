var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var PokeStore = new Store(AppDispatcher);

var _pokemons = {};

PokeStore.all = function(){
  return Object.keys(_pokemons).map(function(key){
    return _pokemons[key];
  });
};


PokeStore.resetPokemons = function (pokemons) {
  _pokemons = {};
  pokemons.forEach( function (pokemon) {
    _pokemons[pokemon.id] = pokemon;
  });
};

PokeStore.find = function(id){
  var poke;
  PokeStore.all().forEach( function(pokemon){
    if (pokemon.id === id){
      poke = pokemon;
    }
  });

  return poke;
};


PokeStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "POKEMONS_RECEIVED":
      this.resetPokemons(payload.pokemons);
      PokeStore.__emitChange();
      break;
  }
};

module.exports = PokeStore;
