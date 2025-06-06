// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

import prisma from '@/components/prismaclient';
import express from 'express';
const router = express.Router();

router.get('/', async(req, res) => {
try {
        const assetgrps = await prisma.assetgrps.findMany({
            where: { active: true }
        });
        res.status(200).json(assetgrps)
    } catch (error) {
        res.status(400).json({error});
    }
 });

 router.get('/:id', async(req, res) => {
    const { id } = req.params;
    // const { companyidkey } = req.body;
    try {
        const assetgrps = await prisma.assetgrps.findFirst({
            where: {
                // companyidkey: companyidkey,
                assetgrpsid: Number(id)
            }
        });
        res.status(200).json(assetgrps)
    } catch (error) {
        res.status(400).json({error});
    }
 });

 router.post('/', async(req, res) => {
    const myassetgrps = req.body;
    
    console.log(myassetgrps)
    try {
        const assetgrps = await prisma.assetgrps.create({
            data: {
                companyidkey: myassetgrps.companyidkey,
                shortname: myassetgrps.shortname,
                longname: myassetgrps.longname,
                active: true,
            }
        });
        res.status(200).json(assetgrps)
    } catch (error) {
        res.status(400).json({error});
    }
 });

 router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const {companyidkey, shortname, longname } = req.body;
    try {
        const assetgrp = await prisma.assetgrps.update({
        where: {  assetgrpsid: Number(id)
        },
        data: {   shortname: shortname,
                    longname: longname
        },
        })
        res.json(assetgrp)
    } catch (error) {
        res.status(400).json({error});
    }
  })

 router.delete('/:id', async (req, res) => {
    const { id } = req.params
    // const { companyidkey } = req.body;
    try {
        const assetgrp = await prisma.assetgrps.update({
            where: {
            assetgrpsid: Number(id),
            // companyidkey: companyidkey,
            },
            data: { active: false }
        })
        res.json(assetgrp)
    } catch (error) {
        res.status(400).json({error});
    }
    })
 
export default router; 

