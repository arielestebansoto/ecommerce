import React from 'react'

import './style.scss'

import { connect } from 'react-redux'
import { logRequest, loginRequest } from '../../actions/userActions'
import { withRouter, Link } from 'react-router-dom'
import { toast } from '../../utils/toast'

const mapDispatchToProps = {
    loginRequest,
    logRequest,
}

const mapStateToProps = ({ shoppingCartReducer }) => {
    return { shoppingCartReducer }
}

export const FormLogin =  withRouter(connect(mapStateToProps, mapDispatchToProps)( (props) => {
    const [ form, setForm ] = React.useState({})
    
    const handleChange = (event) => {
        setForm({ 
            ...form,
            [event.target.name]: event.target.value 
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (form.email && form.password) {
            props.loginRequest(form)
            props.logRequest(true)
            console.log(props.shoppingCartReducer)
            if (props.shoppingCartReducer.cart.length > 0) {
                props.history.push('/shoppingcart')
            } else {
                props.history.push('/')
            }
        } else {
            toast('please enter all data')
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="FormContainer col 
                    s10 offset-s1
                    m8 offset-m2
                    l6 offset-l3 
                    z-depth-2 white"
                >
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <h5>Hi! please enter your email and password</h5>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input 
                                    id="email"
                                    name="email" 
                                    type="email" 
                                    className="validate" 
                                    onChange={handleChange}
                                />
                                <label htmlFor="email" className="active">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input 
                                    id="password"
                                    name="password" 
                                    type="password" 
                                    className="validate" 
                                    onChange={handleChange}
                                />
                                <label htmlFor="password" className="active">Password</label>
                            </div>
                        </div>
                        <div className="row">
                                <button 
                                    className="waves-effect waves-light btn blue darken-2"
                                    type="submit"
                                >
                                    Login
                                </button>
                        </div>
                    </form>
                    <div className="row center">
                        <Link to="/register" >
                            <button className="btn-flat blue-text">Don't have acount? Register</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}))
