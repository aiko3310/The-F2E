import React, { useState } from 'react';
import TaskHeader from './TaskHeader';
import Task from './Task';
import { Icon } from 'antd';
import {
  StyledContainerBg,
  StyledContainer,
  StyledBG,
  StyledContent,
  StyledAddTask
} from './StyledWeek1';

const Week1 = () => {
  const [taskHeader, setTaskHeader] = useState([
    {
      title: 'My Tasks',
      click: true
    },
    {
      title: 'In Progress',
      click: false
    },
    {
      title: 'Completed',
      click: false
    }
  ]);
  const [taskList, setTaskList] = useState([]);
  const taskHeaderHandler = title => {
    const result = taskHeader.map(item => {
      return {
        ...item,
        click: item.title === title ? true : false
      };
    });
    setTaskHeader(result);
  };
  const addTask = () => {
    // setTaskList(taskList.push({
    // }));
  };
  const renderTaskHeader = taskHeader.map(item => {
    return (
      <TaskHeader
        key={item.title}
        title={item.title}
        click={item.click}
        onClick={() => taskHeaderHandler(item.title)}
      />
    );
  });
  // const renderTask = taskList.map(task => )
  return (
    <StyledContainerBg>
      <StyledContainer>
        <StyledBG>
          <StyledContent>{renderTaskHeader}</StyledContent>
        </StyledBG>
        <StyledBG BGGray>
          <StyledContent isCotent>
            <StyledAddTask>
              <Icon type='plus' />
              <p>Add Task</p>
            </StyledAddTask>
            <Task onAdd={addTask} />
          </StyledContent>
        </StyledBG>
      </StyledContainer>
    </StyledContainerBg>
  );
};

export default Week1;
