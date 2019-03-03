const chalk = require("chalk");
const viewLowInventory = (connection, cback) => {
  connection.query("SELECT * FROM products WHERE stock_quantity < 5", function(
    error,
    results
  ) {
    if (error) throw error;
    console.log("---------------------------------------------------");
    console.log(
      "Products with low inventory " + chalk.red("(less than 5)") + ":"
    );
    results.forEach(result => {
      console.log(
        "id:",
        chalk.yellow(result.item_id),
        "| name:",
        chalk.blueBright(result.product_name),
        "| price:",
        chalk.green("$" + result.price),
        "| quantity:",
        chalk.yellow(result.stock_quantity)
      );
    });
    console.log("---------------------------------------------------");
    cback();
  });
};

module.exports = viewLowInventory;
