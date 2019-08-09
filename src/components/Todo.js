import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Todo extends Component {
    
    constructor(props){
        super(props);
        console.log('hey, in Todo.js');
    }

    getStyle(){

      if(!this.props.todo.ticked){
        return {
          textDecoration: 'none',
          color: 'red'
        }
      }
      else if(this.props.todo.ticked){
       return {
          textDecoration: 'line-through',
          color: 'blue'
        }
      }
    }

    
    render() {
      const {id, title} = this.props.todo;
      //const returnVal = this.props.toggleCheckbox;
      //console.log(returnVal);
      return (
                    
            <p style={this.getStyle()}>
              <input type ="checkbox" onChange={()=>this.props.toggleCheckbox(id)}/>
                    {title}
              <button onClick={()=>this.props.deleteTodo(id)} style={styleDelButton}>X</button>      
            </p>
            
      );
    }
}

const styleDelButton = {
  color: 'white',
  backgroundColor: 'red',
  float: 'right',
  padding: '2px',
  border: '1px solid black',
  borderRadius: '50%'
}

//onChange ={this.props.toggleCheckbox.bind(this,id)}
Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleCheckbox: PropTypes.func.isRequired
}

export default Todo;