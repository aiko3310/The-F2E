import React, { useState } from 'react';
import moment from 'moment';
import IconComponent from './Icon';
import { Icon, Button, Input } from 'antd';
import {
  StyledShowTask,
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
  const [editShow, setEditShow] = useState({
    type: 'edit',
    isclick: false,
    theme: ''
  });

  const editShowHandler = () =>
    setEditShow({
      ...editShow,
      isclick: !editShow.isclick,
      theme: editShow.isclick ? '' : 'filled'
    });

  const renderTitle = () => {
    if (editShow.isclick) {
      return (
        <StyledInputTitle
          type='text'
          placeholder='Type Something Here...'
          onChange={props.editTitleHandler}
          value={props.editTitle}
        />
      );
    } else {
      return (
        <StyledTitle isDone={props.isDone}>
          {props.editTitle ? props.editTitle : 'Type Something Here...'}
        </StyledTitle>
      );
    }
  };
  return (
    <StyledShowTask showTask={props.showTask}>
      <StyledCotanier isStar={props.star.isclick}>
        <StyledCheckbox onClick={props.isDoneHandler} checked={props.isDone} />
        {renderTitle()}
        <IconComponent
          type={props.star.type}
          isclick={props.star.isclick}
          theme={props.star.theme}
          onClick={props.starShowHandler}
        />
        <IconComponent
          type={editShow.type}
          isclick={editShow.isclick}
          theme={editShow.theme}
          onClick={editShowHandler}
        />
      </StyledCotanier>
      <StyledEditCotainer isShow={editShow.isclick} isStar={props.star.isclick}>
        <StyledEditContent>
          <StyledDetilConatiner>
            <StyledDetilHeader>
              <Icon type='calendar' />
              <span>Deadline</span>
            </StyledDetilHeader>
            <StyledDetilContent>
              <StyledDatePicker
                onChange={props.datePickerHandler}
                placeholder='yyyy/mm/dd'
                size='large'
                value={moment(
                  props.date || moment().format('YYYY-MM-DD'),
                  'YYYY-MM-DD'
                )}
              />
              <StyledTimePicker
                onChange={props.timePickerHandler}
                size='large'
                placeholder='hh/mm'
                value={moment(props.time || moment().format('HH:mm'), 'HH:mm')}
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
                onChange={props.editContentHandler}
                value={props.content}
              />
            </StyledDetilContent>
          </StyledDetilConatiner>
        </StyledEditContent>
        <StyledFlexBox>
          <Button
            type='danger'
            icon='close'
            block
            size='large'
            onClick={props.onCancel}
          >
            {props.cancelTitle}
          </Button>
          <Button
            type='primary'
            icon='plus'
            block
            size='large'
            onClick={props.onAdd}
          >
            {props.addTitle}
          </Button>
        </StyledFlexBox>
      </StyledEditCotainer>
    </StyledShowTask>
  );
};

export default Task;
