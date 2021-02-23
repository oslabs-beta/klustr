import React from 'react';

const MetricsOptions = {
  default: {
    
    bkgdColor: 'rgba(75,192,192,0.2)',
    brdrColor: 'rgba(75,192,192,1)',
    labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
    titleObj: {
      display: false,
      text: ''
    },
    chartHeight: 250
  },
  disk_write_bytes: {
    
    bkgdColor: 'rgba(75,192,192,0.2)',
    brdrColor: 'rgba(75,192,192,1)',
    labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
    titleObj: {
      display: true,
      text: 'Disk Write Bytes'
    },
    chartHeight: 500
  },
}


export default MetricsOptions;
