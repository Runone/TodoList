import React, { Component } from 'react';
import TodoList from './todo.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            input: '',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (event) => {
        this.setState({input: event.target.value})
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            input: '',
            items: [...this.state.items, this.state.input]
        })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input required value={this.state.input} onChange={this.onChange} />
                    <button>Add Task</button>
                </form>
                <TodoList items={this.state.items}/>
            </div>
        )
    }
}



export default App;