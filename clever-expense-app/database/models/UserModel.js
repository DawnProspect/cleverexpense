const { MongoClient } = require("mongodb");

const uri = process.env.URI

const client = MongoClient(uri)