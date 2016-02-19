var React = require('react'),
    PokemonsIndex = require('./pokemons/pokemonsIndex');

var App = React.createClass({

  render: function () {
    return (
      <div id="pokedex">
        <PokemonsIndex />
        {this.props.children}
      </div>
    );
  }

});

module.exports = App;
