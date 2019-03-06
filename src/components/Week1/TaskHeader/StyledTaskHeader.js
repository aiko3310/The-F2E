import styled from 'styled-components';
import { fontBlue } from '../Color';
const StyledTaskHeader = styled.div`
  max-width: 220px;
  width: 100%;
  display: inline-block;
  padding: 23px;
  text-align: center;
  color: ${props => (props.click ? 'white' : fontBlue)};
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  border-bottom: ${props =>
    props.click ? `3px solid ${fontBlue}` : '3px solid transparent'};
`;

export { StyledTaskHeader };
