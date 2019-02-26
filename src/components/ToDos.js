import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

class ToDos extends Component {
    render() {
        return this.props.todos.map((todoitem) => (
            <ToDoItem key={todoitem.id} todo={todoitem} delTodo={this.props.delTodo} markcomplete={this.props.markcomplete} />
        ));
    }
}

// PropTypes
ToDos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default ToDos;
