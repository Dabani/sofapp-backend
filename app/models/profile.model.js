module.exports = (sequelize, Sequelize) => {
  const Profile = sequelize.define("profiles", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
      type: Sequelize.ENUM,
      values: ["female", "male"]
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
      type: Sequelize.TEXT("long")
    },
    state: {
      type: Sequelize.ENUM,
      values: ["public", "private", "relative"]
    }
  });

  return Profile;
};

/*
Displaying enum values

console.log(Profile.rawAttributes.status.values);
// logs ['public', 'private', 'relative'] in console

*/