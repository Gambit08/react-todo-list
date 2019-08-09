import React, {Component} from 'react';
import uuid from 'uuid'
import './App.css';
import Todos from './components/Todos';
import Navbar from './components/layouts/Navbar'
import AddTodo from './components/AddTodo'

class App extends Component{

    constructor(props){
      super(props);
      console.log('hey, in App.js');
      this.state = {
        todos: [{
        id: 1, 
        title: 'Clean Room',
        ticked: false
      },
      {
        id: 2, 
        title: 'Make breakfast',
        ticked: false
      },
      {
        id: 3, 
        title: 'Clean utensils',
        ticked: false
      },
      {
        id: 4, 
        title: 'Study',
        ticked: false
      }
    ]
  };

    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTask = this.addTask.bind(this);
    }

    toggleCheckbox(id){
      this.setState({
        todos: this.state.todos.map((todo)=>{
          if(todo.id === id){
            todo.ticked = !todo.ticked;
          }
          return todo;
        })
      });
    }

    deleteTodo(id){
      this.setState({
        todos: this.state.todos.filter((todo)=>{
          return !(todo.id === id)
        })
      });
    }
    
    addTask(task){
      const todo = {
        id:uuid(),
        title : task,
        ticked : false
      }
     this.state.todos.push(todo);
     this.setState({
       todos: [...this.state.todos]
     }); 
    }

    render(){
      return (
        <div style={container}>
            <Navbar />
            <AddTodo addTask={this.addTask}/>
            <Todos todos={this.state.todos} toggleCheckbox={this.toggleCheckbox} deleteTodo={this.deleteTodo}/> {/*Name of component always starts with capital letter*/}
        </div>
      );
    }
}

const container = {
  marginLeft: '40px',
  marginRight: '40px'
}

export default App;
