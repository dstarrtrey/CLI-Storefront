require("dotenv").config();
const inquirer = require("inquirer"); //CLI input/output
const mysql = require("mysql");
const salesByDepartment = require("./sales-by-department.js"); //Function for viewing the sales for each department
const createNewDepartment = require("./create-new-department.js"); //Function for creating a new department in the database

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DATABASE,
  multipleStatements: true
});

connection.connect(err => {
  if (err) throw err;
  const inquire = () => {
    inquirer
      .prompt([
        {
          name: "Select",
          type: "list",
          choices: [
            "View Product Sales by Department",
            "Create New Department",
            "Exit"
          ]
        }
      ])
      .then(response => {
        switch (response.Select) {
          case "View Product Sales by Department":
            console.log("View Product Sales by Department");
            salesByDepartment(connection, inquire);
            break;
          case "Create New Department":
            console.log("Create New Department");
            createNewDepartment(connection, inquire);
            break;
          case "Exit":
            console.log("Connection ended.");
            connection.end();
            break;
        }
      });
  };
  inquire();
});
