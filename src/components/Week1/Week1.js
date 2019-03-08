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
  const [showAddTaskBox, setShowAddTaskBox] = useState(true);
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
    changeTaskShow(title);
  };
  const changeTaskShow = taskHeaderTitle => {
    switch (taskHeaderTitle) {
      case 'In Progress':
        setShowTask(false);
        setShowAddTaskBox(false);
        setTaskList(
          taskList.map(task => {
            return {
              ...task,
              show: task.isDone ? false : true
            };
          })
        );
        break;
      case 'Completed':
        setShowTask(false);
        setShowAddTaskBox(false);
        setTaskList(
          taskList.map(task => {
            return {
              ...task,
              show: task.isDone ? true : false
            };
          })
        );
        break;
      default:
        setShowTask(true);
        setShowAddTaskBox(true);
        setTaskList(
          taskList.map(task => {
            return {
              ...task,
              show: true
            };
          })
        );
        break;
    }
  };
  // 新增task
  const addTask = () => {
    setTaskList(
      taskList.concat({
        title: editTitle,
        date: dateChooce,
        time: timeChooce,
        content: editContent,
        isDone: isDone,
        id: taskId,
        star: star,
        show: true
      })
    );
    setTaskId(taskId + 1);
    cleanTask();
  };
  // 關閉 add task
  const cancelTask = () => {
    cleanTask();
    setShowTask(false);
  };
  // 清空 task
  const cleanTask = () => {
    setStar({ ...star, isclick: false, theme: '' });
    setDateChooce(moment().format('YYYY-MM-DD'));
    setTimeChooce(moment().format('HH:mm'));
    setEditTitle('');
    setIsDone(false);
    setEditContent('');
  };
  // add task 時改變 star 狀態
  const starShowHandler = () => {
    setStar({
      ...star,
      isclick: !star.isclick,
      theme: star.isclick ? '' : 'filled'
    });
  };
  // 改變日期
  const datePickerHandler = (date, dateString) => {
    setDateChooce(dateString);
  };
  // 改變時間
  const timePickerHandler = (time, timeString) => {
    setTimeChooce(timeString);
  };
  // 改變 task title
  const editTitleHandler = e => {
    setEditTitle(e.target.value);
  };
  // 更改 checkbox 狀態
  const isDoneHandler = e => {
    setIsDone(e.target.checked);
  };
  // 更改 content
  const editContentHandler = e => {
    setEditContent(e.target.value);
  };
  // my tasks, in progress, completed
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
  // 更改 task 內容
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
  //更改 star 狀態
  const changeTaskStar = id => {
    const TaskList = taskList.map(task => {
      if (task.id === id) {
        return {
          ...task,
          star: {
            ...task.star,
            isclick: !task.star.isclick,
            theme: task.star.isclick ? '' : 'filled'
          }
        };
      } else {
        return task;
      }
    });
    setTaskList(TaskList);
  };
  // 移除 task 列表裡的 task
  const removeTask = id => {
    const newTask = [...taskList];
    const taskIndex = newTask.findIndex(task => task.id === id);
    newTask.splice(taskIndex, 1);
    const result = newTask.map((task, id) => {
      return { ...task, id: id };
    });
    setTaskList(result);
  };
  const renderTask = () => {
    if (taskList.length) {
      return taskList.map((task, key) => {
        return (
          <Task
            showTask={task.show}
            key={key}
            editTitle={task.title}
            star={task.star}
            starShowHandler={() => changeTaskStar(key)}
            editTitleHandler={e => changeTask(key, e.target.value, 'title')}
            date={task.date}
            datePickerHandler={(date, dateString) =>
              changeTask(key, dateString, 'date')
            }
            time={task.time}
            timePickerHandler={(time, timeString) =>
              changeTask(key, timeString, 'time')
            }
            content={task.content}
            editContentHandler={e => changeTask(key, e.target.value, 'content')}
            isDone={task.isDone}
            isDoneHandler={e => changeTask(key, e.target.checked, 'isDone')}
            cancelTitle='Remove Task'
            onCancel={() => removeTask(key)}
          />
        );
      });
    } else {
      return null;
    }
  };
  return (
    <StyledContainerBg>
      <StyledContainer>
        <StyledBG>
          <StyledContent>{renderTaskHeader}</StyledContent>
        </StyledBG>
        <StyledBG BGGray>
          <StyledContent isCotent>
            <StyledAddTask onClick={showTaskHandler} show={showAddTaskBox}>
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
            {renderTask()}
          </StyledContent>
        </StyledBG>
      </StyledContainer>
    </StyledContainerBg>
  );
};

export default Week1;
