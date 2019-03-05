require("dotenv").config();
const mysql = require("mysql");
const inquirer = require("inquirer");
const viewProducts = require("./view-products.js"); //Function for manager to view all products in database
const viewLowInventory = require("./view-low-inventory.js"); //Function for manager to view what needs to be restocked (has less than 5 left in inventory)
const addToInventory = require("./add-to-inventory.js"); //Function for manager to log into database that inventory was restocked
const addNewProduct = require("./add-new-product.js"); //Function for manager to add a brand new product to the inventory database

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DATABASE
});
connection.connect(function(err) {
  if (err) throw err;
  const inquire = () => {
    //Provides UX for manager to select function they want.
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
