'use strict';
module.exports = (sequelize, DataTypes) => {
  const Runner = sequelize.define('Runner', {
    runnerUsername: DataTypes.STRING,
    runnerFirstname: DataTypes.STRING,
    runnerLastname: DataTypes.STRING,
    city: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    dob: DataTypes.DATE,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Runner.associate = function(models) {
    // associations can be defined here
  };
  return Runner;
};