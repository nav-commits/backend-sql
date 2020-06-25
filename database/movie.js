const Sequelize = require("sequelize");

const sequelize = require('../Connection/connect');

const Movie = sequelize.define('movie',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    title:{
       type:Sequelize.STRING,
       allowNull: false
    },

    rating:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});


module.exports = Movie;