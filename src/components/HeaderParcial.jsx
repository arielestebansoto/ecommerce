import { Sidenav } from 'materialize-css'
import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/HeaderParcial.scss'

import SideNav from './SideNav'
import SideNavTrigger from './SideNavTriger'

const HeaderParcial = () => (
    <>
        <div className="HeaderParcial blue darken-2">
            <div className="container">
                <div className="row">
                    <div className="col s1 ">
                        <SideNavTrigger />
                    </div>
                    <div className="col s11">
                        <Link to='/' className="white-text">NOCommerce</Link>
                    </div>
                </div>
            </div>
        </div>
        <SideNav />
    </>
)

export default HeaderParcial