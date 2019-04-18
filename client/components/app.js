import React, { Component } from 'react';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ''
        }
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
            </div>
        )
    }
}



export default App;