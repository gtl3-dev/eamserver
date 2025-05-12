import prisma from '../../src/components/prismaclient';
import express from 'express';

const router = express.Router();

router.get('/', async(req, res) => {
    const location = await prisma.location.findMany();
    res.status(200).json(location)
 });

 router.post('/', async(req, res) => {
    const mylocation = req.body;
    
    console.log(mylocation)
    try {
        const location = await prisma.location.create({
            data: {
                companyidkey: mylocation.companyidkey,
                locationname: mylocation.locationname,
                locationstateprov: mylocation.locationstateprov,
                locationcity: mylocation.locationcity,
                locationtown: mylocation.locationtown,
                lat: mylocation.lat,
                long: mylocation.long,
                locationgrp: mylocation.locationgrp,
                locationcat: mylocation.locationcat,
            }
        });
        res.json(location)
        res.status(200).json(location)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
 });
 
 //export this router to use in our index.js
 module.exports = router;

