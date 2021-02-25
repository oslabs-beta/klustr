const request = require('supertest');

const server = 'http://localhost:3000'; //must connect to server before running tests
const jMXPort = 'localhost:7075'; //must expose JMX metrics port before running tests
const advancedMetrics = {
  metrics: [
    'brokertopicmetrics_bytesin_total',
    'cpu_seconds_total',
    'disk_read_bytes',
  ],
};

//Successfully connect to JMX Exporter port and send core metrics
describe('Connect to JMX Exporter port', () => {
  describe('/jmx/metrics/:port', () => {
    describe('GET', () => {
      it('responds with 200 status and application/json content type', () => {
        return request(server)
          .get(`/jmx/metrics/${jMXPort}`)
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
    });
  });
  describe('/jmx/metrics/:port', () => {
    describe('GET', () => {
      it('responds with core metrics in an object', () => {
        return request(server)
          .get(`/jmx/metrics/${jMXPort}`)
          .expect(function (res) {
            expect(typeof res.body['activeControllers']).toEqual('number');
            expect(typeof res.body['replicatedPartitions']).toEqual('number');
            expect(typeof res.body['offlinePartitions']).toEqual('number');
          });
      });
    });
  });
});

//Successfully connect to JMX Exporter port and send advanced metrics
describe('Connect to JMX Exporter port', () => {
  describe('/jmx/advancedMetrics/:port', () => {
    describe('POST', () => {
      it('responds with 200 status and application/json content type', () => {
        return request(server)
          .post(`/jmx/advancedMetrics/${jMXPort}`)
          .send(advancedMetrics)
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
    });
  });
  describe('/jmx/advancedMetrics/:port', () => {
    describe('POST', () => {
      it('responds with advanced metrics in an object', () => {
        return request(server)
          .post(`/jmx/advancedMetrics/${jMXPort}`)
          .send(advancedMetrics)
          .expect(function (res) {
            expect(typeof res.body[advancedMetrics.metrics[0]]).toEqual('number');
            expect(typeof res.body[advancedMetrics.metrics[1]]).toEqual('number');
            expect(typeof res.body[advancedMetrics.metrics[2]]).toEqual('number');
          });
      });
    });
  });
});
