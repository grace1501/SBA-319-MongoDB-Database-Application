import express from 'express'
import db from '../db/conn.mjs'
import { ObjectId } from 'mongodb'

const router = express.Router()


// Get all users
router.get('/', async (req, res)=>{
    try {
        let collection = await db.collection('users');
        let query = {}
        let result = await collection.find(query).toArray()
        if (!result) res.send("Not found").status(404)
        else res.send(result).status(200)
    }
    catch (e) {
        console.log(e)
    }
})

// Add a new user via POST request
// sample data
// {"email": "first.last@mail.com","first_name": "first","last_name": "last"}

router.post('/', async (req, res) => {
    try {
        let collection = await db.collection('users');
        let newDocument = req.body;
    
        let result = await collection.insertOne(newDocument);
        if (!result) res.send('Bad request').status(400)
        else res.send(result).status(201)
    }
    catch (e) {
        console.log(e)
    }
})


// Get a user by id
router.get('/:id', async (req, res)=> {
    try {
        let collection = await db.collection('users')
        let query = { _id: new ObjectId(req.params.id )}
        let result = await collection.findOne(query);
    
        if (!result) res.send("Not found").status(404)
        else res.send(result).status(200)
    }
    catch (e) {
        console.log(e)
    }
})

// Delete a user by id
router.delete('/:id', async (req, res)=> {
    try {
        let collection = await db.collection('users')
        let query = { _id: new ObjectId(req.params.id )}
        let result = await collection.deleteOne(query);
    
        if (!result) res.send("Not found").status(404)
        else res.send(result).status(200)
    }
    catch (e) {
        console.log(e)
    }
})


export default router;