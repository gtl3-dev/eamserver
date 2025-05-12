import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';

dotenv.config();
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

function checkApiKey(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.headers['x-api-key'];
    const apiSecret = req.headers['x-api-secret'];

    if (apiKey === API_KEY && apiSecret === API_SECRET) {
        next();
    } else {
        res.status(403).send('Provide valid API_KEY and/or API_SECRET in header');
    }

}

export default checkApiKey;