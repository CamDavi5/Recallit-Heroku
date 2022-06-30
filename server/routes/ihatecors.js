// Written by Garrett Harris, Innovate Bham TA

import * as express from 'express';
import fetch from 'node-fetch'


const router = express.Router();


router.use('/ford', async (req, res) => {
    fetch('https://api.nhtsa.gov/recalls/recallsByVehicle?make=ford&model=f-150&modelYear=2021')
    .then(data => data.json())
    .then(data => res.json(data))
});

router.use('/honda1', async (req, res) => {
    fetch('https://api.nhtsa.gov/recalls/recallsByVehicle?make=honda&model=pilot&modelYear=2021')
    .then(data => data.json())
    .then(data => res.json(data))
});

router.use('/honda2', async (req, res) => {
    fetch('https://api.nhtsa.gov/recalls/recallsByVehicle?make=honda&model=cr-v&modelYear=2021')
    .then(data => data.json())
    .then(data => res.json(data))
});

router.use('/honda3', async (req, res) => {
    fetch('https://api.nhtsa.gov/recalls/recallsByVehicle?make=honda&model=insight&modelYear=2021')
    .then(data => data.json())
    .then(data => res.json(data))
});

router.use('/mercedes1', async (req, res) => {
    fetch('https://api.nhtsa.gov/recalls/recallsByVehicle?make=mercedes-benz&model=c300&modelYear=2021')
    .then(data => data.json())
    .then(data => res.json(data))
});

router.use('/mercedes2', async (req, res) => {
    fetch('https://api.nhtsa.gov/recalls/recallsByVehicle?make=mercedes-benz&model=gle350&modelYear=2021')
    .then(data => data.json())
    .then(data => res.json(data))
});

router.use('/vehicle/:id', async (req, res) => {
    const id = req.params.id;

    fetch(`https://api.nhtsa.gov/recalls/campaignNumber?campaignNumber=${id}`)
    .then(data => data.json())
    .then(data => res.json(data))
});

export default router