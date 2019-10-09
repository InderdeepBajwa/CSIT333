
import React from 'react'

class StateTest extends React.Component {

    // Initializing the constructor
    constructor(props) {
        super(props);

        // Establishing a state for this

        this.state = {
            input_is: "blank",
            number_of_clicks: 0
            // TODO: come back later
        }

        this.changeTheNumber = this.changeTheNumber.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    // Method: Increments this.state.number_of_clicks in the state
    // And updates the component dependents
    changeTheNumber() {
        
        var stateVar = {
            number_of_clicks: this.state.number_of_clicks + 1
        }

        this.setState(stateVar);
    }

    // Method: to get value from the input field
    handleInput(c) {

        var changeState = {
            input_is: c.target.value
        }

        this.setState(changeState);
    }

    render() {
        return (
            <>
                <h1>{this.state.input_is}</h1>

                <input value={this.state.number_of_clicks}></input>
                <button onClick={this.changeTheNumber}>Click me {this.state.number_of_clicks}!</button>


                <hr />

                <input onChange={this.handleInput}></input>
                <input value={this.state.input_is}></input>

            </>
        )
    }
}

export default StateTest;