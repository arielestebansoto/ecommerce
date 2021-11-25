import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { logRequest, registerRequest } from '../../actions/userActions'

import './style.scss'

import { toast } from '../../utils/toast'

const mapDispatchToProps = {
    registerRequest,
    logRequest,
}
const mapStateToProps = ({ shoppingCartReducer }) => {
    return { shoppingCartReducer }
}

export const FormRegister = withRouter(connect(mapStateToProps, mapDispatchToProps)( (props) => {
    const [ form, setForm ] = React.useState({})

    const handleChange = (event) => {
        if(event.target.name === 'tou') {
            setForm({ 
                ...form,
                [event.target.name]: event.target.checked
            })
        } else {
            setForm({
                ...form,
                [event.target.name]: event.target.value
            })
        }
    }

    const handleSubmit = (event) => {
        console.log(form)
        event.preventDefault()

        const { firstName, lastName, email, password, tou } = form

        if (firstName && lastName && email && password && tou ) {
            props.registerRequest(form)
            props.logRequest(true)

            if (props.shoppingCartReducer.cart.length > 0) {
                props.history.push('/shoppingcart')
            } else {
                props.history.push('/')
            }
        } else {
            toast('pleas enter all data')
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="FormContainer col 
                    s12
                    m10 offset-m1
                    l8 offset-l2
                    z-depth-2 white"
                >
                    <h6>Register for NOTbuy awesome products</h6>    

                    <form 
                        onSubmit={handleSubmit}
                    >
                        <div className="row">
                            <div className="input-field col s12 m6"
                            >
                                <input 
                                    id="first_name" 
                                    name="firstName"
                                    type="text" 
                                    className="validate"
                                    onChange={handleChange} 
                                />
                                <label htmlFor="first_name" className="active">First Name</label>
                            </div>
                            <div className="input-field col s12 m6">
                                <input 
                                    id="last_name" 
                                    name="lastName"
                                    type="text" 
                                    className="validate" 
                                    onChange={handleChange} 
                                />
                                <label htmlFor="last_name" className="active">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 m6">
                                <input 
                                    id="email" 
                                    name="email"
                                    type="email" 
                                    className="validate" 
                                    onChange={handleChange} 
                                />
                                <label htmlFor="email" className="active">Email</label>
                            </div>
                            <div className="input-field col s12 m6">
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
                            <div className="col">
                                <span>
                                Tu clave debe tener entre 6 y 20 caracteres. No incluyas tu nombre, apellido o e-mail, ni caracteres idénticos consecutivos.
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <label>
                                <input 
                                    name="tou"
                                    type="checkbox"
                                    onChange={handleChange}
                                />
                                <span>Acepto los <strong>Términos y Condiciones</strong> y autorizo el uso de mis datou de acuerdo con la <strong>Declaración de Privacidad</strong></span>
                            </label>
                        </div>
                        <div className="row">
                                <button 
                                    className="waves-effect waves-light btn blue darken-2"
                                    type="submit"
                                >
                                    Register
                                </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}))