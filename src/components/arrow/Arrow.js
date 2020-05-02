import React, { Component } from 'react';
import arrowUp from './arrowUp.svg'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class Arrow extends Component {
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }
    componentDidMount() {

        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    render() {

        return (
            <div id='topArrow'>
                <a onClick={this.scrollToTop}><img src={arrowUp} width="30px" height="30px" /></a>
            </div>
        )
    }
}