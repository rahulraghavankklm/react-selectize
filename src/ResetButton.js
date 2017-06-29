(function(){
  var ref$, createFactory, path, createReactClass, SvgWrapper;
  ref$ = require('react'), createFactory = ref$.createFactory, path = ref$.DOM.path;
  createReactClass = require('create-react-class');
  SvgWrapper = createFactory(require('./SvgWrapper'));
  module.exports = createReactClass({
    render: function(){
      return SvgWrapper({
        className: 'react-selectize-reset-button',
        style: {
          width: 8,
          height: 8
        }
      }, path({
        d: "M0 0 L8 8 M8 0 L 0 8"
      }));
    }
  });
}).call(this);
