import ChartModule from "react-apexcharts";

// react-apexcharts@1.4.0 is CommonJS and can arrive double-wrapped by Vite.
const Chart = ChartModule.default ?? ChartModule;

const PieChart = (props) => {
  const { series, options } = props;

  return (
    <Chart
      options={options}
      type="pie"
      width="100%"
      height="100%"
      series={series}
    />
  );
};

export default PieChart;
