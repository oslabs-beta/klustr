import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const LineGraphMetrics = ({ metricData, chartOptions, chartLabel }) => {
  const { bkgdColor, brdrColor, labelsArray, titleObj, chartHeight } = chartOptions;
  const [data, setData] = useState();
  console.log(metricData);

  //const metricDataLabels = [0]
  // const graph = (
  //   <Line
  //     data={data}
  //     height={500}
  //     options={options}
  //     // ref={(reference) => (chartRef = reference)}
  //   />
  // );

  let chartRef;

  function genData() {
    return {
      labels: labelsArray,
      datasets: [
        {
          label: chartLabel,
          data: metricData,
          fill: true,
          backgroundColor: bkgdColor,
          borderColor: brdrColor,
        },
      ],
    };
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    title: titleObj,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };

  useEffect(() => {
    // const interval = setInterval(() => {
    //   //setDataLabel()
    //   setData(genData())
    // }, 5000);

    // return () => clearInterval(interval);
    setData(genData());
    // chartRef.chartInstance.update();
  }, [...metricData]);

  return (
    <div>
      <Line
        data={data}
        height={chartHeight}
        options={options}
        ref={(reference) => (chartRef = reference)}
      />
    </div>
  );
};

export default LineGraphMetrics;
