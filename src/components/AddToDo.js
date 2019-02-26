import React, { Component } from 'react'

export class AddToDo extends Component {
    state = {
        title: ''
    }

    onChange = (event) => this.setState({
        [event.target.name]: event.target.value
    });

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addtodo(this.state.title);
        this.setState({
            title: ''
        });
    }
    
    render() {
        return (
        <form style={formStyle} onSubmit={this.onSubmit}>
            <input
                type='text' 
                name='title' 
                placeholder='+ Add item...' 
                style={inputStyle} 
                value={this.state.title} 
                onChange={this.onChange}
            />
            <input 
                type='submit'
                value='Add'
                className='btn'
                style={btnStyle}
            />
        </form>
        )
    }
}

const formStyle = {
    display: 'flex'
}

const inputStyle = {
    flex: '1',
    padding: '10px',
    border: '1px solid #BDC3C7'
}

const btnStyle = {
    padding: '10px 20px'
}

export default AddToDo
