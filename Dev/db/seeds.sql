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
    ('325', 'Accupuncturist', '65000'),
    ('305', 'Front Office Assistant', '30000');
    
INSERT INTO employees (id, first_name, last_name, department_id, role_id, manager_id, title)
    VALUES 
    ('10', 'Ann', 'Marshall', '1', '100', 'null', 'Executive Director'),
    ('12', 'Karin', 'Chase', '1', '110', '1', 'Chief Financial Officer'),
    ('14', 'Caitlin', 'Henderson', '3', '300', '1', 'Director of Clinical Operations'),
    ('16', 'Kory', 'Gilbert', '3', '310', '2', 'Naturopath'),
    ('18', 'Margo', 'Hawkins', '3', '315', '3', 'Medical Assistant'),
    ('20', 'Eli', 'Rosales', '3', '320', '2', 'Chiropractor'),
    ('22', 'Chandra', 'Carter', '3', '325', '2', 'Accupuncturist'),
    ('24', 'Del', 'Savage', '3', '305', '3');
