CREATE DATABASE employeeRoster_db;

DROP DATABASE IF EXISTS employeeRoster_db;
CREATE DATABASE employeeRoster_db;

USE employeeRoster_db;

-- SELECT DATABASE();

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL
    ON DELETE SET NULL
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    dept_name VARCAR(30),
    FOREIGN KEY (department_id) REFERENCES departments(id),
    FOREIGN KEY (dept_name) REFERENCES departments(dept_name)
    ON DELETE SET NULL
);

CREATE_TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    department_id VARCHAR(30),
    role_id INT,
    manager_id INT,
    title VARCHAR(30),
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (manager_id) REFERENCES employees(id),
    FOREIGN KEY (title) REFERENCES roles(title)
    ON DELETE SET NULL
);
