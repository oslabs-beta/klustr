const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'kafka-specks',
  brokers: ['localhost:9092'],
});

const admin = kafka.admin();

module.exports = admin;
