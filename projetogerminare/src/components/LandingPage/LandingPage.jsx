import * as React from 'react';
import { Slider } from './LandingPage.styles';

export default function LandingPage(props) {
    return (
        <Slider backgroundImage={props.backgroundImage}>
            <div>
                <div>
                    <h3> {props.subtitle} </h3>
                    <h1> {props.title} </h1>
                    <p> {props.description} </p>
                    <button>{props.buttonText}</button>
                </div>
            </div>
        </Slider>
    )
}