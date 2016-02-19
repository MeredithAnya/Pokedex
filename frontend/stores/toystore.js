var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var ToyStore = new Store(AppDispatcher);

var _toys = {};

ToyStore.all = function(){
  return Object.keys(_toys).map(function(key){
    return _toys[key];
  });
};


ToyStore.resetPokemons = function (toys) {
  _toys = {};
  toys.forEach( function (pokemon) {
    _toys[pokemon.id] = pokemon;
  });
};

ToyStore.find = function(id){
  var poke;
  ToyStore.all().forEach( function(pokemon){
    if (pokemon.id === id){
      poke = pokemon;
    }
  });

  return poke;
};


ToyStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "POKEMONS_RECEIVED":
      this.resetPokemons(payload.toys);
      ToyStore.__emitChange();
      break;
  }
};

module.exports = ToyStore;
