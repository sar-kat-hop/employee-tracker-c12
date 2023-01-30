INSERT INTO employee_list (id, first_name, last_name, role_id, department_id, manager_id, is_manager)
    VALUES (001, "Jean-Luc", "Picard", 001, 001, 000, true),
    (002, "William", "Riker", 002, 002, 001, false),
    (003, "Worf", "", 003, 005, 001, false),
    (004, "Data", "", 004, 003, 001, false),
    (005, "Geordi", "La Forge", 005, 003, 001, false),
    (006, "Deanna", "Troi", 006, 006, 001, false),
    (007, "Beverly", "Crusher", 007, 006, 001, false);

INSERT INTO department_list (id, dept_name)
    VALUES (001, "Executive"),
    (002, "Management"),
    (003, "Administrative"),
    (005, "Security"),
    (006, "Medical");

INSERT INTO role_list (id, title, salary, department_id)
    VALUES (001, "Captain", 5000, 000),
    (002, "Cmdr.", 2500, 002),
    (003, "Lt.", 2250, 005),
    (004, "Lt. Cmdr.", 2250, 003),
    (005, "Lt. Cmdr.", 2350, 003),
    (006, "Counselor", 3000, 006),
    (007, "Doctor", 2150, 006);