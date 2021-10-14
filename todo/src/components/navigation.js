import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    const navStyle = {
        backgroundColor: '#e3f2fd',
        fontSize:30
    }
    return(
        <div style={navStyle}>
            <nav class="navbar navbar-light">
            <Link to= "/todo">ToDo's</Link>
            <Link to= "/">Add New Task</Link> 
        </nav>       
        </div>
        
    )
}

export default Navigation