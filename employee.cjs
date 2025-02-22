const client = require("./client.cjs");

const addEmployee = async (name, departmentId) => {
  try {
    await client.query(
      "INSERT INTO employee(name, department_id) VALUES($1, $2)",
      [name, departmentId]
    );
    console.log(
      `Employee table: \n INSERT INTO employee [ ${name} ] successfully........ ✅`
    );
  } catch (err) {
    console.log("Error adding employee: ⚠️", err);
  }
};

const fetchAllEmployees = async () => {
  try {
    const { rows: fetchEmployee } = await client.query("SELECT * FROM employee");
    return fetchEmployee; 
  } catch (err) {
    console.log("Error fetching employees: ⚠️", err);
  }
};

const updateEmployee = async (id, name, departmentId) => {
  try {
    const { rows: updatedEmployee } = await client.query(
      "UPDATE employee SET name=$1, department_id=$2 WHERE id=$3 RETURNING *",
      [name, departmentId, id]
    );
    console.log(`Employee [ ${id} ] updated successfully........ ✅`);
    return updatedEmployee;
  } catch (err) {
    console.log("Error updating employee: ⚠️", err);
  }
};

const deleteEmployee = async (id) => {
  try {
    const { rows: deletedEmployee } = await client.query(
      "DELETE FROM employee WHERE id=$1 RETURNING *",
      [id]
    );
    console.log(`Employee [ ${id} ] deleted successfully........ ✅`);
    return deletedEmployee;
  } catch (err) {
    console.log("Error deleting employee: ⚠️", err);
  }
};

module.exports = { addEmployee, fetchAllEmployees, updateEmployee, deleteEmployee };
