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
    otherName: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.ENUM,
      values: ["female", "male"]
    },
    dateOfBirth: {
      type: Sequelize.DATEONLY
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
    biography: {
      type: Sequelize.TEXT("long")
    },
    telephone: {
      type: Sequelize.STRING
    },
    webUrl: {
      type: Sequelize.STRING
    },
    imageUrl: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.ENUM,
      values: ["public", "private", "relative"]
    },
    published: {
      type: Sequelize.BOOLEAN,
      default: false
    }
  });

  return Profile;
};

/*
Displaying enum values

console.log(Profile.rawAttributes.state.values);
// logs ['public', 'private', 'relative'] in console

*/