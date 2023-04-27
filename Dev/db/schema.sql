CREATE DATABASE employeeRoster_db;

DROP DATABASE IF EXISTS employeeRoster_db;
CREATE DATABASE employeeRoster_db;

USE employeeRoster_db;

SELECT DATABASE();

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id)
    ON DELETE SET NULL
);

CREATE_TABLE employees (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    department_id VARCHAR(30),
    role_id INT,
    manager_id INT,
    title VARCHAR(30),
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (manager_id) REFERENCES employees(id),
    FOREIGN KEY (title) REFERENCES roles(title)
);
