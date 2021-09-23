import React from 'react'
import { connect } from 'react-redux'
import '../assets/styles/components/Form.scss'

const FormAccount = (props) => {
    const { firstName, lastName, email } = props.userReducer
    
    return(
        <div className="container-fluid">
            <div className="row">
                <div  className="FormContainer col 
                        s12
                        m10 offset-m1
                        l8 offset-l2
                        z-depth-2 white">
                    <form>
                        <div className="row">
                            <div className="input-field col s6">
                                <input disabled defaultValue={firstName} id="first_name" type="text" className="validate" />
                                <label className="active" htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input disabled defaultValue={lastName} id="last_name" type="text" className="validate" />
                                <label className="active" htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input disabled defaultValue={email} id="email" type="email"  className="validate" />
                                <label className="active" htmlFor="email">Email</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({userReducer}) => { return {userReducer}}

export default connect(mapStateToProps)(FormAccount)