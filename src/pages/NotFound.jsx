import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
    <div className="NotFound container">
        <h5>Page Not Found</h5>
        <Link to='/'>Return to Home</Link>
    </div>
)

export default NotFound