import styled from 'styled-components';
import { blue, black, gray } from './Color';

const StyledContainerBg = styled.div`
  background: ${black};
  min-height: 90vh;
`;
const StyledContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;
const StyledBG = styled.div`
  background: ${props => (props.BGGray ? gray : blue)};
`;
const StyledContent = styled.div`
  margin: 0 auto;
  max-width: 660px;
  padding: ${props => (props.isCotent ? '10px 0' : '')};
  min-height: ${props => (props.isCotent ? '90vh' : '')};
`;
const StyledAddTask = styled.div`
  background: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 24px;
  padding: 8px 32px;
  border: 1px solid #ccc;
  border-radius: 4px;
  p {
    margin-bottom: 0;
  }
  &:hover {
    box-shadow: 0 0 3px 1px #ccc;
  }
`;
export {
  StyledContainerBg,
  StyledContainer,
  StyledBG,
  StyledContent,
  StyledAddTask
};
