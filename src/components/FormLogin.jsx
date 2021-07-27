import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Form.scss'

const FormLogin = () => (
    <div className="container Form">
        <div className="row">
            <form className="col s12 m10 offset-m1 l8 offset-l2">
                <h3>Hola! Ingresá tu email</h3>
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
                            className="waves-effect waves-light btn-large blue darken-2"
                            type="submit">
                                Login
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    </div>
)

export default FormLogin
