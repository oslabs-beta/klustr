const express = require('express');

const adminController = require('../controllers/adminController');

const router = express.Router();

//sends an array of topics. Each element in the array is a string with the topic name.
router.get('/topics', adminController.getTopics, (req, res) =>
  res.status(200).json([...res.locals.topics])
);

//sends an array of patitions. Each element in the array is an object. "partitionId" is the key that gives you the partition ID. "replicas" is the key that gives you an array of replica assignments.
router.get('/partitionInfo/:topic', adminController.getPartitions, (req, res) =>
  res.status(200).json(res.locals.partitions)
);

//sends an array of brokers. Each element in the array in an object. "nodeId" is the key that gives you the broker number.
router.get('/brokerInfo', adminController.getBrokerInfo, (req, res) =>
  res.status(200).json(res.locals.brokerInfo)
);

//sends an array of consumer groups. Each element in the array is an object. "groupId" is the key that gives us the group name.
router.get('/consumerGroups', adminController.getConsumerGroups, (req, res) => {
  res.status(200).json(res.locals.consumerGroups);
});

//sends an array of consumers. Each element in the array is an object.
router.get(
  '/consumers/:groupId',
  adminController.getConsumerMembers,
  (req, res) => {
    res.status(200).json(res.locals.groupMembers);
  }
);

module.exports = router;
