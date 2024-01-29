import express from 'express'
import db from '../db/conn.mjs'
import { ObjectId } from 'mongodb'

const router = express.Router()


// Get all purchases
router.get('/', async (req, res)=>{
   try {
    let collection = await db.collection('purchases');
    let query = {}
    let result = await collection.find(query).toArray()
    if (!result) res.send("Not found").status(404)
    else res.send(result).status(200)
   }
   catch (e) {
    console.log(e)
   }
})

// Add a new purchase/order via POST request
// sample data
// {"email": "test.purchase@mail.com", "items": [{"Begonia": 10}, {"Daisy" : 5}]}

router.post('/', async (req, res) => {
    try {
    let collection = await db.collection('purchases');
    let newDocument = req.body;

    let result = await collection.insertOne(newDocument);
    if (!result) res.send('Bad request').status(400)
    else res.send(result).status(201)
    }
    catch (e) {
        console.log(e)
    }
})


// Get a purchase by id
router.get('/:id', async (req, res)=> {
    try {
        let collection = await db.collection('purchases')
        let query = { _id: new ObjectId(req.params.id)}
        let result = await collection.findOne(query);
    
        if (!result) res.send("Not found").status(404)
        else res.send(result).status(200)
    }
    catch (e) {
        console.log(e)
    }
})

// Update a purchase - Add item to the purchase list
router.patch('/:id/add', async (req, res)=> {
    try {
        let collection = await db.collection('purchases')
        let query = { _id: new ObjectId(req.params.id)}
        
        let result = await collection.updateOne(query, {
            $push: { items: req.body }
        })
    
        if (!result) res.send("Not found").status(404)
        else res.send(result).status(200)
    }
    catch (e) {
        console.log(e)
    }
})


// Delete a purchase by id
router.delete('/:id', async (req, res)=> {
    try {
        let collection = await db.collection('purchases')
        let query = { _id: new ObjectId(req.params.id)}
        let result = await collection.deleteOne(query);
    
        if (!result) res.send("Not found").status(404)
        else res.send(result).status(200)
    }
    catch (e) {
        console.log(e)
    }
})


export default router;