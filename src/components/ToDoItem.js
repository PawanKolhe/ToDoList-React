import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ToDoItem extends Component {
    getListStyle = () => {
        return {
            margin: '0px',
            textDecoration: this.props.todo.completed ? 'line-through': 'none'
        }
    }

    render() {
        // destructure
        const {id, title} = this.props.todo;

        return (
        <div className='ToDoItem' style={itemStyle}>
            <p style={this.getListStyle()}>
                <input type='checkbox' onChange={this.props.markcomplete.bind(this, id)}/>
                {' ' + title}
            </p>
            <button onClick={this.props.delTodo.bind(this, id)} style={btnStyleCross}>✕</button>
        </div>
        )
    }
}

// PropTypes
ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const itemStyle = {
    background: '#f4f4f4',
    padding: '13px',
    borderBottom: '1px dotted #ccc',
    display: 'flex',
}

const btnStyleCross = {
    background: '#FE8484',
    color: '#ffffff',
    padding: '2px 6px 4px 6px',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default ToDoItem
