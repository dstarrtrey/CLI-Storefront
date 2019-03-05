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
    `SELECT * FROM departments;
    SELECT department_name, SUM(product_sales) AS total_sales FROM products GROUP BY department_name;`,
    (err, results) => {
      if (err) throw err;
      console.log("---------------------------------------------------");
      results[0].forEach(dept => {
        const salesObj = results[1].find(
          x => x.department_name === dept.department_name
        );
        const totalSales = salesObj.total_sales;
        const totalProfit = totalSales - dept.over_head_costs;
        table.push([
          dept.department_id,
          dept.department_name,
          dept.over_head_costs,
          totalSales,
          totalProfit
        ]);
      });
      console.log(table.toString());
      cb();
    }
  );
};

module.exports = salesByDepartment;
