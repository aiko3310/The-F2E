import styled from 'styled-components';
const StyledBG = styled.div`
  background: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;
const StyledCard = styled.div`
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5%;
  text-align: center;
  p {
    margin-bottom: 10px;
    font-size: 1.5em;
    &:last-of-type {
      margin-bottom: 2em;
    }
  }
`;
export { StyledBG, StyledCard };
