import * as React from 'react';
import { Slide } from '@mui/material';

export default function HomePage() {
    return (
        <Slide>
            <div className="slider">
                <div className="sliderContent">
                    <h3 className="subtitle"> Germinatech </h3>
                    <h1 className="maintitle"> Ensino médio de tecnologia </h1>
                    <p className="description"> Ensino Médio Integrado com Técnico em Desenvolvimento de Sistemas </p>
                    <div className="btnWhite"> Conheça mais </div>
                </div>
            </div>
        </Slide>
    )
}