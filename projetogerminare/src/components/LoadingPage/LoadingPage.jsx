import * as React from 'react';
import { Background } from './LoadingPage.styles';
import logo from '../../assets/Header/logo-escola-branco.svg';
import pingas from '../../assets/Header/pingas.gif';

export default function LoadingPage() {
    return (
        <Background>
            <img src={logo}/>
            <img src={pingas}/>
            <p>Carregando...</p> 
        </Background>
    )
}