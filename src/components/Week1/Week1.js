import React, {useState} from 'react';
import TaskHeader from './TaskHeader';
import Task from './Task';
import {StyledContainerBg, StyledContainer, StyledBG, StyledContent} from './StyledWeek1';

const Week1 = () => {
  const [taskHeader,
    setTaskHeader] = useState([{
    title: 'My Tasks',
    click: true
  }, {
    title: 'In Progress',
    click: false
  }, {
    title: 'Completed',
    click: false
  }]);
  const taskHeaderHandler = title => {
    const result = taskHeader.map(item => {
      return {
        ...item,
        click: item.title === title ? true : false
      }
    })
    setTaskHeader(result)
  }
  const renderTaskHeader = taskHeader.map(item => {
    return (<TaskHeader
      key={item.title}
      title={item.title}
      click={item.click}
      onClick={() => taskHeaderHandler(item.title)}/>)
  })

  return (
    <StyledContainerBg>
      <StyledContainer>
        <StyledBG>
          <StyledContent>
            {renderTaskHeader}
          </StyledContent>
        </StyledBG>
        <StyledBG BGGray>
          <StyledContent isCotent>
            <Task />
          </StyledContent>
        </StyledBG>
      </StyledContainer>
    </StyledContainerBg>
  )
}

export default Week1;
