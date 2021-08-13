import React from 'react'
import { connect } from 'react-redux'
import { loginSuccessful, registerRequest } from '../actions'
import { withRouter } from 'react-router'

import '../assets/styles/components/Form.scss'

class FormRegister extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            tou: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        if(event.target.name === 'tou') {
            this.setState({
                [event.target.name]: event.target.checked
            })
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }
    handleSubmit(event) {
        event.preventDefault()
        this.props.registerRequest(this.state)
        this.props.loginSuccessful(true)
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="row z-depth-2 Form">
                <form 
                    className="col s12 m10 offset-m1 l8 offset-l2"
                    onSubmit={this.handleSubmit}
                >
                    <div className="row">
                        <div className="input-field col s12">
                            <input 
                                id="first_name" 
                                name="firstName"
                                type="text" 
                                className="validate"
                                onChange={this.handleChange} 
                            />
                            <label htmlFor="first_name" className="active">First Name</label>
                        </div>
                        <div className="input-field col s12">
                            <input 
                                id="last_name" 
                                name="lastName"
                                type="text" 
                                className="validate" 
                                onChange={this.handleChange} 
                            />
                            <label htmlFor="last_name" className="active">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input 
                                id="email" 
                                name="email"
                                type="email" 
                                className="validate" 
                                onChange={this.handleChange} 
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
                                onChange={this.handleChange} 
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
                                onChange={this.handleChange}
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
        )
    }
}
const mapDispatchToProps = {
    registerRequest,
    loginSuccessful,
}
export default withRouter(connect(null, mapDispatchToProps)(FormRegister))