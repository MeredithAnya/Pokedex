var React = require('react'),
    PokeStore = require('../../stores/pokemon');

var PokemonDetail = React.createClass ({

  getInitialState: function () {
     var id = parseInt(this.props.params.pokemonid);
     return { pokemon: PokeStore.find(id) };
  },

  getStateFromStore: function () {
    var id = parseInt(this.props.params.pokemonid);
    this.setState({pokemon: PokeStore.find(id)});
  },
  componentDidMount: function(){
    var pokeToken = PokeStore.addListener(this.getStateFromStore);
  },

  componentWillReceiveProps: function (newProps) {
    var pokemonid = parseInt(newProps.params.pokemonid);
    var pokemon = PokeStore.find(pokemonid);
    this.setState({ pokemon: pokemon});
  },


  render: function(){
    if (typeof this.state.pokemon === 'undefined'){
      return <div></div>;
    } else {
      return (
         <div> 
          <div className="pokemon-detail-pane">
            <div className="detail">
              <img src={this.state.pokemon.image_url}/>
              <li>{this.state.pokemon.name}</li>
              <li>{this.state.pokemon.attack}</li>
              <li>{this.state.pokemon.defense}</li>
              <li>{this.state.pokemon.moves}</li>
            </div>
          </div>
          {this.props.children}
        </div>



      );
    }
  }

});

module.exports = PokemonDetail;
