import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  justify-content: space-between;
  flex-wrap: wrap;
  a {
    display: block;
    color: white;
    font-size: 20px;
    &:focus {
      text-decoration: none;
    }
  }
`;
export { StyledBg, StyledLinkHome, StyledImg, StyledLinks };
