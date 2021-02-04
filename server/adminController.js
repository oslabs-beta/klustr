const admin = require('./server.js');

const adminController = {};

adminController.getTopics = async (req, res, next) => {
  try{
      const arrayOfTopics = await admin.listTopics();
      await console.log('Array of Topics', arrayOfTopics);
      await res.locals.topics = [...arrayOfTopics];
      await return next();
  } catch (err) {
      console.log(err);
  }
}


