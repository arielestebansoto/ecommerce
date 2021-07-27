import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => (
    <ul id="slide-out" className="sidenav">
            <li>
                <div className="user-view">
                    <div className="background blue lighten-4"> </div>
                    <a href="#user"><img className="circle" src="https://www.gravatar.com/avatar/" /></a>
                    <a href="#name"><span className="white-text name">user.name</span></a>
                    <a href="#email"><span className="white-text email">user.email</span></a>
                </div>
            </li>
            <li><Link to="/login"><i className="material-icons">person</i>Login</Link></li>
            <li><Link to="/"><i className="material-icons">home</i>Home</Link></li>
            <li><Link to="/"><i className="material-icons">shopping_basket</i>Mi shopping</Link></li>
            <li><div className="divider"></div></li>
        </ul>
)

export default SideNav