const client = require('./client.cjs');

const addDepartment = async (name) => {
  try {
    await client.query(
      `INSERT INTO department (name) VALUES ($1)`,
      [name]
    );
    console.log(`Department table: \n INSERT INTO department [ ${name} ] successfully........ ✅`);
  } catch (error) {
    console.error('Error adding department: ⚠️', error);
  } 
};

const fetchAllDepartments = async () => {
  try {
    const { rows: departments } = await client.query('SELECT * FROM department');
    return departments;
  } catch (error) {
    console.error('Error fetching departments: ⚠️', error);
  }
};

const updateDepartment = async (id, name) => {
  try {
    const { rows: updatedDepartment } = await client.query(
      'UPDATE department SET name=$1 WHERE id=$2 RETURNING *',
      [name, id]
    );
    console.log(`Department [ ${id} ] updated successfully........ ✅`);
    return updatedDepartment;
  } catch (error) {
    console.error('Error updating department: ⚠️', error);
  }
};

const deleteDepartment = async (id) => {
  try {
    const { rows: deletedDepartment } = await client.query(
      'DELETE FROM department WHERE id=$1 RETURNING *',
      [id]
    );
    console.log(`Department [ ${id} ] deleted successfully........ ✅`);
    return deletedDepartment;
  } catch (error) {
    console.error('Error deleting department: ⚠️', error);
  }
};

module.exports = { addDepartment, fetchAllDepartments, updateDepartment, deleteDepartment };
