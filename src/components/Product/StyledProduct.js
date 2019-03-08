import styled from 'styled-components';
import { Card } from 'antd';

const StyledBG = styled.div`
  background: #222;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;
const StyledCard = styled(Card)`
  width: 100%;
  h3 {
    margin-bottom: 0;
    font-size: 1.5em;
  }
`;
const StyledOl = styled.ol`
  padding-left: 18px;
  font-size: 1.3em;
`;
export { StyledBG, StyledCard, StyledOl };
