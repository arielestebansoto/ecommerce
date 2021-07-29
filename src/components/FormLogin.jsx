import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/Form.scss'

const FormLogin = () => (
        <div className="row z-depth-2 Form">
            <form className="col s12 m10 offset-m1 l8 offset-l2">
                <div className="row">
                    <h5>Hi! please enter your email and password</h5>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email" className="active">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate" />
                        <label htmlFor="password" className="active">Password</label>
                    </div>
                </div>
                <div className="row">
                    <Link to="/">
                        <button 
                            className="waves-effect waves-light btn blue darken-2"
                            type="submit">
                                Login
                        </button>
                    </Link>
                </div>
            </form>
        </div>
)

export default FormLogin
