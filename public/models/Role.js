// const { Model, DataTypes } = require("sequelize");
// const sequelize = require ("../config/connection");

// class Role extends Model {}

// Role.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         title: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 isAlphanumeric: true,
//             },
//         },
//         salary: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },
//         department_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: "role",
//     },
// );

// module.exports = Role;
