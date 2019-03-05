const chalk = require("chalk");

const processPurchase = (input, connection) => {
  connection.query(
    "SELECT * FROM products WHERE item_id=?",
    [input.purchaseId],
    function(error, results, fields) {
      if (error) throw error;
      const inputAmt = input.quantity;
      const dbAmt = results[0].stock_quantity;
      if (inputAmt > dbAmt) {
        console.log(
          chalk.red(
            "Our apologies. Our stores have insufficient quantity for your request."
          )
        );
        console.log(
          "We have",
          chalk.green(dbAmt),
          chalk.blue(results[0].product_name) + "(s) in stock."
        );
        connection.end();
        return;
      } else {
        connection.query(
          "UPDATE products SET stock_quantity=?, product_sales=? WHERE item_id =?;",
          [
            dbAmt - inputAmt,
            results[0].product_sales + results[0].price * inputAmt,
            input.purchaseId
          ],
          function(err) {
            if (err) throw err;
            console.log(
              chalk.green("Purchase successful!"),
              "You bought",
              chalk.green(inputAmt),
              chalk.blue(results[0].product_name) + chalk.red("(s)")
            );
            console.log(
              "Total cost:",
              chalk.green("$" + (inputAmt * results[0].price).toFixed(2))
            );
            connection.end();
          }
        );
      }
    }
  );
};

module.exports = processPurchase;
