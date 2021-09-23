import React from 'react'
import '../assets/styles/components/Form.scss'
import { connect } from 'react-redux'
import { logRequest, loginRequest } from '../actions/userActions'
import { withRouter, Link } from 'react-router-dom'

class FormLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
        this.props.loginRequest(this.state)
        this.props.logRequest(true)
        this.props.history.push('/')
    }
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="FormContainer col 
                            s10 offset-s1
                            m8 offset-m2
                            l6 offset-l3 
                            z-depth-2 white"
                        >
                            <form onSubmit={this.handleSubmit}>
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
                            <div className="row center">
                                <Link to="/register" >
                                    <button className="btn-flat blue-text">Don't have acount? Register</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    } 
}
const mapDispatchToProps = {
    loginRequest,
    logRequest,
}
export default withRouter(connect(null, mapDispatchToProps)(FormLogin))
