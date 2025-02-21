const client = require('./client.cjs');
const { addDepartment } = require('./department.cjs');

const addEmployee = async (name, departmentId) => {
  try {    
    await client.query(
      `INSERT INTO employee(name, department_id) VALUES($1,$2)`,
      [name,departmentId]
    );
    console.log("Employee added successfully........ ✅");
  } catch (err) {
    console.log("Error adding employee: ⚠️", err);
  } finally {
    await client.end();
    console.log("Disconnected from the database.......❌");
  }
};

module.exports = { addEmployee };  
