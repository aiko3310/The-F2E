import React, { Component } from 'react';
import moment from 'moment';
import { Tabs } from 'antd';
import { StyledContainerBg, StyledRow, StyledCol } from './styledWeek3';
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
        const filterDatum = datum.weatherElement[0].time.filter(
          (_, i) => i % 2 !== 0
        );
        console.log(filterDatum);
        const renderTabPane = filterDatum.map(time => (
          <TabPane
            tab={moment(time.startTime).format('MM/DD')}
            key={time.startTime}
          >
            <p>{time.parameter.parameterName}</p>
          </TabPane>
        ));
        return (
          <StyledCol xs={12} md={8} key={datum.locationName}>
            <p>{datum.locationName}</p>
            <Tabs>{renderTabPane}</Tabs>
          </StyledCol>
        );
      });
    }
  };
  render() {
    return (
      <StyledContainerBg>
        <StyledRow gutter={32}>{this.renderCard()}</StyledRow>
        {/* {console.log(this.state.townsWeather[0])} */}
        {/* <img src={this.state.townsWeather[0].img} /> */}
      </StyledContainerBg>
    );
  }
}
export default Week3;
