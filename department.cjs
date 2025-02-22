const client = require('./client.cjs');

const addDepartment = async (name) => {
  try {
    await client.query(
      `INSERT INTO department (name) VALUES ($1)`,
      [name]
    );
    console.log(`Departament table: \n INSERT INTO department[ ${name} ] successfully........ ✅`);
  } catch (error) {
    console.error('Error adding department:⚠️', error);
  } 
};


module.exports = { addDepartment };
