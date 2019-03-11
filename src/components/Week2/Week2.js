import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import {
  StyledBg,
  StyledContainer,
  StyledHeader,
  StyledSearch
} from './StyledWeek2';

const Week2 = () => {
  useEffect(() => {
    axios({
      method: 'get',
      url:
        'http://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      origin: 'http://localhost:3000'
    }).then(res => {
      console.log(res);
    });
  });
  return (
    <StyledBg>
      <StyledContainer>
        <StyledHeader>
          <Row>
            <Col xs={24} md={8}>
              <h2>Animal.com</h2>
            </Col>
            <Col xs={24} md={8}>
              <StyledSearch placeholder='輸入條件' />
            </Col>
          </Row>
        </StyledHeader>
      </StyledContainer>
    </StyledBg>
  );
};

export default Week2;
