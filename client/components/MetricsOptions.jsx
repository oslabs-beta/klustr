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
    bkgdColor: 'rgba(186,104,200,1)', //same purple[300] from MetricsContainer
    brdrColor: 'rgba(186,104,200,1)',
    labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
    titleObj: {
      display: true,
      text: 'Disk Write Bytes'
    },
    chartHeight: 500
  },
  cpu_seconds_total: {
    bkgdColor: 'rgba(229,115,115,0.2)', //same red[300] from MetricsContainer
    brdrColor: 'rgba(229,115,115,1)',
    labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
    titleObj: {
      display: true,
      text: 'CPU Seconds Total'
    },
    chartHeight: 500
  },

  disk_read_bytes: {
    bkgdColor: 'rgba(240,98,146,0.2)', //same pink[300] from MetricsContainer
    brdrColor: 'rgba(240,98,146,1)',
    labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
    titleObj: {
      display: true,
      text: 'Disk Read Bytes'
    },
    chartHeight: 500
  },

  // brokertopicmetrics_bytesin_total: {
  //   bkgdColor: 'rgba(186,104,200,0.2)', //same purple[300] from MetricsContainer
  //   brdrColor: 'rgba(186,104,200,1)',
  //   labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
  //   titleObj: {
  //     display: true,
  //     text: 'Disk Write Bytes'
  //   },
  //   chartHeight: 500
  // },

  // brokertopicmetrics_bytesout_total: {
  //   bkgdColor: 'rgba(186,104,200,0.2)', //same purple[300] from MetricsContainer
  //   brdrColor: 'rgba(186,104,200,1)',
  //   labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
  //   titleObj: {
  //     display: true,
  //     text: 'Disk Write Bytes'
  //   },
  //   chartHeight: 500
  // },

  // leaderelectionrateandtimems_count: {
  //   bkgdColor: 'rgba(186,104,200,0.2)', //same purple[300] from MetricsContainer
  //   brdrColor: 'rgba(186,104,200,1)',
  //   labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
  //   titleObj: {
  //     display: true,
  //     text: 'Disk Write Bytes'
  //   },
  //   chartHeight: 500
  // },

  // globalpartitioncount: {
  //   bkgdColor: 'rgba(186,104,200,0.2)', //same purple[300] from MetricsContainer
  //   brdrColor: 'rgba(186,104,200,1)',
  //   labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
  //   titleObj: {
  //     display: true,
  //     text: 'Disk Write Bytes'
  //   },
  //   chartHeight: 500
  // },

  // 'purgatorysize{delayedOperation="Produce",}': {
  //   bkgdColor: 'rgba(186,104,200,0.2)', //same purple[300] from MetricsContainer
  //   brdrColor: 'rgba(186,104,200,1)',
  //   labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
  //   titleObj: {
  //     display: true,
  //     text: 'Disk Write Bytes'
  //   },
  //   chartHeight: 500
  // },

  // 'purgatorysize{delayedOperation="Fetch",}': {
  //   bkgdColor: 'rgba(186,104,200,0.2)', //same purple[300] from MetricsContainer
  //   brdrColor: 'rgba(186,104,200,1)',
  //   labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
  //   titleObj: {
  //     display: true,
  //     text: 'Disk Write Bytes'
  //   },
  //   chartHeight: 500
  // },

  // isrshrinks_total: {
  //   bkgdColor: 'rgba(186,104,200,0.2)', //same purple[300] from MetricsContainer
  //   brdrColor: 'rgba(186,104,200,1)',
  //   labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
  //   titleObj: {
  //     display: true,
  //     text: 'Disk Write Bytes'
  //   },
  //   chartHeight: 500
  // },

  // isrexpands_total: {
  //   bkgdColor: 'rgba(186,104,200,0.2)', //same purple[300] from MetricsContainer
  //   brdrColor: 'rgba(186,104,200,1)',
  //   labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
  //   titleObj: {
  //     display: true,
  //     text: 'Disk Write Bytes'
  //   },
  //   chartHeight: 500
  // },

  // brokertopicmetrics_totalproducerequests_total: {
  //   bkgdColor: 'rgba(186,104,200,0.2)', //same purple[300] from MetricsContainer
  //   brdrColor: 'rgba(186,104,200,1)',
  //   labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
  //   titleObj: {
  //     display: true,
  //     text: 'Disk Write Bytes'
  //   },
  //   chartHeight: 500
  // },

}


export default MetricsOptions;
