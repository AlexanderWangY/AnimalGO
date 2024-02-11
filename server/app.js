const express = require('express')
const cors = require('cors');
const app = express()
// MongoDB
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://test_user:BXaXHTykamqjssNb@animals.ahx4hzx.mongodb.net/?retryWrites=true&w=majority";

// To parse json request body
app.use(express.json({ limit: '1mb' }));

app.use(cors());


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

async function run() {
try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
} finally {
    // Ensures that the client will close when you finish/error
    await client.close();
}
}
run().catch(console.dir);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.post('/upload-data', async (req, res) => {
    try {
      // Connect to MongoDB
      await client.connect();
      // Get the database
      dbName = "Animals"
      const db = client.db(dbName);
  

      collectionName = "Demo"
      // Get the collection
      const collection = db.collection(collectionName);
  
      // Data to be uploaded
      const newData = {
        image: req.body.image,
        class: req.body.class,
        longitude: req.body.location,
        time: req.body.time
        // Add more fields as needed
      };
  
      // Insert the data into the collection
      const result = await collection.insertOne(newData);
  
  
      res.status(201).json({ message: 'Data uploaded successfully', insertedId: result.insertedId });
    } catch (error) {
      console.error('Error uploading data to MongoDB:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

app.get('/get-data', async (req, res) => {
    // console.log("has class:  " + req.query.hasOwnProperty('class'));
    // console.log("has location:  " + (req.query.hasOwnProperty('time')));

    await client.connect();
    const db = client.db("Animals");
    const collection = db.collection("Demo");

    var query = {};
    query["class"] = req.query.class;
    console.log(query);

    // Execute query 
    const cursor = collection.find(query);
 
    var result = []
    // Print returned documents
    for await (const doc of cursor) {
      console.log(doc);
      result.push(doc);
    }

    res.send(result);
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
