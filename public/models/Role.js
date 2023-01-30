const { Model, DataTypes } = require("sequelize");
const sequelize = require ("../config/connection");

class Role extends Model {}

Role.init(
    {
        role_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "employee"
    }
);

module.exports = Role;
