import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import Card from '../../components/Week2/Card';
import nodataImg from '../../assets/img/week2/nodata.jpg';
import { Row, Col, Icon } from 'antd';
import {
  StyledBg,
  StyledContainer,
  StyledHeader,
  StyledSearch,
  StyledChooceBg,
  StyledCotent,
  StyledPagination
} from './StyledWeek2';

class Week2 extends Component {
  state = {
    loading: false,
    animalArr: [],
    filterAnimalArr: [],
    inputSearch: '',
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
      const age = () => {
        if (datum.Age !== '') {
          return datum.Age;
        } else {
          if (datum.Age2 !== '') {
            return datum.Age2;
          } else {
            return '未知';
          }
        }
      };
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
        age: age(),
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
        total: this.state.filterAnimalArr.length,
        current: page
      }
    });
  };
  // input 搜尋
  onSearch = e => {
    const { value } = e.target;
    this.setState({ inputSearch: value }, () => this.filterCard());
  };
  // 過濾
  filterCard = () => {
    let result = [...this.state.animalArr].filter(datum => {
      if (
        Object.values(datum).filter(item =>
          item.toString().includes(this.state.inputSearch)
        ).length > 0
      ) {
        return datum;
      } else {
        // eslint-disable-next-line array-callback-return
        return;
      }
    });
    this.setState({ filterAnimalArr: result }, () =>
      console.log(this.state.filterAnimalArr)
    );
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
        } else {
          // eslint-disable-next-line array-callback-return
          return;
        }
      });
      const result = filterResult.map(datum => (
        <Col xs={11} md={6} key={datum.acceptNum}>
          <Card
            imgAlt={datum.acceptNum}
            acceptDate={datum.acceptDate}
            acceptNum={datum.acceptNum}
            pic={datum.pic}
            sex={datum.sex}
            breedName={datum.breedName}
            age={datum.age}
            note={datum.note}
            areaName={datum.areaName}
            areaCode={datum.areaCode}
          />
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
              <Col xs={22} md={6}>
                <h2>Animal.com</h2>
              </Col>
              <Col xs={22} md={18}>
                <StyledSearch
                  placeholder='輸入條件後按下 Enter 或點擊搜尋'
                  onChange={e => this.onSearch(e)}
                />
              </Col>
            </Row>
          </StyledHeader>
          <Row>
            <Col xs={22} md={6}>
              <StyledChooceBg>23</StyledChooceBg>
            </Col>
            <StyledCotent xs={22} md={18}>
              <Row>{this.renderCard()}</Row>
              <StyledPagination {...this.state.pagination} />
            </StyledCotent>
          </Row>
        </StyledContainer>
      </StyledBg>
    );
  }
}

export default Week2;
