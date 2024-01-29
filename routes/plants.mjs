import express from 'express'
import db from '../db/conn.mjs'
import { ObjectId } from 'mongodb'

const router = express.Router()


// Get all plants
router.get('/', async (req, res)=>{
    let collection = await db.collection('plants');
    let query = {}
    let result = await collection.find(query).toArray()
    if (!result) res.send("Not found").status(404)
    else res.send(result).status(200)
})

// Add a new plant via POST request
// sample data
// {"common_name": "Daisy", "cycle": "Annual", "watering": "Frequent", "sunlight": ["full sun", "part shade"]}

router.post('/', async (req, res) => {
    let collection = await db.collection('plants');
    let newDocument = req.body;

    let result = await collection.insertOne(newDocument);
    if (!result) res.send('Bad request').status(400)
    else res.send(result).status(201)
})


// Get a plant by id
router.get('/:id', async (req, res)=> {
    let collection = await db.collection('plants')
    let query = { _id: new ObjectId(req.params.id )}
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404)
    else res.send(result).status(200)
})

// Delete a plant by id
router.delete('/:id', async (req, res)=> {
    let collection = await db.collection('plants')
    let query = { _id: new ObjectId(req.params.id )}
    let result = await collection.deleteOne(query);

    if (!result) res.send("Not found").status(404)
    else res.send(result).status(200)
})


export default router;