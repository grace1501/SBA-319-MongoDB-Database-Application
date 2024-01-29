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

let db = conn.db('Test');

export default db;