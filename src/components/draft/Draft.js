import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import photoOne from './images/1.jpg'
import photoTwo from './images/2.jpg'
import photoThree from './images/3.jpg'
import photoFour from './images/4.jpg'
import photoFive from './images/5.jpg'

export default class Draft extends Component {
    render() {
        const Slider = (
            <AwesomeSlider
                animation="foldOutAnimation"
                cssModule={[CoreStyles, AnimationStyles]}
            >
                <div data-src={photoOne} />
                <div data-src={photoTwo} />
                <div data-src={photoThree} />
                <div data-src={photoFour} />
                <div data-src={photoFive} />
            </AwesomeSlider>
        );
        return (
            <div>
                {Slider}
            </div>
        )
    }
}