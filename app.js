const express = require("express")
const app = express()
const { MongoClient } = require("mongodb")
require("dotenv").config()

const uri = process.env.MONGO_URI
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.get("/", (_req, res) => {
    const htmlContent = `
        <div style='border-style: solid; border-width: 5px;'>
            <h1 style='text-align: center;'>Home Page</h1>
        </div>
        <a href='localhost:3000/readAll'>Read All</a>
        <a href='localhost:3000/readOne'>Read One</a>
    `

    res.send(htmlContent)
})

app.get("/readAll", async (_req, res) => {
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

app.get("/readOne", async (_req, res) => {
    try {
        await client.connect()
        const database = client.db("sample_airbnb")
        const collection = database.collection("listingsAndReviews")
        const result = await collection.findOne({
            name: "Ribeira Charming Duplex",
        })
        res.send(result)
    } catch (error) {
        console.error("Error:", error)
        res.status(500).json({ error: "Internal Server Error" })
    } finally {
        await client.close()
    }
})

app.post("/createOne", async (_req, res) => {
    try {
        await client.connect()
        const database = client.db("sample_airbnb")
        const collection = database.collection("listingsAndReviews")
        const result = await collection.insertOne({
            name: "Lovely Loft",
            summary: "A lovely loft in the center of the city.",
            bedrooms: 1,
            bathrooms: 1,
        })
        res.send("Listing added", result.acknowledged)
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
