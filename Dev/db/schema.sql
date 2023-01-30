DROP DATABASE IF EXISTS employeeRoster_db;
CREATE DATABASE employeeRoster_db;

USE employeeRoster_db;

CREATE TABLE department_list (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
);
CREATE TABLE role_list (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    dept_name VARCHAR(30) NOT NULL,
    dept_id INT NOT NULL,
    FOREIGN KEY (dept_name) REFERENCES department_list(name),
    FOREIGN KEY (dept_id) REFERENCES department_list(id)
);

CREATE TABLE employee_list (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30),
    title VARCHAR(15) NOT NULL,
    -- is_mgr BOOLEAN,
    role_id INT NOT NULL,
    -- dept_id INT NOT NULL,
    dept_name VARCHAR(30) NOT NULL;
    mgr_id INT NOT NULL,
    -- salary DECIMAL NOT NULL,
    FOREIGN KEY (dept_name) REFERENCES department_list(name),
    FOREIGN KEY (title) REFERENCES role_list(title), 
    FOREIGN KEY (role_id) REFERENCES role_list(id),
    FOREIGN KEY (mgr_id) REFERENCES employee_list(id) -- not sure if this will ref ee's mgr's id or the ee's own id
);

-- FOREIGN KEY () REFERENCES tableName()