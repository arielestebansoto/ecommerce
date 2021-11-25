import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './style.scss'

import { SearchBar }  from '../SearchBar'
import { SendTo } from '../SendTo'
import { SideNav } from '../SideNav'
import { SideNavTrigger } from '../SideNavTrigger'

const mapStateToProps = ({ shoppingCartReducer }) => {
    return shoppingCartReducer
}

export const Header = connect(mapStateToProps)( (props) => {
    return (
        <>
            <nav className="Navbar blue darken-2">
                <div className="nav-wrapper nav-fixed container">
                    <div className="row">
                        <div className="col s2">
                            <SideNavTrigger />
                        </div>
                        <div className="col s8">
                            <SearchBar />
                        </div>
                        <div className="col s2">
                        <Link to="/shoppingcart">
                            {
                                props.cart.length > 0 ?
                                <i className="material-icons yellow-text">add_shopping_cart</i>
                                : <i className="material-icons">shopping_cart</i>
                                
                            }
                        </Link>
                        </div>
                    </div>
                    <div className="row">
                        <SendTo />
                    </div>
                </div>
            </nav>
            <SideNav />
        </>
    )
})
