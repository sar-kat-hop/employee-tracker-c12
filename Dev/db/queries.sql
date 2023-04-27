SELECT * FROM employees;

SELECT * FROM departments;

SELECT department_id
FROM employees
GROUP BY department_id;

SELECT dept_name
FROM departments
GROUP BY id;

SELECT title
FROM employees
GROUP BY role_id;

SELECT manager_id
FROM employees
GROUP BY department_id;

