DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
USE company_db;

-- mysql syntax errors when attempting to insert any table with an id field, but seems to accept 'X_id' without issue.
CREATE TABLE departments (
    department_id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (department_id)
);

CREATE TABLE roles (
    role_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100),
    salary DECIMAL,
    department_id INT,
    -- department_name VARCHAR(30),
    PRIMARY KEY (role_id),
    FOREIGN KEY (department_id) REFERENCES departments(department_id) ON DELETE SET NULL
    -- FOREIGN KEY (department_name) REFERENCES departments(department_name) ON DELETE SET NULL
);

CREATE TABLE employees (
    ee_id INT NOT NULL AUTO_INCREMENT, 
    first_name VARCHAR(50), 
    last_name VARCHAR(50), 
    manager_id INT, 
    -- title VARCHAR(100),
    PRIMARY KEY (ee_id), 
    FOREIGN KEY (manager_id) REFERENCES employees(ee_id) ON DELETE SET NULL
    -- FOREIGN KEY (title) REFERENCES roles(title) ON DELETE SET NULL
    );

-- seeds
INSERT INTO departments (department_id, department_name)
    VALUES 
    ('1', 'Executive'),
    ('2', 'Administration'),
    ('3', 'Clinical');

INSERT INTO roles (role_id, title, salary, department_id)
    VALUES 
    ('1', 'Executive Director', '200000', '1'),
    ('2', 'Chief Financial Officer', '175000', '2'),
    ('3', 'Director of Clinical Operations', '130000', '3'),
    ('4', 'Naturopath', '150000', '3'),
    ('5', 'Medical Assistant', '45000', '3'),
    ('6', 'Chiropractor', '80000', '3'),
    ('7', 'Accupuncturist', '65000', '3'),
    ('8', 'Front Office Assistant', '30000', '2');
    
INSERT INTO employees (ee_id, first_name, last_name, manager_id)
    VALUES 
    ('1', 'Ann', 'Marshall', null),
    ('2', 'Karin', 'Chase', '1'),
    ('3', 'Caitlin', 'Henderson', '1'),
    ('4', 'Kory', 'Gilbert', '3'),
    ('5', 'Margo', 'Hawkins', '4'),
    ('6', 'Eli', 'Rosales', '3'),
    ('7', 'Chandra', 'Carter', '3'),
    ('8', 'Del', 'Savage', '3');


