
const MetricsOptions = {
  default: {
    bkgdColor: 'rgba(121,134,203,0.2)',
    brdrColor: 'rgba(121,134,203,1)',
    labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
    titleObj: {
      display: false,
      text: '',
    },
    yConfig: [
      {
        ticks: {
          beginAtZero: false,
        },
        scaleLabel: {
          display: false,
          labelString: 'Test Axis Label'
        }
      }
    ]
  },
  disk_write_bytes: {
    bkgdColor: 'rgba(121,134,203,0.3)',
    brdrColor: 'rgba(121,134,203,1)',
    labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
    titleObj: {
      display: true,
      text: 'Disk Usage: Write',
    },
    yConfig: [
      {
        ticks: {
          beginAtZero: false,
        },
        scaleLabel: {
          display: true,
          labelString: 'bytes',
        }
      },
    ]
  },
  cpu_seconds_total: {
    bkgdColor: 'rgba(229,115,115,0.3)',
    brdrColor: 'rgba(229,115,115,1)',
    labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
    titleObj: {
      display: true,
      text: 'CPU Seconds Total',
    },
    yConfig: [
      {
        ticks: {
          beginAtZero: false,
        },
        scaleLabel: {
          display: true,
          labelString: 'seconds',
        }
      },
    ]
  },
  disk_read_bytes: {
    bkgdColor: 'rgba(240,98,146,0.3)',
    brdrColor: 'rgba(240,98,146,1)',
    labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
    titleObj: {
      display: true,
      text: 'Disk Usage: Read',
    },
    yConfig: [
      {
        ticks: {
          beginAtZero: false,
        },
        scaleLabel: {
          display: true,
          labelString: 'bytes',
        }
      },
    ]
  },

  brokertopicmetrics_bytesin_total: {
    bkgdColor: 'rgba(186,104,200,0.3)',
    brdrColor: 'rgba(186,104,200,1)',
    labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
    titleObj: {
      display: true,
      text: 'Broker Topic: Total Bytes in',
    },
    yConfig: [
      {
        ticks: {
          beginAtZero: false,
        },
        scaleLabel: {
          display: true,
          labelString: 'bytes',
        }
      },
    ]
  },
  brokertopicmetrics_bytesout_total: {
    bkgdColor: 'rgba(121,134,203,0.2)',
    brdrColor: 'rgba(121,134,203,1)',
    labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
    titleObj: {
      display: true,
      text: 'Broker Topic: Total Bytes Out',
    },
    yConfig: [
      {
        ticks: {
          beginAtZero: false,
        },
        scaleLabel: {
          display: true,
          labelString: 'bytes',
        }
      },
    ]
  },
  leaderelectionrateandtimems_count: {
    bkgdColor: 'rgba(229,115,115,0.2)',
    brdrColor: 'rgba(229,115,115,1)',
    labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
    titleObj: {
      display: true,
      text: 'Leader Election Rate',
      
    },
    yConfig: [
      {
        ticks: {
          beginAtZero: false,
        },
        scaleLabel: {
          display: true,
          labelString: 'election rate',
        }
      },
    ]
  },
  globalpartitioncount: {
    bkgdColor: 'rgba(240,98,146,0.2)',
    brdrColor: 'rgba(240,98,146,1)',
    labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
    titleObj: {
      display: true,
      text: 'Global Partitions',
    },
    yConfig: [
      {
        ticks: {
          beginAtZero: false,
        },
        scaleLabel: {
          display: true,
          labelString: '# of partitions',
        }
      },
    ]
  },

  'purgatorysize{delayedOperation="Produce",}': {
    bkgdColor: 'rgba(186,104,200,0.2)',
    brdrColor: 'rgba(186,104,200,1)',
    labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
    titleObj: {
      display: true,
      text: 'Producer Request Purgatory',
    },
    yConfig: [
      {
        ticks: {
          beginAtZero: false,
        },
        scaleLabel: {
          display: true,
          labelString: '# of producer requests',
        }
      },
    ]
  },
  'purgatorysize{delayedOperation="Fetch",}': {
    bkgdColor: 'rgba(121,134,203,0.4)',
    brdrColor: 'rgba(121,134,203,1)',
    labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
    titleObj: {
      display: true,
      text: 'Fetch Request Purgatory',
      
    },
    yConfig: [
      {
        ticks: {
          beginAtZero: false,
        },
        scaleLabel: {
          display: true,
          labelString: '# of fetch requests',
        }
      },
    ]
  },

  isrshrinks_total: {
    bkgdColor: 'rgba(229,115,115,0.4)',
    brdrColor: 'rgba(229,115,115,1)',
    labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
    titleObj: {
      display: true,
      text: 'In-Sync Replicas: Shrinks',
      
    },
    yConfig: [
      {
        ticks: {
          beginAtZero: false,
        },
        scaleLabel: {
          display: true,
          labelString: '# of replicas',
        }
      },
    ]
  },

  isrexpands_total: {
    bkgdColor: 'rgba(240,98,146,0.4)',
    brdrColor: 'rgba(240,98,146,1)',
    labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
    titleObj: {
      display: true,
      text: 'In-Sync Replicas: Expands',
      
    },
    yConfig: [
      {
        ticks: {
          beginAtZero: false,
        },
        scaleLabel: {
          display: true,
          labelString: '# of replicas',
        }
      },
    ]
  },

  brokertopicmetrics_totalproducerequests_total: {
    bkgdColor: 'rgba(186,104,200,0.4)',
    brdrColor: 'rgba(186,104,200,1)',
    labelsArray: ['10 secs ago', '9 secs ago', '8 secs ago', '7 secs ago', '6 secs ago', '5 secs ago', '4 secs ago', '3 secs ago', '2 secs ago', '1 sec ago', 'Currently'],
    titleObj: {
      display: true,
      text: 'Broker Topic: Total Producer Requests',
      
    },
    yConfig: [
      {
        ticks: {
          beginAtZero: false,
        },
        scaleLabel: {
          display: true,
          labelString: '# of requests',
        }
      },
    ]
  },
}


export default MetricsOptions;
