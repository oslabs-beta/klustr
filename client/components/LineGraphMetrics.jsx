import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const LineGraphMetrics = ({ metricData, chartOptions, chartLabel }) => {
  const { bkgdColor, brdrColor, labelsArray, titleObj, yConfig } = chartOptions;
  const [data, setData] = useState();
  
  // creates data for chart using data from metrics
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
    maintainAspectRatio: false,
    title: titleObj,
    scales: {
      yAxes: yConfig,
    },
  };
  
  // every time the data for a graph changes, the graph is rerendered 
  useEffect(() => {
    setData(genData());
  }, [...metricData]);

  return (
    <div>
      <Line
        data={data}
        height={375}
        options={options}
      />
    </div>
  );
};

export default LineGraphMetrics;
