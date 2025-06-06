import express, { type Express} from 'express'
import dotenv from 'dotenv';
import checkApiKey from './components/checkApiKey'
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app: Express = express();
dotenv.config();

// MIDDLEWARE /////////////////////////
app.use(cors({
  origin: '*'
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(helmet());
app.use(checkApiKey);
app.use(morgan('common'))

// ROUTES ////////////////////////////
import masterdataRoutes from '@/routes/masterdata/index'
import financeRoutes from '@/routes/finance/index'
// const reportsRoutes = require('./routes/reports');
// const postingRoutes = require('./routes/postings');
// const configRoutes

app.use('/masterdata', masterdataRoutes);

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
