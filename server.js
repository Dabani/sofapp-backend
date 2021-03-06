const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

const db = require("./app/models");
const UserController = require("./app/controllers/user.controller");
const FederationController = require("./app/controllers/federation.controller");
const Role = db.role;

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync Db");
  initial();
});

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Soccer Federation application." });
});
// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/profile.routes")(app);
require("./app/routes/federation.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


function initial() {
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "player"
  });

  Role.create({
    id: 3,
    name: "agent"
  });
  Role.create({
    id: 4,
    name: "manager"
  });

  Role.create({
    id: 5,
    name: "executive"
  });

  Role.create({
    id: 6,
    name: "referee"
  });
  Role.create({
    id: 7,
    name: "staff"
  });

  Role.create({
    id: 8,
    name: "admin"
  });
}

// Show all Users
const users = await UserController.findAll();
console.log(">> users", JSON.stringify(users, null, 2));

// Show all Users
const federations = await FederationController.findAll();
console.log(">> federations", JSON.stringify(federations, null, 2));