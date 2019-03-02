const processPurchase = async (input, connection) => {
  connection.query(
    `SELECT * FROM products WHERE item_id = ${input.purchaseId}`,
    function(error, results, fields) {
      if (error) throw error;
      if (input.quantity > results.stock_quantity) {
        console.log(
          chalk.red(
            "Our apologies. Our stores have insufficient quantity for your request."
          )
        );
        return;
      } else {
        connection.query(
          `UPDATE products SET stock_quantity=${results.stock_quantity -
            input.quantity} WHERE item_id = ${input.purchaseId}`,
          function(error, results, fields) {
            if (error) throw error;
          }
        );
        console.log(chalk.green("Purchase successful!"));
      }
    }
  );
};
module.exports(processPurchase);
