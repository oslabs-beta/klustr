import React from 'react';
import LineGraphMetrics from './LineGraphMetrics.jsx';

const AuxiliaryMetrics = ({ metrics }) => {
  const graphs = [];

  const keys = Object.keys(metrics);
  keys.forEach((key) =>
    graphs.push(
      <LineGraphMetrics chartLabel={`${key}`} metricData={metrics[key]} />
    )
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
