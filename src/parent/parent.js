
import React from 'react';

import Child1 from './child1/child1';

class Parent extends React.Component {

    constructor(props) {
        super(props);
    }
    // HW1: Learn about super(props)
    // HW2: Learn about JSON

    state = {
        data: "message sent to child",
        inputValue: "blank"
    }

    render () {
        return (
            <>
                <h2>Parent</h2>
                <input value={this.state.inputValue}></input>
                <Child1 inputValue={this.state.inputValue} />
            </>
        )
    }
}

export default Parent;
