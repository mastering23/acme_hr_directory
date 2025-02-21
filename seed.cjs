const clientSet = require('./client.cjs');
const { addDepartment } = require('./department.cjs');
const { addEmployee } = require('./employee.cjs');

const dropTable = async () => {
  await clientSet.query('DROP TABLE IF EXISTS employee');
  await clientSet.query('DROP TABLE IF EXISTS department'); 
};

const createTable = async () => {
  await clientSet.query(`
    CREATE TABLE IF NOT EXISTS department (
      id SERIAL PRIMARY KEY,
      name VARCHAR(60) NOT NULL
    );
  `);

  await clientSet.query(`
    CREATE TABLE IF NOT EXISTS employee (
      id SERIAL PRIMARY KEY,
      name VARCHAR(60) NOT NULL,
      department_id INTEGER REFERENCES department(id) NOT NULL
    );
  `);
};

const seedAsync = async () => {
  await clientSet.connect();
  console.log('Client connecting.....✅');
  
  await dropTable();
  console.log('Drop tables .....✴️');

  await createTable();
  console.log('Creating tables.....✳️');

  await addDepartment('Human Resources');
  console.log('Department was created.....✳️');
  await addEmployee('Mike',1);
  console.log('Employee was created.....✳️');
  
  await clientSet.end();
  console.log('Client disconnecting.....❌');
};

seedAsync();
