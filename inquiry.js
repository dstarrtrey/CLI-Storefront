const inquirer = require("inquirer");
const chalk = require("chalk");

const inquire = async (callback, connection) => {
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

module.exports = inquire;
