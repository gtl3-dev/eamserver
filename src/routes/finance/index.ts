// FINANCE
// 	- Depreciation Setup (w/ Scheduling)
// 	- Create Maintenance Order
// 	- Create Service Order
// 	- Create Purchase Order
// 	- Create Billing for Asset
// 	- Asset Sale/ Disposal

import { Router } from "express";

import dep from './dep';


const financeRoutes = Router();

financeRoutes.use("/dep", dep);


export default financeRoutes;