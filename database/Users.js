const Sequelize = require("sequelize");

const sequelize = require('../Connection/connect');

const Users = sequelize.define('users',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name:{
       type:Sequelize.STRING,
       allowNull: false
    },

    password:{
        type: Sequelize.STRING,
        allowNull: false
    }
});


module.exports = Users;



