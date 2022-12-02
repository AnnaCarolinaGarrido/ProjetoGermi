import styled from 'styled-components';

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    box-shadow: 0px 4px 4px 0px #00000040;
    position: sticky;
    justify-content: center;
    align-items: center;
    font-family: Montserrat, sans-serif;
    z-index: 3;
    > a {
        cursor: pointer
    }
`;

export const ContentContainer = styled.div`
    width: 85%;
    display: flex;
    font-weight: 600;
    font-size: 13px;
    gap: 7%;
    justify-content: center;
    align-items: center;
    color: #2E3092;

    > a, img {
        cursor: pointer;
        transition: color 0.5s ease-out
    }

    > a: hover {
        color: #252525;
    }
`;

export const StyledLogo = styled.img`
    width: 130px;
`

export const MenuContainer = styled.div`
    width: 45%;
    box-shadow: 0px 4px 4px 0px #00000040;
    position: sticky;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: Montserrat, sans-serif;
    background-color: #ffffff;
    position: absolute;
    top: 70px;
    z-index: 2;
`;

export const StyledInput = styled.input`
    border: none;
    outline: none;
    background-color: #F3F3F3;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    font-size: 14px;
    border-radius: 8px;
    margin: 30px 0 0 10px;
    width: 85%;
    padding: 10px;
`;

export const ItemsContainer = styled.div`
    margin: 20px 0;
    width: 85%;
    > div > a {
        border-bottom: 1.5px solid #CFCFCF;
    }
    > div {
        display: flex;
        gap: 5%;
    }
    > div:hover {
        background-color: #F5F5F5;
        cursor: pointer;
        border-radius: 12px;
    }
    > div > img {
        width: 30px;
        margin-bottom: 10px;
    }
`