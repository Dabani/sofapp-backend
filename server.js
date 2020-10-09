const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync({ force: false }).then(() => {
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