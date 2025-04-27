const { MongoClient } = require("mongodb");

const uri = process.env.URI

if (!uri) {
    throw new Error ("URI MongoDB is not found.")
}

const client = MongoClient(uri)

// * Test connection to database
try {
    await client.connect()
    console.log("MongoDB Connected!!")
} catch (error) {
    console.error("MongoDB Connection Failed, Issue:", error)
}

connectDB()
