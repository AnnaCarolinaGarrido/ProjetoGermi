import * as React from 'react';
import { Slider } from './LandingPage.styles';
import { Button } from '../Button/Button';
export default function LandingPage(props) {
    return (
        <Slider backgroundImage={props.backgroundImage}>
            <div>
                <div>
                    <h3> {props.subtitle} </h3>
                    <h1> {props.title} </h1>
                    <p> {props.description} </p>
                    <a href={props.href} target="_blank" style={{'text-decoration': 'none'}}><Button white text={props.buttonText} hoverColor="#C6C6C6"></Button></a>
                </div>    
            </div>
        </Slider>
    )
}