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
import Instagram from './Assets/Instagram (1).svg'
import Facebook from './Assets/Facebook (1).svg'
import Youtube from './Assets/Youtube.svg'
import Seara from './Assets/Seara.svg'
import Swift from './Assets/Swift.svg'
import BancoOriginal from './Assets/BancoOriginal.svg'
import Picpay from './Assets/Picpay.svg'
import Friboi from './Assets/Friboi.svg'
import Flora from './Assets/Flora.svg'
import JeF from './Assets/J&F.svg'

const cardsList = [
    { id: '#191A4B', title: 'Ensino 100% gratuito', text: 'A Escola Germinare oferece um ensino totalmente gratuito e integral, com professores altamente qualificados com dedicação exclusiva à escola.', img: BookIcon },
    { id: '#26276', title: 'Escola tecnológica', text: 'Temos wi-fi 6, fornecimento de notebook, salas de aula climatizadas 100% digitais, com equipamentos de última geração.', img: SignalIcon },
    { id: '#2E3092', title: 'Projeto Alimentare', text: 'Oferecemos alimentos frescos e sem aditivos químicos na composição das refeições. Também são disponibilizadas diversas frutas frescas.', img: BasketIcon },
    { id: '#4446B6', title: 'Estágios nas empresas', text: 'Projeto acadêmico com os estágios remunerados, que os interliga e garante a formação de profissionais capacitados para o ambiente de trabalho.', img: CompaniesIcon },
];

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
                <div className="slider">
                    <div className="sliderContent">
                        <h3 className="subtitle"> Germinatech </h3>
                        <h1 className="maintitle"> Ensino médio de tecnologia </h1>
                        <p className="description"> Ensino Médio Integrado com Técnico em Desenvolvimento de Sistemas </p>
                        <div className="btnWhite"> Conheça mais </div>
                    </div>
                </div>
                <div className="generalInfo">
                    <div>
                        <div className='infoContainer'>
                            <div className='numberInfo'>  12 anos <sup className='plusIcon'> + </sup>  </div>
                        </div>
                        <div className='dcpInfo'> fazendo história </div>
                    </div>
                    <div>
                        <div className='infoContainer'>
                            <div className='numberInfo'> + 500  <sup className='plusIcon'> + </sup> </div>
                        </div>
                        <div className='dcpInfo'> alunos </div>
                    </div>
                    <div>
                        <div className='infoContainer'>
                            <div className='numberInfo'> 6359m² <sup className='plusIcon'> + </sup> </div>
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
                            AMIGO GERMINARE COMO DOAR?
                        </h1>
                        <p>
                            O desafio da Escola Germinare é tornar-se uma referência no setor da educação, a partir da excelência na qualidade, proposta acadêmica diferenciada e de sua missão em formar jovens administradores de empresas e cidadãos. Venha fazer parte deste legado!
                        </p>
                    </div>
                    <div className='donationComponent'>
                        <div className='donationButtonContainer'>
                            <p className='donationText'>Central de Doações</p>
                            <Button 
                                className = {flipImage ? 'btnDonationActive' : 'btnDonationDisabled'}
                                variant="contained" 
                                onClick={handleToggleUnica}
                            >Doação Única</Button>
                            <Button 
                                className = {flipImage ?  'btnDonationDisabled' : 'btnDonationActive' }
                                variant="contained" 
                                onClick={handleToggleMensal}
                            >Doação Mensal</Button>
                        </div>
                        <div className= 'donationQRcodeScene'>
                            <div className={`flipQrCode ${flipImage ? 'is-flipped' : null}`}>
                                <div className= 'qrCodeImg__face qrCodeImg__face--front'>
                                    <img src={qrCodeMensal} alt="QR Code Doação Mensal" />
                                </div>
                                <div className= 'qrCodeImg__face qrCodeImg__face--back'>
                                    <img src={qrCodeUnico} alt="QR Code Doação Único" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
                                    <img src={Youtube} className="mediaIcon" />
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
                    <div className="companiesCnt content">
                        <div>
                            <h3 className='pageTitle pagep2'> Nossas empresas parceiras </h3>
                            <p className='pageText paget2'>
                                Conheça o grupo J&F, um dos maiores conglomerados brasileiros, que explora diferentes segmentos do mercado de consumo brasileiro e mundial. É através dessa parceira, que a Germinare consegue sustentar o ensino de qualidade e preparação para o ambiente profissional.
                            </p>
                        </div>
                        <div className="logoCnt">
                            <div className="rowLogo">
                                <img src={JeF} className="companyLogo" />
                                <img src={Seara} className="companyLogo" />
                                <img src={Swift} className="companyLogo" />
                                <img src={Friboi} className="companyLogo" />
                            </div>
                            <div className="rowLogo">
                                <img src={Flora} className="companyLogo"/> 
                                <img src={BancoOriginal} className="companyLogo" style={{width: '180px'}}/>
                                <img src={Picpay} className="companyLogo" />
                            </div>
                        </div>
                    </div>
                </div>
            </MainDiv>
        </>
    )
}