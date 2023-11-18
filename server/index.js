const mongodb = require("mongodb");
const express = require("express");
const cors = require("cors");

const PORT = 8000;
const URI = "mongodb://localhost:27017";

const app = express();

const client = new mongodb.MongoClient(URI);

// Getting data from local database
async function run() {
  try {
    const database = client.db("animeSeriesDB");
    const collection = database.collection("series");

    const query = { genres: "Action" };
    const findResult = await collection.find(query);

    const animeList = [];
    for await (const anime of findResult) {
      animeList.push(anime);
    }

    return animeList;
  } finally {
    await client.close();
  }
}

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

app.use(cors());

app.use("/images", express.static(__dirname + "/images"));

// Default page
app.get("/", async (_req, res) => {
  res.send("hello");
});

// Endpoint with data from database
app.get("/data", async (_req, res) => {
  const response = await run().catch(console.dir);
  res.send(response);
});

// Endpoint with courses data
app.get("/courses/data", async (_req, res) => {
  res.sendFile("./Data/Courses.json", { root: __dirname });
});

// Endpoint with image
// app.get("/images", async (_req, res) => {
//   res.sendFile("Images/hollow-knight.png", { root: __dirname });
// });

// Not found
app.use((_req, res) => {
  res.send("404 - Not found");
});
