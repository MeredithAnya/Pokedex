var React = require('react'),
    PokemonsIndex = require('./pokemonsIndex'),
    History = require('react-router').History;

var PokemonIndexItem = React.createClass ({
  mixins: [History],

  showDetail: function () {
    
    this.history.push("/pokemon/" + this.props.id);
  },

  render: function () {

    return(
      <li onClick={this.showDetail} className="poke-list-item">{this.props.name}, {this.props.poke_type}</li>
    );

  }

});

module.exports = PokemonIndexItem;
