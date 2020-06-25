const Sequelize = require("sequelize");
require('dotenv').config(); 

// database connection 
const sequelize = new Sequelize(
    process.env.LOCAL_DATABASE,
    process.env.LOCAL_USERNAME, 
    process.env.LOCAL_PASSWORD, 
    {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;