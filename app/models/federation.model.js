module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    slug: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    telephone: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    webUrl: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    },
    logoUrl: {
      type: Sequelize.STRING
    }
  });

  return Role;
};
