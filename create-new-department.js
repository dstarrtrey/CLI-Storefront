//Function for creating a new department in the database
const createNewDepartment = (connection, cb) => {
  connection.query("SELECT * FROM products", function(error, results) {
    if (error) throw error;
    console.log("---------------------------------------------------");
    console.log("Products include: ");
    results.forEach(result => {
      console.log(
        "id:",
        result.item_id,
        "| name:",
        result.product_name,
        "| price:",
        "$" + result.price,
        "| quantity:",
        result.stock_quantity
      );
    });
    console.log("---------------------------------------------------");
    cb();
  });
};

module.exports = createNewDepartment;
