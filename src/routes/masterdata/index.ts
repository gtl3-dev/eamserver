// MASTER DATA
// 	- Location
// 	- Asset types
// 	- Asset categories (Equipment,Land, Bldg, Machines)
// 	- Assets / Items
//  - Depreciation Types

import { Router } from "express";

import assetgrps from './assetgrps'
import assettypes from './assettypes'

const masterdataRoutes = Router();

// masterdataRoutes.use("/location", require("./location.ts"));
masterdataRoutes.use("/assettypes", assettypes);
masterdataRoutes.use("/assetgrps", assetgrps);

export default masterdataRoutes;