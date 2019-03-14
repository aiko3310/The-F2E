import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import Card from '../../components/Week2/Card';
import nodataImg from '../../assets/img/week2/nodata.jpg';
import { Row, Col, Pagination } from 'antd';
import {
  StyledBg,
  StyledContainer,
  StyledHeader,
  StyledSearch,
  StyledChooceBg
} from './StyledWeek2';

class Week2 extends Component {
  state = {
    loading: false,
    animalArr: [],
    filterAnimalArr: [],
    searchItem: {
      sex: []
    },
    pagination: {
      pageSize: 8,
      current: 1,
      onChange: page => this.pageOnChange(page)
    }
  };
  // 取得資料
  fetchData = async () => {
    const Data = await axios('https://asms.coa.gov.tw/Asms/api/ViewNowAnimal');
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
    this.setState({
      animalArr: result,
      filterAnimalArr: result,
      pagination: {
        ...this.state.pagination,
        total: result.length
      }
    });
  };
  // 改變頁面
  pageOnChange = page => {
    this.setState({
      pagination: {
        ...this.state.pagination,
        total: this.filterCard().length,
        current: page
      }
    });
  };
  // 過濾
  filterCard = () => {
    let result = [...this.state.animalArr].filter(datum => datum.sex === '公');
    this.setState({ filterAnimalArr: result });
  };
  // 整理資料
  setArr = (arr, item) => {
    const result = arr.map(datum => datum[item]);
    return [...new Set(result)];
  };
  async componentDidMount() {
    await this.fetchData();
  }
  renderCard = () => {
    if (this.state.filterAnimalArr.length > 0) {
      const filterResult = this.state.filterAnimalArr.filter((datum, i) => {
        if (
          i < (this.state.pagination.current - 1) * 8 + 8 &&
          i >= (this.state.pagination.current - 1) * 8
        ) {
          return datum;
        }
      });
      const result = filterResult.map(datum => (
        <Col xs={12} md={6} key={datum.acceptNum}>
          <Card imgAlt={datum.acceptNum} src={datum.pic} sex={datum.sex} />
        </Col>
      ));
      return result;
    }
  };
  render() {
    return (
      <StyledBg>
        <StyledContainer>
          <StyledHeader>
            <Row>
              <Col xs={24} md={6}>
                <h2>Animal.com</h2>
              </Col>
              <Col xs={24} md={18}>
                <StyledSearch placeholder='輸入條件' />
              </Col>
            </Row>
          </StyledHeader>
          <Row>
            <Col xs={24} md={6}>
              <StyledChooceBg>23</StyledChooceBg>
            </Col>
            <Col xs={24} md={18}>
              <Row gutter={16}>{this.renderCard()}</Row>
              <Pagination {...this.state.pagination} />
            </Col>
          </Row>
        </StyledContainer>
      </StyledBg>
    );
  }
}

export default Week2;
