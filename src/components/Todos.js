import React, { Component } from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'


class Todos extends Component {
    
    constructor(props){
        super(props);
        console.log('hey, in Todos.js');
    }
    
    render(){

      return (
            this.props.todos.map((todo)=>(
                <Todo key={todo.id} todo = {todo} toggleCheckbox={this.props.toggleCheckbox} deleteTodo={this.props.deleteTodo}/>
            ))
      );

    }
}

// PropTypes Validation
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    //toggleCheckbox: PropTypes.func.isRequired
}

export default Todos;
