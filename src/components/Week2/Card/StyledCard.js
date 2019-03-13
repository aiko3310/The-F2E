import styled from 'styled-components';

const StyledCard = styled.div`
  background: white;
`;
const StyledImg = styled.div`
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: cover;
  width: 200px;
  height: 200px;
`;
const StyledCotent = styled.div`
  display: flex;
`;
export { StyledCard, StyledCotent, StyledImg };
