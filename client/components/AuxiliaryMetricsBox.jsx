import React from 'react';
import AuxiliaryMetrics from './AuxiliaryMetrics.jsx';
import MetricsDropdown from './MetricsDropdown.jsx';

const AuxiliaryMetricsBox = () => {
  return (
    <div>
      <MetricsDropdown />
      <AuxiliaryMetrics />
    </div>
  );
};

export default AuxiliaryMetricsBox;
