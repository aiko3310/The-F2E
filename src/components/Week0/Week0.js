import React from 'react';
import { Input } from 'antd';
import axios from 'axios';
import { StyledBG, StyledCard } from './StyledWeek0';
const Search = Input.Search;
const Week0 = () => {
  const searchInputHandler = value => {
    axios({
      method: 'post',
      url: 'https://www.thef2e.com/api/isSignUp',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        email: value
      }
    }).then(res => console.log(res));
  };
  return (
    <StyledBG>
      <StyledCard>
        <p>The-F2E</p>
        <p>前端精神時光屋</p>
        <p>報名查詢</p>
        <Search
          placeholder='輸入 Email'
          enterButton='Search'
          size='large'
          onSearch={value => searchInputHandler(value)}
        />
      </StyledCard>
    </StyledBG>
  );
};

export default Week0;
