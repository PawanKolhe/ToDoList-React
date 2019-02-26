import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1 style={headerTitle}>ToDo List</h1>
            <div style={linkContainerStyle}><Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/about'>About</Link></div>
        </header>
    )
}

const linkContainerStyle = {
    color: '#BDC3C7',
    padding: '20px'
}

const linkStyle = {
    textDecoration: 'none',
    color: '#BDC3C7'
}

const headerStyle = {
    textAlign: 'center'
}

const headerTitle = {
    color: '#bdc3c7',
    marginBottom: '0px'
}

export default Header;