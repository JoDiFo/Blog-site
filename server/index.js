const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 8000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/images", express.static(__dirname + "/images"));

app.get("/", async (_req, res) => {
  res.send("hello");
});

app.get("/courses/data", async (_req, res) => {
  res.sendFile("./Data/Courses.json", { root: __dirname });
});

app.get("/articles", async (_req, res) => {
  res.sendFile("./Data/Articles.json", { root: __dirname });
});

app.get("/headers", async (_req, res) => {
  res.sendFile("./Data/HeaderLinks.json", { root: __dirname });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send({ id: "user" });
});

app.use((_req, res) => {
  res.send("404 - Not found");
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
