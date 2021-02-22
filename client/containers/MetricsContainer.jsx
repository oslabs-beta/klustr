import React, { useState, useEffect } from 'react';
import CoreMetricsBox from '../components/CoreMetricsBox.jsx';
import AuxiliaryMetricsBox from '../components/AuxiliaryMetricsBox.jsx';
import styled, { css } from 'styled-components';

// import CoreMetricsBox and AuxiliaryMetricsBox


const MetricsContainer = ({jMXPort}) => {
  return (
    <MetricsContainerDiv>
      <CoreMetricsBox jMXPort={jMXPort}/>
      <AuxiliaryMetricsBox jMXPort={jMXPort}/>
    </MetricsContainerDiv>
  );
};

const MetricsContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default MetricsContainer;
