const express = require('express');
const router = express.Router();

const jmxController = require('../controllers/jmxController');

// const connectController = require('../controllers/connectController');

// router.get(
//   '/activeControllers/:port',
//   jmxController.getMetrics,
//   jmxController.getActiveControllers,
//   (req, res) => res.status(200).json(res.locals.activeControllers)
// );

// router.get(
//   '/replicatedPartitions/:port',
//   jmxController.getMetrics,
//   jmxController.getReplicatedPartitions,
//   (req, res) => res.status(200).json(res.locals.replicatedPartitions)
// );

router.get(
  '/metrics/:port',
  jmxController.getMetrics,
  jmxController.getActiveControllers,
  jmxController.getReplicatedPartitions,
  jmxController.getOfflinePartitions,
  (req, res) =>
    res.status(200).json({
      activeControllers: res.locals.activeControllers,
      replicatedParitions: res.locals.replicatedPartitions,
      offlinePartitions: res.locals.offlinePartitions,
    })
);

router.get(
  '/advancedMetrics/:port',
  jmxController.getMetrics,
  jmxController.getBytesInTotal,
  jmxController.getBytesOutTotal,
  (req, res) =>
    res.status(200).json({
      brokerBytesIn: res.locals.brokerBytesIn,
      brokerBytesOut: res.locals.brokerBytesOut,
    })
);

router.post(
  '/advancedMetrics/:port',
  jmxController.getMetrics,
  jmxController.getAdvancedMetrics,
  (req, res) => res.status(200).json(res.locals)
);

module.exports = router;
