const inquirer = require("inquirer"); //CLI input/output

const addNewProduct = (connection, cback) => {
  console.log("Please enter some details about the product you are adding.");
  inquirer
    .prompt([
      {
        name: "Name",
        message: "Product name:",
        validate: x => x.length <= 30
      },
      {
        name: "Department",
        message: "Department name:",
        validate: x => x.length <= 30
      },
      {
        name: "Price",
        message: "Price:",
        type: "number"
      },
      {
        name: "Quantity",
        message: "Stock quantity:",
        type: "number"
      }
    ])
    .then(results => {
      connection.query(
        "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES (?, ?, ?, ?)",
        [results.Name, results.Department, results.Price, results.Quantity],
        function(err) {
          if (err) throw err;
          console.log("Product successfully added!");
          console.log(
            "Name:",
            results.Name,
            "| Department:",
            results.Department,
            "| Price:",
            results.Price,
            "| Quantity:",
            results.Quantity
          );
          console.log("---------------------------------------------------");
          cback();
        }
      );
    });
};

module.exports = addNewProduct;
