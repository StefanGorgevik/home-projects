const moment = require("moment");

var logger = (req,res,next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.url}: ${moment().format()}`);
    next();
};

module.exports = logger;