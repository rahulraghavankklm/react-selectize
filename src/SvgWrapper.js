(function(){
  var svg, createReactClass, findDOMNode;
  svg = require('react').DOM.svg;
  createReactClass = require('create-react-class');
  findDOMNode = require('react-dom').findDOMNode;
  module.exports = createReactClass({
    render: function(){
      return svg(this.props);
    },
    componentDidMount: function(){
      findDOMNode(this).setAttribute('focusable', false);
    }
  });
}).call(this);
