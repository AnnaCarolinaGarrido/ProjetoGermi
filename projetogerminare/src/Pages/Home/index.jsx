import * as React from 'react';
import { MainDiv } from './style';
import HeaderImg from './Assets/HeaderImg.svg'
import Tiktok from './Assets/Tiktok.svg'
import Instagram from './Assets/Instagram.svg'
import Facebook from './Assets/Facebook.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
export default function HomePage() {
    return (
        <>
            <MainDiv>
                <div className="slider">
                    <div className="sliderContent">
                        <h3 className="subtitle"> Germinatech </h3>
                        <h1 className="maintitle"> Ensino médio de tecnologia </h1>
                        <p className="description"> Ensino Médio Integrado com Técnico em Desenvolvimento de Sistemas </p>
                        <div className="btnWhite"> Conheça mais </div>
                    </div>
                    <div className="mediaContainer">
                        <div className="circleMedia">
                                <img src={Tiktok} className="mediaIcon" />
                        </div>
                        <div className="circleMedia">
                            <img src={Instagram} className="mediaIcon" />
                        </div>
                        <div className="circleMedia">
                            <img src={Facebook} className="mediaIcon" />
                        </div>
                        </div>
                </div>
                <div className="generalInfo"> 
                    <div>
                        <div className='numberInfo'> 12 anos </div>
                        <div className='dcpInfo'> fazendo história </div>
                    </div>
                    <div>
                        <div className='numberInfo'> + 500 </div>
                        <div className='dcpInfo'> alunos </div>
                    </div>
                    <div>
                        <div className='numberInfo'> 6359m² </div>
                        <div className='dcpInfo'> de estrutura </div>
                    </div>
                </div>
                <FontAwesomeIcon icon={ faPlus } style={{width: '30px', height: '30px'}}/>
                <img style={{ height: '20px', width: '20px' }} src={HeaderImg} />
            </MainDiv>
        </>
    )
}