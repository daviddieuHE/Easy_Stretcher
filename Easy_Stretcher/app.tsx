declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

    render() {
        return (
            <h1>Welcome to React!!</h1>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));