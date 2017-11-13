import React from 'react';
import './App.scss';
import PropTypes from 'prop-types'; 
/*export default () => <h1>Hello World</h1>;*/

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { stateData: "init" };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
	    this.setState({stateData: "click"});
	}

	handleClick2 = () => {
    	this.setState({stateData: "click2"});
  	}

    render() {
        return (
            <div className="red">
    		<h1>Red</h1>
    		<h1 className="blue">Blue</h1>
    		<h1>{this.props.name}</h1>
    		<h1 onClick={this.handleClick}>点我</h1>
    		<h1 onClick={this.handleClick2}>点我2</h1>
			<h1>{this.state.stateData}</h1>
    	</div>

        );
    }
}

App.propTypes = {
  nameProp: PropTypes.string.isRequired
};
App.defaultProps = {
  nameProp: ''
};

