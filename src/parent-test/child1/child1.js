
import React from 'react'

export default class Child1 extends React.Component {
    constructor(props) {
        super(props);
    }

    counter = 0;

    render () {
        return (
            <div>
                The data from parent is: {this.props.dataFromParent}
                <button name={this.counter}>Click me</button>
            </div>
        )
    }
}
