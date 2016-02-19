var React = require('react');
var PokeStore = require('../../stores/pokemon'),
    PokemonApi = require('../../util/apiUtil'),
    PokemonIndexItem = require('./PokemonIndexItem');

var PokemonsIndex = React.createClass({

  getInitialState: function(){
    return({
      pokemons: PokeStore.all()
    });
  },

  componentDidMount: function () {
    this.pokeToken = PokeStore.addListener(this.handleChange);
    PokemonApi.fetchAllPokemons();

  },

  componentWillUnmount: function () {
    this.pokeToken.remove();
  },

  handleChange: function () {
    this.setState({
      pokemons: PokeStore.all()
    });
  },

  render: function(){
    var names = this.state.pokemons.map(function (pokemon, index) {
      return <PokemonIndexItem
                key={index}
                id={pokemon.id}
                name={pokemon.name}
                poke_type={pokemon.poke_type}/>;
            });

    return (
      <ul className="pokemon-index-pane">
        {names}
      </ul>
    );
  }
});

module.exports = PokemonsIndex;
