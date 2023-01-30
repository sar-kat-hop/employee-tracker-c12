INSERT INTO department_list (id, dept_name)
    VALUES 
    (1, "Executive"),
    (2, "Management"),
    (3, "Administrative"),
    (4, "Security"),
    (5, "Medical");

INSERT INTO role_list (id, title, salary)
    VALUES 
    (1, "Captain", 5000),
    (2, "Cmdr", 2500),
    (3, "Lt", 2350),
    (4, "Lt Cmdr", 2250),
    (4, "Lt Cmdr", 2250),
    (6, "Counselor", 2200),
    (7, "Doctor", 3500);
    
INSERT INTO employee_list (id, first_name, last_name, title, department, mgr_id)
    VALUES 
    (1, "Jean-Luc", "Picard", "Cpt", "Executive", 1),
    (2, "William", "Riker", "Cmdr", "Management", 1),
    (3, "Worf", "", "Lt", "Security", 1),
    (4, "Data", "", "Lt Cmdr", "Administrative", 2),
    (5, "Geordi", "La Forge", "Lt Cmdr", "Administrative", 2),
    (6, "Deanna", "Troi", "Counselor", "Medical", 1),
    (7, "Beverly", "Crusher", "Doctor", "Medical", 1);


