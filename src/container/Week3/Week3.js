import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/zh-tw';
import { Tabs } from 'antd';
import {
  StyledContainerBg,
  StyledRow,
  StyledCol,
  StyledContent,
  StyledTabPane
} from './styledWeek3';
moment.locale('zh-tw');
class Week3 extends Component {
  state = {
    towns: [],
    loading: true
  };
  async componentDidMount() {
    // 取得天氣資料
    await fetch(
      'https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-C0032-005?Authorization=CWB-35DEE35D-6C94-4470-88E8-CB6BCE71E28F&format=JSON'
    )
      .then(res => res.json())
      .then(data =>
        this.setState({ towns: data.cwbopendata.dataset.location })
      );
    this.setState({ loading: false });
    // console.log(this.state.towns);
  }
  renderCard = () => {
    if (!this.state.loading) {
      return this.state.towns.map((datum, i) => {
        const weatherDatum = datum.weatherElement.map(datum =>
          datum.time.filter((_, i) => i % 2 !== 0)
        );
        const array = new Array(7).fill([]);
        const data = array.map((_, index) =>
          weatherDatum.map((__, i) => weatherDatum[i][index])
        );
        const renderTabPane = data.map(item => {
          const time = item[0].startTime;
          return (
            <StyledTabPane
              tab={
                moment(time).format('MM/DD') + ' ' + moment(time).format('dddd')
              }
              key={item[0].startTime}
              background={item[0].parameter.parameterValue}
            >
              <p>{item[0].parameter.parameterName}</p>
              <p>最高溫度: {item[1].parameter.parameterName}°C</p>
              <p>最低溫度: {item[2].parameter.parameterName}°C</p>
            </StyledTabPane>
          );
        });
        return (
          <StyledCol xs={24} md={12} lg={8} key={datum.locationName}>
            <StyledContent>
              <p>{datum.locationName}</p>
              <Tabs>{renderTabPane}</Tabs>
            </StyledContent>
          </StyledCol>
        );
      });
    }
  };
  render() {
    return (
      <StyledContainerBg>
        <StyledRow gutter={32}>{this.renderCard()}</StyledRow>
      </StyledContainerBg>
    );
  }
}
export default Week3;
