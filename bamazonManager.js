require("dotenv").config();
const mysql = require("mysql");
const inquirer = require("inquirer");
const viewProducts = require("./view-products.js");
const viewLowInventory = require("./view-low-inventory.js");
const addToInventory = require("./add-to-inventory.js");
const addNewProduct = require("./add-new-product.js");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DATABASE
});
connection.connect(function(err) {
  if (err) throw err;
  const inquire = () => {
    inquirer
      .prompt([
        {
          name: "Select",
          type: "list",
          choices: [
            "View Products for Sale",
            "View Low Inventory",
            "Add to Inventory",
            "Add New Product",
            "Exit"
          ]
        }
      ])
      .then(result => {
        if (err) throw err;
        switch (result.Select) {
          case "View Products for Sale":
            viewProducts(connection, inquire);
            break;
          case "View Low Inventory":
            viewLowInventory(connection, inquire);
            break;
          case "Add to Inventory":
            addToInventory(connection, inquire);
            break;
          case "Add New Product":
            addNewProduct(connection, inquire);
            break;
          case "Exit":
            connection.end();
            console.log("Connection ended.");
            break;
        }
      });
  };
  inquire();
});
