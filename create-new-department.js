const inquirer = require("inquirer"); //CLI input/output

//Function for creating a new department in the database
const createNewDepartment = (connection, cb) => {
  console.log("Please enter some details about the product you are adding.");
  inquirer
    .prompt([
      {
        name: "Department",
        message: "Department name:",
        validate: x => x.length <= 30
      },
      {
        name: "Overhead",
        message: "Overhead costs:",
        type: "number"
      }
    ])
    .then(results => {
      connection.query(
        "INSERT INTO departments (department_name, over_head_costs) VALUES (?, ?);",
        [results.Department, results.Overhead],
        function(err) {
          if (err) throw err;
          console.log("Department successfully created!");
          console.log(
            "Department Name:",
            results.Department,
            "| Overhead Costs:",
            results.Overhead
          );
          console.log("---------------------------------------------------");
          cb();
        }
      );
    });
};

module.exports = createNewDepartment;
