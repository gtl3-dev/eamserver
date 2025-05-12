import express, { type Express} from 'express'
import dotenv from 'dotenv';
import checkApiKey from './components/checkApiKey'
import helmet from 'helmet';
import path from 'path';

const app: Express = express();
dotenv.config();

// MIDDLEWARE /////////////////////////
app.use(helmet());
// app.use(cookieParser());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(checkApiKey);

// ROUTES ////////////////////////////
import masterdataRoutes from '@/routes/masterdata/index'
import financeRoutes from '@/routes/finance/index'
// const financeRoutes = require('./routes/finance');
// const reportsRoutes = require('./routes/reports');
// const postingRoutes = require('./routes/postings');
// const configRoutes

app.use('/masterdata', masterdataRoutes);

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
