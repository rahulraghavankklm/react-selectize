{DOM:{svg}} = require \react
create-react-class = require \create-react-class
{find-DOM-node} = require \react-dom

# set the focusable attribute to false, this prevents having to press the tab key multiple times in IE
module.exports = create-react-class do

    # render :: () -> ReactElement
    render: -> svg @props

    # component-did-mount :: () -> Void
    component-did-mount: !->
        find-DOM-node @ .set-attribute \focusable, false