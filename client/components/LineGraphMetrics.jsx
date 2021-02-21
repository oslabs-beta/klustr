import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const LineGraphMetrics = ({ metricData, chartLabel }) => {
  const [data, setData] = useState();
  //const [dataLabel, setDataLabel]
  console.log(metricData);

  //const metricDataLabels = [0]

  const genData = () => ({
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
  });

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
    // metricDataLabels.push(metricData.length)
  }, [metricData]);

  return (
    <div>
      <Line data={data} height={500} options={options} />
    </div>
  );
};

export default LineGraphMetrics;
