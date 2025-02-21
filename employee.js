const client = require('./client.js');

const addEmployee = async (name, departmentId) => {
  try {
    await client.connect();
    console.log("Connected to the database... ✅");

    const query = `INSERT INTO employee(name, department_id) VALUES($1,$2)`;
    const values = [name, departmentId];
    await client.query(query, values);
    console.log("Employee added successfully.......");
  } catch (err) {
    console.log("Error adding employee: ⚠️", err);
  } finally {
    await client.end();
    console.log("Disconnected from the database.......❌");
  }
};


addEmployee('Jim', 1); 

