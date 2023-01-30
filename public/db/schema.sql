DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employee_list (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    dept_id INT NOT NULL,
    mgr_id INT NOT NULL,
);

-- CREATE TABLE employee_list (
--     id INT NOT NULL,
--     first_name VARCHAR (30),
--     last_name VARCHAR (30),
--     role_id INT,
--     department_id INT,
--     manager_id INT,
--     is_manager BOOLEAN,
--     PRIMARY KEY(id)
-- );

CREATE TABLE department_list (
    id INT AUTO_INCREMENT NOT NULL
--     employee_id INT NOT NULL,
--     dept_name VARCHAR (30),
--     -- FOREIGN KEY (employee_id)
--     -- REFERENCES employee_list(id)
--     -- ON DELETE SET NULL
);

CREATE TABLE role_list (
    id INT AUTO_INCREMENT NOT NULL
--     employee_id INT NOT NULL,
--     title VARCHAR (30),
--     salary INT NOT NULL,
--     -- FOREIGN KEY (employee_id)
--     -- REFERENCES employee_list(id)
--     -- ON DELETE SET NULL
);