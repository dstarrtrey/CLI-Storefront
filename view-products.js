const chalk = require("chalk");

const viewProducts = (connection, cback) => {
  connection.query("SELECT * FROM products", function(error, results) {
    if (error) throw error;
    console.log("---------------------------------------------------");
    console.log("Products include: ");
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

module.exports = viewProducts;
