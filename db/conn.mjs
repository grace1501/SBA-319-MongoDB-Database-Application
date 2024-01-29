import { MongoClient } from 'mongodb'

const connectionString = process.env.ATLAS_URI

const client = new MongoClient(connectionString)

let conn;

try {
    conn = await client.connect();

    console.log("Successfully connected to MongoDB")

} catch(e) {
    console.log(e)
}

// Change this database and use '/seed' route to populate data
let db = conn.db('PlantsAPI');

export default db;