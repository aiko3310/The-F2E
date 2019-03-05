import React, { useState } from 'react';
import IconComponent from './Icon';
import { Icon } from 'antd';
import { 
  StyledCotanier,
  StyledCheckbox,
  StyledInputTitle,
  StyledEditCotainer,
  StyledEditContent,
  StyledDatePicker,
  StyledTimePicker
} from './StyledTask';
const Task = () => {
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
    },
  ])
  const [dateChooce, setDateChooce] = useState('')
  const [timeChooce, setTimeChooce] = useState('')
  const iconClickHandler = type => {
    const result = iconList.map(icon => {
      if(icon.type === type) {
        return {
          ...icon,
          isclick: icon.isclick ? false : true,
          theme: icon.isclick ? '' : 'filled'
        }        
      } else {
        return {...icon}
      };
    })
    setIconList(result);
  }
  const datePickerHandler = (date, dateString) => {
    setDateChooce(dateString)
  }
  const timePickerHandler = (time, timeString) => {
    setTimeChooce(timeString)
  }
  const renderIcon = iconList.map((icon, index) => {
    return (
      <IconComponent 
        key={index} 
        type={icon.type} 
        isclick={icon.isclick}
        theme={icon.theme}
        onClick={() => iconClickHandler(icon.type)}
      />)
    })
  return (
    <>
      <StyledCotanier isStar={iconList[0].isclick}>
        <StyledCheckbox/>
        <StyledInputTitle type='text' placeholder='Type Something Here...'/>
        {renderIcon}
      </StyledCotanier>
      <StyledEditCotainer isShow={iconList[1].isclick}>
        <StyledEditContent>
          <div>
            <div>
              <Icon type="calendar" />
              <span>Deadline</span>
            </div>
            <div>
              <StyledDatePicker 
                onChange={datePickerHandler} 
                placeholder='yyyy/mm/dd'
                size='large'
              />
              <StyledTimePicker 
                onChange={timePickerHandler}
              />
            </div>
          </div>
        </StyledEditContent>
      </StyledEditCotainer>
    </>
  );
};

export default Task;
