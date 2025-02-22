const client = require('./client.cjs');
const { addDepartment } = require('./department.cjs');
const { addEmployee } = require('./employee.cjs');

const dropTable = async () => {
  await client.query('DROP TABLE IF EXISTS employee');
  await client.query('DROP TABLE IF EXISTS department');
};

const createTable = async () => {
  
  await client.query(`
    CREATE TABLE department (
      id SERIAL PRIMARY KEY,
      name VARCHAR(60) NOT NULL
    );
  `);

  await client.query(`
    CREATE TABLE employee (
      id SERIAL PRIMARY KEY,
      name VARCHAR(60) NOT NULL,
      department_id INTEGER REFERENCES department(id) NOT NULL
    );
  `);
};

const seedAsync = async () => {
  
  await client.connect();
  console.log('Client connecting.....✅');

  await dropTable();
  console.log('Drop tables .....✴️ \n DROP [ employee ] \n DROP [ department ] ');

  await createTable();
  console.log('Creating tables.....✳️ \n TABLE CREATED [ employee ] \n TABLE CREATED [ department ]');

  await addDepartment('Human Resources');
  await addEmployee('Mike', 1);

  await client.end();
  console.log('Client disconnecting.....❌');
};

seedAsync();
