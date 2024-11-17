import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

// MongoDB connection string
const connectionString =
  "mongodb+srv://asimmasood707:asim123@airbnb-cluster.edn8a.mongodb.net/?retryWrites=true&w=majority&appName=Airbnb-Cluster";

// Connect to MongoDB using Mongoose
mongoose
  .connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database...");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

// Access the specific database and collection
const sampleDataset = mongoose.connection.useDb("sample_airbnb");
const listingSampleCollection = sampleDataset.collection("listingsAndReviews");

// Define an endpoint to fetch data
app.get("/", async (req, res) => {
  try {
    // Ensure you call `toArray()` to fetch the results
    const documents = await listingSampleCollection.find({}).limit(10).toArray();
    res.json(documents);
  } catch (err) {
    console.error("Error fetching documents:", err);
    res.status(500).send("Error fetching documents");
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
 