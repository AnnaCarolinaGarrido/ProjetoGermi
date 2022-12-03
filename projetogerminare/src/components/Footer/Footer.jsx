import React from "react"
import { ComponentFooter, StyledLogo, TitleFooter, LinksContainer, LinksFooter, TagFooter, TagFooterTitle, LinksContact} from "./Footer.style"
import { logoBranco, redesSociais, email, telefone, ping } from "../../assets/Components/index"

export function Footer() {
    return(
        <>
            <ComponentFooter>
                <StyledLogo src={logoBranco} alt="Logo da Germinare" />
                <LinksContainer>
                    <TitleFooter>sobre a escola</TitleFooter>
                    <LinksFooter>Nossas origens</LinksFooter>
                    <LinksFooter>Reforma 2022</LinksFooter>
                    <LinksFooter>Academias</LinksFooter>
                    <LinksFooter>Certificados</LinksFooter>
                    <LinksFooter>Doações</LinksFooter>
                </LinksContainer>

                <LinksContainer>
                    <TitleFooter>admissão</TitleFooter>
                    <LinksFooter>Aprovados</LinksFooter>
                    <LinksFooter>Área do candidato</LinksFooter>
                </LinksContainer>

                <LinksContainer>
                    <TitleFooter>acadêmico</TitleFooter>
                    <LinksFooter>Regimento escolar</LinksFooter>
                    <LinksFooter>Projeto acadêmico</LinksFooter>
                    <LinksFooter>Código de conduta</LinksFooter>
                </LinksContainer>

                <LinksContainer>
                    <TitleFooter>Governança</TitleFooter>
                    <LinksFooter>Demonstrativo financeiro </LinksFooter>
                    <LinksFooter>LGPD</LinksFooter>
                </LinksContainer>

                <LinksContainer>
                    <TitleFooter>Notícias</TitleFooter>
                    <LinksFooter>Nossas origens</LinksFooter>
                    <LinksFooter>Reforma 2022</LinksFooter>
                    <LinksFooter>Academias</LinksFooter>
                    <LinksFooter>Certificados</LinksFooter>
                    <LinksFooter>Doações</LinksFooter>
                </LinksContainer>
                
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