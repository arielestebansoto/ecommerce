import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/pages/NotUserRegister.scss'
import HeaderParcial from '../components/HeaderParcial'

export const NotUserRegister = () => (
    <> 
        <HeaderParcial />
        <div className="container-fluid">
            <div className="row">
                <div className="NotUserRegister col 
                    s10 offset-s1
                    m8 offset-m2
                    l6 offset-l3
                    z-depth-2 white"
                >
                    <h5>You are not loged!</h5>
                    <h6>please <Link to='/Login'>Login</Link></h6>
                    <h6>or back to <Link to='/'>Home</Link></h6>
                </div>
            </div>
        </div>
    </>
)