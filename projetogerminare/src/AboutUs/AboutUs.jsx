import * as React from "react";
import "./style.css";
import batistas from "./Assets/Images/batistas.png";
import children from "./Assets/Images/children.png";
import old_children from "./Assets/Images/old_children.png";
import academy_instagram from "./Assets/Images/academy_instagram.png";
import friboi from "./Assets/Images/friboi.png";
import original from "./Assets/Images/original.png";
import picpay from "./Assets/Images/picpay.png";
import swift from "./Assets/Images/swift.png";

import {
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
  description,
} from "./Assets/Images/GalerySection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function AboutUs() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    centerMode: true,
    className: "center",
    centerPadding: '0%',
    autoplay: true,
    autoplayDuration: 6000,
    pauseOnHover: true,
    fade: true,
    speed: 500,
    customPaging: i => (
      <div
        className="dot"
      >
      </div>
    ),
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };
  
  return (
    <main className="mainContainer">
      <section className="legacy">
        <div className="imgContainer">
          <img src={batistas} alt="irmãos batista" />
          <h3 id="batista-label">Família Batista, fundadora da Escola</h3>
        </div>
        <div className="contentContainer">
          <h2>O Legado da Escola Germinare</h2>
          <p>
            O projeto foi fundado com a missão de formar líderes em negócios,
            preparados de maneira efetiva, por meio de uma educação de alta
            qualidade conectada com a realidade empresarial mediante o suporte
            das empresas do grupo J&F.
          </p>
        </div>
      </section>
      <section className="origins">
        <div>
          <img src={old_children} alt="alunos junto a diretora em 2010" />
          <h3 className="date-label">8 de fevereiro de 2010</h3>
          <div className="content">
            <h2 class="section-title">NOSSAS ORIGENS</h2>
            <p>
              A Escola Germinare nasceu em setembro de 2009 e faz parte da J&F
              Investimentos, que tem em seu portfólio empresas como JBS (maior
              processadora de proteína animal do mundo); Flora (cosméticos e
              limpeza); Eldorado (celulose); Banco Original (instituição
              financeira); Oklahoma e Floresta Agropecuária (setor de
              agronegócios), e Canal Rural. Em 2010, o Instituto inaugurou a sua
              Escola Germinare, que oferece Ensino Fundamental II e Ensino
              Médio, e está localizada em São Paulo, em um terreno de uma das
              empresas da J&F Investimentos.
            </p>
          </div>
        </div>
        <div>
          <img src={children} alt="alunos junto a diretora em 2022" />
          <h3 className="date-label">24 de fevereiro de 2022</h3>
          <div className="content">
            <p style={{marginTop: 30}}>
              Por um lado, é possível dizer que os ideais do Instituto sempre
              estiveram presentes na história da J&F Investimentos e logo, sua
              trajetória remete à constituição e desenvolvimento do Grupo, ao
              longo dos últimos 60 anos. Contudo, foi a partir de 2009, que esse
              conjunto de valores e ações foi consolidado sob a figura do
              Instituto Germinare, com o back-ground de um grupo empresarial
              sólido, que tem na responsabilidade social uma de suas marcas.
              Este projeto cresceu e desde o ano passado, outras empresas estão
              se tornando apoiadoras desta iniciativa social, que visa
              transformar a vida de crianças e adolescentes através da educação.
            </p>
          </div>
        </div>
      </section>
      <section className="rebuilding">
        <h2 class="section-title">nossa reforma 2022</h2>
        <div>
          <div style={{ marginTop: 120 }}>
            <div className="imageContainerGalery">
              <img className="g-img" src={g1} alt="" />
              <div className="shadow">
                <h5>Lorem Ipsum</h5>
              </div>
            </div>
            <div className="imageContainerGalery">
              <img className="g-img" src={g2} alt="" />
              <div className="shadow">
                <h5>Lorem Ipsum</h5>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 170 }}>
            <div className="imageContainerGalery">
              <img className="g-img" src={g3} alt="" />
              <div className="shadow">
                <h5>Lorem Ipsum</h5>
              </div>
            </div>
            <div className="imageContainerGalery">
              <img className="g-img" src={g4} alt="" />
              <div className="shadow">
                <h5>Lorem Ipsum</h5>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 70 }}>
            <div className="imageContainerGalery">
              <img className="g-img" src={g5} alt="" />
              <div className="shadow">
                <h5>Lorem Ipsum</h5>
              </div>
            </div>
            <div className="imageContainerGalery">
              <img className="g-img" src={g6} alt="" />
              <div className="shadow">
                <h5>Lorem Ipsum</h5>
              </div>
            </div>
            <div className="imageContainerGalery">
              <img className="g-img" src={g7} alt="" />
              <div className="shadow">
                <h5>Lorem Ipsum</h5>
              </div>
            </div>
          </div>
          <div>
            <div className="imageContainerGalery">
              <img
                src={description}
                id="description"
                alt="Há mais de 10 anos tornando sonhos em realidade."
              />
            </div>
            <div className="imageContainerGalery">
              <img className="g-img" src={g8} alt="" />
              <div className="shadow">
                <h5>Lorem Ipsum</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="academys">
        <h2 className="section-title">SOBRE NOSSAS ACADEMIAS</h2>
        <div className="intro">
          <img src={academy_instagram} alt="@academiasgerminare" />
          <p>
            A escola Germinare, por meio de um currículo inovador, proporciona o
            diploma de Técnico em Administração de Empresas ao concluir o Ensino
            Médio. Para isso, dividimos as disciplinas em áreas do conhecimento,
            as Academias Germinare. Assim como todos os trabalhos com bons
            resultados, há um grupo de pessoas diferentes contribuindo com os seus
            melhores atributos para concluir o objetivo da equipe. No caso das
            Academias, temos a parceria de seis empresas do Grupo J&F: Banco
            Original, Friboi, Flora, Seara, PicPay e Swift. Falaremos nesse perfil
            sobre o trabalho incrível que elas estão fazendo junto com os
            professores da Germinare.
          </p>
        </div>
      </section>
      <section className="carousel">
        <div className="sliderBg">
        </div>
        <div className="slider-container">
          <h2>ÁREAS DE CONHECIMENTO</h2>
          <div style={{marginTop: 40}}>
          <Slider {...settings} className='fullSlider'>
          <div className="slider-item">
            <div className='slider-item-wrapper'>
              <img src={friboi} alt="trabalhadora friboi" />
              <div className="sliderText">
                <span>Área de Commodities</span>
                <h4>Academia Friboi</h4>
                <p>Você já teve dúvidas de como resolver algum problema difícil?A Academia de Commodities esclarece diversos tipos de metodologias diferentes para a solução de problemas. Dessa forma, ela aproxima o dia a dia das operações frigoríficas e dos Centros de Distribuição (CD´s) para gerar mais conhecimento e bagagem profissional nas variadas áreas de forma consistente e acelerada.</p>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className='slider-item-wrapper'>
              <img src={original} alt="trabalhadora friboi" />
              <div className="sliderText">
                <span>Área de Finanças</span>
                <h4>Academia Original</h4>
                <p>Com o intuito de despertar curiosidade para a vida financeira e relacionar os conceitos teóricos com a prática profissional é que a Academia de Finanças foi criada. Por meio de projetos disciplinares e constante contato com profissionais da área financeira, os alunos aprendem diversos conceitos econômicos, desenvolvem a capacidade de resolução de problemas e adquirem conhecimento a respeito de produtos e serviços bancários e financeiros.</p>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className='slider-item-wrapper'>
              <img src={picpay} alt="trabalhadora friboi" />
              <div className="sliderText">
                <span>Área de Tecnologia</span>
                <h4>Academia PicPay</h4>
                <p>Na Germinare, a Academia de Tecnologia foi desenvolvida para atender a demanda dos alunos e do mercado de trabalho atual. Durante as aulas, os estudantes aprendem sobre tecnologias digitais e experiência do usuário, com foco no desenvolvimento e gestão de negócios e na interpretação de Demonstrativos de Resultados (DRE) de uma empresa.</p>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className='slider-item-wrapper'>
              <img src={swift} alt="trabalhadora friboi" />
              <div className="sliderText">
                <span>Área de Serviços</span>
                <h4>Academia Swift</h4>
                <p>A Academia de Serviços fornece um conteúdo focado em Gestão de Negócios no varejo com ênfase em conhecimento de produto, gestão de pessoas, atendimento superlativo, vendas, expansão, sustentabilidade e transformação digital. Assim, os alunos possuem uma visão prática e muito próxima à realidade do negócio.</p>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className='slider-item-wrapper'>
              <img src={friboi} alt="trabalhadora friboi" />
              <div className="sliderText">
                <span>Área de Commodities</span>
                <h4>Academia Friboi</h4>
                <p>Você já teve dúvidas de como resolver algum problema difícil?A Academia de Commodities esclarece diversos tipos de metodologias diferentes para a solução de problemas. Dessa forma, ela aproxima o dia a dia das operações frigoríficas e dos Centros de Distribuição (CD´s) para gerar mais conhecimento e bagagem profissional nas variadas áreas de forma consistente e acelerada.</p>
              </div>
            </div>
          </div>
        </Slider>
          </div>
        </div>
      </section>
    </main>
  );
}
