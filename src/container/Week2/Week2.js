import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import Card from '../../components/Week2/Card';
import nodataImg from '../../assets/img/week2/nodata.jpg';
import { Row, Col, Checkbox, Select, Button, message } from 'antd';
import {
  StyledBg,
  StyledContainer,
  StyledHeader,
  StyledSearch,
  StyledChooceBg,
  StyledCotent,
  StyledPagination,
  StyledSexContainer,
  StyledSelectConteiner,
  StyledAlert,
  StyledSpin,
  StyledTagsContainer,
  StyledTag
} from './StyledWeek2';

const CheckboxGroup = Checkbox.Group;
const Option = Select.Option;

class Week2 extends Component {
  state = {
    loading: true,
    animalArr: [],
    filterAnimalArr: [],
    searchItem: {
      sex: [],
      age: [],
      areaName: []
    },
    onSearchItem: {
      inputSearch: '',
      tags: [],
      sex: [],
      age: '選擇年齡',
      areaName: '選擇地區'
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
        sex: datum.SexName === 'none' ? '未知' : datum.SexName,
        // 品種
        breedName: datum.BreedName,
        // 年齡
        age: age(),
        // 注意事項
        note: datum.Note,
        // 地區
        areaName: datum.areaName ? datum.areaName : '未知',
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
      },
      searchItem: {
        sex: this.setArr(result, 'sex'),
        age: this.setArr(result, 'age'),
        areaName: this.setArr(result, 'areaName')
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
  onSearch = (value, setItem) => {
    if (setItem === 'inputSearch') {
      if (this.state.onSearchItem.tags.indexOf(value) === -1) {
        this.setState(
          prevState => prevState.onSearchItem.tags.push(value),
          () => {
            this.filterCard();
          }
        );
      } else {
        message.error('重複條件');
      }
      this.setState({
        onSearchItem: {
          ...this.state.onSearchItem,
          inputSearch: ''
        }
      });
    } else {
      this.setState(
        {
          onSearchItem: {
            ...this.state.onSearchItem,
            [setItem]: value
          }
        },
        () => {
          this.filterCard();
        }
      );
    }
  };
  searchOnChange = value => {
    this.setState({
      onSearchItem: {
        ...this.state.onSearchItem,
        inputSearch: value
      }
    });
  };
  // 過濾
  filterCard = async () => {
    await this.setState({ loading: true });
    // tags過濾
    let result = [...this.state.animalArr].filter(datum => {
      const tags = this.state.onSearchItem.tags;
      if (tags.length > 0) {
        const serachResult = tags.filter(tag => {
          if (Object.values(datum).indexOf(tag) > 0) {
            return tag;
          } else {
            // eslint-disable-next-line array-callback-return
            return;
          }
        });
        if (serachResult.length > 0) {
          return datum;
        } else {
          // eslint-disable-next-line array-callback-return
          return;
        }
      } else {
        return datum;
      }
    });
    // 排序性別
    result = [...result].filter(datum => {
      if (this.state.onSearchItem.sex.length > 0) {
        if (
          this.state.onSearchItem.sex.filter(sex => datum.sex === sex).length >
          0
        ) {
          return datum;
        } else {
          // eslint-disable-next-line array-callback-return
          return;
        }
      } else {
        return datum;
      }
    });
    result = [...result].filter(datum => {
      if (this.state.onSearchItem.age !== '選擇年齡') {
        if (this.state.onSearchItem.age === datum.age) {
          return datum;
        } else {
          // eslint-disable-next-line array-callback-return
          return;
        }
      } else {
        return datum;
      }
    });
    result = [...result].filter(datum => {
      if (this.state.onSearchItem.areaName !== '選擇地區') {
        if (this.state.onSearchItem.areaName === datum.areaName) {
          return datum;
        } else {
          // eslint-disable-next-line array-callback-return
          return;
        }
      } else {
        return datum;
      }
    });
    await this.setState({ filterAnimalArr: result }, () =>
      this.setState({
        pagination: {
          ...this.state.pagination,
          current: 1,
          total: this.state.filterAnimalArr.length
        }
      })
    );
    this.setState({ loading: false });
  };
  // 整理資料
  setArr = (arr, item) => {
    let result = arr.map(datum => datum[item]);
    result = [...new Set(result)].sort((a, b) => {
      if (a === '未知' || a === '未離乳') {
        return -1;
      } else {
        return a - b;
      }
    });
    return result;
  };
  async componentDidMount() {
    await this.fetchData();
    this.setState({ loading: false });
  }
  renderCard = () => {
    let result;
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
      result = filterResult.map(datum => (
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
    } else {
      result = (
        <StyledAlert
          message='找不到資料'
          description='不好意思，沒有符合的資料。'
          type='warning'
        />
      );
    }
    return result;
  };
  renderSexChooce = () => {
    if (this.state.searchItem.sex.length > 0) {
      const option = this.state.searchItem.sex.map(datum => {
        return {
          label: datum,
          value: datum
        };
      });
      return (
        <CheckboxGroup
          options={option}
          onChange={value => this.onSearch(value, 'sex')}
          value={this.state.onSearchItem.sex}
        />
      );
    }
  };
  renderAge = () => {
    if (this.state.searchItem.age.length > 0) {
      return this.state.searchItem.age.map(datum => (
        <Option value={datum} key={datum}>
          {datum}
        </Option>
      ));
    }
  };
  renderArea = () => {
    if (this.state.searchItem.areaName.length > 0) {
      return this.state.searchItem.areaName.map(datum => (
        <Option value={datum} key={datum}>
          {datum}
        </Option>
      ));
    }
  };
  resetSearch = () => {
    this.setState(
      {
        onSearchItem: {
          inputSearch: '',
          sex: [],
          tags: [],
          age: '選擇年齡',
          areaName: '選擇地區'
        }
      },
      () => this.filterCard()
    );
  };
  renderTags = () => {
    return this.state.onSearchItem.tags.map((text, i) => (
      <StyledTag
        key={text + i}
        closable={true}
        onClose={() => this.closeTags(text)}
      >
        {text}
      </StyledTag>
    ));
  };
  closeTags = text => {
    const index = this.state.onSearchItem.tags.indexOf(text);
    this.setState(
      prevState => prevState.onSearchItem.tags.splice(index),
      () => this.filterCard()
    );
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
                  onSearch={value => this.onSearch(value, 'inputSearch')}
                  onChange={e => this.searchOnChange(e.target.value)}
                  value={this.state.onSearchItem.inputSearch}
                  prefix={<span />}
                />
                <StyledTagsContainer>{this.renderTags()}</StyledTagsContainer>
              </Col>
            </Row>
          </StyledHeader>
          <Row>
            <Col xs={22} md={6}>
              <StyledChooceBg>
                <h2>條件選擇</h2>
                <StyledSexContainer>
                  <p>選擇性別</p>
                  {this.renderSexChooce()}
                </StyledSexContainer>
                <StyledSelectConteiner>
                  <p>選擇年齡</p>
                  <Select
                    placeholder='選擇年齡'
                    onChange={value => this.onSearch(value, 'age')}
                    value={this.state.onSearchItem.age}
                  >
                    {this.renderAge()}
                  </Select>
                </StyledSelectConteiner>
                <StyledSelectConteiner>
                  <p>選擇地區</p>
                  <Select
                    placeholder='選擇地區'
                    onChange={value => this.onSearch(value, 'areaName')}
                    value={this.state.onSearchItem.areaName}
                  >
                    {this.renderArea()}
                  </Select>
                </StyledSelectConteiner>
                <Button block onClick={this.resetSearch} type='primary'>
                  清除條件
                </Button>
              </StyledChooceBg>
            </Col>
            <StyledCotent xs={22} md={18}>
              <StyledSpin spinning={this.state.loading} tip='Loading...'>
                {this.state.loading ? null : (
                  <>
                    <Row>{this.renderCard()}</Row>
                    <StyledPagination {...this.state.pagination} />
                  </>
                )}
              </StyledSpin>
            </StyledCotent>
          </Row>
        </StyledContainer>
      </StyledBg>
    );
  }
}

export default Week2;
