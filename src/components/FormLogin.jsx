import React from 'react'
import '../assets/styles/components/Form.scss'

class FormLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: false,
            email: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }
    handleSubmit(event) {
        event.preventDefault()
    }
    render() {
        return (
                <div className="row z-depth-2 Form">
                    <form 
                        className="col s12 m10 offset-m1 l8 offset-l2"
                        onSubmit={this.handleSubmit}
                    >
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
                                <button 
                                    className="waves-effect waves-light btn blue darken-2"
                                    type="submit"
                                >
                                    Login
                                </button>
                        </div>
                    </form>
                </div>
        )
    } 
}

export default FormLogin
