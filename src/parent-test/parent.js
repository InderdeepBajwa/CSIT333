
import React from 'react'
import Child2 from './child1/child1'

class ParentTest extends React.Component {

    constructor(props) {
        super(props);
    }
    
    state = { data: "Hello world" }

    render() {
        return (
            <>
                <h2>Parent</h2>
                <hr />
                 <Child2 dataFromParent = {this.state.data} />
            </>
        )
    }
}

export default ParentTest;
