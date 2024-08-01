/* eslint-disable no-undef */
const { getAllUsers } = require('./db/users.cjs');
const express = require('express');
const app = express();

const client = require('./db/client.cjs');
client.connect();

app.use(express.static('dist'));

// app.get('/', (req, res, next) => {
//   res.sendFile(__dirname + '/dist/index.html');
// });

app.get('/api/v1/users', async(req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch(err) {
    console.log(err);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));