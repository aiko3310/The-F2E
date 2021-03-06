import styled from 'styled-components';
import { blue, black, gray } from '../../components/Week2/Color';
import { Input, Col, Pagination, Alert, Spin, Tag } from 'antd';

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
  padding: 1em;
  > h2 {
    font-weight: bold;
    padding-bottom: 0.5em;
    border-bottom: 1px solid #ccc;
  }
`;

const StyledCotent = styled(Col)`
  background: ${gray};
  padding: 1em;
`;
const StyledPagination = styled(Pagination)`
  text-align: center;
`;
const StyledSexContainer = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5em;
  margin-bottom: 0.5em;
  > p {
    font-size: 18px;
    margin-bottom: 0.5em;
  }
  > div {
    display: flex;
    flex-direction: column;
  }
`;
const StyledSelectConteiner = styled.div`
  margin-bottom: 1em;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5em;
  > p {
    font-size: 18px;
    margin-bottom: 0.5em;
  }
  > div {
    width: 100%;
  }
`;
const StyledAlert = styled(Alert)`
  width: 96.5%;
  margin-left: 1.5%;
`;
const StyledSpin = styled(Spin)`
  text-align: center;
  display: block;
`;
const StyledTagsContainer = styled.div`
  width: 94%;
  margin-left: 3%;
`;
const StyledTag = styled(Tag)`
  margin-top: 1%;
`;
export {
  StyledBg,
  StyledContainer,
  StyledHeader,
  StyledSearch,
  StyledChooceBg,
  StyledCotent,
  StyledPagination,
  StyledSexContainer,
  StyledSelectConteiner,
  StyledAlert,
  StyledSpin,
  StyledTagsContainer,
  StyledTag
};
