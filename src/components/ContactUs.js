import React from 'react'
import ContactFormEmail from './ContactFormEmail'
import Jumbotron from './Jumbotron'

const ContactUs = (props) => {
    return (
        <React.Fragment>
            <Jumbotron>Contact Us</Jumbotron>
            <ContactFormEmail />
        </React.Fragment>
    )
}

export default ContactUs
