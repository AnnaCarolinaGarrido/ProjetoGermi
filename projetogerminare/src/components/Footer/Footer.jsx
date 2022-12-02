import React from "react"
import { ComponentFooter, StyledLogo, TitleFooter, LinksContainer, LinksFooter, TagFooter, TagFooterTitle, LinksContact} from "./Footer.style"
import logo from '../../assets/Header/logo-branco.svg';
import redesSociais from '../../assets/Header/redes-sociais.svg';
import email from '../../assets/Header/email.svg';
import telefone from '../../assets/Header/phone.svg';
import ping from '../../assets/Header/localizacao.svg';

export function Footer(props) {

    const footerRoutes = [
        {
            title: 'Sobre a escola',
            links: [
                {name: 'Nossas origens', route:'/sobre-nos'},
                {name: 'Reforma 2022', route:'/sobre-nos'},
                {name: 'Academias', route:'/sobre-nos'},
                {name: 'Certificados', route:'/sobre-nos'},
                {name: 'Doações', route:'/sobre-nos'},
            ]
        },
        {
            title: 'Admissão',
            links: [
                {name: 'Depoimentos', route:'#'},
                {name: 'Cursos disponíveis', route:'#'},
            ]
        },
        {
            title: 'Acadêmico',
            links: [
                {name: 'Projeto acadêmico', route:'#'},
                {name: 'Matérias escolares', route:'#'},
                {name: 'Nossos professores', route:'#'},
                {name: 'Regimento escolar', route:'#'},
            ]
        },
        {
            title: 'Acadêmico',
            links: [
                {name: 'Governança', route:'#'},
                {name: 'Demonstrativo financeiro', route:'#'},
                {name: 'LGPD', route:'#'},
            ]
        },
        {
            title: 'Notícias',
            links: [
                {name: 'Destaques', route:'#'},
            ]
        },
    ]

    return(
        <>
            <ComponentFooter footerColor={props.footerColor}>
                <StyledLogo src={logo} alt="Logo da Germinare" href="/"/>
                {
                    footerRoutes.map(el => {
                        return (
                            <LinksContainer>
                                <TitleFooter>{el.title}</TitleFooter>
                                {
                                    el.links.map(link => {
                                        return <LinksFooter href={link.route}>{link.name}</LinksFooter>
                                    })
                                }
                            </LinksContainer>
                        )
                    })
                }
                
                <hr className="rowFooter"/>

                <LinksContainer sty>
                    <TitleFooter>ENTRE EM CONTATO</TitleFooter>
                    <LinksContact>
                    <img src={ping} alt="icone de localização" className="icone"/>
                    R. Irineu José Bordon - Vila Jaguara, São Paulo - SP, 05120-060
                    </LinksContact>
                    <LinksContact>
                    <img src={telefone} alt="icone de telefone" className="iconeContato"/>
                    (11) 3623-6000
                    </LinksContact>
                    <LinksContact>
                    <img src={email} alt="icone de email" className="iconeContato"/>
                    instituto@germinare.org.br
                    </LinksContact>
                </LinksContainer>

            </ComponentFooter>
            
            <TagFooter>
                <TagFooterTitle>Escola Germinare – Escola de Negócios © 2022</TagFooterTitle>
                <img src={redesSociais} alt="redes socias" className="redesSociais" />
            </TagFooter>
        </>
    )
}