import prisma from '@/components/prismaclient';
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
        res.status(400).json({error});
    }
 });


 router.get('/:id', async(req, res) => {
    const { id } = req.params;
    const { cidkey } = req.body;
    try {
        const location = await prisma.location.findFirst({
            where: {
                companyidkey: cidkey,
                locationid: Number(id)
            }
        });
        res.status(200).json(location)
    } catch (error) {
        res.status(400).json({error});
    }
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
        res.status(200).json(location)
    } catch (error) {
        res.status(400).json({error});
    }
 });

 router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const {cidkey, locationcat, locationgrp, locationcity, locationname, locationstateprov, locationtown, lat, long } = req.body;
    try {
        const assettype = await prisma.location.update({
        where: {  locationid: Number(id),
                  companyidkey: cidkey,
        },
        data: {   
                locationname: locationname,
                locationstateprov: locationstateprov,
                locationcity: locationcity,
                locationtown: locationtown,
                lat: lat,
                long: long,
                locationgrp: locationgrp,
                locationcat: locationcat,
        },
        })
        res.json(assettype)
    } catch (error) {
        res.status(400).json({error});
    }
  })

 router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const { cidkey } = req.body;
    try {
        const assettype = await prisma.location.delete({
            where: {
            locationid: Number(id),
            companyidkey: cidkey,
            },
        })
        res.json(assettype)
    } catch (error) {
        res.status(400).json({error});
    }
    })
 
export default router; 
