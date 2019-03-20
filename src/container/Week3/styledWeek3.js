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
  padding: 1em;
`;
const StyledContent = styled.div`
  background: white;
  padding: 1em;
  border-radius: 10px;
  > p {
    font-size: 18px;
  }
`;
export { StyledContainerBg, StyledRow, StyledCol, StyledContent };
