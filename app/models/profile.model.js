module.exports = (sequelize, Sequelize) => {
  const Profile = sequelize.define("profiles", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    userId: {
      type: Sequelize.INTEGER
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    telephone: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    dateOfBirth: {
      type: Sequelize.STRING
    },
    placeOfBirth: {
      type: Sequelize.STRING
    },
    nationalityAtBirth: {
      type: Sequelize.STRING
    },
    nationalityCurrent: {
      type: Sequelize.STRING
    },
    imageUrl: {
      type: Sequelize.STRING
    },
    biography: {
      type: Sequelize.STRING
    }
  });

  return Profile;
};
