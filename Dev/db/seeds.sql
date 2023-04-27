INSERT INTO department_list (id, dept_name)
    VALUES 
    ('1', 'Executive'),
    ('2', 'Administration'),
    ('3', 'Clinical');

INSERT INTO roles (id, title, salary)
    VALUES 
    ('100', 'Executive Director', '200000'),
    ('110', 'Chief Financial Officer', '175000'),
    ('300', 'Director of Clinical Operations', '130000'),
    ('310', 'Naturopath', '150000'),
    ('315', 'Medical Assistant', '45000'),
    ('320', 'Chiropractor', '80000'),
    ('325', 'Accupuncturist', '65000');
    
INSERT INTO employees (id, first_name, last_name, department_id, mgr_id)
    VALUES 
    ('10', 'Ann', 'Marshall', '1', '1'),
    ('12', 'Karin', 'Chase', '1', '1'),
    ('14', 'Caitlin', 'Henderson', '3', '1'),
    ('16', 'Kory', 'Gilbert', '3', '2'),
    ('18', 'Margo', 'Hawkins', '3', '3'),
    ('20', 'Eli', 'Rosales', '3', '2'),
    ('22', 'Chandra', 'Carter', '3', '2');
