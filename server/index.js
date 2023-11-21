const express = require("express");
const cors = require("cors");

const PORT = 8000;

const app = express();
app.use(cors());

app.use("/images", express.static(__dirname + "/images"));

// Default page
app.get("/", async (_req, res) => {
  res.send("hello");
});

// Endpoint with courses data
app.get("/courses/data", async (_req, res) => {
  res.sendFile("./Data/Courses.json", { root: __dirname });
});

app.get("/articles", async (_req, res) => {
  res.sendFile("./Data/Articles.json", { root: __dirname });
});

// Not found
app.use((_req, res) => {
  res.send("404 - Not found");
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
