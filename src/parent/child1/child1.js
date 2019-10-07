
import React from 'react';


class Child1 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <input value={this.props.inputValue}></input>
                
            </>
        )
    }
}

export default Child1;
