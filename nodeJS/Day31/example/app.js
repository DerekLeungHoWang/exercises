const pg = require('pg');
const config = {
    user:'howangleung',
    database:'employees',
    password:'postgres',
    host:'localhost',
    port:5432,
    max:10,  //max number of access
    idleTimeoutMillis:30000,
}
const client = new pg.Client(config);
client.connect();
var number =12





////////////
CREATE TABLE stock (
    id SERIAL primary key,
    name VARCHAR(255) not null,
    description VARCHAR(255),
    quantity VARCHAR(255),
    price VARCHAR(255)
);

CREATE TABLE staff (
    employee_id SERIAL primary key,
    fist_name VARCHAR(255) not null,
    last_name VARCHAR(255),
    salary VARCHAR(255),
    contract_length VARCHAR(255)
);

INSERT INTO staff(first_name, last_name,salary, contract_length) VALUES ('Steven', 'King', 1000, 3);
INSERT INTO staff(first_name, last_name,salary, contract_length) VALUES ('Neena', 'Kochhar', 8000, 2);
INSERT INTO staff(first_name, last_name,salary, contract_length) VALUES ('David', 'Austin', 12000, 2);
INSERT INTO staff(first_name, last_name,salary, contract_length) VALUES ('Nancy', 'Greenberg', 3000, 1);
INSERT INTO staff(first_name, last_name,salary, contract_length) VALUES ('Lionel', 'Messi', 3000000, 1);
INSERT INTO staff(first_name, last_name,salary, contract_length) VALUES ('Christiano', 'Ronaldo', 3000000, 1);




//update column name
ALTER TABLE staff
RENAME COLUMN fist_name TO first_name;
//update value
UPDATE staff
SET SALARY = 8000
SET contract_length = 2,
WHERE employee_id = 4;

//update column data type
Alter TABLE staff
ALTER COLUMN contract_length TYPE integer USING contract_length::integer;
Alter TABLE staff
ALTER COLUMN salary TYPE integer USING salary::integer;

