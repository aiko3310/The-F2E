import React from 'react';
import { StyledCard, StyledUl, StyledImg } from './StyledCard';
const Card = props => {
  const data = {
    接收時間: props.acceptDate,
    性別: props.sex,
    品種: props.breedName,
    年齡: props.age,
    所在地: props.areaName
  };
  const renderData = () => {
    const result = Object.keys(data).map(key => (
      <li key={data[key] + key}>
        <p>{key}</p>
        <p>{data[key]}</p>
      </li>
    ));
    return result;
  };
  return (
    <StyledCard>
      <StyledImg>
        <img src={props.pic} alt={props.imgAlt} />
      </StyledImg>
      <StyledUl>{renderData()}</StyledUl>
    </StyledCard>
  );
};

export default Card;
