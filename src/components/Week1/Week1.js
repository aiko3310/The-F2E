import React, { useState } from 'react';
import moment from 'moment';
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
  const [star, setStar] = useState({
    type: 'star',
    isclick: false,
    theme: ''
  });
  const [showTask, setShowTask] = useState(false);
  const [taskId, setTaskId] = useState(0);
  const [taskList, setTaskList] = useState([]);
  const [dateChooce, setDateChooce] = useState(moment().format('YYYY-MM-DD'));
  const [timeChooce, setTimeChooce] = useState(moment().format('HH:mm'));
  const [editTitle, setEditTitle] = useState('');
  const [isDone, setIsDone] = useState(false);
  const [editContent, setEditContent] = useState('');
  const showTaskHandler = boolean => {
    setShowTask(boolean);
  };
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
    setTaskList(
      taskList.concat({
        title: editTitle,
        date: dateChooce,
        time: timeChooce,
        content: editContent,
        isDone: isDone,
        id: taskId,
        star: star
      })
    );
    setTaskId(taskId + 1);
    cleanTask();
  };
  const cancelTask = () => {
    cleanTask();
    setShowTask(false);
  };
  const cleanTask = () => {
    setStar({ ...star, isclick: false, theme: '' });
    setDateChooce(moment().format('YYYY-MM-DD'));
    setTimeChooce(moment().format('HH:mm'));
    setEditTitle('');
    setIsDone(false);
    setEditContent('');
  };
  const starShowHandler = () => {
    setStar({
      ...star,
      isclick: !star.isclick,
      theme: star.isclick ? '' : 'filled'
    });
  };
  const datePickerHandler = (date, dateString) => {
    setDateChooce(dateString);
  };
  const timePickerHandler = (time, timeString) => {
    setTimeChooce(timeString);
  };
  const editTitleHandler = e => {
    setEditTitle(e.target.value);
  };
  const isDoneHandler = e => {
    setIsDone(e.target.checked);
  };
  const editContentHandler = e => {
    setEditContent(e.target.value);
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
  const changeTask = (id, value, title) => {
    const TaskList = taskList.map(task => {
      if (task.id === id) {
        return {
          ...task,
          [title]: value
        };
      } else {
        return task;
      }
    });
    setTaskList(TaskList);
  };
  const changeTaskStar = (id, value) => {
    const TaskList = taskList.map(task => {
      if (task.id === id) {
        return {
          ...task,
          star: {
            ...task.star,
            isclick: value,
            theme: task.star.isclick ? '' : 'filled'
          }
        };
      } else {
        return task;
      }
    });
    setTaskList(TaskList);
  };
  const removeTask = id => {
    const taskIndex = taskList.findIndex(task => task.id === id);
    console.log(taskList);
    setTaskList(taskList.splice(taskIndex, 1));
  };
  return (
    <StyledContainerBg>
      <StyledContainer>
        <StyledBG>
          <StyledContent>{renderTaskHeader}</StyledContent>
        </StyledBG>
        <StyledBG BGGray>
          <StyledContent isCotent>
            <StyledAddTask onClick={showTaskHandler}>
              <Icon type='plus' />
              <p>Add Task</p>
            </StyledAddTask>
            <Task
              showTask={showTask}
              star={star}
              starShowHandler={starShowHandler}
              editTitleHandler={editTitleHandler}
              editTitle={editTitle}
              isDone={isDone}
              isDoneHandler={isDoneHandler}
              datePickerHandler={datePickerHandler}
              date={dateChooce}
              timePickerHandler={timePickerHandler}
              time={timeChooce}
              editContentHandler={editContentHandler}
              content={editContent}
              cancelTitle='Cancel'
              onCancel={cancelTask}
              addTitle='Add Task'
              onAdd={addTask}
            />
            {taskList.map((task, key) => {
              return (
                <Task
                  showTask={true}
                  key={key}
                  editTitle={task.title}
                  star={task.star}
                  starShowHandler={e => changeTaskStar(key, e.target.checked)}
                  editTitleHandler={e =>
                    changeTask(key, e.target.value, 'title')
                  }
                  date={task.date}
                  datePickerHandler={(date, dateString) =>
                    changeTask(key, dateString, 'date')
                  }
                  time={task.time}
                  timePickerHandler={(time, timeString) =>
                    changeTask(key, timeString, 'time')
                  }
                  content={task.content}
                  editContentHandler={e =>
                    changeTask(key, e.target.value, 'content')
                  }
                  isDone={task.isDone}
                  isDoneHandler={e =>
                    changeTask(key, e.target.checked, 'isDone')
                  }
                  cancelTitle='Remove Task'
                  onCancel={() => removeTask(key)}
                  addTitle='Edit Task'
                />
              );
            })}
          </StyledContent>
        </StyledBG>
      </StyledContainer>
    </StyledContainerBg>
  );
};

export default Week1;
