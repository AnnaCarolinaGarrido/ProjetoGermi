import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 8px;
  border: none;
  padding: 10px 50px;
  width: fit-content;
  text-transform: uppercase;
  font-weight: 700;
  box-shadow: 0px 4px 4px 0px #00000040;
  transition: background-color 0.3s ease-out
  `;

export const BlueButton = styled(StyledButton)`
  font-family: Montserrat, sans-serif;
  background-color: #191A4B;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;
export const WhiteButton = styled(StyledButton)`
  font-family: Montserrat, sans-serif;
  background-color: #FFFFFF;
  color: #252525;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;

export const DisabledButton = styled(StyledButton)`
  font-family: Montserrat, sans-serif;
  background-color: 'gray';
  color: '#323232';
`