import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

import { SideNav } from '../SideNav'
import { SideNavTrigger } from '../SideNavTrigger'

export const HeaderParcial = () => (
    <>
        <div className="HeaderParcial blue darken-2">
            <div className="container">
                <div className="row">
                    <div className="col s1 ">
                        <SideNavTrigger />
                    </div>
                    <div className="col s11">
                        <Link to='/' className="white-text">Ecommerce</Link>
                    </div>
                </div>
            </div>
        </div>
        <SideNav />
    </>
)
