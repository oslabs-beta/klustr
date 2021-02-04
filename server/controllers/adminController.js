const admin = require('../models/kafkaModel');

const adminController = {};

adminController.getTopics = async (req, res, next) => {
  try {
    await admin.connect();
    const arrayOfTopics = await admin.listTopics();
    console.log('Array of Topics', arrayOfTopics);
    res.locals.topics = [...arrayOfTopics];
    console.log('res.locals.topics');
    await admin.disconnect();
    return next();
  } catch (err) {
    console.log(err);
  }
};

adminController.getPartitions = async (req, res, next) => {
  try {
    await admin.connect();
    const numberOfPartitions = await admin.fetchTopicMetadata({
      topics: [req.params.topic],
    });
    res.locals.partitions = numberOfPartitions.topics[0].partitions;
    await admin.disconnect();
    return next();
  } catch (err) {
    console.log(err);
  }
};

//
adminController.getBrokerInfo = async (req, res, next) => {
  try {
    await admin.connect();
    const brokerInfo = await admin.describeCluster();
    res.locals.brokerInfo = brokerInfo.brokers;
    console.log('res locals', res.locals.brokerInfo);
    await admin.disconnect();
    return next();
  } catch (err) {
    console.log(err);
  }
};

//
adminController.getConsumerGroups = async (req, res, next) => {
  try {
    await admin.connect();
    const groupArray = await admin.listGroups();
    res.locals.consumerGroups = groupArray.groups;
    await admin.disconnect();
    return next();
  } catch (err) {
    console.log(err);
  }
};

adminController.getConsumerMembers = async (req, res, next) => {
  try {
    await admin.connect();
    const groupArray = await admin.describeGroups([req.params.groupId]);
    res.locals.groupMembers = groupArray.groups[0].members;
    await admin.disconnect();
    return next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = adminController;
