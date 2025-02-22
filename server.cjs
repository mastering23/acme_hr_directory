const express = require('express');
const app = express();
const client = require('./client.cjs');

client.connect();

app.use(express.json());

app.get('/api/v1/', (req, res ,next) => {
  console.log('Server is working...');
  res.send('Welcome to ACME HUMAN RESOURCES');
  next();
});

app.get('/api/v1/employee', (req, res ,next) => {
  console.log(req.body);
  res.send('Employee added');
  next();
});
app.post('/api/v1/employee', (req, res ,next) => {
  console.log(req.body);
  res.send('Employee added');
  next();
});

app.put('/api/v1/employee', (req, res ,next) => {
  console.log(req.body);
  res.send('Employee updated');
  next();
});

app.delete('/api/v1/employee', (req, res ,next) => {
  console.log(req.body);
  res.send('Employee deleted');
  next();
});

app.post('/api/v1/department', (req, res ,next) => {
  console.log(req.body);
  res.send('Department added');
  next();
});

app.put('/api/v1/department', (req, res ,next) => {
  console.log(req.body);
  res.send('Department updated');
  next();
});

app.delete('/api/v1/department', (req, res ,next) => {
  console.log(req.body);
  res.send('Department deleted');
  next();
});

const port = 3005;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});