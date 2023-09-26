const express = require("express")
const app = express()
const { MongoClient } = require("mongodb")
require("dotenv").config()

const uri = process.env.MONGO_URI
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.get("/readAll", async (req, res) => {
    try {
        await client.connect()
        const database = client.db("sample_airbnb")
        const collection = database.collection("listingsAndReviews")
        const result = await collection.find().toArray()
        console.log("result:", result)
    } catch (error) {
        console.error("Error:", error)
        res.status(500).json({ error: "Internal Server Error" })
    } finally {
        await client.close()
    }
})

app.get("/readOne", async (req, res) => {
    try {
        await client.connect()
        const database = client.db("sample_airbnb")
        const collection = database.collection("listingsAndReviews")
        const result = await collection.findOne({
            name: "Ribeira Charming Duplex",
        })
        console.log("result:", result)
    } catch (error) {
        console.error("Error:", error)
        res.status(500).json({ error: "Internal Server Error" })
    } finally {
        await client.close()
    }
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
