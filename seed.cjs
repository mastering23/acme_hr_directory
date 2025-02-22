const client = require('./client.cjs');
const { addDepartment, fetchAllDepartments, updateDepartment, deleteDepartment } = require('./department.cjs');
const { addEmployee, fetchAllEmployees, updateEmployee, deleteEmployee } = require('./employee.cjs');

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
  await addDepartment('Education');  
  await addDepartment('Administration');  
  await addDepartment('Legal');
  await addDepartment('Home Services');

  await addEmployee('Mike', 1);
  await addEmployee('Steve', 2);
  await addEmployee('Sarah', 3);
  await addEmployee('Tommy', 4);
  await addEmployee('Marie', 2);
  await addEmployee('Carlos', 4);
  await addEmployee('Nancy', 1);
  await addEmployee('Nick', 3);

  const allDepartments = await fetchAllDepartments();
  console.log("All Departments:", allDepartments);
 
  const updatedDepartment = await updateDepartment(1, 'HR and Talent Management');
  console.log("Updated Department:", updatedDepartment);

  const deletedDepartment = await deleteDepartment(5);
  console.log("Deleted Department:", deletedDepartment);

  const allEmployees = await fetchAllEmployees();
  console.log("All Employees:", allEmployees);

  const updatedEmployee = await updateEmployee(1, 'Michael', 2);
  console.log("Updated Employee:", updatedEmployee);
  
  const deletedEmployee = await deleteEmployee(2);
  console.log("Deleted Employee:", deletedEmployee);

  await client.end();
  console.log('Client disconnecting.....❌');
};

seedAsync();
