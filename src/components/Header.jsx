import React from 'react'
import { Link } from 'react-router-dom'
import  SearchBar  from './SearchBar'
import SendTo from './SendTo'
import SideNav from './SideNav'

import '../assets/styles/components/Header.scss'

const Header = () => 
(
    <div>
            <nav>
                <div className="nav-wrapper nav-fixed blue darken-2 row">
                    <div className="col s2">
                        <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
                    </div>
                    <div className="col s8">
                        <SearchBar />
                    </div>
                    <div className="col s2">
                        <Link to="/shoppingcart">
                            <i className="material-icons">shopping_cart</i>
                        </Link>
                    </div>
                </div>
            </nav>
            <SendTo />

        <SideNav />
        
    </div>
    )

export default Header