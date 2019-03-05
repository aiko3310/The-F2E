import styled from 'styled-components';
const blue = '#4A90E2'
const black = '#222'
const gray = '#E1E1E1'
// const fontBlue = '#00408B';
const StyledContainerBg = styled.div`
  background: ${black};
  min-height: 90vh;
`;
const StyledContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;
const StyledBG = styled.div`
  background: ${props => props.BGGray ? gray: blue};
`;
const StyledContent = styled.div`
  margin: 0 auto;
  max-width: 660px;
  padding: ${props => props.isCotent ? '10px 0' : ''}
`;
export {StyledContainerBg, StyledContainer, StyledBG, StyledContent};
