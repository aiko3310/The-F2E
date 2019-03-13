import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import Card from './Card';
import nodataImg from '../../assets/img/week2/nodata.jpg';
import { Row, Col, Pagination } from 'antd';
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
  const [loading, setLoading] = useState(true);
  const [animalArr, setAnimalArr] = useState([]);
  const [filterAnimalArr, setFilterAnimalArr] = useState([]);
  const [sex, setSex] = useState([]);
  const [pagination, setPagination] = useState({
    pageSize: 8,
    current: 1
  });

  useEffect(() => {
    const fetchData = async () => {
      const Data = await axios(
        'https://asms.coa.gov.tw/Asms/api/ViewNowAnimal'
      );
      const result = Data.data.map(datum => {
        return {
          // 收到時間
          acceptDate: moment(datum.AcceptDate).format('YYYY/MM/DD'),
          // 收容編號
          acceptNum: datum.AcceptNum,
          // 圖片
          pic: datum.pic
            ? `https://asms.coa.gov.tw/AmlApp/Upload/pic/${datum.pic}`
            : nodataImg,
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
    };
    fetchData();
    setLoading(false);
  }, []);

  useEffect(() => {
    newFilterAnimalArr();
    setPagePagination();
    console.log('useEffect animalArr');
  }, [loading]);
  // 過濾
  const filterCard = () => {
    let result = [...animalArr];
    return [...animalArr];
  };
  // 改變頁面
  const pageOnChange = page => {
    console.log('pageOnChange', filterCard().length);
    setPagination({
      ...pagination,
      total: filterCard().length,
      current: page
    });
    // console.log('pageOnChange', animalArr);
  };
  const newFilterAnimalArr = () => {
    setFilterAnimalArr(animalArr);
    console.log('target!', animalArr);
  };
  const setPagePagination = () => {
    setPagination({
      ...pagination,
      total: animalArr.length,
      onChange: pageOnChange
    });
  };
  const renderCard = () => {
    if (filterAnimalArr.length > 0) {
      const filterResult = filterAnimalArr.filter((datum, i) => {
        if (
          i < (pagination.current - 1) * 8 + 8 &&
          i >= (pagination.current - 1) * 8
        ) {
          return datum;
        }
      });
      const result = filterResult.map(datum => {
        return (
          <Col xs={12} md={6} key={datum.acceptNum}>
            <Card imgAlt={datum.acceptNum} src={datum.pic} sex={datum.sex} />
          </Col>
        );
      });
      return result;
    }
  };

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
            <StyledChooceBg>{sex}</StyledChooceBg>
          </Col>
          <Col xs={24} md={16}>
            <Row>{renderCard()}</Row>
            {/* {console.log('inrender', animalArr)} */}
            <Pagination {...pagination} />
          </Col>
        </Row>
      </StyledContainer>
    </StyledBg>
  );
};

export default Week2;
