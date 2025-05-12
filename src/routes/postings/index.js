// POSTING
// 	- Post Depreciation Run
// 	- Approve Maintenance Order
// 	- Post Maintenance Order
// 	- Approve PO
// 	- Post PO
// 	- Approve SO
// 	- Post SO
// 	- Post Mileage / Usage


const postingRoutes = require("express").Router();

postingRoutes.use("/location", require("./location.js"));
postingRoutes.use("/assettypes", require("./assettypes"));
postingRoutes.use("/assetgrps", require("./assetgrps"));


module.exports = postingRoutes