import React from 'react';
import { StyledCard, StyledCotent } from './StyledCard';
const Card = props => {
  return (
    <StyledCard cover={<img src={props.src} alt={props.imgAlt} />}>
      <StyledCotent>
        <div>
          <p>性別</p>
        </div>
        <div>
          <p>{props.sex}</p>
        </div>
      </StyledCotent>
    </StyledCard>
  );
};

export default Card;
