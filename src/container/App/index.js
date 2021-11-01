import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './global.scss'
import 'materialize-css/dist/css/materialize.css'
import "materialize-css/dist/js/materialize.js";

import Home from '../../pages/Home'
import Login from '../../pages/Login'
import Product from '../../pages/Product'
import Products from '../../pages/Products'
import Payment from '../../pages/Payment'
import PaymentOption from '../../pages/PaymentOption'
import ShoppingCart from '../../pages/ShoppingCart'
import ShippingDetails from '../../pages/ShippingDetails'
import Register from '../../pages/Register'
import Account from '../../pages/Account'
import NotFound from '../../pages/NotFound'
import { NotUserRegister } from '../../pages/NotUserRegister'

export const App = connect(mapStateToProps)( (props) => {
    const { isLogin } = props
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/> 
                <Route exact path="/product/:id" component={Product}/>
                <Route exact path="/products/:category/:id" component={Products} /> 
                <Route exact path="/shoppingcart" component={ShoppingCart}/> 
                <Route exact path="/register" component={Register}/> 
                <Route exact path="/account" component={Account} />
                {
                    isLogin 
                    ? <Route exact path="/shippingdetails" component={ShippingDetails}/>   
                    : <Route exact path="/shippingdetails" component={NotUserRegister}/>   
                }
                {
                    isLogin
                    ? <Route exact path="/paymentoption" component={PaymentOption}/> 
                    : <Route exact path="/paymentoption" component={NotUserRegister}/> 
                }
                {
                    isLogin
                    ? <Route exact path="/payment" component={Payment}/> 
                    : <Route exact path="/payment" component={NotUserRegister}/> 
                }
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
})
const mapStateToProps = ({ userReducer }) => userReducer
