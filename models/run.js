var RunnerM = require("../models");

'use strict';
module.exports = function(sequelize, DataTypes) {
    var Run = sequelize.define('Run', {
        runid: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        distance: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
            }
        },
        totalTime: {
            type: DataTypes.TIME,
            allowNull: false,
            validate: {
            }
        },
        averagePace: {
            type: DataTypes.TIME,
            allowNull: false,
            validate: {
            }
        },
        agPercent: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: true,
            }
        },
        dateTime: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
            }
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 100]
            }
        },
        temperature: {
            type: DataTypes.DECIMAL,
            allowNull: true,
            validate: {
            }
        },
        windMPH: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        dewPoint: {
            type: DataTypes.DECIMAL,
            allowNull: true,
            validate: {
            }
        },        
    // It is possible to create foreign keys:
// user_ID: {
//   type: DataTypes.INTEGER,
//   references: {
//     // This is a reference to another model
//     model: Runner,
//     // This is the column name of the referenced model
//     key: 'userid',
//     // This declares when to check the foreign key constraint. PostgreSQL only.
//     deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
//   }
// }
        
    }, {
        classMethods: {
            associate: function (models) {
                Run.hasOne(models.RunnerM);
            }
        }
    });
    return Run;
};
