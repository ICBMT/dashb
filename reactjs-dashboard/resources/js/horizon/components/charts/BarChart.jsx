import React, { Component } from 'react';
import ChartModule from 'react-apexcharts';

// react-apexcharts@1.4.0 is CommonJS and can arrive double-wrapped by Vite.
const Chart = ChartModule.default ?? ChartModule;

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: this.props.chartOptions,
    });
  }

  render() {
    return (
      <Chart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="bar"
        width="100%"
        height="100%"
      />
    );
  }
}

export default BarChart;
