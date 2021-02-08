const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

//sends an array of topics. Each element in the array is a string with the topic name.
router.get('/topics', adminController.getTopics, (req, res) =>
  res.status(200).json([...res.locals.topics])
);

//sends an array of partitions. Each element in the array is an object. "partitionId" is the key that gives you the partition ID. "replicas" is the key that gives you an array of replica assignments.
//sends an array of partition objects, with most recent offset information 'high' and earliest offset positionb 'low'
router.get(
  '/partitionInfo/:topic',
  adminController.getPartitions,
  adminController.getTopicOffsets,
  (req, res) => res.status(200).json(res.locals)
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
