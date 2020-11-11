import React from 'react'
import './todo-form.css'


let newId = 0
export default class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            value: ''
        
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleSubmit(event) {
        alert('A task was submitted: ' + this.state.todos);
        event.preventDefault();
        let todos = [...this.state.todos]
        this.state.todos.push({todos:this.state.value, id:newId++})

        this.setState({todos:todos})


        

      }



    render() {
        return (
            <div className="todos-box">
                <form onSubmit={this.handleSubmit}>
                <label>
                    <h3>Add Task:</h3>
                    <input 
                    type="text"
                    value={this.state.value} 
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit} />
                </label>
                <input type="submit" value="Add" />
                </form>
                <h3>My Tasks:</h3>
                <ul>
                    {this.state.todos.map((todo) =>{
                        return (<li>{todo.value}</li>)
                    })}
                    
                </ul>
            </div>
        );
    }



}