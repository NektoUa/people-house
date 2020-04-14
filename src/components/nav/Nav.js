import React, { Component } from 'react';
import logo from './library.svg';
import main from './Main.module.css';

class Nav extends Component {
    render() {
        return (
            <div className={main.header}>
                <div className={main.image}>
                    <img src={logo}
                        className={main.image}
                        alt="logo"
                    />
                </div>
                <div>
                    <h1>Народний будинок</h1>
                </div>
            </div>
        );
    }
}

export default Nav;