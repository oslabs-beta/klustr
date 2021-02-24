const connectController = {};

let currentAddress = [];

connectController.setBrokerAddress = (req, res, next) => {
  try {
    const { brokers } = req.body;
    console.log(brokers);
    currentAddress = brokers;
    res.locals.currentAddress = currentAddress;
    return next();
  } catch (err) {
    console.log(err);
  }
};

connectController.getBrokerAddress = (req, res, next) => {
  try {
    res.locals.currentAddress = currentAddress;
    return next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectController;
