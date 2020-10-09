const db = require("../models");
const Federation = db.federations;
const Op = db.Sequelize.Op;

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: federations } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, federations, totalPages, currentPage };
};

// Create and Save a new Federation
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Federation
  const federation = {
    name: req.body.name,
    slug: req.body.slug,
    description: req.body.description,
    telephone: req.body.telephone,
    email: req.body.email,
    webUrl: req.body.webUrl,
    country: req.body.country,
    location: req.body.location,
    logoUrl: req.body.logoUrl,
    published: req.body.published ? req.body.published : false
  };

  // Save Federation in the database
  db.federation.create(federation)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Federation."
      });
    });

};

// Retrieve all Federations from the database.
exports.findAll = (req, res) => {

  const { page, size, name } = req.query;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  const { limit, offset } = getPagination(page, size);

  db.federation.findAndCountAll({ where: condition, limit, offset })
    .then(data => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving federations."
      });
    });

};

// Find a single Federation with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  db.federation.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Federation with id=" + id
      });
    });

};

// Update a Federation by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  db.federation.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Federation was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Federation with id=${id}. Maybe Federation was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Federation with id=" + id
      });
    });
};

// Delete a Federation with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  db.federation.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Federation was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Federation with id=${id}. Maybe Federation was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Federation with id=" + id
      });
    });
};

// Delete all Federations from the database.
exports.deleteAll = (req, res) => {
  db.federation.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Federations were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all federations."
      });
    });

};

// Find all published Federations
exports.findAllPublished = (req, res) => {
  
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  db.federation.findAndCountAll({ where: { published: true }, limit, offset })
    .then(data => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving federations."
      });
    });

};