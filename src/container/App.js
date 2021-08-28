import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import '../assets/styles/global.scss'

import '../assets/styles/global.scss'
import 'materialize-css/dist/css/materialize.css'
import "materialize-css/dist/js/materialize.js";

import Home from '../pages/Home'
import Login from '../pages/Login'
import Product from '../pages/Product'
import Payment from '../pages/Payment'
import PaymentOption from '../pages/PaymentOption'
import ShoppingCart from '../pages/ShoppingCart'
import ShippingDetails from '../pages/ShippingDetails'
import Success from '../pages/Success'
import Register from '../pages/Register'
import Account from '../pages/Account'

import Header from '../components/Header'

const App = () => {
    return (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/> 
            <Route exact path="/product/:id" component={Product}/> 
            <Route exact path="/shoppingcart" component={ShoppingCart}/> 
            <Route exact path="/shippingdetails" component={ShippingDetails}/>   
            <Route exact path="/paymentoption" component={PaymentOption}/> 
            <Route exact path="/payment" component={Payment}/> 
            <Route exact path="/success" component={Success}/> 
            <Route exact path="/register" component={Register}/> 
            <Route exact path="/account" component={Account} />
        </Switch>
    </BrowserRouter>
 )
}
export default App