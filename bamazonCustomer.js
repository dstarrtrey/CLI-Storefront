require("dotenv").config();
const chalk = require("chalk");
const mysql = require("mysql");
const inquire = require("./inquiry.js"); //Function that asks the user about the purchase they would like to make
const processPurchase = require("./process-purchase.js"); //Function that processes customer's purcase with database

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DATABASE
});

connection.connect(function(err) {
  if (err) throw err;
  //Logs all products in database
  connection.query("SELECT * FROM products", function(error, results) {
    if (error) throw error;
    console.log("Products include: ");
    results.forEach(result => {
      console.log(
        "id:",
        chalk.yellow(result.item_id),
        "| name:",
        chalk.blueBright(result.product_name),
        "| price:",
        chalk.green("$" + result.price)
      );
    });
    //Asks customer for their purchase interest
    inquire(processPurchase, connection);
  });
});
