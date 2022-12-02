import styled from 'styled-components';

export const ComponentFooter = styled("div")`
  display: flex;
  background-color: #191A4B;
  color: white;
  padding: 40px 20px;

  > .rowFooter {
      margin: 0 15px;
      width: 3px;
      background-color: #CFCFCF;
      border: 0;
  }
`;

export const StyledLogo = styled.img`
  width: 100px;
  margin-right: 80px;
  margin-left: 20px;
`

export const LinksContainer = styled("div")`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`

export const TitleFooter = styled("p")`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
`

export const LinksFooter = styled("p")`
  margin: 0;
  margin-top: 10px;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 11px;
  cursor: pointer;
`
export const LinksContact = styled("p")`
  display: flex;
  margin: 0;
  margin-top: 14px;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 10px;
  cursor: pointer;

  > .icone {
    width: 14px;
    margin: 0 8px;
  }
  
  > .iconeContato {
    width: 18px;
    margin: 0 5px;
  }
`

export const TagFooter = styled("div")`
  display: flex;
  margin: 0;
  justify-content: space-between;
  background-color: #736C6C;
  color: white;

  > .redesSociais {
    margin: 10px
  }
`

export const TagFooterTitle = styled("p")`
  margin: 10px;
  font-weight: 600;
  font-size: 10px;
`

