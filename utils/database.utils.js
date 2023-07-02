const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

// Establish db connection
const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "lopezs",
  port: 5432,
  database: "mealsdb",
  logging: false,
});

module.exports = { db, DataTypes };
