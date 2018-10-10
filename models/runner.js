'use strict';
module.exports = (sequelize, DataTypes) {
    var Runner = sequelize.define('Runner', {
        userid: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        runnerFirstname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true,
                len: [1, 60]
            }
        },
        runnerLastname: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isAlpha: true,
                len: [1, 60]
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        gender: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
                isAfter: "1900-12-31",
                isBefore: "2050-12-31"
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                len: [1, 100]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        }
    }, {
        classMethods: {
            associate: function (models) {
                Runner.hasMany(models.Run);
            }
        }
    });
    return Runner;
};
