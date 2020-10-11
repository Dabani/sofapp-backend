module.exports = (sequelize, Sequelize) => {
  const League = sequelize.define("leagues", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    federationId: {
      type: Sequelize.INTEGER,
      foreignKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    slug: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT("medium")
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
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return League;
};
