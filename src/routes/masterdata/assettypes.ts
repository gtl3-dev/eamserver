// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

import prisma from '@/components/prismaclient';
import express from 'express';
const router = express.Router();

router.get('/', async(req, res) => {
    const { cidkey } = req.body;
try {
        const assettypes = await prisma.assettypes.findMany({
            where: {
                companyidkey: cidkey
            }
        });
        res.status(200).json(assettypes)
    } catch (error) {
        res.status(400).json({error});
    }
 });

 router.get('/:id', async(req, res) => {
    const { id } = req.params;
    const { cidkey } = req.body;
    try {
        const assettypes = await prisma.assettypes.findFirst({
            where: {
                companyidkey: cidkey,
                assettypesid: Number(id)
            }
        });
        res.status(200).json(assettypes)
    } catch (error) {
        res.status(400).json({error});
    }
 });

 router.post('/', async(req, res) => {
    const myassettypes = req.body;
    
    console.log(myassettypes)
    try {
        const assettypes = await prisma.assettypes.create({
            data: {
                companyidkey: myassettypes.companyidkey,
                shortname: myassettypes.shortname,
                longname: myassettypes.longname,
            }
        });
        res.status(200).json(assettypes)
    } catch (error) {
        res.status(400).json({error});
    }
 });

 router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const {cidkey, shortname, longname } = req.body;
    try {
        const assettype = await prisma.assettypes.update({
        where: {  assettypesid: Number(id),
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
        const assettype = await prisma.assettypes.delete({
            where: {
            assettypesid: Number(id),
            companyidkey: cidkey,
            },
        })
        res.json(assettype)
    } catch (error) {
        res.status(400).json({error});
    }
    })
 
export default router; 

