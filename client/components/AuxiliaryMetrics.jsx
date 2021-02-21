import React from 'react';
import DonutChartMetrics from './DonutChartMetrics.jsx';
import LineGraphMetrics from './LineGraphMetrics.jsx';

const AuxiliaryMetrics = ({ metrics }) => {
  // const metricNames = Object.keys(metrics)
  // const graphs = metricNames.forEach( ele => {

  // } )
  console.log('new passed down state', metrics);

  // const testData = [33];
  // function generator() {
  //   testData.push(Math.round(Math.random() * 60 - 10));
  // }
  // setInterval(generator, 5000);

  const graphs = [];

  const keys = Object.keys(metrics);
  keys.forEach((key) =>
    graphs.push(<LineGraphMetrics chartLabel={`${key}`} metricData={metrics[key]} />)
  );

  return (
    <div>
      {/* <h4>disk write bytes</h4> */}
      {/* {metrics} */}
      {/* <LineGraphMetrics metricData={metrics} /> */}
      {graphs}
    </div>
  );
};

export default AuxiliaryMetrics;
