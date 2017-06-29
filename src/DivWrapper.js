(function(){
  var div, createReactClass;
  div = require('react').DOM.div;
  createReactClass = require('create-react-class');
  module.exports = createReactClass({
    getDefaultProps: function(){
      return {
        className: "",
        onHeightChange: function(){}
      };
    },
    render: function(){
      return div({
        className: this.props.className,
        ref: 'dropdown'
      }, this.props.children);
    },
    componentDidMount: function(){
      this.props.onHeightChange(this.refs.dropdown.offsetHeight);
    },
    componentDidUpdate: function(){
      this.props.onHeightChange(this.refs.dropdown.offsetHeight);
    },
    componentWillUnmount: function(){
      this.props.onHeightChange(0);
    }
  });
}).call(this);
