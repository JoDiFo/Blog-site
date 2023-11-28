const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const PORT = 8000;
const URI = "mongodb://localhost:27017";

const app = express();
const client = new MongoClient(URI);

app.use(express.json());
app.use(cors());
app.use("/images", express.static(__dirname + "/images"));

app.get("/", async (_req, res) => {
  res.send("hello");
});

app.get("/courses", async (_req, res) => {
  res.sendFile("./Data/Courses.json", { root: __dirname });
});

app.get("/articles", async (_req, res) => {
  res.sendFile("./Data/Articles.json", { root: __dirname });
});

app.get("/headers", async (_req, res) => {
  res.sendFile("./Data/HeaderLinks.json", { root: __dirname });
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  await client.connect();
  const users = await client.db("blogSiteDB").collection("users");

  const found = await users.findOne({ email: email });

  if (found) {
    if (found.password === password) {
      console.log("login successful");
      res.status(200).send();
    } else {
      console.log("wrong password");
      res.status(200).send();
    }
  } else {
    console.log("not found");
    res.status(200).send();
  }
});

app.post("/register", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
});

app.use((_req, res) => {
  res.send("404 - Not found");
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
