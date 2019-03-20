import styled from 'styled-components';
import { black } from '../../components/Week3/Color';
import { Row, Col } from 'antd';
const StyledContainerBg = styled.div`
  background: ${black};
  min-height: 90vh;
  padding: 30px 0;
`;
const StyledRow = styled(Row)`
  max-width: 1200px;
  margin: 0 auto !important;
`;
const StyledCol = styled(Col)`
  margin-bottom: 1em;
  background: white;
`;
export { StyledContainerBg, StyledRow, StyledCol };
