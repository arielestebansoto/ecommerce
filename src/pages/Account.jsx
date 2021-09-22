import React from 'react'
import { connect } from 'react-redux'

import Header from '../components/Header'

const Account = (props) => {
    const user = Object.keys(props.userReducer)
    console.log(user)
    return <>
        <Header />
        <div className="container">
            <div className="row">
                <div className="col">
                    { user.map((info, index) => <h6 key={index}>{info}</h6>)}
                </div>
            </div>
        </div>
    </>
}

const mapStateToProps = ({userReducer}) => { return {userReducer}}

export default connect(mapStateToProps)(Account)
