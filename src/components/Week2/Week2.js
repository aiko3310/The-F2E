import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Pagination } from 'antd';
import moment from 'moment';
import Card from './Card';
import {
  StyledBg,
  StyledContainer,
  StyledHeader,
  StyledSearch,
  StyledChooceBg
} from './StyledWeek2';

const setArr = (arr, item) => {
  const result = arr.map(datum => {
    return datum[item];
  });
  return [...new Set(result)];
};
const Week2 = () => {
  const [animalArr, setAnimalArr] = useState([]);
  const [sex, setSex] = useState([]);
  const [pagination, setPagination] = useState({
    pageSizeOptions: 10,
    total: 0
  });
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://asms.coa.gov.tw/Asms/api/ViewNowAnimal'
    })
      .then(res => {
        const result = res.data.map(datum => {
          return {
            // 收到時間
            acceptDate: moment(datum.AcceptDate).format('YYYY/MM/DD'),
            // 收容編號
            acceptNum: datum.AcceptNum,
            // 圖片
            pic: `https://asms.coa.gov.tw/AmlApp/Upload/pic/${datum.pic}`,
            // 性別
            sex: datum.SexName,
            // 品種
            breedName: datum.BreedName,
            // 年齡
            age: datum.Age !== '' ? datum.Age : datum.Age2,
            // 注意事項
            note: datum.Note,
            // 地區
            areaName: datum.areaName,
            // 地區 code
            areaCode: datum.area
          };
        });
        // 結果
        setAnimalArr(result);
        // 排序性別
        const sexArr = setArr(result, 'sex');
        setSex(sexArr);
      })
      .catch(err => console.error(err));
  }, []);
  const filterCard = () => {
    let result;
    result = animalArr;
    return result;
  };
  // setPagination({
  //   ...pagination,
  //   total: filterCard().length
  // });
  const renderCard = filterCard().map(datum => {
    return (
      <Col xs={12} md={6} key={datum.acceptNum}>
        <Card imgAlt={datum.acceptNum} src={datum.pic} sex={datum.sex} />
      </Col>
    );
  });
  return (
    <StyledBg>
      <StyledContainer>
        <StyledHeader>
          <Row>
            <Col xs={24} md={8}>
              <h2>Animal.com</h2>
            </Col>
            <Col xs={24} md={14}>
              <StyledSearch placeholder='輸入條件' />
            </Col>
          </Row>
        </StyledHeader>
        <Row>
          <Col xs={24} md={8}>
            <StyledChooceBg>456</StyledChooceBg>
          </Col>
          <Col xs={24} md={16}>
            <Row>{renderCard}</Row>

            <Pagination />
          </Col>
        </Row>
      </StyledContainer>
    </StyledBg>
  );
};

export default Week2;
