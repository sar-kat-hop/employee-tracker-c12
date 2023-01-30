DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employee_list (
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    department_id INT,
    manager_id INT,
    is_manager BOOLEAN,
    -- PRIMARY KEY(id)
);

CREATE TABLE department_list (
    id INT NOT NULL,
    dept_name VARCHAR(30),
    -- FOREIGN KEY (employee_list.id),
    -- REFERENCES employee(id),
    -- ON DELETE SET NULL
);

CREATE TABLE role_list (
    id INT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    -- FOREIGN KEY (employee_list.id),
    -- REFERENCES employee(id),
    -- ON DELETE SET NULL
);