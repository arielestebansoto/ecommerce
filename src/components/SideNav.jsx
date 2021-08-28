import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOutRequest } from '../actions'

const SideNav = props => {
    const { user } = props

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.SideNav');
        var instances = M.Sidenav.init(elems, {
            edge: 'left',
            closeOnClick: true,
        });
    });

    function handleLogOut() {
        props.logOutRequest()
    }
    return (
        <ul id="slide-out" className="SideNav sidenav "> 
            <li>
                <div className="user-view">
                    <div className="background blue lighten-4"> </div>
                    <a href="#user"><img className="circle" src="https://www.gravatar.com/avatar/" /></a>
                {
                    user.isLogin 
                        ?
                            <div>
                                <a href="#name"><span className="white-text name">{ user.firstName }</span></a>
                                <a href="#email"><span className="white-text email">{ user.email }</span></a>
                            </div>
                        :
                            <div style={{blockSize: '14px'}}></div>
                }
                </div>
            </li>
            {
                user.isLogin ?
                <li className="sidenav-close"><Link to='/account'><i className="material-icons">account_circle</i>My Account</Link></li>    
                :
                <li className="sidenav-close"><Link to='/login'><i className="material-icons">person</i>Login | Register</Link></li>    
            }
            <li className="sidenav-close"><Link to="/"><i className="material-icons">home</i>Home</Link></li>
            <li><div className="divider"></div></li>
            {
                user.isLogin ?
                    <li className="sidenav-close" onClick={handleLogOut}><a><i className="material-icons">exit_to_app</i>Logout</a></li>
                : null
            }
        </ul>
    )
}
 
const mapStateToProps = state =>  {
    return {
        user: state.userReducer
    }
}
const mapDispatchToProps = {
    logOutRequest,
}
export default connect(mapStateToProps, mapDispatchToProps)(SideNav)