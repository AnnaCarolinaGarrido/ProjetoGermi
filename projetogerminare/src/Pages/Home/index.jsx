import * as React from 'react';
import { MainDiv } from './style';
import CompaniesIcon from './Assets/Companies.svg'
import BasketIcon from './Assets/Basket.svg'
import BookIcon from './Assets/Book.svg'
import SignalIcon from './Assets/Signal.svg'
import CltImg from './Assets/CltImg.svg'
import qrCodeMensal from './Assets/qrCodeMensal.png'
import qrCodeUnico from './Assets/qrCodeUnico.png'
import Button from '@mui/material/Button';
import Instagram from './Assets/Instagram.svg'
import Facebook from './Assets/Facebook.svg'
import Youtube from './Assets/Youtube.svg'
import BancoOriginal from './Assets/BancoOriginal.svg'
import Picpay from './Assets/Picpay.svg'
import Ambar from './Assets/Ambar.svg'
import CanalRural from './Assets/CanalRural.svg'
import Eldorado from './Assets/Eldorado.svg'
import Flora from './Assets/Flora.svg'
import JBS from './Assets/Jbs.svg'
import Slider from "react-slick";
import SliderWrapper from "./_SlickSliderStyle";
import LandingPage from '../../components/LandingPage/LandingPage';
import HeaderImg from './Assets/HeaderImg.svg'
import HeaderImg2 from './Assets/HeaderImg2.svg'
import HeaderImg3 from './Assets/HeaderImg3.svg'
import HeaderImg4 from './Assets/HeaderImg4.svg'
import "./styles.scss";

const cardsList = [
    { id: '#191A4B', title: 'Ensino 100% gratuito', text: 'A Escola Germinare oferece um ensino totalmente gratuito e integral, com professores altamente qualificados com dedicação exclusiva à escola.', img: BookIcon },
    { id: '#26276', title: 'Escola tecnológica', text: 'Temos wi-fi 6, fornecimento de notebook, salas de aula climatizadas 100% digitais, com equipamentos de última geração.', img: SignalIcon },
    { id: '#2E3092', title: 'Projeto Alimentare', text: 'Oferecemos alimentos frescos e sem aditivos químicos na composição das refeições. Também são disponibilizadas diversas frutas frescas.', img: BasketIcon },
    { id: '#4446B6', title: 'Estágios nas empresas', text: 'Projeto acadêmico com os estágios remunerados, que os interliga e garante a formação de profissionais capacitados para o ambiente de trabalho.', img: CompaniesIcon },
];

const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 0,
    speed: 300,
    arrows: false,
    adaptiveHeight: true,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
        <div className="ft-slick__dots--custom">
            <div className="loading" />
        </div>
    )
};

