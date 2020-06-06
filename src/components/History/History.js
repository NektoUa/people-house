import React, { Component } from 'react';
import main from './Main.module.css';

export default class History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const about = this.props.elem;
        const body = this.state.isOpen && <section>{about.text}</section>

        return (
            <div id="begin" className={main.text}>
                <h2>
                    {about.period}</h2>
                <button type="button" onClick={this.handleClick} className={main.button} >{this.state.isOpen ? 'Згорнути ' : 'Читати'}</button>

                {body}

            </div >
        );
    }
}
