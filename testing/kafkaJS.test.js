const request = require('supertest');

const server = 'http://localhost:3000'; //must connect to server before running tests
const kafkaPort = 'localhost:9092'; //must open up kafkaPort before running tests

//Successfully connects to application
describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });
});

//Successfully connect to kafka broker and send broker address
describe('Connect to Kafka broker', () => {
  describe('/admin/brokerAddress', () => {
    describe('POST', () => {
      it('responds with 200 status and application/json content type', () => {
        return request(server)
          .post('/admin/brokerAddress')
          .send(kafkaPort)
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
    });
  });
  describe('/admin/brokerAddress', () => {
    describe('POST', () => {
      it('responds with sent port address', () => {
        return request(server)
          .post('/admin/brokerAddress')
          .send({
            brokers: [kafkaPort],
          })
          .expect({ currentAddress: [kafkaPort] });
      });
    });
  });
});

describe('Receive cluster information from Kafka broker', () => {
  describe('/admin/brokerInfo', () => {
    describe('GET', () => {
      it('responds with 200 status and application/json content type', () => {
        return request(server)
          .get('/admin/brokerInfo')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
    });
  });
  describe('/admin/brokerInfo', () => {
    describe('GET', () => {
      it('responds with cluster information', () => {
        return request(server)
          .get('/admin/brokerInfo')
          .expect(function (res) {
            res.hasOwnProperty('clusterId');
            res.hasOwnProperty('brokers');
            typeof res['clusterId'] === 'string';
            Array.isArray(res['brokers']) === true;
          });
      });
    });
  });
});