export default function HomePage() {
    const [flipImage, setFlipImage] = React.useState(true);

    function handleToggleUnica() {
        if (flipImage == false) {
            setFlipImage(!flipImage);
        }
    };

    function handleToggleMensal() {
        if (flipImage == true) {
            setFlipImage(!flipImage);
        }
    };


    return (
        <>
            <MainDiv>
                <SliderWrapper>
                    <Slider {...settings}>
                        <div className="testimoni--wrapper">
                            <LandingPage subtitle='germinatech' title='Ensino médio
                            de tecnologia' description='Ensino Médio Integrado com Técnico em Desenvolvimento de Sistemas.' buttonText='Conheça Mais' backgroundImage={HeaderImg} />
                        </div>
                        <div className="testimoni--wrapper">
                            <LandingPage subtitle='acadêmico' title='Projeto acadêmico' description='Confirá já a lista dos convidados a participarem da 4ª fase da amissão' buttonText='Confira Já' backgroundImage={HeaderImg2} />
                        </div>
                        <div className="testimoni--wrapper">
                            <LandingPage subtitle='admissão' title='Processo de Admissão 2023' description='Confirá já a lista dos convidados a participarem da 4ª fase da admissão' buttonText='Confira Já' backgroundImage={HeaderImg3} />
                        </div>
                        <div className="testimoni--wrapper">
                            <LandingPage subtitle='sobre a escola' title='Conheça as academias' description='Confirá já a lista dos convidados a participarem da 4ª fase da admissão' buttonText='Confira Já' backgroundImage={HeaderImg4} />
                        </div>
                    </Slider>
                </SliderWrapper>
                <div style={{ marginBottom: '20px' }}>

                </div>
                <div className="generalInfo">
                    <div>
                        <div className='infoContainer'>
                            <div className='numberInfo'>  12 anos <sup className='plusIcon'> · </sup>  </div>
                        </div>
                        <div className='dcpInfo'> fazendo história </div>
                    </div>
                    <div>
                        <div className='infoContainer'>
                            <div className='numberInfo'> + 500  <sup className='plusIcon'> · </sup> </div>
                        </div>
                        <div className='dcpInfo'> alunos </div>
                    </div>
                    <div>
                        <div className='infoContainer'>
                            <div className='numberInfo'> 6359m² <sup className='plusIcon'> · </sup> </div>
                        </div>
                        <div className='dcpInfo'> de estrutura </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="content">
                    <h3 className='pageTitle'> Sobre nossa escola </h3>
                    <p className='pageText'> O grande ideal é formar um grande grupo de empresários, juntamente com a sociedade, para que juntos possamos ampliar este projeto e desta forma dar a oportunidade para que mais e mais jovens tenham acesso a este projeto acadêmico diferenciado. </p>
                    <div className="cardContainer">
                        {cardsList.map((item, index) => (
                            <div key={index} className='card' style={{ backgroundColor: item.id }}>
                                <img src={item.img} className="contentIcon" />
                                <h3 className="cardTitle">
                                    {item.title}
                                </h3>
                                <p className="cardText">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="culture">
                        <h3 className='pageTitle'> Sobre nossa cultura </h3>
                        <div className="cultureCnt">
                            <div className="cultureCircle">
                                <img className="cltImg" src={CltImg} />
                            </div>
                            <div className="cultureText">
                                <div>
                                    <h3 className='pageTitle pagep'> Nossa missão </h3>
                                    <p> Formar jovens administradores de empresas e cidadãos que tenham total aderência aos nossos valores, alta capacidade de liderança, aguçado tino comercial e competência para produzir resultados superlativos. Somos uma instituição aprovada pelo MEC – Ministério da Educação – e reconhecida pela UNESCO.</p>
                                    <h3 className='pageTitle pagep'> Projeto acadêmico </h3>
                                    <p> O foco principal é oferecer uma ampla preparação com conteúdos dirigidos ao desenvolvimento de habilidades profissionais e a oportunidade de especialização escolhida: digital, financeiro, varejo, commodities e bens de consumo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="highlightedInfo">
                    <div className='highlightedInfoText'>
                        <h1>
                            DOAÇÕES
                        </h1>
                        <p>
                            O desafio da Escola Germinare é tornar-se uma referência no setor da educação, a partir da excelência na qualidade, proposta acadêmica diferenciada e de sua missão em formar jovens administradores de empresas e cidadãos. Venha fazer parte deste legado!
                        </p>
                    </div>
                    <div className='donationComponent'>
                        <div className='donationButtonContainer'>
                            <p className='donationText'>Central de Doações</p>
                            <Button
                                className={flipImage ? 'btnDonationActive' : 'btnDonationDisabled'}
                                variant="contained"
                                onClick={handleToggleUnica}
                            >Doação Única</Button>
                            <Button
                                className={flipImage ? 'btnDonationDisabled' : 'btnDonationActive'}
                                variant="contained"
                                onClick={handleToggleMensal}
                            >Doação Mensal</Button>
                        </div>
                        <div className='donationQRcodeScene'>
                            <div className={`flipQrCode ${flipImage ? 'is-flipped' : null}`}>
                                <div className='qrCodeImg__face qrCodeImg__face--front'>
                                    <img src={qrCodeMensal} alt="QR Code Doação Mensal" />
                                </div>
                                <div className='qrCodeImg__face qrCodeImg__face--back'>
                                    <img src={qrCodeUnico} alt="QR Code Doação Único" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="content">
                    <div className="companies">
                        <h3 className='pageTitle'> Conheça nossas empresas parceiras </h3>
                        <p className='pageText'>Somos o maior grupo privado não financeiro do Brasil, com mais de 267 mil colaboradores em todo o mundo. Conheça nossas áreas de atuação.
                            É através dessa parceira, que a Germinare consegue sustentar o ensino de qualidade e preparação para o ambiente profissional.  </p>
                        <div className='companiesCnt'>
                            <img src={BancoOriginal} className="companiesExt" />
                            <img src={Eldorado} className="companiesExt" />
                            <img src={Picpay} className="companyLogo" />
                            <img src={CanalRural} className="companiesExt" />
                            <img src={Ambar} className="companyLogo" />
                            <img src={JBS} className="companyLogo" />
                            <img src={Flora} className="companiesRest" />
                        </div>
                    </div>
                </div>
                <div className="contacts">
                    <h3 className='pageTitle'> Nossos Contatos </h3>
                    <div className="contacts">
                    </div>
                </div>
                <div className='videoCnt'>
                    <div className="videoContent content">
                        <iframe id="ytplayer" type="text/html" width="580" height="276"
                            src="http://www.youtube.com/embed/kCRyWjl9SjE?autoplay=1&origin=http://example.com"
                            frameborder="0" className='ytvideo' />
                        <div className='retroText'>
                            <div>
                                <h3 className='pageTitle pagep'> Assista a nossa retrospectiva </h3>
                                <p className='pageText'>
                                    No dia 8 de fevereiro, completamos 12 anos de Escola Germinare. Acompanhe toda a nossa evolução em um vídeo para representar nossa história.
                                </p>
                            </div>
                            <div className="mediaCnt">
                                <div className="mediaCircle">
                                    <img src={Youtube} className="mediaIconExt" />
                                </div>
                                <div className="mediaCircle">
                                    <img src={Instagram} className="mediaIcon" />
                                </div>
                                <div className="mediaCircle">
                                    <img src={Facebook} className="mediaIcon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lineWhite"></div>
                </div>
            </MainDiv>
        </>
    )
}