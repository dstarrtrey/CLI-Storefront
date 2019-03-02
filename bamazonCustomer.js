const inquirer = require("inquirer");
const chalk = require("chalk");
const mysql = require("mysql");
const processPurchase = require("./process-purchase.js");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bamazon"
});
const inquire = async callback => {
  const responses = await inquirer.prompt([
    {
      type: "number",
      name: "purchaseId",
      message: "What is the ID of the product they would like to buy?"
    },
    {
      type: "number",
      name: "quantity",
      message: "How many would you like to purchase?"
    }
  ]);
  console.log(
    "You chose " +
      chalk.blueBright(responses.quantity) +
      " parcels of ID No. " +
      chalk.blueBright(responses.purchaseId) +
      "."
  );
  console.log(chalk.red("Processing..."));
  callback(responses, connection);
};

connection.query("SELECT * FROM products", function(error, results, fields) {
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
  inquire(processPurchase);
});
