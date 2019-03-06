import React, { useState } from 'react';
import IconComponent from './Icon';
import { Icon, Button, Input } from 'antd';
import {
  StyledCotanier,
  StyledCheckbox,
  StyledInputTitle,
  StyledEditCotainer,
  StyledEditContent,
  StyledDatePicker,
  StyledTimePicker,
  StyledDetilConatiner,
  StyledDetilHeader,
  StyledDetilContent,
  StyledFlexBox,
  StyledTitle
} from './StyledTask';
const { TextArea } = Input;
const Task = props => {
  const [iconList, setIconList] = useState([
    {
      type: 'star',
      isclick: false,
      theme: ''
    },
    {
      type: 'edit',
      isclick: false,
      theme: ''
    }
  ]);
  const [dateChooce, setDateChooce] = useState('');
  const [timeChooce, setTimeChooce] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [isDone, setIsDone] = useState(false);
  const [editContent, setEditContent] = useState('');
  const iconClickHandler = type => {
    const result = iconList.map(icon => {
      if (icon.type === type) {
        return {
          ...icon,
          isclick: icon.isclick ? false : true,
          theme: icon.isclick ? '' : 'filled'
        };
      } else {
        return { ...icon };
      }
    });
    setIconList(result);
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
  const renderIcon = iconList.map((icon, index) => {
    return (
      <IconComponent
        key={index}
        type={icon.type}
        isclick={icon.isclick}
        theme={icon.theme}
        onClick={() => iconClickHandler(icon.type)}
      />
    );
  });
  const renderTitle = () => {
    if (iconList[1].isclick) {
      return (
        <StyledInputTitle
          type='text'
          placeholder='Type Something Here...'
          onChange={editTitleHandler}
          value={editTitle}
        />
      );
    } else {
      return (
        <StyledTitle isDone={isDone}>
          {editTitle ? editTitle : 'Type Something Here...'}
        </StyledTitle>
      );
    }
  };
  return (
    <>
      <StyledCotanier isStar={iconList[0].isclick}>
        <StyledCheckbox onClick={isDoneHandler} />
        {renderTitle()}
        {renderIcon}
      </StyledCotanier>
      <StyledEditCotainer
        isShow={iconList[1].isclick}
        isStar={iconList[0].isclick}
      >
        <StyledEditContent>
          <StyledDetilConatiner>
            <StyledDetilHeader>
              <Icon type='calendar' />
              <span>Deadline</span>
            </StyledDetilHeader>
            <StyledDetilContent>
              <StyledDatePicker
                onChange={datePickerHandler}
                placeholder='yyyy/mm/dd'
                size='large'
              />
              <StyledTimePicker
                onChange={timePickerHandler}
                size='large'
                placeholder='hh/mm'
                format='HH:mm'
              />
            </StyledDetilContent>
          </StyledDetilConatiner>
          <StyledDetilConatiner>
            <StyledDetilHeader>
              <Icon type='message' />
              <span>Comment</span>
            </StyledDetilHeader>
            <StyledDetilContent>
              <TextArea
                rows={4}
                placeholder='Type your memo here…'
                onChange={editContentHandler}
              />
            </StyledDetilContent>
          </StyledDetilConatiner>
        </StyledEditContent>
        <StyledFlexBox>
          <Button type='danger' icon='close' block size='large'>
            Cancel
          </Button>
          <Button
            type='primary'
            icon='plus'
            block
            size='large'
            onClick={props.onAdd}
          >
            Add Task
          </Button>
        </StyledFlexBox>
      </StyledEditCotainer>
    </>
  );
};

export default Task;
