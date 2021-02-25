const express = require('express');
const router = express.Router();

const jmxController = require('../controllers/jmxController');

//Returns core metrics in an object with keys activeControllers, replicatedPartitions and offlinePartitions
router.get(
  '/metrics/:port',
  jmxController.getMetrics,
  jmxController.getActiveControllers,
  jmxController.getReplicatedPartitions,
  jmxController.getOfflinePartitions,
  (req, res) =>
    res.status(200).json({
      activeControllers: res.locals.activeControllers,
      replicatedPartitions: res.locals.replicatedPartitions,
      offlinePartitions: res.locals.offlinePartitions,
    })
);

//Takes an object with key "metrics" and value is an array of metrics we want to obtain
//Bytes In Per Sec => brokertopicmetrics_bytesin_total
//Bytes Out Per Sec => brokertopicmetrics_bytesout_total
//CPU usage => cpu_seconds_total
//Disk usage write => disk_write_bytes
//Disk usage read => disk_read_bytes
//more metrics listed in component "MetricsDropdown"
router.post(
  '/advancedMetrics/:port',
  jmxController.getMetrics,
  jmxController.getAdvancedMetrics,
  (req, res) => {
    res.status(200).json(res.locals);
  }
);

module.exports = router;
