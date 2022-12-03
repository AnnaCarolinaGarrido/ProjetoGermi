import * as React from 'react';
import { MainDiv } from './style';
import Slider from "react-slick";
import Form from '../../components/Form/Form';
import SliderWrapper from "./_SlickSliderStyle";
import LandingPage from '../../components/LandingPage/LandingPage';
import Button from '@mui/material/Button';
import { CompaniesIcon, BasketIcon, BookIcon, SignalIcon, CltImg, qrCodeMensal, qrCodeUnico, Instagram, Facebook, Youtube, BancoOriginal, Picpay, Ambar, CanalRural, Eldorado, Flora, JBS, HeaderImg, HeaderImg2, HeaderImg3, HeaderImg4, Phone, Email } from "../../assets/HomePage/index"

const cardsList = [
    { id: '#1C1D52', title: 'Ensino 100% gratuito', text: 'A Escola Germinare oferece um ensino totalmente gratuito e integral, com professores altamente qualificados com dedicação exclusiva à escola.', img: BookIcon },
    { id: '#21226B', title: 'Escola tecnológica', text: 'Temos wi-fi 6, fornecimento de notebook, salas de aula climatizadas 100% digitais, com equipamentos de última geração.', img: SignalIcon },
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
    pauseOnHover: false,
    initialSlide: 0,
    speed: 300,
    arrows: false,
    adaptiveHeight: false,
    pauseOnHover: false,
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
                            de tecnologia' description='Ensino Médio Integrado com Técnico em Desenvolvimento de Sistemas.' buttonText='Conheça Mais' backgroundImage={HeaderImg} href='https://techadmissionfront.z13.web.core.windows.net/tech'/>
                        </div>
                        <div className="testimoni--wrapper">
                            <LandingPage subtitle='acadêmico' title='Projeto acadêmico' description='Conheça nossas disciplinas escolares relacionadas à gestão e tecnologia!' buttonText='Saiba mais' backgroundImage={HeaderImg2} />
                        </div>
                        <div className="testimoni--wrapper">
                            <LandingPage subtitle='admissão' title='Processo de Admissão 2023' description='Conheça os cursos disponíveis e como participar do processo seletivo!' buttonText='Confira Já' backgroundImage={HeaderImg3} />
                        </div>
                        <div className="testimoni--wrapper">
                            <LandingPage subtitle='sobre a escola' title='Academias Germinare' description='Conheça as academias Germinare que são parte integrante de nosso projeto acadêmico' buttonText='Saiba mais' backgroundImage={HeaderImg4} href='/sobre-nos'/>
                        </div>
                    </Slider>
                </SliderWrapper>
 
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
                        <div className="cultureCnt">
                            <div className="cultureCircle">
                                <img className="cltImg" src={CltImg} />
                            </div>
                            <div className="cultureText">
                                <div>
                                    <h3 className='pageTitle pagep'> Nossa missão </h3>
                                    <p className='pageTextp'> Formar jovens administradores de empresas e cidadãos que tenham total aderência aos nossos valores, alta capacidade de liderança, aguçado tino comercial e competência para produzir resultados superlativos. Somos uma instituição aprovada pelo MEC – Ministério da Educação – e reconhecida pela UNESCO.</p>
                                    <h3 className='pageTitle pagep'> Projeto acadêmico </h3>
                                    <p className='pageTextp'> O foco principal é oferecer uma ampla preparação com conteúdos dirigidos ao desenvolvimento de habilidades profissionais e a oportunidade de especialização escolhida: digital, financeiro, varejo, commodities e bens de consumo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="highlightedInfo">
                    <div className='highlightedInfoText'>
                    <h3 style={{'color': '#FFFFFF'}}> DOAÇÕES </h3>
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

                <div style={{marginTop: "80px"}}>
                    <div className="flex-container">
                        <div className="upperContainer">
                            <h3 className='pageTitle'>COMO NOS CONTATAR?</h3>
                            <div className="contact">
                                <img src={Phone} alt="icone de telefone" className='contactIcon' />
                                <p className="contactText">(11) 3623-6000 / (11) 96479-9498</p>
                            </div>
                            <div className="contact">
                                <img src={Email} alt="icone de e-mail" className='contactIcon' />
                                <p className="contactText">instituto@germinare.org.br</p>
                                <span className='auxiliar'>(doações e outras contribuições)</span>
                            </div>
                            <div className="contact">
                                <img src={Email} alt="icone de e-mail" className='contactIcon' />
                                <p className="contactText">comunicacao@germinare.org.br</p>
                                <span className='auxiliar'>(imprensa e relações institucionais)</span>
                            </div>
                            <div className="contact">
                                <img src={Email} alt="icone de e-mail" className='contactIcon' />
                                <p className="contactText">admissao@germinare.org.br</p>
                                <span className='auxiliar'>(dúvidas sobre processo de seleção)</span>
                            </div>
                            <div className="contact">
                                <img src={Email} alt="icone de e-mail" className='contactIcon' />
                                <p className="contactText">ouvidoria@germinare.org.br</p>
                                <span className='auxiliar'>(ouvidoria)</span>
                            </div>
                            <div className="contact">
                                <img src={Email} alt="icone de e-mail" className='contactIcon' />
                                <p className="contactText">rh@germinare.org.br</p>
                                <span className='auxiliar'>(trabalhe conosco)</span>
                            </div>
                        </div>
                        <Form className="contactForm"/>
                    </div>
                    <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1440&amp;height=240&amp;hl=en&amp;q=Rua Irineu José Bordon, 335&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>

                <div className='videoCnt'>
                    <div className="videoContent content">
                        <iframe id="ytplayer" type="text/html" width="580" height="276"
                            src="http://www.youtube.com/embed/kCRyWjl9SjE?autoplay=1&origin=http://example.com"
                            frameborder="0" className='ytvideo' />
                        <div className='retroText'>
                            <div>
                                <h3 className='pageTitle'> Assista a nossa retrospectiva </h3>
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