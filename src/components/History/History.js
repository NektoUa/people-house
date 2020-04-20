import React, { Component } from 'react';
// import main from './Main.module.css';

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
            <div id="begin" >
                <h2>
                    {about.period}
                    <button type="button" onClick={this.handleClick}>{this.state.isOpen ? 'Згорнути' : 'Розгорнути'}</button>
                </h2>
                {body}

            </div >
        );
    }
}
