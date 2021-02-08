const admin = require('../models/kafkaModel');

const adminController = {};

adminController.getTopics = async (req, res, next) => {
  try {
    const arrayOfTopics = await admin.listTopics();
    console.log('Array of Topics', arrayOfTopics);
    res.locals.topics = [...arrayOfTopics];
    console.log('res.locals.topics');
    return next();
  } catch (err) {
    console.log(err);
  }
};

adminController.getPartitions = async (req, res, next) => {
  try {
    const numberOfPartitions = await admin.fetchTopicMetadata({
      topics: [req.params.topic],
    });
    res.locals.partitions = numberOfPartitions.topics[0].partitions;
    return next();
  } catch (err) {
    console.log(err);
  }
};

adminController.getTopicOffsets = async (req, res, next) => {
  try {
    const topicOffsets = await admin.fetchTopicOffsets(`${req.params.topic}`);
    res.locals.offsets = topicOffsets;
    return next();
  } catch (err) {
    console.log(err);
  }
};

adminController.getBrokerInfo = async (req, res, next) => {
  try {
    const brokerInfo = await admin.describeCluster();
    res.locals.brokerInfo = brokerInfo.brokers;
    console.log('res locals', res.locals.brokerInfo);
    return next();
  } catch (err) {
    console.log(err);
  }
};

//
adminController.getConsumerGroups = async (req, res, next) => {
  try {
    const groupArray = await admin.listGroups();
    res.locals.consumerGroups = groupArray.groups;
    return next();
  } catch (err) {
    console.log(err);
  }
};

adminController.getConsumerMembers = async (req, res, next) => {
  try {
    const groupArray = await admin.describeGroups([req.params.groupId]);
    res.locals.groupMembers = groupArray.groups[0].members;
    return next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = adminController;
