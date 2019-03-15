import styled from 'styled-components';
import { blue, black, gray } from '../../components/Week2/Color';
import { Input, Col, Pagination } from 'antd';

const StyledBg = styled.div`
  background: ${black};
  min-height: 90vh;
`;
const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const StyledHeader = styled.div`
  background: ${blue};
  padding: 20px 0;
  h2 {
    text-align: center;
    color: white;
    margin: 0;
    font-weight: bold;
  }
`;
const StyledSearch = styled(Input.Search)`
  color: white;
  background: transparent;
  width: 94%;
  margin-left: 3%;
`;
const StyledChooceBg = styled.div`
  background: ${gray};
`;

const StyledCotent = styled(Col)`
  background: ${gray};
  padding: 1em;
`;
const StyledPagination = styled(Pagination)`
  text-align: center;
`;
export {
  StyledBg,
  StyledContainer,
  StyledHeader,
  StyledSearch,
  StyledChooceBg,
  StyledCotent,
  StyledPagination
};
