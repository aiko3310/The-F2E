import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Row } from 'antd';
import Breakpoint from '../BreakPoint';
const StyledRow = styled(Row)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const StyledBg = styled.div`
  background: #222;
`;
const StyledLinkHome = styled(Link)`
  color: white;
  margin-bottom: 0;
  padding: 10px;
  font-size: 20px;
  display: block;
  &:focus {
    text-decoration: none;
  }
`;
const StyledImg = styled.img`
  width: 100px;
  height: 100px;
  animation: App-logo-spin infinite 20s linear;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const StyledLinks = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  a {
    display: block;
    color: white;
    font-size: 20px;
    &:focus {
      text-decoration: none;
    }
  }
  @media screen and (min-white: ${Breakpoint.xs}) {
    justify-content: space-between;
  }
`;
export { StyledBg, StyledRow, StyledLinkHome, StyledImg, StyledLinks };
