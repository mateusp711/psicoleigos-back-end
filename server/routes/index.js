const rpd = require("./rpd.route");
const index = require("./index.route");


module.exports = (app) => {
  app.use(rpd, index);
};

