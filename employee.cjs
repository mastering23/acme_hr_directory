const client = require('./client.cjs');
const { addDepartment } = require('./department.cjs');

const addEmployee = async (name,departmentId) => {
  try {    
    await client.query(
      'INSERT INTO employee(name, department_id) VALUES($1,$2)',
      [name,departmentId]
    );
    console.log('Employee table : \n INSERT INTO employee [ ${name} ] successfully........ ✅');
  } catch (err) {
    console.log("Error adding employee: ⚠️", err);
  } 
};


module.exports = { addEmployee };  
