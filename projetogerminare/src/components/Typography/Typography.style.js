import styled from 'styled-components';

const StyledText = styled.p`
  font-weight: 500;
  color: #2F80ED;
`;

export const StyledTitle = styled(StyledText)`
  color: white;
  font-size: 22px;
  font-weight: 700;
  color: #116ACC;
  text-transform: uppercase;
`;

export const MiniText = styled(StyledText)`
  font-size: 14px;
`;

export const SmallText = styled(StyledText)`
  font-size: 16px;
`;

export const MediumText = styled(StyledText)`
  font-size: 18px;
`;

export const LargeText = styled(StyledText)`
  font-size: 20px;
`;