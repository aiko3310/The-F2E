import React from 'react';
import {StyledTaskHeader} from './StyledTaskHeader';
const TaskHeader = props => {
  return (
    <StyledTaskHeader click={props.click} onClick={props.onClick}>
      {props.title}
    </StyledTaskHeader>
  )
};

export default TaskHeader;
