import React from 'react'
import './Display.css'
function Display({name}) {
    return (
        <div>
    
            <h1 className='title is-large'>Welcome {name}</h1>
        </div>
    )
}

export default Display
