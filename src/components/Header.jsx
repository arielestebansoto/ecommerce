import React from 'react'
import { Link } from 'react-router-dom'
import { Sidenav } from 'materialize-css'
import  SearchBar  from './SearchBar'
import SendTo from './SendTo'

import '../assets/styles/components/Header.scss'

const Header = () => {
        let options = {
            edge: 'left',
            onOpenStart: false,
        }
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
      });

return (
    <div>
            <nav>
                <div className="nav-wrapper nav-fixed blue darken-2 row">
                    <div className="col s2">
                        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    </div>
                    <div className="col s8">
                        <SearchBar />
                    </div>
                    <div className="col s2">
                        <Link to="/cart">
                            <i className="material-icons">shopping_cart</i>
                        </Link>
                    </div>
                </div>
            </nav>
            <SendTo />

        <ul id="slide-out" className="sidenav">
            <li><div className="user-view">
            <div className="background">
                <img src="images/office.jpg" />
            </div>
            <a href="#user"><img className="circle" src="images/yuna.jpg" /></a>
            <a href="#name"><span className="white-text name">John Doe</span></a>
            <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
            </div></li>
            <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
            <li><a href="#!">Second Link</a></li>
            <li><div className="divider"></div></li>
            <li><a className="subheader">Subheader</a></li>
            <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>
    </div>
    )
}

export default Header