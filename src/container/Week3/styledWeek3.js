import styled from 'styled-components';
import { black, yellow, blue, gray } from '../../components/Week3/Color';
import { Row, Col, Tabs } from 'antd';
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
    font-size: 2.5em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0;
  }
`;
const StyledTabPane = styled(Tabs.TabPane)`
  ${props => {
    const value = props.background;
    if (value < 5) {
      return `
      background: ${blue};
      box-shadow: 0 0 1em 0 ${blue};
      `;
    } else if (value >= 5 && value <= 8) {
      return `
      background: ${yellow};
      box-shadow: 0 0 1em 0 ${yellow};
      `;
    } else {
      return `
      background: ${gray};
      box-shadow: 0 0 1em 0 ${gray};
      `;
    }
  }};
  border-radius: 10px;
  padding: 10px;
`;
export {
  StyledContainerBg,
  StyledRow,
  StyledCol,
  StyledContent,
  StyledTabPane
};
