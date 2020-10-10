module.exports = app => {
  const profiles = require("../controllers/profile.controller");
  //const profiles = app.db.models.profiles;
  var router = require("express").Router();

  // Create a new Profile
  router.post("/", profiles.create);

  // Retrieve all Profiles
  router.get("/", profiles.findAll);

  // Retrieve all published Profiles
  router.get("/published", profiles.findAllPublished);

  // Retrieve a single Profile with id
  router.get("/:id", profiles.findOne);

  // Update a Profile with id
  router.put("/:id", profiles.update);

  // Delete a Profile with id
  router.delete("/:id", profiles.delete);

  // Delete all Profiles
  router.delete("/", profiles.deleteAll);

  app.use('/api/profiles', router);
};