import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 8px;
  border: none;
  padding: 10px 50px;
  width: fit-content;
  text-transform: uppercase;
  font-weight: 700;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

export const BlueButton = styled(StyledButton)`
  background-color: #191A4B;
  color: white;
  cursor: pointer;
`;
export const WhiteButton = styled(StyledButton)`
  background-color: #FFFFFF;
  color: #252525;
  cursor: pointer;
`;

export const DisabledButton = styled(StyledButton)`
  background-color: 'gray';
  color: '#323232';
`