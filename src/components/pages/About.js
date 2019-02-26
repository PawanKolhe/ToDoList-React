import React from 'react'

function About() {
  return (
    <React.Fragment>
        <div style={aboutStyle}>
            <h1>About</h1>
            <p><b>EzToDo v1.0.0</b> <i>by Pawan Kolhe</i></p>
        </div>
    </React.Fragment>
  )
}

const aboutStyle = {
    padding: '0px 20px',
    color: '#8f9599'
}

export default About