import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.SideNav');
        var instances = M.Sidenav.init(elems, options);
    });
    let options = {
        edge: 'left',
        closeOnClick: true,
    }

    return (
        <ul id="slide-out" className="SideNav sidenav">
                <li>
                    <div className="user-view">
                        <div className="background blue lighten-4"> </div>
                        <a href="#user"><img className="circle" src="https://www.gravatar.com/avatar/" /></a>
                        <a href="#name"><span className="white-text name">user.name</span></a>
                        <a href="#email"><span className="white-text email">user.email</span></a>
                    </div>
                </li>
                <li className="sidenav-close"><Link to="/login"><i className="material-icons">person</i>Login</Link></li>
                <li className="sidenav-close"><Link to="/"><i className="material-icons">home</i>Home</Link></li>
                <li><div className="divider"></div></li>
            </ul>
    )
}

export default SideNav