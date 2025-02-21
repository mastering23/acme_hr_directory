const client = require('./client.js');

const addDepartment = async (name) => {
  try {
    await client.connect();
    console.log('Connected to the database... ✅');

    const query = 'INSERT INTO department (name) VALUES ($1)';
    const values = [name];
    await client.query(query, values);  
    console.log('Department added successfully...... ✅');
  } catch (err) {
    console.log('Error adding department: ⚠️ ', err);
    throw err; // Rethrow the error to handle it in the server
  } finally {
    await client.end();
    console.log("Disconnected from the database.......❌");
  }
};

module.exports = { addDepartment };  // Export the function
