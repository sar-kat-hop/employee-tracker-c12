# Employee Database (Employee Tracker CMS)

## About

This is a simple company roster tracking app using Node, MySQL, console.table, and Inquirer. Users can view employees, departments, and roles, and add employees, departments, and roles from the command line. 

## Demonstration

[Walkthrough Video](https://drive.google.com/file/d/1aeZFrtw1Aaku55WTVriSVg8254MEUOzd/view)

## Installation and Use

To use this app, you'll need a way to connect to the mysql database, such as MySQL Shell. Visit [MySQL.com](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install.html) for information on installing the shell for your OS. The instructions below use MySQL Shell to connect to the database.

1. Download the repo. All files, including the package.json and package-lock.json, are included. 
2. Navigate to the repo's Dev/ folder in your terminal.
3. Type `mysql -u root -p` to enter the shell.
4. The company_db database has no password, so simply press Enter when prompted to enter the password.
5. Type `SOURCE ./db/schema.sql;` to connect to the database and seed it with some data. 
6. Leave the shell running and open another terminal window, navigating to the Dev/ folder of the repo.
7. Type `node index.js` to start the app.
8. Choose what you'd like to do in the main menu. After every action, you'll be asked if you'd like to return to the menu to continue using the app. 

## Contributions

The following resources were used to develop and troubleshoot this project:

- [Console.table docs](https://www.npmjs.com/package/console.table)
- [Database.guide: Fix "Error 1136 (21S01): Column count doesn't match value count at row 1](https://database.guide/fix-error-1136-21s01-column-count-doesnt-match-value-count-at-row-1-when-inserting-data-in-mysql/#:~:text=This%20error%20typically%20occurs%20when,columns%2C%20or%20not%20enough%20columns.)
- [DatabaseStar: How to resolve column count doesn't match at row 1 error](https://www.databasestar.com/column-count-doesnt-match-value-count/#:~:text=To%20resolve%20this%20%E2%80%9CColumn%20count,clause%20matches%20the%20column%20list.)
- [MySQL docs: Creating view statement](https://dev.mysql.com/doc/refman/8.0/en/create-view.html)
- [MySQL docs: SHOW TABLES statement](https://dev.mysql.com/doc/refman/8.0/en/show-tables.html)
- [MySQL Tutorial: MySQL cheat sheet](https://www.mysqltutorial.org/mysql-cheat-sheet.aspx)
- [Node-mysql2 docs: Promise-wrappers](https://github.com/sidorares/node-mysql2/blob/master/documentation/Promise-Wrapper.md)
- [Random Name Generator](https://randomwordgenerator.com/name.php)
- [StackOverflow: Cannot access 'variable' before initialization](https://stackoverflow.com/questions/56318460/cannot-access-variable-name-before-initialization)
- [StackOverflow: Error 1049 (42000): Unknown database](https://stackoverflow.com/questions/12118627/error-1049-42000-unknown-database)
- [StackOverflow: Unknown column in 'field list' mysql error](https://stackoverflow.com/questions/16910652/error-1054-42s22-unknown-column-in-field-list)
- [W3Schools: SQL AUTO INCREMENT Field](https://www.w3schools.com/sql/sql_autoincrement.asp)