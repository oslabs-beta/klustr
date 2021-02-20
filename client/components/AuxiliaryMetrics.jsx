import React from 'react';
import DonutChartMetrics from './DonutChartMetrics.jsx';
import LineGraphMetrics from './LineGraphMetrics.jsx';

const AuxiliaryMetrics = ({ metrics }) => {
  // const metricNames = Object.keys(metrics)
  // const graphs = metricNames.forEach( ele => {

  // } )
  console.log('new passed down state', metrics);
  return (
    <div>
      <h4>disk write bytes</h4>
      {/* {metrics} */}
      {/* <LineGraphMetrics /> */}
    </div>
  );
};

export default AuxiliaryMetrics;
