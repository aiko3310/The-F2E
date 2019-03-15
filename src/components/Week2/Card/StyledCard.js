import styled from 'styled-components';
import { Card } from 'antd';
const StyledCard = styled(Card)`
  background: white;
  margin: 1em 1em 0.5em;
  border: 1px solid #ccc;
  .ant-card-body {
    padding: 12px;
  }
`;
const StyledImg = styled.div`
  width: 100%;
  height: 0px;
  padding-bottom: 100%;
  position: relative;
  > img {
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;
const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
  li {
    display: flex;
  }
  p {
    margin-bottom: 0;
    &:first-of-type {
      flex: 2;
    }
    &:last-of-type {
      flex: 3;
      font-weight: bold;
    }
  }
`;
export { StyledCard, StyledUl, StyledImg };
