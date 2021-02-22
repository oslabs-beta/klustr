import React, { useState, useEffect } from 'react';
import CoreMetricsBox from '../components/CoreMetricsBox.jsx';
import AuxiliaryMetricsBox from '../components/AuxiliaryMetricsBox.jsx';

// import CoreMetricsBox and AuxiliaryMetricsBox

const MetricsContainer = () => {
  return (
    <div>
      <CoreMetricsBox />
      <AuxiliaryMetricsBox />
    </div>
  );
};

export default MetricsContainer;
