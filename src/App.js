import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import ToDos from './components/ToDos';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import uuid from 'uuid';
import About from './components/pages/About';
// import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Do Homework',
        completed: false
      },
      {
        id: 2,
        title: 'Take a walk',
        completed: false
      },
      {
        id: 3,
        title: 'Code for 1 hour',
        completed: false
      }
    ]
  }

  /*componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({
      todos: res.data
    }));
  }*/

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todoitem => {
      if(todoitem.id === id){
        todoitem.completed = !todoitem.completed;
      }
      return todoitem;
    }) });
  }

  // Add ToDo item
  addTodo = (title) => {
    const newToDoItem = {
      id : uuid.v4(),
      title,
      completed: false
    }
    this.setState({
      todos: [newToDoItem ,...this.state.todos]
    });
  }

  // Delete ToDo item
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todoItem => 
      todoItem.id !== id
    )] });
  }

  render() {
    return (
      <Router>
        <div className="App">
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddToDo addtodo={this.addTodo} />
                <ToDos todos={this.state.todos} delTodo={this.delTodo} markcomplete={this.markComplete} />
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
              
        </div>
      </Router>
    );
  }
}

export default App;
