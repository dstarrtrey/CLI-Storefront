const inquirer = require("inquirer"); //CLI input/output
const chalk = require("chalk"); //CLI styling

const addToInventory = (connection, cback) => {
  inquirer
    .prompt([
      {
        name: "id",
        message: "ID of the product to add inventory: ",
        type: "number"
      },
      {
        name: "quantity",
        message: "How many would you like to add?",
        type: "number"
      }
    ])
    .then(results => {
      connection.query(
        "UPDATE products SET stock_quantity = stock_quantity + ? WHERE item_id = ?",
        [results.quantity, results.id],
        err => {
          if (err) throw err;
          console.log(
            "You added " +
              chalk.blueBright(results.quantity) +
              " to item #" +
              chalk.yellow(results.id)
          );
          cback();
        }
      );
    });
};

module.exports = addToInventory;
