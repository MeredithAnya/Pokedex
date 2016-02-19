var React = require('react'),
    ToyStore = require('../../stores/toystore.js');

var ToyDetail = React.createClass({

  getInitialState: function(){
    var toy = parseInt(this.props.params.toyid);
    return {toy: ToyStore.find(toy)};
  },



  render: function(){
    debugger;
    return <div />;
  }

});

module.exports = ToyDetail;
