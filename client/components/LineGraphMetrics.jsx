import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const LineGraphMetrics = ({ metricData, chartLabel }) => {
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
      labels: [-30, -27, -24, -21, -18, -15, -12, -9, -6, -3, 0],
      datasets: [
        {
          label: chartLabel,
          data: metricData,
          fill: true,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
        },
      ],
    };
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
        height={500}
        options={options}
        ref={(reference) => (chartRef = reference)}
      />
    </div>
  );
};

export default LineGraphMetrics;
