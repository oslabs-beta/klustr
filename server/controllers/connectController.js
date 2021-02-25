const connectController = {};

let currentAddress = ['localhost:9092'];

connectController.setBrokerAddress = (req, res, next) => {
  try {
    const { brokers } = req.body;
    currentAddress = brokers;
    res.locals.currentAddress = currentAddress;
    return next();
  } catch (err) {
    next(err);
  }
};

connectController.getBrokerAddress = (req, res, next) => {
  try {
    res.locals.currentAddress = currentAddress;
    return next();
  } catch (err) {
    next(err);
  }
};

module.exports = connectController;
