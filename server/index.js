import { MongoClient } from "mongodb";
import express from "express";

const PORT = 8000;

const app = express();

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

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

app.get("/", async (_req, res) => {
  const response = await run().catch(console.dir);
  res.send(response);
});

app.use((req, res) => {
  res.send("404 - Not found");
});
