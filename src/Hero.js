import React from 'react';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs';

const Hero = (props) => {
    return (
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <Router>
                    <Navbar handleLogout = {props.handleLogout}/>
                    <Route path="/contacts" component={Contacts}/>
                    <Route path="/contactUs" component={ContactUs}/>
                    {/* <Contacts handleLogout ={props.handleLogout} /> */}
                </Router>
            </div>
        </div>
    )
}

export default Hero;
