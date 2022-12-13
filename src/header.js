

// import React from 'react'

function header(props) {
  return (
    <div>
      <h1>header Componenet</h1>
      <ol>
       <li>{props.item1}</li>
       <li>Python</li>
        <li>React</li>
        <li>angular</li>
      </ol>
    </div>
  )
}

export default header
