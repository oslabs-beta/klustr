const { Kafka } = require('kafkajs');

const instantiate = async (brokers) => {
  const kafka = new Kafka({
    clientId: 'klustr',
    brokers: brokers,
  });

  const admin = kafka.admin();

  const connectAdmin = async () => {
    try {
      await admin.connect();
    } catch (err) {
      next(err);
    }
  };

  await connectAdmin();
  return admin;
};

module.exports = {
  instantiate,
};
