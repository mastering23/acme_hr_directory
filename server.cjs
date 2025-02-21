const express = require("express");
const client = require("./client.cjs"); 
const addDepartment  = require("./department.cjs");
const  addEmployee  = require("./employee.cjs");

app.get('/',(req , res) =>{
  console.log('Server is working...');
})

// const rootPath = "api/employee";
// const departmentPath = "api/department";

// app.use(express.json());

// app.get(rootPath, async (req, res) => {
//   const { department } = req.query;
//   try {
//     await client.connect();
//     console.log("Connected to the database... ✅");

//     let query = `SELECT * FROM employee`;
//     const values = [];
//     if (department) {
//       query += ` WHERE department_id = (SELECT id FROM department WHERE name = $1)`;
//       values.push(department);
//     }

//     const result = await client.query(query, values);
//     res.json(result.rows);  
//   } catch (err) {
//     res.status(500).send(`Error fetching employees: ${err.message}`);
//   } finally {
//     await client.end();
//     console.log("Disconnected from the database... ❌");
//   }
// });


// app.post(rootPath, async (req, res) => {
//   const { name, departmentId } = req.body;  
//   try {
//     await addEmployee(name, departmentId);
//     res.status(201).send(`Employee ${name} added to department ${departmentId}`);
//   } catch (err) {
//     res.status(500).send(`Error adding employee: ${err.message}`);
//   }
// });

// app.delete(`${rootPath}/:id`, async (req, res) => {
//   const { id } = req.params;
//   try {
//     await client.connect();
//     const query = `DELETE FROM employee WHERE id = $1`;
//     await client.query(query, [id]);
//     res.send(`Employee with ID ${id} deleted`);
//   } catch (err) {
//     res.status(500).send(`Error deleting employee: ${err.message}`);
//   } finally {
//     await client.end();
//     console.log("Disconnected from the database... ❌");
//   }
// });


// app.put(`${rootPath}/:id`, async (req, res) => {
//   const { id } = req.params;
//   const { name, departmentId } = req.body;
//   try {
//     await client.connect();
//     const query = `UPDATE employee SET name = $1, department_id = $2 WHERE id = $3`;
//     await client.query(query, [name, departmentId, id]);
//     res.send(`Employee with ID ${id} updated`);
//   } catch (err) {
//     res.status(500).send(`Error updating employee: ${err.message}`);
//   } finally {
//     await client.end();
//     console.log("Disconnected from the database... ❌");
//   }
// });


// app.post(departmentPath, async (req, res) => {
//   const { name } = req.body; 
//   try {
//     await addDepartment(name);
//     res.status(201).send(`Department ${name} added successfully`);
//   } catch (err) {
//     res.status(500).send(`Error adding department: ${err.message}`);
//   }
// });


const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

