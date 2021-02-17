import React, { useState, useEffect } from 'react';
import CoreMetricsBox from '../components/CoreMetricsBox';
import AuxiliaryMetricsBox from '../components/AuxiliaryMetricsBox';

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
