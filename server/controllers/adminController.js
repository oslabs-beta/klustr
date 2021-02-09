const { instantiate } = require('../models/instantiate');

const adminController = {};

adminController.getTopics = async (req, res, next) => {
  try {
    const { currentAddress } = res.locals;
    const admin = await instantiate(currentAddress);
    const arrayOfTopics = await admin.listTopics();
    res.locals.topics = arrayOfTopics;
    return next();
  } catch (err) {
    return next({
      log: `ERROR in getTopics middleware. ${err}`,
      status: 500,
      message: { err: 'Check server log for details' },
    });
  }
};

adminController.getPartitions = async (req, res, next) => {
  try {
    const { currentAddress } = res.locals;
    const admin = await instantiate(currentAddress);
    const numberOfPartitions = await admin.fetchTopicMetadata({
      topics: [req.params.topic],
    });
    res.locals.partitions = numberOfPartitions.topics[0].partitions;
    return next();
  } catch (err) {
    return next({
      log: `ERROR in getPartitions middleware. ${err}`,
      status: 500,
      message: { err: 'Check server log for details' },
    });
  }
};

adminController.getTopicOffsets = async (req, res, next) => {
  try {
    const { currentAddress } = res.locals;
    const admin = await instantiate(currentAddress);
    const topicOffsets = await admin.fetchTopicOffsets(`${req.params.topic}`);
    res.locals.offsets = topicOffsets;
    return next();
  } catch (err) {
    return next({
      log: `ERROR in getTopicOffsets middleware. ${err}`,
      status: 500,
      message: { err: 'Check server log for details' },
    });
  }
};

adminController.getBrokerInfo = async (req, res, next) => {
  try {
    const { currentAddress } = res.locals;
    const admin = await instantiate(currentAddress);
    const brokerInfo = await admin.describeCluster();
    const { clusterId, brokers } = brokerInfo;
    res.locals.clusterId = clusterId;
    res.locals.brokers = brokers;
    return next();
  } catch (err) {
    return next({
      log: `ERROR in getBrokerInfo middleware. ${err}`,
      status: 500,
      message: { err: 'Check server log for details' },
    });
  }
};

//
adminController.getConsumerGroups = async (req, res, next) => {
  try {
    const { currentAddress } = res.locals;
    const admin = await instantiate(currentAddress);
    const { groups } = await admin.listGroups();
    res.locals.consumerGroups = groups;
    return next();
  } catch (err) {
    return next({
      log: `ERROR in getConsumerGroups middleware. ${err}`,
      status: 500,
      message: { err: 'Check server log for details' },
    });
  }
};

adminController.getConsumerMembers = async (req, res, next) => {
  try {
    const { currentAddress } = res.locals;
    const admin = await instantiate(currentAddress);
    const groupArray = await admin.describeGroups([req.params.groupId]);
    res.locals.groupMembers = groupArray.groups[0].members;
    return next();
  } catch (err) {
    return next({
      log: `ERROR in getConsumerMembers middleware. ${err}`,
      status: 500,
      message: { err: 'Check server log for details' },
    });
  }
};

module.exports = adminController;
