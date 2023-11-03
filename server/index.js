import express from "express";

const app = express();
app.listen(5173);

app.get("/", async (req, res) => {
  res.sendFile("../client/src/index.html", { root: __dirname });
  console.log("Home request");
});

app.use((req, res) => {
  res.send("404 - Not found");
});
