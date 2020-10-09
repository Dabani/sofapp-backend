module.exports = app => {
  const federations = require("../controllers/federation.controller.js");

  var router = require("express").Router();

  // Create a new Federation
  router.post("/", federations.create);

  // Retrieve all Federations
  router.get("/", federations.findAll);

  // Retrieve all published Federations
  router.get("/published", federations.findAllPublished);

  // Retrieve a single Federation with id
  router.get("/:id", federations.findOne);

  // Update a Federation with id
  router.put("/:id", federations.update);

  // Delete a Federation with id
  router.delete("/:id", federations.delete);

  // Delete all Federations
  router.delete("/", federations.deleteAll);

  app.use('/api/federations', router);
};