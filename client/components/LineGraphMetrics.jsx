import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const LineGraphMetrics = ({ metricData, chartLabel }) => {
  const [data, setData] = useState();
  //const [dataLabel, setDataLabel]
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
  // let counter = 0;

  function genData() {
    return {
      labels: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      datasets: [
        {
          label: chartLabel,
          // data: [33, 53, 85, 41, 44, 65],
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
    console.log('useeffect in linegraphmetrics here');
    // console.log(counter);
    chartRef.chartInstance.update();

    // justDoIt();
    // setTimeout( () => counter++, 1000);
    // metricDataLabels.push(metricData.length)
  }, [...metricData]);

  // graph.chartInstance.update();

  // function justDoIt() {
  //   setInterval(() => {
  //     setData(genData());
  //     chartRef.chartInstance.update();
  //   }, 1000);
  // }

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
