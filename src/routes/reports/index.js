// REPORTS
// 	- Depreciation Report
// 	- Asset Expense Report
// 	- Asset Consumption Report
// 	- Asset PL
//     - Mileage/Usage Report



const reportsRoutes = require("express").Router();

reportsRoutes.use("/location", require("./location.js"));
reportsRoutes.use("/assettypes", require("./assettypes"));
reportsRoutes.use("/assetgrps", require("./assetgrps"));


module.exports = reportsRoutes