import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Form.scss'

const FormRegister = () => (
        <div className="row z-depth-2 Form">
            <form className="col s12 m10 offset-m1 l8 offset-l2">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="first_name" type="text" className="validate" />
                        <label htmlFor="first_name" className="active">First Name</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="last_name" type="text" className="validate" />
                        <label htmlFor="last_name" className="active">Last Name</label>
                    </div>
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
                    <div className="col">
                        <span>
                        Tu clave debe tener entre 6 y 20 caracteres. No incluyas tu nombre, apellido o e-mail, ni caracteres idénticos consecutivos.
                        </span>
                    </div>
                </div>
                <div className="row">
                    <label>
                        <input type="checkbox" />
                        <span>Acepto los <strong>Términos y Condiciones</strong> y autorizo el uso de mis datos de acuerdo con la <strong>Declaración de Privacidad</strong></span>
                    </label>
                </div>
                <div className="row">
                    <Link to="/">
                        <button 
                            className="waves-effect waves-light btn blue darken-2"
                            type="submit"
                            >Continuar</button>
                    </Link>
                </div>
            </form>
        </div>
)

export default FormRegister