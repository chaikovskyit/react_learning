import React from 'react'

export default props => ( 
    <div>
        <hr/>
       <h3>Car name: {props.name}</h3>
       <p>Year: <strong>{props.year}</strong></p>
       { props.children }
       <hr/>
    </div>
)