import React, { Component } from 'react';
import main from './Navigation.module.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "navicProGarmin"
        }
    }
    fun = () => {
        if (this.state.title == "navicProGarmin") {
            this.setState({ title: "hide" });
        } else {
            this.setState({ title: "navicProGarmin" });
        }

        console.log("lll")
    }
    render() {
        return (
            <div className={main.nav} id="nav">
                <h2 onClick={this.fun}>{this.state.title}</h2>
                <a href='/begin'>Початкова</a>
                <a href='/history'>Історія</a>
                <a href='/about'>Опис об'єкта</a>
                <a href='/about'>Креслення</a>
                <a href='/literature'>Література</a>


            </div>
        );
    }
}



export default Navigation