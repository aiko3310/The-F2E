import styled from 'styled-components';
import { Card, Row } from 'antd';

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
const StyledRow = styled(Row)`
  width: 100%;
`;
export { StyledBG, StyledCard, StyledOl, StyledRow };
