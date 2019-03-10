var Table = require("cli-table");

//Function for viewing the sales for each department
const salesByDepartment = (con, cb) => {
  var table = new Table({
    chars: {
      top: "═",
      "top-mid": "╤",
      "top-left": "╔",
      "top-right": "╗",
      bottom: "═",
      "bottom-mid": "╧",
      "bottom-left": "╚",
      "bottom-right": "╝",
      left: "║",
      "left-mid": "╟",
      mid: "─",
      "mid-mid": "┼",
      right: "║",
      "right-mid": "╢",
      middle: "│"
    },
    head: [
      "department_id",
      "department_name",
      "over_head_costs",
      "product_sales",
      "total_profit"
    ]
  });
  con.query(
    `SELECT departments.department_id,
     departments.department_name,
     departments.over_head_costs,
     IFNULL(SUM(products.product_sales), 0.00) AS total_sales,
     (IFNULL(SUM(products.product_sales), 0.00) - departments.over_head_costs) AS total_profits
    FROM departments 
    LEFT JOIN products on products.department_name = departments.department_name
    GROUP BY departments.department_id;`,
    (err, results) => {
      if (err) throw err;
      console.log("---------------------------------------------------");
      results.forEach(dept => {
        table.push([
          dept.department_id,
          dept.department_name,
          dept.over_head_costs,
          dept.total_sales,
          dept.total_profits
        ]);
      });
      console.log(table.toString());
      cb();
    }
  );
};

module.exports = salesByDepartment;
