const clientSet = require('./client.js');

const dropTable = async () => {
  await clientSet.query('DROP TABLE IF EXISTS employee, department CASCADE');
};

const createTable = async () => {
  await clientSet.query(`
    CREATE TABLE IF NOT EXISTS department (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    );
  `);

  await clientSet.query(`
    CREATE TABLE IF NOT EXISTS employee (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      department_id INTEGER REFERENCES department(id) ON DELETE SET NULL
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
  
  await clientSet.end();
  console.log('Client disconnecting.....❌');
};

seedAsync();
