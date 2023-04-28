SELECT * FROM employees;

SELECT * FROM departments;

SELECT * FROM roles;

LEFT JOIN department_id ON roles.department_id = departments.id;

LEFT JOIN role_id ON employees.role_id = roles.id;

JOIN dept_name ON roles.dept_name = departments.dept_name;

RIGHT JOIN department_id on employees.department_id = departments.id;