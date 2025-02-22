const express = require('express');
const app = express();
const client = require('./client.cjs');

const { addEmployee, fetchAllEmployees, updateEmployee, deleteEmployee } = require('./employee.cjs');
const { addDepartment, fetchAllDepartments, updateDepartment, deleteDepartment } = require('./department.cjs');

client.connect();

app.use(express.json());

// Root route
app.get('/api/v1/', (req, res) => {
  res.send('Welcome to ACME HUMAN RESOURCES');
});

// Get all employees
app.get('/api/v1/employees', async (req, res, next) => {
  try {
    const allEmployees = await fetchAllEmployees();
    res.json(allEmployees);
  } catch (err) {
    next(err);
  }
});

// Add a new employee
app.post('/api/v1/employee', async (req, res, next) => {
  const { name, departmentId } = req.body;
  try {
    await addEmployee(name, departmentId);
    res.status(201).send('Employee added successfully');
  } catch (err) {
    next(err);
  }
});

// Update an employee by id
app.put('/api/v1/employee/:id', async (req, res, next) => {
  const { id } = req.params;
  const { name, departmentId } = req.body;
  try {
    const updatedEmployee = await updateEmployee(id, name, departmentId);
    res.status(200).json(updatedEmployee);
  } catch (err) {
    next(err);
  }
});

// Delete an employee by id
app.delete('/api/v1/employee/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedEmployee = await deleteEmployee(id);
    res.status(200).json(deletedEmployee);
  } catch (err) {
    next(err);
  }
});

// Get all departments
app.get('/api/v1/departments', async (req, res, next) => {
  try {
    const allDepartments = await fetchAllDepartments();
    res.json(allDepartments);
  } catch (err) {
    next(err);
  }
});

// Add a new department
app.post('/api/v1/department', async (req, res, next) => {
  const { name } = req.body;
  try {
    await addDepartment(name);
    res.status(201).send('Department added successfully');
  } catch (err) {
    next(err);
  }
});

// Update a department by id
app.put('/api/v1/department/:id', async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedDepartment = await updateDepartment(id, name);
    res.status(200).json(updatedDepartment);
  } catch (err) {
    next(err);
  }
});

// Delete a department by id
app.delete('/api/v1/department/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedDepartment = await deleteDepartment(id);
    res.status(200).json(deletedDepartment);
  } catch (err) {
    next(err);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'An error occurred on the server.' });
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
