const express = require("express");
const http = require("http");
const faker = require("faker");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  const data = {
    route: "/api/name",
    description: "generates new name",
  };
  res.send(data);
});

app.get("/api/name", (req, res) => {
  const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
  let data = {
    name,
  };

  res.send({
    data,
  });
});

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

server.listen(PORT, "0.0.0.0", (req, res) => {
  console.log("server started");
});
