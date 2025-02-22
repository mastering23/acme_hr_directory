const express = require('express');
const app = express();
const client = require('./client.cjs');
client.connect();

app.use(express.json());

app.get('/', (req, res) => {
  console.log('Server is working...');
  res.send('Hello, World!');
});

app.post('/api/v1/employee', (req, res) => {
  console.log(req.body);
  res.send('Employee added');
});

app.put('/api/v1/employee', (req, res) => {
  console.log(req.body);
  res.send('Employee updated');
});

app.delete('/api/v1/employee', (req, res) => {
  console.log(req.body);
  res.send('Employee deleted');
});

app.post('/api/v1/department', (req, res) => {
  console.log(req.body);
  res.send('Department added');
});

app.put('/api/v1/department', (req, res) => {
  console.log(req.body);
  res.send('Department updated');
});

app.delete('/api/v1/department', (req, res) => {
  console.log(req.body);
  res.send('Department deleted');
});

const port = 3005;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});