import * as React from "react";
import "./style.scss";
import batistas from "./Assets/Images/batistas.png";
import children from "./Assets/Images/children.png";
import old_children from "./Assets/Images/old_children.png";
import academy_instagram from "./Assets/Images/academy_instagram.png";
import friboi from "./Assets/Images/friboi.png";
import original from "./Assets/Images/original.png";
import picpay from "./Assets/Images/picpay.png";
import swift from "./Assets/Images/swift.png";
import cebas from "./Assets/Images/cebas.svg";
import cmdca from "./Assets/Images/cmdca.svg";
import unesco from "./Assets/Images/unesco.svg";
import qrCode from "./Assets/Images/qrCode.svg";
import qrCode2 from "./Assets/Images/qrCode2.svg";
import visitas from "./Assets/Images/visitas.svg"
import livro from "./Assets/Images/livro.svg";
import conselho from "./Assets/Images/conselho.svg";
import odete from "./Assets/Images/odeteFamilia.png";
import determinacao from "./Assets/Images/determinacao.svg";
import disciplina from "./Assets/Images/disciplina.svg";
import disponibilidade from "./Assets/Images/disponibilidade.svg";
import franqueza from "./Assets/Images/franqueza.svg";
import humildade from "./Assets/Images/humildade.svg";
import simplicidade from "./Assets/Images/simplicidade.svg";
import atitudeDono from "./Assets/Images/atitudeDono.svg";

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
import { Header } from "../../components/Header/Header";
import { HeaderContainer } from "../../components/Header/Header.style";
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
    )
  };



  return (
    <>
      <main className="mainContainer" id="about-us">
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
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <div>
              <h3 className="date-label">8 de fevereiro de 2010</h3>
              <img src={old_children} alt="alunos junto a diretora em 2010" />
            </div>
            <div>
              <h3 className="date-label">24 de fevereiro de 2022</h3>
              <img src={children} alt="alunos junto a diretora em 2022" />
            </div>
            </div>
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
              <p style={{marginTop: '40px'}}>
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
                  <h5>Entrada</h5>
                </div>
              </div>
              <div className="imageContainerGalery">
                <img className="g-img" src={g2} alt="" />
                <div className="shadow">
                  <h5>Praça</h5>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 170 }}>
              <div className="imageContainerGalery">
                <img className="g-img" src={g3} alt="" />
                <div className="shadow">
                  <h5>Área de Lazer</h5>
                </div>
              </div>
              <div className="imageContainerGalery">
                <img className="g-img" src={g4} alt="" />
                <div className="shadow">
                  <h5>Área Externa</h5>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 70 }}>
              <div className="imageContainerGalery">
                <img className="g-img" src={g5} alt="" />
                <div className="shadow">
                  <h5>Jardim</h5>
                </div>
              </div>
              <div className="imageContainerGalery">
                <img className="g-img" src={g6} alt="" />
                <div className="shadow">
                  <h5>Escada Rolante</h5>
                </div>
              </div>
              <div className="imageContainerGalery">
                <img className="g-img" src={g7} alt="" />
                <div className="shadow">
                  <h5>Sala de aula</h5>
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
                  <h5>Pátio</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="carousel">
          <div className="sliderBg">
          </div>
          <div className="slider-container">
            <h2>ÁREAS DE CONHECIMENTO</h2>
            <p className="textp"> A escola Germinare divide suas disciplinas em áreas do conhecimento, as Academias Germinare. Assim, temos a parceria de seis empresas do Grupo J&F: <b>Banco Original, Friboi, Flora, Seara, PicPay e Swift. </b> </p>
            <div style={{ marginTop: 40 }}>
              <Slider {...settings}>
                <div className="slider-item">
                  <div className='slider-item-wrapper'>
                    <img src={friboi} alt="trabalhadora friboi" />
                    <div className="sliderText">
                      <span>Academias Germinare</span>
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


          <div className="divCertificados">
            <p className="titleText">CERTIFICADOS</p>
            <div className="divIndividualCertificados">

              <div className="divBlueCertificados">
                <div className="divTriangular"></div>
                <img alt="Logo CEBAS" className="certificadosImg" src={cebas}></img>
                <div className="divBrancaCertificados">
                  <p className="textCertificados">
                    Em 2018, a Germinare conquistou a CEBAS pela contribuição da escola para o processo de inclusão social no país por meio de ofertas de bolsas de estudo.
                  </p>
                </div>
              </div>

              <div className="divBlueCertificados" style={{ backgroundColor: '#2E3092' }}>
                <div className="divTriangular" style={{ borderTopColor: '#2E3092' }}></div>
                <img alt="Logo CMDCA" className="certificadosImg" src={cmdca}></img>
                <div className="divBrancaCertificados">
                  <p className="textCertificados">
                    A Escola Germinare faz parte do Conselho Municipal dos Direitos da Criança e do Adolescente (CMDCA) desde 2014.
                  </p>
                </div>
              </div>

              <div className="divBlueCertificados" style={{ backgroundColor: '#4446B6' }}>
                <div className="divTriangular" style={{ borderTopColor: '#4446B6' }}></div>
                <img alt="Logo UNESCO" className="certificadosImg" src={unesco}></img>
                <div className="divBrancaCertificados">
                  <p className="textCertificados">
                    Em 21 de outubro de 2010, a Germinare passou a integrar o Programa das Escolas Associadas da UNESCO no Brasil.
                  </p>
                </div>
              </div>
            </div>
          </div>


        <section>
          <p className="textTitle">ESCOLA DA FAMÍLIA</p>
          <div className="divEscolaDaFamilia">
            <div className="divMidleContent">
              <p className="textConteudoEscola">Esse projeto visa ao envolvimento da família dos alunos na missão de formar jovens administradores e cidadãos. Entenda as 3 etapas desse novo curso:</p>

              <div className="divImgAndText">
                <img src={visitas}></img>
                <div className="spacingDiv">
                  <p className="titleText" style={{ fontSize: '18px' }}>VISITAS</p>
                  <p className="textConteudoEscola" style={{ marginTop: '0' }}>Uma agenda personalizada e exclusiva, onde poderemos aproximar e fortalecer ainda mais a relação entre escola e família.</p>
                </div>
              </div>

              <div className="divImgAndText">
                <img src={livro}></img>
                <div className="spacingDiv">
                  <p className="titleText" style={{ fontSize: '18px' }}>ATIVIDADES</p>
                  <p className="textConteudoEscola" style={{ marginTop: '0' }}>Conte com atividades e brincadeiras para facilitar o convivio e promover o bem-estar entre os integrantes da família.</p>
                </div>
              </div>

              <div className="divImgAndText">
                <img src={conselho}></img>
                <div className="spacingDiv">
                  <p className="titleText" style={{ fontSize: '18px' }}>CONSELHOS</p>
                  <p className="textConteudoEscola" style={{ marginTop: '0' }}>As mães madrinhas sempre estão a postos para receber pedidos de ajuda e fornecer dicas ou coselhos aos pais participantes do programa.</p>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <img className="imgOdete" src={odete}></img>
              <a href="#" className="LinkEscola">SAIBA MAIS SOBRE O PROJETO</a>
            </div>
          </div>
        </section>



        <section>
          <p className="titleText">NOSSOS VALORES</p>
          <div className="divValores">
            <div className="DivCardValores">
              <div className="intDivValores">
                <img className="IconValores" src={determinacao}></img>
                <p className="titleText" style={{ margin: '10px 0' }}>Determinação</p>
                <p className="textConteudoEscola">É obstinado, entrega resultados e cumpre seus compromissos.</p>
              </div>
              <p className="textoAdicional">Obstinado, entrega resultados superiores e cumpre seus compromissos. Faz as coisas acontecerem, busca alternativas para os problemas e engaja as pessoas em prol de um objetivo comum. Tem senso de urgência e não desiste nunca.</p>
            </div>

            <div className="DivCardValores">
              <div className="intDivValores">
                <img className="IconValores" src={disciplina}></img>
                <p className="titleText" style={{ margin: '10px 0' }}>Disciplina</p>
                <p className="textConteudoEscola">Cumpre o combinado, é pontual com horário e seus compromissos.</p>
              </div>
              <p className="textoAdicional">Cumpre o combinado, é pontual com horário e seus compromissos. Executa suas tarefas de forma disciplinada. É focado, pragmático, otimiza o tempo, atividades e recursos. Entrega resultados, não cria justificativas e desculpas.</p>
            </div>

            <div className="DivCardValores">
              <div className="intDivValores">
                <img className="IconValores" src={disponibilidade}></img>
                <p className="titleText" style={{ margin: '10px 0' }}>Disponibilidade</p>
                <p className="textConteudoEscola">É obstinado, entrega resultados e cumpre seus compromissos.</p>
              </div>
              <p className="textoAdicional">É receptivo, acessível, disponível, não tem dia e não tem hora, está sempre pronto e tem o trabalho como prioridade. Está aberto ao novo, às mudanças e motivado para novos desafios.</p>
            </div>

            <div className="DivCardValores">
              <div className="intDivValores">
                <img className="IconValores" src={franqueza}></img>
                <p className="titleText" style={{ margin: '10px 0' }}>Franqueza</p>
                <p className="textConteudoEscola">É direto, sincero, verdadeiro e transparente em suas relações.</p>
              </div>
              <p className="textoAdicional">É direto, sincero, verdadeiro e transparente em suas relações, sempre com respeito, de forma positiva, agregadora e acolhedora. Não se omite, expressa suas opiniões mesmo quando contrária aos demais. Sabe dizer não.</p>
            </div>

            <div className="DivCardValores">
              <div className="intDivValores">
                <img className="IconValores" src={humildade}></img>
                <p className="titleText" style={{ margin: '10px 0' }}>Humildade</p>
                <p className="textConteudoEscola">Sabe ouvir, é atencioso, considera a opinião de todos, prioriza o nós.</p>
              </div>
              <p className="textoAdicional">Sabe ouvir, é atencioso, considera a opinião dos outros, não importa quem fez, importa que fizemos. Não tem vergonha de perguntar nem de dizer que não sabe. Não é arrogante nem vaidoso. Não se preocupa com status nem se acha dono da verdade. Prioriza o nós e não o eu.</p>
            </div>

            <div className="DivCardValores">
              <div className="intDivValores">
                <img className="IconValores" src={simplicidade}></img>
                <p className="titleText" style={{ margin: '10px 0' }}>Simplicidade</p>
                <p className="textConteudoEscola">Faz as coisas acontecerem de forma simples e prática, vai direto ao ponto.</p>
              </div>
              <p className="textoAdicional">Faz as coisas acontecerem de forma simples e prática, é mão na massa, vai direto ao ponto, descomplica e desburocratiza respeitando as normas.</p>
            </div>

            <div className="DivCardValores" style={{ width: '98.5%' }}>
              <div className="intDivValores" style={{ width: '95%' }}>
                <img className="IconValores" src={atitudeDono}></img>
                <p className="titleText" style={{ margin: '10px 0' }}>Atitude de Dono</p>
                <p className="textConteudoEscola">Comprometido com o resultado, conhece com profundidade aquilo que faz e tem a visão do todo. Age com obstinação, disciplina e foco no detalhe. É mão na massa, busca sempre ser o melhor naquilo que faz e não desiste nunca.</p>
              </div>
              <p className="textoAdicional" style={{ maxWidth: '95%' }}>Comprometido com o resultado, conhece com profundidade aquilo que faz e tem a visão do todo. Age com obstinação, disciplina e foco no detalhe. É mão na massa, busca sempre ser o melhor naquilo que faz e não desiste nunca.
                Está sempre disponível e dá o exemplo. Indigna-se, não se conforma, não fica quieto nem se omite quando vê algo que não funciona bem ou possa ser melhorado. É atento aos gastos e à economia de cada centavo. Está engajado com a cultura da organização.</p>
            </div>
          </div>
        </section>



        <section style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <p className="textTitle">AMIGO GERMINARE</p>
          <div className="divAmigoGerminare">

            <div className="divParaTextoAmigoGerminare">
              <p className="textConteudo">O desafio da Escola Germinare é tornar-se uma referência no setor da educação. Neste sentido, a escola convida pessoas e empresas que acreditam no poder da educação para fazerem parte deste legado!</p>
              <p className="textConteudo">No caso de doações de Pessoa Jurídica, pedimos a gentileza de nos contatar através do e-mail: <span style={{ textDecoration: 'underline', color: '#2E3092', fontWeight: '700' }}>instituto@germinare.org.br</span>.</p>
            </div>

            <div className="barraCinza"></div>

            <div className="divAmigoGerminareContent">
              <p className="divAmigoGerminareTitle">Doações Mensais</p>
              <p className="divAmigoGerminareText">Você pode contribuir mensalmente com doações mensais, a partir de R$10,00/mês:</p>
              <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', flexDirection: 'column' }}>
                <img alt="Qr Code" className="divImgGerminare" src={qrCode}></img>
                <a href="#" className="LinkQrCode">
                  <p className="buttonContent">@doegerminare</p>
                </a>
              </div>
            </div>

            <div className="divAmigoGerminareContent">
              <p className="divAmigoGerminareTitle">Doações únicas</p>
              <p className="divAmigoGerminareText">Faça sua doação direto através do PicPay usando seu cartão de crédito ou saldo no aplicativo.</p>
              <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', flexDirection: 'column' }}>
                <img alt="Qr Code" className="divImgGerminare" src={qrCode2}></img>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
