import { HeaderContainer, StyledLogo, ContentContainer, MenuContainer, StyledHeader, StyledInput, ItemsContainer } from "./Header.style"
import logo from '../../assets/Header/logo-escola.svg';
import { SearchBarButton } from "../SearchBarButton/SearchBarButton";
import { MenuItem } from "../MenuItem/Menuitem";
import { useState } from "react";
import addPen from '../../assets/Header/penadd.svg';
import bookMark from '../../assets/Header/bookmark.svg';
import firstLine from '../../assets/Header/firstline.svg';
import jornal from '../../assets/Header/clipboardtick.svg';
import { useFilter } from "../../utils/useFilter";

export function Header() {

    const menuItemContent = [
        {
            title: 'Faça sua admissão',
            subtitle: 'Conheça as trajetórias de administração e tecnologia ',
            src: addPen,
            alt: 'Ícone de caneta',
            route: '',
        },
        {
            title: 'Saiba mais sobre nosso projeto acadêmico',
            subtitle: 'Conheça nossas disciplinas focadas em gestão de negócios',
            src: bookMark,
            alt: 'Ícone de livro',
            route: '',
        },
        {
            title: 'Conheça a Escola Germinare',
            subtitle: 'Saiba mais sobre a nossa história, academias e muito mais',
            src: firstLine,
            alt: 'Ícone de prancheta',
            route: '',
        },
        {
            title: 'Veja nossas notícias recentes',
            subtitle: 'Conheça nossos projetos e atividades em destaque',
            src: jornal,
            alt: 'Ícone de jornal',
            route: '',
        },
    ]
    const { filteredData, setFilter } = useFilter(menuItemContent);
    const [showMenu, setShowMenu] = useState(false)

    function handleButtonClick() {
        setShowMenu(current => !current)
    }

    return (
        <StyledHeader>
            <HeaderContainer>
                <ContentContainer>
                    <StyledLogo src={logo} alt="Logo Germinare" />
                    <a>Sobre a escola</a>
                    <a>Admissão</a>
                    <a>Acadêmico</a>
                    <a>Governança</a>
                    <a>Notícias</a>
                    <SearchBarButton onClick={handleButtonClick}/>
                </ContentContainer>
            </HeaderContainer>

            <MenuContainer style={showMenu? {'display':'flex'} : {'display':'none'}}>
                <StyledInput type="text" placeholder="Pesquisar" onChange={setFilter}/>
                <ItemsContainer>
                    {
                        filteredData.map(data => {
                            return (
                                <div>
                                    <img src={data.src} alt={data.alt} />
                                    <MenuItem title={data.title} subtitle={data.subtitle} route={data.route}/>
                                </div>
                            )
                        })
                    }
                </ItemsContainer>
            </MenuContainer>
        </StyledHeader>
    )
}