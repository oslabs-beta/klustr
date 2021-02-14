const fetch = require('node-fetch');

const jmxController = {};

// fetch request from Slack
jmxController.getMetrics = (req, res, next) => {
  // fetch('http://23.20.153.187:7075/')
  fetch(`http://${req.params.port}/`)
    // fetch(req.params.port)
    .then((response) => {
      return response.text();
    })
    .then((response) => {
      let strResponse = String(response);
      //let splitRes = strResponse.split('\n');
      //console.log(splitRes.length);
      //console.log('typeof ', typeof strResponse);
      //console.log(strResponse);
      res.locals.response = strResponse;
      return next();
    });
};

jmxController.getActiveControllers = (req, res, next) => {
  // activecontrollercount 1.0
  // console.log('typeof ', typeof res.locals.response);
  const matches = res.locals.response.match(/activecontrollercount \d+.\d+/g);
  const convertedToNum = Number(matches[0].match(/\d.*/g)[0]);
  res.locals.activeControllers = convertedToNum;
  return next();
};

jmxController.getReplicatedPartitions = (req, res, next) => {
  // console.log('typeof ', typeof res.locals.response);
  const matches = res.locals.response.match(/replicatedpartitions \d+.\d+/g);
  const convertedToNum = Number(matches[0].match(/\d.*/g)[0]);
  res.locals.replicatedPartitions = convertedToNum;
  return next();
};

jmxController.getOfflinePartitions = (req, res, next) => {
  // console.log('typeof ', typeof res.locals.response);
  const matches = res.locals.response.match(/offlinepartitionscount \d+.\d+/g);
  const convertedToNum = Number(matches[0].match(/\d.*/g)[0]);
  res.locals.offlinePartitions = convertedToNum;
  return next();
};

jmxController.getAdvancedMetrics = (req, res, next) => {
  // req body, an array of regex strings
  // for loop
  // per regex string

  // var match = `${metric} \d+.\d+` ;
  // var re = new RegExp(match,"g");
  // "mystring".match(re);

  req.body.metrics.forEach((metric) => {
    // console.log("our metric in an array",metric)
    const regex = `${metric} \d+.\d+`;
    const matches = res.locals.response.match(regex, 'g');
    console.log("matches", matches)
    const convertedToNum = Number(matches[0].match(/\d.*/g)[0]);
    res.locals[metric] = convertedToNum;
    /*
      res.locals
    */
  });
  delete res.locals.response;
  return next();
};

// brokertopicmetrics_bytesin_total
jmxController.getBytesInTotal = (req, res, next) => {
  // console.log('typeof ', typeof res.locals.response);
  const matches = res.locals.response.match(
    /brokertopicmetrics_bytesin_total \d+.\d+/g
  );
  const convertedToNum = Number(matches[0].match(/\d.*/g)[0]);
  res.locals.brokerBytesIn = convertedToNum;
  return next();
};

// brokertopicmetrics_bytesout_total
jmxController.getBytesOutTotal = (req, res, next) => {
  // console.log('typeof ', typeof res.locals.response);
  const matches = res.locals.response.match(
    /brokertopicmetrics_bytesout_total \d+.\d+/g
  );
  const convertedToNum = Number(matches[0].match(/\d.*/g)[0]);
  res.locals.brokerBytesOut = convertedToNum;
  return next();
};

module.exports = jmxController;
