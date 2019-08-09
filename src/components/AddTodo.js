//rce

import React, { Component } from 'react'

class AddTodo extends Component {

    constructor(props){
        super(props);
        this.state = {
            input : ''
        };
        this.updateInputValue = this.updateInputValue.bind(this);
    
    }


    updateInputValue(e){
       this.setState({
           input: e.target.value
       });     
    }

    render() {
        return (
            <div style={{display : 'flex', marginTop:'5px'}}>
               <input type="text" placeholder="Think about the task for today" 
               style={{flex: '1',padding: '10px'}}
               value={this.state.input} 
               onChange={this.updateInputValue}
               />
               <input type="button" value="submit" onClick={()=>this.props.addTask(this.state.input)}/> 
            </div>
        )
    }
}

export default AddTodo;
