import React from 'react';
import { StyledIcon } from './StyledIcon';
const Icons = props => {
  return (
    <StyledIcon 
      type={props.type} 
      theme={props.theme} 
      onClick={props.onClick}
      clicked={props.isclick.toString()}
      />
  );
};

export default Icons;
