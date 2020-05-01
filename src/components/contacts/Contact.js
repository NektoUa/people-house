import React, { Component } from 'react';
import Map from './map'
import main from './Contact.module.css';

class Contact extends Component {
    render() {
        return (
            <div className={main.contact} id='contact'>
                <p>Відображені наші контакти</p>
                <Map />

            </div>
        );
    }
}

export default Contact