// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

import prisma from '@/components/prismaclient';
import express from 'express';
const router = express.Router();

router.get('/', async(req, res) => {
    const { cidkey } = req.body;
try {
        const assetgrps = await prisma.assetgrps.findMany({
            where: {
                companyidkey: cidkey
            }
        });
        res.status(200).json(assetgrps)
    } catch (error) {
        res.status(400).json({error});
    }
 });

 router.get('/:id', async(req, res) => {
    const { id } = req.params;
    const { cidkey } = req.body;
    try {
        const assetgrps = await prisma.assetgrps.findFirst({
            where: {
                companyidkey: cidkey,
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
            }
        });
        res.status(200).json(assetgrps)
    } catch (error) {
        res.status(400).json({error});
    }
 });

 router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const {cidkey, shortname, longname } = req.body;
    try {
        const assettype = await prisma.assetgrps.update({
        where: {  assetgrpsid: Number(id),
                    companyidkey: cidkey,
        },
        data: {   shortname: shortname,
                    longname: longname
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
        const assettype = await prisma.assetgrps.delete({
            where: {
            assetgrpsid: Number(id),
            companyidkey: cidkey,
            },
        })
        res.json(assettype)
    } catch (error) {
        res.status(400).json({error});
    }
    })
 
export default router; 

