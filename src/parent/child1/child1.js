
import React from 'react';


class Child1 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }

        // binding
        this.increaseCounter = this.increaseCounter.bind(this);
        
    }

    increaseCounter() {
        var state = {
            counter: this.state.counter + 1
        }
        this.setState(state);   
    }

    render() {
        return (
            <>
                <input value={this.props.inputValue}></input>
                <button onClick={this.increaseCounter} >Click Me {this.state.counter}!</button>
            </>
        )
    }
}

export default Child1;
