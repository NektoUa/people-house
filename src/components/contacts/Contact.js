import React, { Component } from 'react';

import ContactsApp from './ContactsApp'
import Map from './map'
import main from './Contact.module.css';

class Contact extends Component {
    render() {
        return (
            <div className={main.contact} id='contact'>
                <ContactsApp />
                <Map />

            </div>
        );
    }
}

export default Contact