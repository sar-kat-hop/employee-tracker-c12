SELECT * FROM employees;

JOIN department_id ON employees.department_id = departments.id;

JOIN role_id ON employees.role_id = roles.id;

JOIN title on employees.title = roles.title;

-- SELECT * FROM departments;

-- SELECT department_id
-- FROM employees
-- GROUP BY department_id;

-- SELECT dept_name
-- FROM departments
-- GROUP BY id;

-- SELECT title
-- FROM employees
-- GROUP BY role_id;

-- SELECT manager_id
-- FROM employees
-- GROUP BY department_id;

