SELECT *
FROM employee_list;

SELECT employee_id, COUNT(id) AS number_employees
FROM employee_list
GROUP BY department_id;
ORDER BY department_id ASC;

-- SELECT employee_id, SUM(id) AS number_employees
-- FROM employee_list
-- ORDER BY last_name ASC;

SELECT department_id, COUNT(id) AS number_departments
FROM department_list
GROUP BY id;
ORDER BY id ASC;

SELECT role_id, COUNT(id) AS number_roles
FROM role_list
GROUP BY id;

SELECT role_title, SUM(id) AS number_titles
FROM role_list
GROUP BY title;
ORDER BY title ASC;