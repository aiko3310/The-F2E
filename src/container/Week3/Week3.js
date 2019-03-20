import React, { Component } from 'react';
import moment from 'moment';
import { Tabs } from 'antd';
import {
  StyledContainerBg,
  StyledRow,
  StyledCol,
  StyledContent
} from './styledWeek3';
const TabPane = Tabs.TabPane;
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
      return this.state.towns.map(datum => {
        const weatherDatum = datum.weatherElement.map(datum =>
          datum.time.filter((_, i) => i % 2 !== 0)
        );
        const array = new Array(7).fill([]);
        const data = array.map((_, index) =>
          weatherDatum.map((item, i) => weatherDatum[i][index])
        );

        const renderTabPane = data.map(item => (
          <TabPane
            tab={moment(item[0].startTime).format('MM/DD')}
            key={item[0].startTime}
          >
            <p>{item[0].parameter.parameterName}</p>
          </TabPane>
        ));
        return (
          <StyledCol xs={12} md={8} key={datum.locationName}>
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
