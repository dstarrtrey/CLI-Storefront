DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
  item_id INTEGER(10) AUTO_INCREMENT,
  product_name VARCHAR(30),
  department_name VARCHAR(30),
  price FLOAT(7, 2),
  stock_quantity INTEGER(10),
  PRIMARY KEY (item_id)
);

CREATE TABLE departments (
  department_id INTEGER(10) AUTO_INCREMENT,
  department_name VARCHAR(30),
  over_head_costs FLOAT(10, 2),
  PRIMARY KEY (department_id)
);

insert into products (item_id, product_name, department_name, price, stock_quantity) values (1, 'Juice - Clamato, 341 Ml', 'Books', 38.53, 34);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (2, 'Cheese - Grie Des Champ', 'Jewelry', 30.04, 38);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (3, 'Cranberries - Fresh', 'Toys', 48.89, 83);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (4, 'Bread Base - Gold Formel', 'Baby', 93.91, 35);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (5, 'Cucumber - English', 'Jewelry', 73.54, 88);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (6, 'Wine - Rosso Toscano Igt', 'Tools', 47.05, 88);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (7, 'Beef - Short Loin', 'Music', 22.88, 68);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (8, 'Wine - Chianti Classica Docg', 'Jewelery', 76.67, 88);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (9, 'Napkin - Cocktail,beige 2 - Ply', 'Computers', 93.8, 10);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (10, 'Tea - Herbal - 6 Asst', 'Games', 30.67, 63);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (11, 'Myers Planters Punch', 'Toys', 14.05, 76);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (12, 'Wine - Soave Folonari', 'Home', 43.53, 51);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (13, 'Dill - Primerba, Paste', 'Movies', 33.61, 86);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (14, 'Turnip - White, Organic', 'Garden', 92.25, 92);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (15, 'Beef - Diced', 'Books', 84.61, 16);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (16, 'Beans - Black Bean, Dry', 'Outdoors', 15.57, 42);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (17, 'Mushroom - Crimini', 'Toys', 76.44, 27);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (18, 'Cheese - Ricotta', 'Baby', 26.61, 44);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (19, 'Lettuce - Spring Mix', 'Books', 79.91, 22);
insert into products (product_name, department_name, price, stock_quantity) values ('cHICKEN NUGGE', 'Home', 1.00, 4);

ALTER TABLE products
ADD product_sales FLOAT(10, 2);

INSERT INTO departments (department_name, over_head_costs) VALUES ("Tools", 6900);
INSERT INTO departments (department_name, over_head_costs) VALUES ("Music", 1000);
INSERT INTO departments (department_name, over_head_costs) VALUES ("Jewelry", 16000);
INSERT INTO departments (department_name, over_head_costs) VALUES ("Computers", 220000);
INSERT INTO departments (department_name, over_head_costs) VALUES ("Home", 9200);
INSERT INTO departments (department_name, over_head_costs) VALUES ("Movies", 17000);
INSERT INTO departments (department_name, over_head_costs) VALUES ("Garden", 21000);
INSERT INTO departments (department_name, over_head_costs) VALUES ("Books", 10000);
INSERT INTO departments (department_name, over_head_costs) VALUES ("Baby", 15000);
INSERT INTO departments (department_name, over_head_costs) VALUES ("Toys", 9000);
INSERT INTO departments (department_name, over_head_costs) VALUES ("Outdoors", 13400);
INSERT INTO departments (department_name, over_head_costs) VALUES ("Garden", 11200);

SELECT * FROM departments;
SELECT * FROM products;




