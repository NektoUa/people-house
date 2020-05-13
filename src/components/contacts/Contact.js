import React, { Component } from 'react';
import Map from './map'
import main from './Contact.module.css';
import img from './place_icon.svg'

class Contact extends Component {
    render() {
        return (
            <div className={main.contact} id='contact'>
                <h4><em>Адреса:</em></h4>
                <p><img src={img} width="20px" height="20px" /> 69063, м.Запоріжжя, вул. Поштова, 71</p>
                <Map />

            </div>
        );
    }
}

export default Contact