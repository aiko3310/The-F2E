import React from 'react';
import { StyledCard, StyledCotent, StyledImg } from './StyledCard';
const Card = props => {
  return (
    <StyledCard>
      <StyledImg src={props.src} />
      <StyledCotent>
        <div>
          <p>性別:</p>
        </div>
        <div>
          <p>{props.sex}</p>
        </div>
      </StyledCotent>
    </StyledCard>
  );
};

export default Card;
