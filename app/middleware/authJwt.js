const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Admin Role!"
      });
      return;
    });
  });
};

isStaff = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "staff") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Staff Role!"
      });
    });
  });
};

isReferee = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "referee") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Referee Role!"
      });
    });
  });
};

isExecutive = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "executive") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Executive Role!"
      });
    });
  });
};

isManager = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "manager") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Manager Role!"
      });
    });
  });
};

isAgent = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "agent") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Agent Role!"
      });
    });
  });
};

isPlayer = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "player") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Player Role!"
      });
    });
  });
};

isStaffOrAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "staff") {
          next();
          return;
        }

        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Staff or Admin Role!"
      });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isStaff: isStaff,
  isReferee: isReferee,
  isExecutive: isExecutive,
  isManager: isManager,
  isAgent: isAgent,
  isPlayer: isPlayer,
  isStaffOrAdmin: isStaffOrAdmin
};
module.exports = authJwt;